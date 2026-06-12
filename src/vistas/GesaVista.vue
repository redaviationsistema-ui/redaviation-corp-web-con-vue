<script setup>
import CarruselContenido from '../componentes/CarruselContenido.vue'
import MarcadorVisual from '../componentes/MarcadorVisual.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('gesa')

const capacidades = [
  'Remodelación de interiores',
  'Personalización de cabina',
  'Instalación de aviónica',
  'Actualizaciones de aviónica',
  'Almacén de partes',
  'Asistencia para aeronaves inmovilizadas',
]

const diferenciales = [
  {
    titulo: 'Cabina ejecutiva',
    descripcion: 'Espacio para mostrar acabados, detalle interior y una experiencia personalizada.',
  },
  {
    titulo: 'Integración técnica',
    descripcion: 'Bloque pensado para resaltar instalación de aviónica y procesos de modernización.',
  },
  {
    titulo: 'Respuesta operativa',
    descripcion: 'Zona ideal para comunicar asistencia a aeronaves inmovilizadas y disponibilidad de partes.',
  },
]

const carruselImagenes = [
  {
    etiqueta: 'Interiores',
    titulo: 'Cabina e interiores ejecutivos',
    descripcion:
      'Visual para comunicar personalización de cabina, acabados interiores y atención al detalle en proyectos especiales de GESA.',
    imagen: '/imagenes/Interiores2.jpg',
    alt: 'Interiores ejecutivos y personalización de cabina en GESA',
  },
  {
    etiqueta: 'Operacion',
    titulo: 'Integración operativa en campo',
    descripcion:
      'Registro visual de trabajo aplicado para reforzar instalación, soporte técnico y continuidad operativa dentro de GESA.',
    imagen: '/imagenes/IMG_7929.jpg',
    alt: 'Integración operativa y soporte técnico en GESA',
  },
  {
    etiqueta: 'Avionica',
    titulo: 'Ingeniería y trabajo de aviónica',
    descripcion:
      'Registro visual de integración técnica, detalle de componentes y ejecución especializada dentro del entorno de GESA.',
    imagen: '/imagenes/IngeAvionica.png',
    alt: 'Ingeniería de aviónica en instalaciones de GESA',
  },
  {
    etiqueta: 'Cabina',
    titulo: 'Intervención técnica con enfoque operativo',
    descripcion:
      'Visual para reforzar personalización, instalación y mejora de sistemas con criterio técnico y continuidad operativa.',
    imagen: '/imagenes/IngeAvionica1.png',
    alt: 'Trabajo técnico de aviónica y componentes en GESA',
  },
  {
    etiqueta: 'Prototipos',
    titulo: 'Prototipos y desarrollo aplicado',
    descripcion:
      'Imagen adicional para comunicar capacidad de diseño, adaptación y ejecución en proyectos especializados.',
    imagen: '/imagenes/Prototipos1.jpg',
    alt: 'Prototipos y desarrollo técnico aplicado en GESA',
  },
]

const logoTitulo = {
  src: '/imagenes/logo-gesa.png',
  alt: 'Logo de GESA',
}
</script>

