<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { obtenerVista } from '../datos/sitio'
import { supabase } from '../supabase'

const vista = obtenerVista('flota')
const aeronaves = ref([])
const filtroActivo = ref('Todas')
const cargando = ref(true)
const errorCarga = ref('')
const imagenesCargadas = ref({})
const imagenesConError = ref({})
const cantidadVisible = ref(4)
const cargadorProgresivo = ref(null)
const TAMANO_LOTE = 4
let observador

const filtros = computed(() => [
  'Todas',
  ...new Set(aeronaves.value.map((aeronave) => aeronave.aircraft_type).filter(Boolean)),
])

const aeronavesFiltradas = computed(() => {
  if (filtroActivo.value === 'Todas') return aeronaves.value
  return aeronaves.value.filter((aeronave) => aeronave.aircraft_type === filtroActivo.value)
})

const aeronavesVisibles = computed(() => aeronavesFiltradas.value.slice(0, cantidadVisible.value))
const quedanAeronaves = computed(() => cantidadVisible.value < aeronavesFiltradas.value.length)

function imagenPrincipal(aeronave) {
  return aeronave.aeronave_imagenes?.[0]?.imagen_url || aeronave.exterior_images?.[0] || null
}

function formatoMoneda(valor) {
  if (!Number(valor)) return 'Tarifa bajo solicitud'

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(valor)
}

function registrarImagenCargada(id) {
  imagenesCargadas.value[id] = true
}

function registrarErrorImagen(id) {
  imagenesConError.value[id] = true
}

function mostrarSiguienteLote() {
  cantidadVisible.value = Math.min(
    cantidadVisible.value + TAMANO_LOTE,
    aeronavesFiltradas.value.length,
  )
}

async function observarCargaProgresiva() {
  await nextTick()
  observador?.disconnect()

  if (!cargadorProgresivo.value) return

  observador = new IntersectionObserver(
    ([entrada]) => {
      if (entrada.isIntersecting && quedanAeronaves.value) {
        mostrarSiguienteLote()
      }
    },
    { rootMargin: '500px 0px', threshold: 0.01 },
  )

  observador.observe(cargadorProgresivo.value)
}

async function cargarFlota() {
  cargando.value = true

  const { data, error } = await supabase
    .from('aircraft_fleet')
    .select(`
      id,
      name,
      year,
      aircraft_type,
      capacity_passengers,
      cruise_speed_knots,
      rental_price_usd,
      ideal_use,
      descripcion,
      home_base,
      exterior_images,
      aeronave_imagenes(imagen_url)
    `)
    .eq('is_active', true)
    .order('name')

  if (error) {
    errorCarga.value = 'No fue posible cargar la flota en este momento.'
    console.error(error)
  } else {
    aeronaves.value = data || []
  }

  cargando.value = false
  observarCargaProgresiva()
}

watch(filtroActivo, () => {
  cantidadVisible.value = TAMANO_LOTE
  observarCargaProgresiva()
})

