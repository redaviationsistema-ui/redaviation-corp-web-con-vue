<script setup>
defineProps({
  etiqueta: {
    type: String,
    default: 'Visual',
  },
  tipo: {
    type: String,
    default: 'imagen',
  },
  detalle: {
    type: String,
    default: 'Espacio reservado para implementar recursos visuales.',
  },
  imagen: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'Recurso visual de la sección',
  },
})
</script>

<template>
  <aside class="marcador">
    <span class="marcador__etiqueta">{{ etiqueta }}</span>
    <strong class="marcador__tipo">{{ tipo }}</strong>
    <p class="marcador__detalle">{{ detalle }}</p>

    <div v-if="imagen" class="marcador__media">
      <img :src="imagen" :alt="alt" class="marcador__imagen" />
    </div>

    <div v-else class="marcador__espacio">Aquí implementas la imagen o el video</div>
  </aside>
</template>

<style scoped>
.marcador {
  min-height: 320px;
  padding: 24px;
  border-radius: 28px;
  border: 1px dashed rgba(255, 77, 104, 0.5);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03)),
    radial-gradient(circle at top right, rgba(200, 16, 46, 0.14), transparent 28%);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.marcador__etiqueta {
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.76rem;
}

.marcador__tipo {
  color: #ffffff;
  font-size: 1.5rem;
  font-family: var(--fuente-titulo);
}

.marcador__detalle {
  color: rgba(217, 217, 217, 0.76);
}

.marcador__media,
.marcador__espacio {
  flex: 1;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(5, 5, 5, 0.46);
  overflow: hidden;
}

.marcador__media {
  display: grid;
  place-items: center;
  padding: 16px;
}

.marcador__imagen {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 24px 40px rgba(0, 0, 0, 0.32));
}

.marcador__espacio {
  display: grid;
  place-items: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.56);
  text-align: center;
}
</style>
