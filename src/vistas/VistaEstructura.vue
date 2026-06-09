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

      <div v-if="!pagina.ocultarVisual" class="estructura__hero-visual">
        <div v-if="pagina.logoTitulo?.src" class="estructura__logo-panel">
          <img
            :src="pagina.logoTitulo.src"
            :alt="pagina.logoTitulo.alt"
            class="estructura__logo"
          />
        </div>

        <MarcadorVisual v-bind="pagina.visual" />
      </div>
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
        <h2>{{ pagina.galeriaTitulo ?? 'Instalaciones, equipo y procesos técnicos.' }}</h2>
        <p v-if="pagina.galeriaDescripcion" class="galeria__descripcion">
          {{ pagina.galeriaDescripcion }}
        </p>
      </div>
      <figure v-for="imagen in pagina.galeria" :key="imagen.fuente">
        <img :src="imagen.fuente" :alt="imagen.alt" />
        <figcaption v-if="imagen.titulo || imagen.descripcion" class="galeria__caption">
          <strong v-if="imagen.titulo">{{ imagen.titulo }}</strong>
          <span v-if="imagen.descripcion">{{ imagen.descripcion }}</span>
        </figcaption>
      </figure>
    </section>

    <CarruselContenido
      v-if="pagina.carrusel?.length"
      :titulo="pagina.tituloCarrusel"
      :elementos="pagina.carrusel"
    />

    <section v-if="pagina.multimediaDestacada" class="destacado-video">
      <div class="destacado-video__contenido">
        <p class="estructura__etiqueta">
          {{ pagina.etiquetaMultimedia ?? 'Operaciones de vuelo' }}
        </p>
        <h2>{{ pagina.tituloMultimedia ?? 'Experiencia audiovisual' }}</h2>
        <p class="destacado-video__resumen">
          {{ pagina.descripcionMultimedia }}
        </p>
      </div>

      <div class="destacado-video__panel">
        <div class="destacado-video__media">
          <video
            :src="pagina.multimediaDestacada.video?.fuente"
            :autoplay="pagina.multimediaDestacada.video?.reproduccionAutomatica"
            :muted="pagina.multimediaDestacada.video?.silenciado ?? true"
            :loop="pagina.multimediaDestacada.video?.repetir ?? true"
            playsinline
          />
        </div>

        <div class="destacado-video__texto">
          <h3>{{ pagina.multimediaDestacada.titulo }}</h3>
          <p>{{ pagina.multimediaDestacada.descripcion }}</p>

          <ul class="destacado-video__lista" v-if="pagina.multimediaDestacada.puntos?.length">
            <li v-for="punto in pagina.multimediaDestacada.puntos" :key="punto">
              {{ punto }}
            </li>
          </ul>
        </div>
      </div>

      <div class="destacado-video__cta">
        <div>
          <h3>{{ pagina.multimediaDestacada.ctaTitulo }}</h3>
          <p>{{ pagina.multimediaDestacada.ctaDescripcion }}</p>
        </div>

        <RouterLink
          :to="pagina.multimediaDestacada.ctaRuta ?? '/contacto'"
          class="destacado-video__boton"
        >
          {{ pagina.multimediaDestacada.ctaTexto ?? 'Solicitar información' }}
        </RouterLink>
      </div>
    </section>

    <MedioVisual
      v-if="!pagina.galeria?.length && !pagina.ocultarMultimedia && !pagina.multimediaDestacada"
      :titulo="pagina.tituloMultimedia ?? 'Galería multimedia'"
      :descripcion="pagina.descripcionMultimedia"
      :tipo="pagina.multimedia?.tipo"
      :fuente="pagina.multimedia?.fuente"
      :portada="pagina.multimedia?.portada"
      :enlace="pagina.multimedia?.enlace"
      :alt="pagina.multimedia?.alt"
      :duracion-maxima="pagina.multimedia?.duracionMaxima"
      :mostrar-controles="pagina.multimedia?.mostrarControles"
      :silenciado="pagina.multimedia?.silenciado"
      :reproduccion-automatica="pagina.multimedia?.reproduccionAutomatica"
      :repetir="pagina.multimedia?.repetir"
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

