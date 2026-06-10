import heroPrincipal from '../assets/hero.png'

const visualComun = {
  imagen: heroPrincipal,
  alt: 'Recurso visual de Red Aviation Co.',
}

export const paginasNuevas = [
  {
    id: 'gesa',
    ruta: '/gesa',
    pretitulo: 'GESA',
    titulo: 'Aviónica, Interiores y Componentes',
    subtitulo: 'Soporte Técnico · Aviónica · Refacciones · Interiores',
    descripcion: 'Soluciones técnicas para sistemas aeronáuticos, interiores de cabina, aviónica y suministro de refacciones.',
    seo: {
      titulo: 'GESA | Aviónica, Interiores y Componentes',
      descripcion: 'Servicios de aviónica, interiores, partes e instrumentos aeronáuticos.',
      palabrasClave: ['aviónica aeronáutica', 'interiores de aeronaves', 'instrumentos aeronáuticos'],
    },
    visual: {
      etiqueta: 'GESA',
      tipo: 'Soporte técnico especializado',
      imagen: '/imagenes/ecosistema/gesa-componentes.png',
      alt: 'Especialista de GESA trabajando con componentes aeronáuticos',
    },
    logoTitulo: {
      src: '/imagenes/LOGOS/Logo%20GESA.png',
      alt: 'Logo de GESA',
    },
    galeria: [
      { fuente: '/imagenes/ecosistema/gesa-componentes.png', alt: 'Trabajo técnico con componentes aeronáuticos' },
      { fuente: '/imagenes/ecosistema/gesa-avionica.png', alt: 'Inspección de aviónica en laboratorio' },
      { fuente: '/imagenes/ecosistema/gesa-taller.png', alt: 'Equipo técnico de GESA en taller' },
    ],
    bloques: [
      { titulo: 'Aviónica', descripcion: 'Instalación, diagnóstico y actualización de sistemas.' },
      { titulo: 'Interiores', descripcion: 'Remodelación y personalización de cabinas.' },
      { titulo: 'Partes', descripcion: 'Localización y suministro de componentes.' },
      { titulo: 'Instrumentos', descripcion: 'Inspección y soporte de instrumentos aeronáuticos.' },
      { titulo: 'Asistencia inmediata', descripcion: 'Respuesta para aeronaves inmovilizadas.' },
    ],
  },
  {
    id: 'excel-turbines',
    ruta: '/excel-turbines',
    pretitulo: 'Excel Turbines',
    titulo: 'Especialistas en Motores de Turbina',
    subtitulo: 'Servicios para Motores de Turbina',
    descripcion: 'Inspección, mantenimiento, reparación y revisión general de motores de turbina.',
    seo: {
      titulo: 'Excel Turbines | Taller de Motores de Turbina',
      descripcion: 'Diagnóstico, inspección, mantenimiento y revisión general de motores de turbina.',
      palabrasClave: ['motores de turbina', 'taller de motores aeronáuticos'],
    },
    visual: {
      etiqueta: 'Excel Turbines',
      tipo: 'Motores de turbina',
      imagen: '/imagenes/ecosistema/excel-motor.png',
      alt: 'Especialista trabajando en un motor de turbina',
    },
    logoTitulo: {
      src: '/imagenes/LOGOS/Logo%20EXCEL.png',
      alt: 'Logo de Excel Turbines',
    },
    galeria: [
      { fuente: '/imagenes/ecosistema/excel-motor.png', alt: 'Intervención técnica en motor de turbina' },
      { fuente: '/imagenes/ecosistema/excel-taller.png', alt: 'Taller de Excel Turbines' },
      { fuente: '/imagenes/ecosistema/excel-motores.png', alt: 'Motores de turbina dentro del taller' },
    ],
    bloques: [
      { titulo: 'Taller de Motores', descripcion: 'Intervenciones técnicas con trazabilidad y control.' },
      { titulo: 'Diagnósticos', descripcion: 'Evaluación de condición y detección de fallas.' },
      { titulo: 'Inspecciones', descripcion: 'Revisión de componentes y documentación.' },
      { titulo: 'Revisión General', descripcion: 'Intervención integral para recuperar desempeño.' },
      { titulo: 'Sección Caliente', descripcion: 'Inspección especializada de componentes críticos.' },
      { titulo: 'Asistencia Inmediata', descripcion: 'Respuesta ante aeronaves inmovilizadas.' },
    ],
  },
  {
    id: 'cesa',
    ruta: '/cesa',
    pretitulo: 'CESA',
    titulo: 'Mantenimiento Estructural de Aeronaves',
    subtitulo: 'Mantenimiento · Servicios de Aeronaves · Ensamble y Desensamble',
    descripcion: 'Mantenimiento aeronáutico, inspecciones, reparaciones estructurales y soporte técnico especializado.',
    seo: {
      titulo: 'CESA | Mantenimiento Estructural Aeronáutico',
      descripcion: 'Mantenimiento estructural, reparaciones, inspecciones y mantenimiento mayor de aeronaves.',
      palabrasClave: ['mantenimiento estructural', 'reparación de aeronaves'],
    },
    visual: {
      etiqueta: 'CESA',
      tipo: 'Servicios de aeronaves',
      imagen: '/imagenes/ecosistema/cesa-inspeccion.png',
      alt: 'Equipo técnico inspeccionando una aeronave',
    },
    logoTitulo: {
      src: '/imagenes/LOGOS/Logo%20CESA.png',
      alt: 'Logo de CESA',
    },
    galeria: [
      { fuente: '/imagenes/ecosistema/cesa-aeronave.png', alt: 'Aeronave dentro de instalaciones de mantenimiento' },
      { fuente: '/imagenes/ecosistema/cesa-inspeccion.png', alt: 'Inspección técnica de una aeronave' },
      { fuente: '/imagenes/ecosistema/cesa-motor.png', alt: 'Técnico inspeccionando sistemas de una aeronave' },
    ],
    bloques: [
      { titulo: 'Mantenimiento de Estructura', descripcion: 'Atención técnica de elementos estructurales.' },
      { titulo: 'Reparaciones', descripcion: 'Intervenciones documentadas y controladas.' },
      { titulo: 'Inspecciones', descripcion: 'Evaluación de condición y cumplimiento.' },
      { titulo: 'Mantenimiento Mayor', descripcion: 'Procesos de mayor alcance y profundidad.' },
      { titulo: 'Ensamblaje', descripcion: 'Integración ordenada de estructuras y componentes.' },
      { titulo: 'Desensamblaje', descripcion: 'Procesos técnicos para inspección o intervención.' },
    ],
  },
  {
    id: 'sky-group',
    ruta: '/sky-group',
    pretitulo: 'Sky Group',
    titulo: 'División Comercial y de Consultoría',
    subtitulo: 'Corretaje Aeronáutico · Consultoría Estratégica · Soluciones Digitales',
    descripcion: 'Compraventa de aeronaves, asesoría estratégica y tecnología para operadores, propietarios e inversionistas.',
    seo: {
      titulo: 'Sky Group | Compra y Venta de Aeronaves',
      descripcion: 'Venta, adquisición, corretaje, consultoría e inteligencia de mercado aeronáutico.',
      palabrasClave: ['venta de aeronaves', 'compra de aeronaves', 'corretaje aeronáutico'],
    },
    visual: {
      etiqueta: 'Sky Group',
      tipo: 'Consultoría estratégica',
      imagen: '/imagenes/ecosistema/sky-group-consultoria.png',
      alt: 'Reunión de consultoría estratégica de Sky Group',
    },
    logoTitulo: {
      src: '/imagenes/LOGOS/Logo%20SKYGROUP.png',
      alt: 'Logo de Sky Group',
    },
    galeria: [
      { fuente: '/imagenes/ecosistema/sky-group-consultoria.png', alt: 'Consultoría estratégica de Sky Group' },
      { fuente: '/imagenes/ecosistema/hangar-operacion.png', alt: 'Operación de aeronave de Red Aviation' },
      { fuente: '/imagenes/ecosistema/hangar-plataforma.png', alt: 'Aeronave y equipo de apoyo en plataforma' },
    ],
    bloques: [
      { titulo: 'Venta de Aeronaves', descripcion: 'Preparación, promoción y gestión comercial.' },
      { titulo: 'Adquisiciones', descripcion: 'Búsqueda, evaluación y acompañamiento de compra.' },
      { titulo: 'Corretaje', descripcion: 'Intermediación profesional entre las partes.' },
      { titulo: 'Consultoría', descripcion: 'Análisis para decisiones comerciales y patrimoniales.' },
      { titulo: 'Inteligencia de Mercado', descripcion: 'Lectura de oferta, demanda y valor de activos.' },
      { titulo: 'Representación Regional', descripcion: 'Desarrollo comercial y presencia en distintos mercados.' },
    ],
  },
  {
    id: 'ecosistema',
    ruta: '/ecosistema',
    pretitulo: 'Ecosistema',
    titulo: 'Ecosistema Red Aviation',
    subtitulo: 'Cuatro empresas especializadas conectadas por una misma visión operativa',
    descripcion: 'Conoce cómo GESA, CESA, Excel Turbines y Sky Group articulan capacidades técnicas, comerciales y operativas.',
    seo: {
      titulo: 'Ecosistema de Empresas Aeronáuticas | Red Aviation Co.',
      descripcion: 'Conoce las empresas especializadas que integran el ecosistema de Red Aviation Co.',
      palabrasClave: ['empresas aeronáuticas', 'servicios integrales de aviación'],
    },
    visual: { ...visualComun, etiqueta: 'Visualización interactiva', tipo: 'Mapa del ecosistema' },
    bloques: [
      { titulo: 'GESA', descripcion: 'Aviónica, interiores, instrumentos, partes y asistencia técnica.', ruta: '/gesa' },
      { titulo: 'CESA', descripcion: 'Mantenimiento estructural, reparaciones e inspecciones.', ruta: '/cesa' },
      { titulo: 'Excel Turbines', descripcion: 'Diagnóstico, inspección y revisión de motores.', ruta: '/excel-turbines' },
      { titulo: 'Sky Group', descripcion: 'Venta, adquisición, corretaje y consultoría aeronáutica.', ruta: '/sky-group' },
    ],
  },
  {
    id: 'soluciones-digitales',
    ruta: '/soluciones-digitales',
    pretitulo: 'Soluciones Digitales',
    titulo: 'Tecnología para Operaciones Aeronáuticas',
    subtitulo: 'Herramientas digitales adaptadas a empresas, operadores y propietarios',
    descripcion: 'Soluciones para fortalecer presencia digital, seguimiento comercial, operación y comunicación con clientes.',
    seo: {
      titulo: 'Soluciones Digitales Aeronáuticas | Red Aviation Co.',
      descripcion: 'Sitios web, gestión comercial, software operativo y portales para el sector aeronáutico.',
      palabrasClave: ['software aeronáutico', 'gestión de flota', 'sitios web aeronáuticos'],
    },
    visual: { etiqueta: 'Demostración digital', tipo: 'Video o interfaz interactiva' },
    bloques: [
      { titulo: 'Sitios Web Aeronáuticos', descripcion: 'Presencia digital enfocada en confianza y generación de oportunidades.' },
      { titulo: 'Gestión Comercial', descripcion: 'Seguimiento de contactos, cotizaciones y relaciones comerciales.' },
      { titulo: 'Gestión de Flota', descripcion: 'Control de disponibilidad, documentación y operación.' },
      { titulo: 'Software Operativo', descripcion: 'Procesos internos diseñados para cada organización.' },
      { titulo: 'Portales de Clientes', descripcion: 'Acceso ordenado a información, solicitudes y documentos.' },
      { titulo: 'Aplicaciones Empresariales', descripcion: 'Herramientas digitales para equipos técnicos y comerciales.' },
    ],
  },
  {
    id: 'ciclo-de-vida',
    ruta: '/ciclo-de-vida',
    pretitulo: 'Ciclo de Vida',
    titulo: 'Acompañamiento Durante Toda la Vida de la Aeronave',
    subtitulo: 'Desde la adquisición hasta el soporte continuo',
    descripcion: 'Cada etapa se conecta con capacidades comerciales, regulatorias, técnicas y operativas.',
    seo: {
      titulo: 'Ciclo de Vida de una Aeronave | Red Aviation Co.',
      descripcion: 'Servicios para adquisición, inspección, importación, mantenimiento, operación y soporte de aeronaves.',
      palabrasClave: ['ciclo de vida aeronave', 'gestión de aeronaves'],
    },
    visual: { ...visualComun, etiqueta: 'Recorrido visual', tipo: 'Línea temporal interactiva' },
    proceso: ['Adquisición', 'Inspección', 'Importación', 'Mantenimiento', 'Aviónica', 'Motores', 'Partes', 'Operación', 'Soporte continuo'],
  },
  {
    id: 'socios-internacionales',
    ruta: '/socios-internacionales',
    pretitulo: 'Socios Internacionales',
    titulo: 'Una Plataforma para Colaborar y Crecer',
    subtitulo: 'Conexiones comerciales y técnicas para ampliar capacidades',
    descripcion: 'Un punto de encuentro para intermediarios, distribuidores, operadores, talleres, fabricantes e inversionistas.',
    seo: {
      titulo: 'Socios Internacionales de Aviación | Red Aviation Co.',
      descripcion: 'Colaboración con operadores, fabricantes, talleres, distribuidores e inversionistas.',
      palabrasClave: ['alianzas aeronáuticas', 'socios de aviación'],
    },
    visual: { ...visualComun, etiqueta: 'Red de colaboración', tipo: 'Mapa de socios' },
    bloques: [
      { titulo: 'Intermediarios', descripcion: 'Colaboración en oportunidades de compra y venta.' },
      { titulo: 'Distribuidores', descripcion: 'Representación y acceso a productos especializados.' },
      { titulo: 'Operadores', descripcion: 'Soporte comercial, técnico y operativo.' },
      { titulo: 'Talleres', descripcion: 'Capacidades complementarias y atención coordinada.' },
      { titulo: 'Fabricantes', descripcion: 'Representación, soporte y desarrollo de mercado.' },
      { titulo: 'Inversionistas', descripcion: 'Evaluación de oportunidades y activos aeronáuticos.' },
    ],
  },
  {
    id: 'redes-sociales',
    ruta: '/redes-sociales',
    pretitulo: 'Medios y Redes',
    titulo: 'Presencia Digital de Red Aviation',
    subtitulo: 'Noticias, capacidades, proyectos y vida corporativa',
    descripcion: 'Publicaciones, videos, eventos, alianzas y avances que documentan la actividad y capacidad del grupo.',
    seo: {
      titulo: 'Medios y Redes Sociales | Red Aviation Co.',
      descripcion: 'Publicaciones, videos, noticias y galería multimedia de Red Aviation Co.',
      palabrasClave: ['noticias aeronáuticas', 'videos de aviación', 'galería aeronáutica'],
    },
    ocultarMultimedia: true,
    visual: { etiqueta: 'Contenido multimedia', tipo: 'Video, fotografía y publicaciones' },
    bloques: [
      {
        titulo: 'Landing Red Sky G',
        descripcion: 'Acceso directo a la landing comercial institucional para presentar servicios, operación y propuesta de valor.',
        enlace: 'https://redskyg.com/landing/es-mx',
      },
      {
        titulo: 'Sell Your Aircraft',
        descripcion: 'Página especializada para propietarios que desean comercializar su aeronave con acompañamiento estratégico.',
        enlace: 'https://redskyg.com/sellyouraircraft/es-mx',
      },
      {
        titulo: 'LinkedIn',
        descripcion: 'Publicaciones corporativas, alianzas, proyectos, logros y actividad profesional.',
        enlace: 'https://www.linkedin.com/company/redaviationcompany',
      },
      {
        titulo: 'Instagram',
        descripcion: 'Aeronaves, motores, hangares, inspecciones y operaciones de Red Aviation.',
        enlace: 'https://www.instagram.com/redaviationcompany',
      },
      {
        titulo: 'Facebook',
        descripcion: 'Servicios, novedades, comunidad y contenido aeronáutico de la empresa.',
        enlace: 'https://www.facebook.com/RedAviationJets/',
      },
      {
        titulo: 'Videos y contenido',
        descripcion: 'Videos corporativos, operaciones, mantenimiento, proyectos y contenido breve.',
        ruta: '/blog',
      },
     
    ],
  },
]

