<script setup>
import { RouterLink } from 'vue-router'
import CarruselContenido from '../componentes/CarruselContenido.vue'
import MarcadorVisual from '../componentes/MarcadorVisual.vue'
import MedioVisual from '../componentes/MedioVisual.vue'

defineProps({
  pagina: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    v-if="pagina.soloMultimedia"
    class="estructura estructura--solo-multimedia"
  >
    <MedioVisual
      :titulo="pagina.tituloMultimedia ?? pagina.titulo"
      :descripcion="pagina.descripcionMultimedia"
      :tipo="pagina.multimedia?.tipo"
      :fuente="pagina.multimedia?.fuente"
      :enlace="pagina.multimedia?.enlace"
      :alt="pagina.multimedia?.alt"
    />
  </section>

  <section v-else class="estructura">
    <header class="estructura__hero">
      <div class="estructura__texto">
        <p class="estructura__etiqueta">{{ pagina.pretitulo }}</p>
        <h1>{{ pagina.titulo }}</h1>
        <p class="estructura__subtitulo">{{ pagina.subtitulo }}</p>
        <p>{{ pagina.descripcion }}</p>
      </div>
      <MarcadorVisual v-bind="pagina.visual" />
    </header>

    <section v-if="pagina.metricas?.length" class="metricas">
      <article v-for="metrica in pagina.metricas" :key="metrica.etiqueta">
        <strong>{{ metrica.valor }}</strong>
        <span>{{ metrica.etiqueta }}</span>
      </article>
    </section>

    <section v-if="pagina.bloques?.length" class="bloques">
      <article v-for="bloque in pagina.bloques" :key="bloque.titulo">
        <h2>{{ bloque.titulo }}</h2>
        <p>{{ bloque.descripcion }}</p>
        <div v-if="bloque.items?.length" class="etiquetas">
          <span v-for="item in bloque.items" :key="item">{{ item }}</span>
        </div>
        <RouterLink v-if="bloque.ruta" :to="bloque.ruta">Conocer esta área →</RouterLink>
        <a
          v-else-if="bloque.enlace"
          :href="bloque.enlace"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar perfil oficial →
        </a>
      </article>
    </section>

    <section v-if="pagina.proceso?.length" class="proceso">
      <article v-for="(paso, indice) in pagina.proceso" :key="paso">
        <span class="proceso__nodo">{{ String(indice + 1).padStart(2, '0') }}</span>
        <strong>{{ paso }}</strong>
      </article>
    </section>

    <section v-if="pagina.galeria?.length" class="galeria">
      <div class="galeria__encabezado">
        <p class="estructura__etiqueta">Capacidad en operación</p>
        <h2>Instalaciones, equipo y procesos técnicos.</h2>
      </div>
      <figure v-for="imagen in pagina.galeria" :key="imagen.fuente">
        <img :src="imagen.fuente" :alt="imagen.alt" />
      </figure>
    </section>

    <CarruselContenido
      v-if="pagina.carrusel?.length"
      :titulo="pagina.tituloCarrusel"
      :elementos="pagina.carrusel"
    />

    <MedioVisual
      v-if="!pagina.galeria?.length"
      :titulo="pagina.tituloMultimedia ?? 'Galería multimedia'"
      :descripcion="pagina.descripcionMultimedia"
      :tipo="pagina.multimedia?.tipo"
      :fuente="pagina.multimedia?.fuente"
      :enlace="pagina.multimedia?.enlace"
      :alt="pagina.multimedia?.alt"
    />

    <RouterLink to="/contacto" class="estructura__boton">Solicitar información</RouterLink>
  </section>
</template>

<style scoped>
.estructura,
.estructura__hero,
.metricas,
.bloques,
.proceso {
  display: grid;
  gap: 18px;
}

.galeria {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: auto repeat(2, 220px);
  gap: 12px;
}

.galeria__encabezado {
  grid-column: 1 / -1;
  padding: 24px 0 8px;
}

.galeria figure {
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
}

.galeria figure:first-of-type {
  grid-row: 2 / 4;
}

.galeria img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.estructura__hero {
  grid-template-columns: 1.15fr 0.85fr;
}

.estructura__texto,
.metricas article,
.bloques article,
.proceso article {
  padding: 28px;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.estructura__etiqueta {
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

h1,
h2,
strong {
  color: #fff;
  font-family: var(--fuente-titulo);
}

h1 {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 5.6rem);
  line-height: 0.96;
}

h2 {
  margin-top: 0;
}

.estructura__subtitulo {
  color: #fff;
  font-size: 1.2rem;
}

.estructura__texto > p:last-child,
.bloques p,
.metricas span {
  color: rgba(217, 217, 217, 0.78);
}

.metricas {
  grid-template-columns: repeat(3, 1fr);
}

.metricas strong {
  display: block;
  font-size: 2rem;
}

.metricas article {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.metricas article:first-child {
  border-left: 0;
}

.bloques {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.bloques article {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.bloques a {
  display: inline-block;
  margin-top: 14px;
  color: #ff7187;
}

.etiquetas {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.etiquetas span {
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
}

.proceso {
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
  gap: 14px;
  padding: 22px 0;
}

.proceso::before {
  position: absolute;
  top: 45px;
  right: 5%;
  left: 5%;
  height: 2px;
  background: linear-gradient(90deg, #c8102e, #ff7187);
  content: '';
}

.proceso article {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 16px;
  min-height: 125px;
  padding: 0 8px;
  border: 0;
  background: transparent;
  text-align: center;
}

.proceso .proceso__nodo {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 2px solid #ff4d68;
  border-radius: 50%;
  color: #fff;
  background: #111;
  box-shadow: 0 0 0 7px #111;
  font-size: 0.76rem;
}

.proceso strong {
  line-height: 1.3;
}

.estructura__boton {
  justify-self: start;
  padding: 14px 20px;
  border-radius: 999px;
  color: #fff;
  background: #c8102e;
}

@media (max-width: 900px) {
  .estructura__hero,
  .metricas,
  .bloques {
    grid-template-columns: 1fr;
  }

  .galeria {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .galeria__encabezado,
  .galeria figure:first-of-type {
    grid-column: auto;
    grid-row: auto;
  }

  .galeria figure {
    height: 260px;
  }

  .proceso {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 10px 0;
  }

  .proceso::before {
    top: 34px;
    bottom: 34px;
    left: 23px;
    width: 2px;
    height: auto;
    background: linear-gradient(180deg, #c8102e, #ff7187);
  }

  .proceso article {
    grid-template-columns: 48px 1fr;
    justify-items: start;
    gap: 18px;
    min-height: 82px;
    text-align: left;
  }

  .proceso strong {
    align-self: center;
  }
}
</style>
