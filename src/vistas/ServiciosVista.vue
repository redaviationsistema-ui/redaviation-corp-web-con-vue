<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { obtenerVista } from '../datos/sitio'
import { serviciosIndividuales } from '../datos/contenidoNuevo'

const vista = obtenerVista('servicios')
const diapositivaActual = ref(0)
const servicioActivo = ref(0)
const carruselPausado = ref(false)
let intervalo

const diapositivas = [
  {
    etiqueta: 'Comercialización',
    titulo: 'Representación de aeronaves',
    descripcion: 'Valuación, posicionamiento, negociación y cierre con criterio de mercado.',
    imagen: '/imagenes/Aeronavelista.png?v=1',
    alt: 'Aeronave ejecutiva presentada para comercialización',
  },
  {
    etiqueta: 'Gestión',
    titulo: 'Administración coordinada',
    descripcion: 'Control operativo, documental y financiero para propietarios y operadores.',
    imagen: '/imagenes/inspeccionando.png?v=1',
    alt: 'Equipo coordinando la gestión de una aeronave ejecutiva',
  },
  {
    etiqueta: 'Mantenimiento',
    titulo: 'Capacidad técnica especializada',
    descripcion: 'Inspección, mantenimiento y seguimiento técnico con trazabilidad.',
    imagen: '/imagenes/tecnicomotor.png?v=1',
    alt: 'Técnico realizando mantenimiento a una aeronave',
  },
  {
    etiqueta: 'Operaciones',
    titulo: 'Movilidad aérea privada',
    descripcion: 'Coordinación de vuelos, misiones especiales y requerimientos logísticos.',
    imagen: '/imagenes/Vueloprivado2.png?v=1',
    alt: 'Aeronave ejecutiva preparada para una operación aérea',
  },
]

const serviciosPrincipales = [
  {
    numero: '01',
    titulo: 'Compra y venta',
    descripcion: 'Representación durante búsqueda, valuación, revisión, negociación y cierre.',
    imagen: '/imagenes/Aeronavelista.png?v=1',
    ruta: '/servicios/compra-venta-aeronaves',
    items: ['Valuación', 'Difusión', 'Negociación', 'Revisión integral'],
  },
  {
    numero: '02',
    titulo: 'Administración de aeronaves',
    descripcion: 'Gestión de programación, tripulaciones, documentación, mantenimiento y costos.',
    imagen: '/imagenes/Administracion.png?v=1',
    ruta: '/servicios/administracion-aeronaves',
    items: ['Operación', 'Tripulación', 'Cumplimiento', 'Control de costos'],
  },
  {
    numero: '03',
    titulo: 'Inspección y mantenimiento',
    descripcion: 'Coordinación técnica para proteger seguridad, disponibilidad y valor del activo.',
    imagen: '/imagenes/servicios1.png?v=1',
    ruta: '/servicios/inspecciones-precompra',
    items: ['Inspecciones', 'Componentes', 'Motores', 'Aviónica'],
  },
  {
    numero: '04',
    titulo: 'Vuelos privados',
    descripcion: 'Movilidad aérea de acuerdo con la misión, el itinerario y la operación requerida.',
    imagen: '/imagenes/Vueloprivado3.png?v=1',
    ruta: '/servicios/taxi-aereo',
    items: ['Ejecutivo', 'Corporativo', 'Taxi aéreo', 'Ambulancia aérea'],
  },
  {
    numero: '05',
    titulo: 'Consultoría aeronáutica',
    descripcion: 'Análisis técnico, comercial y operativo para decisiones de alto impacto.',
    imagen: '/imagenes/tecnicomotor.png?v=1',
    ruta: '/contacto',
    items: ['Planeación', 'Estrategia', 'Evaluación', 'Acompañamiento'],
  },
]

const proceso = [
  {
    titulo: 'Evaluamos',
    descripcion: 'Conocemos el activo, la misión y los objetivos de la operación.',
  },
  {
    titulo: 'Estructuramos',
    descripcion: 'Definimos alcance, especialistas, tiempos y entregables.',
  },
  {
    titulo: 'Coordinamos',
    descripcion: 'Integramos la ejecución técnica, comercial y documental.',
  },
  {
    titulo: 'Acompañamos',
    descripcion: 'Damos seguimiento hasta el cierre y la continuidad operativa.',
  },
]