const contenidoServiciosEspeciales = {
  'taller-motores': {
    visual: {
      etiqueta: 'Capacidad técnica',
      tipo: 'Taller de motores',
      detalle: 'Inspección, diagnóstico, mantenimiento y reparación de motores aeronáuticos.',
      imagen: '/imagenes/servicios/taller-motores/tallermotores.png',
      alt: 'Técnico de Red Aviation realizando mantenimiento a un motor aeronáutico',
    },
    tituloMultimedia: 'Galería multimedia',
    descripcionMultimedia:
      'Observe una muestra visual del trabajo técnico realizado dentro del taller de motores de Red Aviation.',
    multimedia: {
      tipo: 'video',
      fuente: '/imagenes/servicios/taller-motores/c0445.mp4',
      portada: '/imagenes/servicios/taller-motores/tallermotores.png',
      alt: 'Video del taller de motores de Red Aviation',
      duracionMaxima: 7,
      mostrarControles: false,
      silenciado: true,
      reproduccionAutomatica: true,
      repetir: true,
    },
  },
  'taxi-aereo': {
    visual: {
      etiqueta: 'Movilidad privada',
      tipo: 'Taxi aéreo',
      detalle: 'Vuelos privados coordinados con flexibilidad, seguridad y atención personalizada.',
      imagen: '/imagenes/servicios/taxi%20aereo/taxi-aereo.png',
      alt: 'Servicio de taxi aéreo ejecutivo coordinado por Red Aviation',
    },
    etiquetaMultimedia: 'Operaciones de vuelo',
    tituloMultimedia: 'Experiencia de Taxi Aéreo',
    descripcionMultimedia:
      'Movilidad aérea privada diseñada para ejecutivos, empresas y clientes que requieren flexibilidad, privacidad y eficiencia operativa.',
    multimediaDestacada: {
      titulo: 'Operación de Taxi Aéreo Ejecutivo',
      descripcion:
        'Desde la coordinación del vuelo hasta la llegada al destino, cada operación se desarrolla bajo estándares de atención personalizada, seguridad y eficiencia para clientes corporativos y privados.',
      puntos: [
        'Jet ejecutivo en plataforma.',
        'Pasajeros abordando.',
        'Interior de cabina premium.',
        'Encendido de motores.',
        'Rodaje.',
        'Despegue.',
        'Toma aérea en vuelo.',
        'Aterrizaje.',
        'Recepción en plataforma.',
      ],
      ctaTitulo: '¿Necesita una solución de movilidad aérea privada?',
      ctaDescripcion:
        'Coordinamos vuelos ejecutivos adaptados a sus necesidades operativas, empresariales y personales.',
      ctaTexto: 'Solicitar Vuelo Privado',
      ctaRuta: '/cotizador',
      video: {
        tipo: 'video',
        fuente: '/imagenes/servicios/RA1.mp4',
        alt: 'Operación de taxi aéreo ejecutivo de Red Aviation',
        mostrarControles: false,
        silenciado: true,
        reproduccionAutomatica: true,
        repetir: true,
      },
    },
  },
  'administracion-aeronaves': {
    visual: {
      etiqueta: 'Gestión integral',
      tipo: 'Administración de aeronaves',
      detalle: 'Programación de mantenimiento, control de costos, cumplimiento y disponibilidad operativa.',
      imagen: '/imagenes/servicios/Administracion/Administracion.png',
      alt: 'Administración integral de aeronaves ejecutivas por Red Aviation',
    },
    tituloMultimedia: 'Administración de aeronaves en operación',
    descripcionMultimedia:
      'Conozca cómo Red Aviation coordina la administración, el seguimiento operativo y la atención de cada aeronave.',
    multimedia: {
      tipo: 'instagram',
      fuente: 'https://www.instagram.com/reel/DJr3aqWRs-O/embed/',
      enlace: 'https://www.instagram.com/reel/DJr3aqWRs-O/',
      alt: 'Publicación de Red Aviation sobre administración de aeronaves',
    },
  },
  'compra-venta-aeronaves': {
    titulo: 'Jets Ejecutivos en Venta',
    subtitulo: 'Aeronaves seleccionadas para uso corporativo, operaciones privadas y viajes personales',
    descripcion:
      'En Red Aviation ofrecemos una selección exclusiva de jets ejecutivos que combinan confort, rendimiento y confiabilidad. Cada aeronave se presenta con historial de mantenimiento, programas de soporte vigentes y la información necesaria para evaluar su próxima misión.',
    seo: {
      titulo: 'Jets Ejecutivos en Venta | Red Aviation Company',
      descripcion:
        'Conozca jets ejecutivos en venta con historial de mantenimiento, programas de soporte y acompañamiento durante evaluación, negociación y cierre.',
      palabrasClave: ['jets ejecutivos en venta', 'compra de aeronaves', 'venta de jets privados'],
    },
    visual: {
      etiqueta: 'Representación comercial',
      tipo: 'Jets ejecutivos en venta',
      detalle: 'Aeronaves seleccionadas y representadas mediante un proceso comercial estructurado.',
      imagen: '/imagenes/servicios/Compra-venta/Compraventa.png',
      alt: 'Jet ejecutivo en venta representado por Red Aviation',
    },
    tituloMultimedia: 'Jets ejecutivos en venta',
    descripcionMultimedia:
      'Conozca una muestra de las aeronaves que Red Aviation presenta y representa comercialmente.',
    multimedia: {
      tipo: 'instagram',
      fuente: 'https://www.instagram.com/reel/DNOqXENxHCp/embed/',
      enlace: 'https://www.instagram.com/reel/DNOqXENxHCp/',
      alt: 'Publicación de Red Aviation sobre jets ejecutivos en venta',
    },
    bloques: [
      {
        titulo: 'Selección de Aeronaves',
        descripcion:
          'Evaluamos configuración, rendimiento, condición técnica e historial para presentar opciones acordes con cada misión.',
      },
      {
        titulo: 'Revisión Documental',
        descripcion:
          'Verificamos registros de mantenimiento, programas de soporte y documentación relevante antes de avanzar.',
      },
      {
        titulo: 'Representación Comercial',
        descripcion:
          'Acompañamos valuación, negociación, revisión integral y cierre de la operación.',
      },
    ],
  },
  'inspecciones-precompra': {
    titulo: 'Inspección Precompra',
    subtitulo: 'Certeza técnica y documental antes de adquirir una aeronave',
    descripcion:
      'Revisamos la condición de la aeronave, sus registros y antecedentes de mantenimiento para identificar riesgos y respaldar una decisión informada.',
    seo: {
      titulo: 'Inspección Precompra de Aeronaves | Red Aviation Company',
      descripcion:
        'Inspección técnica y documental de aeronaves antes de la compra, con revisión de condición, registros de mantenimiento y hallazgos.',
      palabrasClave: ['inspección precompra de aeronaves', 'revisión técnica de jets', 'evaluación de aeronaves'],
    },
    visual: {
      etiqueta: 'Evaluación técnica',
      tipo: 'Inspección precompra',
      detalle: 'Revisión documental, inspección técnica y análisis de registros antes de adquirir una aeronave.',
      imagen: '/imagenes/servicios/inspeccionprecompra/inspeccionprecompra.png',
      alt: 'Técnico de Red Aviation realizando una inspección precompra en una aeronave ejecutiva',
    },
    tituloMultimedia: 'Inspección precompra en operación',
    descripcionMultimedia:
      'Observe parte del proceso técnico utilizado para revisar una aeronave antes de concretar su adquisición.',
    multimedia: {
      tipo: 'instagram',
      fuente: 'https://www.instagram.com/reel/DNEgbSDxS24/embed/',
      enlace: 'https://www.instagram.com/reel/DNEgbSDxS24/',
      alt: 'Publicación de Red Aviation sobre inspección precompra de aeronaves',
    },
    bloques: [
      {
        titulo: 'Condición Técnica',
        descripcion:
          'Inspeccionamos estructura, sistemas, motores, componentes y estado general conforme al alcance acordado.',
      },
      {
        titulo: 'Registros y Programas',
        descripcion:
          'Revisamos bitácoras, historial de mantenimiento, cumplimiento y programas de soporte aplicables.',
      },
      {
        titulo: 'Reporte de Hallazgos',
        descripcion:
          'Presentamos observaciones relevantes para apoyar la negociación y reducir riesgos antes del cierre.',
      },
    ],
  },
  'mantenimiento-militar': {
    subtitulo: 'Soporte técnico y coordinación para aeronaves de misión especial',
    descripcion:
      'Capacidades técnicas para inspección, soporte y coordinación operativa de aeronaves de misión especial con criterio documental, técnico y de disponibilidad.',
    seo: {
      titulo: 'Mantenimiento Militar | Red Aviation Co.',
      descripcion:
        'Soporte, inspección y coordinación para aeronaves de misión especial bajo criterios técnicos y operativos.',
      palabrasClave: ['mantenimiento militar', 'aeronaves de misión especial', 'soporte técnico aeronáutico'],
    },
    ocultarVisual: true,
    visual: {
      etiqueta: 'Capacidad tecnica especializada',
      tipo: 'Soporte para aeronaves de mision especial',
      detalle:
        'Soporte, inspeccion y coordinacion para aeronaves de mision especial bajo criterios tecnicos y operativos.',
      alt: 'Tecnico aeronautico inspeccionando una aeronave de mision especial dentro de hangar',
    },
    bloques: [
      {
        titulo: 'Instalaciones',
        descripcion:
          'Hangar, plataforma y zonas tecnicas preparadas para recibir aeronaves de operacion especial con orden documental y supervision profesional.',
      },
      {
        titulo: 'Procesos',
        descripcion:
          'Inspeccion, revision de componentes, seguimiento documental y supervision tecnica orientados a mantener trazabilidad y control operativo.',
      },
      {
        titulo: 'Aeronaves',
        descripcion:
          'Atencion a aeronaves militares o de mision especial con enfoque en disponibilidad, condicion tecnica y continuidad de servicio.',
      },
    ],
    galeriaTitulo: 'Galeria multimedia de mantenimiento militar',
    galeriaDescripcion:
      'Contenido visual real de instalaciones, procesos y aeronaves vinculadas a operaciones de soporte especializado y mision especial.',
    galeria: [
      {
        fuente: '/imagenes/servicios/FOTOS MILITAR/Militar1.png',
        alt: 'Tecnico inspeccionando una aeronave dentro de hangar militar',
        titulo: 'Instalaciones',
        descripcion: 'Hangar, taller y entorno tecnico preparados para operaciones de soporte especializado.',
      },
      {
        fuente: '/imagenes/servicios/FOTOS MILITAR/Militar2.png',
        alt: 'Proceso de inspeccion y supervision tecnica en aeronave de mision especial',
        titulo: 'Procesos',
        descripcion: 'Inspeccion, documentacion, revision de componentes y supervision tecnica en campo.',
      },
      {
        fuente: '/imagenes/servicios/FOTOS MILITAR/Militar3.png',
        alt: 'Aeronave de mision especial en plataforma operativa',
        titulo: 'Aeronaves',
        descripcion: 'Aeronaves militares o de mision especial en plataforma y entorno operativo.',
      },
    ],
  },
}

