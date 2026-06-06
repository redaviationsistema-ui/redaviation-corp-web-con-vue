<script setup>
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('flota')

const filtros = ['Jets ligeros', 'Jets medianos', 'Jets pesados', 'Helicópteros']
const aeronaves = [
  { nombre: 'Light Jet Alpha', alcance: '1,800 nm', capacidad: '6 pasajeros', velocidad: '430 kt' },
  { nombre: 'Midsize Bravo', alcance: '2,900 nm', capacidad: '8 pasajeros', velocidad: '460 kt' },
  { nombre: 'Heavy Jet Crown', alcance: '5,500 nm', capacidad: '12 pasajeros', velocidad: '500 kt' },
]
</script>

<template>
  <section class="vista-especial">
    <article class="encabezado">
      <div>
        <p class="etiqueta">{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="subtitulo">{{ vista.subtitulo }}</p>
        <p class="descripcion">{{ vista.descripcion }}</p>
      </div>
      <img :src="vista.visual.imagen" :alt="vista.visual.alt" class="imagen" />
    </article>

    <article class="panel">
      <p class="etiqueta">Filtros</p>
      <div class="chips">
        <span v-for="filtro in filtros" :key="filtro">{{ filtro }}</span>
      </div>
    </article>

    <section class="rejilla">
      <article v-for="aeronave in aeronaves" :key="aeronave.nombre" class="tarjeta">
        <h2>{{ aeronave.nombre }}</h2>
        <p>Aquí puedes mostrar galería, especificaciones y argumentos comerciales para que el cliente compare sin fricción.</p>
        <div class="chips">
          <span>{{ aeronave.alcance }}</span>
          <span>{{ aeronave.capacidad }}</span>
          <span>{{ aeronave.velocidad }}</span>
          <span>Solicitar cotización</span>
        </div>
      </article>
    </section>
  </section>
</template>

<style scoped>
.vista-especial, .rejilla { display:grid; gap:18px; }
.encabezado, .panel, .tarjeta { border-radius:30px; border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.04); padding:24px; }
.encabezado { display:grid; grid-template-columns:1.1fr .9fr; gap:18px; align-items:center; }
.etiqueta { margin:0 0 12px; color:#ff4d68; text-transform:uppercase; letter-spacing:.18em; font-size:.76rem; }
h1,h2 { color:#fff; margin:0; font-family:var(--fuente-titulo); }
h1 { font-size:clamp(2.8rem,5vw,5rem); line-height:.96; }
h2 { font-size:1.4rem; }
.subtitulo { margin-top:18px; color:#fff; font-size:1.1rem; }
.descripcion, .tarjeta p { color:rgba(217,217,217,.78); }
.imagen { width:100%; max-height:320px; object-fit:contain; }
.rejilla { grid-template-columns:repeat(3,minmax(0,1fr)); }
.chips { display:flex; flex-wrap:wrap; gap:10px; margin-top:14px; }
.chips span { padding:10px 14px; border-radius:999px; border:1px solid rgba(255,255,255,.1); color:rgba(217,217,217,.82); }
@media (max-width:960px) { .encabezado, .rejilla { grid-template-columns:1fr; } }
</style>