.destacado-video {
  display: grid;
  gap: 24px;
  padding: 28px 0 10px;
}

.destacado-video__contenido,
.destacado-video__panel,
.destacado-video__cta {
  display: grid;
  gap: 18px;
}

.destacado-video__contenido {
  max-width: 900px;
}

.destacado-video__resumen,
.destacado-video__texto p,
.destacado-video__cta p {
  color: rgba(217, 217, 217, 0.8);
}

.destacado-video__panel {
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  align-items: stretch;
}

.destacado-video__media {
  overflow: hidden;
  min-height: 320px;
  max-height: 360px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
}

.destacado-video__media video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destacado-video__texto {
  padding: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.02);
}

.destacado-video__texto h3,
.destacado-video__cta h3 {
  margin: 0;
  color: #fff;
  font-family: var(--fuente-titulo);
}

.destacado-video__lista {
  display: grid;
  gap: 10px;
  padding-left: 18px;
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
}

.destacado-video__cta {
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  padding: 24px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.destacado-video__boton {
  justify-self: start;
  padding: 14px 20px;
  border-radius: 999px;
  color: #fff;
  background: #c8102e;
}

.galeria__encabezado {
  grid-column: 1 / -1;
  padding: 24px 0 8px;
}

.galeria__descripcion,
.galeria__caption span {
  color: rgba(217, 217, 217, 0.78);
}

.galeria figure {
  position: relative;
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

.galeria__caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  gap: 6px;
  padding: 18px;
  background: linear-gradient(180deg, rgba(6, 6, 6, 0) 0%, rgba(6, 6, 6, 0.82) 100%);
}

.galeria__caption strong {
  color: #fff;
  font-size: 1rem;
}

.estructura__hero {
  grid-template-columns: 1.15fr 0.85fr;
}

.estructura__texto,
.estructura__hero-visual,
.metricas article,
.bloques article,
.proceso article {
  padding: 28px;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.estructura__hero-visual {
  display: grid;
  gap: 20px;
  align-content: start;
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

.estructura__logo-panel {
  position: relative;
  overflow: hidden;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 14px;
  min-height: 250px;
  padding: 26px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 32px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(244, 244, 244, 0.96));
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  animation: bandera-panel 5.8s ease-in-out infinite;
  transform-origin: left center;
}

.estructura__logo-panel::before,
.estructura__logo-panel::after {
  position: absolute;
  inset: -12%;
  content: '';
  pointer-events: none;
}

.estructura__logo-panel::before {
  background:
    linear-gradient(
      100deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(224, 224, 224, 0.94) 14%,
      rgba(255, 255, 255, 0.98) 36%,
      rgba(220, 220, 220, 0.95) 52%,
      rgba(255, 255, 255, 0.98) 72%,
      rgba(226, 226, 226, 0.95) 100%
    );
  background-size: 220% 220%;
  animation: bandera-onda 6.5s ease-in-out infinite;
}

.estructura__logo-panel::after {
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.07) 20%,
      rgba(255, 255, 255, 0) 48%,
      rgba(0, 0, 0, 0.085) 72%,
      rgba(255, 255, 255, 0) 100%
    );
  mix-blend-mode: multiply;
  opacity: 0.95;
  animation: bandera-sombra 5.5s ease-in-out infinite;
}

.estructura__logo {
  position: relative;
  z-index: 1;
  width: min(100%, 320px);
  max-height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 18px 28px rgba(0, 0, 0, 0.28));
}

