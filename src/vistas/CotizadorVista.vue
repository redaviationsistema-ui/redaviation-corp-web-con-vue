<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  mensajeConfiguracionSupabase,
  supabase,
  supabaseConfigurado,
} from '../supabase'

const route = useRoute()
const cargando = ref(true)
const enviando = ref(false)
const errorMensaje = ref('')
const mensajeExito = ref(false)
const vistaPrevia = ref(false)
const rutaTipo = ref('NATIONAL')
const aeronaves = ref([])
const aeropuertosNacionales = ref([])
const aeropuertosInternacionales = ref([])
const fechasBloqueadas = ref([])

const contacto = reactive({
  nombre: '',
  correo: '',
  telefono: '',
  tipoVuelo: 'Private Jet',
})

const rutaVacia = () => ({
  id: crypto.randomUUID(),
  fromCountry: '',
  fromState: '',
  fromCity: '',
  fromAirport: '',
  toCountry: '',
  toState: '',
  toCity: '',
  toAirport: '',
  passengers: 1,
  aircraft_id: '',
  start_date: '',
  end_date: '',
})

const rutas = ref([rutaVacia()])

const normalizar = (valor) =>
  (valor || '')
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toUpperCase()

const numero = (valor, respaldo = 0) => {
  const resultado = Number(valor)
  return Number.isFinite(resultado) ? resultado : respaldo
}

const codigoAeropuerto = (aeropuerto) =>
  (aeropuerto?.iata || aeropuerto?.IATA || aeropuerto?.aeropuerto || '').toString().trim()

const todosAeropuertos = computed(() => [
  ...aeropuertosNacionales.value.map((aeropuerto) => ({
    origen: 'NATIONAL',
    aeropuerto: aeropuerto.AEROPUERTO,
    iata: (aeropuerto.IATA || aeropuerto.iata || '').toUpperCase(),
    ciudad: aeropuerto.CIUDAD,
    estado: aeropuerto.ESTADO,
    country: 'MEXICO',
    lat: aeropuerto.LATITUDE,
    lng: aeropuerto.LONGITUDE,
  })),
  ...aeropuertosInternacionales.value.map((aeropuerto) => ({
    origen: 'INTERNATIONAL',
    aeropuerto: aeropuerto.AEROPUERTO,
    iata: (aeropuerto.IATA || aeropuerto.iata || '').toUpperCase(),
    ciudad: aeropuerto.CIUDAD,
    estado: aeropuerto.ESTADO || '',
    country: aeropuerto.COUNTRY,
    lat: aeropuerto.LATITUDE,
    lng: aeropuerto.LONGITUDE,
  })),
])

const aeropuertosValidos = computed(() =>
  todosAeropuertos.value.filter((aeropuerto) => aeropuerto.origen === rutaTipo.value),
)

const estados = computed(() =>
  [...new Set(aeropuertosNacionales.value.map((item) => item.ESTADO).filter(Boolean))].sort(),
)

const paises = computed(() =>
  [...new Set(aeropuertosInternacionales.value.map((item) => item.COUNTRY).filter(Boolean))].sort(),
)

const aeronaveSeleccionada = computed(() =>
  aeronaves.value.find(
    (aeronave) => String(aeronave.id) === String(rutas.value[0]?.aircraft_id),
  ),
)

const flotaFiltrada = computed(() => {
  const mapa = {
    'Private Jet': 'Jet Ejecutivo',
    Helicopter: 'Helicóptero',
    'Air Ambulance': 'Jet Ejecutivo',
    Cargo: 'Turbohélice',
  }
  const tipo = mapa[contacto.tipoVuelo]
  const filtrada = aeronaves.value.filter((aeronave) => normalizar(aeronave.aircraft_type) === normalizar(tipo))
  return filtrada.length ? filtrada : aeronaves.value
})

function ciudadesPorEstado(estado) {
  return [
    ...new Set(
      aeropuertosValidos.value
        .filter((aeropuerto) => normalizar(aeropuerto.estado) === normalizar(estado))
        .map((aeropuerto) => aeropuerto.ciudad)
        .filter(Boolean),
    ),
  ].sort()
}

function ciudadesPorPais(pais) {
  return [
    ...new Set(
      aeropuertosValidos.value
        .filter((aeropuerto) => normalizar(aeropuerto.country) === normalizar(pais))
        .map((aeropuerto) => aeropuerto.ciudad)
        .filter(Boolean),
    ),
  ].sort()
}

function aeropuertosPorCiudad(pais, estado, ciudad) {
  if (!ciudad) return []

  return aeropuertosValidos.value.filter((aeropuerto) => {
    if (rutaTipo.value === 'NATIONAL') {
      return (
        normalizar(aeropuerto.estado) === normalizar(estado) &&
        normalizar(aeropuerto.ciudad) === normalizar(ciudad)
      )
    }

    return (
      normalizar(aeropuerto.country) === normalizar(pais) &&
      normalizar(aeropuerto.ciudad) === normalizar(ciudad)
    )
  })
}

