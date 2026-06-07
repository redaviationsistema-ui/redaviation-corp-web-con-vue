<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { obtenerVista } from '../datos/sitio'
import CarruselContenido from '../componentes/CarruselContenido.vue'
import MedioVisual from '../componentes/MedioVisual.vue'
import { carruselEmpresas, carruselMultimedia } from '../datos/contenidoNuevo'

const vista = obtenerVista('inicio')

const divisiones = [
  { icono: '✈', titulo: 'Venta y adquisición de aeronaves' },
  { icono: '🛫', titulo: 'Vuelos privados' },
  { icono: '⚙', titulo: 'Mantenimiento' },
  { icono: '◉', titulo: 'Gestión de aeronaves' },
  { icono: '⌁', titulo: 'Consultoría aeronáutica' },
]

const razones = [
  { icono: '◆', titulo: 'Representación confidencial' },
  { icono: '⚙', titulo: 'Criterio técnico' },
  { icono: '⌖', titulo: 'Inteligencia de mercado' },
  { icono: '✓', titulo: 'Ejecución integral' },
]

const empresas = [
  {
    icono: '◈',
    nombre: 'Red Aviation Asesoría',
    descripcion:
      'Estructura comercial para analizar oportunidades, valorar activos y conducir negociaciones.',
  },
  {
    icono: '✦',
    nombre: 'Red Aviation Operaciones',
    descripcion:
      'Coordinación operativa y documental para proteger continuidad, cumplimiento y control.',
  },
  {
    icono: '⚙',
    nombre: 'Red Aviation Servicios Técnicos',
    descripcion:
      'Capacidad técnica para inspeccionar, mantener y respaldar decisiones sobre activos aeronáuticos.',
  },
]

const redes = [
  { nombre: 'LinkedIn', icono: 'in' },
  { nombre: 'Instagram', icono: '◎' },
  { nombre: 'Facebook', icono: 'f' },
  { nombre: 'YouTube', icono: '▶' },
  { nombre: 'X', icono: '𝕏' },
]

const iconosMetricas = ['⌖', '360°', '◆']

const testimonios = [
  {
    autor: 'Director de Operaciones',
    texto:
      'Cuando trabajas con un grupo que sí entiende la región, tus decisiones se vuelven más rápidas y mucho más seguras.',
  },
  {
    autor: 'Propietario de aeronave',
    texto:
      'La operación fue conducida con discreción, información clara y criterio técnico durante cada etapa.',
  },
]

let observador

onMounted(() => {
  const elementos = document.querySelectorAll('.inicio .revelar')

  observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('revelado')
          observador.unobserve(entrada.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px' },
  )

  elementos.forEach((elemento) => observador.observe(elemento))
})

onBeforeUnmount(() => observador?.disconnect())
</script>

