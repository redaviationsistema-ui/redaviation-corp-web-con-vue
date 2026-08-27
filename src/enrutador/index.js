import { createRouter, createWebHistory } from 'vue-router'
import { vistas } from '../datos/sitio'
import { carruselEmpresas, carruselMultimedia, paginasNuevas, serviciosIndividuales } from '../datos/contenidoNuevo'

const DOMINIO_BASE = 'https://redaviationcorp.com'

const componentesPorId = {
  inicio: () => import('../vistas/InicioVista.vue'),
  nosotros: () => import('../vistas/NosotrosVista.vue'),
  servicios: () => import('../vistas/ServiciosVista.vue'),
  flota: () => import('../vistas/FlotaVista.vue'),
  'venta-aeronaves': () => import('../vistas/VentaAeronavesVista.vue'),
  mantenimiento: () => import('../vistas/MantenimientoVista.vue'),
  cobertura: () => import('../vistas/CoberturaVista.vue'),
  blog: () => import('../vistas/BlogVista.vue'),
  contacto: () => import('../vistas/ContactoVista.vue'),
}

const componenteVistaEstructura = () => import('../vistas/VistaEstructura.vue')
const componenteEcosistema = () => import('../vistas/EcosistemaVista.vue')
const componenteRedesSociales = () => import('../vistas/RedesSocialesVista.vue')
const componenteVentaPartes = () => import('../vistas/VentaPartesVista.vue')
const componenteCotizador = () => import('../vistas/CotizadorVista.vue')
const componenteAvisoPrivacidad = () => import('../vistas/AvisoPrivacidadVista.vue')
const componentePoliticaCookies = () => import('../vistas/PoliticaCookiesVista.vue')
const componenteTerminosCondiciones = () => import('../vistas/TerminosCondicionesVista.vue')

const rutas = vistas.map((vista) => ({
  path: vista.ruta,
  name: vista.id,
  component: componentesPorId[vista.id],
  meta: {
    titulo: vista.seo.titulo,
    descripcion: vista.seo.descripcion,
    palabrasClave: vista.seo.palabrasClave?.join(', ') ?? '',
  },
}))

const rutasNuevas = [...paginasNuevas, ...serviciosIndividuales].map((pagina) => ({
  path: pagina.ruta,
  name: pagina.id,
  component:
    pagina.id === 'ecosistema'
      ? componenteEcosistema
      : pagina.id === 'redes-sociales'
        ? componenteRedesSociales
        : pagina.id === 'venta-partes'
          ? componenteVentaPartes
          : componenteVistaEstructura,
  props: {
    pagina: {
      ...pagina,
      carrusel:
        pagina.id === 'ecosistema'
          ? carruselEmpresas
          : undefined,
      tituloCarrusel:
        pagina.id === 'ecosistema' ? 'Empresas del grupo' : 'Galería de contenidos',
    },
  },
  meta: {
    titulo: pagina.seo.titulo,
    descripcion: pagina.seo.descripcion,
    palabrasClave: pagina.seo.palabrasClave?.join(', ') ?? '',
  },
}))

const rutasHerramientas = [
  {
    path: '/cotizador',
    name: 'cotizador',
    component: componenteCotizador,
    meta: {
      titulo: 'Cotizador de Vuelo Privado | Red Aviation Co.',
      descripcion:
        'Solicite una cotización de vuelo privado con ruta, fecha, pasajeros y aeronave preferida.',
      palabrasClave: 'cotizador vuelo privado, cotización jet privado, vuelos privados',
    },
  },
  {
    path: '/aviso-de-privacidad',
    name: 'aviso-privacidad',
    component: componenteAvisoPrivacidad,
    meta: {
      titulo: 'Aviso de Privacidad | Red Aviation Co.',
      descripcion:
        'Conozca el aviso de privacidad aplicable al tratamiento de datos personales relacionado con servicios aeronáuticos coordinados por RED AVIATION COMPANY.',
      palabrasClave: 'aviso de privacidad, datos personales, red sky group, red aviation',
    },
  },
  {
    path: '/politica-de-cookies',
    name: 'politica-cookies',
    component: componentePoliticaCookies,
    meta: {
      titulo: 'Política de Cookies | Red Aviation Co.',
      descripcion:
        'Consulte la política de cookies aplicable al sitio web de RED AVIATION COMPANY, S.A. DE C.V.',
      palabrasClave: 'política de cookies, cookies, google analytics, red aviation',
    },
  },
  {
    path: '/terminos-y-condiciones',
    name: 'terminos-condiciones',
    component: componenteTerminosCondiciones,
    meta: {
      titulo: 'Términos y Condiciones | Red Aviation Co.',
      descripcion:
        'Revise los términos y condiciones de uso del sitio web de RED AVIATION COMPANY, S.A. DE C.V.',
      palabrasClave: 'términos y condiciones, legal, sitio web, red aviation',
    },
  },
]

const enrutador = createRouter({
  history: createWebHistory(),
  routes: [...rutas, ...rutasNuevas, ...rutasHerramientas],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

function asegurarMeta(nombre) {
  let meta = document.querySelector(`meta[name="${nombre}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', nombre)
    document.head.appendChild(meta)
  }

  return meta
}

function asegurarMetaProperty(propiedad) {
  let meta = document.querySelector(`meta[property="${propiedad}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', propiedad)
    document.head.appendChild(meta)
  }

  return meta
}

function asegurarCanonical() {
  let canonical = document.querySelector('link[rel="canonical"]')

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  return canonical
}

enrutador.afterEach((to) => {
  const urlCanonica = new URL(to.fullPath, DOMINIO_BASE).toString()

  document.title = to.meta.titulo ?? 'Red Aviation Co.'
  asegurarMeta('description').setAttribute('content', to.meta.descripcion ?? '')
  asegurarMeta('keywords').setAttribute('content', to.meta.palabrasClave ?? '')
  asegurarCanonical().setAttribute('href', urlCanonica)

  asegurarMetaProperty('og:title').setAttribute('content', to.meta.titulo ?? 'Red Aviation Co.')
  asegurarMetaProperty('og:description').setAttribute('content', to.meta.descripcion ?? '')
  asegurarMetaProperty('og:url').setAttribute('content', urlCanonica)
  asegurarMetaProperty('og:type').setAttribute('content', 'website')
  asegurarMetaProperty('og:site_name').setAttribute('content', 'Red Aviation Co.')
  asegurarMetaProperty('og:locale').setAttribute('content', 'es_MX')
})

export default enrutador
