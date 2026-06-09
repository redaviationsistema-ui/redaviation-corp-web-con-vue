<script setup>
import { onBeforeUnmount, reactive, ref } from 'vue'
import { obtenerVista } from '../datos/sitio'
import FichaGoogleBusiness from '../componentes/FichaGoogleBusiness.vue'

const vista = obtenerVista('contacto')

const campos = [
  { clave: 'name', etiqueta: 'Nombre', tipo: 'text' },
  { clave: 'company', etiqueta: 'Empresa', tipo: 'text' },
  { clave: 'email', etiqueta: 'Correo', tipo: 'email' },
  { clave: 'phone', etiqueta: 'Teléfono', tipo: 'tel' },
  { clave: 'service', etiqueta: 'Servicio requerido', tipo: 'text' },
]

const datos = ['Correo', 'Teléfono', 'WhatsApp', 'Redes Sociales']
const endpointFormulario =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://redaviationcorp.com/send-email.php'

const formulario = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const enviando = ref(false)
const estadoEnvio = ref({ tipo: '', mensaje: '' })
const mostrarModalExito = ref(false)
const formularioRef = ref(null)
let temporizadorModal = 0

function intentarEnvio() {
  if (!formularioRef.value?.reportValidity()) return
  enviarFormulario()
}

async function enviarFormulario() {
  enviando.value = true
  estadoEnvio.value = { tipo: '', mensaje: '' }

  try {
    const response = await fetch(endpointFormulario, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formulario.name,
        company: formulario.company,
        email: formulario.email,
        phone: formulario.phone,
        service: formulario.service,
        message: formulario.message,
      }),
    })

    const respuestaTexto = await response.text()
    let result = {}

    try {
      result = respuestaTexto ? JSON.parse(respuestaTexto) : {}
    } catch {
      throw new Error('El servidor no devolvio una respuesta JSON valida.')
    }

    console.log(result)

    if (!response.ok || !result.success) {
      throw new Error(result.error || 'No fue posible enviar tu solicitud.')
    }

    estadoEnvio.value = {
      tipo: 'exito',
      mensaje: '',
    }
    mostrarModalExito.value = true
    window.clearTimeout(temporizadorModal)
    temporizadorModal = window.setTimeout(() => {
      mostrarModalExito.value = false
    }, 3500)

    Object.assign(formulario, {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    })
  } catch (error) {
    estadoEnvio.value = {
      tipo: 'error',
      mensaje: error instanceof Error ? error.message : 'Ocurrió un error al enviar el formulario.',
    }
  } finally {
    enviando.value = false
  }
}

onBeforeUnmount(() => {
  window.clearTimeout(temporizadorModal)
})
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
      <form ref="formularioRef" class="panel formulario" @submit.prevent="intentarEnvio">
        <p class="panel__etiqueta">Formulario</p>
        <h2>Inicie una conversación confidencial.</h2>
        <div class="formulario__rejilla">
          <label v-for="campo in campos" :key="campo.clave" class="campo">
            <span>{{ campo.etiqueta }}</span>
            <input
              v-model="formulario[campo.clave]"
              :placeholder="`Ingresa ${campo.etiqueta.toLowerCase()}`"
              :type="campo.tipo"
              :required="campo.clave !== 'company'"
            />
          </label>
          <label class="campo campo--completo">
            <span>Mensaje</span>
            <textarea
              v-model="formulario.message"
              placeholder="Cuéntanos cómo podemos ayudarte"
            ></textarea>
          </label>
        </div>
        <p
          v-if="estadoEnvio.tipo === 'error' && estadoEnvio.mensaje"
          class="formulario__estado"
          :class="`formulario__estado--${estadoEnvio.tipo}`"
        >
          {{ estadoEnvio.mensaje }}
        </p>
        <button type="button" class="boton" :disabled="enviando" @click="intentarEnvio">
          {{ enviando ? 'Enviando...' : 'Agendar una Reunión' }}
        </button>
      </form>

      <article class="panel">
        <p class="panel__etiqueta">Información</p>
        <h2>Atención directa para propietarios, compradores y operadores.</h2>
        <div class="datos">
          <span v-for="dato in datos" :key="dato">{{ dato }}</span>
          <span>sales@redskyg.com</span>
          <span>ventas@redaviationcorp.com</span>
          <span>+52 55 8618 6576</span>
          <span>+1 305 464 6394</span>
        </div>
      </article>
    </section>

    <FichaGoogleBusiness />

    <div v-if="mostrarModalExito" class="modal-exito">
      <div class="modal-exito__panel">
        <p class="panel__etiqueta">Mensaje enviado</p>
        <h2>Gracias por comunicarte con Red Aviation Corp.</h2>
        <p class="modal-exito__texto">EXPERTOS EN AERONAUTICA</p>
      </div>
    </div>
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

.boton:disabled {
  cursor: wait;
  opacity: 0.72;
}

.formulario__estado {
  margin: 18px 0 0;
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.formulario__estado--exito {
  color: #b8ffd0;
  background: rgba(37, 125, 70, 0.18);
}

.formulario__estado--error {
  color: #ffd1d8;
  background: rgba(200, 16, 46, 0.18);
}

.modal-exito {
  position: fixed;
  inset: 0;
  z-index: 4000;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(5, 5, 5, 0.76);
  backdrop-filter: blur(10px);
}

.modal-exito__panel {
  width: min(100%, 560px);
  padding: 28px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background:
    radial-gradient(circle at top left, rgba(200, 16, 46, 0.2), transparent 34%),
    rgba(12, 12, 12, 0.96);
  text-align: center;
}

.modal-exito__texto {
  margin-top: 16px;
  color: #ffffff;
  letter-spacing: 0.16em;
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