<template>
  <section class="inicio">
    <header class="hero revelar">
      <div class="hero__radar" aria-hidden="true">
        <span class="hero__orbita hero__orbita--uno"></span>
        <span class="hero__orbita hero__orbita--dos"></span>
        <span class="hero__avion">✈</span>
      </div>
      <div class="hero__texto">
        <p class="hero__pretitulo"><span>✦</span>{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="hero__subtitulo">{{ vista.subtitulo }}</p>
        <p class="hero__descripcion">{{ vista.descripcion }}</p>

        <div class="hero__acciones">
          <RouterLink to="/contacto" class="hero__boton hero__boton--principal">
            <span>✈</span> Solicitar Cotización
          </RouterLink>
          <RouterLink to="/contacto" class="hero__boton hero__boton--secundario">
            <span>◉</span> Hablar con un Asesor
          </RouterLink>
          <RouterLink to="/nosotros" class="hero__boton hero__boton--secundario">
            Conocer Nuestras Empresas <span>→</span>
          </RouterLink>
        </div>
      </div>

      <article class="hero__visual">
        <span class="hero__etiqueta"><i></i>{{ vista.visual.etiqueta }}</span>
        <strong>{{ vista.visual.tipo }}</strong>
        <p>{{ vista.visual.detalle }}</p>
        <div class="hero__media">
          <img src="/imagenes/inicio/inicio1.jpg" :alt="vista.visual.alt" />
          <div class="hero__media-datos" aria-hidden="true">
            <span>ALT 35,000 FT</span>
            <span>CRS 284°</span>
          </div>
        </div>
      </article>
    </header>

    <section class="metricas revelar">
      <article v-for="(metrica, indice) in vista.metricas" :key="metrica.etiqueta" class="metrica">
        <i>{{ iconosMetricas[indice] }}</i>
        <strong>{{ metrica.valor }}</strong>
        <span>{{ metrica.etiqueta }}</span>
      </article>
    </section>

    <MedioVisual
      class="revelar"
      titulo="Capacidad que se demuestra"
      descripcion="Instalaciones, aeronaves, inspecciones y equipos especializados respaldan cada mandato comercial y técnico."
      tipo="imagen"
      fuente="/imagenes/inicio/inicio-hangar.png"
      alt="Aeronaves ejecutivas dentro de un hangar de mantenimiento"
    />

    <CarruselContenido
      class="revelar"
      titulo="Accesos rápidos a las empresas del grupo"
      :elementos="carruselEmpresas"
      automatico
    />

    <section class="bloque bloque--doble revelar">
      <article class="panel">
        <p class="panel__etiqueta">¿Quiénes Somos?</p>
        <h2>Una firma privada para decisiones aeronáuticas de alto valor.</h2>
        <p>
          Red Aviation Co. integra representación comercial, análisis de mercado, revisión técnica
          y coordinación operativa para proteger el valor del activo y los intereses del cliente.
        </p>
      </article>

      <article class="panel">
        <p class="panel__etiqueta">Cobertura Regional</p>
        <h2>Conocimiento local para ejecutar operaciones entre distintos mercados.</h2>
        <p>
          Coordinamos oportunidades en México y Estados Unidos
          mediante relaciones comerciales, soporte técnico y seguimiento documental.
        </p>
      </article>
    </section>

    <CarruselContenido
      class="revelar"
      titulo="Proyectos, instalaciones y capacidades"
      :elementos="carruselMultimedia"
    />

    <section class="bloque revelar">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">Sigue a Red Aviation</p>
        <h2>Noticias, proyectos y actividad corporativa.</h2>
      </div>
      <div class="rejilla">
        <RouterLink
          v-for="red in redes"
          :key="red.nombre"
          to="/redes-sociales"
          class="tarjeta tarjeta--icono"
        >
          <span class="tarjeta__icono">{{ red.icono }}</span>
          <h3>{{ red.nombre }}</h3>
          <p>Proyectos, operaciones, capacidades técnicas y noticias relevantes de la firma.</p>
          <span class="tarjeta__flecha">Explorar →</span>
        </RouterLink>
      </div>
    </section>

    <section class="bloque revelar">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">Nuestras Divisiones</p>
        <h2>Capacidades coordinadas bajo una sola responsabilidad.</h2>
      </div>

      <div class="rejilla">
        <article v-for="division in divisiones" :key="division.titulo" class="tarjeta tarjeta--icono">
          <span class="tarjeta__icono">{{ division.icono }}</span>
          <h3>{{ division.titulo }}</h3>
          <p>
            {{ division.titulo }} se gestiona con análisis especializado, control documental y seguimiento
            directo durante toda la operación.
          </p>
        </article>
      </div>
    </section>

    <section class="bloque revelar">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">¿Por Qué Elegirnos?</p>
        <h2>La confianza se construye con información, discreción y ejecución.</h2>
      </div>

      <div class="tags">
        <span v-for="razon in razones" :key="razon.titulo">
          <i>{{ razon.icono }}</i>{{ razon.titulo }}
        </span>
      </div>
    </section>

    <section class="bloque revelar">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">Empresas del Grupo</p>
        <h2>Equipos especializados para cada dimensión del activo.</h2>
      </div>

      <div class="rejilla">
        <article v-for="empresa in empresas" :key="empresa.nombre" class="tarjeta">
          <span class="tarjeta__icono">{{ empresa.icono }}</span>
          <h3>{{ empresa.nombre }}</h3>
          <p>{{ empresa.descripcion }}</p>
        </article>
      </div>
    </section>

    <section class="bloque bloque--doble revelar">
      <article class="panel">
        <p class="panel__etiqueta">Testimonios</p>
        <div class="testimonios">
          <blockquote v-for="testimonio in testimonios" :key="testimonio.autor">
            <span class="comillas">“</span>
            <p>{{ testimonio.texto }}</p>
            <footer>{{ testimonio.autor }}</footer>
          </blockquote>
        </div>
      </article>

      <article class="panel panel--cta">
        <p class="panel__etiqueta">Invitación final</p>
        <h2>Hable con nuestros especialistas.</h2>
        <p>
          Converse de forma confidencial con un especialista sobre su aeronave, una oportunidad de
          adquisición o un mandato de comercialización.
        </p>
        <RouterLink to="/contacto" class="hero__boton hero__boton--principal">
          Hablar con un Asesor <span>✈</span>
        </RouterLink>
      </article>
    </section>
  </section>
</template>

<style scoped>
.inicio,
.metricas,
.bloque,
.bloque--doble,
.rejilla,
.testimonios {
  display: grid;
  gap: 18px;
}

.inicio {
  position: relative;
  isolation: isolate;
}

.inicio::before {
  position: absolute;
  z-index: -1;
  top: 120px;
  left: 50%;
  width: min(900px, 90vw);
  height: 900px;
  border: 1px solid rgba(255, 77, 104, 0.05);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 16, 46, 0.08), transparent 66%);
  content: '';
  transform: translateX(-50%);
  pointer-events: none;
}

