<script setup>
import PlantillaVista from '../componentes/PlantillaVista.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('nosotros')
</script>

<template>
  <PlantillaVista v-bind="vista" />
</template>
