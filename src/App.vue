<script setup>
import { computed, defineAsyncComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import NavegacionPrincipal from './componentes/NavegacionPrincipal.vue'
import PieSitio from './componentes/PieSitio.vue'

const ruta = useRoute()
const mostrarDeclaracion = computed(() => ruta.name !== 'nosotros')
const mostrarIntro = ref(true)
const ChatbotRedAviation = defineAsyncComponent(() => import('./componentes/ChatbotRedAviation.vue'))
const introCanvas = ref(null)

let temporizadorIntro
let cuadroAnimacion
let particulas = []
let explosionesProgramadas = []

const paletaFuegos = ['255, 214, 102', '255, 120, 140', '255, 255, 255', '255, 168, 76']
const maximoParticulas = 140

function crearExplosion(x, y, escala = 1) {
  const cantidad = Math.round((14 + Math.random() * 12) * escala)

  for (let indice = 0; indice < cantidad; indice += 1) {
    const angulo = (Math.PI * 2 * indice) / cantidad + Math.random() * 0.16
    const velocidad = (1.5 + Math.random() * 2.2) * escala

    particulas.push({
      x,
      y,
      dx: Math.cos(angulo) * velocidad,
      dy: Math.sin(angulo) * velocidad,
      vida: 38 + Math.random() * 18,
      maxVida: 38 + Math.random() * 18,
      tamano: 1.2 + Math.random() * 1.8,
      color: paletaFuegos[Math.floor(Math.random() * paletaFuegos.length)],
    })
  }

  if (particulas.length > maximoParticulas) {
    particulas = particulas.slice(particulas.length - maximoParticulas)
  }
}

function ajustarCanvas() {
  const canvas = introCanvas.value
  if (!canvas) return

  const escala = Math.min(window.devicePixelRatio || 1, 1.4)
  const ancho = window.innerWidth
  const alto = window.innerHeight

  canvas.width = ancho * escala
  canvas.height = alto * escala
  canvas.style.width = `${ancho}px`
  canvas.style.height = `${alto}px`

  const contexto = canvas.getContext('2d')
  contexto?.setTransform(escala, 0, 0, escala, 0, 0)
}

function dibujarFuegos() {
  const canvas = introCanvas.value
  const contexto = canvas?.getContext('2d')
  if (!canvas || !contexto) return

  const ancho = window.innerWidth
  const alto = window.innerHeight

  contexto.clearRect(0, 0, ancho, alto)
  contexto.globalCompositeOperation = 'lighter'

  particulas = particulas.filter((particula) => particula.vida > 0)

  particulas.forEach((particula) => {
    particula.x += particula.dx
    particula.y += particula.dy
    particula.dx *= 0.99
    particula.dy = particula.dy * 0.99 + 0.025
    particula.vida -= 1

    const opacidad = Math.max(particula.vida / particula.maxVida, 0)
    const brillo = particula.tamano * 3.2

    contexto.beginPath()
    contexto.fillStyle = `rgba(${particula.color}, ${opacidad})`
    contexto.shadowColor = `rgba(${particula.color}, ${opacidad * 0.95})`
    contexto.shadowBlur = 8
    contexto.arc(particula.x, particula.y, particula.tamano, 0, Math.PI * 2)
    contexto.fill()

    contexto.beginPath()
    contexto.fillStyle = `rgba(${particula.color}, ${opacidad * 0.12})`
    contexto.shadowBlur = 0
    contexto.arc(particula.x, particula.y, brillo, 0, Math.PI * 2)
    contexto.fill()
  })

  contexto.globalCompositeOperation = 'source-over'
  cuadroAnimacion = window.requestAnimationFrame(dibujarFuegos)
}

function lanzarFuegos() {
  const explosiones = [
    { x: 0.76, y: 0.22, escala: 1 },
    { x: 0.18, y: 0.27, escala: 0.82 },
    { x: 0.58, y: 0.16, escala: 0.72 },
  ]

  explosiones.forEach((explosion, indice) => {
    const temporizadorExplosion = window.setTimeout(() => {
      crearExplosion(window.innerWidth * explosion.x, window.innerHeight * explosion.y, explosion.escala)
    }, indice * 320)

    explosionesProgramadas.push(temporizadorExplosion)
  })
}

function detenerFuegos() {
  explosionesProgramadas.forEach((temporizadorExplosion) => window.clearTimeout(temporizadorExplosion))
  explosionesProgramadas = []
  window.cancelAnimationFrame(cuadroAnimacion)
}

onMounted(() => {
  ajustarCanvas()
  dibujarFuegos()
  lanzarFuegos()
  temporizadorIntro = window.setTimeout(() => {
    mostrarIntro.value = false
    detenerFuegos()
  }, 2600)
  window.addEventListener('resize', ajustarCanvas)
})

onBeforeUnmount(() => {
  window.clearTimeout(temporizadorIntro)
  detenerFuegos()
  window.removeEventListener('resize', ajustarCanvas)
})
</script>

<template>
  <div class="aplicacion">
    <Transition name="intro">
      <section v-if="mostrarIntro" class="intro" aria-label="Introducción de Red Aviation">
        <canvas ref="introCanvas" class="intro__lienzo" aria-hidden="true"></canvas>
        <span class="intro__haz" aria-hidden="true"></span>
        <span class="intro__destello intro__destello--uno" aria-hidden="true"></span>
        <span class="intro__destello intro__destello--dos" aria-hidden="true"></span>
        <span class="intro__ruta" aria-hidden="true">
          <i class="intro__avion">✈</i>
        </span>
        <div class="intro__contenido">
          <img
            src="/imagenes/25ANIVERSARIO.png"
            alt="Red Aviation 25 aniversario"
            class="intro__aniversario-imagen"
          />
        </div>
      </section>
    </Transition>

    <NavegacionPrincipal />

    <main class="contenedor-principal">
      <RouterView />
    </main>

    <section v-if="mostrarDeclaracion" class="declaracion">
      <p>Representación aeronáutica privada</p>
      <h2>Talleres aeronauticos, Avionics solutions, Helicopter Shop, Landing Gear Services, Brakes sistemas</h2>
    </section>

    <PieSitio />
    <ChatbotRedAviation />
  </div>
</template>

<style scoped>
.aplicacion {
  min-height: 100vh;
}

.intro {
  position: fixed;
  z-index: 5000;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at top center, rgba(200, 16, 46, 0.24), transparent 28%),
    linear-gradient(135deg, rgba(200, 16, 46, 0.08), transparent 34%),
    rgba(5, 5, 5, 0.98);
}

