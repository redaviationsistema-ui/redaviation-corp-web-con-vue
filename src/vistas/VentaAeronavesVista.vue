<script setup>
import PlantillaVista from '../componentes/PlantillaVista.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('venta-aeronaves')
</script>

<template>
  <PlantillaVista
    v-bind="vista"
    :bloques="[
      { titulo: 'Fotografías', descripcion: 'Registro visual de alta calidad para documentar condición, configuración y presentación del activo.' },
      { titulo: 'Año', descripcion: 'Este dato ayuda al comprador a ubicarse rápido dentro del ciclo de valor de la aeronave.' },
      { titulo: 'Horas', descripcion: 'Información operativa necesaria para valorar condición, uso y posición de mercado.' },
      { titulo: 'Matrícula', descripcion: 'Esta referencia aporta transparencia y profesionalismo a la ficha.' },
      { titulo: 'Estado', descripcion: 'Resumen de condición, mantenimiento y preparación comercial de la aeronave.' },
      { titulo: 'Especificaciones', descripcion: 'Esta sección te permite responder preguntas clave antes del primer contacto.' },
      { titulo: 'Solicitar información', descripcion: 'El botón debe sentirse inmediato, sobrio y orientado a una conversación útil.' },
    ]"
  />
</template>