const imagenesServicios = {
  'compra-venta-aeronaves': '/imagenes/Compra.png?v=1',
  'administracion-aeronaves': '/imagenes/servicios-Servicios-especializados-Administracion.png?v=1',
  'inspecciones-precompra': '/imagenes/Inspecciones.png?v=1',
  'importaciones-exportaciones': '/imagenes/Importaciones.png?v=1',
  'taxi-aereo': '/imagenes/taxi-aereo-servicio.png?v=1',
  'ambulancia-aerea': '/imagenes/Ambulacia.png?v=1',
  'carga-aerea': '/imagenes/Cargas.png?v=1',
  'venta-partes': '/imagenes/Ventas.png?v=1',
  'taller-motores': '/imagenes/Tallerdemotor.png?v=1',
  'mantenimiento-militar': '/imagenes/Inspecciones.png?v=1',
  'avionica-componentes-instrumentos': '/imagenes/Avionica.png?v=1',
}

const diapositiva = computed(() => diapositivas[diapositivaActual.value])
const servicioSeleccionado = computed(() => serviciosPrincipales[servicioActivo.value])

function cambiarDiapositiva(indice) {
  diapositivaActual.value = (indice + diapositivas.length) % diapositivas.length
}

function iniciarCarrusel() {
  detenerCarrusel()
  intervalo = window.setInterval(() => {
    if (!carruselPausado.value) cambiarDiapositiva(diapositivaActual.value + 1)
  }, 6000)
}

function detenerCarrusel() {
  if (intervalo) window.clearInterval(intervalo)
}

onMounted(() => {
  iniciarCarrusel()

  const datosEstructurados = document.createElement('script')
  datosEstructurados.id = 'seo-servicios-red-aviation'
  datosEstructurados.type = 'application/ld+json'
  datosEstructurados.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: vista.titulo,
    provider: { '@type': 'Organization', name: 'Red Aviation Company' },
    description: vista.seo.descripcion,
    serviceType: serviciosIndividuales.map((servicio) => servicio.titulo),
    areaServed: ['México', 'Estados Unidos'],
  })
  document.head.appendChild(datosEstructurados)
})

onBeforeUnmount(() => {
  detenerCarrusel()
  document.querySelector('#seo-servicios-red-aviation')?.remove()
})
</script>

