<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { chatbotConfig } from '../datos/chatbotConfig'
import { preguntasFrecuentes } from '../datos/chatbotFaqs'
import { flujosChatbot } from '../datos/chatbotFlujos'

const abierto = ref(false)
const paso = ref('menu')
const flujoActual = ref(null)
const indicePregunta = ref(0)
const respuesta = ref('')
const respuestas = ref({})
const mensajesRef = ref(null)
const mensajes = ref([{ tipo: 'bot', texto: 'Bienvenido a Red Aviation. ¿Qué servicio le interesa?' }])
const mostrarBurbuja = ref(true)
const indiceBurbuja = ref(0)
let temporizadorRotacion

const mensajesBurbuja = [
  '¿Busca una aeronave para adquirir?',
  'Conozca nuestros servicios de administración.',
  'Solicite una inspección precompra.',
  'Cotice un vuelo privado.',
  'Hable con un asesor especializado.',
]

const mensajeBurbuja = computed(() => mensajesBurbuja[indiceBurbuja.value])

const preguntaActual = computed(() => flujoActual.value?.preguntas[indicePregunta.value] ?? null)
const progreso = computed(() => {
  if (paso.value === 'menu') return 10
  if (paso.value === 'preguntas' && flujoActual.value) {
    return 20 + ((indicePregunta.value + 1) / flujoActual.value.preguntas.length) * 65
  }
  if (paso.value === 'resumen') return 100
  return 30
})

function desplazar() {
  nextTick(() => {
    if (mensajesRef.value) mensajesRef.value.scrollTop = mensajesRef.value.scrollHeight
  })
}

function agregarMensaje(tipo, texto, imagen = '', alt = '') {
  mensajes.value.push({ tipo, texto, imagen, alt })
  desplazar()
}

function alternarChat() {
  if (abierto.value) {
    abierto.value = false
    mostrarBurbuja.value = true
    reiniciar()
  } else {
    abierto.value = true
    mostrarBurbuja.value = false
    desplazar()
  }
}

function abrirDesdeBurbuja() {
  mostrarBurbuja.value = false
  abierto.value = true
  desplazar()
}

function seleccionarFlujo(flujo) {
  flujoActual.value = flujo
  indicePregunta.value = 0
  respuestas.value = {}
  paso.value = 'preguntas'
  agregarMensaje('usuario', flujo.titulo)
  agregarMensaje('bot', flujo.descripcion, flujo.imagen, flujo.alt)
  agregarMensaje('bot', flujo.preguntas[0].texto)
}

function responder() {
  const valor = respuesta.value.trim()
  if (!valor || !preguntaActual.value) return

  respuestas.value[preguntaActual.value.clave] = valor
  agregarMensaje('usuario', valor)
  respuesta.value = ''

  if (indicePregunta.value < flujoActual.value.preguntas.length - 1) {
    indicePregunta.value += 1
    agregarMensaje('bot', preguntaActual.value.texto)
  } else {
    paso.value = 'resumen'
    agregarMensaje('bot', 'Gracias. Revise el resumen y envíelo a nuestro equipo.')
  }
}

function verPreguntasFrecuentes() {
  paso.value = 'faqs'
  agregarMensaje('usuario', 'Preguntas frecuentes')
  agregarMensaje('bot', 'Seleccione una pregunta:')
}

function seleccionarFaq(faq) {
  agregarMensaje('usuario', faq.pregunta)
  agregarMensaje('bot', faq.respuesta)
}

function hablarConAsesor() {
  paso.value = 'asesor'
  agregarMensaje('usuario', 'Hablar con un asesor')
  agregarMensaje('bot', 'Puede contactarnos por WhatsApp, teléfono o correo.')
}

