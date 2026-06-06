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

const enrutador = createRouter({
  history: createWebHistory(),
  routes: rutas,
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
