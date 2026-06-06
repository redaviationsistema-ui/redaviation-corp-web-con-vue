<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navegacion } from '../datos/sitio'

const rutaActual = useRoute()
const enlaces = computed(() => navegacion)

function estaActivo(ruta) {
  return rutaActual.path === ruta
}
</script>

<template>
  <header class="navegacion">
    <div class="navegacion__interior">
      <RouterLink to="/" class="marca">
        <span class="marca__nombre">Red Aviation Co.</span>
        <span class="marca__descripcion">Aviación ejecutiva de alto nivel en Latinoamérica</span>
      </RouterLink>

      <nav class="menu" aria-label="Principal">
        <template v-for="enlace in enlaces" :key="enlace.ruta">
          <div v-if="enlace.submenu" class="menu__grupo">
            <RouterLink
              :to="enlace.ruta"
              class="menu__enlace"
              :class="{ 'menu__enlace--activo': estaActivo(enlace.ruta) }"
            >
              {{ enlace.nombre }}
            </RouterLink>

            <div class="submenu">
              <RouterLink
                v-for="subenlace in enlace.submenu"
                :key="subenlace.ruta"
                :to="subenlace.ruta"
                class="submenu__enlace"
              >
                {{ subenlace.nombre }}
              </RouterLink>
            </div>
          </div>

          <RouterLink
            v-else
            :to="enlace.ruta"
            class="menu__enlace"
            :class="{ 'menu__enlace--activo': estaActivo(enlace.ruta) }"
          >
            {{ enlace.nombre }}
          </RouterLink>
        </template>
      </nav>

      <RouterLink to="/contacto" class="cta">Solicitar Cotización</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.navegacion {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  backdrop-filter: blur(14px);
  background: rgba(5, 5, 5, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navegacion__interior {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
  padding: 16px 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 18px;
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
  justify-content: center;
  gap: 10px;
}

.menu__grupo {
  position: relative;
}

.menu__enlace,
.cta,
.submenu__enlace {
  border-radius: 999px;
  transition: all 180ms ease;
}

.menu__enlace {
  display: inline-flex;
  padding: 10px 14px;
  color: rgba(217, 217, 217, 0.84);
  border: 1px solid transparent;
}

.menu__enlace:hover,
.menu__enlace--activo {
  color: #ffffff;
  border-color: rgba(200, 16, 46, 0.42);
  background: rgba(200, 16, 46, 0.14);
}

.submenu {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  padding: 12px;
  display: none;
  grid-template-columns: 1fr;
  gap: 8px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 10, 10, 0.96);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.28);
}

.menu__grupo:hover .submenu {
  display: grid;
}

.submenu__enlace {
  padding: 10px 12px;
  color: rgba(217, 217, 217, 0.8);
  border: 1px solid transparent;
}

.submenu__enlace:hover {
  color: #ffffff;
  border-color: rgba(200, 16, 46, 0.36);
  background: rgba(200, 16, 46, 0.12);
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 20px;
  color: #ffffff;
  background: linear-gradient(135deg, #c8102e, #8f0f28);
  border: 1px solid rgba(255, 77, 104, 0.32);
}

.cta:hover {
  transform: translateY(-2px);
}

@media (max-width: 1080px) {
  .navegacion__interior {
    width: min(100%, calc(100% - 20px));
    grid-template-columns: 1fr;
  }

  .menu {
    justify-content: flex-start;
  }
}
</style>
