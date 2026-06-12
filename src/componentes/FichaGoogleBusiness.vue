<script setup>
const calificacion = 4.6
const totalOpiniones = 25
const negocio = {
  nombre: 'Red Aviation - Talleres Aeronauticos',
  categoria: 'Servicio en Toluca',
  direccion: 'Toluca Estado de Mexico, Mexico',
  telefonoPrincipal: '5586186576',
  telefonoAlterno: '+1 305 464 6394',
  horario: 'Abierto · Atención comercial y operativa bajo coordinación previa',
  productoDestacado: 'Talleres aeronauticos, Avionics solutions, Helicopter Shop, Landing Gear Services, Brakes sistemas',
  sitioWeb: 'https://redaviationcorp.com/',
  comoLlegar: 'https://www.google.com/maps/search/?api=1&query=Red+Aviation+San+Nicol%C3%A1s+Tolentino',
  opiniones: 'https://www.google.com/search?q=Red+Aviation+Google+Reviews',
  compartir: 'https://redaviationcorp.com/contacto',
  portada: '/imagenes/portada-del-negocio.png?v=1',
  portadaAlt: 'Portada del negocio Red Aviation en Google',
}

const ubicacionToluca = {
  titulo: 'Ubicación adicional',
  nombre: 'ICCS Toluca FBO',
  direccion: 'Boulevard Aeropuerto Hangar 28, San Pedro Totoltepec, 50200 Toluca de Lerdo, Méx.',
  enlace: 'https://maps.app.goo.gl/3X4oF7RNWSc4S1c7A',
}

const excelTurbines = {
  titulo: 'Ubicación adicional',
  nombre: 'Excel Turbines De México',
  direccion: 'Cto. Alfonso G. de Orozco Manzana 007, 50225 San Miguel Totoltepec, Méx.',
  enlace: 'https://maps.app.goo.gl/6G17gUr1WatrchDa6',
}

const skygroup = {
  titulo: 'Contacto adicional',
  nombre: 'Skygroup',
  enlace: 'https://maps.app.goo.gl/6G17gUr1WatrchDa6',
  direccion: 'Cto. Alfonso G. de Orozco Manzana 007, 50225 San Miguel Totoltepec, Méx.',
  telefonos: ['722 112 6671', '+52 5586186576'],
}

const estrellas = Array.from({ length: 5 }, (_, index) => index < Math.round(calificacion))
</script>

