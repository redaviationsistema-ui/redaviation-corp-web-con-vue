<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { serviciosIndividuales } from '../datos/contenidoNuevo'

const pagina = serviciosIndividuales.find((servicio) => servicio.id === 'venta-partes')

const cargando = ref(true)
const errorCarga = ref('')
const partes = ref([])
const terminoBusqueda = ref('')

const columnasObjetivo = [
  'PartNumber',
  'Description',
  'Manufacturer',
  'AircraftType',
]

const columnas = computed(() => {
  const primeraFila = partes.value[0]
  if (!primeraFila) return []

  const llaves = Object.keys(primeraFila)
  return columnasObjetivo.filter((columna) => llaves.includes(columna))
})

const partesOrdenadas = computed(() => {
  const copia = [...partes.value]

  return copia.sort((a, b) => {
    const claveA = a.PartNumber || a.Description || a.id || ''
    const claveB = b.PartNumber || b.Description || b.id || ''
    return String(claveA).localeCompare(String(claveB))
  })
})

const partesFiltradas = computed(() => {
  const termino = terminoBusqueda.value.trim().toLowerCase()

  if (!termino) return partesOrdenadas.value

  return partesOrdenadas.value.filter((parte) =>
    columnasObjetivo.some((columna) =>
      String(parte[columna] ?? '')
        .toLowerCase()
        .includes(termino),
    ),
  )
})

function etiquetaColumna(columna) {
  return columna
}

function valorCelda(valor) {
  if (valor === null || valor === undefined || valor === '') return 'N/D'
  if (Array.isArray(valor)) return valor.join(', ')
  if (typeof valor === 'object') return JSON.stringify(valor)
  return String(valor)
}

async function cargarPartes() {
  cargando.value = true
  errorCarga.value = ''

  const {
    mensajeConfiguracionPiezas,
    piezasSupabaseConfigurado,
    supabasePiezas,
  } = await import('../supabase')

  if (!piezasSupabaseConfigurado || !supabasePiezas) {
    errorCarga.value = mensajeConfiguracionPiezas
    cargando.value = false
    return
  }

  const { data, error } = await supabasePiezas.from('aviation_parts').select('*')

  if (error) {
    errorCarga.value =
      error.code === 'PGRST205'
        ? 'La tabla aviation_parts no está disponible en el esquema expuesto de la base de datos Piezas.'
        : 'No fue posible cargar la tabla aviation_parts en este momento.'
    console.error(error)
  } else {
    partes.value = data || []
  }

  cargando.value = false
}

onMounted(cargarPartes)
</script>

<template>
  <section class="partes">
    <header class="hero" :class="{ 'hero--sin-visual': !pagina.visual?.imagen }">
      <div class="hero__texto">
        <p class="hero__etiqueta">{{ pagina.pretitulo }}</p>
        <h1>{{ pagina.titulo }}</h1>
        <p class="hero__subtitulo">{{ pagina.subtitulo }}</p>
        <p class="hero__descripcion">
          {{ pagina.descripcion }}
          Aquí puedes mostrar inventario real de componentes para que el visitante entienda que no
          solo ofreces el servicio, sino acceso visible a disponibilidad e información operativa.
        </p>
      </div>

      <div v-if="pagina.visual?.imagen" class="hero__visual">
        <img :src="pagina.visual.imagen" :alt="pagina.visual.alt" />
      </div>
    </header>

    <section class="resumen">
      <article class="panel">
        <p class="panel__etiqueta">Inventario conectado</p>
        <h2>Partes disponibles <code></code></h2>
        <p>
          Esta sección consulta directamente la base de datos para mostrar piezas aeronáuticas,
          disponibilidad y cualquier otro dato que ya exista en tu tabla.
        </p>
      </article>

      <article class="panel panel--cta">
        <p class="panel__etiqueta">Siguiente paso</p>
        <h2>Convierte interés técnico en conversación comercial.</h2>
        <RouterLink to="/contacto" class="boton">Solicitar información</RouterLink>
      </article>
    </section>

    <section class="tabla">
      <div class="tabla__encabezado">
        <p class="panel__etiqueta">Venta de Partes</p>
        <h2>Inventario disponible</h2>
      </div>

      <label v-if="!cargando && !errorCarga" class="buscador">
        <span>Buscar pieza</span>
        <input
          v-model="terminoBusqueda"
          type="search"
          placeholder="Buscar por PartNumber, Description, Manufacturer o AircraftType"
        />
      </label>

      <p v-if="cargando" class="estado">Cargando piezas desde la base de datos...</p>
      <p v-else-if="errorCarga" class="estado estado--error">{{ errorCarga }}</p>
      <p v-else-if="!partes.length" class="estado">
        No hay registros disponibles en la tabla <code>aviation_parts</code>.
      </p>
      <p v-else-if="!partesFiltradas.length" class="estado">
        No se encontraron piezas para la búsqueda <code>{{ terminoBusqueda }}</code>.
      </p>

      <div v-else class="tabla__contenedor">
        <table>
          <thead>
            <tr>
              <th v-for="columna in columnas" :key="columna">{{ etiquetaColumna(columna) }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="parte in partesFiltradas" :key="parte.id ?? JSON.stringify(parte)">
              <td v-for="columna in columnas" :key="`${parte.id ?? columna}-${columna}`">
                {{ valorCelda(parte[columna]) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</template>

<style scoped>
.partes,
.resumen {
  display: grid;
  gap: 18px;
}

.hero,
.panel,
.tabla__contenedor {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.hero {
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  gap: 18px;
  overflow: hidden;
}

.hero--sin-visual {
  grid-template-columns: 1fr;
}

.hero__texto,
.hero__visual,
.panel {
  padding: 28px;
}

.hero__etiqueta,
.panel__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

h1,
h2 {
  margin: 0;
  color: #ffffff;
  font-family: var(--fuente-titulo);
}

h1 {
  font-size: clamp(2.8rem, 6vw, 5.4rem);
  line-height: 0.96;
}

h2 {
  font-size: clamp(1.7rem, 3vw, 2.5rem);
  line-height: 1.03;
}

.hero__subtitulo,
.hero__descripcion,
.panel p,
.estado,
table {
  color: rgba(217, 217, 217, 0.78);
}

.hero__subtitulo {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.12rem;
}

.hero__descripcion {
  margin-top: 14px;
  max-width: 58ch;
}

.hero__visual {
  display: grid;
  place-items: center;
  background: rgba(5, 5, 5, 0.42);
}

.hero__visual img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.resumen {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel--cta {
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
}

.boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  color: #ffffff;
  text-decoration: none;
  background: linear-gradient(135deg, #c8102e, #8f0f28);
}

.tabla__encabezado {
  margin: 26px 0 18px;
}

.buscador {
  display: grid;
  gap: 8px;
  margin-bottom: 18px;
}

.buscador span {
  color: rgba(217, 217, 217, 0.82);
  font-size: 0.92rem;
}

.buscador input {
  min-height: 48px;
  padding: 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.03);
  color: #ffffff;
  font: inherit;
}

.buscador input::placeholder {
  color: rgba(217, 217, 217, 0.45);
}

.tabla__contenedor {
  overflow: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
}

th,
td {
  padding: 14px 16px;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  vertical-align: top;
}

th {
  color: #ffffff;
  font-size: 0.84rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.03);
}

tbody tr:hover {
  background: rgba(255, 255, 255, 0.03);
}

.estado {
  padding: 22px 0;
}

.estado--error {
  color: #ff8b9e;
}

@media (max-width: 960px) {
  .hero,
  .resumen {
    grid-template-columns: 1fr;
  }
}
</style>
