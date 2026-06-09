import heroPrincipal from '../assets/hero.png'

export const vistas = [
  {
    id: 'inicio',
    ruta: '/',
    menu: 'Inicio',
    seo: {
      titulo: 'Red Aviation Co. | Aviación Ejecutiva Integral',
      descripcion:
        'Soluciones integrales de aviación ejecutiva: mantenimiento, taller, consultoría aeronáutica, compra y venta de aeronaves, gestión de aeronaves y vuelos chárter.',
      palabrasClave: [
        'Aviación ejecutiva',
        'Vuelos privados',
        'Vuelos privados',
        'Gestión de aeronaves',
        'Compra de aeronaves',
        'Venta de aeronaves',
        'Mantenimiento aeronáutico',
        'Servicios de aviación en México',
        'Vuelos privados en México',
        'Gestión internacional de aeronaves',
      ],
    },
    pretitulo: 'Inicio',
    titulo: 'Expertos en mantenimiento compra,venta, renta y adminsitracion aeronáutica',
    subtitulo: 'Estrategia comercial, respaldo técnico y ejecución confidencial',
    descripcion:
      'Red Aviation Co. representa a propietarios, compradores, operadores e inversionistas en operaciones de adquisición, comercialización, mantenimiento y gestión de aeronaves de alto valor.',
    visual: {
      etiqueta: 'Presentación corporativa',
      tipo: 'Aeronave representada',
      detalle:
        'Cada operación se conduce con criterio de mercado, revisión técnica, control documental y absoluta discreción.',
      imagen: heroPrincipal,
      alt: 'Visual principal de Red Aviation Co',
    },
    metricas: [
      { valor: 'Privada', etiqueta: 'Representación confidencial de propietarios y compradores' },
      { valor: '360°', etiqueta: 'Cobertura comercial, técnica y operativa' },
      { valor: 'Alto valor', etiqueta: 'Activos evaluados con criterio aeronáutico' },
    ],
    animaciones: [
      'Representación confidencial',
      'Análisis técnico y comercial',
      'Coordinación documental',
      'Ejecución integral',
    ],
  },
  {
    id: 'nosotros',
    ruta: '/nosotros',
    menu: 'Nosotros',
    seo: {
      titulo: 'Nosotros | Red Aviation Company',
      descripcion:
        'Conoce la esencia, misión, visión, valores y cultura organizacional de Red Aviation Company.',
      palabrasClave: ['Red Aviation Company', 'empresa de aviación ejecutiva', 'aviación privada ejecutiva'],
    },
    pretitulo: 'Nosotros',
    titulo: 'Red Aviation Company, expertos en aeronáutica',
    subtitulo: 'Aviación ejecutiva, gestión y representación de activos',
    descripcion:
      'Soluciones integrales con conocimiento técnico y atención personalizada.',
    visual: {
      etiqueta: 'Historia y presencia',
      tipo: 'Presencia operativa',
      detalle: 'Nuestro equipo participa directamente en la coordinación y ejecución de operaciones aeronáuticas.',
      imagen: '/imagenes/nosotros/imagen-institucional.png',
      alt: 'Personal operativo de Red Aviation Co. en plataforma',
    },
    animaciones: ['Atención personalizada', 'Excelencia operativa', 'Desarrollo estratégico'],
    bloques: [
      {
        titulo: 'Esencia de la Marca',
        descripcion:
          'Red Aviation Company nace como una empresa de aviación ejecutiva enfocada en brindar soluciones aeronáuticas integrales con un enfoque humano, profesional y orientado a la experiencia del cliente. Cada servicio se basa en confianza, conocimiento técnico y excelencia operativa.',
        items: ['Enfoque humano', 'Conocimiento técnico', 'Excelencia operativa'],
      },
      {
        titulo: 'Misión',
        descripcion:
          'Brindar servicios aeronáuticos integrales en aviación privada ejecutiva mediante soluciones estratégicas, seguras y personalizadas, creando experiencias excepcionales para cada cliente a través de la profesionalización, innovación y compromiso operativo.',
        items: ['Soluciones estratégicas', 'Seguridad', 'Atención personalizada'],
      },
      {
        titulo: 'Visión',
        descripcion:
          'Ser una empresa referente en aviación ejecutiva privada, reconocida por su excelencia operativa, atención de alto nivel y desarrollo estratégico dentro del sector aeronáutico, consolidando una cultura basada en liderazgo, experiencia y crecimiento sostenible.',
        items: ['Liderazgo', 'Experiencia', 'Crecimiento sostenible'],
      },
      {
        titulo: 'Valores Corporativos',
        descripcion:
          'Nuestra forma de trabajar se guía por principios que protegen cada operación, fortalecen las relaciones y elevan continuamente la calidad del servicio.',
        items: [
          'Seguridad: priorizamos estándares aeronáuticos y responsabilidad operativa.',
          'Experiencia exclusiva: creamos servicios memorables, no solo soluciones.',
          'Profesionalismo: actuamos con ética, preparación y compromiso.',
          'Confianza: construimos relaciones sólidas con clientes, equipo y aliados.',
          'Innovación: mejoramos constantemente procesos, tecnología y servicio.',
          'Trabajo en equipo: operamos con coordinación, respeto y liderazgo compartido.',
        ],
      },
      {
        titulo: 'Cultura Organizacional',
        descripcion:
          'Red Aviation Company promueve un ambiente profesional donde la comunicación estratégica entre Dirección General y Dirección Administrativa fortalece la toma de decisiones. Priorizamos el crecimiento interno, la organización estructurada y el desarrollo del talento especializado.',
        items: ['Comunicación estratégica', 'Crecimiento interno', 'Talento especializado'],
      },
      {
        titulo: 'Promesa de Marca',
        descripcion:
          'Ofrecer soluciones aeronáuticas ejecutivas con atención personalizada, eficiencia operativa y una experiencia exclusiva que refleje confianza, seguridad y excelencia.',
        items: ['Atención personalizada', 'Eficiencia operativa', 'Confianza y excelencia'],
      },
    ],
  },
  {
    id: 'servicios',
    ruta: '/servicios',
    menu: 'Servicios',
    seo: {
      titulo: 'Representación Aeronáutica Integral | Red Aviation Company',
      descripcion:
        'Representación, compra y venta, gestión, mantenimiento, vuelos privados y consultoría para propietarios y operadores de aeronaves.',
      palabrasClave: [
        'representación aeronáutica',
        'compra y venta de aeronaves',
        'gestión de aeronaves',
        'mantenimiento aeronáutico',
        'vuelos privados',
        'consultoría aeronáutica',
      ],
    },
    pretitulo: 'Servicios',
    titulo: 'Representación Aeronáutica Integral',
    subtitulo: 'Una estructura para todo el ciclo de vida de su aeronave',
    descripcion:
      'Integramos capacidades comerciales, técnicas y operativas para representar, gestionar y proteger activos aeronáuticos de alto valor.',
    visual: {
      etiqueta: 'Servicios integrados',
      tipo: 'imagen principal conectada',
      detalle: 'Capacidad para coordinar la operación completa sin fragmentar la responsabilidad entre proveedores.',
      imagen: heroPrincipal,
      alt: 'Visual de servicios de Red Aviation Co',
    },
    animaciones: ['Evaluación del requerimiento', 'Estructuración de la solución', 'Seguimiento especializado'],
  },
  {
    id: 'flota',
    ruta: '/flota',
    menu: 'Flota',
    seo: {
      titulo: 'Nuestra Flota Disponible | Red Aviation Co.',
      descripcion:
        'Conoce la flota disponible de Red Aviation Co. con aeronaves ligeras, medianas, de largo alcance y helicópteros, con fichas listas para cotización.',
      palabrasClave: ['flota privada', 'aeronaves ejecutivas', 'helicópteros', 'cotización de aeronaves'],
    },
    pretitulo: 'Flota',
    titulo: 'Nuestra Flota Disponible',
    subtitulo: 'Aeronaves presentadas para ayudarte a comparar, evaluar y cotizar mejor',
    descripcion:
      'Selección de aeronaves con información operativa y comercial para facilitar comparaciones, evaluación y solicitud de propuestas.',
    visual: {
      etiqueta: 'Galería de flota',
      tipo: 'imagen conectada',
      detalle: 'Aeronaves presentadas con especificaciones, alcance, capacidad y disponibilidad comercial.',
      imagen: heroPrincipal,
      alt: 'Visual de la flota disponible',
    },
    animaciones: ['Comparación de aeronaves', 'Información operativa', 'Solicitud de propuesta'],
  },
  {
    id: 'venta-aeronaves',
    ruta: '/aeronaves-en-venta',
    menu: 'Aeronaves en Venta',
    seo: {
      titulo: 'Aeronaves Disponibles para Venta | Red Aviation Co.',
      descripcion:
        'Explora aeronaves disponibles para venta con fichas detalladas, especificaciones técnicas y contacto inmediato con asesores especializados.',
      palabrasClave: ['venta de aeronaves', 'aeronaves ejecutivas en venta', 'venta internacional de aeronaves'],
    },
    pretitulo: 'Aeronaves en Venta',
    titulo: 'Aeronaves Disponibles para Venta',
    subtitulo: 'Fichas comerciales preparadas para facilitar tu evaluación',
    descripcion:
      'Activos aeronáuticos representados con información técnica, condición documentada y una estrategia comercial definida.',
    visual: {
      etiqueta: 'Inventario comercial',
      tipo: 'imagen conectada',
      detalle: 'Presentación comercial orientada a compradores calificados y procesos confidenciales.',
      imagen: heroPrincipal,
      alt: 'Visual de aeronaves en venta',
    },
    animaciones: ['Presentación del activo', 'Revisión de condición', 'Contacto con compradores calificados'],
  },
  {
    id: 'mantenimiento',
    ruta: '/mantenimiento',
    menu: 'Mantenimiento',
    seo: {
      titulo: 'Servicios de Mantenimiento Aeronáutico | Red Aviation Co.',
      descripcion:
        'Capacidades, certificaciones, instalaciones y soporte técnico para el mantenimiento, reparación y revisión de aeronaves de Red Aviation Co.',
      palabrasClave: ['mantenimiento aeronáutico', 'reparación de aeronaves', 'soporte técnico aeronáutico', 'certificaciones aeronáuticas'],
    },
    pretitulo: 'Mantenimiento',
    titulo: 'Servicios de Mantenimiento Aeronáutico',
    subtitulo: 'Mantenimiento, reparación y soporte técnico para proteger disponibilidad y confianza',
    descripcion:
      'Esta vista le muestra a tu cliente que puede confiar en procesos técnicos, instalaciones, certificaciones y soporte real cuando la aeronave exige intervención profesional.',
    visual: {
      etiqueta: 'Mantenimiento y soporte técnico',
      tipo: 'imagen conectada',
      detalle: 'Espacio reservado para instalaciones, estructura o entorno técnico industrial.',
      imagen: heroPrincipal,
      alt: 'Visual de mantenimiento aeronáutico',
    },
    animaciones: ['Trazabilidad técnica', 'Continuidad operativa', 'Cumplimiento documental'],
    bloques: [
      {
        titulo: 'Capacidades',
        descripcion:
          'Capacidad para coordinar mantenimiento preventivo, correctivo, inspecciones y soporte especializado.',
        items: ['Preventivo', 'Correctivo', 'Inspecciones', 'Componentes', 'Soporte técnico'],
      },
      {
        titulo: 'Certificaciones',
        descripcion:
          'Tu visitante necesita ver que la operación está respaldada por disciplina documental y cumplimiento verificable.',
        items: ['Cumplimiento normativo', 'Trazabilidad', 'Procedimientos auditables'],
      },
      {
        titulo: 'Instalaciones',
        descripcion:
          'Infraestructura, herramientas y áreas de diagnóstico respaldan la ejecución técnica de cada intervención.',
        items: ['Hangar', 'Herramientas', 'Áreas de diagnóstico'],
      },
      {
        titulo: 'Soporte Técnico',
        descripcion:
          'Esta sección te ayuda a hablar de respuesta, continuidad y acompañamiento cuando la situación operativa no admite retrasos.',
        items: ['Asistencia para aeronaves inmovilizadas', 'Atención especializada', 'Continuidad operativa'],
      },
      {
        titulo: 'Galería',
        descripcion:
          'Instalaciones, equipo técnico y procesos documentados demuestran capacidad instalada real.',
        items: ['Hangar', 'Equipo técnico', 'Procesos en ejecución'],
      },
    ],
  },
  {
    id: 'cobertura',
    ruta: '/cobertura',
    menu: 'Cobertura',
    seo: {
      titulo: 'Cobertura Regional | Red Aviation Co.',
      descripcion:
        'Cobertura regional en México, Centroamérica, Caribe, Sudamérica y Estados Unidos para servicios integrales de aviación ejecutiva.',
      palabrasClave: ['aviación ejecutiva regional', 'servicios internacionales de aviación', 'cobertura regional aeronáutica'],
    },
    pretitulo: 'Cobertura Regional',
    titulo: 'Cobertura Regional',
    subtitulo: 'Una presencia regional pensada para acercarte soporte, negocio y ejecución',
    descripcion:
      'Coordinamos operaciones, inspecciones y relaciones comerciales en distintos mercados con conocimiento regulatorio y capacidad de respuesta.',
    visual: {
      etiqueta: 'Mapa interactivo',
      tipo: 'imagen conectada',
      detalle: 'Cobertura operativa para conectar activos, compradores, talleres, operadores y autoridades.',
      imagen: heroPrincipal,
      alt: 'Visual de cobertura regional',
    },
    animaciones: ['Conocimiento regulatorio', 'Relaciones locales', 'Coordinación entre mercados'],
    bloques: [
      {
        titulo: 'México',
        descripcion:
          'Centro estratégico para coordinar operaciones, mantenimiento y oportunidades comerciales.',
      },
      {
        titulo: 'Centroamérica',
        descripcion:
          'Esta sección te permite hablar de proximidad, conectividad y respuesta para mercados que necesitan acompañamiento ágil.',
      },
      {
        titulo: 'Caribe',
        descripcion:
          'Coordinación logística y operativa para atender mercados con necesidades particulares.',
      },
      {
        titulo: 'Sudamérica',
        descripcion:
          'Experiencia para operar entre distancias, regulaciones y condiciones comerciales diversas.',
      },
      {
        titulo: 'Estados Unidos',
        descripcion:
          'Esta presencia te ayuda a tender puentes comerciales y técnicos con uno de los mercados clave para la aviación ejecutiva.',
      },
    ],
  },
  {
    id: 'blog',
    ruta: '/blog',
    menu: 'Videos y contenido',
    seo: {
      titulo: 'Videos y Contenido Aeronáutico | Red Aviation Co.',
      descripcion:
        'Videos y contenido sobre aviación ejecutiva, aeronaves, mantenimiento, operaciones y mercado aeronáutico.',
      palabrasClave: ['videos de aviación ejecutiva', 'contenido aeronáutico', 'mercado aeronáutico'],
    },
    pretitulo: 'Videos y contenido',
    titulo: 'Contenido Audiovisual Aeronáutico',
    subtitulo: 'Aeronaves, operaciones, mantenimiento y actividad de Red Aviation',
    descripcion:
      'Videos de operaciones, aeronaves, mantenimiento y gestión para conocer de cerca la capacidad de Red Aviation.',
    visual: {
      etiqueta: 'Contenido editorial',
      tipo: 'imagen conectada',
      detalle: 'Información especializada para propietarios, compradores, operadores e inversionistas.',
      imagen: heroPrincipal,
      alt: 'Visual de noticias aeronáuticas',
    },
    animaciones: ['Análisis de mercado', 'Conocimiento técnico', 'Información para decisiones'],
    bloques: [
      {
        titulo: 'Aviación ejecutiva',
        descripcion:
          'Tendencias, decisiones de propiedad, operación y evolución del mercado de aeronaves ejecutivas.',
      },
      {
        titulo: 'Mercado aeronáutico',
        descripcion:
          'Esta categoría te permite publicar análisis que ayuden a tus clientes a tomar mejores decisiones sobre compra, venta o expansión.',
      },
      {
        titulo: 'Vuelos privados',
        descripcion:
          'Información para quienes requieren movilidad flexible, seguridad y atención personalizada.',
      },
      {
        titulo: 'Seguridad aérea',
        descripcion:
          'Esta sección fortalece la percepción de responsabilidad técnica y madurez operativa.',
      },
      {
        titulo: 'Regulación',
        descripcion:
          'Lectura práctica de requisitos y cambios normativos relevantes para operaciones en distintos mercados.',
      },
    ],
  },
  {
    id: 'contacto',
    ruta: '/contacto',
    menu: 'Contacto',
    seo: {
      titulo: 'Contacte a Nuestro Equipo | Red Aviation Co.',
      descripcion:
        'Solicite cotización, hable con un asesor y contacte al equipo de Red Aviation Co. para servicios integrales de aviación ejecutiva.',
      palabrasClave: ['contacto Red Aviation', 'solicitar cotización aviación', 'asesor aeronáutico'],
    },
    pretitulo: 'Contacto',
    titulo: 'Inicie una conversación confidencial con nuestro equipo',
    subtitulo:
      'Atendemos solicitudes de adquisición, venta, administración, mantenimiento y representación aeronáutica con absoluta discreción, criterio técnico y acompañamiento profesional desde el primer contacto.',
    descripcion: '',
    visual: {
      etiqueta: 'Cierre comercial',
      tipo: '',
      detalle:
        'Toda operación comienza con una revisión privada de sus objetivos, el activo involucrado y el alcance del mandato.',
      imagen: '/imagenes/nosotros/imagen-institucional.png',
      alt: 'Imagen institucional de Red Aviation Co. para la vista de contacto',
    },
    animaciones: ['Atención confidencial', 'Respuesta especializada', 'Definición del mandato'],
  },
]

