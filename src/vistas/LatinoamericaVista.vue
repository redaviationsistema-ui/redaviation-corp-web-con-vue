<script setup>
import PlantillaVista from '../componentes/PlantillaVista.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('latinoamerica')
</script>

<template>
  <PlantillaVista v-bind="vista" />
</template>
