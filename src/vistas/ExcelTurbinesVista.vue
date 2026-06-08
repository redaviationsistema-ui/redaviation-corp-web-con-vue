<script setup>
import heroPrincipal from '../assets/hero.png'

const capacidades = [
  'Inspecciones de motores',
  'Remoción e instalación',
  'Mantenimiento de turbinas',
  'Diagnósticos',
  'Revisión general',
  'Inspección de sección caliente',
  'Asistencia para aeronaves inmovilizadas',
]

const diferenciales = [
  {
    titulo: 'Lectura técnica para tu decisión',
    descripcion:
      'Aquí le hablas a tu cliente con claridad sobre condición, riesgo y profundidad de intervención antes de comprometer recursos críticos.',
  },
  {
    titulo: 'Respuesta industrial',
    descripcion:
      'Aquí presentas una unidad preparada para sostener procesos que requieren disciplina, documentación y criterio técnico especializado.',
  },
  {
    titulo: 'Continuidad operativa',
    descripcion:
      'Aquí refuerzas que el objetivo no es solo reparar un componente, sino devolver confianza a la operación completa.',
  },
]

const logoTitulo = {
  src: '/imagenes/LOGOS/Logo%20EXCEL.png',
  alt: 'Logo de Excel Turbines de México',
}
</script>

<template>
  <section class="excel">
    <header class="excel__hero">
      <div class="excel__texto">
        <p class="excel__pretitulo">Excel Turbines</p>
        <div class="excel__titulo">
          <h1>Aquí descubres cómo puedes tomar mejores decisiones sobre motores de turbina.</h1>
          <img :src="logoTitulo.src" :alt="logoTitulo.alt" class="excel__titulo-logo" />
        </div>
        <p class="excel__subtitulo">Motores, diagnóstico, revisión general y asistencia inmediata</p>
        <p class="excel__descripcion">
          Esta vista te habla directamente para que entiendas que tu operación necesita algo más
          que mantenimiento genérico: necesita diagnóstico, intervención técnica y continuidad bajo
          presión real.
        </p>
      </div>

      <article class="excel__visual">
        <span class="excel__etiqueta">Imagen local conectada</span>
        <strong>Motor de turbina</strong>
        <p>
          Este bloque ya muestra una imagen desde <code>src/assets/</code> y después puedes
          reemplazarla por una fotografía o representación técnica definitiva.
        </p>
        <div class="excel__media">
          <img :src="heroPrincipal" alt="Visual local para Excel Turbines" />
        </div>
      </article>
    </header>

    <section class="excel__grid">
      <article class="panel panel--principal">
        <p class="panel__etiqueta">Qué entiende tu cliente aquí</p>
        <h2>No solo reparas motores, también ayudas a decidir con mejor información.</h2>
        <p>
          Cuando esta vista está bien presentada, tu visitante percibe que puede acercarse a una
          unidad preparada para inspeccionar, diagnosticar y ejecutar sin improvisación.
        </p>
      </article>

      <article class="panel">
        <p class="panel__etiqueta">Animación sugerida</p>
        <h2>Haz que el motor se sienta vivo y técnico.</h2>
        <p>
          Puedes aplicar rotación lenta del recurso visual, iluminación progresiva de componentes y
          un recorrido técnico que revele etapas del servicio conforme el usuario avanza.
        </p>
      </article>
    </section>

    <section class="diferenciales">
      <article v-for="item in diferenciales" :key="item.titulo" class="panel">
        <p class="panel__etiqueta">{{ item.titulo }}</p>
        <h2>{{ item.titulo }}</h2>
        <p>{{ item.descripcion }}</p>
      </article>
    </section>

    <section class="servicios">
      <div class="servicios__encabezado">
        <p class="panel__etiqueta">Servicios</p>
        <h2>Aquí puedes desarrollar cada capacidad con más profundidad comercial y técnica.</h2>
      </div>

      <div class="servicios__rejilla">
        <article v-for="capacidad in capacidades" :key="capacidad" class="servicio">
          <h3>{{ capacidad }}</h3>
          <p>
            Este bloque te permite explicar el valor real de {{ capacidad.toLowerCase() }} dentro
            del ciclo operativo de tu cliente.
          </p>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.excel,
.excel__grid,
.diferenciales,
.servicios__rejilla {
  display: grid;
  gap: 18px;
}

.excel__hero,
.panel,
.servicio,
.excel__visual {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.excel__hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 18px;
}

.excel__texto,
.panel,
.servicio,
.excel__visual {
  padding: 26px;
}

.excel__pretitulo,
.panel__etiqueta,
.excel__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

.excel__titulo {
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

.excel__titulo-logo {
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

.excel__subtitulo {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.1rem;
}

.excel__descripcion,
.panel p,
.servicio p,
.excel__visual p {
  color: rgba(217, 217, 217, 0.78);
}

.excel__descripcion {
  max-width: 58ch;
  margin-top: 14px;
}

.excel__visual {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.excel__media {
  flex: 1;
  min-height: 260px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 5, 5, 0.46);
  padding: 18px;
}

.excel__media img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.32));
}

.excel__grid,
.diferenciales {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel--principal {
  background:
    radial-gradient(circle at top right, rgba(200, 16, 46, 0.18), transparent 30%),
    rgba(255, 255, 255, 0.04);
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
  .excel__hero,
  .excel__grid,
  .diferenciales,
  .servicios__rejilla {
    grid-template-columns: 1fr;
  }

  .excel__titulo {
    grid-template-columns: 1fr;
  }

  .excel__titulo-logo {
    justify-self: start;
  }
}
</style>
