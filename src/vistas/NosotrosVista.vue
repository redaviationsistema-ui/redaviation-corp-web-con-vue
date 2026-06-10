<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('nosotros')

const metricas = [
  { icono: '◈', valor: '4', etiqueta: 'empresas especializadas' },
  { icono: '⌖', valor: '360°', etiqueta: 'visión integral del activo' },
  { icono: '✦', valor: '1', etiqueta: 'red comercial, técnica y operativa' },
  { icono: '✈', valor: 'Regional', etiqueta: 'capacidad de coordinación' },
]

const pilares = [
  {
    icono: '◎',
    titulo: 'Misión',
    descripcion: 'Soluciones seguras, estratégicas y personalizadas.',
  },
  {
    icono: '⌖',
    titulo: 'Visión',
    descripcion: 'Excelencia operativa y crecimiento sostenible.',
  },
  {
    icono: '◆',
    titulo: 'Promesa',
    descripcion: 'Atención personal, eficiencia y confianza.',
  },
]

const principios = [
  { icono: '◈', titulo: 'Discreción' },
  { icono: '⬡', titulo: 'Seguridad' },
  { icono: '✓', titulo: 'Cumplimiento' },
  { icono: '⚡', titulo: 'Eficiencia' },
  { icono: '◇', titulo: 'Transparencia' },
  { icono: '◎', titulo: 'Trabajo en equipo' },
]

const trayectoria = [
  {
    anio: '2001',
    nombre: 'CESA',
    subtitulo: 'Centro de Servicio Aeronáutico',
    logo: '/imagenes/LOGOS/Logo%20CESA.png',
    alt: 'Logo de CESA',
    posicion: 'inferior',
  },
  {
    anio: '2007',
    nombre: 'Excel Turbines de México',
    subtitulo: 'Especialistas en motores de turbina',
    logo: '/imagenes/LOGOS/Logo%20EXCEL.png',
    alt: 'Logo de Excel Turbines de México',
    posicion: 'superior',
  },
  {
    anio: '2009',
    nombre: 'GESA',
    subtitulo: 'Grupo Especializado en Servicios Aéreos',
    logo: '/imagenes/LOGOS/Logo%20GESA.png',
    alt: 'Logo de GESA',
    posicion: 'inferior',
  },
  {
    anio: '2024',
    nombre: 'Sky Group LLC',
    subtitulo: 'Plataforma comercial y de expansión',
    logo: '/imagenes/LOGOS/Logo%20SKYGROUP.png',
    alt: 'Logo de Sky Group',
    posicion: 'superior',
    destacado: true,
  },
]

const especialidades = [
  { icono: '✈', titulo: 'Comercialización de aeronaves' },
  { icono: '◉', titulo: 'Operaciones y gestión' },
  { icono: '⚙', titulo: 'Mantenimiento aeronáutico' },
  { icono: '⌁', titulo: 'Aviónica, motores y componentes' },
]

const galeria = [
  {
    fuente: '/imagenes/nosotros/imagen-institucional.png',
    alt: 'Personal operativo de Red Aviation Co. en plataforma',
    etiqueta: 'Presencia operativa',
  },
  {
    fuente: '/imagenes/inicio/iniciohangar.png',
    alt: 'Aeronaves ejecutivas dentro de un hangar',
    etiqueta: 'Capacidad instalada',
  },
  {
    fuente: '/imagenes/inicio/proyectos-inicio.png',
    alt: 'Técnico trabajando en una aeronave',
    etiqueta: 'Equipo técnico',
  },
  {
    fuente: '/imagenes/inicio/noticias.png',
    alt: 'Aeronave ejecutiva dentro de instalaciones aeronáuticas',
    etiqueta: 'Operaciones',
  },
]

let observador

