import { MiniAppIdea } from '../types';

export const EXTRA_IDEAS: MiniAppIdea[] = [
  // ==========================================
  // CONTABILIDAD & FISCAL (NIVEL 2)
  // ==========================================
  {
    id: 'declarafacil-fisc',
    nivel: 'Nivel 2',
    categoria: 'Contabilidad & Fiscal',
    iconoCategoria: '📊',
    nombre: 'DeclaraFácil Autónomos',
    descripcionCorta: 'Previsión trimestral de impuestos (IVA e IRPF) para evitar sorpresas y saber cuánto dinero reservar cada mes.',
    queEs: 'Simulador fiscal para trabajadores independientes que calcula las retenciones y pagos a cuenta en tiempo real.',
    problema: 'Llegar al cierre de trimestre y no tener liquidez suficiente para pagar los impuestos acumulados.',
    comoFunciona: 'Registras tus facturas emitidas y recibidas; la app te indica el monto exacto a guardar en tu cuenta de ahorros para el fisco.',
    publicoObjetivo: 'Autónomos, consultores y prestadores de servicios.',
    funcionesPrincipales: ['Cálculo automático de IVA repercutido vs soportado', 'Estimación de tramo de impuesto a la renta', 'Exportación de libros de ingresos y gastos'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$12 - $25 USD/mes',
    tags: ['impuestos', 'iva', 'autonomos', 'fiscal', 'contabilidad']
  },
  {
    id: 'conciliapro-fisc',
    nivel: 'Nivel 2',
    categoria: 'Contabilidad & Fiscal',
    iconoCategoria: '📊',
    nombre: 'ConciliaPro Facturas',
    descripcionCorta: 'Emparejamiento automático de movimientos bancarios con facturas y tickets escaneados mediante OCR.',
    queEs: 'Software de conciliación bancaria para pequeñas empresas y despachos contables.',
    problema: 'Perder horas comparando líneas de extractos bancarios contra recibos en papel.',
    comoFunciona: 'Subes el extracto bancario en Excel/CSV y las fotos de facturas; el sistema hace match por importe y fecha automáticamente.',
    publicoObjetivo: 'Despachos contables, pymes y comercios.',
    funcionesPrincipales: ['Lector OCR de facturas y tickets', 'Detección automática de duplicados o faltantes', 'Reporte de discrepancias bancarias'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$29 - $69 USD/mes',
    tags: ['conciliacion', 'bancos', 'facturas', 'contabilidad']
  },

  // ==========================================
  // CREADORES DE CONTENIDO (NIVEL 2)
  // ==========================================
  {
    id: 'clipviral-crea',
    nivel: 'Nivel 2',
    categoria: 'Creadores de Contenido',
    iconoCategoria: '🎥',
    nombre: 'ClipViral AI Repurposing',
    descripcionCorta: 'Convierte videos largos de YouTube y podcasts en 10 shorts y reels con subtítulos animados y encuadre automático.',
    queEs: 'Herramienta de reutilización de contenido audiovisual que detecta los momentos más entretenidos de un video largo.',
    problema: 'Editar manualmente clips verticales de un podcast de 1 hora toma entre 4 y 6 horas de trabajo.',
    comoFunciona: 'Pegas el link del video; la IA identifica las mejores anécdotas, recorta a formato 9:16 y genera subtítulos estilo Hormozi.',
    publicoObjetivo: 'Podcasters, streamers, youtubers y agencias de medios.',
    funcionesPrincipales: ['Detección de momentos virales por tono y picos de voz', 'Subtítulos animados con emojis dinámicos', 'Plantillas de encuadre multi-orador'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$29 - $79 USD/mes',
    tags: ['podcast', 'shorts', 'reels', 'subtitulos', 'video']
  },
  {
    id: 'linkbiomaster-crea',
    nivel: 'Nivel 2',
    categoria: 'Creadores de Contenido',
    iconoCategoria: '🎥',
    nombre: 'LinkBioMaster',
    descripcionCorta: 'Página de biografía ultrarrápida para redes sociales con tienda integrada, venta de archivos y captura de suscriptores.',
    queEs: 'Alternativa profesional a Linktree que permite vender productos digitales y cobrar directamente sin salir de la página.',
    problema: 'Las páginas de bio tradicionales solo muestran botones simples y pierden conversiones al enviar al usuario a webs externas.',
    comoFunciona: 'Personalizas tu página con tus colores y enlaces; integras tu pasarela de cobro para vender ebooks y asesorías en 1 toque.',
    publicoObjetivo: 'Influencers, creadores de TikTok e Instagram, artistas y formadores.',
    funcionesPrincipales: ['Venta 1-click de PDFs y asesorías', 'Captura de correos y WhatsApp integrada', 'Carga ultrarrápida en menos de 0.8 segundos'],
    modeloMonetizacion: 'Freemium',
    rangoPrecio: '$9 USD/mes plan pro',
    tags: ['linkinbio', 'linktree', 'creadores', 'tienda', 'redessociales']
  },

  // ==========================================
  // EVENTOS & FIESTAS (NIVEL 2)
  // ==========================================
  {
    id: 'rsvpdirecto-event',
    nivel: 'Nivel 2',
    categoria: 'Eventos & Fiestas',
    iconoCategoria: '🎉',
    nombre: 'RSVPDirecto Bodas y Fiestas',
    descripcionCorta: 'Confirmación digital de asistencia a bodas y eventos vía WhatsApp con elección de menú y restricciones alimentarias.',
    queEs: 'Plataforma para novios y organizadores de eventos que centraliza las confirmaciones de invitados en tiempo real.',
    problema: 'Llamar a 150 invitados uno por uno para saber si asistirán y qué plato cenarán genera estrés semanas antes de la boda.',
    comoFunciona: 'Los novios envían la invitación digital con código QR; el invitado confirma en 30 segundos indicando alergias y acompañantes.',
    publicoObjetivo: 'Novios organizando su boda, wedding planners y empresas de eventos corporativos.',
    funcionesPrincipales: ['Lista de invitados con estado en tiempo real', 'Gestión de mesas y planos de salón', 'Exportación de resumen de menús para el catering'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$29 USD por evento / $89 suscripción para wedding planners',
    tags: ['bodas', 'eventos', 'rsvp', 'invitaciones', 'catering']
  },
  {
    id: 'buffetsmart-event',
    nivel: 'Nivel 2',
    categoria: 'Eventos & Fiestas',
    iconoCategoria: '🎉',
    nombre: 'BuffetSmart Calculador de Bebidas y Comida',
    descripcionCorta: 'Calcula litros exactos de cerveza, vino, refrescos y kilos de carne según el tipo de fiesta y duración.',
    queEs: 'Herramienta de cálculo para banquetes y fiestas que evita comprar de más o quedarse sin bebidas a mitad de la noche.',
    problema: 'Quedarse sin hielo o alcohol a las 11 PM arruina la fiesta, o gastar el doble de presupuesto por comprar a ciegas.',
    comoFunciona: 'Ingresas número de adultos, niños, duración de la fiesta y preferencias de alcohol; entrega la lista de compras exacta con presupuesto.',
    publicoObjetivo: 'Organizadores de fiestas caseras, empresas de catering y graduaciones.',
    funcionesPrincipales: ['Cálculo de hielo, bebidas y porciones de comida', 'Generador de presupuesto por rubro', 'Lista de compras para supermercados mayoristas'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$14 USD',
    tags: ['fiestas', 'bebidas', 'catering', 'eventos', 'calculadora']
  },

  // ==========================================
  // FITNESS & PERSONAL (NIVEL 2)
  // ==========================================
  {
    id: 'treinofitsaas-fit',
    nivel: 'Nivel 2',
    categoria: 'Fitness & Personal',
    iconoCategoria: '🏋️',
    nombre: 'TreinoFit Coach App',
    descripcionCorta: 'Software para entrenadores personales: creación de rutinas en video, registro de cargas y cobro de asesorías.',
    queEs: 'Aplicación donde el entrenador envía el entrenamiento semanal a sus alumnos y ellos registran sus pesos y repeticiones.',
    problema: 'Enviar rutinas en hojas de Word o PDFs por WhatsApp donde no se puede ver si el alumno está progresando en cargas.',
    comoFunciona: 'El coach arma la rutina arrastrando ejercicios de la biblioteca; el alumno abre su app en el gimnasio y marca sus marcas.',
    publicoObjetivo: 'Entrenadores personales, coaches online y centros de entrenamiento funcional.',
    funcionesPrincipales: ['Biblioteca con más de 300 videos de técnica', 'Gráficos de progresión de cargas y volumen', 'Cobro mensual recurrente integrado'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$25 - $75 USD/mes por entrenador',
    tags: ['entrenadorpersonal', 'fitness', 'gimnasio', 'rutinas', 'coach']
  },

  // ==========================================
  // FREELANCERS & AGENCIAS (NIVEL 2)
  // ==========================================
  {
    id: 'propostafechada-free',
    nivel: 'Nivel 2',
    categoria: 'Freelancers & Agencias',
    iconoCategoria: '🧑‍💻',
    nombre: 'PropostaFechada',
    descripcionCorta: 'Propuestas comerciales interactivas en web con desglose de servicios, opciones de paquetes y firma digital.',
    queEs: 'Creador de propuestas de servicios de alto impacto que reemplaza los aburridos presupuestos en PDF estáticos.',
    problema: 'Enviar presupuestos genéricos que los clientes no leen y que tardan semanas en recibir respuesta.',
    comoFunciona: 'Creas una propuesta visual con 3 paquetes (Básico, Recomendado, Premium); el cliente selecciona su opción y firma en la pantalla.',
    publicoObjetivo: 'Agencias de marketing, diseñadores web, consultores y productoras audiovisuales.',
    funcionesPrincipales: ['Notificación instantánea cuando el cliente abre la propuesta', 'Selector interactivo de complementos (add-ons)', 'Firma digital con validez de contrato'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$19 - $49 USD/mes',
    tags: ['propuestas', 'ventas', 'freelancers', 'agencias', 'presupuestos']
  },

  // ==========================================
  // IA & AUTOMATIZACIÓN (NIVEL 2)
  // ==========================================
  {
    id: 'promptvault-ia',
    nivel: 'Nivel 2',
    categoria: 'IA & Automatización',
    iconoCategoria: '🤖',
    nombre: 'PromptVault Teams',
    descripcionCorta: 'Biblioteca privada de prompts de IA probados y optimizados para equipos de marketing, ventas y programación.',
    queEs: 'Gestor de prompts colaborativo para estandarizar el uso de ChatGPT y Claude en toda la empresa.',
    problema: 'Cada empleado usa prompts mediocres y obtiene respuestas inconsistentes de baja calidad de la IA.',
    comoFunciona: 'Los miembros del equipo acceden a los prompts corporativos con variables rellenables (ej. {cliente}, {producto}) y copian el resultado.',
    publicoObjetivo: 'Agencias, equipos de marketing y empresas que usan herramientas de IA generativa.',
    funcionesPrincipales: ['Variables dinámicas en prompts con un formulario simple', 'Control de versiones y etiquetas por departamento', 'Extensión de navegador para acceso directo'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$15 - $45 USD/mes por equipo',
    tags: ['prompts', 'ia', 'chatgpt', 'productividad', 'equipos']
  },
  {
    id: 'docuparser-ia',
    nivel: 'Nivel 2',
    categoria: 'IA & Automatización',
    iconoCategoria: '🤖',
    nombre: 'DocuParser AI',
    descripcionCorta: 'Extracción automática de datos estructurados desde PDFs, contratos y facturas hacia hojas de Google Sheets.',
    queEs: 'Extractor inteligente de información que procesa documentos escaneados y llena bases de datos sin intervención manual.',
    problema: 'Tener a personas transcribiendo a mano datos de miles de documentos y tablas.',
    comoFunciona: 'Defines qué campos necesitas (ej. Número de contrato, Fecha, Monto, RUT); subes los archivos y la IA exporta la tabla en segundos.',
    publicoObjetivo: 'Empresas de logística, estudios contables, aseguradoras e inmobiliarias.',
    funcionesPrincipales: ['Procesamiento masivo de documentos por lotes', 'Exportación directa a Google Sheets, CSV y webhooks', 'Precisión de extracción superior al 98%'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$39 - $120 USD/mes',
    tags: ['ocr', 'pdf', 'extraccion', 'ia', 'documentos']
  },

  // ==========================================
  // JURÍDICO & ABOGACÍA (NIVEL 2)
  // ==========================================
  {
    id: 'prazolegal-jur',
    nivel: 'Nivel 2',
    categoria: 'Jurídico & Abogacía',
    iconoCategoria: '⚖️',
    nombre: 'PrazoLegal Calculadora de Plazos Procesales',
    descripcionCorta: 'Calcula con precisión fechas límite de apelaciones y recursos según el código procesal y días inhábiles judiciales.',
    queEs: 'Calendario especializado para abogados que calcula plazos fatales contemplando feriados locales y suspensiones de tribunales.',
    problema: 'Perder un juicio por equivocarse en un día al contar plazos procesales inhábiles.',
    comoFunciona: 'Ingresas la fecha de notificación y el tipo de recurso; calcula la fecha fatal exacta de presentación con margen de seguridad.',
    publicoObjetivo: 'Abogados litigantes, despachos jurídicos y procuradores.',
    funcionesPrincipales: ['Base de datos de feriados judiciales y días no laborables', 'Alertas por correo y WhatsApp 48 horas antes del vencimiento', 'Registro histórico de plazos calculados'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$19 - $49 USD/mes',
    tags: ['abogados', 'legal', 'plazos', 'tribunales', 'derecho']
  },

  // ==========================================
  // LOGÍSTICA & ENTREGAS (NIVEL 2)
  // ==========================================
  {
    id: 'rotaexpress-log',
    nivel: 'Nivel 2',
    categoria: 'Logística & Entregas',
    iconoCategoria: '🚚',
    nombre: 'RotaExpress Optimizador de Rutas',
    descripcionCorta: 'Ordena hasta 50 direcciones de entrega en la ruta más rápida para ahorrar hasta 30% en combustible y tiempo.',
    queEs: 'Planificador de trayectos para repartidores y transportistas que calcula el orden óptimo de paradas en el mapa.',
    problema: 'Repartidores dando vueltas en círculos por la ciudad perdiendo horas en el tráfico y gastando combustible de más.',
    comoFunciona: 'Pegas la lista de direcciones o subes un Excel; el algoritmo calcula el circuito más eficiente y lo envía a Google Maps/Waze.',
    publicoObjetivo: 'Comercios locales con delivery propio, mensajerías y empresas de distribución.',
    funcionesPrincipales: ['Optimización de rutas con múltiples paradas', 'Exportación directa a la app del chofer', 'Cálculo estimado de kilómetros y costo de combustible'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$19 - $59 USD/mes',
    tags: ['rutas', 'logistica', 'delivery', 'reparto', 'transporte']
  },

  // ==========================================
  // PET SHOPS & VETERINARIOS (NIVEL 2)
  // ==========================================
  {
    id: 'banhotosapro-pet',
    nivel: 'Nivel 2',
    categoria: 'Pet Shops & Veterinarios',
    iconoCategoria: '🐕',
    nombre: 'BanhoTosaPro Agenda de Peluquería Canina',
    descripcionCorta: 'Gestión de turnos de baño y corte, ficha de comportamiento de la mascota y aviso automático de recogida.',
    queEs: 'Sistema de reservas y control para estéticas caninas y pet shops.',
    problema: 'Perros esperando horas en jaulas porque los dueños no saben cuándo termina el servicio, y colapso de turnos en sábados.',
    comoFunciona: 'El cliente reserva su turno; al terminar el secado, el peluquero pulsa un botón y se envía el mensaje: "¡Firulais está listo y perfumado!".',
    publicoObjetivo: 'Peluquerías caninas, pet shops y guarderías de mascotas.',
    funcionesPrincipales: ['Aviso automático "Tu mascota está lista" por WhatsApp', 'Ficha con tipo de corte, alergias y temperamento del perro', 'Control de comisiones de los estilistas'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$19 - $49 USD/mes',
    tags: ['petshop', 'peluqueriacanina', 'perros', 'veterinaria', 'mascotas']
  },

  // ==========================================
  // SALONES & ESTÉTICA (NIVEL 2)
  // ==========================================
  {
    id: 'agendabelleza-salon',
    nivel: 'Nivel 2',
    categoria: 'Salones & Estética',
    iconoCategoria: '💇',
    nombre: 'AgendaBelleza Salones y Spas',
    descripcionCorta: 'Agendamiento online para peluquerías, manicura y barberías con control de comisiones por profesional.',
    queEs: 'Plataforma para que los clientes elijan su profesional favorito y reserven servicios de uñas, cabello y pestañas 24/7.',
    problema: 'Tener a las estilistas interrumpiendo su trabajo para contestar llamadas telefónicas de reservas.',
    comoFunciona: 'El salón coloca su link de reservas en Instagram; los clientes eligen estilista y horario; el sistema envía recordatorios automáticos.',
    publicoObjetivo: 'Barberías, salones de manicura, centros de estética y peluquerías.',
    funcionesPrincipales: ['Cálculo automático de comisiones de cada empleado', 'Recordatorios por WhatsApp anti-olvidos', 'Bloqueo de clientes con historial de inasistencia'],
    modeloMonetizacion: 'Suscripción',
    rangoPrecio: '$25 - $65 USD/mes',
    tags: ['salon', 'barberia', 'belleza', 'estilistas', 'agendamiento']
  }
];
