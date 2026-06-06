<script setup>
import MarcadorVisual from '../componentes/MarcadorVisual.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('gesa')

const capacidades = [
  'Remodelación de interiores',
  'Personalización de cabina',
  'Instalación de aviónica',
  'Actualizaciones de aviónica',
  'Almacén de partes',
  'Soporte AOG',
]

const diferenciales = [
  {
    titulo: 'Cabina ejecutiva',
    descripcion: 'Espacio para mostrar acabados, detalle interior y experiencia premium.',
  },
  {
    titulo: 'Integración técnica',
    descripcion: 'Bloque pensado para resaltar instalación de aviónica y procesos de modernización.',
  },
  {
    titulo: 'Respuesta operativa',
    descripcion: 'Zona ideal para comunicar soporte AOG y disponibilidad de partes.',
  },
]
</script>

<template>
  <section class="gesa">
    <header class="gesa__hero">
      <div class="gesa__texto">
        <p class="gesa__pretitulo">{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="gesa__subtitulo">{{ vista.subtitulo }}</p>
        <p class="gesa__descripcion">{{ vista.descripcion }}</p>
      </div>

      <MarcadorVisual v-bind="vista.visual" />
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
        <h2>Bloque reservado para blueprint, taller o detalle interior.</h2>
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
.tarjeta,
.servicio {
  padding: 26px;
}

.gesa__pretitulo,
.tarjeta__etiqueta {
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
}
</style>