function obtenerAeronave(id) {
  return aeronaves.value.find((aeronave) => String(aeronave.id) === String(id))
}

function obtenerAeropuerto(valor) {
  return todosAeropuertos.value.find(
    (aeropuerto) =>
      normalizar(codigoAeropuerto(aeropuerto)) === normalizar(valor) ||
      normalizar(aeropuerto.aeropuerto) === normalizar(valor),
  )
}

function encontrarAeropuerto(item, direccion) {
  const valor = direccion === 'from' ? item.fromAirport : item.toAirport
  const ciudad = direccion === 'from' ? item.fromCity : item.toCity
  const estado = direccion === 'from' ? item.fromState : item.toState
  const pais = direccion === 'from' ? item.fromCountry : item.toCountry

  return (
    obtenerAeropuerto(valor) ||
    todosAeropuertos.value.find(
      (aeropuerto) =>
        normalizar(aeropuerto.ciudad) === normalizar(ciudad) &&
        (!estado || normalizar(aeropuerto.estado) === normalizar(estado)) &&
        (!pais || normalizar(aeropuerto.country) === normalizar(pais)),
    )
  )
}

function aeropuertoBase(aeronaveId) {
  const aeronave = obtenerAeronave(aeronaveId)
  if (!aeronave) return null

  const iata = normalizar(aeronave.iata || aeronave.home_base)
  return (
    todosAeropuertos.value.find(
      (aeropuerto) => normalizar(codigoAeropuerto(aeropuerto)) === iata,
    ) ||
    todosAeropuertos.value.find(
      (aeropuerto) =>
        normalizar(aeropuerto.ciudad) === normalizar(aeronave.ciudad) &&
        (!aeronave.estado || normalizar(aeropuerto.estado) === normalizar(aeronave.estado)),
    )
  )
}

function mismaUbicacion(izquierda, derecha) {
  if (!izquierda || !derecha) return false
  return (
    normalizar(codigoAeropuerto(izquierda)) === normalizar(codigoAeropuerto(derecha)) ||
    normalizar(izquierda.aeropuerto) === normalizar(derecha.aeropuerto) ||
    (normalizar(izquierda.ciudad) === normalizar(derecha.ciudad) &&
      normalizar(izquierda.estado) === normalizar(derecha.estado) &&
      normalizar(izquierda.country) === normalizar(derecha.country))
  )
}

function aRadianes(grados) {
  return (grados * Math.PI) / 180
}

function distanciaMillasNauticas(latitud1, longitud1, latitud2, longitud2) {
  const radio = 6371
  const diferenciaLatitud = aRadianes(latitud2 - latitud1)
  const diferenciaLongitud = aRadianes(longitud2 - longitud1)
  const calculo =
    Math.sin(diferenciaLatitud / 2) ** 2 +
    Math.cos(aRadianes(latitud1)) *
      Math.cos(aRadianes(latitud2)) *
      Math.sin(diferenciaLongitud / 2) ** 2

  return (radio * 2 * Math.atan2(Math.sqrt(calculo), Math.sqrt(1 - calculo))) / 1.852
}

function horasMinimas(aeronave, distancia) {
  const configuradas = numero(aeronave?.minimum_hours, 0)
  if (configuradas > 0) return configuradas

  const velocidad = numero(aeronave?.cruise_speed_knots)
  if (distancia < 150) return 0.6
  if (distancia < 300) return 0.75
  if (distancia < 500) return 1
  if (velocidad < 200) return 1.5
  if (velocidad < 300) return 1.25
  if (velocidad < 450) return 1
  if (velocidad < 600) return 1.25
  return 1.5
}

const vueloInternacional = computed(
  () =>
    rutaTipo.value === 'INTERNATIONAL' ||
    rutas.value.some((item) => {
      const origen = obtenerAeropuerto(item.fromAirport)
      const destino = obtenerAeropuerto(item.toAirport)
      return origen && destino && normalizar(origen.country) !== normalizar(destino.country)
    }),
)

function calcularTramo(item) {
  const aeronave = obtenerAeronave(item.aircraft_id || rutas.value[0]?.aircraft_id)
  const origen = encontrarAeropuerto(item, 'from')
  const destino = encontrarAeropuerto(item, 'to')

  if (!aeronave || !origen || !destino) return { listo: false, horas: 0, millas: 0, costo: 0 }

  const coordenadas = [origen.lat, origen.lng, destino.lat, destino.lng].map(Number)
  if (coordenadas.some((valor) => !Number.isFinite(valor))) {
    return { listo: false, horas: 0, millas: 0, costo: 0 }
  }

  const distancia = distanciaMillasNauticas(...coordenadas)
  const distanciaAjustada = distancia * (vueloInternacional.value ? 1.15 : 1.12)
  const velocidad = numero(aeronave.cruise_speed_knots)
  if (!velocidad) return { listo: false, horas: 0, millas: 0, costo: 0 }

  const tiempoAire = distanciaAjustada / velocidad
  const margen =
    distanciaAjustada < 300 ? 0.25 : distanciaAjustada < 600 ? 0.35 : distanciaAjustada < 1000 ? 0.45 : 0.5
  let horas = Math.ceil((tiempoAire + margen) * 4) / 4
  horas = Math.max(horas, horasMinimas(aeronave, distanciaAjustada))

  return {
    listo: true,
    horas,
    millas: Number(distancia.toFixed(1)),
    costo: Number((horas * numero(aeronave.rental_price_usd)).toFixed(2)),
  }
}

