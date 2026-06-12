<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('blog')
const categoriaActiva = ref('Todos')

const videos = [
  {
    id: 'sBGe2jW9ju4',
    titulo: 'Operaciones aeronáuticas y capacidad técnica',
    descripcion: 'Una mirada a las aeronaves, instalaciones y servicios que respaldan cada operación.',
    categoria: 'Operaciones',
  },
  {
    id: 'tAagngypnVY',
    titulo: 'Mantenimiento especializado de aeronaves',
    descripcion: 'Procesos técnicos, inspecciones y trabajo especializado dentro del hangar.',
    categoria: 'Mantenimiento',
  },
  {
    id: 'Q01qXMo-8UE',
    titulo: 'Aeronaves ejecutivas y servicios integrales',
    descripcion: 'Soluciones comerciales y operativas para propietarios, compradores y operadores.',
    categoria: 'Aeronaves',
  },
]

const cortos = [
  { id: 'EPj26theqT0', titulo: 'Aeronaves en operación', categoria: 'Operaciones' },
  { id: '0o1Ml_7BQn0', titulo: 'Experiencia de vuelo privado', categoria: 'Aeronaves' },
  { id: 'tOlY_sWn3WU', titulo: 'Inspección y capacidad técnica', categoria: 'Mantenimiento' },
  { id: 'eatqf1SSHyA', titulo: 'Motores aeronáuticos', categoria: 'Motores' },
  { id: 'FAk4XwAMoOs', titulo: 'Gestión de aeronaves', categoria: 'Gestión' },
  { id: 'iPv_T_zt2L8', titulo: 'Actividad de Red Aviation', categoria: 'Operaciones' },
]

const categorias = ['Todos', 'Operaciones', 'Aeronaves', 'Mantenimiento', 'Motores', 'Gestión']

const temas = [
  { titulo: 'Compra y venta', descripcion: 'Representación y comercialización de aeronaves.', categoria: 'Aeronaves' },
  { titulo: 'Gestión aeronáutica', descripcion: 'Administración, control y disponibilidad operativa.', categoria: 'Gestión' },
  { titulo: 'Motores y mantenimiento', descripcion: 'Inspección, diagnóstico y capacidad técnica.', categoria: 'Motores' },
  { titulo: 'Operaciones privadas', descripcion: 'Movilidad, coordinación y experiencia de vuelo.', categoria: 'Operaciones' },
]

const videosFiltrados = computed(() =>
  categoriaActiva.value === 'Todos'
    ? videos
    : videos.filter((video) => video.categoria === categoriaActiva.value),
)

const cortosFiltrados = computed(() =>
  categoriaActiva.value === 'Todos'
    ? cortos
    : cortos.filter((video) => video.categoria === categoriaActiva.value),
)