onMounted(() => {
  const elementos = document.querySelectorAll('.nosotros .revelar')

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

onBeforeUnmount(() => {
  observador?.disconnect()
})
</script>

<template>
  <section class="nosotros">
    <header class="hero revelar">
      <div class="hero__radar" aria-hidden="true">
        <span></span>
        <span></span>
        <i>✈</i>
      </div>
      <div class="hero__contenido">
        <p class="etiqueta"><span>✦</span>{{ vista.pretitulo }}</p>
        <h1>Red Aviation Company, expertos en aeronáutica.</h1>
        <p class="hero__descripcion">
          Aviación ejecutiva, gestión y representación de activos.
        </p>
        <div class="hero__acciones">
          <RouterLink to="/contacto" class="boton boton--principal"><span>✈</span> Hablar con un asesor</RouterLink>
          <RouterLink to="/ecosistema" class="boton">Conocer el ecosistema <span>→</span></RouterLink>
        </div>
      </div>
      <div class="hero__imagen">
        <img
          src="/imagenes/nosotros/image.png"
          alt="Identidad visual de Red Aviation"
        />
        <span>{{ vista.visual.tipo }}</span>
        <div class="hero__instrumentos" aria-hidden="true">
          <small>RED AVIATION OPS</small>
          <small>MX · USA</small>
        </div>
      </div>
    </header>

    <section class="metricas revelar" aria-label="Indicadores de Red Aviation">
      <article v-for="metrica in metricas" :key="metrica.etiqueta">
        <i>{{ metrica.icono }}</i>
        <strong>{{ metrica.valor }}</strong>
        <span>{{ metrica.etiqueta }}</span>
      </article>
    </section>

    <section class="seccion esencia revelar">
      <div class="encabezado">
        <p class="etiqueta">Esencia de la marca</p>
        <h2>Experiencia, confianza y capacidad operativa.</h2>
      </div>
      <p>
        Soluciones integrales con atención personalizada.
      </p>
    </section>

    <section class="pilares revelar">
      <article v-for="pilar in pilares" :key="pilar.titulo">
        <i class="pilar__icono">{{ pilar.icono }}</i>
        <span>Principio estratégico</span>
        <h2>{{ pilar.titulo }}</h2>
        <p>{{ pilar.descripcion }}</p>
      </article>
    </section>

    <section class="seccion revelar">
      <div class="encabezado">
        <p class="etiqueta">Principios operativos</p>
        <h2>Cómo protegemos cada operación.</h2>
      </div>
      <div class="principios">
        <span v-for="(principio, indice) in principios" :key="principio.titulo">
          <i>{{ principio.icono }}</i>
          {{ String(indice + 1).padStart(2, '0') }} · {{ principio.titulo }}
        </span>
      </div>
    </section>

    <section class="seccion liderazgo revelar">
      <div class="encabezado">
        <p class="etiqueta">Dirección estratégica</p>
        <h2>Especialistas alrededor del activo.</h2>
      </div>
      <p>
        Dirección y equipos técnicos coordinados para tomar mejores decisiones.
      </p>
      <div class="especialidades">
        <span v-for="especialidad in especialidades" :key="especialidad.titulo">
          <i>{{ especialidad.icono }}</i>{{ especialidad.titulo }}
        </span>
      </div>
    </section>

    <section class="seccion revelar">
      <div class="encabezado">
        <p class="etiqueta">Nuestra trayectoria</p>
        <h2>Crecimiento con estructura.</h2>
      </div>
      <div class="trayectoria-corporativa">
        <div class="trayectoria-corporativa__linea" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span class="trayectoria-corporativa__linea-final"></span>
        </div>

        <article
          v-for="hito in trayectoria"
          :key="hito.anio"
          class="trayectoria-corporativa__hito"
          :class="[
            `trayectoria-corporativa__hito--${hito.posicion}`,
            { 'trayectoria-corporativa__hito--destacado': hito.destacado },
          ]"
        >
          <p class="trayectoria-corporativa__anio">{{ hito.anio }}</p>
          <div class="trayectoria-corporativa__conector" aria-hidden="true"></div>
          <figure class="trayectoria-corporativa__logo">
            <img :src="hito.logo" :alt="hito.alt" />
          </figure>
          <div class="trayectoria-corporativa__texto">
            <strong>{{ hito.nombre }}</strong>
            <span>{{ hito.subtitulo }}</span>
          </div>
        </article>
      </div>
    </section>


    <section class="acreditacion revelar">
      <div class="acreditacion__contenido">
        <p class="etiqueta">Estándares internacionales</p>
        <h2>Estándares IS-BAO.</h2>
        <p>
          Seguridad operacional, control documental y mejora continua.
        </p>
        <div class="principios">
          <span><i>⬡</i> Seguridad operacional</span>
          <span><i>▤</i> Gestión documental</span>
          <span><i>↗</i> Mejora continua</span>
          <span><i>✓</i> Auditorías internas</span>
        </div>
        <RouterLink to="/contacto" class="boton">Conocer la metodología</RouterLink>
      </div>
      <div class="acreditacion__distintivo">
        <img
          src="/imagenes/nosotros/certificado.webp"
          alt="Distintivo de auditor acreditado IS-BAO"
        />
      </div>
    </section>

    <section class="cierre revelar">
      <span class="cierre__avion" aria-hidden="true">✈</span>
      <p class="etiqueta">Decisiones aeronáuticas de alto valor</p>
      <h2>Expertos en aeronáutica para decisiones de alto valor.</h2>
      <div class="hero__acciones">
        <RouterLink to="/contacto" class="boton boton--principal">Hablar con un asesor <span>✈</span></RouterLink>
        <RouterLink to="/ecosistema" class="boton">Conocer el ecosistema <span>→</span></RouterLink>
      </div>
    </section>
  </section>
</template>

<style scoped>
.nosotros,
.seccion,
.pilares,
.metricas,
.trayectoria,
.galeria {
  display: grid;
  gap: 18px;
}

.nosotros {
  position: relative;
  isolation: isolate;
}

.nosotros::before {
  position: absolute;
  z-index: -1;
  top: 80px;
  right: -180px;
  width: 620px;
  height: 620px;
  border: 1px solid rgba(255, 77, 104, 0.05);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 16, 46, 0.08), transparent 67%);
  content: '';
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
.seccion,
.pilares article,
.metricas article,
.galeria figure,
.acreditacion,
.cierre {
  border: 0;
  border-radius: 0;
  background: transparent;
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  min-height: 580px;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  isolation: isolate;
}