<template>
  <section class="google">
    <div class="google__encabezado">
      <div>
        <p class="google__etiqueta">Encuéntranos en Google</p>
        <h2>Toda la información que necesita para validar nuestra presencia, reputación y contacto directo</h2>
        <p class="google__descripcion">
          Esta sección reúne la información esencial para que cada socio pueda validar nuestra
          presencia, conocer nuestros canales y comunicarse directamente con el equipo de Red
          Aviation
        </p>
      </div>
    </div>

    <article class="google__tarjeta">
      <div class="google__portada">
        <div class="google__imagen">
          <img
            :src="negocio.portada"
            :alt="negocio.portadaAlt"
            class="google__portada-imagen"
          />
        </div>

        <div class="google__principal">
          <p class="google__kicker">Google Business Profile</p>
          <h3>{{ negocio.nombre }}</h3>
          <p class="google__categoria">{{ negocio.categoria }}</p>

          <div class="google__reputacion">
            <div class="google__estrellas" aria-label="Calificación 4.6 de 5">
              <span v-for="(estrella, index) in estrellas" :key="index" :class="{ activa: estrella }">
                ★
              </span>
            </div>
            <strong>{{ calificacion }}</strong>
            <span>{{ totalOpiniones }} opiniones en Google</span>
          </div>

          <div class="google__acciones">
            <a :href="negocio.sitioWeb" target="_blank" rel="noreferrer">Sitio web</a>
            <a :href="negocio.opiniones" target="_blank" rel="noreferrer">Opiniones</a>
            <button type="button">Guardar</button>
            <a :href="negocio.compartir" target="_blank" rel="noreferrer">Compartir</a>
            <a :href="`tel:${negocio.telefonoPrincipal.replace(/\s+/g, '')}`">Llamar</a>
          </div>
        </div>
      </div>

      <div class="google__grid">
        <article class="google__panel">
          <p class="google__panel-etiqueta">Datos de contacto</p>
          <ul>
            <li><strong>Dirección:</strong> {{ negocio.direccion }}</li>
            <li><strong>Teléfono dirección de Ventas:</strong> {{ negocio.telefonoPrincipal }}</li>
            <li><strong>Internacional:</strong> {{ negocio.telefonoAlterno }}</li>
            <li><strong>Horario:</strong> {{ negocio.horario }}</li>
          </ul>
        </article>

        <article class="google__panel">
          <p class="google__panel-etiqueta">{{ ubicacionToluca.titulo }}</p>
          <h4>{{ ubicacionToluca.nombre }}</h4>
          <p>{{ ubicacionToluca.direccion }}</p>
          <a
            :href="ubicacionToluca.enlace"
            target="_blank"
            rel="noreferrer"
            class="google__panel-link"
          >
            Ver en Google Maps
          </a>
        </article>

        <article class="google__panel">
          <p class="google__panel-etiqueta">{{ excelTurbines.titulo }}</p>
          <h4>{{ excelTurbines.nombre }}</h4>
          <p>{{ excelTurbines.direccion }}</p>
          <a
            :href="excelTurbines.enlace"
            target="_blank"
            rel="noreferrer"
            class="google__panel-link"
          >
            Ver en Google Maps
          </a>
        </article>

        <article class="google__panel">
          <p class="google__panel-etiqueta">{{ skygroup.titulo }}</p>
          <h4>{{ skygroup.nombre }}</h4>
          <p><strong>Dirección:</strong> {{ skygroup.direccion }}</p>
          <ul>
            <li v-for="telefono in skygroup.telefonos" :key="telefono">
              <strong>Teléfono:</strong> {{ telefono }}
            </li>
          </ul>
          <a
            :href="skygroup.enlace"
            target="_blank"
            rel="noreferrer"
            class="google__panel-link"
          >
            Ver en Google Maps
          </a>
        </article>
      </div>
    </article>
  </section>
</template>

<style scoped>
.google {
  display: grid;
  gap: 18px;
}

.google__tarjeta,
.google__panel {
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}

.google__etiqueta,
.google__kicker,
.google__panel-etiqueta {
  margin: 0 0 12px;
  color: #ff4d68;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.76rem;
}

.google__descripcion,
.google__categoria,
.google__panel p,
.google__panel li,
.google__reputacion span {
  color: rgba(217, 217, 217, 0.78);
}

.google h2,
.google h3,
.google h4,
.google strong {
  margin: 0;
  color: #ffffff;
}

.google h2,
.google h3,
.google h4 {
  font-family: var(--fuente-titulo);
}

.google h2 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.04;
}

.google h3 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.google__tarjeta {
  padding: 24px;
  display: grid;
  gap: 18px;
}

.google__portada {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 18px;
}

.google__imagen {
  min-height: 280px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at top right, rgba(200, 16, 46, 0.18), transparent 28%),
    rgba(5, 5, 5, 0.46);
  padding: 16px;
  overflow: hidden;
}

.google__portada-imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
}

.google__principal {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.google__reputacion {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.google__estrellas {
  display: inline-flex;
  gap: 4px;
  font-size: 1.1rem;
}

.google__estrellas span {
  color: rgba(255, 255, 255, 0.28);
}

.google__estrellas .activa {
  color: #ffbf47;
}

.google__acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
}

.google__acciones a,
.google__acciones button {
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: #ffffff;
  font: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.google__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.google__panel {
  padding: 22px;
}

.google__panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.google__panel-link {
  margin-top: 14px;
  min-height: 42px;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

@media (max-width: 960px) {
  .google__portada,
  .google__grid {
    grid-template-columns: 1fr;
  }
}
</style>