function textoWhatsApp() {
  const lineas = ['Hola, quiero información sobre Red Aviation.', '']

  if (flujoActual.value) {
    lineas.push(`Servicio: ${flujoActual.value.titulo}`, '')
    flujoActual.value.preguntas.forEach((pregunta) => {
      if (respuestas.value[pregunta.clave]) {
        lineas.push(`${pregunta.etiqueta}: ${respuestas.value[pregunta.clave]}`)
      }
    })
  } else {
    lineas.push('Solicito atención de un asesor.')
  }

  return encodeURIComponent(lineas.join('\n'))
}

function abrirWhatsApp() {
  window.open(
    `https://wa.me/${chatbotConfig.whatsapp}?text=${textoWhatsApp()}`,
    '_blank',
    'noopener',
  )
}

function reiniciar() {
  paso.value = 'menu'
  flujoActual.value = null
  indicePregunta.value = 0
  respuesta.value = ''
  respuestas.value = {}
  mensajes.value = [{ tipo: 'bot', texto: '¿Qué servicio de Red Aviation le interesa?' }]
  desplazar()
}

onMounted(() => {
  temporizadorRotacion = window.setInterval(() => {
    indiceBurbuja.value = (indiceBurbuja.value + 1) % mensajesBurbuja.length
  }, 8000)
})

onBeforeUnmount(() => {
  window.clearInterval(temporizadorRotacion)
})
</script>

<template>
  <div class="asistente">
    <Transition name="burbuja">
      <aside v-if="mostrarBurbuja && !abierto" class="burbuja" aria-live="polite">
        <button type="button" class="burbuja__contenido" @click="abrirDesdeBurbuja">
          <strong>
            <img src="/LOGO.png" alt="" aria-hidden="true" />
            Red Aviation
          </strong>
          <span>{{ mensajeBurbuja }}</span>
          <small>Iniciar conversación →</small>
        </button>
      </aside>
    </Transition>

    <button
      type="button"
      class="asistente__boton"
      :aria-expanded="abierto"
      aria-controls="chat-red-aviation"
      :aria-label="abierto ? 'Cerrar asistente' : 'Abrir asistente'"
      @click="alternarChat"
    >
      <span aria-hidden="true">{{ abierto ? '×' : '✈' }}</span>
    </button>

    <Transition name="chat">
      <section
        v-if="abierto"
        id="chat-red-aviation"
        class="chat"
        aria-label="Asistente de Red Aviation"
      >
        <header class="chat__encabezado">
          <img src="/LOGO.png" alt="" />
          <div>
            <h2>{{ chatbotConfig.tituloBot }}</h2>
            <p>{{ chatbotConfig.subtitulo }}</p>
          </div>
          <span class="chat__estado">En línea</span>
        </header>

        <div class="chat__progreso" aria-hidden="true">
          <span :style="{ width: `${progreso}%` }" />
        </div>

        <main ref="mensajesRef" class="chat__mensajes" aria-live="polite">
          <article
            v-for="(mensaje, indice) in mensajes"
            :key="`${indice}-${mensaje.texto}`"
            class="mensaje"
            :class="`mensaje--${mensaje.tipo}`"
          >
            <p>{{ mensaje.texto }}</p>
            <img v-if="mensaje.imagen" :src="mensaje.imagen" :alt="mensaje.alt" />
          </article>

          <div v-if="paso === 'menu'" class="opciones">
            <button
              v-for="flujo in flujosChatbot"
              :key="flujo.id"
              type="button"
              @click="seleccionarFlujo(flujo)"
            >
              <span aria-hidden="true">{{ flujo.icono }}</span>
              {{ flujo.titulo }}
            </button>
            <button type="button" @click="verPreguntasFrecuentes">Preguntas frecuentes</button>
            <button type="button" class="opciones__principal" @click="hablarConAsesor">
              Hablar con un asesor
            </button>
          </div>

          <div v-if="paso === 'faqs'" class="opciones">
            <button
              v-for="faq in preguntasFrecuentes"
              :key="faq.pregunta"
              type="button"
              @click="seleccionarFaq(faq)"
            >
              {{ faq.pregunta }}
            </button>
            <button type="button" @click="reiniciar">Volver al menú</button>
          </div>

          <section v-if="paso === 'resumen'" class="resumen">
            <h3>Resumen de solicitud</h3>
            <p><strong>Servicio:</strong> {{ flujoActual?.titulo }}</p>
            <dl>
              <template v-for="pregunta in flujoActual?.preguntas" :key="pregunta.clave">
                <dt>{{ pregunta.etiqueta }}</dt>
                <dd>{{ respuestas[pregunta.clave] }}</dd>
              </template>
            </dl>
            <button type="button" class="boton-whatsapp" @click="abrirWhatsApp">
              Enviar por WhatsApp
            </button>
            <button type="button" @click="reiniciar">Nueva consulta</button>
          </section>

          <section v-if="paso === 'asesor'" class="resumen">
            <h3>Contacto directo</h3>
            <button type="button" class="boton-whatsapp" @click="abrirWhatsApp">WhatsApp</button>
            <a :href="`tel:${chatbotConfig.telefono}`">Llamar</a>
            <a :href="`mailto:${chatbotConfig.correo}`">Enviar correo</a>
            <button type="button" @click="reiniciar">Volver al menú</button>
          </section>
        </main>

        <form v-if="paso === 'preguntas'" class="chat__entrada" @submit.prevent="responder">
          <label class="solo-lectores" for="respuesta-chat">{{ preguntaActual?.texto }}</label>
          <input
            id="respuesta-chat"
            v-model="respuesta"
            type="text"
            placeholder="Escriba su respuesta..."
            autocomplete="off"
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </Transition>
  </div>
