<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { navegacion } from '../datos/sitio'

const rutaActual = useRoute()
const enlaces = computed(() => navegacion)
const submenuAbierto = ref(null)
let temporizadorCierreSubmenu = null
const iconosPorNombre = {
  Inicio: 'home',
  Nosotros: 'users',
  Ecosistema: 'network',
  Servicios: 'grid',
  Más: 'spark',
  'Videos y contenido': 'play',
  Contacto: 'mail',
}
const iconosPorSubenlace = {
  'Vista General': 'overview',
  GESA: 'orbit',
  'Excel Turbines': 'turbine',
  CESA: 'shield',
  'Sky Group': 'sky',
  'Compra y Venta': 'trade',
  Administración: 'cockpit',
  'Inspecciones Precompra': 'search',
  'Importaciones y Exportaciones': 'transfer',
  'Taxi Aéreo': 'plane',
  'Ambulancia Aérea': 'medical',
  'Carga Aérea': 'cargo',
  'Venta de Partes': 'parts',
  'Taller de Motores': 'engine',
  'Aviónica e Instrumentos': 'avionics',
  'Mantenimiento Militar': 'badge',
  'Cotiza Tu Vuelo': 'quote',
  Aeronaves: 'aircraft',
  'Ciclo de Vida': 'cycle',
  'Medios y Redes': 'media',
  'Videos y contenido': 'play',
}

function obtenerIcono(nombre) {
  return iconosPorNombre[nombre] ?? 'dot'
}

function obtenerIconoSubenlace(nombre) {
  return iconosPorSubenlace[nombre] ?? 'dot'
}

function estaActivo(ruta) {
  return rutaActual.path === ruta
}

function esMovil() {
  return typeof window !== 'undefined' && window.innerWidth <= 1080
}

function alternarSubmenu(nombre, evento) {
  if (!esMovil()) return

  evento.preventDefault()
  submenuAbierto.value = submenuAbierto.value === nombre ? null : nombre
}

function abrirSubmenu(nombre) {
  if (esMovil()) return

  if (temporizadorCierreSubmenu) {
    window.clearTimeout(temporizadorCierreSubmenu)
    temporizadorCierreSubmenu = null
  }

  submenuAbierto.value = nombre
}

function programarCierreSubmenu() {
  if (esMovil()) return

  if (temporizadorCierreSubmenu) {
    window.clearTimeout(temporizadorCierreSubmenu)
  }

  temporizadorCierreSubmenu = window.setTimeout(() => {
    submenuAbierto.value = null
    temporizadorCierreSubmenu = null
  }, 180)
}

function cerrarMenus() {
  if (temporizadorCierreSubmenu) {
    window.clearTimeout(temporizadorCierreSubmenu)
    temporizadorCierreSubmenu = null
  }

  submenuAbierto.value = null

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur()
  }
}

function manejarClickExterior(evento) {
  if (!esMovil()) return

  const objetivo = evento.target
  if (!(objetivo instanceof Node)) return

  const dentroDeNavegacion =
    objetivo instanceof Element
      ? objetivo.closest('.navegacion')
      : objetivo.parentElement?.closest('.navegacion')

  if (!dentroDeNavegacion) {
    cerrarMenus()
  }
}

watch(
  () => rutaActual.path,
  () => {
    cerrarMenus()
  },
)

onMounted(() => {
  document.addEventListener('click', manejarClickExterior)
})

onBeforeUnmount(() => {
  if (temporizadorCierreSubmenu) {
    window.clearTimeout(temporizadorCierreSubmenu)
  }

  document.removeEventListener('click', manejarClickExterior)
})
</script>