const rutasValidas = computed(() =>
  rutas.value.filter(
    (item) =>
      item.fromAirport &&
      item.toAirport &&
      item.aircraft_id &&
      Number(item.passengers) > 0,
  ),
)

const rutasFacturables = computed(() => {
  if (!rutasValidas.value.length) return []

  const resultado = []
  const primera = rutasValidas.value[0]
  const ultima = rutasValidas.value[rutasValidas.value.length - 1]
  const base = aeropuertoBase(primera.aircraft_id)

  if (base && !mismaUbicacion(encontrarAeropuerto(primera, 'from'), base)) {
    resultado.push({
      id: 'reposicionamiento',
      aircraft_id: primera.aircraft_id,
      fromAirport: codigoAeropuerto(base),
      toAirport: primera.fromAirport,
      passengers: 1,
      positioning: true,
      positioningType: 'repositioning',
    })
  }

  resultado.push(...rutasValidas.value)

  if (base && !mismaUbicacion(encontrarAeropuerto(ultima, 'to'), base)) {
    resultado.push({
      id: 'regreso-base',
      aircraft_id: ultima.aircraft_id,
      fromAirport: ultima.toAirport,
      toAirport: codigoAeropuerto(base),
      passengers: 1,
      positioning: true,
      positioningType: 'return_to_base',
    })
  }

  return resultado
})

const desgloses = computed(() => rutasFacturables.value.map(calcularTramo))
const costoVuelo = computed(() => desgloses.value.reduce((total, item) => total + item.costo, 0))
const noches = computed(() => {
  const inicio = rutas.value[0]?.start_date
  const fin = rutas.value[0]?.end_date
  if (!inicio || !fin) return 0
  return Math.max(0, Math.ceil((new Date(fin) - new Date(inicio)) / 86400000))
})
const costoPernocta = computed(() => {
  const aeronave = aeronaveSeleccionada.value
  if (!aeronave || !noches.value) return 0
  const tarifa = numero(aeronave.crew_overnight_usd) || numero(aeronave.rental_price_usd) * 0.5
  return Number((noches.value * tarifa).toFixed(2))
})
const gastosOperacion = computed(() => {
  const aeronave = aeronaveSeleccionada.value
  if (!aeronave) return 0
  return numero(
    vueloInternacional.value
      ? aeronave.international_expenses_usd
      : aeronave.national_expenses_usd,
  )
})
const subtotal = computed(() => costoVuelo.value + costoPernocta.value + gastosOperacion.value)
const impuestos = computed(() => Number((subtotal.value * (vueloInternacional.value ? 0.04 : 0.16)).toFixed(2)))
const total = computed(() => Number((subtotal.value + impuestos.value).toFixed(2)))

function limpiarUbicacion(item, direccion) {
  if (direccion === 'from') {
    item.fromCity = ''
    item.fromAirport = ''
  } else {
    item.toCity = ''
    item.toAirport = ''
  }
}

function agregarRuta() {
  const anterior = rutas.value[rutas.value.length - 1]
  rutas.value.push({
    ...rutaVacia(),
    fromCountry: anterior.toCountry,
    fromState: anterior.toState,
    fromCity: anterior.toCity,
    fromAirport: anterior.toAirport,
    passengers: anterior.passengers,
    aircraft_id: anterior.aircraft_id,
    start_date: anterior.start_date,
    end_date: anterior.end_date,
  })
}

function quitarRuta() {
  if (rutas.value.length > 1) rutas.value.pop()
}

function fechaBloqueadaLocalmente(fecha, aeronaveId) {
  if (!fecha || !aeronaveId) return false
  const dia = fecha.split('T')[0]
  return fechasBloqueadas.value.some(
    (bloqueo) =>
      String(bloqueo.aircraft_id) === String(aeronaveId) &&
      String(bloqueo.blocked_date).startsWith(dia),
  )
}

async function validarDisponibilidad() {
  if (!supabaseConfigurado || !supabase) {
    errorMensaje.value = mensajeConfiguracionSupabase
    return false
  }

  const primera = rutas.value[0]
  if (!primera.aircraft_id || !primera.start_date || !primera.end_date) return false

  if (
    fechaBloqueadaLocalmente(primera.start_date, primera.aircraft_id) ||
    fechaBloqueadaLocalmente(primera.end_date, primera.aircraft_id)
  ) {
    errorMensaje.value = 'La aeronave tiene un bloqueo operativo en las fechas seleccionadas.'
    return false
  }

  const inicio = new Date(primera.start_date).toISOString()
  const fin = new Date(primera.end_date).toISOString()
  const { data, error } = await supabase
    .from('reservations')
    .select('id')
    .eq('aircraft_id', primera.aircraft_id)
    .in('status', ['pending', 'confirmed'])
    .lt('start_datetime', fin)
    .gt('end_datetime', inicio)

  if (error) throw error
  if (data?.length) {
    errorMensaje.value = 'La aeronave ya está reservada en ese rango de fechas.'
    return false
  }

  return true
}