export const serviciosIndividuales = [
  ['compra-venta-aeronaves', 'Compra y Venta de Aeronaves', 'Asesoría para localizar, evaluar, negociar y comercializar aeronaves.'],
  ['administracion-aeronaves', 'Administración de Aeronaves', 'Coordinación operativa, documental y financiera para propietarios.'],
  ['inspecciones-precompra', 'Inspecciones Precompra', 'Evaluación técnica y documental antes de concretar una adquisición.'],
  ['importaciones-exportaciones', 'Importaciones y Exportaciones', 'Acompañamiento documental y logístico para movimientos internacionales.'],
  ['taxi-aereo', 'Taxi Aéreo', 'Movilidad aérea flexible para necesidades corporativas y particulares.'],
  ['ambulancia-aerea', 'Ambulancia Aérea', 'Coordinación de traslados médicos aéreos con atención especializada.'],
  ['carga-aerea', 'Carga Aérea', 'Soluciones para el traslado oportuno de mercancías y componentes.'],
  ['venta-partes', 'Venta de Partes', 'Suministro y localización de partes y componentes aeronáuticos.'],
  ['taller-motores', 'Taller de Motores', 'Diagnóstico, inspección, mantenimiento y revisión de motores de turbina.'],
  ['mantenimiento-militar', 'Mantenimiento Militar', 'Capacidades técnicas para programas y aeronaves de misión especial.'],
  ['avionica-componentes-instrumentos', 'Aviónica, Componentes e Instrumentos', 'Instalación, actualización y soporte de sistemas aeronáuticos.'],
].map(([id, titulo, descripcion]) => {
  const contenidoEspecial = contenidoServiciosEspeciales[id] ?? {}

  return {
    id,
    ruta: `/servicios/${id}`,
    pretitulo: 'Servicio de Aviación',
    titulo,
    subtitulo: 'Atención especializada con acompañamiento técnico y comercial',
    descripcion,
    seo: {
      titulo: `${titulo} | Red Aviation Co.`,
      descripcion,
      palabrasClave: [titulo.toLowerCase(), 'servicios aeronáuticos'],
    },
    ocultarVisual: id === 'mantenimiento-militar',
    visual: { etiqueta: 'Capacidad especializada', tipo: 'Representación visual del servicio' },
    bloques: [
      { titulo: 'Alcance', descripcion: 'El mandato se define conforme al activo, los objetivos del cliente y las condiciones de la operación.' },
      { titulo: 'Proceso', descripcion: 'Cada etapa se coordina con control documental, seguimiento especializado y comunicación confidencial.' },
      { titulo: 'Ventajas', descripcion: 'Una sola firma articula criterio comercial, conocimiento técnico y capacidad de respuesta.' },
    ],
    ...contenidoEspecial,
  }
})

