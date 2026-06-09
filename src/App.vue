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

let temporizadorIntro

onMounted(() => {
  temporizadorIntro = window.setTimeout(() => {
    mostrarIntro.value = false
  }, 1800)
})

onBeforeUnmount(() => {
  window.clearTimeout(temporizadorIntro)
})
</script>

<template>
  <div class="aplicacion">
    <Transition name="intro">
      <section v-if="mostrarIntro" class="intro" aria-label="Introducción de Red Aviation">
        <span class="intro__haz" aria-hidden="true"></span>
        <span class="intro__ruta" aria-hidden="true">
          <i class="intro__avion">✈</i>
        </span>
        <div class="intro__contenido">
          <div class="intro__marca">
            <img src="/LOGO.png" alt="Red Aviation" class="intro__logo" />
          </div>
          <span class="intro__separador" aria-hidden="true"></span>
          <div class="intro__texto">
            <span>Expertos en</span>
            <strong>Aeronáutica</strong>
          </div>
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
  backdrop-filter: blur(10px);
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
  transform: skewX(-22deg);
  animation: barrido-intro 1600ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
  grid-template-columns: auto auto auto;
  align-items: center;
  gap: 28px;
  padding: 34px 42px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.015)),
    rgba(255, 255, 255, 0.02);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.02) inset,
    0 30px 90px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(18px);
}

.intro__marca,
.intro__separador,
.intro__texto span,
.intro__texto strong {
  opacity: 0;
  animation: elevar-intro 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.intro__marca {
  animation-delay: 180ms;
}

.intro__separador {
  animation-delay: 320ms;
}

.intro__texto span {
  animation-delay: 420ms;
}

.intro__texto strong {
  animation-delay: 540ms;
}

.intro__separador {
  width: 1px;
  height: 88px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent);
}

.intro__logo {
  width: min(280px, 48vw);
  height: auto;
  object-fit: contain;
}

.intro__texto {
  display: grid;
  gap: 6px;
  color: rgba(255, 255, 255, 0.82);
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.intro__texto span,
.intro__texto strong {
  font-weight: 400;
  font-size: clamp(1rem, 1.9vw, 2rem);
}

.intro__texto strong {
  color: #ffffff;
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

@media (max-width: 720px) {
  .intro__contenido {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 18px;
    width: min(92vw, 420px);
    text-align: center;
  }

  .intro__separador {
    width: 82px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  .intro__logo {
    width: min(220px, 58vw);
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
