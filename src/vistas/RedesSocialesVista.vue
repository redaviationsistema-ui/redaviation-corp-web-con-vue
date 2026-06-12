<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  pagina: {
    type: Object,
    required: true,
  },
})

const accesosDestacados = [
  {
    etiqueta: 'Landing institucional',
    titulo: 'Red Sky G Landing',
    descripcion:
      'Una presentación comercial diseñada para proyectar capacidad, respaldo operativo y posicionamiento de marca dentro del mercado de aviación privada.',
    enlace: 'https://redskyg.com/landing/es-mx',
    cta: 'Abrir landing',
  },
  {
    etiqueta: 'Captación de propietarios',
    titulo: 'Sell Your Aircraft',
    descripcion:
      'Una experiencia enfocada en propietarios que buscan comercializar su aeronave con un lenguaje más ejecutivo, discreto y orientado a conversión.',
    enlace: 'https://redskyg.com/sellyouraircraft/es-mx',
    cta: 'Abrir sitio',
  },
]

const canales = [
  {
    nombre: 'LinkedIn',
    icono: 'linkedin-icon-real',
    descripcion:
      'Publicaciones institucionales, alianzas, proyectos y actividad profesional para una audiencia corporativa.',
    enlace: 'https://www.linkedin.com/company/redaviationcompany',
    cta: 'Ver perfil',
  },
  {
    nombre: 'Instagram',
    icono: 'instagram-icon-real',
    descripcion:
      'Aeronaves, hangares, motores, inspecciones y contenido visual que refuerza la percepción premium de la marca.',
    enlace: 'https://www.instagram.com/redaviationcompany',
    cta: 'Ver perfil',
  },
  {
    nombre: 'Facebook',
    icono: 'facebook-icon-real',
    descripcion:
      'Noticias, comunidad y contenido comercial para mantener presencia digital en audiencias más amplias.',
    enlace: 'https://www.facebook.com/RedAviationJets/',
    cta: 'Ver perfil',
  },
  {
    nombre: 'Videos y contenido',
    icono: 'youtube-icon-real',
    descripcion:
      'Acceso a materiales, publicaciones y piezas narrativas que apoyan autoridad de marca y confianza comercial.',
    ruta: '/blog',
    cta: 'Ir al blog',
  },
]

const atributosHero = [
  'Estrategia de marca',
  'Contenido corporativo',
  'Audiencia conectada',
]
</script>

<template>
  <section class="redes">
    <header class="hero">
      <div class="hero__contenido">
        <p class="hero__etiqueta">{{ pagina.pretitulo }}</p>
        <h1>La presencia digital también proyecta valor aeronáutico.</h1>
        <p class="hero__descripcion">
          {{ pagina.descripcion }} Esta sección funciona como una vitrina editorial para mostrar
          autoridad, consistencia visual y confianza comercial en cada canal de Red Aviation.
        </p>
        <div class="hero__atributos">
          <span v-for="atributo in atributosHero" :key="atributo">{{ atributo }}</span>
        </div>
      </div>

      <div class="hero__visual">
        <img
          src="/imagenes/preesenciadigital.png?v=1"
          alt="Presencia digital de Red Aviation con enfoque corporativo y comercial"
        />
        <div class="hero__overlay">
          <span>Private Aviation Media</span>
          <strong>Imagen, reputación y narrativa corporativa</strong>
        </div>
      </div>
    </header>

    <section class="destacados">
      <article v-for="acceso in accesosDestacados" :key="acceso.titulo" class="tarjeta tarjeta--destacada">
        <p class="tarjeta__etiqueta">{{ acceso.etiqueta }}</p>
        <h2>{{ acceso.titulo }}</h2>
        <p>{{ acceso.descripcion }}</p>
        <a :href="acceso.enlace" target="_blank" rel="noopener noreferrer" class="tarjeta__boton">
          {{ acceso.cta }}
        </a>
      </article>
    </section>

    <section class="canales">
      <div class="canales__encabezado">
        <p class="hero__etiqueta">Canales activos</p>
        <h2>Una presencia digital alineada con aviación privada y representación premium.</h2>
      </div>

      <div class="canales__rejilla">
        <article v-for="canal in canales" :key="canal.nombre" class="tarjeta">
          <span class="tarjeta__icono">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <use :href="`/imagenes/icons.svg#${canal.icono}`"></use>
            </svg>
          </span>
          <h3>{{ canal.nombre }}</h3>
          <p>{{ canal.descripcion }}</p>

          <RouterLink
            v-if="canal.ruta"
            :to="canal.ruta"
            class="tarjeta__link"
          >
            {{ canal.cta }} →
          </RouterLink>
          <a
            v-else
            :href="canal.enlace"
            target="_blank"
            rel="noopener noreferrer"
            class="tarjeta__link"
          >
            {{ canal.cta }} →
          </a>
        </article>
      </div>
    </section>

    <section class="cierre">
      <article class="cierre__panel">
        <p class="hero__etiqueta">Dirección creativa</p>
        <h2>En aviación privada, la presencia digital también debe transmitir criterio.</h2>
        <p>
          Esta vista ya no se siente como un listado genérico de enlaces. Ahora funciona como una
          vitrina editorial para medios, proyectos y activos digitales vinculados al ecosistema
          comercial de Red Aviation.
        </p>
        <RouterLink to="/contacto" class="tarjeta__boton">Hablar con un asesor</RouterLink>
      </article>
    </section>
  </section>