onMounted(cargarFlota)
onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <section class="flota">
    <header class="hero">
      <img :src="vista.visual.imagen" :alt="vista.visual.alt" />
      <div class="hero__velo"></div>
      <div class="hero__contenido">
        <p class="etiqueta">{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="subtitulo">{{ vista.subtitulo }}</p>
        <p>{{ vista.descripcion }}</p>
      </div>
    </header>

    <section class="barra">
      <div>
        <p class="etiqueta">Flota conectada</p>
        <h2>Aeronaves activas</h2>
      </div>
      <div class="filtros" aria-label="Filtrar aeronaves">
        <button
          v-for="filtro in filtros"
          :key="filtro"
          type="button"
          :class="{ activo: filtroActivo === filtro }"
          @click="filtroActivo = filtro"
        >
          {{ filtro }}
        </button>
      </div>
    </section>

    <p v-if="cargando" class="estado">Cargando aeronaves desde la base de datos...</p>
    <p v-else-if="errorCarga" class="estado estado--error">{{ errorCarga }}</p>

    <section v-else class="rejilla">
      <article
        v-for="(aeronave, indice) in aeronavesVisibles"
        :key="aeronave.id"
        class="aeronave"
      >
        <div class="aeronave__imagen">
          <div
            v-if="
              !imagenPrincipal(aeronave) ||
              !imagenesCargadas[aeronave.id] ||
              imagenesConError[aeronave.id]
            "
            class="aeronave__placeholder"
          >
            <img src="/LOGO.png" alt="Red Aviation Company" />
            <small>
              {{
                imagenPrincipal(aeronave) && !imagenesConError[aeronave.id]
                  ? 'Cargando aeronave...'
                  : 'Imagen no disponible'
              }}
            </small>
          </div>
          <img
            v-if="imagenPrincipal(aeronave) && !imagenesConError[aeronave.id]"
            :src="imagenPrincipal(aeronave)"
            :alt="aeronave.name"
            loading="lazy"
            decoding="async"
            :fetchpriority="indice < 2 ? 'high' : 'low'"
            :class="{ 'imagen--lista': imagenesCargadas[aeronave.id] }"
            @load="registrarImagenCargada(aeronave.id)"
            @error="registrarErrorImagen(aeronave.id)"
          />
          <span>{{ aeronave.aircraft_type }}</span>
        </div>
        <div class="aeronave__contenido">
          <div class="aeronave__titulo">
            <div>
              <small>{{ aeronave.year || 'Año por consultar' }}</small>
              <h2>{{ aeronave.name }}</h2>
            </div>
            <strong>{{ formatoMoneda(aeronave.rental_price_usd) }}</strong>
          </div>
          <p>{{ aeronave.descripcion || aeronave.ideal_use || 'Aeronave disponible para operaciones privadas.' }}</p>
          <dl>
            <div>
              <dt>Pasajeros</dt>
              <dd>{{ aeronave.capacity_passengers }}</dd>
            </div>
            <div>
              <dt>Velocidad</dt>
              <dd>{{ aeronave.cruise_speed_knots || 'N/D' }} kt</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>{{ aeronave.home_base || 'Consultar' }}</dd>
            </div>
          </dl>
          <RouterLink :to="{ path: '/cotizador', query: { aircraftId: aeronave.id } }">
            Cotizar esta aeronave →
          </RouterLink>
        </div>
      </article>
    </section>

    <div
      v-if="!cargando && !errorCarga && quedanAeronaves"
      ref="cargadorProgresivo"
      class="cargador-progresivo"
      aria-live="polite"
    >
      <img src="/LOGO.png" alt="" />
      <span>Cargando más aeronaves...</span>
    </div>
  </section>
</template>

<style scoped>
.flota {
  display: grid;
  gap: 28px;
}

.hero {
  position: relative;
  min-height: 500px;
  overflow: hidden;
  border-radius: 30px;
}

.hero > img,
.hero__velo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero > img {
  object-fit: cover;
}

.hero__velo {
  background: linear-gradient(90deg, rgba(5, 5, 5, 0.95), rgba(5, 5, 5, 0.3));
}

.hero__contenido {
  position: relative;
  z-index: 1;
  display: flex;
  min-height: 500px;
  max-width: 720px;
  padding: clamp(38px, 7vw, 84px);
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.etiqueta {
  margin: 0 0 12px;
  color: #ff7187;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

h1,
h2,
p {
  margin-top: 0;
}

h1,
h2 {
  color: #fff;
  font-family: var(--fuente-titulo);
}

h1 {
  max-width: 10ch;
  margin-bottom: 18px;
  font-size: clamp(3rem, 6vw, 5.5rem);
  line-height: 0.94;
}

h2 {
  margin-bottom: 0;
}

.subtitulo {
  color: #fff;
  font-size: 1.14rem;
}

.hero__contenido > p:last-child,
.aeronave__contenido > p {
  color: rgba(217, 217, 217, 0.72);
  line-height: 1.7;
}

.barra {
  display: flex;
  padding: 28px 0;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.filtros {
  display: flex;
  max-width: 70%;
  gap: 8px;
  overflow-x: auto;
}

.filtros button {
  min-width: max-content;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.68);
  background: transparent;
  cursor: pointer;
}

.filtros button.activo {
  border-color: rgba(255, 77, 104, 0.5);
  color: #fff;
  background: rgba(200, 16, 46, 0.15);
}

.estado {
  padding: 42px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
}

.estado--error {
  color: #ff9baa;
}

.rejilla {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.aeronave {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.03);
}

.aeronave__imagen {
  position: relative;
  height: 300px;
  overflow: hidden;
  background: #0b0b0b;
}

.aeronave__imagen > img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: transform 350ms ease;
}

.aeronave__imagen > img.imagen--lista {
  opacity: 1;
}

.aeronave:hover .aeronave__imagen > img {
  transform: scale(1.04);
}

.aeronave__placeholder {
  position: absolute;
  z-index: 0;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 12px;
  background:
    radial-gradient(circle, rgba(200, 16, 46, 0.14), transparent 45%),
    #0b0b0b;
}

.aeronave__placeholder img {
  width: min(180px, 48%);
  max-height: 110px;
  object-fit: contain;
}

.aeronave__placeholder small {
  color: rgba(255, 255, 255, 0.48);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.aeronave__imagen span {
  position: absolute;
  z-index: 2;
  left: 18px;
  bottom: 18px;
  padding: 8px 12px;
  border-radius: 999px;
  color: #fff;
  background: rgba(5, 5, 5, 0.74);
  backdrop-filter: blur(10px);
  font-size: 0.74rem;
}

.aeronave__contenido {
  padding: 26px;
}

.aeronave__titulo {
  display: flex;
  margin-bottom: 18px;
  justify-content: space-between;
  gap: 18px;
  align-items: start;
}

.aeronave__titulo small {
  color: #ff7187;
}

.aeronave__titulo h2 {
  font-size: 1.7rem;
}

.aeronave__titulo strong {
  color: #fff;
  font-size: 0.9rem;
  text-align: right;
}

dl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 24px 0;
  padding: 18px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

dl div {
  padding: 0 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

dl div:first-child {
  padding-left: 0;
  border-left: 0;
}

dt {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  text-transform: uppercase;
}

dd {
  margin: 5px 0 0;
  color: #fff;
  font-weight: 700;
}

.aeronave__contenido a {
  color: #ff7187;
  font-weight: 700;
}

.cargador-progresivo {
  display: grid;
  min-height: 150px;
  place-content: center;
  justify-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.cargador-progresivo img {
  width: 110px;
  max-height: 70px;
  object-fit: contain;
  animation: pulso 1.5s ease-in-out infinite;
}

@keyframes pulso {
  0%,
  100% {
    opacity: 0.45;
  }

  50% {
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .barra {
    align-items: start;
    flex-direction: column;
  }

  .filtros {
    max-width: 100%;
  }

  .rejilla {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .hero,
  .hero__contenido {
    min-height: 560px;
  }

  .hero__contenido {
    padding: 32px 24px;
  }

  .aeronave__imagen {
    height: 230px;
  }

  .aeronave__titulo {
    flex-direction: column;
  }

  .aeronave__titulo strong {
    text-align: left;
  }

  dl {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  dl div {
    padding: 0;
    border-left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cargador-progresivo img {
    animation: none;
  }
}
</style>