<template>
  <section class="gesa">
    <header class="gesa__hero">
      <div class="gesa__texto">
        <p class="gesa__pretitulo">{{ vista.pretitulo }}</p>
        <div class="gesa__titulo">
          <h1>{{ vista.titulo }}</h1>
          <img :src="logoTitulo.src" :alt="logoTitulo.alt" class="gesa__titulo-logo" />
        </div>
        <p class="gesa__subtitulo">{{ vista.subtitulo }}</p>
        <p class="gesa__descripcion">{{ vista.descripcion }}</p>
      </div>

      <div class="gesa__visual">
        <div class="gesa__logo-panel">
          <img :src="logoTitulo.src" :alt="logoTitulo.alt" class="gesa__logo-lateral" />
        </div>

        <MarcadorVisual v-bind="vista.visual" />
      </div>
    </header>

    <section class="gesa__contenido">
      <article class="tarjeta tarjeta--principal">
        <p class="tarjeta__etiqueta">Capacidades</p>
        <h2>Soporte técnico orientado a cabina, aviónica y continuidad operativa.</h2>
        <ul class="lista-capacidades">
          <li v-for="capacidad in capacidades" :key="capacidad">{{ capacidad }}</li>
        </ul>
      </article>

      <article class="tarjeta">
        <p class="tarjeta__etiqueta">Sección para imagen secundaria</p>
        <h2>Bloque reservado para plano técnico, taller o detalle interior.</h2>
        <p>
          Puedes usar aquí una imagen más cerrada de paneles, materiales, aviónica o soporte de
          partes sin rediseñar la página.
        </p>
      </article>
    </section>

    <section class="diferenciales">
      <article v-for="diferencial in diferenciales" :key="diferencial.titulo" class="tarjeta">
        <p class="tarjeta__etiqueta">{{ diferencial.titulo }}</p>
        <h2>{{ diferencial.titulo }}</h2>
        <p>{{ diferencial.descripcion }}</p>
      </article>
    </section>

    <CarruselContenido
      titulo="Galería técnica de GESA"
      :elementos="carruselImagenes"
      tamano-titulo="compacto"
      tamano-contenido="compacto"
    />

    <section class="servicios">
      <div class="servicios__encabezado">
        <p class="tarjeta__etiqueta">Servicios</p>
        <h2>Unidades de trabajo listas para desarrollarse con visuales reales.</h2>
      </div>

      <div class="servicios__rejilla">
        <article v-for="bloque in vista.bloques" :key="bloque.titulo" class="servicio">
          <h3>{{ bloque.titulo }}</h3>
          <p>{{ bloque.descripcion }}</p>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.gesa,
.gesa__contenido,
.diferenciales,
.servicios__rejilla {
  display: grid;
  gap: 18px;
}

.gesa__hero,
.tarjeta,
.servicio {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.gesa__hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.gesa__texto,
.gesa__visual,
.tarjeta,
.servicio {
  padding: 26px;
}

.gesa__visual {
  display: grid;
  gap: 18px;
  align-content: start;
}

.gesa__pretitulo,
.tarjeta__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

.gesa__titulo {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 18px;
}

h1,
h2,
h3 {
  margin: 0;
  color: #ffffff;
}

h1,
h2 {
  font-family: var(--fuente-titulo);
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.96;
}

.gesa__titulo-logo {
  width: clamp(82px, 10vw, 126px);
  max-height: 82px;
  object-fit: contain;
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.28));
  justify-self: end;
}

.gesa__logo-panel {
  min-height: 240px;
  display: grid;
  place-items: center;
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at center, rgba(200, 16, 46, 0.18), transparent 56%),
    rgba(255, 255, 255, 0.02);
}

.gesa__logo-lateral {
  width: min(100%, 360px);
  max-height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 20px 36px rgba(0, 0, 0, 0.32));
}

h2 {
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  line-height: 1.02;
}

h3 {
  font-size: 1.15rem;
}

.gesa__subtitulo {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.1rem;
}

.gesa__descripcion,
.tarjeta p,
.servicio p {
  color: rgba(217, 217, 217, 0.78);
}

.gesa__descripcion {
  max-width: 58ch;
  margin-top: 14px;
}

.gesa__contenido,
.diferenciales {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.tarjeta--principal {
  background:
    radial-gradient(circle at top right, rgba(200, 16, 46, 0.18), transparent 30%),
    rgba(255, 255, 255, 0.04);
}

.lista-capacidades {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.lista-capacidades li,
.servicio {
  background: rgba(255, 255, 255, 0.02);
}

.lista-capacidades li {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 14px 16px;
  color: #ffffff;
}

.servicios__encabezado {
  margin-bottom: 18px;
}

.servicios__rejilla {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.servicio {
  padding: 22px;
}

.servicio h3 {
  margin-bottom: 10px;
}

@media (max-width: 960px) {
  .gesa__hero,
  .gesa__contenido,
  .diferenciales,
  .servicios__rejilla,
  .lista-capacidades {
    grid-template-columns: 1fr;
  }

  .gesa__titulo {
    grid-template-columns: 1fr;
  }

  .gesa__titulo-logo {
    justify-self: start;
  }
}
</style>