async function abrirVistaPrevia() {
  errorMensaje.value = ''
  mensajeExito.value = false
  const primera = rutas.value[0]

  if (
    !contacto.tipoVuelo ||
    !rutaTipo.value ||
    !primera.aircraft_id ||
    !primera.start_date ||
    !primera.end_date ||
    !contacto.nombre ||
    !contacto.correo ||
    !contacto.telefono
  ) {
    errorMensaje.value = 'Complete la configuración, fechas y datos de contacto.'
    return
  }

  if (new Date(primera.end_date) <= new Date(primera.start_date)) {
    errorMensaje.value = 'La fecha de regreso debe ser posterior a la salida.'
    return
  }

  if (rutasValidas.value.length !== rutas.value.length) {
    errorMensaje.value = 'Complete el origen, destino y pasajeros de todos los tramos.'
    return
  }

  if (
    rutas.value.some(
      (item) => Number(item.passengers) > numero(aeronaveSeleccionada.value?.capacity_passengers),
    )
  ) {
    errorMensaje.value = 'El número de pasajeros supera la capacidad de la aeronave.'
    return
  }

  if (desgloses.value.some((item) => !item.listo)) {
    errorMensaje.value = 'No se pudo calcular un tramo. Revise aeropuertos y datos de la aeronave.'
    return
  }

  try {
    if (!(await validarDisponibilidad())) return
    vistaPrevia.value = true
  } catch (error) {
    errorMensaje.value = 'No fue posible verificar la disponibilidad.'
    console.error(error)
  }
}

async function confirmarCotizacion() {
  enviando.value = true
  errorMensaje.value = ''
  mensajeExito.value = false

  try {
    if (!supabaseConfigurado || !supabase) {
      errorMensaje.value = mensajeConfiguracionSupabase
      return
    }

    if (!(await validarDisponibilidad())) {
      vistaPrevia.value = false
      return
    }

    const { data: cotizacion, error: errorCotizacion } = await supabase
      .from('quotes')
      .insert({
        full_name: contacto.nombre,
        email: contacto.correo,
        phone: contacto.telefono,
        flight_type: contacto.tipoVuelo,
        total_estimated_price: total.value,
      })
      .select('id')
      .single()

    if (errorCotizacion) throw errorCotizacion

    const payload = rutasValidas.value.map((item, indice) => ({
      quote_id: cotizacion.id,
      from_airport: item.fromAirport,
      to_airport: item.toAirport,
      passengers: Number(item.passengers),
      aircraft_id: item.aircraft_id,
      estimated_price: calcularTramo(item).costo,
    }))

    const { error: errorRutas } = await supabase.from('quote_routes').insert(payload)
    if (errorRutas) throw errorRutas

    const { generarPdfCotizacion } = await import('../utils/pdfCotizacion')
    const pdf = await generarPdfCotizacion({
      contacto,
      aeronave: aeronaveSeleccionada.value,
      rutas: rutasFacturables.value,
      desgloses: desgloses.value,
      totales: {
        flight: costoVuelo.value,
        overnight: costoPernocta.value,
        expenses: gastosOperacion.value,
        subtotal: subtotal.value,
        iva: impuestos.value,
        total: total.value,
      },
      internacional: vueloInternacional.value,
    })
    const pdfBase64 = await convertirBlobABase64(pdf)

    const respuestaCorreo = await fetch(
      'https://redskyg.com/landing/send-email_movil_cliente.php',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form: {
            name: contacto.nombre,
            email: contacto.correo,
            phone: contacto.telefono,
            flightType: contacto.tipoVuelo,
          },
          routes: rutasFacturables.value,
          subtotal: subtotal.value,
          iva: impuestos.value,
          total: total.value,
          pdf: pdfBase64,
        }),
      },
    )

    if (!respuestaCorreo.ok) {
      throw new Error(`El servicio de correo respondió ${respuestaCorreo.status}`)
    }

    vistaPrevia.value = false
    errorMensaje.value = `Cotización ${cotizacion.id} registrada y enviada a ${contacto.correo}.`
    mensajeExito.value = true
  } catch (error) {
    errorMensaje.value = 'No fue posible registrar la cotización. Intente nuevamente.'
    mensajeExito.value = false
    console.error(error)
  } finally {
    enviando.value = false
  }
}

function convertirBlobABase64(blob) {
  return new Promise((resolve, reject) => {
    const lector = new FileReader()
    lector.onloadend = () => resolve(String(lector.result).split(',')[1])
    lector.onerror = reject
    lector.readAsDataURL(blob)
  })
}