export const navegacion = [
  { ruta: '/', nombre: 'Inicio' },
  { ruta: '/nosotros', nombre: 'Nosotros' },
  {
    ruta: '/ecosistema',
    nombre: 'Ecosistema',
    submenu: [
      { ruta: '/ecosistema', nombre: 'Vista General' },
      { ruta: '/gesa', nombre: 'GESA' },
      { ruta: '/excel-turbines', nombre: 'Excel Turbines' },
      { ruta: '/cesa', nombre: 'CESA' },
      { ruta: '/sky-group', nombre: 'Sky Group' },
    ],
  },
  {
    ruta: '/servicios',
    nombre: 'Servicios',
    submenu: [
      { ruta: '/servicios', nombre: 'Vista General' },
      { ruta: '/servicios/compra-venta-aeronaves', nombre: 'Compra y Venta' },
      { ruta: '/servicios/administracion-aeronaves', nombre: 'Administración' },
      { ruta: '/servicios/inspecciones-precompra', nombre: 'Inspecciones Precompra' },
      { ruta: '/servicios/importaciones-exportaciones', nombre: 'Importaciones y Exportaciones' },
      { ruta: '/servicios/taxi-aereo', nombre: 'Taxi Aéreo' },
      { ruta: '/servicios/ambulancia-aerea', nombre: 'Ambulancia Aérea' },
      { ruta: '/servicios/carga-aerea', nombre: 'Carga Aérea' },
      { ruta: '/servicios/venta-partes', nombre: 'Venta de Partes' },
      { ruta: '/servicios/taller-motores', nombre: 'Taller de Motores' },
      {
        ruta: '/servicios/avionica-componentes-instrumentos',
        nombre: 'Aviónica e Instrumentos',
      },
      { ruta: '/servicios/mantenimiento-militar', nombre: 'Mantenimiento Militar' },
      { ruta: '/cotizador', nombre: 'Cotiza Tu Vuelo' },
      { ruta: '/flota', nombre: 'Aeronaves' },
    ],
  },
  {
    ruta: '/soluciones-digitales',
    nombre: 'Más',
    submenu: [
/*       { ruta: '/soluciones-digitales', nombre: 'Soluciones Digitales' },*/
      { ruta: '/ciclo-de-vida', nombre: 'Ciclo de Vida' },
     /*  { ruta: '/socios-internacionales', nombre: 'Socios Internacionales' }, */
      { ruta: '/redes-sociales', nombre: 'Medios y Redes' },
      { ruta: '/blog', nombre: 'Videos y contenido' },
    ],
  },
  { ruta: '/blog', nombre: 'Videos y contenido' },
  { ruta: '/contacto', nombre: 'Contacto' },
]

export const pieSitio = {
  descripcion:
    'Firma aeronáutica privada para representación, comercialización, gestión y soporte de activos de alto valor.',
  navegacionRapida: ['Inicio', 'Nosotros', 'Ecosistema', 'Servicios', 'Soluciones Digitales', 'Videos y contenido', 'Contacto'],
  servicios: ['Compra y Venta', 'Vuelos Privados', 'Gestión de Aeronaves', 'Mantenimiento', 'Consultoría'],
  contacto: ['ventas@redaviationcorp.com', 'sales@redskyg.com', '+52 55 8618 6576', 'WhatsApp disponible'],
  legales: ['Aviso de Privacidad', 'Política de Cookies', 'Términos y Condiciones'],
}

export function obtenerVista(id) {
  return vistas.find((vista) => vista.id === id)
}
