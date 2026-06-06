<script setup>
import { RouterLink } from 'vue-router'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('servicios')

const servicios = [
  {
    titulo: 'Asesoría Integral para la Adquisición y Comercialización de Aeronaves',
    descripcion:
      'Aquí le explicas a tu cliente que puede entrar a una compra o venta con más contexto, mejor due diligence y una negociación mejor acompañada.',
    items: ['Compra', 'Venta', 'Valuación', 'Due Diligence', 'Negociación'],
  },
  {
    titulo: 'Vuelos Privados Personalizados',
    descripcion:
      'Esta sección debe ayudar a que el usuario imagine un servicio flexible, premium y adaptado a la lógica de viaje que realmente necesita.',
    items: ['Nacional', 'Internacional', 'Corporativo', 'VIP', 'Ambulancia aérea'],
  },
  {
    titulo: 'Maximice el Valor de su Aeronave',
    descripcion:
      'Aquí conviertes la gestión de aeronaves en una propuesta de eficiencia, control y mejor experiencia para propietarios y operadores.',
    items: ['Administración', 'Tripulaciones', 'Programación', 'Costos operativos'],
  },
  {
    titulo: 'Mantenimiento Certificado para su Aeronave',
    descripcion:
      'Aquí presentas mantenimiento como un servicio que protege disponibilidad, seguridad y confianza en cada ciclo operativo.',
    items: ['Preventivo', 'Correctivo', 'Inspecciones', 'Componentes', 'Soporte técnico'],
  },
  {
    titulo: 'Soluciones Estratégicas para Operadores y Propietarios',
    descripcion:
      'La consultoría aeronáutica te ayuda a hablarle al cliente sobre decisiones complejas sin caer en discurso genérico.',
    items: ['Planeación', 'Estrategia operativa', 'Evaluación de activos', 'Acompañamiento experto'],
  },
]
</script>

<template>
  <section class="servicios">
    <header class="hero">
      <div class="hero__texto">
        <p class="hero__pretitulo">{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="hero__subtitulo">{{ vista.subtitulo }}</p>
        <p class="hero__descripcion">{{ vista.descripcion }}</p>
      </div>

      <article class="hero__visual">
        <span class="hero__etiqueta">{{ vista.visual.etiqueta }}</span>
        <strong>{{ vista.visual.tipo }}</strong>
        <p>{{ vista.visual.detalle }}</p>
        <div class="hero__media">
          <img :src="vista.visual.imagen" :alt="vista.visual.alt" />
        </div>
      </article>
    </header>

    <section class="animacion">
      <p class="hero__pretitulo">Animación sugerida</p>
      <div class="animacion__lista">
        <span v-for="animacion in vista.animaciones" :key="animacion">{{ animacion }}</span>
      </div>
    </section>

    <section class="servicios__lista">
      <article v-for="servicio in servicios" :key="servicio.titulo" class="servicio">
        <h2>{{ servicio.titulo }}</h2>
        <p>{{ servicio.descripcion }}</p>
        <div class="servicio__items">
          <span v-for="item in servicio.items" :key="item">{{ item }}</span>
        </div>
      </article>
    </section>

    <section class="cta">
      <div>
        <p class="hero__pretitulo">Conversión comercial</p>
        <h2>Haz que el siguiente paso sea fácil y directo.</h2>
        <p>
          Si la página quiere vender mejor, esta vista debe llevar a cotización, llamada o
          conversación con un asesor sin ruido innecesario.
        </p>
      </div>

      <RouterLink to="/contacto" class="cta__boton">Solicitar Cotización</RouterLink>
    </section>
  </section>
</template>

<style scoped>
.servicios,
.servicios__lista {
  display: grid;
  gap: 18px;
}

.hero,
.hero__visual,
.animacion,
.servicio,
.cta {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.hero {
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  gap: 18px;
  padding: 24px;
}

.hero__texto,
.hero__visual,
.animacion,
.servicio,
.cta {
  padding: 24px;
}

.hero__pretitulo,
.hero__etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

h1,
h2,
strong {
  color: #ffffff;
  margin: 0;
}

h1,
h2 {
  font-family: var(--fuente-titulo);
}

h1 {
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.95;
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.02;
}

.hero__subtitulo,
.hero__descripcion,
.hero__visual p,
.servicio p,
.cta p {
  color: rgba(217, 217, 217, 0.78);
}

.hero__subtitulo {
  margin-top: 18px;
  color: #ffffff;
  font-size: 1.16rem;
}

.hero__descripcion {
  margin-top: 14px;
  max-width: 58ch;
}

.hero__visual {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hero__media {
  flex: 1;
  min-height: 260px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 5, 5, 0.46);
  padding: 18px;
}

.hero__media img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.animacion__lista,
.servicio__items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.animacion__lista span,
.servicio__items span {
  padding: 10px 14px;
  border-radius: 999px;
  color: rgba(217, 217, 217, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
}

.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.cta__boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  color: #ffffff;
  background: linear-gradient(135deg, #c8102e, #8f0f28);
}

@media (max-width: 960px) {
  .hero,
  .cta {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
