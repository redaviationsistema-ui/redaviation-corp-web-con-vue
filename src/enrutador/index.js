import { createRouter, createWebHistory } from 'vue-router'
import { vistas } from '../datos/sitio'
import InicioVista from '../vistas/InicioVista.vue'
import NosotrosVista from '../vistas/NosotrosVista.vue'
import ServiciosVista from '../vistas/ServiciosVista.vue'
import FlotaVista from '../vistas/FlotaVista.vue'
import VentaAeronavesVista from '../vistas/VentaAeronavesVista.vue'
import MantenimientoVista from '../vistas/MantenimientoVista.vue'
import CoberturaVista from '../vistas/CoberturaVista.vue'
import BlogVista from '../vistas/BlogVista.vue'
import ContactoVista from '../vistas/ContactoVista.vue'
import CotizadorVista from '../vistas/CotizadorVista.vue'
import VistaEstructura from '../vistas/VistaEstructura.vue'
import EcosistemaVista from '../vistas/EcosistemaVista.vue'
import { carruselEmpresas, carruselMultimedia, paginasNuevas, serviciosIndividuales } from '../datos/contenidoNuevo'

const componentesPorId = {
  inicio: InicioVista,
  nosotros: NosotrosVista,
  servicios: ServiciosVista,
  flota: FlotaVista,
  'venta-aeronaves': VentaAeronavesVista,
  mantenimiento: MantenimientoVista,
  cobertura: CoberturaVista,
  blog: BlogVista,
  contacto: ContactoVista,
}

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
  component: pagina.id === 'ecosistema' ? EcosistemaVista : VistaEstructura,
  props: {
    pagina: {
      ...pagina,
      carrusel:
        pagina.id === 'ecosistema'
          ? carruselEmpresas
          : pagina.id === 'redes-sociales'
            ? carruselMultimedia
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
    component: CotizadorVista,
    meta: {
      titulo: 'Cotizador de Vuelo Privado | Red Aviation Co.',
      descripcion:
        'Solicite una cotización de vuelo privado con ruta, fecha, pasajeros y aeronave preferida.',
      palabrasClave: 'cotizador vuelo privado, cotización jet privado, vuelos privados',
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

enrutador.afterEach((to) => {
  document.title = to.meta.titulo ?? 'Red Aviation Co.'
  asegurarMeta('description').setAttribute('content', to.meta.descripcion ?? '')
  asegurarMeta('keywords').setAttribute('content', to.meta.palabrasClave ?? '')
})

export default enrutador
