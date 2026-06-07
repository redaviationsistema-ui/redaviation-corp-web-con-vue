<script setup>
defineProps({
  titulo: {
    type: String,
    default: 'Recurso multimedia',
  },
  descripcion: {
    type: String,
    default: 'Evidencia visual de instalaciones, aeronaves, procesos y capacidad operativa.',
  },
  tipo: {
    type: String,
    default: 'marcador',
  },
  fuente: {
    type: String,
    default: '',
  },
  portada: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  enlace: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="medio" :class="{ 'medio--solo-video': tipo === 'instagram' }">
    <div v-if="tipo !== 'instagram'" class="medio__encabezado">
      <span>Imagen y video</span>
      <h2>{{ titulo }}</h2>
      <p>{{ descripcion }}</p>
    </div>
    <div class="medio__contenedor">
      <iframe
        v-if="tipo === 'instagram' && fuente"
        :src="fuente"
        :title="alt || titulo"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen
      />
      <video v-else-if="tipo === 'video' && fuente" controls playsinline :poster="portada">
        <source :src="fuente" />
        Tu navegador no puede reproducir este video.
      </video>
      <img v-else-if="tipo === 'imagen' && fuente" :src="fuente" :alt="alt || titulo" />
      <div v-else class="medio__marcador">
        <strong>Galería institucional</strong>
        <span>Instalaciones, activos representados, procesos técnicos y operaciones coordinadas.</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.medio {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 18px;
  padding: 42px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.medio--solo-video {
  display: block;
  width: min(100%, 540px);
  justify-self: center;
  padding: 0;
  overflow: hidden;
  background: #fff;
}

.medio--solo-video .medio__contenedor {
  min-height: 720px;
  border: 0;
  border-radius: 29px;
}

.medio__encabezado {
  padding: 16px 8px;
}

.medio__encabezado > span {
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
}

h2 {
  margin: 10px 0;
  color: #fff;
  font-family: var(--fuente-titulo);
  font-size: clamp(1.8rem, 3vw, 2.8rem);
}

p,
.medio__marcador span {
  color: rgba(217, 217, 217, 0.76);
}

.medio__contenedor {
  min-height: 320px;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  background: rgba(5, 5, 5, 0.48);
}

.medio__contenedor img,
.medio__contenedor video,
.medio__contenedor iframe {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
}

.medio__contenedor iframe {
  display: block;
  min-height: 720px;
  border: 0;
  background: #fff;
}

.medio__marcador {
  display: grid;
  place-content: center;
  gap: 8px;
  height: 100%;
  min-height: 320px;
  padding: 30px;
  text-align: center;
}

.medio__marcador strong {
  color: #fff;
}

@media (max-width: 760px) {
  .medio {
    grid-template-columns: 1fr;
  }

  .medio__contenedor iframe {
    min-height: 640px;
  }
}
</style>