function enlaceVideo(id) {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`
}

function seleccionarCategoria(categoria) {
  categoriaActiva.value = categoria
}
</script>

<template>
  <main class="contenido">
    <header class="hero">
      <img
        src="/imagenes/hangar2.png?v=1"
        alt="Aeronaves y operaciones técnicas de Red Aviation"
      />
      <div class="hero__contenido">
        <p class="etiqueta">{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p>{{ vista.descripcion }}</p>
      </div>
    </header>

    <section class="metricas" aria-label="Temas del centro de contenido">
      <article><strong>9</strong><span>Videos disponibles</span></article>
      <article><strong>6</strong><span>Áreas de contenido</span></article>
      <article><strong>Real</strong><span>Operaciones y capacidad técnica</span></article>
      <article><strong>Especializado</strong><span>Contenido de aviación ejecutiva</span></article>
    </section>

    <nav class="filtros" aria-label="Filtrar videos por categoría">
      <button
        v-for="categoria in categorias"
        :key="categoria"
        type="button"
        :class="{ activo: categoriaActiva === categoria }"
        @click="seleccionarCategoria(categoria)"
      >
        {{ categoria }}
      </button>
    </nav>

    <section class="seccion">
      <div class="encabezado">
        <p class="etiqueta">Videos destacados</p>
        <h2>Red Aviation en operación</h2>
      </div>

      <div class="videos">
        <article v-for="video in videosFiltrados" :key="video.id" class="video">
          <div class="video__marco">
            <iframe
              :src="enlaceVideo(video.id)"
              :title="video.titulo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
          <div class="video__texto">
            <span>{{ video.categoria }}</span>
            <h3>{{ video.titulo }}</h3>
            <p>{{ video.descripcion }}</p>
          </div>
        </article>
      </div>
      <p v-if="!videosFiltrados.length" class="vacio">
        Los videos de esta categoría están disponibles en la sección de contenido breve.
      </p>
    </section>

    <section class="seccion">
      <div class="encabezado">
        <p class="etiqueta">Temas destacados</p>
        <h2>Explore contenido por área aeronáutica</h2>
      </div>
      <div class="temas">
        <button
          v-for="tema in temas"
          :key="tema.titulo"
          type="button"
          @click="seleccionarCategoria(tema.categoria)"
        >
          <span>{{ tema.categoria }}</span>
          <h3>{{ tema.titulo }}</h3>
          <p>{{ tema.descripcion }}</p>
        </button>
      </div>
    </section>

    <section class="seccion">
      <div class="encabezado">
        <p class="etiqueta">Videos cortos</p>
        <h2>Contenido breve de aviación</h2>
      </div>

      <div class="cortos">
        <article v-for="video in cortosFiltrados" :key="video.id" class="corto">
          <div class="corto__marco">
            <iframe
              :src="enlaceVideo(video.id)"
              :title="video.titulo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <span class="corto__indicador">▶ Reproducir</span>
          </div>
          <div class="corto__texto">
            <span>{{ video.categoria }}</span>
            <h3>{{ video.titulo }}</h3>
          </div>
        </article>
      </div>
    </section>

    <section class="cta">
      <div>
        <p class="etiqueta">Contenido aeronáutico real</p>
        <h2>Conozca el sector desde la operación</h2>
        <p>Aeronaves, mantenimiento, comercialización y gestión en contenidos de Red Aviation.</p>
      </div>
      <div class="cta__acciones">
        <a
          href="https://www.youtube.com/watch?v=sBGe2jW9ju4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en YouTube
        </a>
        <RouterLink to="/contacto">Solicitar asesoría</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contenido,
.seccion {
  display: grid;
  gap: 22px;
}

.hero,
.seccion,
.metricas,
.filtros,
.cta {
  padding: clamp(26px, 5vw, 52px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.04);
}

.hero {
  position: relative;
  min-height: 340px;
  overflow: hidden;
  align-content: center;
  padding: 0;
}

.hero::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 5, 5, 0.94), rgba(5, 5, 5, 0.35));
  content: '';
}

.hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero__contenido {
  position: relative;
  z-index: 1;
  padding: clamp(28px, 6vw, 72px);
}

.etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

h1,
h2,
h3 {
  margin: 0;
  color: #fff;
  font-family: var(--fuente-titulo);
}

h1 {
  max-width: 12ch;
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.94;
}

h2 {
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1;
}

h3 {
  font-size: 1.2rem;
}

.hero__contenido > p:last-child,
.video__texto p {
  max-width: 65ch;
  color: rgba(217, 217, 217, 0.76);
}

.metricas {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding: 0;
  overflow: hidden;
}

.metricas article {
  display: grid;
  gap: 5px;
  padding: 22px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.metricas strong {
  color: #fff;
  font-size: 1.45rem;
}

.metricas span {
  color: rgba(217, 217, 217, 0.65);
  font-size: 0.84rem;
}

.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 18px;
}

.filtros button {
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.76);
  background: rgba(255, 255, 255, 0.03);
  cursor: pointer;
}

.filtros button.activo,
.filtros button:hover {
  border-color: rgba(255, 77, 104, 0.6);
  color: #fff;
  background: rgba(200, 16, 46, 0.18);
}

.videos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.video,
.corto {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 22px;
  background: #111;
}

.video:first-child {
  grid-column: 1 / -1;
}

.video__marco {
  aspect-ratio: 16 / 9;
  background: #000;
}

.video__marco iframe,
.corto__marco iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.video__texto {
  padding: 20px;
}

.video__texto > span,
.corto__texto > span,
.temas button > span {
  color: #ff7187;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.video__texto h3,
.corto__texto h3 {
  margin-top: 8px;
}

.video__texto p {
  margin-bottom: 0;
}

.vacio {
  margin: 0;
  color: rgba(217, 217, 217, 0.7);
}

.temas {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.temas button {
  min-height: 190px;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  color: rgba(217, 217, 217, 0.74);
  background:
    linear-gradient(145deg, rgba(200, 16, 46, 0.16), transparent 58%),
    #111;
  text-align: left;
  cursor: pointer;
  transition: border-color 180ms ease, transform 180ms ease;
}

.temas button:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 77, 104, 0.5);
}

.temas h3 {
  margin-top: 28px;
}

.cortos {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.corto__marco {
  position: relative;
  aspect-ratio: 9 / 16;
  background: #000;
}

.corto__indicador {
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 8px 11px;
  border-radius: 999px;
  color: #fff;
  background: rgba(5, 5, 5, 0.76);
  font-size: 0.78rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 180ms ease;
}

.corto:hover .corto__indicador {
  opacity: 1;
}

.corto__texto {
  padding: 16px 18px;
}

.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background:
    linear-gradient(120deg, rgba(200, 16, 46, 0.26), transparent 58%),
    rgba(255, 255, 255, 0.04);
}

.cta p {
  color: rgba(217, 217, 217, 0.74);
}

.cta__acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cta__acciones a {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  color: #fff;
}

.cta__acciones a:first-child {
  background: #c8102e;
}

@media (max-width: 900px) {
  .videos,
  .cortos,
  .temas,
  .metricas {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .videos,
  .cortos,
  .temas,
  .metricas {
    grid-template-columns: 1fr;
  }

  .metricas article {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .video:first-child {
    grid-column: auto;
  }

  .corto {
    width: min(100%, 390px);
    justify-self: center;
  }

  .cta {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