.revelar {
  opacity: 0;
  transform: translateY(42px);
  transition:
    opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.revelar.revelado {
  opacity: 1;
  transform: translateY(0);
}

.hero,
.hero__visual,
.metrica,
.panel,
.tarjeta {
  border-radius: 0;
  border: 0;
  background: transparent;
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  gap: 18px;
  padding: 24px 0 54px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  isolation: isolate;
}

.hero::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  background:
    linear-gradient(115deg, rgba(200, 16, 46, 0.11), transparent 38%),
    repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 79px,
      rgba(255, 255, 255, 0.018) 80px
    );
  content: '';
  pointer-events: none;
}

.hero__radar {
  position: absolute;
  z-index: -1;
  top: -180px;
  left: -210px;
  width: 560px;
  height: 560px;
  border: 1px solid rgba(255, 77, 104, 0.08);
  border-radius: 50%;
  pointer-events: none;
}

.hero__orbita {
  position: absolute;
  border: 1px dashed rgba(255, 77, 104, 0.13);
  border-radius: 50%;
  inset: 70px;
}

.hero__orbita--dos {
  inset: 150px;
}

.hero__avion {
  position: absolute;
  right: 56px;
  bottom: 80px;
  color: #ff7187;
  filter: drop-shadow(0 0 10px rgba(255, 77, 104, 0.75));
  font-size: 1.15rem;
  animation: orbitar 9s linear infinite;
}

.hero__texto,
.hero__visual,
.metrica,
.panel,
.tarjeta {
  padding: 24px;
}

.hero__pretitulo,
.panel__etiqueta,
.hero__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

.hero__pretitulo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.hero__pretitulo span {
  animation: destello 1.8s ease-in-out infinite;
}

h1,
h2,
h3,
strong {
  color: #ffffff;
  margin: 0;
}

h1,
h2 {
  font-family: var(--fuente-titulo);
}

h1 {
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.95;
  text-wrap: balance;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.48);
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.02;
}

h3 {
  font-size: 1.12rem;
}

.hero__subtitulo,
.hero__descripcion,
.panel p,
.tarjeta p,
.metrica span,
blockquote p,
.hero__visual p {
  color: rgba(217, 217, 217, 0.78);
}

.hero__subtitulo {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.16rem;
}

.hero__descripcion {
  margin-top: 14px;
  max-width: 58ch;
}

.hero__acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero__boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  gap: 8px;
  overflow: hidden;
  position: relative;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease,
    background 180ms ease;
}

.hero__boton::after {
  position: absolute;
  top: -80%;
  left: -50%;
  width: 35%;
  height: 260%;
  background: rgba(255, 255, 255, 0.18);
  content: '';
  transform: rotate(22deg);
  transition: left 450ms ease;
}

.hero__boton:hover {
  border-color: rgba(255, 113, 135, 0.5);
  box-shadow: 0 15px 34px rgba(200, 16, 46, 0.2);
  transform: translateY(-3px);
}

.hero__boton:hover::after {
  left: 125%;
}

.hero__boton--principal {
  background: linear-gradient(135deg, #c8102e, #8f0f28);
}

.hero__visual {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.hero__etiqueta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
}

.hero__etiqueta i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ff4d68;
  box-shadow: 0 0 0 5px rgba(255, 77, 104, 0.12), 0 0 18px #ff4d68;
  animation: baliza 1.5s ease-in-out infinite;
}

.hero__media {
  position: relative;
  flex: 1;
  min-height: 260px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 5, 5, 0.46);
  padding: 18px;
  transition: border-color 250ms ease, transform 250ms ease;
}

.hero__media img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 350ms ease;
}

.hero__media:hover {
  border-color: rgba(255, 77, 104, 0.32);
  transform: translateY(-4px);
}