<template>
  <header class="navegacion">
    <div class="navegacion__interior">
      <RouterLink to="/" class="marca">
        <img src="/imagenes/logoss.png" alt="Red Aviation Co." class="marca__logo" />
        <span class="marca__descripcion">EXPERTOS EN AERONÁUTICA</span>
      </RouterLink>

      <nav class="menu" aria-label="Principal">
        <template v-for="enlace in enlaces" :key="enlace.ruta">
          <div
            v-if="enlace.submenu"
            class="menu__grupo"
            @mouseenter="abrirSubmenu(enlace.nombre)"
            @mouseleave="programarCierreSubmenu"
          >
            <RouterLink
              :to="enlace.ruta"
              class="menu__enlace"
              :class="{ 'menu__enlace--activo': estaActivo(enlace.ruta) }"
              @click="alternarSubmenu(enlace.nombre, $event)"
            >
              <span class="menu__icono" :data-icono="obtenerIcono(enlace.nombre)" aria-hidden="true"></span>
              {{ enlace.nombre }}
              <span class="menu__chevron" aria-hidden="true"></span>
            </RouterLink>

            <div
              class="submenu"
              :class="{ 'submenu--abierto': submenuAbierto === enlace.nombre }"
              :aria-hidden="submenuAbierto === enlace.nombre ? 'false' : 'true'"
              @mouseenter="abrirSubmenu(enlace.nombre)"
              @mouseleave="programarCierreSubmenu"
            >
              <RouterLink
                v-for="subenlace in enlace.submenu"
                :key="subenlace.ruta"
                :to="subenlace.ruta"
                class="submenu__enlace"
                @click="cerrarMenus"
              >
                <span
                  class="menu__icono submenu__icono"
                  :data-icono="obtenerIconoSubenlace(subenlace.nombre)"
                  aria-hidden="true"
                ></span>
                {{ subenlace.nombre }}
              </RouterLink>
            </div>
          </div>

          <RouterLink
            v-else
            :to="enlace.ruta"
            class="menu__enlace"
            :class="{ 'menu__enlace--activo': estaActivo(enlace.ruta) }"
            @click="cerrarMenus"
          >
            <span class="menu__icono" :data-icono="obtenerIcono(enlace.nombre)" aria-hidden="true"></span>
            {{ enlace.nombre }}
          </RouterLink>
        </template>
      </nav>

      <RouterLink to="/contacto" class="cta" @click="cerrarMenus">
        <span class="menu__icono menu__icono--cta" data-icono="plane" aria-hidden="true"></span>
        Solicitar Cotización
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.navegacion {
  position: sticky;
  top: 0;
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
  align-items: center;
  gap: 12px;
  color: #ffffff;
}

.marca__logo {
  width: 92px;
  height: 58px;
  object-fit: cover;
  object-position: center;
}

