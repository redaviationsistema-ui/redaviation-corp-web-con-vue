<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navegacion } from '../datos/sitio'

const rutaActual = useRoute()
const enlaces = computed(() => navegacion)
</script>

<template>
  <header class="navegacion">
    <div class="navegacion__interior">
      <RouterLink to="/" class="marca">
        <span class="marca__nombre">Red Aviation Co.</span>
        <span class="marca__descripcion">Aviación ejecutiva integrada</span>
      </RouterLink>

      <nav class="menu" aria-label="Principal">
        <RouterLink
          v-for="enlace in enlaces"
          :key="enlace.ruta"
          :to="enlace.ruta"
          class="menu__enlace"
          :class="{ 'menu__enlace--activo': rutaActual.path === enlace.ruta }"
        >
          {{ enlace.nombre }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navegacion {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(5, 5, 5, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navegacion__interior {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  padding: 18px 0;
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: space-between;
}

.marca {
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.marca__nombre {
  font-size: 0.95rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.marca__descripcion {
  color: rgba(217, 217, 217, 0.7);
  font-size: 0.85rem;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
}

.menu__enlace {
  padding: 10px 14px;
  border-radius: 999px;
  color: rgba(217, 217, 217, 0.84);
  border: 1px solid transparent;
  transition: all 180ms ease;
}

.menu__enlace:hover,
.menu__enlace--activo {
  color: #ffffff;
  border-color: rgba(200, 16, 46, 0.42);
  background: rgba(200, 16, 46, 0.14);
}

@media (max-width: 960px) {
  .navegacion__interior {
    width: min(100%, calc(100% - 20px));
    align-items: flex-start;
    flex-direction: column;
  }

  .menu {
    justify-content: flex-start;
  }
}
</style>
