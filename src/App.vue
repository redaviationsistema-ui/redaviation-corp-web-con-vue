<script setup>
import { RouterView } from 'vue-router'
import NavegacionPrincipal from './componentes/NavegacionPrincipal.vue'
import PieSitio from './componentes/PieSitio.vue'
</script>

<template>
  <div class="aplicacion">
    <NavegacionPrincipal />

    <main class="contenedor-principal">
      <RouterView />
    </main>

    <PieSitio />
  </div>
</template>

<style scoped>
.aplicacion {
  min-height: 100vh;
}

.contenedor-principal {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  padding: 112px 0 48px;
}

@media (max-width: 720px) {
  .contenedor-principal {
    width: min(100%, calc(100% - 20px));
    padding-top: 96px;
  }
}
</style>