function moneda(valor) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(valor || 0)
}

async function cargarDatos() {
  cargando.value = true

  if (!supabaseConfigurado || !supabase) {
    errorMensaje.value = mensajeConfiguracionSupabase
    cargando.value = false
    return
  }

  const [nacionales, internacionales, flota, bloqueos] = await Promise.all([
    supabase.from('aeropuertos_mexico').select('*'),
    supabase.from('airports_geo').select('*'),
    supabase.from('aircraft_fleet').select('*').eq('is_active', true).order('name'),
    supabase.from('blocked_dates').select('*'),
  ])

  const error = nacionales.error || internacionales.error || flota.error || bloqueos.error
  if (error) {
    errorMensaje.value = 'No fue posible cargar la información del cotizador.'
    console.error(error)
  } else {
    aeropuertosNacionales.value = nacionales.data || []
    aeropuertosInternacionales.value = internacionales.data || []
    aeronaves.value = flota.data || []
    fechasBloqueadas.value = bloqueos.data || []

    const aircraftId = route.query.aircraftId
    if (aircraftId && aeronaves.value.some((item) => String(item.id) === String(aircraftId))) {
      rutas.value[0].aircraft_id = aircraftId
    }
  }

  cargando.value = false
}

watch(
  () => rutas.value[0]?.aircraft_id,
  (id) => {
    rutas.value.forEach((item) => {
      item.aircraft_id = id || ''
      if (item.passengers > numero(aeronaveSeleccionada.value?.capacity_passengers, 1)) {
        item.passengers = numero(aeronaveSeleccionada.value?.capacity_passengers, 1)
      }
    })
  },
)

watch(rutaTipo, () => {
  rutas.value = [
    {
      ...rutaVacia(),
      aircraft_id: rutas.value[0]?.aircraft_id || '',
      start_date: rutas.value[0]?.start_date || '',
      end_date: rutas.value[0]?.end_date || '',
    },
  ]
})

onMounted(cargarDatos)
</script>

