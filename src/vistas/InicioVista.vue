<script setup>
import { RouterLink } from 'vue-router'
import { obtenerVista } from '../datos/sitio'

const vista = obtenerVista('inicio')

const divisiones = [
  'Venta y adquisición de aeronaves',
  'Charter privado',
  'Mantenimiento',
  'Gestión de aeronaves',
  'Consultoría aeronáutica',
]

const razones = [
  'Experiencia',
  'Seguridad',
  'Cobertura regional',
  'Soluciones integrales',
]

const empresas = [
  {
    nombre: 'Red Aviation Advisory',
    descripcion:
      'Aquí puedes posicionar el frente comercial que acompaña análisis, estrategia y oportunidades de mercado.',
  },
  {
    nombre: 'Red Aviation Operations',
    descripcion:
      'Esta unidad refuerza la parte operativa para que tu visitante perciba continuidad, disciplina y control.',
  },
  {
    nombre: 'Red Aviation Technical',
    descripcion:
      'Aquí muestras el músculo técnico que respalda mantenimiento, soporte y confianza en la ejecución.',
  },
]

const testimonios = [
  {
    autor: 'Director de Operaciones',
    texto:
      'Cuando trabajas con un grupo que sí entiende la región, tus decisiones se vuelven más rápidas y mucho más seguras.',
  },
  {
    autor: 'Propietario de aeronave',
    texto:
      'Aquí sientes que no solo te venden un servicio, sino que te acompañan con criterio técnico y comercial.',
  },
]
</script>

<template>
  <section class="inicio">
    <header class="hero">
      <div class="hero__texto">
        <p class="hero__pretitulo">{{ vista.pretitulo }}</p>
        <h1>{{ vista.titulo }}</h1>
        <p class="hero__subtitulo">{{ vista.subtitulo }}</p>
        <p class="hero__descripcion">{{ vista.descripcion }}</p>

        <div class="hero__acciones">
          <RouterLink to="/contacto" class="hero__boton hero__boton--principal">
            Solicitar Cotización
          </RouterLink>
          <RouterLink to="/contacto" class="hero__boton hero__boton--secundario">
            Hablar con un Asesor
          </RouterLink>
          <RouterLink to="/nosotros" class="hero__boton hero__boton--secundario">
            Conocer Nuestras Empresas
          </RouterLink>
        </div>
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

    <section class="metricas">
      <article v-for="metrica in vista.metricas" :key="metrica.etiqueta" class="metrica">
        <strong>{{ metrica.valor }}</strong>
        <span>{{ metrica.etiqueta }}</span>
      </article>
    </section>

    <section class="bloque bloque--doble">
      <article class="panel">
        <p class="panel__etiqueta">¿Quiénes Somos?</p>
        <h2>Le muestras al visitante que puede confiar en una plataforma con visión regional.</h2>
        <p>
          Aquí presentas a Red Aviation Co. como un grupo capaz de integrar marca, negocio,
          mantenimiento, cobertura y criterio estratégico para que la experiencia del cliente se
          sienta completa desde el primer scroll.
        </p>
      </article>

      <article class="panel">
        <p class="panel__etiqueta">Cobertura Regional</p>
        <h2>La región deja de verse lejana cuando la conviertes en una ventaja comercial.</h2>
        <p>
          Esta sección debe ayudarte a decirle al cliente que puedes actuar en México,
          Centroamérica, Caribe, Sudamérica y Estados Unidos con una narrativa de proximidad,
          conocimiento local y continuidad operacional.
        </p>
      </article>
    </section>

    <section class="bloque">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">Nuestras Divisiones</p>
        <h2>Servicios que tu visitante puede identificar sin esfuerzo.</h2>
      </div>

      <div class="rejilla">
        <article v-for="division in divisiones" :key="division" class="tarjeta">
          <h3>{{ division }}</h3>
          <p>
            Aquí puedes desarrollar el valor de {{ division.toLowerCase() }} con una voz directa,
            comercial y enfocada en cómo ayudas a resolver una necesidad real.
          </p>
        </article>
      </div>
    </section>

    <section class="bloque">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">¿Por Qué Elegirnos?</p>
        <h2>Cuatro razones para que tu propuesta se sienta más sólida.</h2>
      </div>

      <div class="tags">
        <span v-for="razon in razones" :key="razon">{{ razon }}</span>
      </div>
    </section>

    <section class="bloque">
      <div class="bloque__encabezado">
        <p class="panel__etiqueta">Empresas del Grupo</p>
        <h2>El ecosistema de marca puede explicarse con claridad y sin saturar.</h2>
      </div>

      <div class="rejilla">
        <article v-for="empresa in empresas" :key="empresa.nombre" class="tarjeta">
          <h3>{{ empresa.nombre }}</h3>
          <p>{{ empresa.descripcion }}</p>
        </article>
      </div>
    </section>

    <section class="bloque bloque--doble">
      <article class="panel">
        <p class="panel__etiqueta">Testimonios</p>
        <div class="testimonios">
          <blockquote v-for="testimonio in testimonios" :key="testimonio.autor">
            <p>{{ testimonio.texto }}</p>
            <footer>{{ testimonio.autor }}</footer>
          </blockquote>
        </div>
      </article>

      <article class="panel panel--cta">
        <p class="panel__etiqueta">CTA Final</p>
        <h2>Hable con nuestros especialistas.</h2>
        <p>
          Aquí cierras el recorrido invitando al usuario a dar el siguiente paso con una llamada a
          la acción clara, sobria y orientada a conversación comercial.
        </p>
        <RouterLink to="/contacto" class="hero__boton hero__boton--principal">
          Hablar con un Asesor
        </RouterLink>
      </article>
    </section>
  </section>
</template>

<style scoped>
.inicio,
.metricas,
.bloque,
.bloque--doble,
.rejilla,
.testimonios {
  display: grid;
  gap: 18px;
}

.hero,
.hero__visual,
.metrica,
.panel,
.tarjeta {
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
.metrica,
.panel,
.tarjeta {
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
h3,
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
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.02;
}

h3 {
  font-size: 1.12rem;
}

.hero__subtitulo,
.hero__descripcion,
.panel p,
.tarjeta p,
.metrica span,
blockquote p,
.hero__visual p {
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

.hero__acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.hero__boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
}

.hero__boton--principal {
  background: linear-gradient(135deg, #c8102e, #8f0f28);
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

.metricas {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.metrica strong {
  display: block;
  font-size: 2rem;
  margin-bottom: 6px;
}

.bloque__encabezado {
  margin-bottom: 18px;
}

.bloque--doble {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.rejilla {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tags span {
  padding: 12px 16px;
  border-radius: 999px;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
}

blockquote {
  margin: 0;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
}

blockquote footer {
  margin-top: 10px;
  color: #ffffff;
}

.panel--cta {
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
}

@media (max-width: 960px) {
  .hero,
  .metricas,
  .bloque--doble,
  .rejilla {
    grid-template-columns: 1fr;
  }
}
</style>
