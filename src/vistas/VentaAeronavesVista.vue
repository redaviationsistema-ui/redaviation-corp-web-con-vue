<script setup>
import PlantillaVista from '../componentes/PlantillaVista.vue'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('venta-aeronaves')
</script>

<template>
  <PlantillaVista
    v-bind="vista"
    :bloques="[
      { titulo: 'Fotografías', descripcion: 'Aquí presentas imágenes de alta calidad para que la percepción del activo sea inmediata y premium.' },
      { titulo: 'Año', descripcion: 'Este dato ayuda al comprador a ubicarse rápido dentro del ciclo de valor de la aeronave.' },
      { titulo: 'Horas', descripcion: 'Aquí conviertes un dato técnico en una señal de contexto para la conversación comercial.' },
      { titulo: 'Matrícula', descripcion: 'Esta referencia aporta transparencia y profesionalismo a la ficha.' },
      { titulo: 'Estado', descripcion: 'Aquí puedes resumir condición, mantenimiento y nivel de preparación para venta.' },
      { titulo: 'Especificaciones', descripcion: 'Esta sección te permite responder preguntas clave antes del primer contacto.' },
      { titulo: 'Solicitar información', descripcion: 'El CTA debe sentirse inmediato, sobrio y orientado a una conversación útil.' },
    ]"
  />
</template>
