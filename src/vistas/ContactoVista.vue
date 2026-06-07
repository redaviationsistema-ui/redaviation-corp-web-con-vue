<script setup>
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('contacto')

const campos = [
  'Nombre',
  'Empresa',
  'Correo',
  'Teléfono',
  'Servicio requerido',
]

const datos = ['Correo', 'Teléfono', 'WhatsApp', 'Redes Sociales']
</script>

<template>
  <section class="contacto">
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

    <section class="contacto__grid">
      <form class="panel formulario">
        <p class="panel__etiqueta">Formulario</p>
        <h2>Inicie una conversación confidencial.</h2>
        <div class="formulario__rejilla">
          <label v-for="campo in campos" :key="campo" class="campo">
            <span>{{ campo }}</span>
            <input :placeholder="`Ingresa ${campo.toLowerCase()}`" type="text" />
          </label>
          <label class="campo campo--completo">
            <span>Mensaje</span>
            <textarea placeholder="Cuéntanos cómo podemos ayudarte"></textarea>
          </label>
        </div>
        <button type="button" class="boton">Agendar una Reunión</button>
      </form>

      <article class="panel">
        <p class="panel__etiqueta">Información</p>
        <h2>Atención directa para propietarios, compradores y operadores.</h2>
        <div class="datos">
          <span v-for="dato in datos" :key="dato">{{ dato }}</span>
          <span>ventas@redaviationcorp.com</span>
          <span>sales@redskyg.com</span>
          <span>+52 55 8618 6576</span>
          <span>+1 305 464 6394</span>
        </div>
      </article>
    </section>

    <article class="panel">
      <p class="panel__etiqueta">Mapa</p>
      <h2>Coordinación comercial y operativa en distintos mercados.</h2>
      <p>
        Nuestra red conecta oportunidades, activos, talleres, operadores y especialistas para
        ejecutar cada mandato con alcance regional.
      </p>
    </article>
  </section>
</template>

<style scoped>
.contacto,
.contacto__grid,
.formulario__rejilla {
  display: grid;
  gap: 18px;
}

.hero,
.hero__visual,
.panel {
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
.panel {
  padding: 24px;
}

.hero__pretitulo,
.panel__etiqueta,
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
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.95;
}

h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.hero__subtitulo,
.hero__descripcion,
.hero__visual p,
.panel p,
.campo span {
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

.contacto__grid {
  grid-template-columns: 1.1fr 0.9fr;
}

.formulario__rejilla {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 18px;
}

.campo {
  display: grid;
  gap: 8px;
}

.campo--completo {
  grid-column: 1 / -1;
}

input,
textarea,
.boton {
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: #ffffff;
  font: inherit;
}

input,
textarea {
  padding: 14px 16px;
}

textarea {
  min-height: 140px;
  resize: vertical;
}

.boton {
  margin-top: 18px;
  min-height: 48px;
  padding: 0 20px;
  background: linear-gradient(135deg, #c8102e, #8f0f28);
}

.datos {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.datos span {
  padding: 10px 14px;
  border-radius: 999px;
  color: rgba(217, 217, 217, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
}

@media (max-width: 960px) {
  .hero,
  .contacto__grid,
  .formulario__rejilla {
    grid-template-columns: 1fr;
  }
}
</style>
