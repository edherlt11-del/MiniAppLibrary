import { MiniAppIdea } from '../types';

export const NIVEL_1_GROUP_B: MiniAppIdea[] = [
  // ==========================================
  // 12. NUTRICIÓN
  // ==========================================
  {
    id: 'n1-planner-comidas-saludables',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Planner de Comidas Saludables',
    descripcionCorta: 'Crea un menú semanal organizado.',
    queEs: 'Organizador nutricional para armar menús balanceados cumpliendo con el método del plato saludable (50% verduras, 25% proteína, 25% carbohidratos complejos).',
    problema: 'Comer de forma desbalanceada e improvisar a última hora opciones ultraprocesadas por falta de planificación.',
    comoFunciona: [
      'Seleccionas tus preferencias dietéticas (omnívora, vegetariana, mediterránea).',
      'Distribuyes los platos en los días de la semana.',
      'Verificas el equilibrio de grupos de alimentos en la vista resumen.'
    ],
    publicoObjetivo: 'Personas que buscan comer sano de forma variada y sin complicaciones.',
    funcionesPrincipales: [
      'Constructor visual de menús de 7 días',
      'Validador de balance según el plato de Harvard',
      'Opciones de intercambio fácil de ingredientes',
      'Exportación en PDF para pegar en la nevera'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['nutricion', 'menu', 'saludable', 'comidas', 'planificador']
  },
  {
    id: 'n1-generador-lista-compras-nutricion',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Generador de Lista de Compras',
    descripcionCorta: 'Convierte el menú en una lista de compras organizada por categorías.',
    queEs: 'Generador de listas de supermercado enfocado en alimentos frescos, ordenado por secciones para agilizar la compra y ahorrar.',
    problema: 'Comprar por impulso snacks poco saludables en el supermercado por no llevar una lista estructurada.',
    comoFunciona: [
      'Cargas los platos de tu semana.',
      'La herramienta calcula los kilos y unidades exactas de cada ingrediente.',
      'Obtienes tu lista organizada por pasillo (verdulería, carnicería, despensa).'
    ],
    publicoObjetivo: 'Familias y personas que quieren optimizar su presupuesto en el supermercado.',
    funcionesPrincipales: [
      'Agrupación inteligente por secciones del mercado',
      'Estimación de cantidades para evitar desperdicio de comida',
      'Modo checklist interactivo con tachado al vuelo',
      'Envío rápido a WhatsApp en formato texto limpio'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['compras', 'supermercado', 'lista', 'ingredientes', 'nutricion']
  },
  {
    id: 'n1-recetario-personalizado-nutricion',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Recetario Personalizado',
    descripcionCorta: 'Filtra recetas según ingredientes, preferencias y tiempo disponible.',
    queEs: 'Buscador culinario saludable con filtros por alérgenos, intolerancias, tiempo de cocción y calorías.',
    problema: 'Tener intolerancias (lactosa, gluten) o restricciones y perder tiempo buscando recetas que se adapten.',
    comoFunciona: [
      'Marcas tus restricciones (sin gluten, sin lácteos, bajo en sodio, etc.).',
      'Indicas el tiempo máximo de preparación (15, 30 min).',
      'Obtienes recetas deliciosas que cumplen al 100% tus criterios.'
    ],
    publicoObjetivo: 'Personas celíacas, intolerantes a la lactosa o con pautas nutricionales específicas.',
    funcionesPrincipales: [
      'Filtros avanzados por intolerancias y alérgenos',
      'Fichas nutricionales con calorías y macronutrientes',
      'Guía paso a paso con trucos de cocción',
      'Guardado de recetas en colección de favoritos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['recetas', 'singluten', 'salud', 'cocina', 'nutricion']
  },
  {
    id: 'n1-calc-porciones-nutricionales',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Calculadora de Porciones',
    descripcionCorta: 'Ayuda a ajustar cantidades de alimentos según el número de personas.',
    queEs: 'Calculadora de gramajes exactos para cocinar cantidades justas de arroz, carnes, legumbres y pastas según el número de comensales.',
    problema: 'Cocinar siempre de más o de menos por no saber calcular gramos crudos vs gramos cocidos.',
    comoFunciona: [
      'Seleccionas el alimento base (arroz, pasta, lentejas, pechuga de pollo).',
      'Indicas el número de personas y tipo de plato (principal o guarnición).',
      'Obtienes los gramos exactos en crudo a pesar en la báscula.'
    ],
    publicoObjetivo: 'Cocineros de casa, practicantes de meal prep y anfitriones.',
    funcionesPrincipales: [
      'Conversor automático de peso crudo a peso cocinado',
      'Porciones recomendadas según apetito (niños, adultos, deportistas)',
      'Calculadora de raciones para eventos y reuniones',
      'Tabla rápida de equivalencias en tazas y cucharadas'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['porciones', 'gramos', 'cocina', 'escalador', 'nutricion']
  },
  {
    id: 'n1-reto-7-dias-alimentacion',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Reto 7 Días de Alimentación',
    descripcionCorta: 'Programa sencillo de pequeños cambios alimentarios durante una semana.',
    queEs: 'Desafío guiado de 7 días para desintoxicar hábitos comiendo comida real, eliminando ultraprocesados y bebiendo suficiente agua.',
    problema: 'Las dietas milagro extremas que prometen resultados irreales y causan efecto rebote inmediato.',
    comoFunciona: [
      'Cada día desbloqueas un micro-reto nutricional (ej. día 1: cero bebidas azucaradas, día 2: plato con 3 colores).',
      'Sigues el menú sugerido y consejos diarios.',
      'Marcas tu progreso y sientes mayor energía y ligereza al día 7.'
    ],
    publicoObjetivo: 'Personas que buscan un "reset" saludable tras vacaciones o fines de semana pesados.',
    funcionesPrincipales: [
      'Menú completo de 7 días con recetas fáciles',
      'Check-in diario del reto superado',
      'Guía de lectura de etiquetas nutricionales',
      'Comunidad o espacio de reflexión diaria'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['reto7dias', 'detox', 'salud', 'comidareal', 'nutricion']
  },

  // ==========================================
  // 13. PRODUCTIVIDAD
  // ==========================================
  {
    id: 'n1-planner-del-dia-enfoque',
    nivel: 'Nivel 1',
    categoria: 'Productividad',
    iconoCategoria: '⏱️',
    nombre: 'Planner del Día',
    descripcionCorta: 'Organiza las tareas más importantes del día en pocos pasos.',
    queEs: 'Planificador diario de ultra-enfoque basado en la regla de las 3 tareas clave (Rule of 3) y bloques de tiempo.',
    problema: 'Hacer listas interminables de 20 pendientes que generan agobio y terminar el día sin avanzar en lo prioritario.',
    comoFunciona: [
      'Escribes tus 3 Tareas de Mayor Impacto (MIT) del día.',
      'Asignas bloques de horario para ejecutarlas en orden de importancia.',
      'Marcas cada una completada y experimentas verdadera sensación de avance.'
    ],
    publicoObjetivo: 'Profesionales, freelancers, estudiantes y ejecutivos.',
    funcionesPrincipales: [
      'Enfoque obligatorio en máximo 3 tareas principales',
      'Bloques de tiempo visuales (time-blocking)',
      'Espacio para tareas secundarias rápidas (menos de 5 min)',
      'Resumen de productividad al terminar la jornada'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['planner', 'dia', 'enfoque', 'tareas', 'productividad']
  },
  {
    id: 'n1-matriz-prioridades-eisenhower',
    nivel: 'Nivel 1',
    categoria: 'Productividad',
    iconoCategoria: '⏱️',
    nombre: 'Matriz de Prioridades',
    descripcionCorta: 'Clasifica tareas según importancia y urgencia.',
    queEs: 'Cuadrante interactivo de Eisenhower (Hacer, Planificar, Delegar, Eliminar) para tomar decisiones claras de trabajo.',
    problema: 'Vivir en modo "apagar fuegos" atendiendo urgencias ajenas y descuidando lo verdaderamente importante.',
    comoFunciona: [
      'Añades tus pendientes y los sitúas en los 4 cuadrantes.',
      'La herramienta ordena visualmente qué debes hacer ahora mismo y qué debes programar.',
      'Eliminas o delegas tareas que no aportan valor real.'
    ],
    publicoObjetivo: 'Líderes de equipo, gerentes y personas con sobrecarga de trabajo.',
    funcionesPrincipales: [
      'Matriz interactiva drag-and-drop de 4 cuadrantes',
      'Guía para identificar tareas delegables',
      'Filtro de acciones inmediatas del Cuadrante 1 (Urgente e Importante)',
      'Exportación en imagen para fondo de pantalla'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['eisenhower', 'matriz', 'prioridades', 'urgente', 'productividad']
  },
  {
    id: 'n1-pomodoro-simple-enfoque',
    nivel: 'Nivel 1',
    categoria: 'Productividad',
    iconoCategoria: '⏱️',
    nombre: 'Pomodoro Simple',
    descripcionCorta: 'Temporizador para trabajar en bloques de concentración y descanso.',
    queEs: 'Reloj Pomodoro limpio sin distracciones con ciclos de 25 minutos de concentración y 5 minutos de pausa activa.',
    problema: 'Distraerse constantemente con notificaciones y no lograr sesiones de trabajo profundo (deep work).',
    comoFunciona: [
      'Eliges una sola tarea a realizar durante el bloque.',
      'Inicias el temporizador de 25 minutos y trabajas sin interrupciones.',
      'Descansas 5 minutos al sonar la campana y repites el ciclo.'
    ],
    publicoObjetivo: 'Programadores, redactores, opositores y estudiantes.',
    funcionesPrincipales: [
      'Ciclos automáticos 25/5 con descanso largo cada 4 pomodoros',
      'Sonidos ambientales opcionales de lluvia, cafetería o ruido blanco',
      'Contador de pomodoros completados en el día',
      'Modo pantalla completa para evitar distracciones'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$7 USD',
    tags: ['pomodoro', 'temporizador', 'deepwork', 'concentracion', 'productividad']
  },
  {
    id: 'n1-tracker-habitos-productividad',
    nivel: 'Nivel 1',
    categoria: 'Productividad',
    iconoCategoria: '⏱️',
    nombre: 'Tracker de Hábitos',
    descripcionCorta: 'Permite registrar hábitos y visualizar rachas.',
    queEs: 'Panel de control de rutinas matutinas y vespertinas para consolidar disciplina diaria.',
    problema: 'Falta de constancia en rutinas clave como leer, planificar el día o desconectar a tiempo.',
    comoFunciona: [
      'Configuras tus hábitos productivos clave.',
      'Marcas cada día cumplido con un solo toque.',
      'Visualizas tu porcentaje de consistencia mensual.'
    ],
    publicoObjetivo: 'Cualquier persona que quiera mejorar su rendimiento personal.',
    funcionesPrincipales: [
      'Tablero mensual de hábitos con visualización limpia',
      'Contador de rachas consecutivas',
      'Recordatorios inteligentes configurables',
      'Reporte semanal de cumplimiento'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['habitos', 'tracker', 'rutina', 'consistencia', 'productividad']
  },
  {
    id: 'n1-planificador-semanal-productividad',
    nivel: 'Nivel 1',
    categoria: 'Productividad',
    iconoCategoria: '⏱️',
    nombre: 'Planificador Semanal',
    descripcionCorta: 'Organiza tareas, objetivos y prioridades de toda la semana.',
    queEs: 'Vista panorámica de lunes a domingo para distribuir la carga de trabajo semanal de forma equilibrada y sin estrés.',
    problema: 'Sobrecargar los lunes y llegar al viernes agotado y con pendientes acumulados.',
    comoFunciona: [
      'Fijas tus 3 grandes objetivos de la semana.',
      'Distribuyes las tareas secundarias por días según tu energía disponible.',
      'Haces una revisión semanal los viernes para planificar la siguiente.'
    ],
    publicoObjetivo: 'Emprendedores, profesionales autónomos y directivos.',
    funcionesPrincipales: [
      'Vista completa de 7 días con límites de tareas diarias',
      'Sección de "Caja de ideas" para pendientes sin fecha fija',
      'Plantilla de revisión semanal (qué funcionó y qué mejorar)',
      'Imprimible en formato horizontal elegante'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['semanal', 'planificador', 'organizacion', 'agenda', 'productividad']
  },

  // ==========================================
  // 14. RELACIONES
  // ==========================================
  {
    id: 'n1-planner-de-citas-pareja',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: 'Planner de Citas',
    descripcionCorta: 'Genera ideas de citas según presupuesto, tiempo y preferencias.',
    queEs: 'Buscador de planes románticos originales categorizados por costo (gratis, económico, especial) y lugar (en casa o fuera).',
    problema: 'Caer en la monotonía del "cine y cena" o no saber qué hacer en las citas de pareja.',
    comoFunciona: [
      'Indicas si quieres plan en casa o salir, tu presupuesto ($0 a $100) y tiempo.',
      'La mini-app sugiere planes temáticos detallados con menú y ambiente.',
      'Guardas la cita en tu calendario compartido.'
    ],
    publicoObjetivo: 'Parejas de novios o matrimonios que buscan renovar el romance.',
    funcionesPrincipales: [
      'Más de 80 ideas de citas creativas y fuera de lo común',
      'Filtro por presupuesto: $0, accesible o noche especial',
      'Guía para preparar ambientes temáticos en casa',
      'Ruleta de citas sorpresa cuando no logran ponerse de acuerdo'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['citas', 'pareja', 'romance', 'planes', 'relaciones']
  },
  {
    id: 'n1-reto-30-dias-en-pareja',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: 'Reto 30 Días en Pareja',
    descripcionCorta: 'Cada día propone una pequeña actividad para fortalecer la conexión.',
    queEs: 'Juego interactivo de 30 días con micro-acciones de complicidad, agradecimiento y diversión en pareja.',
    problema: 'La desconexión emocional causada por el estrés laboral y la rutina cotidiana.',
    comoFunciona: [
      'Cada mañana desbloquean el reto del día (ej. masaje de 5 min, recordar su primera cita, cocinar juntos).',
      'Completan la actividad juntos.',
      'Registran una foto o nota de recuerdo en el álbum del reto.'
    ],
    publicoObjetivo: 'Parejas que quieren profundizar su vínculo y divertirse juntas.',
    funcionesPrincipales: [
      '30 desafíos diarios divertidos y afectuosos',
      'Álbum digital privado de recuerdos del reto',
      'Preguntas de intimidad emocional complementarias',
      'Medidor de complicidad acumulada'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['reto30', 'pareja', 'conexion', 'juegos', 'relaciones']
  },
  {
    id: 'n1-generador-preguntas-parejas',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: 'Generador de Preguntas para Parejas',
    descripcionCorta: 'Genera preguntas para conversaciones profundas y divertidas.',
    queEs: 'Mazo interactivo de cartas digitales con preguntas para cenas, viajes en auto o noches de sobremesa.',
    problema: 'Quedarse en silencio mirando el teléfono durante las cenas o hablar únicamente de cuentas del hogar.',
    comoFunciona: [
      'Eligen una categoría (Risas, Sueños a Futuro, Recuerdos, Intimidad Profunda).',
      'Pulsan para sacar una carta al azar.',
      'Se turnan para responder y profundizar en la conversación.'
    ],
    publicoObjetivo: 'Parejas de todas las edades, desde recién enamorados hasta matrimonios consolidados.',
    funcionesPrincipales: [
      'Más de 150 preguntas diseñadas por terapeutas de pareja',
      '4 niveles de profundidad progresiva',
      'Modo juego con turnos alternos en el móvil',
      'Opción de guardar respuestas favoritas'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['preguntas', 'conversaciones', 'parejas', 'conexion', 'relaciones']
  },
  {
    id: 'n1-calendario-fechas-especiales-pareja',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: 'Calendario de Fechas Especiales',
    descripcionCorta: 'Registra aniversarios, cumpleaños y fechas importantes.',
    queEs: 'Organizador de aniversarios y fechas clave con cuenta regresiva y banco de ideas para regalos.',
    problema: 'Olvidar un aniversario importante o comprar un regalo a última hora por falta de anticipación.',
    comoFunciona: [
      'Añades las fechas significativas de la pareja (aniversario, primer beso, cumpleaños).',
      'Anotas ideas de regalos que tu pareja menciona casualmente durante el año.',
      'Recibes alertas 15 días antes para planificar con tiempo.'
    ],
    publicoObjetivo: 'Personas detallistas o despistadas que quieren cuidar a su pareja.',
    funcionesPrincipales: [
      'Cuenta regresiva en días y horas para el próximo aniversario',
      'Baúl secreto de ideas de regalos con enlaces y precios',
      'Notificaciones preventivas de 30, 15 y 3 días de antelación',
      'Historial de celebraciones pasadas y qué se regaló'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['aniversario', 'fechas', 'regalos', 'pareja', 'relaciones']
  },
  {
    id: 'n1-lista-experiencias-pareja-bucket',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: 'Lista de Experiencias en Pareja',
    descripcionCorta: 'Permite elegir actividades según presupuesto y tiempo disponible.',
    queEs: 'Bucket list interactiva de 100 experiencias para tachar juntos a lo largo de la vida.',
    problema: 'Decir siempre "un día deberíamos ir a..." y nunca concretar los viajes y experiencias soñadas.',
    comoFunciona: [
      'Exploran la lista de experiencias divididas por categorías (aventura, relax, viajes, cultura).',
      'Seleccionan las que quieren vivir este año.',
      'Marcan las completadas y suben su foto de recuerdo.'
    ],
    publicoObjetivo: 'Parejas aventureras y amantes de crear memorias juntos.',
    funcionesPrincipales: [
      'Catálogo interactivo de 100 experiencias inolvidables',
      'Filtro por presupuesto y cercanía geográfica',
      'Muro visual de experiencias completadas',
      'Póster digital descargable estilo raspa y gana'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['bucketlist', 'experiencias', 'pareja', 'viajes', 'relaciones']
  },

  // ==========================================
  // 15. VIAJES
  // ==========================================
  {
    id: 'n1-planificador-de-viajes-integral',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Planificador de Viajes',
    descripcionCorta: 'Organiza destino, fechas, actividades y presupuesto.',
    queEs: 'Panel integral para armar viajes completos centralizando vuelos, hoteles, reservas de tours y documentos.',
    problema: 'Tener reservas dispersas en decenas de correos electrónicos y PDFs difíciles de encontrar en el aeropuerto.',
    comoFunciona: [
      'Creas tu viaje con destino y fechas de ida/vuelta.',
      'Añades tus vuelos, alojamientos y actividades con sus códigos de reserva.',
      'Consultas tu itinerario ordenado día por día incluso sin conexión.'
    ],
    publicoObjetivo: 'Viajeros independientes, mochileros y familias en vacaciones.',
    funcionesPrincipales: [
      'Itinerario día por día con horas y ubicaciones',
      'Bóveda para guardar pasaportes, billetes y pólizas de seguro',
      'Mapa interactivo de paradas programadas',
      'Resumen descargable en 1 página para llevar en el móvil'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['viajes', 'itinerario', 'vacaciones', 'turismo', 'planificador']
  },
  {
    id: 'n1-calc-presupuesto-viaje',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Calculadora de Presupuesto de Viaje',
    descripcionCorta: 'Estima transporte, alojamiento, comida y actividades.',
    queEs: 'Simulador de costos de viaje que calcula el presupuesto total diario y total por persona en diferentes divisas.',
    problema: 'Quedarse corto de dinero en el extranjero por no prever gastos de propinas, traslados y comidas.',
    comoFunciona: [
      'Ingresas los días de estancia y número de viajeros.',
      'Añades costos fijos (vuelo + hotel) y presupuesto diario de comidas y ocio.',
      'Obtienes el monto total estimado con fondo de contingencia del 10%.'
    ],
    publicoObjetivo: 'Viajeros que planifican sus vacaciones o escapadas de fin de semana.',
    funcionesPrincipales: [
      'Desglose por categorías (Vuelos, Hotel, Comidas, Entradas, Compras)',
      'Conversor de divisas integrado',
      'Calculadora de presupuesto diario disponible por persona',
      'Alerta de límite presupuestario en tiempo real'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['presupuesto', 'viajes', 'costos', 'divisas', 'calculadora']
  },
  {
    id: 'n1-generador-itinerarios-viajes',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Generador de Itinerarios',
    descripcionCorta: 'Crea una estructura de viaje según días disponibles e intereses.',
    queEs: 'Creador de rutas turísticas optimizadas por zonas geográficas para no perder horas cruzando la ciudad de un lado a otro.',
    problema: 'Planificar visitas a atracciones que están en extremos opuestos de la ciudad y agotarse en transportes.',
    comoFunciona: [
      'Seleccionas la ciudad de destino, duración (ej. 3, 5, 7 días) y estilo (cultural, gastronómico, relax).',
      'Recibes una ruta diaria agrupada por barrios y cercanía.',
      'Ajustas el itinerario a tu propio ritmo.'
    ],
    publicoObjetivo: 'Turistas con poco tiempo para investigar o primerizos en una gran ciudad.',
    funcionesPrincipales: [
      'Agrupación de monumentos y atracciones por proximidad geográfica',
      'Tiempos recomendados de estancia en cada punto',
      'Sugerencias de paradas para almorzar en la zona',
      'Exportación directa a Google Maps'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['itinerario', 'rutas', 'ciudades', 'turismo', 'viajes']
  },
  {
    id: 'n1-checklist-de-viaje-maleta',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Checklist de Viaje',
    descripcionCorta: 'Genera una lista de cosas que llevar según el tipo de viaje.',
    queEs: 'Lista de equipaje inteligente adaptada al clima (playa, nieve, ciudad), duración del viaje y tipo de equipaje (mano o bodega).',
    problema: 'Llegar al destino y descubrir que olvidaste cargadores, adaptadores de enchufe o medicamentos esenciales.',
    comoFunciona: [
      'Indicas el clima del destino, días de viaje y si viajas con niños o mascotas.',
      'La mini-app genera la lista exacta con cantidades recomendadas de ropa y artículos.',
      'Tachas cada prenda mientras empacas tu maleta.'
    ],
    publicoObjetivo: 'Cualquier viajero que desee empacar de forma eficiente y sin olvidos.',
    funcionesPrincipales: [
      'Listas personalizadas por clima y tipo de destino',
      'Checklist de botiquín de viaje y documentación obligatoria',
      'Límites de líquidos y normativas de equipaje de mano',
      'Guardado de listas maestras para futuros viajes'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['maleta', 'checklist', 'equipaje', 'viajes', 'empaque']
  },
  {
    id: 'n1-divisor-gastos-viaje-grupo',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Divisor de Gastos de Viaje',
    descripcionCorta: 'Calcula cuánto corresponde pagar a cada persona.',
    queEs: 'Liquidador de cuentas compartidas para viajes en grupo que simplifica quién debe pagar a quién con el menor número de transferencias.',
    problema: 'Las discusiones y cálculos engorrosos de quién pagó la cena, la gasolina o el alojamiento al final de un viaje con amigos.',
    comoFunciona: [
      'Añades los nombres de los viajeros del grupo.',
      'Registras cada gasto indicando quién lo pagó y quiénes participaron.',
      'Pulsas "Liquidar" y la app genera la lista exacta de pagos entre personas.'
    ],
    publicoObjetivo: 'Grupos de amigos, familias y compañeros de viaje.',
    funcionesPrincipales: [
      'Algoritmo de liquidación mínima de transacciones',
      'División equitativa o por consumos específicos',
      'Manejo de pagos en diferentes divisas',
      'Resumen claro para compartir por WhatsApp en 1 clic'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['gastos', 'cuentas', 'amigos', 'viajes', 'grupo']
  },

  // ==========================================
  // 16. EVENTOS & FIESTAS
  // ==========================================
  {
    id: 'n1-planner-de-cumpleanos-fiesta',
    nivel: 'Nivel 1',
    categoria: 'Eventos & Fiestas',
    iconoCategoria: '🎉',
    nombre: 'Planner de Cumpleaños',
    descripcionCorta: 'Organiza invitados, comida, decoración, actividades y presupuesto.',
    queEs: 'Organizador maestro para cumpleaños infantiles y de adultos con cronograma de preparativos desde 4 semanas antes.',
    problema: 'El estrés de planificar una fiesta y olvidar encargar el pastel, comprar velas o confirmar a los invitados.',
    comoFunciona: [
      'Defines la fecha, temática y número estimado de invitados.',
      'Sigues el checklist semanal de compras y contrataciones.',
      'Llevas el control de confirmaciones (RSVP) en tiempo real.'
    ],
    publicoObjetivo: 'Padres organizando fiestas infantiles, anfitriones y organizadores de eventos.',
    funcionesPrincipales: [
      'Cronograma paso a paso a 4 semanas de la fiesta',
      'Control de lista de invitados y confirmaciones',
      'Presupuesto desglosado (comida, decoración, animación, pastel)',
      'Minutero del día del evento con horarios de comida y juegos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['cumpleanos', 'fiesta', 'eventos', 'invitados', 'planner']
  },
  {
    id: 'n1-calc-comida-eventos-fiestas',
    nivel: 'Nivel 1',
    categoria: 'Eventos & Fiestas',
    iconoCategoria: '🎉',
    nombre: 'Calculadora de Comida para Eventos',
    descripcionCorta: 'Calcula cantidades aproximadas según invitados y tipo de evento.',
    queEs: 'Estimador de catering que calcula kilos de carne, litros de bebida, bocadillos y hielo según adultos y niños.',
    problema: 'Comprar comida en exceso y tirarla o quedarse corto a mitad de la fiesta y pasar un mal momento.',
    comoFunciona: [
      'Ingresas el número de adultos y niños, y la duración de la fiesta en horas.',
      'Eliges el tipo de menú (asado/barbacoa, buffet de picoteo, cena formal).',
      'Obtienes las cantidades recomendadas exactas de cada alimento y bebida.'
    ],
    publicoObjetivo: 'Anfitriones de fiestas, barbacoas familiares y organizadores de eventos.',
    funcionesPrincipales: [
      'Cálculo de porciones de canapés, carne, ensaladas y postre',
      'Estimación precisa de botellas de refrescos, vino, cerveza y kilos de hielo',
      'Ajuste según horario (almuerzo vs cena vs tarde de cóctel)',
      'Lista de compras consolidada lista para el supermercado'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['catering', 'bebidas', 'comida', 'eventos', 'calculadora']
  },
  {
    id: 'n1-checklist-de-boda-etapas',
    nivel: 'Nivel 1',
    categoria: 'Eventos & Fiestas',
    iconoCategoria: '🎉',
    nombre: 'Checklist de Boda',
    descripcionCorta: 'Organiza tareas y pendientes por etapas.',
    queEs: 'Cronograma estructurado a 12 meses para novios con todas las tareas legales, proveedores y detalles del gran día.',
    problema: 'Sentirse abrumados por la cantidad de detalles de una boda y no saber qué contratar primero.',
    comoFunciona: [
      'Ingresas la fecha de la boda.',
      'El sistema ordena las tareas por meses (12 meses antes, 6 meses antes, 1 mes antes, última semana).',
      'Marcas cada hito cumplido con tu pareja.'
    ],
    publicoObjetivo: 'Novios organizando su boda por su cuenta o con wedding planner.',
    funcionesPrincipales: [
      'Cronograma regresivo de 12 meses dividido en etapas lógicas',
      'Directorio de proveedores con cotizaciones comparadas',
      'Checklist legal de trámites civiles y religiosos',
      'Kit de emergencia para el día de la boda'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['boda', 'novios', 'matrimonio', 'checklist', 'eventos']
  },
  {
    id: 'n1-calc-presupuesto-fiesta',
    nivel: 'Nivel 1',
    categoria: 'Eventos & Fiestas',
    iconoCategoria: '🎉',
    nombre: 'Calculadora de Presupuesto de Fiesta',
    descripcionCorta: 'Distribuye el presupuesto entre decoración, comida, bebidas y entretenimiento.',
    queEs: 'Planificador financiero para eventos que asigna porcentajes recomendados a cada partida y previene sobrecostos.',
    problema: 'Gastar casi todo el presupuesto en el local y quedarse sin dinero para comida o música.',
    comoFunciona: [
      'Ingresas tu presupuesto total disponible.',
      'La herramienta distribuye los fondos recomendados (ej. 45% catering, 20% local, 15% decoración, 10% música, 10% imprevistos).',
      'Registras tus cotizaciones reales y controlas los desvíos.'
    ],
    publicoObjetivo: 'Cualquier persona que organiza un bautizo, comunión, graduación o fiesta privada.',
    funcionesPrincipales: [
      'Distribución porcentual estándar para todo tipo de fiestas',
      'Control de pagos adelantados y saldos pendientes a proveedores',
      'Gráfica interactiva de gasto real vs presupuestado',
      'Alertas si una partida excede el monto asignado'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['presupuesto', 'fiestas', 'eventos', 'gastos', 'calculadora']
  },
  {
    id: 'n1-generador-juegos-fiestas-reunion',
    nivel: 'Nivel 1',
    categoria: 'Eventos & Fiestas',
    iconoCategoria: '🎉',
    nombre: 'Generador de Juegos para Fiestas',
    descripcionCorta: 'Genera juegos según edad, número de personas y tipo de celebración.',
    queEs: 'Buscador de dinámicas de grupo, juegos de mesa sin materiales y retos divertidos para animar cualquier reunión.',
    problema: 'Fiestas apagadas donde la gente no interactúa y se forman grupos aislados.',
    comoFunciona: [
      'Indicas el tipo de público (niños, jóvenes, adultos, mixto) y cantidad de asistentes.',
      'Seleccionas si quieres juegos tranquilos o de mucha energía.',
      'Obtienes dinámicas con reglas claras listas para explicar en 1 minuto.'
    ],
    publicoObjetivo: 'Animadores, profesores, anfitriones de fiestas y coordinadores de grupos.',
    funcionesPrincipales: [
      'Más de 70 dinámicas y juegos de integración probados',
      'Filtro por materiales necesarios (ninguno, papel y lápiz, globos)',
      'Temporizador y pulsador de turnos integrado',
      'Modo "rompehielo rápido" para iniciar la fiesta'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['juegos', 'dinamicas', 'animacion', 'fiestas', 'diversion']
  },

  // ==========================================
  // 17. ORGANIZACIÓN DEL HOGAR
  // ==========================================
  {
    id: 'n1-planner-de-limpieza-hogar',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏠',
    nombre: 'Planner de Limpieza',
    descripcionCorta: 'Organiza las tareas de limpieza diarias, semanales y mensuales.',
    queEs: 'Sistema de limpieza por zonas (método FlyLady) que mantiene la casa impecable dedicando solo 15-20 minutos al día.',
    problema: 'Pasar todo el fin de semana limpiando la casa en lugar de descansar y disfrutar con la familia.',
    comoFunciona: [
      'Eliges tu rutina (diaria de 15 min + una zona de la casa por semana).',
      'Sigues el checklist de la zona activa (cocina, baños, dormitorios).',
      'Mantienes el hogar en orden constante sin maratones de limpieza.'
    ],
    publicoObjetivo: 'Familias, personas que viven solas o comparten piso.',
    funcionesPrincipales: [
      'Rutinas divididas en tareas diarias, semanales, mensuales y de temporada',
      'Rotación automática de 5 zonas del hogar',
      'Temporizador de limpieza exprés de 15 minutos',
      'Ficha imprimible para asignar tareas en el refrigerador'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['limpieza', 'hogar', 'flylady', 'orden', 'organizacion']
  },
  {
    id: 'n1-checklist-de-mudanza-pasos',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏠',
    nombre: 'Checklist de Mudanza',
    descripcionCorta: 'Guía paso a paso para preparar una mudanza.',
    queEs: 'Manual de mudanza sin estrés con sistema de etiquetado de cajas por colores y checklist de trámites de suministros.',
    problema: 'El caos de llegar a la casa nueva y tener 40 cajas sin saber en cuál están los platos, sábanas o cargadores.',
    comoFunciona: [
      'Sigues la cuenta regresiva desde 4 semanas antes (depurar, conseguir cajas, trámites de internet).',
      'Registras el contenido de cada caja numerada y le asignas un color por habitación.',
      'Desempacas en tu nuevo hogar de forma rápida y ordenada.'
    ],
    publicoObjetivo: 'Personas o familias que van a cambiar de casa o departamento.',
    funcionesPrincipales: [
      'Sistema de inventario de cajas con código de color y número',
      'Checklist de trámites legales, cambio de dirección y suministros',
      'Lista de la "Caja de supervivencia del primer día"',
      'Etiquetas descargables e imprimibles para pegar en las cajas'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['mudanza', 'cajas', 'hogar', 'checklist', 'organizacion']
  },
  {
    id: 'n1-inventario-del-hogar-objetos',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏠',
    nombre: 'Inventario del Hogar',
    descripcionCorta: 'Registra objetos importantes, ubicación y fecha de compra.',
    queEs: 'Registro patrimonial de electrodomésticos, herramientas y objetos valiosos con números de serie y fotos de boletas para seguros.',
    problema: 'Perder garantías o no poder reclamar al seguro de hogar tras un siniestro por no tener comprobantes ni números de serie.',
    comoFunciona: [
      'Registras el artículo con su marca, modelo, precio y fecha de compra.',
      'Adjuntas la foto del comprobante o factura de garantía.',
      'Sabes en qué armario o caja está guardado cada objeto poco usado.'
    ],
    publicoObjetivo: 'Propietarios, arrendatarios y personas organizadas.',
    funcionesPrincipales: [
      'Registro por estancias (sala, cocina, trastero, garaje)',
      'Alertas de expiración de garantías de electrodomésticos',
      'Cálculo del valor total asegurado del hogar',
      'Exportación en PDF para pólizas de seguro'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['inventario', 'hogar', 'garantias', 'seguro', 'organizacion']
  },
  {
    id: 'n1-planner-mantenimiento-casa',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏠',
    nombre: 'Planner de Mantenimiento',
    descripcionCorta: 'Organiza tareas de mantenimiento del hogar.',
    queEs: 'Calendario preventivo para revisar calderas, filtros de aire acondicionado, sellado de ventanas y tejados antes de averías caras.',
    problema: 'Averías costosas provocadas por descuidar revisiones sencillas como limpiar filtros o descalcificar tuberías.',
    comoFunciona: [
      'Revisas las tareas programadas según la estación (primavera, otoño, invierno).',
      'Realizas la inspección guiada y marcas la fecha de mantenimiento.',
      'Anotas contactos de fontaneros y electricistas de confianza.'
    ],
    publicoObjetivo: 'Dueños de casas unifamiliares, pisos o administradores de propiedades.',
    funcionesPrincipales: [
      'Calendario estacional de mantenimiento preventivo',
      'Guía paso a paso para tareas básicas de bricolaje del hogar',
      'Historial de reparaciones y gastos de mantenimiento',
      'Directorio de técnicos de confianza'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['mantenimiento', 'reparaciones', 'hogar', 'bricolaje', 'planner']
  },
  {
    id: 'n1-organizador-de-despensa-alimentos',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏠',
    nombre: 'Organizador de Despensa',
    descripcionCorta: 'Registra productos y ayuda a controlar existencias.',
    queEs: 'Control de stock de alimentos no perecederos y congelador con alertas de fechas de consumo preferente.',
    problema: 'Comprar latas y pastas repetidas mientras productos en el fondo de la despensa caducan y se tiran.',
    comoFunciona: [
      'Añades los alimentos guardados en despensa o congelador con su fecha.',
      'La herramienta ordena los productos con el principio FIFO (lo primero que entra, primero que sale).',
      'Consultas tu despensa desde el supermercado para no duplicar compras.'
    ],
    publicoObjetivo: 'Hogares que buscan evitar el desperdicio alimentario y ahorrar dinero.',
    funcionesPrincipales: [
      'Semáforo visual de caducidades próximas (verde, amarillo, rojo)',
      'Control de existencias mínimas para reposición',
      'Buscador de recetas según lo que está por vencer en tu despensa',
      'Categorías claras: conservas, harinas, especias, congelados'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['despensa', 'stock', 'alimentos', 'caducidad', 'hogar']
  },

  // ==========================================
  // 18. EMPRENDIMIENTO
  // ==========================================
  {
    id: 'n1-generador-ideas-de-negocio',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Generador de Ideas de Negocio',
    descripcionCorta: 'Introduce habilidades, intereses y presupuesto para obtener ideas de negocio.',
    queEs: 'Motor de ideación emprendedora que cruza tus fortalezas personales con oportunidades reales de mercado de baja inversión.',
    problema: 'Querer emprender pero sentirse bloqueado sin saber qué producto o servicio ofrecer.',
    comoFunciona: [
      'Seleccionas tus habilidades (diseño, ventas, cocina, tecnología) y tu capital disponible ($100, $500, $2000).',
      'Indicas tu modelo preferido (servicios, productos digitales, ecommerce local).',
      'Obtienes 5 propuestas de negocio viables con sus primeros pasos.'
    ],
    publicoObjetivo: 'Aspirantes a emprendedores, profesionales en transición y creativos.',
    funcionesPrincipales: [
      'Matriz de cruce: Habilidad + Pasión + Problema de mercado',
      'Filtro por capital inicial requerido (desde $0)',
      'Modelo de monetización sugerido por idea',
      'Guía para conseguir tu primer cliente en 7 días'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['negocios', 'ideas', 'emprender', 'startup', 'monetizacion']
  },
  {
    id: 'n1-calc-precio-de-venta-margen',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Calculadora de Precio de Venta',
    descripcionCorta: 'Calcula precio recomendado según costos y margen deseado.',
    queEs: 'Simulador de fijación de precios (Pricing) que calcula precio final, margen bruto, margen neto y punto de equilibrio.',
    problema: 'Fijar precios copiando a la competencia sin conocer los costos ocultos ni el margen real del negocio.',
    comoFunciona: [
      'Ingresas costos directos (materiales/insumos) y prorrateas costos fijos (alquiler, internet, sueldos).',
      'Defines el margen de beneficio neto que deseas obtener.',
      'Obtienes el precio de venta recomendado con y sin impuestos (IVA).'
    ],
    publicoObjetivo: 'Pequeños empresarios, comerciantes y creadores de productos.',
    funcionesPrincipales: [
      'Cálculo de margen sobre el costo (Markup) vs margen sobre el precio',
      'Inclusión de comisiones de tarjetas y pasarelas de pago',
      'Simulador de descuentos promocionales sin entrar en pérdidas',
      'Tabla comparativa de escenarios de precios'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['pricing', 'precios', 'margen', 'costos', 'emprendimiento']
  },
  {
    id: 'n1-validador-idea-de-negocio',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Validador de Idea de Negocio',
    descripcionCorta: 'Evalúa una idea según problema, mercado, competencia y facilidad de monetización.',
    queEs: 'Cuestionario de auditoría de 15 variables para puntuar la viabilidad comercial de un proyecto antes de invertir dinero.',
    problema: 'Invertir meses de trabajo y ahorros en un producto que nadie necesita ni está dispuesto a pagar.',
    comoFunciona: [
      'Respondes a las preguntas clave sobre urgencia del problema, tamaño de mercado y competencia.',
      'El sistema calcula una puntuación de viabilidad sobre 100.',
      'Identificas los puntos débiles y recibes sugerencias para pivotar.'
    ],
    publicoObjetivo: 'Fundadores de startups, consultores y emprendedores noveles.',
    funcionesPrincipales: [
      'Puntuación global de viabilidad comercial (Idea Score)',
      'Análisis de barreras de entrada y diferenciación',
      'Plantilla de entrevistas de validación con clientes reales',
      'Informe descargable con riesgos y oportunidades'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['validacion', 'viabilidad', 'leanstartup', 'ideas', 'negocios']
  },
  {
    id: 'n1-planner-de-lanzamiento-producto',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Planner de Lanzamiento',
    descripcionCorta: 'Divide el lanzamiento de un producto en tareas concretas.',
    queEs: 'Ruta crítica de lanzamiento en 4 fases (Pre-lanzamiento, Expectativa, Apertura de Carrito, Cierre) para maximizar ventas.',
    problema: 'Lanzar un producto o servicio sin generar expectativa previa y no conseguir ventas en el día de estreno.',
    comoFunciona: [
      'Configuras la fecha de apertura de ventas.',
      'Sigues el cronograma de calentamiento de audiencia a 14 días.',
      'Ejecutas las publicaciones, correos y ofertas programadas.'
    ],
    publicoObjetivo: 'Infoproductores, tiendas online, agencias y creadores.',
    funcionesPrincipales: [
      'Cronograma interactivo de las 4 fases de lanzamiento',
      'Checklist técnico (pasarela de pagos, página de gracias, emails)',
      'Banco de plantillas de emails y posts de cuenta regresiva',
      'Métricas de seguimiento de conversión del lanzamiento'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$17 USD',
    tags: ['lanzamiento', 'marketing', 'ventas', 'infoproductos', 'emprendimiento']
  },
  {
    id: 'n1-calc-punto-de-equilibrio',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Calculadora de Punto de Equilibrio',
    descripcionCorta: 'Calcula cuántas ventas necesita un negocio para cubrir sus costos.',
    queEs: 'Simulador de Break-Even Point que revela el número exacto de unidades o facturación mínima para no perder dinero.',
    problema: 'No saber cuántos clientes o pedidos mínimos mensuales se necesitan para pagar los gastos fijos del local o negocio.',
    comoFunciona: [
      'Ingresas tus costos fijos mensuales (alquiler, salarios, suministros).',
      'Añades el precio de venta unitario y el costo variable unitario.',
      'Obtienes las unidades exactas que debes vender al mes y al día para estar en equilibrio.'
    ],
    publicoObjetivo: 'Comerciantes, dueños de negocios locales y profesionales independientes.',
    funcionesPrincipales: [
      'Cálculo gráfico interactivo del punto de equilibrio',
      'Meta de ventas diarias mínima de supervivencia',
      'Simulador de impacto al reducir costos fijos o subir precios',
      'Fórmula explicada de forma sencilla y visual'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['breakeven', 'equilibrio', 'finanzas-empresa', 'costos', 'ventas']
  },

  // ==========================================
  // 19. MARKETING
  // ==========================================
  {
    id: 'n1-generador-de-hooks-atencion',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Generador de Hooks',
    descripcionCorta: 'Introduce producto y público objetivo para obtener ideas de ganchos.',
    queEs: 'Creador de frases de enganche magnéticas para los primeros 3 segundos de videos, anuncios o títulos de blogs.',
    problema: 'Que los usuarios deslicen de largo y no vean tus videos o anuncios por culpa de un inicio aburrido.',
    comoFunciona: [
      'Indicas tu producto/servicio y el dolor principal de tu cliente.',
      'Seleccionas el ángulo psicológico (curiosidad, controversia, beneficio directo, error común).',
      'Obtienes 15 variantes de ganchos probados de alta retención.'
    ],
    publicoObjetivo: 'Creadores de contenido, copywriters y anunciantes en TikTok, Reels y YouTube.',
    funcionesPrincipales: [
      'Más de 50 fórmulas psicológicas de ganchos virales',
      'Filtro por formato (video corto, hilo de Twitter, anuncio de pago)',
      'Medidor de fuerza persuasiva del gancho',
      'Banco de palabras de poder y disparadores emocionales'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['hooks', 'ganchos', 'copywriting', 'atencion', 'marketing']
  },
  {
    id: 'n1-generador-de-cta-llamadas',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Generador de CTA',
    descripcionCorta: 'Crea llamadas a la acción según objetivo de la campaña.',
    queEs: 'Optimizador de botones y frases de llamado a la acción (Call to Action) para maximizar la tasa de clics y conversiones.',
    problema: 'Usar botones sosos como "Enviar" o "Comprar" que generan baja tasa de respuesta.',
    comoFunciona: [
      'Eliges tu objetivo (registro a webinar, descarga de lead magnet, compra directa, agendar llamada).',
      'Indicas el tono de tu marca (urgente, amigable, exclusivo).',
      'Recibes llamados a la acción orientados a beneficios concretos.'
    ],
    publicoObjetivo: 'Diseñadores de landing pages, marketers y redactores publicitarios.',
    funcionesPrincipales: [
      'CTAs clasificados por etapa del embudo (ToFu, MoFu, BoFu)',
      'Fórmulas de primera persona ("Quiero mi guía gratuita")',
      'Micro-copys de reducción de fricción ("Sin tarjeta de crédito")',
      'Generador de frases de escasez y urgencia éticas'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['cta', 'conversion', 'botones', 'copywriting', 'marketing']
  },
  {
    id: 'n1-calendario-de-contenido-estrategico',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Calendario de Contenido',
    descripcionCorta: 'Organiza publicaciones por día, plataforma y objetivo.',
    queEs: 'Planificador mensual de publicaciones multicanal para equilibrar contenidos de atracción, educación y venta.',
    problema: 'Publicar de forma caótica sin estrategia y quemar a la audiencia con ofertas constantes o contenido irrelevante.',
    comoFunciona: [
      'Distribuyes los 4 pilares de contenido (Educar, Entretener, Inspirar, Vender).',
      'Asignas los canales (Instagram, LinkedIn, Newsletter, Blog).',
      'Visualizas el calendario mensual con estados de redacción y diseño.'
    ],
    publicoObjetivo: 'Community managers, agencias de marketing y marcas personales.',
    funcionesPrincipales: [
      'Matriz de contenidos con los 4 pilares estratégicos',
      'Vista mensual y semanal con códigos de color por canal',
      'Control de estados: Idea > En Redacción > Diseñado > Programado',
      'Plantilla lista para exportar o compartir con clientes'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['contenido', 'calendario', 'redessociales', 'estrategia', 'marketing']
  },
  {
    id: 'n1-generador-ideas-de-contenido-temas',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Generador de Ideas de Contenido',
    descripcionCorta: 'Introduce nicho y producto para obtener temas de contenido.',
    queEs: 'Matriz infinita de temas para redes sociales que transforma 1 sola idea en 10 formatos distintos.',
    problema: 'Quedarse sin ideas sobre qué publicar y abandonar las redes de la empresa.',
    comoFunciona: [
      'Escribes tu nicho o producto (ej. pastelería artesanal, clases de inglés).',
      'La herramienta genera temas clasificados por mitos, tutoriales, errores comunes, historias y detrás de escena.',
      'Eliges los temas para llenar tu parrilla de las próximas 4 semanas.'
    ],
    publicoObjetivo: 'Dueños de negocios, freelancers y creadores de contenido.',
    funcionesPrincipales: [
      'Matriz de multiplicación: 1 concepto en 10 ángulos distintos',
      'Buscador de preguntas frecuentes y dolores del cliente',
      'Banco de tendencias y formatos evergreen',
      'Exportación en lista ordenada para tu calendario'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['ideas', 'contenido', 'temas', 'redessociales', 'marketing']
  },
  {
    id: 'n1-analizador-de-oferta-irresistible',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Analizador de Oferta',
    descripcionCorta: 'Evalúa una oferta según problema, beneficio, diferenciación y llamada a la acción.',
    queEs: 'Auditor de ofertas de venta basado en la fórmula de la "Oferta Irresistible" (Alex Hormozi) para maximizar el valor percibido.',
    problema: 'Tener un buen producto pero empaquetarlo de forma poco atractiva, obligando a competir por precio bajo.',
    comoFunciona: [
      'Rellenas los componentes de tu oferta (resultado soñado, probabilidad de éxito percibida, tiempo y esfuerzo).',
      'La herramienta calcula el índice de valor percibido de tu propuesta.',
      'Recibes recomendaciones para añadir bonus, garantías y urgencia.'
    ],
    publicoObjetivo: 'Consultores, coaches, agencias y vendedores de servicios de alto valor (High Ticket).',
    funcionesPrincipales: [
      'Ecuación de valor con 4 variables psicológicas',
      'Constructor de pilas de bonus irresistibles',
      'Generador de garantías de riesgo cero (reversión de riesgo)',
      'Checklist de claridad de la propuesta de venta'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['oferta', 'ventas', 'highticket', 'persuasion', 'marketing']
  },

  // ==========================================
  // 20. REDES SOCIALES
  // ==========================================
  {
    id: 'n1-planner-de-instagram-visual',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Planner de Instagram',
    descripcionCorta: 'Organiza publicaciones, reels, historias y objetivos semanales.',
    queEs: 'Previsualizador de feed en cuadrícula de 9 y planificador de secuencias de historias para vender por mensajes directos.',
    problema: 'Publicar fotos desordenadas que rompen la estética visual del perfil y no tener una estrategia de venta en stories.',
    comoFunciona: [
      'Subes o arrastras tus fotos para previsualizar la armonía visual del feed de 9 casillas.',
      'Planificas la secuencia diaria de 4 historias (atención, debate, testimonio, llamado a DM).',
      'Copias el texto y hashtags listos para publicar.'
    ],
    publicoObjetivo: 'Influencers, tiendas de moda, fotógrafos y marcas personales en Instagram.',
    funcionesPrincipales: [
      'Simulador visual del grid de 9 casillas con drag and drop',
      'Plantillas de secuencias de historias que convierten en ventas',
      'Organizador de historias destacadas y portadas',
      'Contador de publicaciones y reels semanales'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['instagram', 'feed', 'grid', 'stories', 'redessociales']
  },
  {
    id: 'n1-generador-de-hashtags-nichos',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Generador de Hashtags',
    descripcionCorta: 'Genera grupos de hashtags relacionados con un nicho.',
    queEs: 'Agrupador estratégico de hashtags combinando etiquetas de gran volumen, mediano volumen y micro-nicho para posicionamiento SEO.',
    problema: 'Usar siempre los mismos 30 hashtags gigantes (#love, #marketing) donde tu publicación desaparece en segundos.',
    comoFunciona: [
      'Introduces tu tema principal y ubicación o idioma.',
      'La herramienta ensambla un grupo equilibrado de 15 a 20 hashtags optimizados.',
      'Copias el bloque en 1 clic para pegarlo en tu pie de foto o primer comentario.'
    ],
    publicoObjetivo: 'Creadores de contenido y administradores de cuentas de Instagram y TikTok.',
    funcionesPrincipales: [
      'Estrategia de pirámide de hashtags (Grandes, Medios, Específicos)',
      'Grupos temáticos guardables por tipo de publicación',
      'Detector de hashtags penalizados o con shadowban',
      'Botón de copia rápida al portapapeles'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['hashtags', 'instagram', 'seo', 'alcance', 'redessociales']
  },
  {
    id: 'n1-generador-ideas-para-reels-tiktok',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Generador de Ideas para Reels',
    descripcionCorta: 'Introduce nicho y objetivo para obtener conceptos de vídeos.',
    queEs: 'Laboratorio de guiones para videos verticales de 30-60 segundos con estructura probada: Gancho + Cuerpo + Remate + CTA.',
    problema: 'Grabar videos largos y monótonos que la gente abandona a los 5 segundos de reproducción.',
    comoFunciona: [
      'Seleccionas tu nicho y el objetivo (ganar seguidores, viralizar, vender).',
      'Recibes un guion estructurado segundo a segundo con indicaciones de texto en pantalla y música sugerida.',
      'Grabas con el teleprompter o leyendo el paso a paso.'
    ],
    publicoObjetivo: 'Creadores de TikTok, Instagram Reels y YouTube Shorts.',
    funcionesPrincipales: [
      'Estructura de guion segundo a segundo (0-3s, 4-20s, 21-30s)',
      'Sugerencias de textos dinámicos para pantalla y b-roll',
      'Filtro por nivel de producción (hablando a cámara, voz en off, pantalla grabada)',
      'Colección de audios en tendencia recomendados'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['reels', 'tiktok', 'shorts', 'videos', 'redessociales']
  },
  {
    id: 'n1-calendario-publicaciones-mensual',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Calendario de Publicaciones',
    descripcionCorta: 'Organiza contenido mensual para redes sociales.',
    queEs: 'Vista panorámica mensual para planificar los 30 días de contenido con fechas conmemorativas y lanzamientos integrados.',
    problema: 'Llegar al día del padre, navidad o día internacional de tu rubro sin haber preparado contenido especial.',
    comoFunciona: [
      'Consulta las fechas especiales y efemérides del mes sugeridas.',
      'Asignas los temas a los días clave.',
      'Revisas que la frecuencia de publicación sea constante en cada red.'
    ],
    publicoObjetivo: 'Social media managers y pequeños comercios.',
    funcionesPrincipales: [
      'Calendario con más de 200 días internacionales y festividades comerciales',
      'Filtro por plataforma (TikTok, Instagram, Facebook, X, Pinterest)',
      'Control visual de horarios de mayor interacción',
      'Exportación en formato mensual para clientes'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['calendario', 'redessociales', 'efemerides', 'planificador', 'socialmedia']
  },
  {
    id: 'n1-banco-de-hooks-biblioteca',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Banco de Hooks',
    descripcionCorta: 'Biblioteca organizada de ganchos para diferentes nichos y formatos.',
    queEs: 'Colección clasificada de más de 200 aperturas virales organizadas por nichos (fitness, negocios, moda, desarrollo, cocina).',
    problema: 'Perder horas pensando cómo titular un reel o publicación para que la gente se detenga.',
    comoFunciona: [
      'Filtras por tu categoría y emoción deseada (sorpresa, secreto, advertencia).',
      'Copias la plantilla rellenando únicamente tus palabras entre corchetes.',
      'Pegas en tu video o publicación para captar la atención de inmediato.'
    ],
    publicoObjetivo: 'Copywriters, creadores de contenido y agencias digitales.',
    funcionesPrincipales: [
      'Más de 200 plantillas de ganchos categorizadas',
      'Filtros por nivel de retención comprobada en video',
      'Buscador rápido por palabra clave',
      'Sección de favoritos personales para guardar los ganchos que mejor te funcionan'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['hooks', 'biblioteca', 'copywriting', 'viral', 'redessociales']
  },

  // ==========================================
  // 21. CREATIVIDAD
  // ==========================================
  {
    id: 'n1-generador-ideas-creativas-brainstorming',
    nivel: 'Nivel 1',
    categoria: 'Creatividad',
    iconoCategoria: '🎨',
    nombre: 'Generador de Ideas Creativas',
    descripcionCorta: 'Introduce un tema y recibe diferentes conceptos para desarrollar.',
    queEs: 'Estimulador de pensamiento lateral basado en la técnica SCAMPER (Sustituir, Combinar, Adaptar, Modificar, Proponer otros usos, Eliminar, Reordenar).',
    problema: 'El bloqueo creativo cuando intentas solucionar un problema y siempre llegas a las mismas ideas repetitivas.',
    comoFunciona: [
      'Introduces tu concepto o producto actual.',
      'Eliges un disparador SCAMPER (ej. ¿Qué pasa si eliminamos la parte más cara?).',
      'Obtienes ángulos disruptivos y conceptos originales fuera de la caja.'
    ],
    publicoObjetivo: 'Diseñadores, publicistas, guionistas, innovadores y artistas.',
    funcionesPrincipales: [
      'Técnica SCAMPER guiada paso a paso',
      'Preguntas provocadoras de pensamiento lateral',
      'Lienzo de notas rápidas para capturar ideas al vuelo',
      'Exportación del mapa mental de la sesión'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['creatividad', 'scamper', 'ideas', 'innovacion', 'brainstorming']
  },
  {
    id: 'n1-ruleta-de-ideas-combinatoria',
    nivel: 'Nivel 1',
    categoria: 'Creatividad',
    iconoCategoria: '🎨',
    nombre: 'Ruleta de Ideas',
    descripcionCorta: 'Genera combinaciones aleatorias de temas, formatos y objetivos.',
    queEs: 'Motor de combinación aleatoria (Tragamonedas Creativo) que une 3 variables inesperadas para generar conceptos únicos.',
    problema: 'La falta de originalidad causada por pensar siempre en las combinaciones lógicas de siempre.',
    comoFunciona: [
      'Pulsas el botón para girar los 3 rodillos (Personaje/Público + Entorno/Contexto + Formato/Restricción).',
      'Recibes una premisa creativa inesperada (ej. "Un astronauta" + "en una cafetería vintage" + "contado en cómic de 4 viñetas").',
      'Comienzas a crear con un punto de partida divertido.'
    ],
    publicoObjetivo: 'Ilustradores, escritores, diseñadores y docentes de talleres creativos.',
    funcionesPrincipales: [
      'Millones de combinaciones aleatorias posibles',
      'Ruleta temática para ilustradores, escritores o publicistas',
      'Reto contra el reloj: crea un boceto en 10 minutos',
      'Historial de combinaciones desbloqueadas'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$8 USD',
    tags: ['ruleta', 'combinatoria', 'creatividad', 'arte', 'escritura']
  },
  {
    id: 'n1-planner-proyectos-creativos-arte',
    nivel: 'Nivel 1',
    categoria: 'Creatividad',
    iconoCategoria: '🎨',
    nombre: 'Planner de Proyectos Creativos',
    descripcionCorta: 'Organiza ideas, referencias, tareas y fechas.',
    queEs: 'Cuaderno de producción para proyectos artísticos, libros, cortometrajes o colecciones de diseño.',
    problema: 'Tener cuadernos llenos de bocetos e ideas brillantes que nunca se convierten en una obra terminada.',
    comoFunciona: [
      'Creas tu proyecto con moodboard de inspiración.',
      'Divides el proceso en fases (Ideación, Bocetaje, Producción, Pulido, Presentación).',
      'Haces seguimiento de los plazos de entrega y recursos necesarios.'
    ],
    publicoObjetivo: 'Artistas visuales, escritores, diseñadores gráficos y músicos.',
    funcionesPrincipales: [
      'Moodboard visual integrado de referencias',
      'Cronograma por hitos creativos de producción',
      'Ficha de personajes, paletas de color y conceptos clave',
      'Barra de progreso hacia la culminación de la obra'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['proyectos', 'arte', 'escritura', 'diseno', 'creatividad']
  },
  {
    id: 'n1-banco-de-inspiracion-moodboards',
    nivel: 'Nivel 1',
    categoria: 'Creatividad',
    iconoCategoria: '🎨',
    nombre: 'Banco de Inspiración',
    descripcionCorta: 'Organiza referencias por categorías y proyectos.',
    queEs: 'Galería visual y textual para curar referencias de tipografías, paletas de colores, metáforas y estilos estéticos.',
    problema: 'Guardar capturas de pantalla caóticas en el móvil y nunca encontrarlas cuando se necesita inspiración para un diseño.',
    comoFunciona: [
      'Creas tableros por categorías (minimalismo, retro, tipografías, citas).',
      'Guardas imágenes, enlaces y notas de inspiración.',
      'Consultas tus tableros al iniciar cualquier nuevo encargo creativo.'
    ],
    publicoObjetivo: 'Diseñadores UI/UX, directores de arte, decoradores e ilustradores.',
    funcionesPrincipales: [
      'Tableros visuales tipo Pinterest limpios y sin anuncios',
      'Extractor de paletas cromáticas (códigos HEX) a partir de imágenes',
      'Etiquetado por sensaciones (cálido, elegante, rústico, futurista)',
      'Exportación en PDF o ficha de estilo de marca'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['inspiracion', 'moodboard', 'referencias', 'diseno', 'creatividad']
  },
  {
    id: 'n1-generador-de-nombres-naming',
    nivel: 'Nivel 1',
    categoria: 'Creatividad',
    iconoCategoria: '🎨',
    nombre: 'Generador de Nombres',
    descripcionCorta: 'Genera nombres para proyectos, productos o marcas según palabras clave.',
    queEs: 'Asistente de Naming profesional que combina raíces etimológicas, fusión de palabras (portmanteau) y sonoridad fonética.',
    problema: 'Tener listo un producto o podcast pero pasar semanas atascado sin encontrar un nombre memorable y disponible.',
    comoFunciona: [
      'Introduces 2 o 3 palabras clave que describen la esencia de tu proyecto.',
      'Seleccionas el estilo de nombre (moderno/tech, clásico/elegante, descriptivo, abstracto).',
      'Obtienes 20 propuestas de nombres con verificación de disponibilidad de dominio básica.'
    ],
    publicoObjetivo: 'Emprendedores, creadores de podcasts, escritores y agencias de branding.',
    funcionesPrincipales: [
      'Técnicas de naming: Fusión, Acrónimos, Metáforas y Neologismos',
      'Evaluación de facilidad de pronunciación y memorabilidad',
      'Comprobador de dominios web (.com, .io) y nombres en redes sociales',
      'Guía básica de registro de marca y distintividad'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['naming', 'marcas', 'nombres', 'branding', 'creatividad']
  },

  // ==========================================
  // 22. FREELANCERS
  // ==========================================
  {
    id: 'n1-calc-precio-por-hora-freelance',
    nivel: 'Nivel 1',
    categoria: 'Freelancers',
    iconoCategoria: '🧑‍💻',
    nombre: 'Calculadora de Precio por Hora',
    descripcionCorta: 'Calcula una tarifa mínima considerando ingresos deseados, gastos y horas disponibles.',
    queEs: 'Calculadora de tarifa horaria real para profesionales independientes que considera vacaciones pagadas, impuestos y horas facturables reales.',
    problema: 'Dividir el sueldo deseado entre 160 horas al mes sin tener en cuenta que un freelance solo puede facturar entre 20 y 25 horas semanales por gestión administrativa.',
    comoFunciona: [
      'Ingresas tus ingresos netos mensuales deseados y tus gastos fijos de negocio.',
      'Indicas tus días de vacaciones al año y horas reales facturables por semana (no todo el día es facturable).',
      'Obtienes tu tarifa por hora mínima para ser rentable y tu tarifa recomendada con colchón de ahorro.'
    ],
    publicoObjetivo: 'Freelancers, diseñadores, desarrolladores, consultores y traductores.',
    funcionesPrincipales: [
      'Cálculo de Horas Facturables Reales (Billable Hours)',
      'Inclusión de cotizaciones a la seguridad social, software e impuestos',
      'Comparativa de tarifa horaria vs tarifa por día (Day Rate)',
      'Plantilla explicada para justificar tarifas ante clientes'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['tarifa', 'preciohora', 'freelance', 'finanzas', 'autonomos']
  },
  {
    id: 'n1-generador-de-propuestas-comerciales',
    nivel: 'Nivel 1',
    categoria: 'Freelancers',
    iconoCategoria: '🧑‍💻',
    nombre: 'Generador de Propuestas',
    descripcionCorta: 'Crea una estructura de propuesta comercial a partir de los datos del proyecto.',
    queEs: 'Redactor de propuestas comerciales persuasivas estructuradas en: Diagnóstico + Solución + Paquetes de Precios + Condiciones.',
    problema: 'Enviar presupuestos simples en un mensaje de WhatsApp que provocan que los clientes regateen el precio.',
    comoFunciona: [
      'Introduces el nombre del cliente, los dolores detectados en la reunión y el alcance del trabajo.',
      'Defines 3 opciones de inversión (Básica, Recomendada, Premium).',
      'Generas una propuesta profesional lista para enviar en PDF.'
    ],
    publicoObjetivo: 'Consultores, diseñadores web, copywriters y agencias de servicios.',
    funcionesPrincipales: [
      'Estructura de propuesta con psicología de ventas (3 niveles de precios)',
      'Cláusulas de límite de revisiones y condiciones de pago (50% anticipo)',
      'Sección de cronograma e hitos de entrega claros',
      'Exportación en diseño ejecutivo elegante'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['propuestas', 'presupuesto', 'ventas', 'freelance', 'clientes']
  },
  {
    id: 'n1-cotizador-de-proyectos-alcance',
    nivel: 'Nivel 1',
    categoria: 'Freelancers',
    iconoCategoria: '🧑‍💻',
    nombre: 'Cotizador de Proyectos',
    descripcionCorta: 'Calcula un presupuesto según horas, complejidad y margen.',
    queEs: 'Calculadora de presupuestos a precio cerrado que desglosa horas por fase de trabajo y añade un factor de contingencia para evitar pérdidas por cambios del cliente.',
    problema: 'Dar un precio cerrado a ojo y terminar trabajando el triple de horas de las presupuestadas (Scope Creep).',
    comoFunciona: [
      'Desglosas las tareas del proyecto y estimas las horas de cada una.',
      'Añades el factor de complejidad (bajo, medio, alto) y margen de riesgo del 20%.',
      'Obtienes el presupuesto total cerrado óptimo.'
    ],
    publicoObjetivo: 'Desarrolladores de software, diseñadores y creadores de contenido.',
    funcionesPrincipales: [
      'Desglose por fases (Investigación, Diseño, Desarrollo, Revisiones)',
      'Calculadora de margen de seguridad contra cambios imprevistos',
      'Cálculo de precio por cambios adicionales fuera del alcance',
      'Generador de resumen de cotización para adjuntar a contratos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['cotizador', 'presupuestos', 'proyectos', 'alcance', 'freelance']
  },
  {
    id: 'n1-tracker-de-clientes-crm-simple',
    nivel: 'Nivel 1',
    categoria: 'Freelancers',
    iconoCategoria: '🧑‍💻',
    nombre: 'Tracker de Clientes',
    descripcionCorta: 'Control sencillo de clientes, proyectos y estados.',
    queEs: 'CRM minimalista para freelancers que hace seguimiento de prospectos, presupuestos enviados, proyectos en curso y facturas cobradas.',
    problema: 'Tener notas desordenadas y olvidar hacer seguimiento a presupuestos enviados a potenciales clientes.',
    comoFunciona: [
      'Registras cada cliente con sus datos de contacto y monto del proyecto.',
      'Mueves la tarjeta en el tablero (Contacto > Propuesta Enviada > En Desarrollo > Entregado > Cobrado).',
      'Consultas tu pipeline de facturación mensual proyectada.'
    ],
    publicoObjetivo: 'Profesionales independientes que gestionan múltiples proyectos simultáneos.',
    funcionesPrincipales: [
      'Tablero Kanban de estados de proyectos y cobros',
      'Historial de comunicaciones y acuerdos con cada cliente',
      'Control de facturas pagadas vs facturas pendientes de cobro',
      'Alerta de seguimiento para clientes sin respuesta'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['crm', 'clientes', 'proyectos', 'cobros', 'freelance']
  },
  {
    id: 'n1-control-de-horas-time-tracking',
    nivel: 'Nivel 1',
    categoria: 'Freelancers',
    iconoCategoria: '🧑‍💻',
    nombre: 'Control de Horas',
    descripcionCorta: 'Registra horas trabajadas por cliente y proyecto.',
    queEs: 'Cronómetro de proyectos con reporte detallado de horas facturables y cálculo automático del total a cobrar.',
    problema: 'Trabajar por horas y perder la cuenta del tiempo dedicado o no tener un reporte detallado para justificar la factura al cliente.',
    comoFunciona: [
      'Seleccionas el cliente y proyecto en curso.',
      'Inicias el temporizador mientras trabajas o añades bloques de tiempo manualmente.',
      'Generas la hoja de horas (timesheet) con el total en dinero calculado automáticamente.'
    ],
    publicoObjetivo: 'Freelancers con clientes recurrentes o cobro por horas.',
    funcionesPrincipales: [
      'Cronómetro con un clic por cliente y tarea',
      'Cálculo automático de honorarios según la tarifa horaria fijada',
      'Generador de Timesheet (hoja de horas) descargable en PDF',
      'Gráfica de rentabilidad: qué clientes consumen más tiempo vs ingresos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['horas', 'timetracking', 'cronometro', 'facturacion', 'freelance']
  }
];