export const carruselEmpresas = [
  {
    etiqueta: 'Aviónica e interiores',
    titulo: 'GESA',
    descripcion: 'Servicios especializados en , trenes de aterrizaje, frenos, vestiduras e interiores, venta de partes y rotables.',
    ruta: '/gesa',
    imagen: '/imagenes/LOGOS/Logo%20GESA.png',
    alt: 'Logotipo de GESA',
    ajuste: 'contener',
  },
  {
    etiqueta: 'Estructuras',
    titulo: 'Cesa',
    descripcion: 'Alta especialización en avionics solutions, desarrollo e innovación en sistemas digitales, mantenimiento a planeador, documentación e ingeniería.',
    ruta: '/cesa',
    imagen: '/imagenes/LOGOS/Logo%20CESA.png',
    alt: 'Logotipo de CESA',
    ajuste: 'contener',
  },
  {
    etiqueta: 'Motores',
    titulo: 'Excel Turbines',
    descripcion: 'Diagnóstico, inspección y revisión de motores.',
    ruta: '/excel-turbines',
    imagen: '/imagenes/LOGOS/Logo%20EXCEL.png',
    alt: 'Logotipo de Excel Turbines de México',
    ajuste: 'contener',
  },
  {
    etiqueta: 'Comercial',
    titulo: 'Sky group',
    descripcion: 'Adquisicion, venta, corretaje y administración de aeronaves',
    ctaTexto: 'Conoce mas',
    ruta: '/sky-group',
    imagen: '/imagenes/LOGOS/Logo%20SKYGROUP.png',
    alt: 'Logotipo de Sky Group',
    ajuste: 'contener',
  },
]

export const carruselMultimedia = [
  {
    etiqueta: 'Instalaciones',
    titulo: '',
    descripcion: 'Capacidad técnica, hangares, herramientas especializadas y equipos operativos que respaldan la ejecución técnica, comercial y documental de cada mandato. ',
    imagen: '/imagenes/inicio/iniciohangar.png',
    alt: 'Aeronaves ejecutivas dentro de un hangar de mantenimiento',
  },
  {
    etiqueta: 'Operaciones',
    titulo: 'Proyectos en Curso',
    descripcion: 'Intervenciones, inspecciones y procesos coordinados por equipos especializados.',
    imagen: '/imagenes/inicio/proyectos-inicio.png',
    alt: 'Técnico realizando una intervención en una aeronave',
  },
  {
    etiqueta: 'Corporativo',
    titulo: 'Noticias y Eventos',
    descripcion: 'Alianzas, eventos y capacidades que fortalecen nuestra presencia en el mercado.',
    imagen: '/imagenes/inicio/noticias.png',
    alt: 'Aeronave ejecutiva dentro de un hangar',
  },
]
