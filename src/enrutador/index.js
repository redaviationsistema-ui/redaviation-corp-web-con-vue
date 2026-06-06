import { createRouter, createWebHistory } from 'vue-router'
import { vistas } from '../datos/sitio'
import InicioVista from '../vistas/InicioVista.vue'
import NosotrosVista from '../vistas/NosotrosVista.vue'
import EcosistemaVista from '../vistas/EcosistemaVista.vue'
import DivisionTecnicaVista from '../vistas/DivisionTecnicaVista.vue'
import GesaVista from '../vistas/GesaVista.vue'
import ExcelTurbinesVista from '../vistas/ExcelTurbinesVista.vue'
import CesaVista from '../vistas/CesaVista.vue'
import SkyGroupVista from '../vistas/SkyGroupVista.vue'
import SolucionesDigitalesVista from '../vistas/SolucionesDigitalesVista.vue'
import CicloDeVidaVista from '../vistas/CicloDeVidaVista.vue'
import LatinoamericaVista from '../vistas/LatinoamericaVista.vue'
import SociosInternacionalesVista from '../vistas/SociosInternacionalesVista.vue'
import EstandaresVista from '../vistas/EstandaresVista.vue'
import ContactoVista from '../vistas/ContactoVista.vue'

const componentesPorId = {
  inicio: InicioVista,
  nosotros: NosotrosVista,
  ecosistema: EcosistemaVista,
  'division-tecnica': DivisionTecnicaVista,
  gesa: GesaVista,
  'excel-turbines': ExcelTurbinesVista,
  cesa: CesaVista,
  'sky-group': SkyGroupVista,
  'soluciones-digitales': SolucionesDigitalesVista,
  'ciclo-de-vida-aeronave': CicloDeVidaVista,
  latinoamerica: LatinoamericaVista,
  'socios-internacionales': SociosInternacionalesVista,
  estandares: EstandaresVista,
  contacto: ContactoVista,
}

const rutas = vistas.map((vista) => ({
  path: vista.ruta,
  name: vista.id,
  component: componentesPorId[vista.id],
  meta: {
    titulo: vista.seo.titulo,
    descripcion: vista.seo.descripcion,
  },
}))

const enrutador = createRouter({
  history: createWebHistory(),
  routes: rutas,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

enrutador.afterEach((to) => {
  document.title = to.meta.titulo ?? 'Red Aviation Co'

  let metaDescripcion = document.querySelector('meta[name="description"]')

  if (!metaDescripcion) {
    metaDescripcion = document.createElement('meta')
    metaDescripcion.setAttribute('name', 'description')
    document.head.appendChild(metaDescripcion)
  }

  metaDescripcion.setAttribute('content', to.meta.descripcion ?? '')
})

export default enrutador