</template>

<style scoped>
.burbuja {
  position: fixed;
  z-index: 1000;
  right: 98px;
  bottom: 30px;
  width: min(300px, calc(100vw - 125px));
  border: 1px solid rgba(255, 113, 135, 0.28);
  border-radius: 18px;
  background: rgba(20, 20, 20, 0.94);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(14px);
  animation: flotar-burbuja 3s ease-in-out infinite;
}

.burbuja::after {
  position: absolute;
  right: -7px;
  bottom: 22px;
  width: 14px;
  height: 14px;
  border-top: 1px solid rgba(255, 113, 135, 0.28);
  border-right: 1px solid rgba(255, 113, 135, 0.28);
  background: #171717;
  content: '';
  transform: rotate(45deg);
}

.burbuja__contenido {
  display: grid;
  width: 100%;
  gap: 7px;
  padding: 16px 17px;
  border: 0;
  color: rgba(255, 255, 255, 0.76);
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.burbuja__contenido strong {
  display: flex;
  align-items: center;
  gap: 7px;
  color: #fff;
  font-size: 0.9rem;
}

.burbuja__contenido strong img {
  width: 27px;
  height: 19px;
  object-fit: cover;
  object-position: center;
}

.burbuja__contenido small {
  color: #ff7187;
}

.burbuja__contenido > span {
  line-height: 1.4;
}

.burbuja__contenido small {
  font-size: 0.72rem;
}

.asistente__boton {
  position: fixed;
  z-index: 1001;
  right: 24px;
  bottom: 24px;
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border: 1px solid rgba(255, 113, 135, 0.5);
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(135deg, #c8102e, #780b20);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.42);
  cursor: pointer;
  font-size: 1.65rem;
}

.chat {
  position: fixed;
  z-index: 1000;
  right: 24px;
  bottom: 100px;
  display: flex;
  width: min(410px, calc(100vw - 28px));
  height: min(670px, calc(100vh - 130px));
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 26px;
  background: #101010;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  flex-direction: column;
}

.chat__encabezado {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 16px;
  color: #fff;
  background: linear-gradient(135deg, #171717, #310812);
}

.chat__encabezado img {
  width: 54px;
  height: 38px;
  object-fit: cover;
}

.chat__encabezado h2,
.chat__encabezado p {
  margin: 0;
}

.chat__encabezado h2 {
  font-size: 1rem;
}

.chat__encabezado p {
  margin-top: 3px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.7rem;
}

.chat__estado {
  color: #72d898;
  font-size: 0.68rem;
}

.chat__estado::before {
  margin-right: 5px;
  content: '●';
}

.chat__progreso {
  height: 3px;
  background: #282828;
}

.chat__progreso span {
  display: block;
  height: 100%;
  background: #ff4d68;
  transition: width 200ms ease;
}

.chat__mensajes {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.mensaje {
  max-width: 88%;
  margin-bottom: 12px;
  padding: 11px 13px;
  border-radius: 16px;
  font-size: 0.86rem;
  line-height: 1.45;
}

.mensaje p {
  margin: 0;
}

.mensaje--bot {
  border-bottom-left-radius: 4px;
  color: rgba(255, 255, 255, 0.82);
  background: #202020;
}

.mensaje--usuario {
  margin-left: auto;
  border-bottom-right-radius: 4px;
  color: #fff;
  background: #9f1028;
}

.mensaje img {
  width: 100%;
  height: 145px;
  margin-top: 10px;
  border-radius: 12px;
  object-fit: cover;
}

.opciones,
.resumen {
  display: grid;
  gap: 9px;
  margin-top: 14px;
}

.opciones button,
.resumen button,
.resumen a {
  min-height: 43px;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.84);
  background: #1c1c1c;
  cursor: pointer;
  text-align: left;
  text-decoration: none;
}

.opciones button span {
  display: inline-grid;
  place-items: center;
  width: 24px;
  margin-right: 5px;
  color: #ff7187;
}

.opciones button:hover,
.resumen button:hover,
.resumen a:hover {
  border-color: rgba(255, 77, 104, 0.55);
}

.opciones .opciones__principal {
  color: #fff;
  background: #9f1028;
  text-align: center;
}

.resumen {
  padding: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.78);
  background: #171717;
}

.resumen h3,
.resumen p {
  margin: 0;
}

.resumen h3 {
  color: #fff;
}

.resumen dl {
  display: grid;
  grid-template-columns: minmax(90px, auto) 1fr;
  gap: 6px 10px;
  margin: 4px 0;
  font-size: 0.8rem;
}

.resumen dt {
  color: #ff7187;
}

.resumen dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.resumen .boton-whatsapp {
  color: #fff;
  background: #168a45;
  text-align: center;
}

.chat__entrada {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: #151515;
}

.chat__entrada input {
  min-width: 0;
  padding: 10px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 11px;
  color: #fff;
  background: #171717;
  outline: none;
}

.chat__entrada button {
  padding: 0 14px;
  border: 0;
  border-radius: 11px;
  color: #fff;
  background: #9f1028;
  cursor: pointer;
}

.solo-lectores {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}

.chat-enter-active,
.chat-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}

.burbuja-enter-active,
.burbuja-leave-active {
  transition: opacity 320ms ease, transform 320ms ease;
}

.burbuja-enter-from,
.burbuja-leave-to {
  opacity: 0;
  transform: translateX(28px);
}

@keyframes flotar-burbuja {
  0%,
  100% {
    translate: 0 0;
  }

  50% {
    translate: 0 -5px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .burbuja {
    animation: none;
  }
}

@media (max-width: 520px) {
  .chat {
    right: 10px;
    bottom: 88px;
    width: calc(100vw - 20px);
    height: min(700px, calc(100vh - 105px));
  }

  .asistente__boton {
    right: 16px;
    bottom: 16px;
    width: 58px;
    height: 58px;
  }

  .burbuja {
    right: 82px;
    bottom: 20px;
    width: min(270px, calc(100vw - 105px));
  }
}
</style>
