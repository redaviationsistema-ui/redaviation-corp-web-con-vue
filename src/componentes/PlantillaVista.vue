<script setup>
import MarcadorVisual from './MarcadorVisual.vue'

defineProps({
  pretitulo: String,
  titulo: String,
  subtitulo: String,
  descripcion: String,
  visual: {
    type: Object,
    default: () => ({}),
  },
  metricas: {
    type: Array,
    default: () => [],
  },
  bloques: {
    type: Array,
    default: () => [],
  },
  proceso: {
    type: Array,
    default: () => [],
  },
  animaciones: {
    type: Array,
    default: () => [],
  },
  contactos: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="vista">
    <header class="vista__hero">
      <div class="vista__texto">
        <p class="vista__pretitulo">{{ pretitulo }}</p>
        <h1>{{ titulo }}</h1>
        <p class="vista__subtitulo">{{ subtitulo }}</p>
        <p class="vista__descripcion">{{ descripcion }}</p>
      </div>

      <MarcadorVisual v-bind="visual" />
    </header>

    <section v-if="metricas.length" class="metricas">
      <article v-for="metrica in metricas" :key="metrica.etiqueta" class="metrica">
        <strong>{{ metrica.valor }}</strong>
        <span>{{ metrica.etiqueta }}</span>
      </article>
    </section>

    <section v-if="bloques.length" class="bloques">
      <article v-for="bloque in bloques" :key="bloque.titulo" class="bloque">
        <h2>{{ bloque.titulo }}</h2>
        <p>{{ bloque.descripcion }}</p>
        <div v-if="bloque.items?.length" class="bloque__items">
          <span v-for="item in bloque.items" :key="item">{{ item }}</span>
        </div>
      </article>
    </section>

    <section v-if="animaciones.length" class="animaciones">
      <article class="animacion">
        <p class="animacion__etiqueta">Animación sugerida</p>
        <div class="animacion__lista">
          <span v-for="animacion in animaciones" :key="animacion">{{ animacion }}</span>
        </div>
      </article>
    </section>

    <section v-if="proceso.length" class="proceso">
      <article v-for="paso in proceso" :key="paso" class="proceso__paso">
        <span>{{ paso }}</span>
      </article>
    </section>

    <section v-if="contactos.length" class="contactos">
      <a
        v-for="contacto in contactos"
        :key="contacto"
        :href="contacto.includes('@') ? `mailto:${contacto}` : `tel:${contacto.replace(/\\s+/g, '')}`"
        class="contacto"
      >
        {{ contacto }}
      </a>
    </section>
  </section>
</template>

<style scoped>
.vista {
  display: grid;
  gap: 18px;
}

.vista__hero,
.metricas,
.bloques,
.animaciones,
.proceso,
.contactos {
  display: grid;
  gap: 18px;
}

.vista__hero {
  grid-template-columns: 1.15fr 0.85fr;
}

.vista__texto,
.metrica,
.bloque,
.animacion,
.proceso__paso,
.contacto {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.vista__texto {
  padding: 32px;
}

.vista__pretitulo,
.animacion__etiqueta {
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  margin: 0 0 14px;
}

h1,
h2,
strong {
  color: #ffffff;
}

h1,
h2 {
  font-family: var(--fuente-titulo);
  margin: 0;
}

h1 {
  font-size: clamp(2.6rem, 6vw, 5.6rem);
  line-height: 0.96;
  letter-spacing: -0.03em;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.vista__subtitulo {
  font-size: 1.2rem;
  color: #ffffff;
  margin-top: 18px;
}

.vista__descripcion,
.bloque p,
.contacto,
.metrica span,
.animacion__lista span {
  color: rgba(217, 217, 217, 0.78);
}

.vista__descripcion {
  max-width: 60ch;
  margin-top: 14px;
}

.metricas {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.metrica,
.animacion,
.bloque,
.proceso__paso,
.contacto {
  padding: 22px;
}

.metrica strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 6px;
}

.bloques {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.bloque__items,
.animacion__lista {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.bloque__items span,
.animacion__lista span {
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
}

.proceso {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.proceso__paso {
  min-height: 120px;
  display: flex;
  align-items: end;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.03)),
    radial-gradient(circle at top left, rgba(200, 16, 46, 0.15), transparent 30%);
}

.proceso__paso span {
  color: #ffffff;
  font-weight: 600;
}

.contactos {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.contacto {
  font-size: 1.05rem;
}

@media (max-width: 960px) {
  .vista__hero,
  .metricas,
  .bloques {
    grid-template-columns: 1fr;
  }
}
</style>