.hero::before {
  position: absolute;
  z-index: -1;
  inset: 0;
  background:
    linear-gradient(115deg, rgba(200, 16, 46, 0.12), transparent 42%),
    repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 84px,
      rgba(255, 255, 255, 0.018) 85px
    );
  content: '';
}

.hero__radar {
  position: absolute;
  z-index: -1;
  top: -190px;
  left: -210px;
  width: 560px;
  height: 560px;
  border: 1px solid rgba(255, 77, 104, 0.09);
  border-radius: 50%;
  pointer-events: none;
}

.hero__radar span {
  position: absolute;
  border: 1px dashed rgba(255, 77, 104, 0.13);
  border-radius: 50%;
  inset: 75px;
}

.hero__radar span:nth-child(2) {
  inset: 155px;
}

.hero__radar i {
  position: absolute;
  right: 62px;
  bottom: 90px;
  color: #ff7187;
  filter: drop-shadow(0 0 10px rgba(255, 77, 104, 0.8));
  font-style: normal;
  animation: vuelo-radar 9s linear infinite;
}

.hero__contenido {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(28px, 5vw, 62px);
}

.hero__imagen {
  position: relative;
  min-height: 420px;
  overflow: hidden;
}

.hero__imagen::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(5, 5, 5, 0.3), transparent 45%);
}

.hero__imagen img,
.hero__imagen video,
.galeria img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 900ms cubic-bezier(0.16, 1, 0.3, 1), filter 350ms ease;
}

.hero__imagen:hover img,
.hero__imagen:hover video {
  filter: saturate(1.08) contrast(1.04);
  transform: scale(1.035);
}

.hero__imagen span {
  position: absolute;
  z-index: 1;
  right: 20px;
  bottom: 20px;
  padding: 9px 13px;
  border-radius: 999px;
  color: #fff;
  background: rgba(5, 5, 5, 0.74);
  backdrop-filter: blur(10px);
}

