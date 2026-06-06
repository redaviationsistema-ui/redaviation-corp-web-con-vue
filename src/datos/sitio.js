import heroPrincipal from '../assets/hero.png'

export const vistas = [
  {
    id: 'inicio',
    ruta: '/',
    menu: 'Inicio',
    seo: {
      titulo: 'Red Aviation Co. | Aviación Ejecutiva Integral en Latinoamérica',
      descripcion:
        'Soluciones integrales de aviación ejecutiva en Latinoamérica. Compra y venta de aeronaves, vuelos chárter, mantenimiento, gestión y consultoría aeronáutica.',
      palabrasClave: [
        'Aviación ejecutiva',
        'Charter privado',
        'Vuelos privados',
        'Gestión de aeronaves',
        'Compra de aeronaves',
        'Venta de aeronaves',
        'Mantenimiento aeronáutico',
        'Aviation services Mexico',
        'Private jet charter Mexico',
        'Aircraft management Latin America',
      ],
    },
    pretitulo: 'Inicio',
    titulo: 'Su Socio Estratégico de Aviación en Latinoamérica',
    subtitulo: 'Aviación Ejecutiva de Servicio Completo • Un Grupo • Una Región • Un Estándar',
    descripcion:
      'Si buscas una página web corporativa de alto nivel para Red Aviation Co., aquí tu visitante entiende que puede acercarse a una plataforma que integra imagen premium, capacidad técnica, conversión comercial y posicionamiento de marca en una sola experiencia.',
    visual: {
      etiqueta: 'Hero corporativo',
      tipo: 'imagen principal conectada',
      detalle:
        'Este bloque ya puede mostrar un recurso visual local y después lo sustituyes por video, fotografía aérea o secuencia cinematográfica.',
      imagen: heroPrincipal,
      alt: 'Visual principal de Red Aviation Co',
    },
    metricas: [
      { valor: 'LATAM', etiqueta: 'Cobertura regional que fortalece tu operación' },
      { valor: '360°', etiqueta: 'Servicios integrales que puedes coordinar' },
      { valor: 'Premium', etiqueta: 'Posicionamiento de marca para un cliente exigente' },
    ],
    animaciones: [
      'Ruta aérea roja sobre el hero',
      'Fade in del mensaje principal',
      'Parallax suave en el recurso visual',
      'Hover elegante en tarjetas y CTA',
    ],
  },
  {
    id: 'nosotros',
    ruta: '/nosotros',
    menu: 'Nosotros',
    seo: {
      titulo: 'Acerca de Red Aviation Co. | Aviación Ejecutiva en Latinoamérica',
      descripcion:
        'Conoce la historia, misión, visión, valores, liderazgo, presencia regional y compromiso de Red Aviation Co. con la aviación ejecutiva.',
      palabrasClave: ['Acerca de Red Aviation Co', 'empresa de aviación ejecutiva', 'aviación ejecutiva Latinoamérica'],
    },
    pretitulo: 'Nosotros',
    titulo: 'Acerca de Red Aviation Co.',
    subtitulo: 'La historia detrás de una plataforma regional de aviación ejecutiva',
    descripcion:
      'Aquí le explicas a tu visitante quién eres, cómo llegaste hasta aquí y por qué puede confiar en una organización que combina visión comercial, infraestructura técnica y criterio regional.',
    visual: {
      etiqueta: 'Historia y presencia',
      tipo: 'imagen institucional',
      detalle: 'Espacio ideal para colocar equipo directivo, hangar, mapa corporativo o fotografía institucional.',
      imagen: heroPrincipal,
      alt: 'Visual institucional de Red Aviation Co',
    },
    animaciones: ['Entrada progresiva de bloques institucionales', 'Línea temporal de historia', 'Mapa regional iluminado'],
    bloques: [
      {
        titulo: 'Nuestra Historia',
        descripcion:
          'Cuando cuentas tu historia en segunda persona, haces que tu visitante entienda cómo construiste una plataforma que hoy puede resolver necesidades comerciales y técnicas en varios mercados de Latinoamérica.',
        items: ['Orígenes del grupo', 'Evolución de servicios', 'Consolidación regional'],
      },
      {
        titulo: 'Nuestra Misión',
        descripcion:
          'Aquí dejas claro que tu propósito es ayudarle a propietarios, operadores e inversionistas a tomar decisiones con más respaldo técnico, comercial y operativo.',
        items: ['Acompañamiento integral', 'Ejecución confiable', 'Visión de largo plazo'],
      },
      {
        titulo: 'Nuestra Visión',
        descripcion:
          'Esta sección te permite posicionarte como una referencia regional para quienes buscan una relación más sofisticada con la aviación ejecutiva.',
        items: ['Liderazgo regional', 'Innovación operacional', 'Expansión sostenible'],
      },
      {
        titulo: 'Nuestros Valores',
        descripcion:
          'Aquí puedes hablarle al cliente de forma directa sobre transparencia, responsabilidad y excelencia, para que entienda cómo trabajas antes incluso de hablar con un asesor.',
        items: ['Transparencia', 'Responsabilidad', 'Excelencia técnica', 'Integridad'],
      },
      {
        titulo: 'Liderazgo',
        descripcion:
          'Tu visitante necesita saber que detrás de la marca hay personas capaces de coordinar escenarios complejos con criterio y calma.',
        items: ['Dirección estratégica', 'Experiencia sectorial', 'Capacidad de ejecución'],
      },
      {
        titulo: 'Presencia en Latinoamérica',
        descripcion:
          'Aquí conviertes la cobertura regional en una ventaja clara para el cliente que busca proximidad operativa y conocimiento local.',
        items: ['México', 'Centroamérica', 'Caribe', 'Sudamérica', 'Estados Unidos'],
      },
      {
        titulo: 'Certificaciones y Cumplimiento',
        descripcion:
          'Esta parte refuerza que no solo proyectas imagen premium, sino también disciplina operativa y respeto por estándares de la industria.',
        items: ['Cumplimiento regulatorio', 'Documentación técnica', 'Procesos auditables'],
      },
    ],
  },
  {
    id: 'servicios',
    ruta: '/servicios',
    menu: 'Servicios',
    seo: {
      titulo: 'Soluciones Integrales de Aviación Ejecutiva | Red Aviation Co.',
      descripcion:
        'Compra y venta de aeronaves, charter privado, gestión de aeronaves, mantenimiento y consultoría aeronáutica para propietarios y operadores.',
      palabrasClave: ['servicios de aviación ejecutiva', 'charter privado', 'compra de aeronaves', 'gestión de aeronaves'],
    },
    pretitulo: 'Servicios',
    titulo: 'Soluciones Integrales de Aviación Ejecutiva',
    subtitulo: 'Servicios diseñados para acompañarte desde la estrategia hasta la operación',
    descripcion:
      'Aquí organizas la oferta del grupo para que tu visitante entienda de inmediato qué servicio necesita y por qué puede resolverlo contigo sin saltar entre proveedores desconectados.',
    visual: {
      etiqueta: 'Servicios integrados',
      tipo: 'imagen principal conectada',
      detalle: 'Reserva este bloque para visuales de cabina, jets, mantenimiento o tecnología comercial.',
      imagen: heroPrincipal,
      alt: 'Visual de servicios de Red Aviation Co',
    },
    animaciones: ['Transición entre categorías', 'Cards con hover premium', 'Entrada escalonada de servicios'],
  },
  {
    id: 'flota',
    ruta: '/flota',
    menu: 'Flota',
    seo: {
      titulo: 'Nuestra Flota Disponible | Red Aviation Co.',
      descripcion:
        'Conoce la flota disponible de Red Aviation Co. con jets ligeros, medianos, pesados y helicópteros, con fichas listas para cotización.',
      palabrasClave: ['flota privada', 'jets ejecutivos', 'helicópteros', 'cotización de aeronaves'],
    },
    pretitulo: 'Flota',
    titulo: 'Nuestra Flota Disponible',
    subtitulo: 'Aeronaves presentadas para ayudarte a comparar, evaluar y cotizar mejor',
    descripcion:
      'En esta vista le das a tu cliente una experiencia clara para filtrar aeronaves, revisar especificaciones y avanzar hacia una cotización sin fricción.',
    visual: {
      etiqueta: 'Galería de flota',
      tipo: 'imagen conectada',
      detalle: 'Espacio para foto hero de aeronaves o carrusel premium.',
      imagen: heroPrincipal,
      alt: 'Visual de la flota disponible',
    },
    animaciones: ['Filtros activos con transición', 'Cambio de tarjetas por categoría', 'Hover sobre aeronaves'],
  },
  {
    id: 'venta-aeronaves',
    ruta: '/aeronaves-en-venta',
    menu: 'Aeronaves en Venta',
    seo: {
      titulo: 'Aeronaves Disponibles para Venta | Red Aviation Co.',
      descripcion:
        'Explora aeronaves disponibles para venta con fichas detalladas, especificaciones técnicas y contacto inmediato con asesores especializados.',
      palabrasClave: ['venta de aeronaves', 'aeronaves ejecutivas en venta', 'aircraft sales Latin America'],
    },
    pretitulo: 'Aeronaves en Venta',
    titulo: 'Aeronaves Disponibles para Venta',
    subtitulo: 'Fichas comerciales preparadas para facilitar tu evaluación',
    descripcion:
      'Aquí presentas inventario, especificaciones y argumentos comerciales para que tu visitante sienta que la conversación puede avanzar con información concreta desde el primer contacto.',
    visual: {
      etiqueta: 'Inventario comercial',
      tipo: 'imagen conectada',
      detalle: 'Espacio ideal para fotografía editorial de aeronave y ficha destacada.',
      imagen: heroPrincipal,
      alt: 'Visual de aeronaves en venta',
    },
    animaciones: ['Cambio de galería principal', 'Hover de fichas', 'Destello sutil en CTA de información'],
  },
  {
    id: 'mantenimiento',
    ruta: '/mantenimiento',
    menu: 'Mantenimiento',
    seo: {
      titulo: 'Servicios de Mantenimiento Aeronáutico | Red Aviation Co.',
      descripcion:
        'Capacidades, certificaciones, instalaciones, soporte técnico y enfoque MRO para el mantenimiento aeronáutico de Red Aviation Co.',
      palabrasClave: ['mantenimiento aeronáutico', 'MRO', 'soporte técnico aeronáutico', 'certificaciones aeronáuticas'],
    },
    pretitulo: 'Mantenimiento',
    titulo: 'Servicios de Mantenimiento Aeronáutico',
    subtitulo: 'MRO y soporte técnico diseñado para proteger disponibilidad y confianza',
    descripcion:
      'Esta vista le muestra a tu cliente que puede confiar en procesos técnicos, instalaciones, certificaciones y soporte real cuando la aeronave exige intervención profesional.',
    visual: {
      etiqueta: 'MRO y soporte técnico',
      tipo: 'imagen conectada',
      detalle: 'Espacio reservado para instalaciones, estructura o entorno técnico industrial.',
      imagen: heroPrincipal,
      alt: 'Visual de mantenimiento aeronáutico',
    },
    animaciones: ['Scroll reveal de capacidades', 'Timeline de soporte técnico', 'Fade de certificaciones'],
    bloques: [
      {
        titulo: 'Capacidades',
        descripcion:
          'Aquí explicas con claridad qué puedes intervenir y por qué tu estructura técnica genera confianza antes incluso de una visita comercial.',
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
          'Aquí conviertes infraestructura física en argumento de venta, demostrando que tu operación tiene capacidad instalada real.',
        items: ['Hangar', 'Herramientas', 'Áreas de diagnóstico'],
      },
      {
        titulo: 'Soporte Técnico',
        descripcion:
          'Esta sección te ayuda a hablar de respuesta, continuidad y acompañamiento cuando la situación operativa no admite retrasos.',
        items: ['AOG', 'Atención especializada', 'Continuidad operativa'],
      },
      {
        titulo: 'Galería',
        descripcion:
          'Aquí puedes integrar fotografía real para que la calidad percibida de tu servicio técnico aumente de inmediato.',
        items: ['Hangar', 'Equipo técnico', 'Procesos en ejecución'],
      },
    ],
  },
  {
    id: 'cobertura',
    ruta: '/cobertura',
    menu: 'Cobertura',
    seo: {
      titulo: 'Operamos en Toda Latinoamérica | Red Aviation Co.',
      descripcion:
        'Cobertura regional en México, Centroamérica, Caribe, Sudamérica y Estados Unidos para servicios integrales de aviación ejecutiva.',
      palabrasClave: ['Latinoamérica aviación ejecutiva', 'aviation Latin America', 'cobertura regional aeronáutica'],
    },
    pretitulo: 'Cobertura Regional',
    titulo: 'Operamos en Toda Latinoamérica',
    subtitulo: 'Una presencia regional pensada para acercarte soporte, negocio y ejecución',
    descripcion:
      'Aquí dejas claro que no solo entiendes la región, sino que puedes moverte dentro de ella con lógica operativa, relaciones locales y capacidad de respuesta.',
    visual: {
      etiqueta: 'Mapa interactivo',
      tipo: 'imagen conectada',
      detalle: 'Reserva este espacio para mapa de Latinoamérica con rutas y puntos activos.',
      imagen: heroPrincipal,
      alt: 'Visual de cobertura regional',
    },
    animaciones: ['Mapa interactivo con regiones', 'Iluminación progresiva por zonas', 'Rutas aéreas dinámicas'],
    bloques: [
      {
        titulo: 'México',
        descripcion:
          'Aquí puedes explicar cómo centralizas parte importante de tu operación y por qué eso beneficia tiempos, coordinación y confianza.',
      },
      {
        titulo: 'Centroamérica',
        descripcion:
          'Esta sección te permite hablar de proximidad, conectividad y respuesta para mercados que necesitan acompañamiento ágil.',
      },
      {
        titulo: 'Caribe',
        descripcion:
          'Aquí conviertes complejidad logística en una promesa de coordinación más simple para el cliente.',
      },
      {
        titulo: 'Sudamérica',
        descripcion:
          'Aquí posicionas al grupo como un aliado que entiende mercado, distancias y particularidades de operación regional.',
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
    menu: 'Blog',
    seo: {
      titulo: 'Noticias y Actualidad Aeronáutica | Red Aviation Co.',
      descripcion:
        'Contenido sobre aviación ejecutiva, mercado aeronáutico, charter privado, seguridad aérea y regulación para fortalecer autoridad de marca.',
      palabrasClave: ['blog aviación ejecutiva', 'noticias aeronáuticas', 'mercado aeronáutico'],
    },
    pretitulo: 'Blog / Noticias',
    titulo: 'Noticias y Actualidad Aeronáutica',
    subtitulo: 'Contenido que te ayuda a construir autoridad, SEO y relación con tu audiencia',
    descripcion:
      'Aquí conviertes conocimiento sectorial en posicionamiento digital, porque cada artículo puede atraer búsquedas, responder dudas y reforzar la percepción de expertise.',
    visual: {
      etiqueta: 'Contenido editorial',
      tipo: 'imagen conectada',
      detalle: 'Espacio para banner editorial, mockup de artículo o visual de newsroom.',
      imagen: heroPrincipal,
      alt: 'Visual del blog aeronáutico',
    },
    animaciones: ['Aparición progresiva de artículos', 'Hover editorial', 'Cambio de categorías activas'],
    bloques: [
      {
        titulo: 'Aviación ejecutiva',
        descripcion:
          'Aquí puedes hablar de tendencias, decisiones de propiedad, rutas y experiencia premium para atraer a un público comercial y operativo.',
      },
      {
        titulo: 'Mercado aeronáutico',
        descripcion:
          'Esta categoría te permite publicar análisis que ayuden a tus clientes a tomar mejores decisiones sobre compra, venta o expansión.',
      },
      {
        titulo: 'Charter privado',
        descripcion:
          'Aquí conectas con usuarios que buscan flexibilidad, seguridad y servicio personalizado.',
      },
      {
        titulo: 'Seguridad aérea',
        descripcion:
          'Esta sección fortalece la percepción de responsabilidad técnica y madurez operativa.',
      },
      {
        titulo: 'Regulación',
        descripcion:
          'Aquí transformas complejidad normativa en contenido útil, posicionable y relevante para quienes operan en varios mercados.',
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
    titulo: 'Contacte a Nuestro Equipo',
    subtitulo: 'La conversación comercial empieza con una experiencia clara y profesional',
    descripcion:
      'Esta vista debe ayudarte a convertir interés en conversación real, con un formulario claro, información directa y señales de confianza para que escribirte o llamarte se sienta natural.',
    visual: {
      etiqueta: 'Cierre comercial',
      tipo: 'imagen conectada',
      detalle: 'Espacio para pista, hangar nocturno o visual institucional de cierre.',
      imagen: heroPrincipal,
      alt: 'Visual de contacto de Red Aviation Co',
    },
    animaciones: ['Entrada suave del formulario', 'Brillo sutil en CTA', 'Fade de datos de contacto'],
  },
]

export const navegacion = [
  { ruta: '/', nombre: 'Inicio' },
  { ruta: '/nosotros', nombre: 'Nosotros' },
  {
    ruta: '/servicios',
    nombre: 'Servicios',
    submenu: [
      { ruta: '/servicios', nombre: 'Vista General' },
      { ruta: '/aeronaves-en-venta', nombre: 'Compra y Venta' },
      { ruta: '/flota', nombre: 'Charter y Flota' },
      { ruta: '/mantenimiento', nombre: 'Mantenimiento' },
      { ruta: '/contacto', nombre: 'Consultoría' },
    ],
  },
  { ruta: '/flota', nombre: 'Flota' },
  { ruta: '/aeronaves-en-venta', nombre: 'Aeronaves en Venta' },
  { ruta: '/cobertura', nombre: 'Cobertura' },
  { ruta: '/blog', nombre: 'Blog' },
  { ruta: '/contacto', nombre: 'Contacto' },
]

export const pieSitio = {
  descripcion:
    'Red Aviation Co. integra experiencia visual, posicionamiento de marca, conversión comercial y soluciones ejecutivas para Latinoamérica.',
  navegacionRapida: ['Inicio', 'Nosotros', 'Servicios', 'Flota', 'Cobertura', 'Blog', 'Contacto'],
  servicios: ['Compra y Venta', 'Charter Privado', 'Gestión de Aeronaves', 'Mantenimiento', 'Consultoría'],
  contacto: ['ventas@redaviationcorp.com', 'sales@redskyg.com', '+52 55 8618 6576', 'WhatsApp disponible'],
  legales: ['Aviso de Privacidad', 'Política de Cookies', 'Términos y Condiciones'],
}

export function obtenerVista(id) {
  return vistas.find((vista) => vista.id === id)
}