.hero__media:hover img {
  filter: saturate(1.08) contrast(1.04);
  transform: scale(1.035);
}

.hero__media-datos {
  position: absolute;
  right: 28px;
  bottom: 26px;
  left: 28px;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.72);
  font-family: "Consolas", monospace;
  font-size: 0.66rem;
  letter-spacing: 0.12em;
  pointer-events: none;
}

.hero__media-datos span {
  padding: 5px 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(5, 5, 5, 0.66);
  backdrop-filter: blur(8px);
}

.metricas {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.metrica strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 6px;
}

.metrica {
  position: relative;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 220ms ease;
}

.metrica i {
  position: absolute;
  top: 24px;
  right: 24px;
  color: rgba(255, 77, 104, 0.36);
  font-family: var(--fuente-ui);
  font-size: 1.1rem;
  font-style: normal;
  transition: color 220ms ease, transform 220ms ease;
}

.metrica:hover {
  transform: translateY(-4px);
}

.metrica:hover i {
  color: #ff7187;
  transform: rotate(8deg) scale(1.12);
}

.metrica:first-child {
  border-left: 0;
}

.bloque__encabezado {
  margin: 34px 0 18px;
}

.bloque--doble {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.rejilla {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tags span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 999px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
}

.tags span:hover {
  border-color: rgba(255, 77, 104, 0.42);
  background: rgba(200, 16, 46, 0.12);
  transform: translateY(-3px);
}

.tags i {
  color: #ff7187;
  font-style: normal;
}

.rejilla > .tarjeta {
  position: relative;
  overflow: hidden;
  padding: 26px 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 220ms ease, border-color 220ms ease;
}

.rejilla > .tarjeta::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #c8102e, #ff7187);
  content: '';
  transition: width 350ms ease;
}

.rejilla > .tarjeta:hover {
  transform: translateY(-6px);
}

.rejilla > .tarjeta:hover::before {
  width: 100%;
}

.tarjeta__icono {
  display: inline-grid;
  width: 42px;
  height: 42px;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 77, 104, 0.22);
  border-radius: 50%;
  place-items: center;
  color: #ff7187;
  background: rgba(200, 16, 46, 0.08);
  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  transition: transform 220ms ease, background 220ms ease;
}

.tarjeta:hover .tarjeta__icono {
  background: rgba(200, 16, 46, 0.18);
  transform: rotate(-8deg) scale(1.08);
}

.tarjeta__flecha {
  display: inline-block;
  margin-top: 8px;
  color: #ff7187;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

blockquote {
  position: relative;
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 180ms ease, transform 180ms ease;
}

blockquote:hover {
  border-color: rgba(255, 77, 104, 0.3);
  transform: translateX(4px);
}

.comillas {
  position: absolute;
  top: -2px;
  right: 16px;
  color: rgba(255, 77, 104, 0.25);
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 1;
}

blockquote footer {
  margin-top: 10px;
  color: #ffffff;
}

.panel--cta {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
}

.panel--cta::after {
  position: absolute;
  right: -80px;
  bottom: -95px;
  width: 240px;
  height: 240px;
  border: 1px dashed rgba(255, 77, 104, 0.16);
  border-radius: 50%;
  content: '✈';
  display: grid;
  place-items: center;
  color: rgba(255, 77, 104, 0.12);
  font-size: 2rem;
  animation: giro 18s linear infinite;
  pointer-events: none;
}

@keyframes orbitar {
  from { transform: rotate(0deg) translateX(210px) rotate(80deg); }
  to { transform: rotate(360deg) translateX(210px) rotate(80deg); }
}

@keyframes destello {
  0%, 100% { opacity: 0.45; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.15); }
}

@keyframes baliza {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; box-shadow: 0 0 0 8px rgba(255, 77, 104, 0.04), 0 0 22px #ff4d68; }
}

@keyframes giro {
  to { transform: rotate(360deg); }
}

@media (max-width: 960px) {
  .hero,
  .metricas,
  .bloque--doble,
  .rejilla {
    grid-template-columns: 1fr;
  }

  .hero__radar {
    opacity: 0.55;
  }
}

@media (max-width: 620px) {
  .hero__texto,
  .hero__visual,
  .metrica,
  .panel,
  .tarjeta {
    padding-right: 12px;
    padding-left: 12px;
  }

  .hero__acciones .hero__boton {
    width: 100%;
  }

  .hero__media-datos {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .revelar {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .hero__avion,
  .hero__pretitulo span,
  .hero__etiqueta i,
  .panel--cta::after {
    animation: none;
  }
}
</style>
