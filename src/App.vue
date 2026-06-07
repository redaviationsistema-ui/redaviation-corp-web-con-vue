<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import NavegacionPrincipal from './componentes/NavegacionPrincipal.vue'
import PieSitio from './componentes/PieSitio.vue'
import ChatbotRedAviation from './componentes/ChatbotRedAviation.vue'

const ruta = useRoute()
const mostrarDeclaracion = computed(() => ruta.name !== 'nosotros')
</script>

<template>
  <div class="aplicacion">
    <NavegacionPrincipal />

    <main class="contenedor-principal">
      <RouterView />
    </main>

    <section v-if="mostrarDeclaracion" class="declaracion">
      <p>Representación aeronáutica privada</p>
      <h2>Capacidad real para representar, evaluar y comercializar activos aeronáuticos de alto valor.</h2>
      <span>Discreción, criterio técnico, inteligencia de mercado y ejecución comercial.</span>
    </section>

    <PieSitio />
    <ChatbotRedAviation />
  </div>
</template>

<style scoped>
.aplicacion {
  min-height: 100vh;
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

@media (max-width: 720px) {
  .contenedor-principal {
    width: min(100%, calc(100% - 20px));
    padding-top: 24px;
  }

  .declaracion {
    width: min(100%, calc(100% - 20px));
  }
}
</style>
