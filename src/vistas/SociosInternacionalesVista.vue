<script setup>
import PlantillaVista from '../componentes/PlantillaVista.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('socios-internacionales')
</script>

<template>
  <PlantillaVista v-bind="vista" />
</template>
