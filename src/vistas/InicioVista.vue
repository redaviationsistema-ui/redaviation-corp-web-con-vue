<script setup>
import { RouterLink } from 'vue-router'
import MarcadorVisual from '../componentes/MarcadorVisual.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('inicio')

const divisiones = [
  {
    nombre: 'GESA',
    resumen: 'Aviónica, interiores, partes y soporte técnico especializado.',
    ruta: '/gesa',
  },
  {
    nombre: 'CESA',
    resumen: 'MRO, estructura y mantenimiento mayor con disciplina operativa.',
    ruta: '/cesa',
  },
  {
    nombre: 'Excel Turbines',
    resumen: 'Servicios para motores de turbina, diagnóstico y overhaul.',
    ruta: '/excel-turbines',
  },
  {
    nombre: 'Sky Group',
    resumen: 'Venta, adquisición, corretaje y representación regional.',
    ruta: '/sky-group',
  },
]

const recorrido = [
  'Adquisición',
  'Inspección',
  'Importación',
  'Mantenimiento',
  'Aviónica',
  'Motores',
  'Partes',
  'Operación',
  'Soporte continuo',
]
</script>

<template>
  <section class="inicio">
    <header class="hero">
      <div class="hero__fondo" aria-hidden="true">
        <div class="hero__orbita hero__orbita--uno"></div>
        <div class="hero__orbita hero__orbita--dos"></div>
        <div class="hero__trazo"></div>
      </div>

      <div class="hero__contenido">
        <p class="hero__pretitulo">Inicio</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="hero__subtitulo">{{ vista.subtitulo }}</p>
        <p class="hero__descripcion">{{ vista.descripcion }}</p>

        <div class="hero__acciones">
          <RouterLink to="/ecosistema" class="hero__boton hero__boton--principal">
            Explorar grupo
          </RouterLink>
          <RouterLink to="/contacto" class="hero__boton hero__boton--secundario">
            Contactar
          </RouterLink>
        </div>

        <section class="hero__metricas">
          <article v-for="metrica in vista.metricas" :key="metrica.etiqueta" class="metrica">
            <strong>{{ metrica.valor }}</strong>
            <span>{{ metrica.etiqueta }}</span>
          </article>
        </section>
      </div>

      <MarcadorVisual v-bind="vista.visual" />
    </header>

    <section class="bloque bloque--doble">
      <article class="panel panel--destacado">
        <p class="panel__etiqueta">Resumen del grupo</p>
        <h2>Una sola plataforma para coordinar técnica, infraestructura y negocio aeronáutico.</h2>
        <p>
          Red Aviation Co reúne empresas especializadas para resolver decisiones comerciales,
          mantenimiento, aviónica, motores, partes y soporte continuo bajo una sola visión
          regional.
        </p>
      </article>

      <article class="panel">
        <p class="panel__etiqueta">Sección visual disponible</p>
        <h2>Este bloque queda listo para imagen institucional secundaria.</h2>
        <p>
          Aquí puedes colocar una foto de hangar, cabina ejecutiva, equipo técnico o un montaje
          editorial del grupo sin cambiar el layout.
        </p>
      </article>
    </section>

    <section class="bloque">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">Accesos a divisiones</p>
        <h2>Áreas clave del ecosistema Red Aviation.</h2>
      </div>

      <div class="rejilla-divisiones">
        <RouterLink v-for="division in divisiones" :key="division.nombre" :to="division.ruta" class="division">
          <span class="division__nombre">{{ division.nombre }}</span>
          <p>{{ division.resumen }}</p>
        </RouterLink>
      </div>
    </section>

    <section class="bloque">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">Ciclo de vida</p>
        <h2>Un recorrido visible del servicio completo.</h2>
      </div>

      <div class="ruta">
        <article v-for="paso in recorrido" :key="paso" class="ruta__paso">
          <span>{{ paso }}</span>
        </article>
      </div>
    </section>
  </section>
</template>

<style scoped>
.inicio {
  display: grid;
  gap: 18px;
}

.hero,
.panel,
.metrica,
.division,
.ruta__paso {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.hero {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.18fr 0.88fr;
  gap: 18px;
  padding: 24px;
}

.hero__fondo {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__orbita,
.hero__trazo {
  position: absolute;
}

.hero__orbita {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.hero__orbita--uno {
  width: 34rem;
  height: 34rem;
  right: -8rem;
  top: -8rem;
}

.hero__orbita--dos {
  width: 24rem;
  height: 24rem;
  left: -4rem;
  bottom: -8rem;
}

.hero__trazo {
  width: 40%;
  height: 48%;
  right: 10%;
  top: 16%;
  border-top: 2px solid rgba(255, 77, 104, 0.85);
  border-right: 2px solid rgba(255, 77, 104, 0.4);
  border-radius: 46% 54% 58% 42%;
  box-shadow: 0 0 30px rgba(200, 16, 46, 0.35);
}

.hero__contenido {
  position: relative;
  z-index: 1;
  padding: 10px 4px 10px 8px;
}

.hero__pretitulo,
.panel__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

h1,
h2,
strong,
.division__nombre {
  color: #ffffff;
}

h1,
h2 {
  margin: 0;
  font-family: var(--fuente-titulo);
}

h1 {
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.03em;
  max-width: 10ch;
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1;
}

.hero__subtitulo {
  margin: 18px 0 0;
  color: #ffffff;
  font-size: 1.2rem;
}

.hero__descripcion,
.panel p,
.division p,
.metrica span {
  color: rgba(217, 217, 217, 0.78);
}

.hero__descripcion {
  max-width: 58ch;
  margin-top: 14px;
}

.hero__acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero__boton {
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 180ms ease, border-color 180ms ease;
}

.hero__boton:hover,
.division:hover {
  transform: translateY(-3px);
}

.hero__boton--principal {
  background: linear-gradient(135deg, #c8102e, #8f0f28);
  color: #ffffff;
}

.hero__boton--secundario {
  color: rgba(255, 255, 255, 0.9);
}

.hero__metricas,
.bloque--doble,
.rejilla-divisiones,
.ruta {
  display: grid;
  gap: 18px;
}

.hero__metricas {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 42px;
}

.metrica,
.panel,
.division,
.ruta__paso {
  padding: 22px;
}

.metrica strong {
  display: block;
  margin-bottom: 6px;
  font-size: 2rem;
}

.bloque__encabezado {
  margin-bottom: 18px;
}

.bloque--doble {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel--destacado {
  background:
    radial-gradient(circle at top right, rgba(200, 16, 46, 0.18), transparent 30%),
    rgba(255, 255, 255, 0.04);
}

.rejilla-divisiones {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.division {
  transition: transform 180ms ease, border-color 180ms ease;
}

.division:hover {
  border-color: rgba(255, 77, 104, 0.34);
}

.division__nombre {
  display: block;
  margin-bottom: 10px;
  font-size: 1.15rem;
  font-weight: 600;
}

.ruta {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}

.ruta__paso {
  min-height: 124px;
  display: flex;
  align-items: end;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.04)),
    radial-gradient(circle at top left, rgba(200, 16, 46, 0.14), transparent 30%);
}

.ruta__paso span {
  color: #ffffff;
  font-weight: 600;
}

@media (max-width: 960px) {
  .hero,
  .bloque--doble,
  .hero__metricas,
  .rejilla-divisiones {
    grid-template-columns: 1fr;
  }
}
</style>