<template>
  <div class="servicios">
    <section
      class="hero"
      @mouseenter="carruselPausado = true"
      @mouseleave="carruselPausado = false"
      @focusin="carruselPausado = true"
      @focusout="carruselPausado = false"
    >
      <Transition name="fundido" mode="out-in">
        <img
          :key="diapositiva.imagen"
          class="hero__fondo"
          :src="diapositiva.imagen"
          :alt="diapositiva.alt"
        />
      </Transition>
      <div class="hero__velo"></div>

      <div class="hero__contenido">
        <p class="etiqueta">{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="hero__subtitulo">{{ vista.subtitulo }}</p>
        <p class="hero__descripcion">{{ vista.descripcion }}</p>
        <div class="hero__acciones">
          <RouterLink to="/contacto" class="boton boton--primario">Solicitar cotización</RouterLink>
          <a href="#servicios-principales" class="boton boton--secundario">Explorar servicios</a>
        </div>
      </div>

      <div class="hero__ficha" aria-live="polite">
        <span>{{ diapositiva.etiqueta }}</span>
        <strong>{{ diapositiva.titulo }}</strong>
        <p>{{ diapositiva.descripcion }}</p>
      </div>

      <div class="hero__controles">
        <button type="button" aria-label="Servicio anterior" @click="cambiarDiapositiva(diapositivaActual - 1)">
          &larr;
        </button>
        <button
          v-for="(elemento, indice) in diapositivas"
          :key="elemento.titulo"
          type="button"
          class="hero__punto"
          :class="{ 'hero__punto--activo': indice === diapositivaActual }"
          :aria-label="`Mostrar ${elemento.titulo}`"
          :aria-current="indice === diapositivaActual ? 'true' : undefined"
          @click="cambiarDiapositiva(indice)"
        ></button>
        <button type="button" aria-label="Servicio siguiente" @click="cambiarDiapositiva(diapositivaActual + 1)">
          &rarr;
        </button>
      </div>
    </section>

    <section class="metricas" aria-label="Alcance de los servicios">
      <article><strong>11</strong><span>servicios especializados</span></article>
      <article><strong>360&deg;</strong><span>visión del ciclo de vida</span></article>
      <article><strong>México y EE. UU.</strong><span>coordinación regional</span></article>
      <article><strong>Confidencial</strong><span>atención de cada mandato</span></article>
    </section>

    <section id="servicios-principales" class="seccion catalogo">
      <div class="encabezado">
        <p class="etiqueta">Capacidad integral</p>
        <h2>Una estructura para cada etapa de su aeronave</h2>
        <p>
          Seleccione un área para conocer cómo conectamos criterio comercial,
          conocimiento técnico y ejecución operativa.
        </p>
      </div>

      <div class="catalogo__selector" role="tablist" aria-label="Areas principales">
        <button
          v-for="(servicio, indice) in serviciosPrincipales"
          :id="`tab-servicio-${indice}`"
          :key="servicio.titulo"
          type="button"
          role="tab"
          :aria-selected="servicioActivo === indice"
          :aria-controls="`panel-servicio-${indice}`"
          :class="{ activo: servicioActivo === indice }"
          @click="servicioActivo = indice"
        >
          <span>{{ servicio.numero }}</span>
          {{ servicio.titulo }}
        </button>
      </div>

      <Transition name="fundido" mode="out-in">
        <article
          :id="`panel-servicio-${servicioActivo}`"
          :key="servicioSeleccionado.titulo"
          class="catalogo__destacado"
          role="tabpanel"
          :aria-labelledby="`tab-servicio-${servicioActivo}`"
        >
          <div class="catalogo__imagen">
            <img :src="servicioSeleccionado.imagen" :alt="servicioSeleccionado.titulo" />
          </div>
          <div class="catalogo__contenido">
            <span class="catalogo__numero">{{ servicioSeleccionado.numero }}</span>
            <h3>{{ servicioSeleccionado.titulo }}</h3>
            <p>{{ servicioSeleccionado.descripcion }}</p>
            <ul>
              <li v-for="item in servicioSeleccionado.items" :key="item">{{ item }}</li>
            </ul>
            <RouterLink :to="servicioSeleccionado.ruta" class="enlace">
              Conocer el servicio <span aria-hidden="true">&rarr;</span>
            </RouterLink>
          </div>
        </article>
      </Transition>
    </section>

    <section class="seccion proceso">
      <div class="encabezado encabezado--centrado">
        <p class="etiqueta">Proceso de atención</p>
        <h2>De la necesidad a una solución coordinada</h2>
        <p>Un flujo claro para reducir incertidumbre y mantener el control en cada etapa.</p>
      </div>

      <ol class="proceso__rejilla">
        <li v-for="(paso, indice) in proceso" :key="paso.titulo">
          <span>{{ String(indice + 1).padStart(2, '0') }}</span>
          <h3>{{ paso.titulo }}</h3>
          <p>{{ paso.descripcion }}</p>
        </li>
      </ol>
    </section>

    <section class="franja">
      <div>
        <p class="etiqueta">Atención personalizada</p>
        <h2>Un solo punto de contacto para una operación completa</h2>
      </div>
      <p>
        Coordinamos especialistas, documentación y seguimiento para que cada
        decisión se tome con información clara.
      </p>
      <RouterLink to="/contacto" class="boton boton--primario">Hablar con un especialista</RouterLink>
    </section>

    <section class="seccion especializados">
      <div class="encabezado">
        <p class="etiqueta">Servicios especializados</p>
        <h2>Explore todas nuestras capacidades</h2>
        <p>Cada servicio cuenta con una vista dedicada para revisar su alcance y aplicación.</p>
      </div>

      <div class="especializados__rejilla">
        <RouterLink
          v-for="(servicio, indice) in serviciosIndividuales"
          :key="servicio.id"
          :to="servicio.ruta"
          class="especializado"
        >
          <img :src="imagenesServicios[servicio.id]" :alt="servicio.titulo" loading="lazy" />
          <div class="especializado__velo"></div>
          <div class="especializado__contenido">
            <span>{{ String(indice + 1).padStart(2, '0') }}</span>
            <strong>{{ servicio.titulo }}</strong>
            <small>Ver servicio &rarr;</small>
          </div>
        </RouterLink>
      </div>
    </section>

    <section class="cierre">
      <div>
        <p class="etiqueta">Atención confidencial</p>
        <h2>Conversemos sobre su próxima operación</h2>
        <p>
          Comparta con nuestro equipo el activo, la misión o el servicio que
          necesita. Prepararemos una ruta de atención a su medida.
        </p>
      </div>
      <div class="cierre__acciones">
        <RouterLink to="/contacto" class="boton boton--primario">Solicitar evaluación</RouterLink>
        <a
          href="https://wa.me/525586186576?text=Hola,%20quiero%20informacion%20sobre%20los%20servicios%20de%20Red%20Aviation"
          target="_blank"
          rel="noopener noreferrer"
          class="boton boton--secundario"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.servicios {
  display: grid;
  gap: 30px;
}

.hero {
  position: relative;
  min-height: min(720px, calc(100vh - 150px));
  overflow: hidden;
  border-radius: 32px;
  isolation: isolate;
}

.hero__fondo,
.hero__velo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero__fondo {
  z-index: -3;
  object-fit: cover;
}

.hero__velo {
  z-index: -2;
  background:
    linear-gradient(90deg, rgba(5, 5, 5, 0.96) 0%, rgba(5, 5, 5, 0.72) 48%, rgba(5, 5, 5, 0.22) 100%),
    linear-gradient(0deg, rgba(5, 5, 5, 0.76), transparent 50%);
}

.hero__contenido {
  display: flex;
  min-height: inherit;
  max-width: 740px;
  padding: clamp(44px, 8vw, 100px);
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.etiqueta {
  margin: 0 0 14px;
  color: #ff7187;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2,
h3 {
  color: #fff;
  font-family: var(--fuente-titulo);
}

h1 {
  max-width: 10ch;
  margin-bottom: 20px;
  font-size: clamp(3.2rem, 7vw, 6.4rem);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: -0.045em;
}

h2 {
  margin-bottom: 16px;
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 400;
  line-height: 0.98;
}

h3 {
  margin-bottom: 12px;
  font-size: clamp(1.7rem, 3vw, 2.6rem);
}

.hero__subtitulo {
  max-width: 540px;
  margin-bottom: 12px;
  color: #fff;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
}

.hero__descripcion,
.encabezado > p:last-child,
.proceso p,
.franja > p,
.cierre p {
  color: rgba(217, 217, 217, 0.72);
  line-height: 1.75;
}

.hero__descripcion {
  max-width: 600px;
}

.hero__acciones,
.cierre__acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.boton {
  display: inline-flex;
  min-height: 52px;
  padding: 0 22px;
  border: 1px solid transparent;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.boton:hover {
  transform: translateY(-2px);
}

.boton--primario {
  background: linear-gradient(135deg, #d31738, #8f0f28);
  box-shadow: 0 16px 34px rgba(200, 16, 46, 0.25);
}

.boton--secundario {
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(5, 5, 5, 0.38);
  backdrop-filter: blur(10px);
}

.hero__ficha {
  position: absolute;
  right: clamp(24px, 5vw, 64px);
  bottom: 76px;
  width: min(360px, calc(100% - 48px));
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 22px;
  background: rgba(5, 5, 5, 0.7);
  backdrop-filter: blur(14px);
}

.hero__ficha span,
.catalogo__numero {
  color: #ff7187;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero__ficha strong {
  display: block;
  margin: 7px 0;
  color: #fff;
  font-size: 1.15rem;
}

.hero__ficha p {
  margin: 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.88rem;
}

.hero__controles {
  position: absolute;
  right: clamp(24px, 5vw, 64px);
  bottom: 26px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.hero__controles button {
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  color: #fff;
  background: rgba(5, 5, 5, 0.58);
  cursor: pointer;
}

.hero__controles .hero__punto {
  width: 22px;
  height: 5px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.32);
}

.hero__controles .hero__punto--activo {
  width: 42px;
  background: #ff4d68;
}

.metricas {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.metricas article {
  display: grid;
  gap: 5px;
  padding: 28px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.metricas article:first-child {
  border-left: 0;
}

.metricas strong {
  color: #fff;
  font-size: 1.12rem;
}

.metricas span {
  color: rgba(217, 217, 217, 0.58);
  font-size: 0.82rem;
}

.seccion,
.cierre {
  padding: clamp(54px, 8vw, 96px) clamp(20px, 5vw, 64px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.encabezado {
  max-width: 780px;
  margin-bottom: 42px;
}

.encabezado--centrado {
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

.catalogo__selector {
  display: flex;
  gap: 8px;
  margin-bottom: 18px;
  overflow-x: auto;
  scrollbar-width: thin;
}

.catalogo__selector button {
  display: inline-flex;
  min-width: max-content;
  min-height: 48px;
  padding: 0 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  align-items: center;
  gap: 9px;
  color: rgba(255, 255, 255, 0.68);
  background: rgba(255, 255, 255, 0.025);
  cursor: pointer;
}

.catalogo__selector button span {
  color: #ff7187;
  font-size: 0.7rem;
}

.catalogo__selector button.activo {
  border-color: rgba(255, 77, 104, 0.56);
  color: #fff;
  background: rgba(200, 16, 46, 0.15);
}

.catalogo__destacado {
  display: grid;
  min-height: 500px;
  overflow: hidden;
  grid-template-columns: 1.2fr 0.8fr;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 28px;
  background: #0b0b0b;
}

.catalogo__imagen {
  min-height: 440px;
  overflow: hidden;
}

.catalogo__imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.catalogo__contenido {
  display: flex;
  padding: clamp(30px, 5vw, 60px);
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

.catalogo__contenido p {
  color: rgba(217, 217, 217, 0.68);
  line-height: 1.7;
}

.catalogo__contenido ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 8px 0 26px;
  padding: 0;
  list-style: none;
}

.catalogo__contenido li {
  padding: 7px 11px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.76rem;
}

.enlace {
  color: #ff7187;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.proceso__rejilla {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
}

.proceso__rejilla li {
  position: relative;
  min-height: 260px;
  padding: 30px;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.proceso__rejilla li:first-child {
  border-left: 0;
}

.proceso__rejilla span {
  display: inline-grid;
  width: 46px;
  height: 46px;
  margin-bottom: 42px;
  border: 1px solid rgba(255, 77, 104, 0.5);
  border-radius: 50%;
  place-items: center;
  color: #ff7187;
  font-size: 0.75rem;
}

.proceso__rejilla h3 {
  font-size: 1.55rem;
}

.franja {
  display: grid;
  padding: clamp(42px, 6vw, 72px);
  grid-template-columns: 1fr 0.8fr auto;
  gap: 40px;
  align-items: center;
  border-radius: 28px;
  background:
    radial-gradient(circle at 80% 0%, rgba(255, 77, 104, 0.2), transparent 30%),
    linear-gradient(135deg, #16070a, #080808);
}

.franja h2 {
  max-width: 660px;
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.2rem);
}

.franja .boton {
  white-space: nowrap;
}

.especializados__rejilla {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.especializado {
  position: relative;
  min-height: 310px;
  overflow: hidden;
  border-radius: 22px;
  background: #111;
}

.especializado img,
.especializado__velo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.especializado img {
  object-fit: cover;
  transition: transform 450ms ease;
}

.especializado__velo {
  background: linear-gradient(0deg, rgba(5, 5, 5, 0.96), rgba(5, 5, 5, 0.08) 74%);
}

.especializado__contenido {
  position: absolute;
  inset: auto 0 0;
  display: grid;
  gap: 7px;
  padding: 24px;
}

.especializado__contenido span,
.especializado__contenido small {
  color: #ff7187;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.especializado__contenido strong {
  color: #fff;
  font-size: 1.14rem;
}

.especializado:hover img {
  transform: scale(1.06);
}

.cierre {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: flex-end;
  background: linear-gradient(90deg, rgba(200, 16, 46, 0.12), transparent 55%);
}

.cierre > div:first-child {
  max-width: 740px;
}

.cierre__acciones {
  min-width: 250px;
  justify-content: flex-end;
}

.fundido-enter-active,
.fundido-leave-active {
  transition: opacity 280ms ease, transform 280ms ease;
}

.fundido-enter-from,
.fundido-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 1000px) {
  .hero__ficha {
    display: none;
  }

  .hero__controles {
    left: clamp(44px, 8vw, 100px);
    right: auto;
  }

  .catalogo__destacado {
    grid-template-columns: 1fr;
  }

  .catalogo__imagen {
    min-height: 360px;
  }

  .proceso__rejilla {
    grid-template-columns: repeat(2, 1fr);
  }

  .proceso__rejilla li:nth-child(3) {
    border-left: 0;
  }

  .franja {
    grid-template-columns: 1fr;
  }

  .especializados__rejilla {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .servicios {
    gap: 14px;
  }

  .hero {
    min-height: 500px;
    border-radius: 22px;
  }

  .hero__contenido {
    min-height: auto;
    padding: 34px 18px 92px;
  }

  .hero__velo {
    background: linear-gradient(90deg, rgba(5, 5, 5, 0.92), rgba(5, 5, 5, 0.58));
  }

  .hero__controles {
    left: 18px;
    right: 18px;
    justify-content: flex-start;
    flex-wrap: wrap;
    bottom: 18px;
  }

  h1 {
    max-width: 11ch;
    margin-bottom: 14px;
    font-size: clamp(2.5rem, 12vw, 4rem);
    line-height: 0.94;
  }

  h2 {
    font-size: clamp(1.8rem, 8vw, 2.7rem);
  }

  h3 {
    font-size: clamp(1.35rem, 6vw, 2rem);
  }

  .hero__subtitulo {
    font-size: 0.98rem;
  }

  .hero__descripcion {
    max-width: none;
    font-size: 0.94rem;
    line-height: 1.65;
  }

  .seccion,
  .cierre {
    padding: 28px 14px;
  }

  .encabezado {
    margin-bottom: 20px;
  }

  .catalogo__selector {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin: 0 0 14px;
    padding: 0;
    overflow: visible;
  }

  .catalogo__selector button {
    min-width: 0;
    min-height: 42px;
    justify-content: flex-start;
    padding: 10px 12px;
    font-size: 0.84rem;
    text-align: left;
    white-space: normal;
  }

  .metricas,
  .proceso__rejilla,
  .especializados__rejilla {
    grid-template-columns: 1fr;
  }

  .metricas article,
  .proceso__rejilla li,
  .proceso__rejilla li:nth-child(3) {
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .metricas article:first-child,
  .proceso__rejilla li:first-child {
    border-top: 0;
  }

  .metricas article {
    gap: 4px;
    padding: 18px 14px;
  }

  .metricas strong {
    font-size: 1.02rem;
  }

  .metricas span {
    font-size: 0.78rem;
  }

  .catalogo__destacado {
    min-height: 0;
    border-radius: 22px;
  }

  .catalogo__imagen {
    min-height: 220px;
  }

  .catalogo__contenido {
    padding: 18px 14px 20px;
  }

  .catalogo__contenido ul {
    gap: 6px;
    margin-bottom: 16px;
  }

  .catalogo__contenido li {
    font-size: 0.72rem;
  }

  .proceso__rejilla li {
    min-height: 0;
    padding: 18px 14px;
  }

  .proceso__rejilla span {
    margin-bottom: 18px;
  }

  .especializado {
    min-height: 210px;
  }

  .especializado__contenido {
    padding: 16px 14px;
  }

  .cierre {
    align-items: flex-start;
    flex-direction: column;
  }

  .cierre__acciones {
    justify-content: flex-start;
  }

  .hero__acciones .boton,
  .cierre__acciones .boton,
  .franja .boton {
    width: 100%;
  }

  .franja {
    gap: 22px;
    padding: 24px 14px;
    border-radius: 22px;
  }

  .franja h2 {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
  }
}

@media (max-width: 460px) {
  .hero {
    min-height: 460px;
  }

  .hero__contenido {
    padding: 28px 14px 78px;
  }

  .hero__acciones,
  .cierre__acciones {
    gap: 10px;
  }

  .boton {
    min-height: 46px;
    padding: 0 16px;
    font-size: 0.74rem;
    letter-spacing: 0.06em;
  }

  .encabezado > p:last-child,
  .proceso p,
  .franja > p,
  .cierre p,
  .catalogo__contenido p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .catalogo__selector {
    grid-template-columns: 1fr;
  }

  .catalogo__selector button span {
    font-size: 0.64rem;
  }

  .hero__controles button {
    width: 34px;
    height: 34px;
  }

  .hero__controles .hero__punto {
    width: 18px;
  }

  .hero__controles .hero__punto--activo {
    width: 34px;
  }

  .proceso__rejilla h3 {
    font-size: 1.28rem;
  }

  .especializado__contenido strong {
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .fundido-enter-active,
  .fundido-leave-active,
  .especializado img,
  .boton {
    transition: none;
  }
}
</style>
