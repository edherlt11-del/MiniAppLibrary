import { MiniAppIdea } from '../types';

export const MORE_IDEAS: MiniAppIdea[] = [
  {
    id: 'voltacarrinho-ecom',
    nivel: 'Nivel 2',
    categoria: 'E-commerce',
    iconoCategoria: '🛒',
    nombre: 'VoltaCarrinho AI',
    descripcionCorta: 'Recupera carritos abandonados en Shopify/WooCommerce mediante mensajes personalizados de WhatsApp con IA.',
    monetizacionTipo: 'Suscripción',
    rangoPrecio: '$29 - $79 USD/mes + 2% comisión éxito',
    dificultad: 'Media',
    score: {
      total: 96,
      demanda: 99,
      problema: 98,
      facilidadConstruccion: 83,
      potencialPago: 97,
      potencialSuscripcion: 98,
      potencialIA: 94,
      facilidadVenta: 97,
      analisisBreve: 'El 70% de los carritos de e-commerce se abandonan. El email solo recupera el 5%; WhatsApp con IA recupera hasta el 25%.'
    },
    problema: 'Las tiendas online gastan miles de dólares en anuncios de Meta/Google para atraer compradores, pero 7 de cada 10 usuarios abandonan la compra en el checkout por dudas con el envío, desconfianza o falta de tiempo.',
    solucion: 'Una herramienta que detecta el abandono a los 15 minutos y envía un mensaje personalizado a WhatsApp ofreciendo resolver dudas, validar métodos de pago o dar un cupón de descuento con fecha límite.',
    publicoObjetivo: 'Tiendas de Shopify, WooCommerce, Tiendanube y marcas de venta directa.',
    comoFunciona: [
      'Se conecta la tienda online mediante webhook en 2 clics.',
      'Cuando un usuario deja su teléfono y no completa el pago, se activa la secuencia.',
      'La IA redacta un mensaje amigable mencionando los productos exactos que dejó en el carrito.',
      'El cliente puede responder dudas directamente ("¿Tienen cuotas sin tarjeta?") y la IA le responde.',
      'El enlace directo lo lleva al checkout con los datos precargados y descuento aplicado.'
    ],
    funcionesPrincipales: [
      'Disparador inteligente con retardo configurable (15 min, 1 hora, 24 horas)',
      'Generador de mensajes dinámicos con foto del producto y nombre del cliente',
      'Calculadora de ROI en vivo: muestra cuántos miles de dólares se han recuperado',
      'Integración con botones de WhatsApp oficiales y webhooks'
    ],
    mvp: [
      'Panel de carritos abandonados sincronizados',
      'Plantilla de mensaje de reactivación con enlace de retorno al checkout',
      'Métrica de tasa de recuperación y dinero recuperado'
    ],
    despuesPuedesAnadir: [
      'Agente de IA que negocia descuentos especiales en tiempo real',
      'Soporte para envíos internacionales y cálculo de aranceles'
    ],
    blueprint: {
      objetivo: 'Recuperar dinero que las tiendas ya consideraban perdido mediante un canal de alta apertura como WhatsApp.',
      usuario: 'Dueños de marcas de e-commerce y directores de marketing digital.',
      funcionesMvp: [
        'Registro de carritos perdidos',
        'Generador de mensajes de WhatsApp preformateados',
        'Dashboard de ingresos recuperados',
        'Configuración de cupones de incentivo'
      ],
      pantallas: [
        { nombre: 'Dashboard de Recuperación', descripcion: 'Ventas recuperadas vs carritos perdidos' },
        { nombre: 'Lista de Carritos', descripcion: 'Clientes pendientes con botón de contacto y monto' },
        { nombre: 'Editor de Mensajes IA', descripcion: 'Configurador de tono y tiempos de disparo' }
      ],
      flujo: [
        '1. Conectar tienda',
        '2. Activar mensaje automático',
        '3. Cliente recibe mensaje y compra',
        '4. Tienda ve el dinero recuperado'
      ],
      monetizacion: '$39 USD/mes base + 2% sobre las ventas efectivamente recuperadas.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'Express + Webhook listener de Shopify/WooCommerce',
        ia: 'Gemini 3.8 Flash para redactar copys persuasivos adaptados a cada producto',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  },
  {
    id: 'notaleve-contable',
    nivel: 'Nivel 2',
    categoria: 'Contabilidad & Fiscal',
    iconoCategoria: '💰',
    nombre: 'NotaLeve',
    descripcionCorta: 'Emite y envía facturas electrónicas a tus clientes por WhatsApp en 3 toques desde tu teléfono.',
    monetizacionTipo: 'Suscripción',
    rangoPrecio: '$15 - $29 USD/mes',
    dificultad: 'Media',
    score: {
      total: 94,
      demanda: 97,
      problema: 96,
      facilidadConstruccion: 85,
      potencialPago: 95,
      potencialSuscripcion: 97,
      potencialIA: 82,
      facilidadVenta: 95,
      analisisBreve: 'Los portales tributarios del gobierno son lentos, engorrosos y fallan en teléfonos móviles.'
    },
    problema: 'Los prestadores de servicios, técnicos y comerciantes tienen que entrar a sistemas gubernamentales complejos o abrir la laptop para emitir una simple factura o recibo, demorando horas.',
    solucion: 'Una interfaz móvil que guarda tus clientes habituales, calcula impuestos automáticamente y emite el comprobante fiscal en PDF enviándolo por WhatsApp en 10 segundos.',
    publicoObjetivo: 'Plomeros, electricistas, consultores, diseñadores, médicos y pequeños comerciantes.',
    comoFunciona: [
      'El usuario selecciona el cliente de su libreta o escribe su número de identificación fiscal.',
      'Tipea el concepto y el monto.',
      'La app calcula retenciones, impuestos y total.',
      'Genera el PDF timbrado/oficial con código QR de verificación.',
      'Abre WhatsApp con el archivo adjunto listo para enviar al cliente.'
    ],
    funcionesPrincipales: [
      'Emisión móvil en 3 pasos con autocompletado inteligente',
      'Envío directo por WhatsApp con mensaje cordial',
      'Resumen mensual de facturación para el contador con exportación en Excel',
      'Control de facturas cobradas vs facturas pendientes de pago'
    ],
    mvp: [
      'Formulario ultra-rápido de emisión (Cliente, Servicio, Monto)',
      'Generador de PDF profesional con datos fiscales',
      'Historial de facturas emitidas con estado de pago'
    ],
    despuesPuedesAnadir: [
      'Recordatorio automático de cobranza para facturas impagas',
      'Conexión directa con la API de Hacienda / SAT / AFIP / SII según el país'
    ],
    blueprint: {
      objetivo: 'Hacer que emitir una factura sea tan fácil y rápido como enviar una foto por WhatsApp.',
      usuario: 'Trabajadores independientes y pequeños proveedores de servicios.',
      funcionesMvp: [
        'Directorio de clientes frecuentes',
        'Generador de comprobantes en PDF con formato oficial',
        'Cálculo de impuestos automático',
        'Botón de compartir a WhatsApp'
      ],
      pantallas: [
        { nombre: 'Nueva Factura', descripcion: 'Formulario de una sola pantalla con cálculo en vivo' },
        { nombre: 'Historial y Cobranzas', descripcion: 'Listado de facturas emitidas con badge de "Pagada" o "Pendiente"' },
        { nombre: 'Libreta de Clientes', descripcion: 'Datos fiscales guardados de clientes recurrentes' }
      ],
      flujo: [
        '1. Elegir cliente guardado',
        '2. Poner monto',
        '3. Clic en "Emitir y Enviar por WhatsApp"',
        '4. Factura entregada al cliente'
      ],
      monetizacion: '10 facturas gratis al mes; $15/mes por facturación ilimitada.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'Express + generador de PDFs estructurado',
        ia: 'Gemini para extraer datos fiscales de una foto de la cédula o tarjeta del cliente',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  },
  {
    id: 'guiontiktok-creator',
    nivel: 'Nivel 1',
    categoria: 'Creadores de Contenido',
    iconoCategoria: '🎥',
    nombre: 'GuiónViral AI',
    descripcionCorta: 'Genera ganchos de 3 segundos y guiones completos para TikTok y Reels basados en estructuras virales probadas.',
    monetizacionTipo: 'Pago único',
    rangoPrecio: '$17 - $35 USD',
    dificultad: 'Rápida',
    score: {
      total: 93,
      demanda: 97,
      problema: 94,
      facilidadConstruccion: 92,
      potencialPago: 88,
      potencialSuscripcion: 79,
      potencialIA: 98,
      facilidadVenta: 95,
      analisisBreve: 'Los creadores de contenido sufren del síndrome de la hoja en blanco al intentar grabar videos cortos a diario.'
    },
    problema: 'El 90% de los videos en TikTok y Reels fracasan en los primeros 3 segundos porque el gancho no detiene el scroll o el guión es demasiado lento y aburrido.',
    solucion: 'Una herramienta que toma tu tema o producto y te genera 5 ganchos visuales/verbales hipnóticos, un guión de 45 segundos con indicaciones de edición y un llamado a la acción claro.',
    publicoObjetivo: 'Creadores de contenido, marcas de e-commerce, coaches, profesionales y agencias de redes sociales.',
    comoFunciona: [
      'El usuario indica su nicho (ej. fitness, bienes raíces, programación, moda) y el tema del video.',
      'Elige el estilo (Historia curiosa, Error común que cometes, Revelación de secreto, Tutorial rápido).',
      'La app genera 5 variaciones de ganchos virales para elegir el más potente.',
      'Genera el guión estructurado en 3 columnas: Lo que dices (voz), Lo que muestras (b-roll visual) y Texto en pantalla.',
      'Permite practicar con un teleprompter interactivo en pantalla.'
    ],
    funcionesPrincipales: [
      'Generador de ganchos de alta retención basados en fórmulas virales',
      'Guión de 3 columnas (Audio, Video, Texto en pantalla) para facilitar la grabación',
      'Teleprompter web integrado con control de velocidad de lectura',
      'Generador de descripción optimizada para SEO de TikTok/Instagram con hashtags'
    ],
    mvp: [
      'Formulario de nicho y tema',
      'Generador de 3 ganchos y 1 guión completo de 60 segundos',
      'Teleprompter integrado en navegador'
    ],
    despuesPuedesAnadir: [
      'Analizador de retención de video con IA',
      'Generador de carruseles de Instagram a partir del mismo guión'
    ],
    blueprint: {
      objetivo: 'Permitir a creadores y marcas escribir guiones de alta retención para Reels y TikTok en 60 segundos.',
      usuario: 'Creadores individuales y community managers.',
      funcionesMvp: [
        'Selector de formato y nicho',
        'Generador estructurado con Gemini 3.8 Flash',
        'Teleprompter con scroll automático regulable',
        'Botón de copiado de guión completo'
      ],
      pantallas: [
        { nombre: 'Creador de Guión', descripcion: 'Inputs de tema y selección de arquetipo de video' },
        { nombre: 'Visor de Guión & Teleprompter', descripcion: 'Texto grande con temporizador para leer frente a la cámara' }
      ],
      flujo: [
        '1. Escribir tema del video',
        '2. Elegir gancho favorito',
        '3. Activar teleprompter',
        '4. Grabar en el teléfono con soltura'
      ],
      monetizacion: 'Pago único de $19 USD por acceso ilimitado a generador y teleprompter.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'Express + Gemini 3.8 Flash',
        ia: 'Gemini 3.8 Flash ajustado con fórmulas de retención de video corto',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  },
  {
    id: 'agendacita-salon',
    nivel: 'Nivel 2',
    categoria: 'Salones & Estética',
    iconoCategoria: '💇',
    nombre: 'BellaAgenda Salones',
    descripcionCorta: 'Agendador de citas con fotos de trabajos y catálogo de estilistas para salones de belleza y barberías.',
    monetizacionTipo: 'Suscripción',
    rangoPrecio: '$19 - $49 USD/mes',
    dificultad: 'Media',
    score: {
      total: 94,
      demanda: 97,
      problema: 96,
      facilidadConstruccion: 87,
      potencialPago: 94,
      potencialSuscripcion: 97,
      potencialIA: 80,
      facilidadVenta: 95,
      analisisBreve: 'Barberías y salones de belleza pierden clientes por tardar en responder al WhatsApp mientras están cortando el pelo.'
    },
    problema: 'Las estilistas y barberos están con las manos ocupadas todo el día atendiendo a clientes. No pueden contestar WhatsApp para dar citas, generando quejas y pérdida de turnos.',
    solucion: 'Una página de reservas visual donde las clientas eligen el servicio (corte, tinte, uñas, pestañas), seleccionan a su profesional favorito, ven fotos de trabajos previos y agendan su turno en 20 segundos.',
    publicoObjetivo: 'Barberías, salones de manicura (nail bars), peluquerías, spas y estudios de micropigmentación.',
    comoFunciona: [
      'El salón crea los perfiles de sus estilistas con sus horarios y servicios.',
      'Publican el enlace en su perfil de Instagram y mensaje automático de WhatsApp.',
      'La clienta escoge servicio, profesional y hora disponible.',
      'El sistema bloquea la agenda del profesional y envía confirmación con ubicación en Google Maps.',
      'Manda recordatorio 3 horas antes para evitar retrasos.'
    ],
    funcionesPrincipales: [
      'Catálogo de servicios con fotos de referencia, duración y precio',
      'Gestión de agendas individuales por cada estilista o sillón de barbería',
      'Recordatorios automáticos por WhatsApp con botón de reprogramación',
      'Comisiones y reporte de recaudación por empleado'
    ],
    mvp: [
      'Página pública de reserva de turnos por profesional',
      'Calendario interno del salón con vista por día y estilista',
      'Notificaciones de nuevas citas'
    ],
    despuesPuedesAnadir: [
      'Cobro de seña o anticipo mediante tarjeta para asegurar la reserva',
      'Club de lealtad: "10mo corte gratis"'
    ],
    blueprint: {
      objetivo: 'Llenar los sillones del salón de belleza automáticamente sin que los profesionales tengan que soltar las tijeras.',
      usuario: 'Dueños de salones y estilistas independientes.',
      funcionesMvp: [
        'Catálogo de servicios y precios',
        'Gestor de horarios por profesional',
        'Flujo de reserva web para clientes',
        'Dashboard de turnos del día'
      ],
      pantallas: [
        { nombre: 'Portal de Reservas Salón', descripcion: 'Filtro por estilista, selección de servicio y calendario de horas libres' },
        { nombre: 'Agenda de Sillones', descripcion: 'Vista tipo columna donde cada columna es un estilista' },
        { nombre: 'Reporte Diario', descripcion: 'Citas atendidas y total facturado' }
      ],
      flujo: [
        '1. Clienta abre link en Instagram',
        '2. Elige servicio y fecha',
        '3. Confirma en WhatsApp',
        '4. Asiste al salón'
      ],
      monetizacion: '$24 USD/mes por salón con hasta 3 profesionales; $49/mes salones grandes.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'Express + Cron para notificaciones',
        ia: 'Gemini para redactar consejos de cuidado capilar post-servicio enviados automáticamente al cliente',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  },
  {
    id: 'rutinagym-fitness',
    nivel: 'Nivel 1',
    categoria: 'Fitness',
    iconoCategoria: '🏋️',
    nombre: 'RutinaFit Pro',
    descripcionCorta: 'Generador de rutinas de hipertrofia o pérdida de grasa personalizadas según tu equipo y días disponibles.',
    monetizacionTipo: 'Pago único',
    rangoPrecio: '$14 - $24 USD',
    dificultad: 'Rápida',
    score: {
      total: 90,
      demanda: 94,
      problema: 90,
      facilidadConstruccion: 93,
      potencialPago: 84,
      potencialSuscripcion: 72,
      potencialIA: 91,
      facilidadVenta: 92,
      analisisBreve: 'Millones de personas van al gimnasio sin saber qué ejercicios hacer ni cómo progresar en cargas.'
    },
    problema: 'Los principiantes y personas ocupadas van al gimnasio y dan vueltas sin un plan claro, o entrenan en casa con dos mancuernas sin saber cómo estructurar una sobrecarga progresiva efectiva.',
    solucion: 'Una mini-app que genera una rutina semanal perfecta (Push/Pull/Legs, Torso/Pierna o Fullbody) adaptada exactamente al equipamiento que tienes (gimnasio comercial, mancuernas en casa o peso corporal) con GIFs explicativos y calculador de pesos.',
    publicoObjetivo: 'Personas que entrenan en casa o gimnasio, entrenadores personales y entusiastas de la vida saludable.',
    comoFunciona: [
      'El usuario indica su objetivo (ganar músculo, quemar grasa, resistencia), nivel y días disponibles por semana (2 a 6 días).',
      'Marca qué equipo tiene disponible (mancuernas, barra, máquinas, elásticos o solo cuerpo).',
      'La app genera la rutina con series, repeticiones, descansos y consejos de técnica.',
      'Incluye un registro interactivo para anotar los pesos levantados cada semana y ver la progresión.',
      'Descarga la rutina en PDF o la guarda en el móvil como app.'
    ],
    funcionesPrincipales: [
      'Algoritmo de periodización y distribución de grupos musculares',
      'Adaptador instantáneo de equipamiento (reemplaza ejercicios de máquina por mancuernas en 1 clic)',
      'Calculadora de 1RM (Repetición Máxima) y pesos recomendados de trabajo',
      'Registro de progreso de cargas semana a semana'
    ],
    mvp: [
      'Generador de rutina de 3 a 5 días con series y repeticiones',
      'Filtro de equipamiento (Casa vs Gym)',
      'Modo entrenamiento en vivo con temporizador de descanso'
    ],
    despuesPuedesAnadir: [
      'Guía nutricional de calorías y macros calculados para acompañar la rutina',
      'Comunidad de retos mensuales'
    ],
    blueprint: {
      objetivo: 'Entregar un plan de entrenamiento estructurado y científico en menos de 1 minuto.',
      usuario: 'Practicantes de fitness de nivel inicial a intermedio.',
      funcionesMvp: [
        'Formulario de perfil físico y objetivos',
        'Generador de plan semanal con divisiones clásicas',
        'Fichas de ejercicios con técnica',
        'Descarga de plan de entrenamiento'
      ],
      pantallas: [
        { nombre: 'Configurador Físico', descripcion: 'Selección de días, metas y material disponible' },
        { nombre: 'Mi Rutina Semanal', descripcion: 'Tarjetas de días con lista de ejercicios y descansos' },
        { nombre: 'Visor de Ejercicio', descripcion: 'Técnica correcta y músculos implicados' }
      ],
      flujo: [
        '1. Elegir meta y días',
        '2. Obtener rutina personalizada',
        '3. Entrenar y anotar pesos',
        '4. Progresar semana a semana'
      ],
      monetizacion: 'Pago único de $14 USD con acceso de por vida y actualizaciones.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'SPA Client-side',
        ia: 'Gemini para ajustar el plan si el usuario tiene molestias o lesiones específicas',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  },
  {
    id: 'bodaexpress-eventos',
    nivel: 'Nivel 1',
    categoria: 'Eventos & Bodas',
    iconoCategoria: '🎉',
    nombre: 'BodaPlannr Express',
    descripcionCorta: 'Organizador de bodas y eventos con control de presupuesto, cálculo de alcohol y confirmación RSVP por WhatsApp.',
    monetizacionTipo: 'Pago único',
    rangoPrecio: '$19 - $39 USD',
    dificultad: 'Rápida',
    score: {
      total: 92,
      demanda: 95,
      problema: 96,
      facilidadConstruccion: 91,
      potencialPago: 92,
      potencialSuscripcion: 55,
      potencialIA: 84,
      facilidadVenta: 94,
      analisisBreve: 'La organización de bodas causa estrés máximo y los novios tienen presupuesto asignado para herramientas que les den tranquilidad.'
    },
    problema: 'Las parejas que organizan su boda se desbordan calculando cuánto alcohol comprar, sufren con la confirmación de invitados que no contestan y terminan gastando un 40% más de su presupuesto planeado.',
    solucion: 'Una suite de micro-herramientas que incluye: Calculadora exacta de bebidas y comida según número de invitados, Distribuidor de mesas interactivo y Enlace RSVP para confirmar por WhatsApp en 1 toque.',
    publicoObjetivo: 'Parejas comprometidas, organizadores de bodas (wedding planners) y cumpleañeros.',
    comoFunciona: [
      'Los novios ingresan su presupuesto total y número de invitados estimados.',
      'La app divide el presupuesto inteligentemente en 8 categorías (Lugar, Catering, Foto, Música, Vestuario, etc.).',
      'La calculadora de bebidas indica cuántas botellas de vino, whisky, cerveza y hielo comprar.',
      'Genera una página web de invitación minimalista con cuenta regresiva y botón de confirmación de asistencia.',
      'Recibe las confirmaciones de alérgenos y menú especial en una lista organizada.'
    ],
    funcionesPrincipales: [
      'Calculadora de bebidas y alcohol sin desperdicio',
      'Desglose inteligente de presupuesto con alertas de sobrecosto',
      'Página pública RSVP para enviar por WhatsApp a invitados',
      'Mapa interactivo de asignación de mesas y acompañantes'
    ],
    mvp: [
      'Calculadora de barra libre y comida por persona',
      'Gestor de lista de invitados con estado (Confirmado / Pendiente / No asiste)',
      'Generador de invitación web con enlace compartible'
    ],
    despuesPuedesAnadir: [
      'Lista de regalos virtual con recolección directa de transferencias bancarias',
      'Cronograma interactivo del día de la boda para proveedores'
    ],
    blueprint: {
      objetivo: 'Ahorrar miles de dólares y semanas de estrés a las parejas en la planificación de su boda o evento.',
      usuario: 'Novios y organizadores de eventos sociales.',
      funcionesMvp: [
        'Calculadora de insumos de fiesta',
        'Presupuestador con gráfico de pastel',
        'Página de confirmación para invitados',
        'Exportación de lista a Excel'
      ],
      pantallas: [
        { nombre: 'Centro de Mando Boda', descripcion: 'Días faltantes, presupuesto gastado y confirmados' },
        { nombre: 'Calculadora de Bebidas', descripcion: 'Fórmula por tipo de evento y horario' },
        { nombre: 'Lista de Invitados', descripcion: 'Checklist con alergias y asignación de mesa' }
      ],
      flujo: [
        '1. Ingresar invitados y presupuesto',
        '2. Compartir link de invitación a amigos',
        '3. Ver confirmaciones en tiempo real',
        '4. Comprar bebidas con la lista calculada'
      ],
      monetizacion: 'Pago único de $29 USD por evento completo.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'Express + base de datos para guardar confirmaciones RSVP',
        ia: 'Gemini para redactar votos matrimoniales emotivos y discursos de padrinos',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  },
  {
    id: 'itinerariovip-viajes',
    nivel: 'Nivel 1',
    categoria: 'Viajes & Turismo',
    iconoCategoria: '✈️',
    nombre: 'RutaViajera AI',
    descripcionCorta: 'Diseña itinerarios día por día optimizados por distancias para no perder tiempo en transporte.',
    monetizacionTipo: 'Pago único',
    rangoPrecio: '$9 - $19 USD',
    dificultad: 'Rápida',
    score: {
      total: 91,
      demanda: 96,
      problema: 90,
      facilidadConstruccion: 91,
      potencialPago: 87,
      potencialSuscripcion: 60,
      potencialIA: 96,
      facilidadVenta: 93,
      analisisBreve: 'Planificar un viaje a Europa o Japón toma 30 horas de investigación para evitar cruzar la ciudad 4 veces al día.'
    },
    problema: 'Los viajeros arman listas de lugares turísticos que quieren visitar, pero los agrupan mal geográficamente, perdiendo medio día en metro o taxi y terminando exhaustos.',
    solucion: 'Ingresas tu destino, cantidad de días, presupuesto y ritmo de viaje (relajado, moderado, intenso), y la IA genera un itinerario visual por zonas con restaurantes locales recomendados y mapa descargable.',
    publicoObjetivo: 'Viajeros independientes, parejas de vacaciones, familias y nómadas digitales.',
    comoFunciona: [
      'El usuario indica la ciudad (ej. Roma, Tokio, Medellín), fechas y preferencias (museos, gastronomía, naturaleza, compras).',
      'La app genera un plan día por día agrupando atracciones que quedan a distancia caminable.',
      'Incluye mejores horarios para evitar colas y recomendaciones de reserva previa.',
      'Permite descargar el itinerario en PDF interactivo con enlaces a Google Maps o abrirlo sin conexión.'
    ],
    funcionesPrincipales: [
      'Agrupación geográfica inteligente para minimizar tiempos de traslado',
      'Itinerario descargable 100% offline con mapa y horarios',
      'Checklist de viaje personalizado según el clima y tipo de destino',
      'Estimador de presupuesto diario en moneda local'
    ],
    mvp: [
      'Generador de itinerario de 3 a 7 días con 4 paradas diarias ordenadas',
      'Estimador de presupuesto de entradas y comida',
      'Exportación en PDF con diseño visual limpio'
    ],
    despuesPuedesAnadir: [
      'Modo colaborativo para que un grupo vote las actividades del viaje',
      'Traductor de frases esenciales para emergencias y restaurantes'
    ],
    blueprint: {
      objetivo: 'Entregar una guía de viaje personalizada y optimizada en 30 segundos.',
      usuario: 'Turistas que buscan aprovechar su tiempo al máximo.',
      funcionesMvp: [
        'Formulario de destino y estilo de viaje',
        'Generación de itinerario por zonas con Gemini 3.8 Flash',
        'Mapa interactivo con paradas sugeridas',
        'Generador de PDF'
      ],
      pantallas: [
        { nombre: 'Planificador de Destino', descripcion: 'Wizard de 3 preguntas sobre el viaje' },
        { nombre: 'Itinerario Día a Día', descripcion: 'Tarjetas cronológicas (Mañana, Almuerzo, Tarde, Noche)' },
        { nombre: 'Checklist de Maleta', descripcion: 'Artículos indispensables según el clima' }
      ],
      flujo: [
        '1. Elegir ciudad y días',
        '2. Generar itinerario perfecto',
        '3. Descargar PDF al teléfono',
        '4. Viajar sin estrés'
      ],
      monetizacion: 'Pago único de $12 USD por viaje o $29 USD por pase anual de viajes ilimitados.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'Express + Gemini 3.8 Flash',
        ia: 'Gemini 3.8 Flash con conocimiento de ubicaciones y horarios turísticos',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  },
  {
    id: 'hogarcheck-mantenimiento',
    nivel: 'Nivel 1',
    categoria: 'Hogar & Organización',
    iconoCategoria: '🏡',
    nombre: 'HogarCheck Preventivo',
    descripcionCorta: 'Calendario y checklist de mantenimiento del hogar para evitar reparaciones costosas de plomería y electricidad.',
    monetizacionTipo: 'Pago único',
    rangoPrecio: '$12 - $19 USD',
    dificultad: 'Rápida',
    score: {
      total: 89,
      demanda: 91,
      problema: 92,
      facilidadConstruccion: 94,
      potencialPago: 83,
      potencialSuscripcion: 65,
      potencialIA: 78,
      facilidadVenta: 90,
      analisisBreve: 'Una filtración no detectada o aire acondicionado sin limpiar cuesta cientos de dólares en reparaciones urgentes.'
    },
    problema: 'Los propietarios e inquilinos nunca limpian los filtros del aire, no purgan calentadores de agua ni revisan sellos de baños hasta que ocurre una catástrofe que cuesta $1,000 USD arreglar de urgencia.',
    solucion: 'Una guía interactiva y calendario inteligente que programa tareas preventivas de 10 minutos (mensuales, trimestrales y anuales) con videos y guías paso a paso para mantener la casa en perfecto estado.',
    publicoObjetivo: 'Nuevos propietarios de vivienda, personas que viven solas, familias y administradores de propiedades.',
    comoFunciona: [
      'El usuario indica las características de su casa (apartamento o casa, calefacción, jardín, electrodomésticos).',
      'La app genera un cronograma anual de mantenimiento preventivo.',
      'Envía recordatorios oportunos con la guía exacta de qué hacer y qué herramientas básicas usar.',
      'Guarda el registro de revisiones y contactos de técnicos de confianza.'
    ],
    funcionesPrincipales: [
      'Calendario de mantenimiento estacional (primavera, verano, otoño, invierno)',
      'Guías visuales paso a paso de tareas de mantenimiento hágalo usted mismo (DIY)',
      'Historial de reparaciones con facturas y fechas de garantías de electrodomésticos',
      'Calculadora de ahorro por mantenimiento preventivo'
    ],
    mvp: [
      'Checklist de 20 tareas clave del hogar clasificadas por frecuencia',
      'Fichas de instrucciones rápidas por cada tarea',
      'Registro de avance con barra de salud del hogar'
    ],
    despuesPuedesAnadir: [
      'Directorio de técnicos locales calificados con solicitud de presupuestos',
      'Modo mudanza con inventario de cajas y habitaciones'
    ],
    blueprint: {
      objetivo: 'Evitar gastos imprevistos en reparaciones del hogar con una rutina de mantenimiento simple y guiada.',
      usuario: 'Dueños de casa y parejas que quieren cuidar su patrimonio.',
      funcionesMvp: [
        'Diagnóstico del tipo de vivienda',
        'Planificador de tareas preventivas',
        'Recordatorio de cambio de filtros y revisiones',
        'Libreta de contactos de emergencia (plomero, electricista)'
      ],
      pantallas: [
        { nombre: 'Salud de mi Hogar', descripcion: 'Score de mantenimiento y tareas pendientes del mes' },
        { nombre: 'Detalle de Tarea', descripcion: 'Instrucciones en 3 pasos para hacer el mantenimiento' },
        { nombre: 'Garantías y Equipos', descripcion: 'Registro de fecha de compra de electrodomésticos' }
      ],
      flujo: [
        '1. Seleccionar tipo de casa',
        '2. Ver tareas recomendadas para este mes',
        '3. Completar tarea en 10 min y tildar',
        '4. Mantener la casa como nueva'
      ],
      monetizacion: 'Pago único de $14 USD por acceso permanente al planificador.',
      tecnologiaRecomendada: {
        frontend: 'React + Tailwind CSS + Lucide Icons',
        backend: 'SPA Client-side',
        ia: 'Gemini para diagnosticar ruidos o problemas comunes del hogar a partir de la descripción del usuario',
        deploy: 'Google AI Studio / Cloud Run'
      }
    }
  }
];