<template>
  <div class="cotizador">
    <section class="hero">
      <img src="/imagenes/servicios/Vista%20general/Vueloprivado3.png" alt="Vuelo privado" />
      <div class="hero__velo"></div>
      <div class="hero__contenido">
        <p class="etiqueta">Cotización ejecutiva</p>
        <h1>Solicite su vuelo privado</h1>
        <p>Configure la aeronave, fechas y rutas para recibir una estimación basada en la operación real.</p>
      </div>
    </section>

    <div v-if="cargando" class="cargando">
      <img src="/LOGO.png" alt="Red Aviation Company" />
      <span>Cargando flota y aeropuertos...</span>
    </div>

    <form v-else class="formulario" @submit.prevent="abrirVistaPrevia">
      <section class="paso">
        <div class="paso__titulo"><span>01</span><div><p>Configuración</p><h2>Tipo de operación</h2></div></div>
        <div class="campos">
          <label>
            <span>Tipo de vuelo</span>
            <select v-model="contacto.tipoVuelo" required>
              <option value="Private Jet">Jet privado</option>
              <option value="Helicopter">Helicóptero</option>
              <option value="Air Ambulance">Ambulancia aérea</option>
              <option value="Cargo">Carga</option>
            </select>
          </label>
          <label>
            <span>Tipo de ruta</span>
            <select v-model="rutaTipo" required>
              <option value="NATIONAL">Nacional</option>
              <option value="INTERNATIONAL">Internacional</option>
            </select>
          </label>
        </div>
      </section>

      <section class="paso">
        <div class="paso__titulo"><span>02</span><div><p>Aeronave y agenda</p><h2>Disponibilidad</h2></div></div>
        <div class="campos">
          <label class="campo--completo">
            <span>Aeronave</span>
            <select v-model="rutas[0].aircraft_id" required>
              <option value="">Seleccione una aeronave</option>
              <option v-for="aeronave in flotaFiltrada" :key="aeronave.id" :value="aeronave.id">
                {{ aeronave.name }} · {{ aeronave.capacity_passengers }} pasajeros · Base {{ aeronave.home_base }}
              </option>
            </select>
          </label>
          <div v-if="aeronaveSeleccionada" class="aeronave-resumen campo--completo">
            <strong>{{ aeronaveSeleccionada.name }}</strong>
            <span>{{ aeronaveSeleccionada.aircraft_type }}</span>
            <span>{{ aeronaveSeleccionada.capacity_passengers }} pasajeros</span>
            <span>{{ aeronaveSeleccionada.cruise_speed_knots }} kt</span>
          </div>
          <label>
            <span>Fecha y hora de salida</span>
            <input v-model="rutas[0].start_date" type="datetime-local" required />
          </label>
          <label>
            <span>Fecha y hora de regreso</span>
            <input v-model="rutas[0].end_date" type="datetime-local" :min="rutas[0].start_date" required />
          </label>
        </div>
      </section>

      <section class="paso">
        <div class="paso__titulo"><span>03</span><div><p>Itinerario</p><h2>Rutas del viaje</h2></div></div>

        <article v-for="(item, indice) in rutas" :key="item.id" class="tramo">
          <h3>Ruta {{ indice + 1 }}</h3>

          <template v-if="rutaTipo === 'NATIONAL'">
            <div class="campos">
              <label>
                <span>Estado de origen</span>
                <select v-model="item.fromState" @change="limpiarUbicacion(item, 'from')" required>
                  <option value="">Seleccione</option>
                  <option v-for="estado in estados" :key="estado">{{ estado }}</option>
                </select>
              </label>
              <label>
                <span>Ciudad de origen</span>
                <select v-model="item.fromCity" :disabled="!item.fromState" @change="item.fromAirport = ''" required>
                  <option value="">Seleccione</option>
                  <option v-for="ciudad in ciudadesPorEstado(item.fromState)" :key="ciudad">{{ ciudad }}</option>
                </select>
              </label>
              <label class="campo--completo">
                <span>Aeropuerto de origen</span>
                <select v-model="item.fromAirport" :disabled="!item.fromCity" required>
                  <option value="">Seleccione</option>
                  <option
                    v-for="aeropuerto in aeropuertosPorCiudad(null, item.fromState, item.fromCity)"
                    :key="codigoAeropuerto(aeropuerto)"
                    :value="codigoAeropuerto(aeropuerto)"
                  >
                    {{ codigoAeropuerto(aeropuerto) }} · {{ aeropuerto.aeropuerto }}
                  </option>
                </select>
              </label>
              <label>
                <span>Estado de destino</span>
                <select v-model="item.toState" @change="limpiarUbicacion(item, 'to')" required>
                  <option value="">Seleccione</option>
                  <option v-for="estado in estados" :key="estado">{{ estado }}</option>
                </select>
              </label>
              <label>
                <span>Ciudad de destino</span>
                <select v-model="item.toCity" :disabled="!item.toState" @change="item.toAirport = ''" required>
                  <option value="">Seleccione</option>
                  <option v-for="ciudad in ciudadesPorEstado(item.toState)" :key="ciudad">{{ ciudad }}</option>
                </select>
              </label>
              <label class="campo--completo">
                <span>Aeropuerto de destino</span>
                <select v-model="item.toAirport" :disabled="!item.toCity" required>
                  <option value="">Seleccione</option>
                  <option
                    v-for="aeropuerto in aeropuertosPorCiudad(null, item.toState, item.toCity)"
                    :key="codigoAeropuerto(aeropuerto)"
                    :value="codigoAeropuerto(aeropuerto)"
                  >
                    {{ codigoAeropuerto(aeropuerto) }} · {{ aeropuerto.aeropuerto }}
                  </option>
                </select>
              </label>
            </div>
          </template>

          <template v-else>
            <div class="campos">
              <label>
                <span>País de origen</span>
                <select v-model="item.fromCountry" @change="limpiarUbicacion(item, 'from')" required>
                  <option value="">Seleccione</option>
                  <option v-for="pais in paises" :key="pais">{{ pais }}</option>
                </select>
              </label>
              <label>
                <span>Ciudad de origen</span>
                <select v-model="item.fromCity" :disabled="!item.fromCountry" @change="item.fromAirport = ''" required>
                  <option value="">Seleccione</option>
                  <option v-for="ciudad in ciudadesPorPais(item.fromCountry)" :key="ciudad">{{ ciudad }}</option>
                </select>
              </label>
              <label class="campo--completo">
                <span>Aeropuerto de origen</span>
                <select v-model="item.fromAirport" :disabled="!item.fromCity" required>
                  <option value="">Seleccione</option>
                  <option
                    v-for="aeropuerto in aeropuertosPorCiudad(item.fromCountry, null, item.fromCity)"
                    :key="codigoAeropuerto(aeropuerto)"
                    :value="codigoAeropuerto(aeropuerto)"
                  >
                    {{ codigoAeropuerto(aeropuerto) }} · {{ aeropuerto.aeropuerto }}
                  </option>
                </select>
              </label>
              <label>
                <span>País de destino</span>
                <select v-model="item.toCountry" @change="limpiarUbicacion(item, 'to')" required>
                  <option value="">Seleccione</option>
                  <option v-for="pais in paises" :key="pais">{{ pais }}</option>
                </select>
              </label>
              <label>
                <span>Ciudad de destino</span>
                <select v-model="item.toCity" :disabled="!item.toCountry" @change="item.toAirport = ''" required>
                  <option value="">Seleccione</option>
                  <option v-for="ciudad in ciudadesPorPais(item.toCountry)" :key="ciudad">{{ ciudad }}</option>
                </select>
              </label>
              <label class="campo--completo">
                <span>Aeropuerto de destino</span>
                <select v-model="item.toAirport" :disabled="!item.toCity" required>
                  <option value="">Seleccione</option>
                  <option
                    v-for="aeropuerto in aeropuertosPorCiudad(item.toCountry, null, item.toCity)"
                    :key="codigoAeropuerto(aeropuerto)"
                    :value="codigoAeropuerto(aeropuerto)"
                  >
                    {{ codigoAeropuerto(aeropuerto) }} · {{ aeropuerto.aeropuerto }}
                  </option>
                </select>
              </label>
            </div>
          </template>

          <label class="pasajeros">
            <span>Pasajeros</span>
            <input
              v-model.number="item.passengers"
              type="number"
              min="1"
              :max="aeronaveSeleccionada?.capacity_passengers || 1"
              required
            />
          </label>
        </article>

        <div class="acciones-ruta">
          <button type="button" class="boton-secundario" @click="agregarRuta">+ Agregar otra ruta</button>
          <button v-if="rutas.length > 1" type="button" class="boton-secundario boton-peligro" @click="quitarRuta">
            Quitar última ruta
          </button>
        </div>
      </section>

      <section class="paso">
        <div class="paso__titulo"><span>04</span><div><p>Contacto</p><h2>Datos del pasajero</h2></div></div>
        <div class="campos">
          <label><span>Nombre completo</span><input v-model="contacto.nombre" type="text" required /></label>
          <label><span>Correo electrónico</span><input v-model="contacto.correo" type="email" required /></label>
          <label class="campo--completo"><span>Teléfono</span><input v-model="contacto.telefono" type="tel" required /></label>
        </div>
      </section>

      <p
        v-if="errorMensaje"
        class="mensaje"
        :class="{ 'mensaje--exito': mensajeExito }"
        role="status"
      >
        {{ errorMensaje }}
      </p>
      <button class="boton-principal" type="submit">Confirmar disponibilidad y ver cotización</button>
    </form>

    <Teleport to="body">
      <div v-if="vistaPrevia" class="modal" @click.self="vistaPrevia = false">
        <div class="modal__tarjeta">
          <header>
            <div><p class="etiqueta">Red Aviation Company</p><h2>Cotización ejecutiva de vuelo</h2><span>Resumen para {{ contacto.nombre }}</span></div>
            <button type="button" @click="vistaPrevia = false">Cerrar</button>
          </header>

          <div class="modal__rutas">
            <article v-for="(item, indice) in rutasFacturables" :key="item.id">
              <div>
                <small>{{ item.positioning ? (item.positioningType === 'return_to_base' ? 'Regreso a base' : 'Reposicionamiento') : `Ruta ${indice + 1}` }}</small>
                <strong>{{ item.fromAirport }} → {{ item.toAirport }}</strong>
              </div>
              <dl>
                <div><dt>Distancia</dt><dd>{{ desgloses[indice].millas }} nm</dd></div>
                <div><dt>Tiempo</dt><dd>{{ desgloses[indice].horas.toFixed(1) }} h</dd></div>
                <div><dt>Pasajeros</dt><dd>{{ item.passengers }}</dd></div>
              </dl>
            </article>
          </div>

          <div class="modal__totales">
            <span>Vuelo estimado <strong>{{ moneda(costoVuelo) }}</strong></span>
            <span v-if="costoPernocta">Pernocta <strong>{{ moneda(costoPernocta) }}</strong></span>
            <span>Gastos operativos <strong>{{ moneda(gastosOperacion) }}</strong></span>
            <span>Impuestos estimados <strong>{{ moneda(impuestos) }}</strong></span>
            <span class="total">Total estimado <strong>{{ moneda(total) }}</strong></span>
          </div>

          <footer>
            <button type="button" class="boton-secundario" @click="vistaPrevia = false">Editar</button>
            <button type="button" class="boton-principal" :disabled="enviando" @click="confirmarCotizacion">
              {{ enviando ? 'Registrando...' : 'Recibir cotización' }}
            </button>
          </footer>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.cotizador { display: grid; gap: 28px; }