.marca__descripcion {
  max-width: 130px;
  color: rgba(217, 217, 217, 0.7);
  font-size: 0.72rem;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.menu__grupo {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: -10px;
}

.menu__enlace,
.cta,
.submenu__enlace {
  border-radius: 999px;
  transition: all 180ms ease;
}

.menu__enlace {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  color: rgba(217, 217, 217, 0.84);
  border: 1px solid transparent;
}

.menu__icono {
  position: relative;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  color: rgba(255, 255, 255, 0.72);
}

.menu__icono::before,
.menu__icono::after {
  position: absolute;
  content: '';
  box-sizing: border-box;
}

.menu__icono[data-icono='home']::before {
  inset: 5px 3px 2px;
  border: 1.6px solid currentColor;
  border-top: none;
  border-radius: 0 0 3px 3px;
}

.menu__icono[data-icono='home']::after {
  left: 2px;
  top: 2px;
  width: 12px;
  height: 12px;
  border-top: 1.6px solid currentColor;
  border-left: 1.6px solid currentColor;
  transform: rotate(45deg);
}

.menu__icono[data-icono='users']::before {
  left: 1px;
  top: 2px;
  width: 6px;
  height: 6px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
  box-shadow: 7px 2px 0 -1px rgba(5, 5, 5, 0), 7px 2px 0 0 currentColor;
}

.menu__icono[data-icono='users']::after {
  left: 1px;
  bottom: 1px;
  width: 13px;
  height: 7px;
  border: 1.6px solid currentColor;
  border-top: none;
  border-radius: 7px 7px 3px 3px;
}

.menu__icono[data-icono='network']::before {
  inset: 2px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
  clip-path: polygon(0 42%, 100% 42%, 100% 58%, 0 58%);
}

.menu__icono[data-icono='network']::after {
  left: 3px;
  top: 3px;
  width: 10px;
  height: 10px;
  border-left: 1.6px solid currentColor;
  border-right: 1.6px solid currentColor;
  border-radius: 50%;
}

.menu__icono[data-icono='grid']::before {
  inset: 2px;
  border: 1.6px solid currentColor;
  border-radius: 4px;
  box-shadow:
    inset 4px 0 0 -3px currentColor,
    inset -4px 0 0 -3px currentColor,
    inset 0 4px 0 -3px currentColor,
    inset 0 -4px 0 -3px currentColor;
}

.menu__icono[data-icono='spark']::before {
  left: 7px;
  top: 1px;
  width: 2px;
  height: 14px;
  background: currentColor;
  border-radius: 999px;
}

.menu__icono[data-icono='spark']::after {
  left: 1px;
  top: 7px;
  width: 14px;
  height: 2px;
  background: currentColor;
  border-radius: 999px;
  box-shadow:
    0 0 0 0 currentColor,
    0 0 0 0 currentColor;
  transform: rotate(45deg);
}

.menu__icono[data-icono='play']::before {
  left: 3px;
  top: 2px;
  width: 10px;
  height: 12px;
  background: currentColor;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.menu__icono[data-icono='mail']::before {
  inset: 3px 1px;
  border: 1.6px solid currentColor;
  border-radius: 3px;
}

.menu__icono[data-icono='mail']::after {
  left: 3px;
  top: 5px;
  width: 10px;
  height: 6px;
  border-left: 1.6px solid currentColor;
  border-bottom: 1.6px solid currentColor;
  transform: skewY(-33deg) rotate(-45deg);
}

.menu__icono[data-icono='plane']::before {
  left: 1px;
  top: 7px;
  width: 14px;
  height: 2px;
  background: currentColor;
  border-radius: 999px;
  transform: rotate(-20deg);
}

.menu__icono[data-icono='plane']::after {
  left: 6px;
  top: 3px;
  width: 7px;
  height: 7px;
  border-top: 1.6px solid currentColor;
  border-right: 1.6px solid currentColor;
  transform: rotate(28deg) skewX(10deg);
}

.menu__icono[data-icono='dot']::before {
  inset: 5px;
  border-radius: 50%;
  background: currentColor;
}

.menu__icono[data-icono='overview']::before {
  inset: 2px;
  border: 1.6px solid currentColor;
  border-radius: 4px;
}

.menu__icono[data-icono='overview']::after {
  left: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: currentColor;
  opacity: 0.9;
}

.menu__icono[data-icono='orbit']::before {
  inset: 5px;
  border-radius: 50%;
  background: currentColor;
}

.menu__icono[data-icono='orbit']::after {
  inset: 1px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
  transform: rotate(-22deg);
}

.menu__icono[data-icono='turbine']::before {
  inset: 3px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
}

.menu__icono[data-icono='turbine']::after {
  left: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  background: currentColor;
  clip-path: polygon(50% 0, 68% 34%, 100% 50%, 68% 66%, 50% 100%, 34% 66%, 0 50%, 34% 34%);
}

.menu__icono[data-icono='shield']::before {
  left: 3px;
  top: 2px;
  width: 10px;
  height: 12px;
  border: 1.6px solid currentColor;
  border-radius: 4px 4px 6px 6px;
  clip-path: polygon(0 0, 100% 0, 100% 62%, 50% 100%, 0 62%);
}

.menu__icono[data-icono='sky']::before {
  left: 2px;
  top: 7px;
  width: 12px;
  height: 5px;
  border-radius: 999px;
  border: 1.6px solid currentColor;
  border-top: none;
}

.menu__icono[data-icono='sky']::after {
  left: 4px;
  top: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.6px solid currentColor;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotate(-20deg);
}

.menu__icono[data-icono='trade']::before {
  left: 1px;
  top: 4px;
  width: 9px;
  height: 1.6px;
  background: currentColor;
  box-shadow: 0 6px 0 currentColor;
}

.menu__icono[data-icono='trade']::after {
  right: 1px;
  top: 2px;
  width: 6px;
  height: 10px;
  border-top: 1.6px solid currentColor;
  border-right: 1.6px solid currentColor;
  border-bottom: 1.6px solid currentColor;
  transform: skewX(-20deg);
}

.menu__icono[data-icono='cockpit']::before {
  inset: 2px;
  border: 1.6px solid currentColor;
  border-radius: 5px;
}

.menu__icono[data-icono='cockpit']::after {
  left: 5px;
  top: 4px;
  width: 6px;
  height: 6px;
  border-top: 1.6px solid currentColor;
  border-right: 1.6px solid currentColor;
  transform: rotate(45deg);
}

.menu__icono[data-icono='search']::before {
  left: 2px;
  top: 2px;
  width: 8px;
  height: 8px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
}

.menu__icono[data-icono='search']::after {
  right: 2px;
  bottom: 2px;
  width: 6px;
  height: 1.6px;
  background: currentColor;
  transform: rotate(45deg);
  transform-origin: center;
}

.menu__icono[data-icono='transfer']::before {
  left: 1px;
  top: 4px;
  width: 10px;
  height: 1.6px;
  background: currentColor;
}

.menu__icono[data-icono='transfer']::after {
  right: 1px;
  top: 3px;
  width: 8px;
  height: 8px;
  border-top: 1.6px solid currentColor;
  border-right: 1.6px solid currentColor;
  border-bottom: 1.6px solid currentColor;
  transform: rotate(45deg);
}

.menu__icono[data-icono='medical']::before {
  left: 6px;
  top: 2px;
  width: 4px;
  height: 12px;
  background: currentColor;
  border-radius: 2px;
}

.menu__icono[data-icono='medical']::after {
  left: 2px;
  top: 6px;
  width: 12px;
  height: 4px;
  background: currentColor;
  border-radius: 2px;
}

.menu__icono[data-icono='cargo']::before {
  left: 2px;
  top: 4px;
  width: 12px;
  height: 9px;
  border: 1.6px solid currentColor;
  border-radius: 2px;
}

.menu__icono[data-icono='cargo']::after {
  left: 5px;
  top: 1px;
  width: 6px;
  height: 4px;
  border: 1.6px solid currentColor;
  border-bottom: none;
  border-radius: 2px 2px 0 0;
}

.menu__icono[data-icono='parts']::before {
  left: 2px;
  top: 2px;
  width: 12px;
  height: 12px;
  border: 1.6px dashed currentColor;
  border-radius: 50%;
}

.menu__icono[data-icono='parts']::after {
  left: 6px;
  top: 6px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
}

.menu__icono[data-icono='engine']::before {
  left: 2px;
  top: 5px;
  width: 12px;
  height: 6px;
  border: 1.6px solid currentColor;
  border-radius: 4px;
}

.menu__icono[data-icono='engine']::after {
  right: 1px;
  top: 3px;
  width: 4px;
  height: 10px;
  border-right: 1.6px solid currentColor;
  border-left: 1.6px solid currentColor;
}

.menu__icono[data-icono='avionics']::before {
  inset: 2px;
  border: 1.6px solid currentColor;
  border-radius: 4px;
}

.menu__icono[data-icono='avionics']::after {
  left: 5px;
  top: 5px;
  width: 6px;
  height: 6px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
}

.menu__icono[data-icono='badge']::before {
  left: 3px;
  top: 2px;
  width: 10px;
  height: 10px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
}

.menu__icono[data-icono='badge']::after {
  left: 6px;
  bottom: 1px;
  width: 4px;
  height: 5px;
  background: currentColor;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 72%, 0 100%);
}

.menu__icono[data-icono='quote']::before {
  left: 2px;
  top: 2px;
  width: 12px;
  height: 10px;
  border: 1.6px solid currentColor;
  border-radius: 4px;
}

.menu__icono[data-icono='quote']::after {
  left: 5px;
  bottom: 1px;
  width: 6px;
  height: 6px;
  border-left: 1.6px solid currentColor;
  border-bottom: 1.6px solid currentColor;
  transform: skewX(-28deg);
}

.menu__icono[data-icono='aircraft']::before {
  left: 1px;
  top: 7px;
  width: 14px;
  height: 1.6px;
  background: currentColor;
}

.menu__icono[data-icono='aircraft']::after {
  left: 5px;
  top: 2px;
  width: 6px;
  height: 11px;
  border-top: 1.6px solid currentColor;
  border-left: 1.6px solid currentColor;
  border-right: 1.6px solid currentColor;
  transform: skewY(-22deg);
}

.menu__icono[data-icono='cycle']::before {
  inset: 2px;
  border: 1.6px solid currentColor;
  border-radius: 50%;
}

.menu__icono[data-icono='cycle']::after {
  right: 1px;
  top: 1px;
  width: 5px;
  height: 5px;
  border-top: 1.6px solid currentColor;
  border-right: 1.6px solid currentColor;
  transform: rotate(45deg);
}

.menu__icono[data-icono='media']::before {
  left: 2px;
  top: 3px;
  width: 12px;
  height: 10px;
  border: 1.6px solid currentColor;
  border-radius: 3px;
}

.menu__icono[data-icono='media']::after {
  left: 5px;
  top: 5px;
  width: 6px;
  height: 6px;
  background: currentColor;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.menu__chevron {
  width: 7px;
  height: 7px;
  margin-left: 2px;
  border-right: 1.5px solid currentColor;
  border-bottom: 1.5px solid currentColor;
  transform: rotate(45deg) translateY(-1px);
  opacity: 0.58;
}

.menu__enlace:hover,
.menu__enlace--activo {
  color: #ffffff;
  border-color: rgba(200, 16, 46, 0.42);
  background: rgba(200, 16, 46, 0.14);
}

.menu__enlace:hover .menu__icono,
.menu__enlace--activo .menu__icono,
.cta .menu__icono {
  color: #ffffff;
}

.submenu {
  position: absolute;
  top: calc(100% + 2px);
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
  max-height: min(72vh, 560px);
  overflow-y: auto;
}

.menu__grupo:hover .submenu,
.menu__grupo:focus-within .submenu {
  display: grid;
}

.submenu__enlace {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  color: rgba(217, 217, 217, 0.8);
  border: 1px solid transparent;
}

.submenu__icono {
  color: rgba(255, 255, 255, 0.66);
}

.submenu__enlace:hover {
  color: #ffffff;
  border-color: rgba(200, 16, 46, 0.36);
  background: rgba(200, 16, 46, 0.12);
}

.submenu__enlace:hover .submenu__icono {
  color: #ffffff;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 46px;
  padding: 0 20px;
  color: #ffffff;
  background: linear-gradient(135deg, #c8102e, #8f0f28);
  border: 1px solid rgba(255, 77, 104, 0.32);
}

.menu__icono--cta {
  color: rgba(255, 255, 255, 0.92);
}

.cta:hover {
  transform: translateY(-2px);
}

@media (max-width: 1080px) {
  .navegacion__interior {
    width: min(100%, calc(100% - 20px));
    grid-template-columns: 1fr auto;
  }

  .menu {
    width: 100%;
    grid-column: 1 / -1;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    align-items: center;
    padding: 4px 2px 6px;
    scroll-padding-left: 2px;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .menu::-webkit-scrollbar {
    display: none;
  }

  .menu__grupo {
    flex: 0 0 auto;
  }

  .submenu {
    position: fixed;
    top: auto;
    left: 10px;
    right: 10px;
    display: grid;
    opacity: 0;
    transform: translateY(10px) scale(0.985);
    pointer-events: none;
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }

  .menu__grupo:hover .submenu,
  .menu__grupo:focus-within .submenu {
    display: grid;
  }

  .submenu--abierto {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }
}

@media (max-width: 620px) {
  .navegacion__interior {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .cta {
    display: none;
  }

  .marca__descripcion {
    display: none;
  }

  .marca {
    justify-content: flex-start;
  }

  .menu {
    margin: 0;
    padding-left: 0;
    padding-right: 0;
  }

  .menu__enlace {
    min-height: 48px;
  }
}
</style>
