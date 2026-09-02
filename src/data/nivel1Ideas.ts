import { MiniAppIdea } from '../types';

export const NIVEL_1_IDEAS: MiniAppIdea[] = [
  // ==========================================
  // ADELGAZAMIENTO & FITNESS
  // ==========================================
  {
    id: 'proto-21-abdomen',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏃',
    nombre: 'Protocolo 21 Días Abdomen Definido',
    descripcionCorta: '21 entrenamientos guiados de 15 minutos para hacer en casa, con progresión y seguimiento sencillo.',
    queEs: 'Una mini-app web interactiva que organiza un programa progresivo de 21 días de entrenamiento enfocado en el core, sin equipamiento y con cronómetro automático por intervalos.',
    problema: 'La gente abandona las rutinas genéricas de YouTube porque no tienen una progresión clara ni saben qué ejercicio hacer cada día.',
    comoFunciona: [
      'El usuario selecciona su nivel inicial (principiante o intermedio).',
      'Cada día desbloquea una rutina de 15 minutos con temporizador visual y clips cortos de técnica.',
      'Marca el día como completado y ve su porcentaje de avance y racha activa.'
    ],
    publicoObjetivo: 'Personas sedentarias o con poco tiempo (25-45 años) que quieren entrenar en casa sin pagar gimnasio.',
    funcionesPrincipales: [
      'Calendario interactivo de 21 días con check-in diario',
      'Temporizador HIIT integrado con avisos sonoros',
      'Calculadora de quema calórica estimada',
      'Exportación de certificado de logro al finalizar'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$15 - $29 USD',
    tags: ['fitness', 'abdomen', 'casa', 'entrenamiento', 'reto']
  },
  {
    id: 'calc-deficit-calorico',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏃',
    nombre: 'Calculadora de Déficit Calórico Personalizado',
    descripcionCorta: 'Calcula calorías y macronutrientes exactos según tu metabolismo, peso actual y meta de pérdida de grasa.',
    queEs: 'Herramienta de cálculo nutricional que entrega un desglose exacto de calorías, proteínas, carbohidratos y grasas con ejemplos de platos.',
    problema: 'Las fórmulas de internet son complejas y confunden a quienes quieren perder peso sin pasar hambre.',
    comoFunciona: 'Ingresas edad, sexo, peso, altura y nivel de actividad; la herramienta calcula tu TMB, gasto total y aplica el déficit óptimo según tu objetivo.',
    publicoObjetivo: 'Personas que inician dieta de pérdida de peso o entrenadores que necesitan enviar planes rápidos.',
    funcionesPrincipales: [
      'Cálculo automático de Tasa Metabólica Basal (Harris-Benedict y Mifflin)',
      'Distribución personalizable de macros en gramos y porcentajes',
      'Guía visual descargable en PDF de porciones con la palma de la mano'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 - $19 USD',
    tags: ['nutricion', 'calorias', 'deficit', 'macros', 'peso']
  },
  {
    id: 'tracker-ayuno-intermitente',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏃',
    nombre: 'Temporizador Visual de Ayuno Intermitente',
    descripcionCorta: 'Reloj de ayuno 16:8 y 18:6 con alertas por fases metabólicas (cetosis, autofagia y quema de grasa).',
    queEs: 'Un reloj web minimalista para registrar ventanas de ayuno y alimentación con explicaciones biológicas de lo que ocurre en tu cuerpo en cada hora.',
    problema: 'Las apps de ayuno están llenas de anuncios molestos y suscripciones caras para un simple cronómetro.',
    comoFunciona: 'Presionas iniciar ayuno al terminar de cenar; la barra gráfica te muestra el estado metabólico actual y te notifica cuando se abre tu ventana de comida.',
    publicoObjetivo: 'Practicantes de ayuno intermitente, estilo de vida keto y vida saludable.',
    funcionesPrincipales: [
      'Selector de protocolos (14:10, 16:8, 18:6, 20:4)',
      'Línea de tiempo de fases biológicas en tiempo real',
      'Registro de agua y electrolitos consumidos'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$12 USD',
    tags: ['ayuno', 'keto', 'salud', 'temporizador']
  },
  {
    id: 'gluteos-casa-pro',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏃',
    nombre: 'Guía Interactiva Glúteos Fuertes en Casa',
    descripcionCorta: 'Rutinas de hipertrofia con bandas elásticas, cronómetro de tensión mecánica y registro de cargas.',
    queEs: 'Un planificador interactivo de 4 semanas con ejercicios paso a paso usando bandas de resistencia.',
    problema: 'Falta de estructura en rutinas de glúteos en casa que impiden ver resultados visibles.',
    comoFunciona: 'Sigues el cronograma semanal de 3 días con videos demostrativos y marcas tus repeticiones y sensaciones.',
    publicoObjetivo: 'Mujeres de 20-40 años interesadas en tonificación muscular en casa.',
    funcionesPrincipales: ['Biblioteca de 30 ejercicios con gif', 'Contador de repeticiones', 'Medidor de progreso en centímetros'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$17 USD',
    tags: ['gluteos', 'bandas', 'mujeres', 'casa']
  },

  // ==========================================
  // ARTESANÍA & DIY
  // ==========================================
  {
    id: 'calc-precio-artesanias',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🎨',
    nombre: 'Calculadora de Precios para Artesanos',
    descripcionCorta: 'Calcula el precio de venta justo para tus piezas considerando materiales, horas de trabajo y margen de ganancia.',
    queEs: 'Calculadora de costos y cotizaciones diseñada especialmente para creadores manuales (crochet, resina, velas, cerámica y costura).',
    problema: 'La mayoría de artesanos pierden dinero porque no cobran su mano de obra ni calculan los costos indirectos.',
    comoFunciona: 'Ingresas insumos usados, minutos trabajados, valor deseado por tu hora y porcentaje de ganancia; la app genera el precio mayorista y minorista.',
    publicoObjetivo: 'Emprendedoras de manualidades, tejedoras, ceramistas y fabricantes de velas artesanales.',
    funcionesPrincipales: [
      'Desglose exacto de costo unitario vs costo por lote',
      'Generador de etiqueta de precio y cotización imprimible',
      'Simulador de descuentos para promociones sin perder margen'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$14 - $24 USD',
    tags: ['artesania', 'crochet', 'precios', 'costos', 'manualidades']
  },
  {
    id: 'simulador-velas-cera-soya',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🎨',
    nombre: 'Formulador de Velas de Soja y Esencias',
    descripcionCorta: 'Calcula gramos exactos de cera, porcentaje de fragancia y punto de vertido para velas aromáticas perfectas.',
    queEs: 'Herramienta técnica para fabricantes de velas artesanales que calcula proporciones químicas y temperaturas ideales.',
    problema: 'Las velas quedan con túneles, grietas o sin aroma si no se calculan los porcentajes exactos de cera y fragancia.',
    comoFunciona: 'Indicas el volumen del frasco y tipo de cera; la app entrega los gramos exactos de cera, fragancia y mecha recomendada.',
    publicoObjetivo: 'Creadores de marcas de velas aromáticas y aficionados al DIY.',
    funcionesPrincipales: ['Calculadora de carga de fragancia (6% a 10%)', 'Guía de calibres de mechas según diámetro', 'Ficha técnica descargable'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['velas', 'diy', 'soja', 'fragancias']
  },
  {
    id: 'patrones-crochet-conversor',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🎨',
    nombre: 'Contador de Vueltas y Conversor de Puntos Crochet',
    descripcionCorta: 'Contador digital de vueltas con conversor automático de términos (US vs UK) y calculadora de ovillos.',
    queEs: 'Herramienta de ayuda para tejedores que evita perder la cuenta en patrones complejos de amigurumis y prendas.',
    problema: 'Perder la vuelta en un tejido obliga a desarmar horas de trabajo.',
    comoFunciona: 'Haces tap en pantalla o usas barra espaciadora para sumar vueltas, con notas por sección y conversión de abreviaturas.',
    publicoObjetivo: 'Tejedoras de amigurumis, crochet y dos agujas.',
    funcionesPrincipales: ['Contador de filas con audio', 'Traductor de abreviaturas en inglés a español', 'Calculadora de ovillos por metraje'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$9 USD',
    tags: ['crochet', 'amigurumi', 'tejido', 'contador']
  },

  // ==========================================
  // BELLEZA & SKINCARE
  // ==========================================
  {
    id: 'diagnostico-rutina-facial',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '✨',
    nombre: 'Generador de Rutina Facial por Tipo de Piel',
    descripcionCorta: 'Cuestionario interactivo que diseña tu rutina de día y noche según tu tipo de piel, clima y objetivos.',
    queEs: 'Evaluador digital que analiza sensibilidad, acné, manchas y deshidratación para armar el orden exacto de aplicación de cosméticos.',
    problema: 'La gente compra productos caros pero los usa en el orden incorrecto o mezcla activos incompatibles (ej. retinol con AHA).',
    comoFunciona: 'Respondes 7 preguntas sobre tu piel; el sistema genera una rutina visual paso a paso con advertencias de compatibilidad de activos.',
    publicoObjetivo: 'Amantes del cuidado de la piel y personas con dudas sobre cómo usar sérums y ácidos.',
    funcionesPrincipales: [
      'Validador de compatibilidad de ingredientes activos',
      'Cronograma semanal de exfoliación y mascarillas',
      'Ficha resumen lista para guardar en el móvil'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['skincare', 'piel', 'belleza', 'rutina', 'dermocosmética']
  },
  {
    id: 'vencimiento-cosmeticos-tracker',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '✨',
    nombre: 'Control de Caducidad de Cosméticos y PAO',
    descripcionCorta: 'Registra tus productos de belleza y recibe avisos cuando cumplan su periodo después de abiertos (PAO).',
    queEs: 'Organizador visual de tocador para saber qué productos están por vencer y evitar infecciones cutáneas.',
    problema: 'El 80% de las personas usa máscaras de pestañas y cremas vencidas sin recordar cuándo las abrieron.',
    comoFunciona: 'Añades el producto y la fecha de apertura; la herramienta calcula la fecha límite según el símbolo PAO (6M, 12M, 24M).',
    publicoObjetivo: 'Usuarios de maquillaje y skincare.',
    funcionesPrincipales: ['Alertas por color de caducidad', 'Lista de inventario del tocador', 'Recomendaciones de desecho seguro'],
    modeloMonetizacion: 'Freemium',
    rangoPrecio: '$7 USD versión pro',
    tags: ['maquillaje', 'vencimiento', 'cosmeticos']
  },

  // ==========================================
  // CARRERA & LINKEDIN
  // ==========================================
  {
    id: 'generador-headline-linkedin',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Optimizador de Titular y Acerca de LinkedIn',
    descripcionCorta: 'Fórmulas probadas para crear titulares atractivos que aumentan las apariciones en búsquedas de reclutadores.',
    queEs: 'Constructor paso a paso de titulares de alto impacto con palabras clave para profesionales en búsqueda de empleo.',
    problema: 'Los titulares aburridos como "Buscando nuevas oportunidades" son ignorados por el algoritmo de LinkedIn y los headhunters.',
    comoFunciona: 'Ingresas tu rol, logros numéricos y especialidad; la herramienta genera 10 opciones con fórmulas de copywriting profesional.',
    publicoObjetivo: 'Profesionales en transición de carrera, programadores, especialistas en marketing y consultores.',
    funcionesPrincipales: [
      'Generador de 10 variantes de titulares con palabras clave',
      'Estructurador del extracto "Acerca de mí" con storytelling',
      'Checklist de optimización de perfil estelar'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$19 USD',
    tags: ['linkedin', 'empleo', 'carrera', 'cv', 'titular']
  },
  {
    id: 'simulador-preguntas-entrevista',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Simulador de Respuestas Método STAR para Entrevistas',
    descripcionCorta: 'Estructura tus mejores respuestas (Situación, Tarea, Acción, Resultado) para brillar en entrevistas laborales.',
    queEs: 'Guía interactiva con plantillas para responder las 30 preguntas trampa más comunes de recursos humanos.',
    problema: 'Los candidatos se ponen nerviosos y divagan sin mostrar el impacto real de sus logros.',
    comoFunciona: 'Seleccionas la pregunta típica (ej. "Cuéntame de un conflicto con un colega") y completas los 4 bloques STAR guiados.',
    publicoObjetivo: 'Candidatos en procesos de selección.',
    funcionesPrincipales: ['Banco de 30 preguntas conductuales', 'Plantillas rellenables con ejemplos reales', 'Exportación de tarjetas de estudio'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['entrevistas', 'star', 'trabajo', 'recursoshumanos']
  },

  // ==========================================
  // COCINA & REPOSTERÍA
  // ==========================================
  {
    id: 'escalador-recetas-reposteria',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍳',
    nombre: 'Escalador de Molde y Porciones para Pastelería',
    descripcionCorta: 'Ajusta automáticamente las cantidades de ingredientes al cambiar el tamaño o forma del molde (redondo a cuadrado).',
    queEs: 'Calculadora matemática de volumen para pasteleros que recalcula gramos exactos para que los bizcochos no se desborden ni queden secos.',
    problema: 'Duplicar una receta a ojo en repostería arruina la textura y altura de los pasteles.',
    comoFunciona: 'Indicas el molde original de la receta y el molde que tienes; la app aplica el factor de conversión a todos los ingredientes al instante.',
    publicoObjetivo: 'Pasteleros caseros, reposteros de eventos y estudiantes de gastronomía.',
    funcionesPrincipales: [
      'Conversor entre moldes redondos, cuadrados y rectangulares',
      'Conversor de tazas a gramos por ingrediente específico (harina, azúcar, mantequilla)',
      'Impresión de receta adaptada con checklist de mise en place'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$12 USD',
    tags: ['reposteria', 'pasteleria', 'cocina', 'recetas', 'moldes']
  },
  {
    id: 'costeo-tortas-eventos',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍳',
    nombre: 'Calculadora de Costos y Porciones de Tortas',
    descripcionCorta: 'Calcula el número de porciones según el diseño de pisos y el presupuesto total de ingredientes y decoración.',
    queEs: 'Herramienta de cotización rápida para reposteras que venden pasteles personalizados y mesas dulces.',
    problema: 'Subestimar el costo del fondant, packaging y gas hace que las pasteleras trabajen sin ganancia real.',
    comoFunciona: 'Eliges el diámetro de los pisos y la altura; calcula las porciones estándar y suma costos fijos y variables.',
    publicoObjetivo: 'Emprendedoras de repostería creativa y catering.',
    funcionesPrincipales: ['Guía visual de corte de porciones', 'Calculadora de costos con merma', 'Generador de presupuesto para WhatsApp'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$19 USD',
    tags: ['tortas', 'costos', 'catering', 'reposteria']
  },

  // ==========================================
  // DESARROLLO PERSONAL & PRODUCTIVIDAD N1
  // ==========================================
  {
    id: 'reto-30-habitos-atomicos',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Reto 30 Días de Micro-Hábitos Diarios',
    descripcionCorta: 'Diseña hábitos de 2 minutos, encadénalos con tu rutina actual y mantén la racha visual sin romper la cadena.',
    queEs: 'Una app interactiva basada en el método de Micro-Hábitos para instalar conductas automáticas sin fuerza de voluntad excesiva.',
    problema: 'Las metas gigantescas de año nuevo fracasan al día 12 por falta de pequeños pasos consistentes.',
    comoFunciona: 'Defines 3 hábitos clave de menos de 2 minutos (ej. 5 flexiones al levantarte); marcas con un toque diario y acumulas puntos de racha.',
    publicoObjetivo: 'Personas interesadas en crecimiento personal, lectura y productividad.',
    funcionesPrincipales: ['Regla de los 2 minutos estructurada', 'Contador de racha con alertas motivacionales', 'Panel de balance semanal'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$11 USD',
    tags: ['habitos', 'rutina', 'disciplina', 'crecimiento']
  },
  {
    id: 'diario-estoico-5-minutos',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Diario Estoico de Reflexión Matutina y Nocturna',
    descripcionCorta: '3 preguntas al despertar para enfocar el día y 3 preguntas antes de dormir para evaluar tus decisiones con serenidad.',
    queEs: 'Cuaderno digital minimalista de auto-reflexión con citas filosóficas diarias de Marco Aurelio, Séneca y Epicteto.',
    problema: 'El estrés y la sobrecarga mental causan insomnio y sensación de falta de control.',
    comoFunciona: 'Abres la app 3 minutos en la mañana y 2 minutos en la noche para responder los prompts guiados.',
    publicoObjetivo: 'Profesionales estresados y estudiantes de filosofía práctica.',
    funcionesPrincipales: ['Cita estoica del día con ejercicio práctico', 'Espacio de journaling privado local', 'Resumen mensual de estado de ánimo'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['estoicismo', 'journaling', 'diario', 'saludmental']
  },

  // ==========================================
  // EDUCACIÓN & OPOSICIONES
  // ==========================================
  {
    id: 'planificador-estudio-oposiciones',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '📚',
    nombre: 'Planificador de Vueltas al Temario de Oposiciones',
    descripcionCorta: 'Distribuye los temas de estudio según la fecha de tu examen y calcula automáticamente las rondas de repaso.',
    queEs: 'Generador de cronogramas de estudio intensivo para opositores y estudiantes universitarios con curvas de olvido integradas.',
    problema: 'Los opositores se retrasan en el temario porque no calculan cuántos temas diarios necesitan repasar antes del examen.',
    comoFunciona: 'Ingresas el número total de temas y la fecha de la prueba; la app distribuye el calendario con días de simulación y descanso.',
    publicoObjetivo: 'Opositores a cuerpos docentes, justicia, sanidad, policía y administración pública.',
    funcionesPrincipales: [
      'Cálculo de ritmo de estudio diario necesario',
      'Planificador de repasos espaciados (1, 7, 30 días)',
      'Seguimiento visual de temas leídos, subrayados y memorizados'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$19 - $29 USD',
    tags: ['oposiciones', 'estudio', 'examenes', 'temario', 'universidad']
  },
  {
    id: 'creador-flashcards-memorizacion',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '📚',
    nombre: 'Tarjetero de Repaso Espaciado FlashCards',
    descripcionCorta: 'Crea fichas de estudio interactivas con sistema de cajas Leitner para memorizar leyes, fechas y fórmulas.',
    queEs: 'Mini-app web para estudiar y autoevaluarse con tarjetas de preguntas y respuestas con repetición inteligente.',
    problema: 'Leer pasivamente un libro no genera retención a largo plazo.',
    comoFunciona: 'Escribes tus preguntas clave; practicas respondiendo mentalmente y clasificas la tarjeta en fácil, media o difícil.',
    publicoObjetivo: 'Estudiantes de medicina, derecho, idiomas y oposiciones.',
    funcionesPrincipales: ['Algoritmo Leitner de 5 niveles', 'Modo examen contrarreloj', 'Importación de listas desde texto simple'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['flashcards', 'memoria', 'anki', 'estudio']
  },

  // ==========================================
  // ESPIRITUALIDAD
  // ==========================================
  {
    id: 'oraculo-diario-tarot-guiado',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '🔮',
    nombre: 'Tirada Diaria de Tarot y Mensaje de Reflexión',
    descripcionCorta: 'Saca una carta del día con interpretación psicológica profunda, afirmación positiva y pregunta de introspección.',
    queEs: 'Una experiencia interactiva y estética para quienes buscan un momento de meditación e inspiración diaria con el mazo de Rider-Waite.',
    problema: 'Los libros de tarot son pesados de consultar a diario y las apps gratuitas están plagadas de publicidad.',
    comoFunciona: 'Haces clic para mezclar el mazo virtual y seleccionas una carta; recibes la simbología, significado de luz/sombra y afirmación.',
    publicoObjetivo: 'Personas interesadas en mindfulness, tarot evolutivo, astrología y espiritualidad.',
    funcionesPrincipales: ['Los 78 arcanos con ilustraciones en alta resolución', 'Registro en bitácora de cartas sacadas', 'Lectura de 3 cartas (Pasado, Presente, Futuro)'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$15 USD',
    tags: ['tarot', 'espiritualidad', 'astrologia', 'meditacion']
  },
  {
    id: 'calculadora-carta-natal-aspectos',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '🔮',
    nombre: 'Calculadora de Sol, Luna y Ascendente con Guía',
    descripcionCorta: 'Calcula tu trinidad astrológica con fecha y hora de nacimiento y obtén una explicación clara sin jerga técnica.',
    queEs: 'Herramienta de cálculo astronómico básico que entrega un informe visual de los 3 pilares de la personalidad astrológica.',
    problema: 'Las cartas astrales tradicionales tienen gráficos llenos de símbolos incomprensibles para principiantes.',
    comoFunciona: 'Ingresas tu fecha, hora y ciudad de nacimiento; genera una ficha infográfica con tu Sol, Luna y Ascendente.',
    publicoObjetivo: 'Seguidores de astrología y autoconocimiento.',
    funcionesPrincipales: ['Cálculo de signos solar, lunar y ascendente', 'Informe de fortalezas y áreas de crecimiento', 'Tarjeta estética para compartir en Instagram'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 - $14 USD',
    tags: ['astrologia', 'horoscopo', 'ascendente', 'luna']
  },

  // ==========================================
  // FINANZAS & INVERSIONES N1
  // ==========================================
  {
    id: 'simulador-interes-compuesto-pro',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Simulador de Libertad Financiera e Interés Compuesto',
    descripcionCorta: 'Proyecta tu patrimonio futuro con aportes mensuales y descubre el poder del interés compuesto a 5, 10 y 20 años.',
    queEs: 'Simulador financiero interactivo con gráficos en tiempo real que compara dejar el dinero en el banco vs invertir en fondos indexados.',
    problema: 'La gente no invierte porque no puede visualizar cuánto crecerán sus ahorros a lo largo del tiempo.',
    comoFunciona: 'Mueves sliders de capital inicial, aporte mensual y tasa estimada; el gráfico muestra el porcentaje que proviene de tu bolsillo vs ganancias puras.',
    publicoObjetivo: 'Ahorradores, jóvenes profesionales e inversores principiantes.',
    funcionesPrincipales: [
      'Gráfico interactivo de barras acumulativas año por año',
      'Calculadora de regla del 4% para jubilación anticipada (FIRE)',
      'Simulador de impacto de la inflación'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$14 USD',
    tags: ['inversiones', 'interes-compuesto', 'jubilacion', 'finanzas']
  },
  {
    id: 'presupuesto-regla-50-30-20',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Distribuidor de Sueldo Regla 50/30/20',
    descripcionCorta: 'Divide tu salario neto en Necesidades (50%), Deseos (30%) y Ahorro/Inversión (20%) con sobres digitales.',
    queEs: 'Plantilla interactiva para ordenar el dinero del mes el mismo día que cobras el sueldo.',
    problema: 'Llegar a fin de mes sin saber en qué se gastó el dinero.',
    comoFunciona: 'Ingresas tus ingresos netos y la app te dice el tope exacto para alquiler, salidas y ahorro obligatorio.',
    publicoObjetivo: 'Personas que quieren ahorrar sin registrar cada café de forma obsesiva.',
    funcionesPrincipales: ['Distribución automática en categorías', 'Simulador de ajustes en caso de ingresos variables', 'Checklist mensual de pagos'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['presupuesto', 'sueldo', 'ahorro', 'dinero']
  },

  // ==========================================
  // FAMILIA & CRIANZA
  // ==========================================
  {
    id: 'guia-alimentacion-blw-bebes',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👶',
    nombre: 'Guía y Registro de Alimentos BLW para Bebés',
    descripcionCorta: 'Cortes seguros, introducción de alérgenos y registro de los primeros 100 alimentos de tu bebé.',
    queEs: 'Una app para padres que inician la alimentación complementaria (Baby-Led Weaning) con fotos de cortes seguros por edad.',
    problema: 'El miedo al atragantamiento y no saber cómo ofrecer alimentos sólidos a los 6 meses.',
    comoFunciona: 'Buscas cualquier alimento (ej. zanahoria, huevo) y ves la foto de cómo cortarlo y cocinarlo según los meses del bebé.',
    publicoObjetivo: 'Padres y madres primerizos con bebés de 6 a 12 meses.',
    funcionesPrincipales: [
      'Directorio de más de 120 alimentos con fotos de cortes',
      'Protocolo de los 3 días para alérgenos principales',
      'Póster de los primeros 100 alimentos completados'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$17 USD',
    tags: ['bebes', 'crianza', 'blw', 'alimentacion', 'maternidad']
  },
  {
    id: 'organizador-rutinas-infantiles',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👶',
    nombre: 'Panel Visual de Rutinas y Tareas para Niños',
    descripcionCorta: 'Convierte la rutina de la mañana y la noche (cepillarse, ordenar juguetes, pijama) en un juego visual con estrellas.',
    queEs: 'Herramienta para padres con niños pequeños para evitar berrinches y fomentar la autonomía diaria.',
    problema: 'Tener que repetir 15 veces las mismas instrucciones cada mañana antes de ir a la escuela.',
    comoFunciona: 'Los niños tocan las tarjetas con dibujos al completar cada tarea y desbloquean su recompensa semanal pactada.',
    publicoObjetivo: 'Familias con niños de 3 a 8 años.',
    funcionesPrincipales: ['Tarjetas ilustradas de tareas', 'Temporizador visual para vestirse', 'Imprimible semanal para la nevera'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['niños', 'crianza', 'rutinas', 'familia']
  },

  // ==========================================
  // MASCOTAS N1
  // ==========================================
  {
    id: 'calendario-vacunas-desparasitacion',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐾',
    nombre: 'Carnet Digital de Vacunas y Antiparasitarios',
    descripcionCorta: 'Lleva el control de fechas de refuerzo de vacunas, pipetas antiparasitarias y visitas veterinarias de tu perro o gato.',
    queEs: 'Un registro clínico de bolsillo para dueños de mascotas que calcula las próximas fechas de revacunación.',
    problema: 'Perder el carnet de cartón del veterinario y olvidar cuándo toca la pastilla mensual contra pulgas y garrapatas.',
    comoFunciona: 'Añades la especie, edad y fecha de última dosis; el sistema genera el calendario del año con recordatorios.',
    publicoObjetivo: 'Dueños de perros y gatos responsables.',
    funcionesPrincipales: ['Ficha médica descargable en PDF', 'Calculadora de dosis según peso del animal', 'Teléfonos de urgencias y chip'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$9 USD',
    tags: ['perros', 'gatos', 'mascotas', 'veterinaria', 'vacunas']
  },
  {
    id: 'calculadora-comida-barf-perros',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐾',
    nombre: 'Calculadora de Raciones Dieta BARF para Mascotas',
    descripcionCorta: 'Calcula gramos diarios de huesos carnosos, carne magra, vísceras y vegetales según el peso y energía de tu perro.',
    queEs: 'Herramienta de formulación para personas que alimentan a sus animales con comida natural cruda.',
    problema: 'Calcular los porcentajes biológicamente apropiados a mano es propenso a desbalances nutricionales.',
    comoFunciona: 'Indicas el peso del perro, edad y nivel de actividad; te entrega el menú diario en gramos exactos por tipo de alimento.',
    publicoObjetivo: 'Propietarios y criadores que usan dieta natural BARF.',
    funcionesPrincipales: ['Desglose 50-20-15-10-5 en gramos', 'Lista de alimentos tóxicos prohibidos', 'Planificador de compras semanales'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['barf', 'perros', 'comida-natural', 'nutricion-animal']
  },

  // ==========================================
  // NUTRICIÓN
  // ==========================================
  {
    id: 'generador-menu-semanal-batchcooking',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Planificador de Menús Semanales Batch Cooking',
    descripcionCorta: 'Cocina 2 horas el domingo y come saludable toda la semana con lista de compras consolidada por pasillos.',
    queEs: 'Un organizador de comidas con recetas modulares fáciles de preparar por adelantado y congelar.',
    problema: 'Llegar cansado del trabajo y terminar pidiendo comida rápida cara y poco saludable.',
    comoFunciona: 'Seleccionas tus preferencias (mediterránea, vegetariana, alta en proteína); genera el menú y la lista de supermercado exacta.',
    publicoObjetivo: 'Oficinistas, parejas y personas que quieren comer sano sin cocinar a diario.',
    funcionesPrincipales: [
      'Menú equilibrado de 5 días (almuerzos y cenas)',
      'Hoja de ruta paso a paso para la sesión de cocina del domingo',
      'Lista de ingredientes agrupada (frutería, carnicería, despensa)'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$15 USD',
    tags: ['nutricion', 'batchcooking', 'mealprep', 'recetas', 'compras']
  },
  {
    id: 'tabla-indice-glucemico-alimentos',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Semáforo de Índice y Carga Glucémica',
    descripcionCorta: 'Buscador rápido de alimentos clasificados por su impacto en la glucosa en sangre con sugerencias de combinaciones.',
    queEs: 'Guía visual para personas que buscan regular su glucosa o prevenir picos de insulina tras las comidas.',
    problema: 'Muchos alimentos supuestamente "dietéticos" elevan la glucosa drásticamente.',
    comoFunciona: 'Escribes cualquier comida (ej. avena, sandía) y ves su color (verde, amarillo, rojo) y el tip para reducir su impacto.',
    publicoObjetivo: 'Personas con resistencia a la insulina, prediabetes o que siguen alimentación baja en carbohidratos.',
    funcionesPrincipales: ['Buscador de 300+ alimentos', 'Tips de combinación con fibra y grasas buenas', 'Guía de orden de ingesta de alimentos'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$11 USD',
    tags: ['glucosa', 'diabetes', 'salud', 'nutricion']
  },

  // ==========================================
  // RELACIONES
  // ==========================================
  {
    id: 'juego-preguntas-citas-pareja',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: '100 Preguntas para Noches de Citas en Pareja',
    descripcionCorta: 'Tarjetas digitales de conversación por niveles de profundidad para reconectar, reírse y hablar de cosas nuevas.',
    queEs: 'Juego web para parejas con 3 niveles: Chispa & Risas, Intimidad & Recuerdos, y Planes de Futuro.',
    problema: 'Las parejas caen en la rutina de cenar mirando el móvil o hablando únicamente de facturas y obligaciones.',
    comoFunciona: 'Tocas la pantalla para sacar una carta al azar y responder por turnos sin juicios.',
    publicoObjetivo: 'Parejas que llevan meses o años juntas y buscan revivir la conexión en sus citas.',
    funcionesPrincipales: ['3 niveles de intensidad', 'Modo ruleta al azar', 'Generador de planes de cita sorpresa'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$12 USD',
    tags: ['parejas', 'citas', 'relaciones', 'juego', 'amor']
  },
  {
    id: 'calculadora-gastos-pareja-proporcional',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: 'Divisor de Gastos Compartidos Proporcional al Sueldo',
    descripcionCorta: 'Divide alquiler y compras de manera justa según los ingresos de cada uno, sin discusiones de dinero.',
    queEs: 'Calculadora de economía en pareja que promueve la equidad financiera sin divisiones 50/50 injustas.',
    problema: 'Cuando uno gana más que el otro, dividir 50/50 genera resentimiento y estrés financiero.',
    comoFunciona: 'Ingresan los ingresos de ambos y los gastos comunes; calcula el porcentaje exacto que debe aportar cada uno a la cuenta común.',
    publicoObjetivo: 'Parejas que conviven o se van a mudar juntas.',
    funcionesPrincipales: ['Cálculo 50/50 vs cálculo proporcional equitativo', 'Resumen mensual descargable', 'Presupuesto de ahorro conjunto'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['pareja', 'finanzas-pareja', 'convivencia', 'gastos']
  },

  // ==========================================
  // VIAJES
  // ==========================================
  {
    id: 'generador-maleta-por-clima-dias',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Creador de Lista de Equipaje según Destino y Clima',
    descripcionCorta: 'Genera el checklist exacto de ropa, cargadores y documentos según los días de viaje, tipo de clima y aerolínea.',
    queEs: 'Asistente de preparación de equipaje que calcula la ropa justa aplicando la fórmula cápsula para viajar solo con equipaje de mano.',
    problema: 'Llevar exceso de equipaje o olvidar cosas críticas como adaptadores de enchufe y medicamentos.',
    comoFunciona: 'Eliges destino, días y clima; genera una lista clasificada por categorías con casillas de verificación.',
    publicoObjetivo: 'Viajeros frecuentes, mochileros y familias de vacaciones.',
    funcionesPrincipales: [
      'Reglas de líquidos de cabina integradas',
      'Fórmula 5-4-3-2-1 de ropa cápsula',
      'Checklist de documentos imprescindibles'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$9 USD',
    tags: ['viajes', 'maleta', 'equipaje', 'turismo', 'checklist']
  },
  {
    id: 'calculadora-presupuesto-viaje-por-dia',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Presupuestador Diario de Viajes y Divisas',
    descripcionCorta: 'Controla el gasto diario en moneda local y no te pases de presupuesto en tus vacaciones.',
    queEs: 'Convertidor y tracker de gastos offline para turistas.',
    problema: 'Perder el control de los gastos en el extranjero al pagar con tarjetas con tipos de cambio confusos.',
    comoFunciona: 'Fijas un tope diario en tu moneda; anotas lo que gastas en moneda local y ves tu saldo en tiempo real.',
    publicoObjetivo: 'Turistas internacionales.',
    funcionesPrincipales: ['Conversión rápida de divisas', 'Semáforo de gasto del día', 'Exportación de resumen al volver'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$11 USD',
    tags: ['viajes', 'presupuesto', 'divisas', 'vacaciones']
  },

  // ==========================================
  // ORGANIZACIÓN DEL HOGAR
  // ==========================================
  {
    id: 'cronograma-limpieza-profunda-hogar',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏡',
    nombre: 'Planificador de Limpieza por Zonas FlyLady',
    descripcionCorta: 'Divide la casa en 5 zonas y mantén el orden con micro-tareas de 15 minutos al día sin agotarte el fin de semana.',
    queEs: 'Guía interactiva que rota las tareas domésticas profundas a lo largo del mes para no pasar los domingos limpiando.',
    problema: 'La casa se desordena acumulativamente y la limpieza de golpe toma 6 horas agotadoras.',
    comoFunciona: 'La app te muestra la zona de la semana (ej. cocina) y la tarea de 15 minutos para hoy; marcas y descansas.',
    publicoObjetivo: 'Personas que viven solas, familias y trabajadores en remoto.',
    funcionesPrincipales: ['Rutas de 15 minutos diarias', 'Checklist de mantenimiento estacional (filtros, aire acondicionado)', 'Rutinas de mañana y noche'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$12 USD',
    tags: ['hogar', 'limpieza', 'organizacion', 'flylady', 'casa']
  },
  {
    id: 'inventario-despensa-fechas-caducidad',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏡',
    nombre: 'Control de Despensa y Congelador Anti-Desperdicio',
    descripcionCorta: 'Registra lo que tienes en el congelador y despensa para no comprar repetido ni botar comida caducada.',
    queEs: 'Inventario simple de alimentos con etiquetas de fecha de congelación.',
    problema: 'Tirar a la basura comida congelada olvidada hace 8 meses.',
    comoFunciona: 'Anotaciones rápidas con fecha y categoría; te avisa de los paquetes que llevan más de 3 meses congelados.',
    publicoObjetivo: 'Amas de casa y organizadores del hogar.',
    funcionesPrincipales: ['Semáforo de rotación de alimentos', 'Ideas de recetas según lo que tienes en la despensa', 'Lista de reposición'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['despensa', 'comida', 'congelador', 'ahorro']
  },

  // ==========================================
  // EMPRENDIMIENTO & MARKETING N1
  // ==========================================
  {
    id: 'calculadora-precio-hora-freelance',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Calculadora de Tarifa Horaria para Freelancers',
    descripcionCorta: 'Calcula cuánto debes cobrar por hora y por proyecto para cubrir impuestos, vacaciones, gastos fijos y tu sueldo deseado.',
    queEs: 'Simulador financiero para profesionales independientes que traduce ingresos mensuales deseados en tarifas comerciales rentables.',
    problema: 'Cobrar tarifas demasiado bajas por no contemplar horas no facturables (búsqueda de clientes, facturación) ni costos de seguridad social.',
    comoFunciona: 'Ingresas tu meta de sueldo neto, gastos de oficina y horas reales de trabajo por semana; calcula tu tarifa mínima viable.',
    publicoObjetivo: 'Diseñadores, desarrolladores, redactores, consultores y fotógrafos freelance.',
    funcionesPrincipales: [
      'Cálculo de horas facturables reales (generalmente 60% del tiempo total)',
      'Generador de cotización para clientes con desglose por fases',
      'Comparativa de precio por hora vs precio por valor entregado'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$14 USD',
    tags: ['freelance', 'tarifa', 'precio-hora', 'negocios', 'cotizacion']
  },
  {
    id: 'generador-ganchos-virales-tiktok',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Constructor de Ganchos Virales para Reels y TikTok',
    descripcionCorta: '50 fórmulas probadas de primeros 3 segundos para retener la atención y multiplicar las visualizaciones de tus videos.',
    queEs: 'Directorio interactivo de aperturas de video clasificadas por nicho (educativo, curiosidad, error común, controversia suave).',
    problema: 'Los creadores pierden el 70% de la audiencia en los primeros 2 segundos por empezar con saludos aburridos.',
    comoFunciona: 'Eliges tu nicho y el tema del video; la app rellena la fórmula con tu concepto y te da el guion de apertura listo para grabar.',
    publicoObjetivo: 'Creadores de contenido, marcas personales y community managers.',
    funcionesPrincipales: ['50 plantillas de ganchos con ejemplos reales', 'Teleprompter web integrado con temporizador de 3 segundos', 'Lista de llamadas a la acción (CTA) de alta conversión'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$17 USD',
    tags: ['tiktok', 'reels', 'ganchos', 'redes-sociales', 'video']
  },
  {
    id: 'calculadora-roi-anuncios-meta',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Calculadora de ROAS y Punto de Equilibrio en Anuncios',
    descripcionCorta: 'Descubre el ROAS mínimo necesario, coste por adquisición máximo y tasa de conversión requerida para no perder dinero en pauta.',
    queEs: 'Herramienta de simulación de presupuestos publicitarios para Meta Ads, Google Ads y TikTok Ads.',
    problema: 'Lanzar campañas de anuncios a ciegas sin saber cuál es el CPA máximo que soporta el margen del producto.',
    comoFunciona: 'Ingresas precio de venta del producto y costo de entrega; calcula el ROAS de equilibrio y simula escenarios con diferentes presupuestos.',
    publicoObjetivo: 'Traffickers, agencias de marketing y dueños de e-commerce.',
    funcionesPrincipales: ['Cálculo de Break-Even ROAS instantáneo', 'Simulador de embudo (Impresiones -> Clics -> Ventas)', 'Hoja de métricas de control para reportes'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$19 USD',
    tags: ['marketing', 'anuncios', 'roas', 'meta-ads', 'trafico']
  },
  {
    id: 'organizador-sorteos-concursos-instagram',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Selector Transparente de Ganadores de Sorteos',
    descripcionCorta: 'Extrae comentarios de publicaciones, verifica menciones y selecciona ganadores con animación grabable para historias.',
    queEs: 'Herramienta web sencilla para realizar sorteos limpios en redes sociales sin registros complejos.',
    problema: 'Las herramientas existentes cobran suscripciones caras para un solo sorteo al mes.',
    comoFunciona: 'Pegas la lista de participantes o enlaces; el sistema filtra duplicados y genera la ruleta visual con certificado del ganador.',
    publicoObjetivo: 'Marcas de Instagram, influencers y comercios locales.',
    funcionesPrincipales: ['Animación de ruleta grabable en video', 'Filtro de comentarios duplicados y menciones mínimas', 'Selección de suplentes'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$9 USD por pase o pack de 5 sorteos',
    tags: ['sorteos', 'instagram', 'concursos', 'ganadores']
  },
  {
    id: 'cuestionario-arquetipo-marca-branding',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Test de Arquetipo de Marca y Tono de Voz',
    descripcionCorta: 'Descubre cuál de los 12 arquetipos de Carl Jung representa a tu negocio y obtén tu paleta de colores y palabras clave.',
    queEs: 'Evaluación guiada para emprendedores que necesitan definir la personalidad y mensajes de su marca.',
    problema: 'Marcas sin identidad clara que suenan genéricas y no conectan emocionalmente con su audiencia.',
    comoFunciona: 'Respondes 12 situaciones de toma de decisiones; te entrega el informe con tu arquetipo principal, arquetipo secundario y guía de tono.',
    publicoObjetivo: 'Diseñadores de branding, redactores publicitarios y nuevos emprendedores.',
    funcionesPrincipales: ['Informe de arquetipo en PDF', 'Guía de vocabulario y palabras prohibidas', 'Paleta de colores sugerida'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['branding', 'arquetipos', 'marketing', 'identidad']
  },

  // ==========================================
  // HOBBIES & OTROS NICHOS RENTABLES N1
  // ==========================================
  {
    id: 'guia-huerto-urbano-balcon',
    nivel: 'Nivel 1',
    categoria: 'Hobbies',
    iconoCategoria: '🎮',
    nombre: 'Calendario de Siembra y Cosecha para Huertos Urbanos',
    descripcionCorta: 'Qué plantar cada mes según tu hemisferio, horas de sol directo y tamaño de maceta.',
    queEs: 'Planificador interactivo para cultivar tomates, hierbas aromáticas y lechugas en balcones y terrazas pequeñas.',
    problema: 'Las plantas mueren por plantarlas en la época equivocada o en macetas sin la profundidad adecuada.',
    comoFunciona: 'Seleccionas tu zona climática y tipo de espacio; te muestra el calendario mensual de siembra, trasplante y cosecha.',
    publicoObjetivo: 'Aficionados a la jardinería urbana y sostenibilidad en departamentos.',
    funcionesPrincipales: ['Fichas de 40 cultivos comunes', 'Guía de asociación de plantas favorables', 'Alarmas de riego estacionales'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['jardineria', 'huerto', 'plantas', 'balcon', 'hobbies']
  },
  {
    id: 'afinador-metronomo-ritmos-guitarra',
    nivel: 'Nivel 1',
    categoria: 'Hobbies',
    iconoCategoria: '🎮',
    nombre: 'Entrenador de Ritmo y Progresión de Acordes de Guitarra',
    descripcionCorta: 'Metrónomo visual con ritmos de rasgueo populares y biblioteca de acordes con digitación clara.',
    queEs: 'Herramienta de práctica interactiva para guitarristas principiantes e intermedios.',
    problema: 'Aprender canciones se vuelve frustrante cuando no se domina el patrón de rasgueo rítmico.',
    comoFunciona: 'Eliges el género (pop, rock, balada); la app reproduce el ritmo con flechas arriba/abajo y el metrónomo sincronizado.',
    publicoObjetivo: 'Estudiantes de guitarra acústica y ukelele.',
    funcionesPrincipales: ['Visualizador de rasgueo con tempo regulable', 'Diagramas de acordes con cejilla', 'Rutina de calentamiento de 10 minutos'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$11 USD',
    tags: ['musica', 'guitarra', 'acordes', 'metronomo']
  },
  {
    id: 'simulador-coste-viaje-carretera-gasolina',
    nivel: 'Nivel 1',
    categoria: 'Otros nichos rentables',
    iconoCategoria: '💡',
    nombre: 'Calculadora de Peajes, Gasolina y Ruta para Roadtrips',
    descripcionCorta: 'Calcula el costo total del viaje por carretera y divídelo entre los pasajeros del auto en 10 segundos.',
    queEs: 'Herramienta para calcular combustible consumido según kilómetros y peajes esperados en trayectos compartidos.',
    problema: 'Cobrar la gasolina a los amigos al terminar un viaje siempre genera cuentas difíciles y olvidos.',
    comoFunciona: 'Pones origen, destino, consumo medio del auto y precio de la gasolina; divide el total exacto por persona.',
    publicoObjetivo: 'Grupos de amigos, conductores de viajes compartidos y familias viajeras.',
    funcionesPrincipales: ['Estimación de litros y dinero', 'División por número de amigos', 'Enlace para compartir el resumen por WhatsApp'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$7 USD',
    tags: ['gasolina', 'auto', 'roadtrip', 'peajes', 'viajes']
  },
  {
    id: 'creador-qr-personalizado-wifi-menu',
    nivel: 'Nivel 1',
    categoria: 'Otros nichos rentables',
    iconoCategoria: '💡',
    nombre: 'Generador de Códigos QR con Logo y Sin Caducidad',
    descripcionCorta: 'Crea códigos QR personalizados para WiFi, menús, WhatsApp y enlaces con tu logo y diseño corporativo.',
    queEs: 'Generador de QR vectoriales de alta resolución que no vencen ni muestran páginas intermedias molestas.',
    problema: 'Los generadores gratuitos de Google vencen a los 14 días o exigen tarjetas de crédito para mantener el enlace activo.',
    comoFunciona: 'Ingresas tu enlace o clave de WiFi, subes tu logo y descargas el archivo en PNG o SVG listo para imprimir.',
    publicoObjetivo: 'Restaurantes, cafeterías, oficinas y negocios locales.',
    funcionesPrincipales: ['Descarga en SVG y PNG para imprenta', 'Personalización de colores y marcos con llamada a la acción', 'Generación instantánea sin registro'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$10 USD por acceso ilimitado de por vida',
    tags: ['qr', 'wifi', 'menu', 'negocios', 'impresion']
  }
];