.hero { position: relative; min-height: 470px; overflow: hidden; border-radius: 30px; }
.hero > img, .hero__velo { position: absolute; inset: 0; width: 100%; height: 100%; }
.hero > img { object-fit: cover; }
.hero__velo { background: linear-gradient(90deg, rgba(5,5,5,.96), rgba(5,5,5,.28)); }
.hero__contenido { position: relative; z-index: 1; display: flex; min-height: 470px; max-width: 760px; padding: clamp(38px,7vw,84px); justify-content: center; align-items: flex-start; flex-direction: column; }
.etiqueta, .paso__titulo p { margin: 0 0 10px; color: #ff7187; font-size: .73rem; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
h1, h2, h3 { margin: 0; color: #fff; font-family: var(--fuente-titulo); }
h1 { max-width: 10ch; font-size: clamp(3rem,6vw,5.5rem); line-height: .94; }
.hero__contenido > p:last-child { color: rgba(255,255,255,.72); line-height: 1.7; }
.cargando { display: grid; min-height: 360px; place-content: center; justify-items: center; gap: 14px; color: rgba(255,255,255,.55); }
.cargando img { width: 180px; }
.formulario { display: grid; gap: 24px; }
.paso { padding: clamp(24px,5vw,48px); border: 1px solid rgba(255,255,255,.1); border-radius: 28px; background: rgba(255,255,255,.03); }
.paso__titulo { display: flex; margin-bottom: 28px; gap: 16px; align-items: center; }
.paso__titulo > span { display: grid; width: 48px; height: 48px; border: 1px solid rgba(255,77,104,.45); border-radius: 50%; place-items: center; color: #ff7187; }
.paso__titulo h2 { font-size: clamp(1.8rem,3vw,2.7rem); }
.campos { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }
label { display: grid; gap: 8px; }
label > span { color: rgba(255,255,255,.65); font-size: .74rem; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
.campo--completo { grid-column: 1/-1; }
input, select, button { min-height: 52px; border: 1px solid rgba(255,255,255,.12); border-radius: 16px; color: #fff; background: rgba(255,255,255,.045); font: inherit; }
input, select { width: 100%; padding: 12px 15px; }
select option { color: #fff; background: #111; }
input:focus, select:focus { outline: 2px solid rgba(255,77,104,.38); border-color: #ff4d68; }
input:disabled, select:disabled { opacity: .48; cursor: not-allowed; }
.aeronave-resumen { display: flex; flex-wrap: wrap; gap: 10px; padding: 18px; border-radius: 18px; background: rgba(200,16,46,.09); }
.aeronave-resumen strong { width: 100%; color: #fff; }
.aeronave-resumen span { padding: 6px 10px; border: 1px solid rgba(255,255,255,.1); border-radius: 999px; color: rgba(255,255,255,.66); font-size: .76rem; }
.tramo { margin-top: 18px; padding: 24px; border-left: 4px solid #c8102e; border-radius: 20px; background: rgba(255,255,255,.025); }
.tramo h3 { margin-bottom: 20px; }
.pasajeros { max-width: 240px; margin-top: 18px; }
.acciones-ruta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 18px; }
.boton-principal, .boton-secundario { padding: 0 22px; cursor: pointer; font-weight: 700; }
.boton-principal { border-color: rgba(255,77,104,.35); background: linear-gradient(135deg,#d31738,#8f0f28); }
.boton-secundario { background: rgba(255,255,255,.04); }
.boton-peligro { color: #ff9baa; }
.formulario > .boton-principal { min-height: 60px; }
.mensaje { margin: 0; padding: 16px; border: 1px solid rgba(255,77,104,.3); border-radius: 16px; color: #ff9baa; background: rgba(255,77,104,.08); }
.mensaje--exito { border-color: rgba(92,211,143,.35); color: #8ee6b3; background: rgba(92,211,143,.08); }
.modal { position: fixed; z-index: 10000; inset: 0; display: grid; padding: 20px; place-items: center; overflow-y: auto; background: rgba(3,3,3,.84); backdrop-filter: blur(12px); }
.modal__tarjeta { width: min(900px,100%); max-height: 92vh; overflow-y: auto; padding: clamp(24px,5vw,44px); border: 1px solid rgba(255,255,255,.12); border-radius: 28px; background: #0b0b0b; }
.modal header, .modal footer { display: flex; justify-content: space-between; gap: 20px; align-items: center; }
.modal header { padding-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,.1); }
.modal header > button { min-height: 42px; padding: 0 16px; cursor: pointer; }
.modal header span { color: rgba(255,255,255,.58); }
.modal__rutas { display: grid; gap: 12px; padding: 24px 0; }
.modal__rutas article { display: flex; padding: 18px; justify-content: space-between; gap: 18px; border: 1px solid rgba(255,255,255,.08); border-radius: 18px; }
.modal__rutas small { display: block; margin-bottom: 6px; color: #ff7187; text-transform: uppercase; }
.modal__rutas strong { color: #fff; }
dl { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin: 0; }
dt { color: rgba(255,255,255,.48); font-size: .68rem; text-transform: uppercase; }
dd { margin: 5px 0 0; color: #fff; font-weight: 700; }
.modal__totales { display: grid; gap: 10px; padding: 22px; border-radius: 18px; background: rgba(255,255,255,.035); }
.modal__totales span { display: flex; justify-content: space-between; color: rgba(255,255,255,.62); }
.modal__totales strong { color: #fff; }
.modal__totales .total { padding-top: 12px; border-top: 1px solid rgba(255,255,255,.1); color: #fff; font-size: 1.08rem; }
.modal footer { padding-top: 24px; }
.modal footer button { flex: 1; }
button:disabled { opacity: .55; cursor: not-allowed; }
@media (max-width: 700px) {
  .campos { grid-template-columns: 1fr; }
  .campo--completo { grid-column: auto; }
  .modal__rutas article, .modal header { align-items: flex-start; flex-direction: column; }
  dl { width: 100%; grid-template-columns: 1fr; }
  .modal footer { flex-direction: column; }
  .modal footer button { width: 100%; }
}
</style>