</template>

<style scoped>
.redes,
.destacados,
.canales,
.canales__rejilla {
  display: grid;
  gap: 18px;
}

.hero,
.tarjeta,
.cierre__panel {
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.hero {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 18px;
  overflow: hidden;
}

.hero__contenido,
.tarjeta,
.cierre__panel {
  padding: 28px;
}

.hero__etiqueta,
.tarjeta__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

h1,
h2,
h3,
strong {
  margin: 0;
  color: #ffffff;
}

h1,
h2 {
  font-family: var(--fuente-titulo);
}

h1 {
  font-size: clamp(3rem, 6vw, 5.6rem);
  line-height: 0.95;
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.03;
}

h3 {
  font-size: 1.25rem;
}

.hero__contenido {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 560px;
}

.hero__subtitulo,
.hero__descripcion,
.tarjeta p,
.cierre__panel p {
  color: rgba(217, 217, 217, 0.78);
}

.hero__subtitulo {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.14rem;
}

.hero__descripcion {
  margin-top: 14px;
  max-width: 34ch;
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero__atributos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.hero__atributos span {
  padding: 10px 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.84);
  background: rgba(255, 255, 255, 0.03);
}

.hero__visual {
  position: relative;
  min-height: 560px;
  display: grid;
  place-items: center;
  padding: 24px;
  background:
    radial-gradient(circle at center, rgba(255, 255, 255, 0.06), transparent 62%),
    rgba(8, 8, 8, 0.92);
}

.hero__visual img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  filter: saturate(1.05) contrast(1.02);
}

.hero__overlay {
  position: absolute;
  right: 24px;
  bottom: 24px;
  left: 24px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 24px;
  background: rgba(5, 5, 5, 0.62);
  backdrop-filter: blur(10px);
}

.hero__overlay span {
  display: block;
  margin-bottom: 8px;
  color: #ff7187;
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.destacados {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.tarjeta--destacada {
  background:
    radial-gradient(circle at top right, rgba(200, 16, 46, 0.14), transparent 28%),
    rgba(255, 255, 255, 0.04);
}

.tarjeta__icono {
  display: inline-grid;
  width: 52px;
  height: 52px;
  margin-bottom: 18px;
  border-radius: 50%;
  place-items: center;
  border: 1px solid rgba(255, 77, 104, 0.22);
  background: rgba(200, 16, 46, 0.08);
}

.tarjeta__icono svg {
  width: 22px;
  height: 22px;
  color: #ff7187;
}

.tarjeta__boton,
.tarjeta__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  margin-top: 18px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 77, 104, 0.3);
  color: #ffffff;
  text-decoration: none;
  background: linear-gradient(135deg, rgba(200, 16, 46, 0.92), rgba(143, 15, 40, 0.92));
}

.tarjeta__link {
  margin-top: 16px;
  min-height: auto;
  padding: 0;
  border: 0;
  border-radius: 0;
  color: #ff7187;
  background: transparent;
  justify-content: flex-start;
}

.canales__rejilla {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.cierre__panel {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

@media (max-width: 960px) {
  .hero,
  .destacados,
  .canales__rejilla {
    grid-template-columns: 1fr;
  }

  .hero__contenido {
    min-height: auto;
  }

  .hero__visual {
    min-height: 380px;
    padding: 18px;
  }
}
</style>