@keyframes bandera-onda {
  0%,
  100% {
    transform: translate3d(-3%, 0, 0) skewX(-3deg) scaleY(1);
    background-position: 0% 50%;
    border-radius: 28px 44px 28px 48px;
  }

  25% {
    transform: translate3d(3%, -1.5%, 0) skewX(2.8deg) scaleY(1.04);
    background-position: 38% 43%;
    border-radius: 48px 24px 44px 22px;
  }

  50% {
    transform: translate3d(-2.5%, 1.5%, 0) skewX(-2.6deg) scaleY(0.96);
    background-position: 72% 54%;
    border-radius: 24px 48px 22px 44px;
  }

  75% {
    transform: translate3d(2.8%, -1%, 0) skewX(3.2deg) scaleY(1.03);
    background-position: 100% 48%;
    border-radius: 46px 28px 42px 24px;
  }
}

@keyframes bandera-sombra {
  0%,
  100% {
    transform: translateX(-4%) skewX(-4deg);
    opacity: 0.7;
  }

  50% {
    transform: translateX(4%) skewX(4deg);
    opacity: 1;
  }
}

@keyframes bandera-panel {
  0%,
  100% {
    transform: perspective(1200px) rotateY(-6deg) rotateX(1.2deg) skewY(-1deg)
      translateX(-1%) scaleX(1.01) scaleY(0.995);
    border-radius: 28px 44px 28px 48px;
  }

  20% {
    transform: perspective(1200px) rotateY(4.5deg) rotateX(-1deg) skewY(1.2deg)
      translateX(1.2%) scaleX(1.03) scaleY(0.98);
    border-radius: 42px 26px 46px 24px;
  }

  45% {
    transform: perspective(1200px) rotateY(-7deg) rotateX(1.3deg) skewY(-1.4deg)
      translateX(-1.5%) scaleX(0.985) scaleY(1.03);
    border-radius: 24px 48px 22px 44px;
  }

  70% {
    transform: perspective(1200px) rotateY(5.5deg) rotateX(-1.1deg) skewY(1.3deg)
      translateX(1.4%) scaleX(1.035) scaleY(0.985);
    border-radius: 46px 24px 42px 28px;
  }
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
  .bloques,
  .destacado-video__panel,
  .destacado-video__cta {
    grid-template-columns: 1fr;
  }

  .estructura__logo-panel {
    min-height: 220px;
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

  .destacado-video__media {
    min-height: 220px;
    max-height: 260px;
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

@media (max-width: 620px) {
  .estructura {
    gap: 22px;
  }

  .estructura__texto,
  .estructura__hero-visual,
  .metricas article,
  .bloques article {
    padding: 20px 16px;
  }

  .estructura__logo-panel {
    min-height: 180px;
    padding: 20px;
    border-radius: 24px;
  }

  .estructura__logo {
    max-height: 132px;
  }

  h1 {
    font-size: clamp(2.3rem, 11vw, 3.6rem);
    line-height: 0.98;
  }

  h2 {
    font-size: clamp(1.55rem, 7vw, 2.2rem);
  }

  .estructura__subtitulo {
    font-size: 1rem;
  }

  .estructura__texto > p:last-child,
  .bloques p,
  .metricas span,
  .destacado-video__resumen,
  .destacado-video__texto p,
  .destacado-video__cta p {
    font-size: 0.94rem;
    line-height: 1.65;
  }

  .metricas {
    gap: 0;
  }

  .metricas article {
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .metricas article:first-child {
    border-top: 0;
  }

  .bloques {
    gap: 8px;
  }

  .etiquetas span {
    padding: 7px 10px;
    font-size: 0.8rem;
  }

  .galeria figure {
    height: 220px;
  }

  .destacado-video {
    gap: 18px;
    padding-top: 16px;
  }

  .destacado-video__texto {
    padding: 20px 16px;
  }

  .destacado-video__media {
    min-height: 200px;
    max-height: 220px;
  }

  .destacado-video__cta {
    gap: 14px;
    padding-top: 18px;
  }

  .destacado-video__boton,
  .estructura__boton {
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  .proceso article {
    gap: 14px;
    padding-right: 8px;
  }
}
</style>