.hero__instrumentos {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Consolas", monospace;
  font-size: 0.67rem;
  letter-spacing: 0.12em;
}

.hero__instrumentos small {
  padding: 6px 9px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  background: rgba(5, 5, 5, 0.62);
  backdrop-filter: blur(8px);
}

.etiqueta,
.pilares article > span {
  margin: 0 0 12px;
  color: #ff7187;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

.etiqueta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.etiqueta > span {
  animation: destello 1.8s ease-in-out infinite;
}

h1,
h2,
strong {
  margin: 0;
  color: #fff;
  font-family: var(--fuente-titulo);
}

h1 {
  max-width: 14ch;
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.94;
  text-wrap: balance;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.48);
}

h2 {
  font-size: clamp(1.8rem, 4vw, 3.4rem);
  line-height: 1;
}

.hero__descripcion,
.seccion > p,
.pilares p,
.acreditacion p {
  color: rgba(217, 217, 217, 0.78);
}

.hero__descripcion {
  max-width: 58ch;
  margin-top: 22px;
  font-size: 1.08rem;
}

.hero__acciones,
.principios,
.especialidades {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero__acciones {
  margin-top: 28px;
}

.boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  color: #fff;
  gap: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.boton::after {
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

.boton:hover {
  border-color: rgba(255, 113, 135, 0.5);
  box-shadow: 0 15px 34px rgba(200, 16, 46, 0.2);
  transform: translateY(-3px);
}

.boton:hover::after {
  left: 125%;
}

.boton--principal {
  background: linear-gradient(135deg, #c8102e, #8f0f28);
}

.metricas {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.metricas article,
.pilares article {
  padding: 26px;
}

.metricas article {
  position: relative;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 220ms ease;
}

.metricas article:hover {
  transform: translateY(-5px);
}

.metricas article i {
  position: absolute;
  top: 26px;
  right: 26px;
  color: rgba(255, 77, 104, 0.36);
  font-style: normal;
  transition: color 180ms ease, transform 180ms ease;
}

.metricas article:hover i {
  color: #ff7187;
  transform: rotate(10deg) scale(1.15);
}

.metricas article:first-child {
  border-left: 0;
}

.metricas strong {
  display: block;
  font-size: clamp(2.2rem, 5vw, 4rem);
}

.metricas span,
.principios span,
.especialidades span {
  color: rgba(217, 217, 217, 0.78);
}

.seccion,
.cierre {
  padding: clamp(28px, 4vw, 46px);
}

.esencia {
  grid-template-columns: 0.8fr 1.2fr;
  align-items: end;
}

.pilares {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.pilares h2 {
  font-size: 2rem;
}

.pilares article {
  position: relative;
  overflow: hidden;
  border-top: 2px solid rgba(200, 16, 46, 0.72);
  transition: transform 220ms ease, border-color 220ms ease;
}

.pilares article::after {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 77, 104, 0.12), transparent 68%);
  content: '';
  opacity: 0;
  transition: opacity 220ms ease;
}

.pilares article:hover {
  border-color: #ff4d68;
  transform: translateY(-7px);
}

.pilares article:hover::after {
  opacity: 1;
}

.pilar__icono {
  display: inline-grid;
  width: 44px;
  height: 44px;
  margin-bottom: 18px;
  border: 1px solid rgba(255, 77, 104, 0.25);
  border-radius: 50%;
  place-items: center;
  color: #ff7187;
  background: rgba(200, 16, 46, 0.08);
  font-style: normal;
}

.principios span,
.especialidades span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
}

.principios span:hover,
.especialidades span:hover {
  border-color: rgba(255, 77, 104, 0.42);
  background: rgba(200, 16, 46, 0.12);
  transform: translateY(-3px);
}

.principios i,
.especialidades i {
  color: #ff7187;
  font-style: normal;
}

.liderazgo {
  grid-template-columns: 0.8fr 1.2fr;
}

.liderazgo .especialidades {
  grid-column: 1 / -1;
}

.trayectoria-corporativa {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  min-height: 640px;
  padding: 28px 0 12px;
}

.trayectoria-corporativa__linea {
  position: absolute;
  top: 50%;
  right: 4%;
  left: 4%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 56px;
  transform: translateY(-50%);
  pointer-events: none;
}

.trayectoria-corporativa__linea span {
  position: relative;
  display: block;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
}

.trayectoria-corporativa__linea span::after {
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background: rgba(0, 0, 0, 0.08);
  content: '';
}

.trayectoria-corporativa__linea-final {
  background: #d81f2d !important;
}

.trayectoria-corporativa__linea-final::after {
  display: none;
}

.trayectoria-corporativa__hito {
  position: absolute;
  z-index: 1;
  display: grid;
  justify-items: center;
  gap: 14px;
  width: min(230px, 100%);
  text-align: center;
  transform: translateX(-50%);
}

.trayectoria-corporativa__hito:nth-of-type(1) {
  left: 11%;
}

.trayectoria-corporativa__hito:nth-of-type(2) {
  left: 36%;
}

.trayectoria-corporativa__hito:nth-of-type(3) {
  left: 58%;
}

.trayectoria-corporativa__hito:nth-of-type(4) {
  left: 82%;
}

.trayectoria-corporativa__hito--superior {
  top: 0;
}

.trayectoria-corporativa__hito--inferior {
  bottom: 0;
}

.trayectoria-corporativa__anio {
  margin: 0;
  color: #fff;
  font-family: var(--fuente-titulo);
  font-size: clamp(2.4rem, 4vw, 4rem);
  line-height: 1;
}

.trayectoria-corporativa__conector {
  width: 18px;
  height: 72px;
  background: rgba(255, 255, 255, 0.92);
}

.trayectoria-corporativa__hito--inferior .trayectoria-corporativa__conector {
  order: -1;
}

.trayectoria-corporativa__logo {
  display: grid;
  place-items: center;
  width: 210px;
  height: 210px;
  margin: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.28);
}

.trayectoria-corporativa__hito--destacado .trayectoria-corporativa__logo {
  background: #d81f2d;
}

.trayectoria-corporativa__logo img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.trayectoria-corporativa__texto {
  display: grid;
  gap: 10px;
}

.trayectoria-corporativa__texto strong {
  font-family: var(--fuente-ui);
  font-size: clamp(1.15rem, 1.7vw, 2rem);
  line-height: 1.06;
}

.trayectoria-corporativa__texto span {
  max-width: 220px;
  color: rgba(255, 255, 255, 0.84);
  font-size: 0.95rem;
  line-height: 1.3;
}

.galeria {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.galeria__encabezado {
  grid-column: 1 / -1;
  padding: 24px 0 8px;
}

.galeria figure {
  position: relative;
  height: 340px;
  margin: 0;
  overflow: hidden;
}

.galeria figcaption {
  position: absolute;
  left: 18px;
  bottom: 18px;
  padding: 9px 13px;
  border-radius: 999px;
  color: #fff;
  background: rgba(5, 5, 5, 0.76);
}

.acreditacion {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 24px;
  align-items: center;
  padding: clamp(28px, 4vw, 48px);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  background: radial-gradient(circle at right, rgba(24, 72, 144, 0.22), transparent 40%);
}

.acreditacion::before {
  position: absolute;
  top: -120px;
  right: -100px;
  width: 360px;
  height: 360px;
  border: 1px dashed rgba(90, 145, 220, 0.16);
  border-radius: 50%;
  content: '';
  animation: giro 20s linear infinite;
}

.acreditacion__contenido .boton {
  margin-top: 22px;
}

.acreditacion__distintivo {
  display: grid;
  place-items: center;
  min-height: 320px;
  padding: 28px;
  border-radius: 24px;
  background: #fff;
  transition: transform 250ms ease, box-shadow 250ms ease;
}

.acreditacion__distintivo:hover {
  box-shadow: 0 26px 55px rgba(20, 65, 130, 0.22);
  transform: translateY(-6px) rotate(1deg);
}

.acreditacion__distintivo img {
  width: min(100%, 310px);
}

.cierre {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(120deg, rgba(200, 16, 46, 0.28), transparent 58%);
}

.cierre__avion {
  position: absolute;
  right: 7%;
  bottom: -26px;
  color: rgba(255, 77, 104, 0.12);
  font-size: 9rem;
  line-height: 1;
  transform: rotate(-18deg);
  pointer-events: none;
}

.cierre h2 {
  max-width: 850px;
}

@keyframes vuelo-radar {
  from { transform: rotate(0deg) translateX(210px) rotate(80deg); }
  to { transform: rotate(360deg) translateX(210px) rotate(80deg); }
}

@keyframes destello {
  0%, 100% { opacity: 0.45; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.15); }
}

@keyframes trazar-ruta {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

@keyframes giro {
  to { transform: rotate(360deg); }
}

@media (max-width: 900px) {
  .hero,
  .esencia,
  .liderazgo,
  .acreditacion {
    grid-template-columns: 1fr;
  }

  .metricas,
  .pilares {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .trayectoria-corporativa {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    min-height: auto;
    gap: 30px 18px;
    padding-top: 12px;
  }

  .trayectoria-corporativa__linea {
    display: none;
  }

  .trayectoria-corporativa__hito {
    position: relative;
    left: auto !important;
    top: auto;
    bottom: auto;
    width: 100%;
    transform: none;
  }

  .trayectoria-corporativa__hito--inferior .trayectoria-corporativa__conector {
    order: 0;
  }

  .hero__radar {
    opacity: 0.55;
  }
}

@media (max-width: 620px) {
  .metricas,
  .pilares,
  .trayectoria-corporativa,
  .galeria {
    grid-template-columns: 1fr;
  }

  .nosotros {
    gap: 24px;
  }

  .hero {
    min-height: auto;
  }

  .hero__contenido,
  .seccion,
  .cierre,
  .metricas article,
  .pilares article,
  .acreditacion {
    padding-right: 18px;
    padding-left: 18px;
  }

  .hero__contenido {
    padding-top: 20px;
    padding-bottom: 8px;
  }

  h1 {
    max-width: none;
    font-size: clamp(2.4rem, 12vw, 3.5rem);
    line-height: 0.98;
  }

  h2 {
    font-size: clamp(1.7rem, 8vw, 2.3rem);
  }

  .hero__descripcion {
    max-width: none;
    margin-top: 16px;
    font-size: 0.98rem;
    line-height: 1.65;
  }

  .hero__acciones {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .hero__acciones .boton {
    width: 100%;
  }

  .hero__imagen {
    min-height: 280px;
  }

  .metricas {
    gap: 0;
  }

  .metricas article {
    padding-top: 20px;
    padding-bottom: 20px;
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .metricas article:first-child {
    border-top: 0;
  }

  .metricas strong {
    font-size: 2.2rem;
  }

  .esencia,
  .liderazgo,
  .acreditacion {
    gap: 16px;
  }

  .trayectoria-corporativa {
    gap: 34px;
    padding: 8px 0 0;
  }

  .trayectoria-corporativa__hito {
    justify-items: start;
    text-align: left;
  }

  .trayectoria-corporativa__anio {
    font-size: 2.7rem;
  }

  .trayectoria-corporativa__logo {
    width: 170px;
    height: 170px;
  }

  .trayectoria-corporativa__texto strong {
    font-size: 1.4rem;
  }

  .trayectoria-corporativa__texto span {
    max-width: none;
    font-size: 0.92rem;
  }

  .galeria__encabezado {
    grid-column: auto;
  }

  .principios,
  .especialidades {
    gap: 8px;
  }

  .principios span,
  .especialidades span {
    width: 100%;
    justify-content: flex-start;
    padding: 10px 13px;
    font-size: 0.92rem;
  }

  .acreditacion {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .acreditacion__distintivo {
    min-height: 240px;
    padding: 20px;
  }

  .cierre__avion {
    right: -8px;
    bottom: -10px;
    font-size: 5.5rem;
  }

  .hero__instrumentos {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .revelar {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .hero__radar i,
  .etiqueta > span,
  .acreditacion::before {
    animation: none;
  }
}
</style>
