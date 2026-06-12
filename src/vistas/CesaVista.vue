<script setup>
import CarruselContenido from '../componentes/CarruselContenido.vue'

const heroPrincipal = '/imagenes/hero.png'

const etapas = ['Recepción', 'Inspección', 'Reparación', 'Certificación', 'Entrega']

const capacidades = [
  'Mantenimiento de estructura',
  'Reparaciones estructurales',
  'Inspecciones de aeronaves',
  'Mantenimiento programado',
  'Mantenimiento pesado',
  'Ensamblaje y desensamblaje',
  'Asistencia para aeronaves inmovilizadas',
  'Consultoría técnica',
]

const carruselImagenes = []

const logoTitulo = {
  src: '/imagenes/logo-cesa.png',
  alt: 'Logo de CESA',
}
</script>

<template>
  <section class="cesa">
    <header class="cesa__hero">
      <div class="cesa__texto">
        <p class="cesa__pretitulo">CESA</p>
        <div class="cesa__titulo">
          <h1>Aquí dejas claro que tu mantenimiento mayor sí tiene estructura y método.</h1>
          <img :src="logoTitulo.src" :alt="logoTitulo.alt" class="cesa__titulo-logo" />
        </div>
        <p class="cesa__subtitulo">Mantenimiento, reparación, estructura y disciplina operativa</p>
        <p class="cesa__descripcion">
          Esta vista te ayuda a explicarle a tu cliente que puede confiar en una unidad preparada
          para ejecutar mantenimiento complejo con orden, visibilidad y criterio técnico.
        </p>
      </div>

      <article class="cesa__visual">
        <span class="cesa__etiqueta">Imagen local conectada</span>
        <strong>Línea temporal de mantenimiento</strong>
        <p>
          Este módulo ya usa una imagen desde <code>public/imagenes/</code> y puedes sustituirla cuando
          tengas fotografía real de taller, hangar o estructura.
        </p>
        <div class="cesa__media">
          <img :src="heroPrincipal" alt="Visual local para CESA" />
        </div>
      </article>
    </header>

    <section class="cesa__grid">
      <article class="panel panel--principal">
        <p class="panel__etiqueta">Qué le comunicas al visitante</p>
        <h2>No hablas solo de mantenimiento, hablas de control operativo.</h2>
        <p>
          Cuando esta vista tiene peso narrativo, tu cliente percibe que puede delegar procesos
          complejos a una organización que sabe documentar, intervenir y cerrar ciclos con orden.
        </p>
      </article>

      <article class="panel">
        <p class="panel__etiqueta">Animación sugerida</p>
        <h2>Haz visible el proceso paso a paso.</h2>
        <p>
          Puedes animar la línea de mantenimiento durante el desplazamiento, con tarjetas
          industriales de aparición progresiva y pequeños acentos rojos para destacar cada fase
          crítica.
        </p>
      </article>
    </section>

    <section class="timeline">
      <article v-for="etapa in etapas" :key="etapa" class="timeline__paso">
        <span>{{ etapa }}</span>
      </article>
    </section>

    <CarruselContenido
      titulo="Galería técnica de CESA"
      :elementos="carruselImagenes"
      tamano-titulo="compacto"
      tamano-contenido="compacto"
    />

    <section class="servicios">
      <div class="servicios__encabezado">
        <p class="panel__etiqueta">Capacidades de CESA</p>
        <h2>Aquí puedes desarrollar cada frente técnico con una voz directa y más convincente.</h2>
      </div>

      <div class="servicios__rejilla">
        <article v-for="capacidad in capacidades" :key="capacidad" class="servicio">
          <h3>{{ capacidad }}</h3>
          <p>
            Este bloque te permite explicar cómo {{ capacidad.toLowerCase() }} fortalece la
            seguridad, continuidad y trazabilidad de la aeronave.
          </p>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.cesa,
.cesa__grid,
.timeline,
.servicios__rejilla {
  display: grid;
  gap: 18px;
}

.cesa__hero,
.panel,
.servicio,
.timeline__paso,
.cesa__visual {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.cesa__hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.cesa__texto,
.panel,
.servicio,
.timeline__paso,
.cesa__visual {
  padding: 26px;
}

.cesa__pretitulo,
.panel__etiqueta,
.cesa__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

.cesa__titulo {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 18px;
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
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 0.96;
}

.cesa__titulo-logo {
  width: clamp(82px, 10vw, 126px);
  max-height: 82px;
  object-fit: contain;
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.28));
  justify-self: end;
}

h2 {
  font-size: clamp(1.6rem, 3vw, 2.6rem);
  line-height: 1.02;
}

h3 {
  font-size: 1.15rem;
}

.cesa__subtitulo {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.1rem;
}

.cesa__descripcion,
.panel p,
.servicio p,
.cesa__visual p {
  color: rgba(217, 217, 217, 0.78);
}

.cesa__descripcion {
  max-width: 58ch;
  margin-top: 14px;
}

.cesa__visual {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cesa__media {
  flex: 1;
  min-height: 260px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 5, 5, 0.46);
  padding: 18px;
}

.cesa__media img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.32));
}

.cesa__grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel--principal {
  background:
    radial-gradient(circle at top right, rgba(200, 16, 46, 0.18), transparent 30%),
    rgba(255, 255, 255, 0.04);
}

.timeline {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.timeline__paso {
  min-height: 120px;
  display: flex;
  align-items: end;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.04)),
    radial-gradient(circle at top left, rgba(200, 16, 46, 0.14), transparent 30%);
}

.timeline__paso span {
  color: #ffffff;
  font-weight: 600;
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
  .cesa__hero,
  .cesa__grid,
  .servicios__rejilla {
    grid-template-columns: 1fr;
  }

  .cesa__titulo {
    grid-template-columns: 1fr;
  }

  .cesa__titulo-logo {
    justify-self: start;
  }
}
</style>