.intro__lienzo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.72;
}

.intro::before,
.intro::after {
  position: absolute;
  content: '';
  pointer-events: none;
}

.intro::before {
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
  background-size: 120px 120px;
  opacity: 0.45;
}

.intro::after {
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 77, 104, 0.34), transparent);
  transform: translateY(-50%);
}

.intro__haz {
  position: absolute;
  inset: -10% auto -10% -20%;
  width: 36%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
  transform: skewX(-22deg);
  animation: barrido-intro 2100ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.intro__destello {
  position: absolute;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(255, 113, 135, 0.4), transparent 68%);
  filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  animation: destello-aniversario 1900ms ease-out forwards;
}

.intro__destello--uno {
  top: 16%;
  right: 18%;
  width: 180px;
  height: 180px;
}

.intro__destello--dos {
  bottom: 18%;
  left: 12%;
  width: 240px;
  height: 240px;
  animation-delay: 180ms;
}

.intro__ruta {
  position: absolute;
  inset: auto 10% 18% 10%;
  height: 1px;
  border-top: 1px dashed rgba(255, 77, 104, 0.26);
  pointer-events: none;
}

.intro__ruta::before,
.intro__ruta::after {
  position: absolute;
  top: -2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 77, 104, 0.7);
  content: '';
}

.intro__ruta::before {
  left: 0;
}

.intro__ruta::after {
  right: 0;
}

.intro__avion {
  position: absolute;
  top: -17px;
  left: 0;
  color: #ff7187;
  font-style: normal;
  font-size: 1.1rem;
  text-shadow: 0 0 16px rgba(255, 77, 104, 0.45);
  animation: vuelo-intro 1800ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.intro__contenido {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: min(92vw, 1400px);
  padding: 24px;
}

.intro__aniversario-imagen {
  opacity: 0;
  animation: elevar-intro 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.intro__aniversario-imagen {
  margin: 0;
  width: min(92vw, 1200px);
  max-height: 82vh;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 40px rgba(255, 231, 186, 0.24));
  animation-delay: 420ms;
}

.contenedor-principal {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  padding: 32px 0 48px;
}

.declaracion {
  width: min(1280px, calc(100% - 32px));
  margin: 32px auto 48px;
  padding: clamp(34px, 6vw, 72px) 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  background:
    linear-gradient(90deg, rgba(200, 16, 46, 0.18), transparent 48%);
}

.declaracion p {
  margin: 0 0 12px;
  color: #ff7187;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

.declaracion h2 {
  max-width: 900px;
  margin: 0 0 14px;
  color: #fff;
  font-family: var(--fuente-titulo);
  font-size: clamp(2rem, 4vw, 3.8rem);
  line-height: 1;
}

.declaracion span {
  color: rgba(217, 217, 217, 0.78);
}

.intro-enter-active,
.intro-leave-active {
  transition: opacity 650ms ease, transform 650ms ease;
}

.intro-enter-from,
.intro-leave-to {
  opacity: 0;
}

.intro-leave-to .intro__contenido {
  transform: translateY(-16px) scale(0.985);
  opacity: 0;
}

.intro-leave-to .intro__haz {
  opacity: 0;
}

@keyframes barrido-intro {
  0% {
    transform: translateX(-10%) skewX(-22deg);
    opacity: 0;
  }

  15% {
    opacity: 1;
  }

  100% {
    transform: translateX(420%) skewX(-22deg);
    opacity: 0;
  }
}

@keyframes elevar-intro {
  0% {
    opacity: 0;
    transform: translateY(18px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes vuelo-intro {
  0% {
    opacity: 0;
    transform: translateX(0) translateY(8px) scale(0.92);
  }

  15% {
    opacity: 1;
  }

  55% {
    transform: translateX(48vw) translateY(-10px) scale(1);
  }

  100% {
    opacity: 0.95;
    transform: translateX(calc(100% - 24px)) translateY(-2px) scale(0.98);
  }
}

@keyframes destello-aniversario {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  30% {
    opacity: 0.85;
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

@media (max-width: 720px) {
  .intro__contenido {
    width: 100vw;
    min-height: 100dvh;
    padding: 0;
  }

  .intro__aniversario-imagen {
    width: min(118vw, 760px);
    max-width: none;
    max-height: 100dvh;
    object-position: center center;
    justify-self: center;
    position: relative;
    left: -10%;
  }

  .intro__haz,
  .intro__destello,
  .intro__ruta {
    opacity: 0.55;
  }

  .intro__ruta {
    right: 8%;
    bottom: 14%;
    left: 8%;
  }

  .contenedor-principal {
    width: min(100%, calc(100% - 20px));
    padding-top: 24px;
  }

  .declaracion {
    width: min(100%, calc(100% - 20px));
  }
}
</style>
