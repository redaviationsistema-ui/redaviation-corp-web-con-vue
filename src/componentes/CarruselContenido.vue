<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  titulo: {
    type: String,
    default: 'Contenido destacado',
  },
  elementos: {
    type: Array,
    default: () => [],
  },
  automatico: {
    type: Boolean,
    default: false,
  },
  tamanoTitulo: {
    type: String,
    default: 'normal',
  },
  tamanoContenido: {
    type: String,
    default: 'normal',
  },
})

const indice = ref(0)
let intervalo

const elementoActual = computed(() => props.elementos[indice.value] ?? {})

function irA(nuevoIndice) {
  const total = props.elementos.length
  if (!total) return
  indice.value = (nuevoIndice + total) % total
}

onMounted(() => {
  if (props.automatico && props.elementos.length > 1) {
    intervalo = window.setInterval(() => irA(indice.value + 1), 2000)
  }
})

onBeforeUnmount(() => window.clearInterval(intervalo))
</script>

<template>
  <section v-if="elementos.length" class="carrusel" aria-roledescription="carrusel">
    <div class="carrusel__encabezado">
      <div>
        <p class="carrusel__etiqueta">Recorrido interactivo</p>
        <h2 :class="{ 'carrusel__titulo--compacto': tamanoTitulo === 'compacto' }">{{ titulo }}</h2>
      </div>
      <div class="carrusel__controles">
        <button type="button" aria-label="Elemento anterior" @click="irA(indice - 1)">←</button>
        <span>{{ indice + 1 }} / {{ elementos.length }}</span>
        <button type="button" aria-label="Elemento siguiente" @click="irA(indice + 1)">→</button>
      </div>
    </div>

    <article class="carrusel__diapositiva" aria-live="polite">
      <div class="carrusel__contenido">
        <span>{{ elementoActual.etiqueta }}</span>
        <h3 :class="{ 'carrusel__contenido-titulo--compacto': tamanoContenido === 'compacto' }">
          {{ elementoActual.titulo }}
        </h3>
        <p>{{ elementoActual.descripcion }}</p>
        <RouterLink v-if="elementoActual.ruta" :to="elementoActual.ruta" class="carrusel__enlace">
          {{ elementoActual.ctaTexto ?? 'Conocer más' }}
        </RouterLink>
      </div>
      <div class="carrusel__visual">
        <img
          v-if="elementoActual.imagen"
          :src="elementoActual.imagen"
          :alt="elementoActual.alt ?? elementoActual.titulo"
          :class="{ 'carrusel__imagen--contenida': elementoActual.ajuste === 'contener' }"
        />
        <span v-else>Registro visual de la capacidad presentada</span>
      </div>
    </article>

    <div class="carrusel__indicadores" aria-label="Seleccionar elemento">
      <button
        v-for="(elemento, posicion) in elementos"
        :key="elemento.titulo"
        type="button"
        :class="{ activo: posicion === indice }"
        :aria-label="`Mostrar ${elemento.titulo}`"
        @click="irA(posicion)"
      />
    </div>
  </section>
</template>

<style scoped>
.carrusel {
  padding: 42px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.carrusel__encabezado,
.carrusel__controles,
.carrusel__indicadores {
  display: flex;
  align-items: center;
}

.carrusel__encabezado {
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

.carrusel__etiqueta,
.carrusel__contenido > span {
  margin: 0 0 8px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
}

h2,
h3 {
  margin: 0;
  color: #fff;
  font-family: var(--fuente-titulo);
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
}

.carrusel__titulo--compacto {
  font-size: clamp(1.15rem, 2vw, 1.8rem);
  line-height: 1.16;
  max-width: 34ch;
}

h3 {
  font-size: clamp(1.7rem, 3vw, 2.6rem);
}

.carrusel__contenido-titulo--compacto {
  font-size: clamp(1.45rem, 2.3vw, 2.2rem);
  line-height: 1.18;
  max-width: 24ch;
}

.carrusel__controles {
  gap: 10px;
}

.carrusel__controles button,
.carrusel__indicadores button {
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
}

.carrusel__controles button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.2rem;
}

.carrusel__diapositiva {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 340px;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  background: rgba(5, 5, 5, 0.34);
}

.carrusel__contenido {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 32px;
}

.carrusel__contenido p {
  color: rgba(217, 217, 217, 0.78);
}

.carrusel__enlace {
  padding: 11px 16px;
  border-radius: 999px;
  color: #fff;
  background: #c8102e;
}

.carrusel__visual {
  display: grid;
  place-items: center;
  min-height: 280px;
  color: rgba(255, 255, 255, 0.56);
  background:
    linear-gradient(135deg, rgba(200, 16, 46, 0.2), transparent),
    rgba(255, 255, 255, 0.03);
}

.carrusel__visual img {
  width: 100%;
  height: 100%;
  max-height: 380px;
  object-fit: cover;
}

.carrusel__visual .carrusel__imagen--contenida {
  padding: 36px;
  object-fit: contain;
  background: #fff;
}

.carrusel__indicadores {
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}

.carrusel__indicadores button {
  width: 28px;
  height: 5px;
  padding: 0;
  border-radius: 999px;
}

.carrusel__indicadores button.activo {
  width: 52px;
  background: #ff4d68;
}

@media (max-width: 760px) {
  .carrusel__encabezado {
    align-items: flex-start;
    flex-direction: column;
  }

  .carrusel__diapositiva {
    grid-template-columns: 1fr;
  }
}
</style>
