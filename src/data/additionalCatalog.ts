import { MiniAppIdea } from '../types';

export const ADDITIONAL_CATALOG: MiniAppIdea[] = [
  // ==========================================
  // ADELGAZAMIENTO & FITNESS (N1)
  // ==========================================
  {
    id: 'contador-pasos-metas-diarias',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏃',
    nombre: 'Reto 10.000 Pasos y Quema Calórica Activa',
    descripcionCorta: 'Monitorea tus caminatas diarias con equivalencias visuales de calorías quemadas en comida real.',
    queEs: 'Un registro visual y motivador para convertir el hábito de caminar en un juego diario con metas progresivas.',
    problema: 'El sedentarismo de oficina y la falta de motivación para caminar sin un objetivo tangible.',
    comoFunciona: 'Registras tus pasos o minutos caminados; la app traduce tu esfuerzo en kilómetros recorridos y equivalencias de calorías.',
    publicoObjetivo: 'Trabajadores de oficina y personas que buscan perder peso sin ejercicio de alto impacto.',
    funcionesPrincipales: ['Equivalencias de comida quemada (ej. 1 manzana, 1 rebanada de pizza)', 'Historial semanal de actividad', 'Insignias por constancia'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['caminar', 'pasos', 'fitness', 'salud']
  },
  {
    id: 'estiramientos-oficina-postura',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏃',
    nombre: 'Pausa Activa: 5 Minutos de Estiramiento en Silla',
    descripcionCorta: 'Rutinas guiadas para aliviar el dolor lumbar y de cuello causados por horas frente a la computadora.',
    queEs: 'Micro-rutinas de movilidad articular y descompresión de columna para hacer sentado sin cambiarte de ropa.',
    problema: 'Dolor de espalda crónico y tensión cervical por mala postura en el trabajo.',
    comoFunciona: 'Presionas iniciar pausa; un temporizador con ilustraciones animadas te guía por 5 ejercicios suaves de respiración y estiramiento.',
    publicoObjetivo: 'Oficinistas, programadores y teletrabajadores.',
    funcionesPrincipales: ['Recordatorios automáticos cada 90 minutos', 'Secuencias para cuello, hombros y lumbares', 'Modo silencioso para oficinas compartidas'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$10 USD',
    tags: ['postura', 'oficina', 'estiramientos', 'salud', 'ergonomia']
  },

  // ==========================================
  // ARTESANÍA & DIY (N1)
  // ==========================================
  {
    id: 'calculadora-resina-epoxica',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🎨',
    nombre: 'Calculadora de Mezcla de Resina Epóxica y Pigmentos',
    descripcionCorta: 'Calcula proporciones exactas de componente A y B en gramos según el volumen del molde y tipo de resina (1:1 o 2:1).',
    queEs: 'Herramienta de precisión para artesanos de mesas de río, joyería y bandejas de resina.',
    problema: 'Una mala proporción arruina la pieza dejando la resina pegajosa, blanda o con burbujas permanentes.',
    comoFunciona: 'Mides el ancho, largo y profundidad del molde; la app calcula los gramos exactos de resina, endurecedor y gotas de pigmento.',
    publicoObjetivo: 'Creadores de artesanías en resina epóxica, carpinteros y joyeros artesanales.',
    funcionesPrincipales: ['Cálculo por volumen de moldes rectangulares y circulares', 'Conversor de proporciones 1:1, 2:1 y 3:1', 'Temporizador de tiempo de trabajo (Pot Life)'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['resina', 'epoxi', 'manualidades', 'artesania', 'diy']
  },

  // ==========================================
  // BELLEZA & SKINCARE (N1)
  // ==========================================
  {
    id: 'guia-tonos-maquillaje-subtono',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '✨',
    nombre: 'Descubridor de Subtono de Piel y Base Perfecta',
    descripcionCorta: 'Test interactivo de venas y joyería para saber si eres cálido, frío o neutro y no volver a comprar una base equivocada.',
    queEs: 'Evaluador de colorimetría facial que guía al usuario para encontrar su tono de maquillaje y colores de ropa más favorecedores.',
    problema: 'Comprar bases de maquillaje que quedan anaranjadas o grisáceas por no conocer el subtono de la piel.',
    comoFunciona: 'Completas 4 pruebas visuales sencillas; obtienes tu ficha de colorimetría con nombres de bases equivalentes en el mercado.',
    publicoObjetivo: 'Compradoras de cosméticos online y maquilladoras principiantes.',
    funcionesPrincipales: ['Guía visual de color de venas y reacción al sol', 'Paleta de labiales y sombras recomendadas', 'Equivalencias entre marcas conocidas'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['maquillaje', 'subtono', 'colorimetria', 'belleza']
  },

  // ==========================================
  // CARRERA & LINKEDIN (N1)
  // ==========================================
  {
    id: 'generador-carta-renuncia-profesional',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Redactor de Cartas de Renuncia Diplomáticas',
    descripcionCorta: 'Genera cartas de renuncia cordiales y profesionales que cuidan tus relaciones laborales y agradecen la oportunidad.',
    queEs: 'Plantillas personalizables para comunicar la salida de un empleo con elegancia y respeto.',
    problema: 'No saber cómo redactar una renuncia formal sin sonar grosero ni quemar puentes profesionales.',
    comoFunciona: 'Indicas tu cargo, fecha de salida y motivo general; genera 3 versiones listas para imprimir o enviar por correo.',
    publicoObjetivo: 'Profesionales en transición laboral.',
    funcionesPrincipales: ['Versión agradecida, ejecutiva y neutra', 'Inclusión de entrega de puesto y preaviso legal', 'Descarga directa en Word y PDF'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$7 USD',
    tags: ['renuncia', 'carta', 'trabajo', 'empleo', 'carrera']
  },

  // ==========================================
  // COCINA & REPOSTERÍA (N1)
  // ==========================================
  {
    id: 'sustituto-ingredientes-cocina',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍳',
    nombre: 'Buscador de Sustitutos de Ingredientes en Cocina',
    descripcionCorta: '¿Te falta un ingrediente a mitad de la receta? Encuentra reemplazos exactos para huevos, levadura, lácteos y más.',
    queEs: 'Diccionario interactivo de equivalencias culinarias para salvar platos cuando falta un ingrediente en la despensa.',
    problema: 'Tener que salir corriendo al supermercado a mitad de una cocción porque te faltó suero de leche, maicena o bicarbonato.',
    comoFunciona: 'Escribes el ingrediente faltante; la app te muestra 3 alternativas con proporciones exactas de reemplazo.',
    publicoObjetivo: 'Cocineros caseros, personas con intolerancias alimentarias y veganos.',
    funcionesPrincipales: ['Más de 150 sustituciones probadas', 'Filtro para alergias (sin huevo, sin gluten, sin lactosa)', 'Tabla de proporciones de levadura fresca vs seca'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['cocina', 'ingredientes', 'recetas', 'sustitutos', 'reposteria']
  },

  // ==========================================
  // DESARROLLO PERSONAL (N1)
  // ==========================================
  {
    id: 'matriz-eisenhower-prioridades',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Matriz de Decisiones Urgente vs Importante',
    descripcionCorta: 'Clasifica tus pendientes en los 4 cuadrantes de Eisenhower: Hacer, Planificar, Delegar y Eliminar.',
    queEs: 'Organizador visual para depurar tareas y dejar de vivir apagando fuegos.',
    problema: 'Pasar todo el día ocupado haciendo tareas urgentes pero irrelevantes para tus metas a largo plazo.',
    comoFunciona: 'Arrastras tus tareas a uno de los 4 cuadrantes; la app te da un plan de acción para delegar y eliminar lo innecesario.',
    publicoObjetivo: 'Emprendedores, directivos y estudiantes.',
    funcionesPrincipales: ['Clasificación en 4 cuadrantes con arrastrar y soltar', 'Exportación de la lista de acción del día', 'Consejos para delegar con efectividad'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$10 USD',
    tags: ['eisenhower', 'prioridades', 'tiempo', 'productividad']
  },

  // ==========================================
  // EDUCACIÓN & OPOSICIONES (N1)
  // ==========================================
  {
    id: 'cronometro-simulacro-examenes',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '📚',
    nombre: 'Simulador de Tiempos por Pregunta para Exámenes',
    descripcionCorta: 'Calcula cuántos segundos tienes por pregunta en tu examen tipo test y practica con avisos sonoros de ritmo.',
    queEs: 'Entrenador de velocidad y gestión del tiempo para pruebas de admisión universitaria y oposiciones del estado.',
    problema: 'Quedarse sin tiempo en el examen y dejar 20 preguntas sin contestar por atascarse en las primeras.',
    comoFunciona: 'Ingresas número de preguntas y tiempo total; el cronómetro te marca el ritmo recomendado y te entrena para no dudar.',
    publicoObjetivo: 'Opositores, estudiantes del MIR, selectividad o exámenes de certificación.',
    funcionesPrincipales: ['Marcador de ritmo óptimo por pregunta', 'Modo penalización por respuestas incorrectas', 'Estadísticas de velocidad de lectura'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$11 USD',
    tags: ['examenes', 'oposiciones', 'cronometro', 'test', 'estudio']
  },

  // ==========================================
  // ESPIRITUALIDAD (N1)
  // ==========================================
  {
    id: 'diario-gratitud-3-bendiciones',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '🔮',
    nombre: 'Bitácora de Gratitud y Elevación de Frecuencia',
    descripcionCorta: 'Escribe 3 cosas por las que agradeces hoy y visualiza tu constancia con un jardín digital que florece.',
    queEs: 'Espacio de gratitud diario que fomenta la neuroplasticidad positiva y el bienestar emocional.',
    problema: 'El sesgo mental de negatividad que nos hace enfocarnos solo en los problemas cotidianos.',
    comoFunciona: 'Abres la app al final del día, anotas 3 momentos felices y ves crecer una flor en tu jardín virtual.',
    publicoObjetivo: 'Personas interesadas en meditación, ley de atracción y psicología positiva.',
    funcionesPrincipales: ['Jardín virtual interactivo de agradecimientos', 'Prompts inspiradores para desbloquear ideas', 'Recordatorio sereno al atardecer'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['gratitud', 'mindfulness', 'espiritualidad', 'bienestar']
  },

  // ==========================================
  // FINANZAS & INVERSIONES (N1)
  // ==========================================
  {
    id: 'detector-gastos-hormiga-anuales',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Calculadora de Fuga de Dinero y Gastos Hormiga',
    descripcionCorta: 'Descubre cuánto dinero se te escapa al año en cafés diarios, suscripciones olvidadas y comidas a domicilio.',
    queEs: 'Simulador de impacto financiero que muestra cómo pequeños gastos diarios de $3 dólares suman miles en 5 años si se invirtieran.',
    problema: 'No entender por qué no se llega a final de mes a pesar de tener un buen sueldo.',
    comoFunciona: 'Seleccionas tus hábitos cotidianos; la app calcula el gasto anual acumulado y la proyección si ese dinero estuviera invertido.',
    publicoObjetivo: 'Ahorradores y personas que quieren tomar el control de sus finanzas.',
    funcionesPrincipales: ['Catálogo de 20 gastos hormiga comunes', 'Proyección de inversión en interés compuesto', 'Plan de sustitución de hábitos de bajo costo'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['gastoshormiga', 'ahorro', 'finanzas', 'dinero']
  },

  // ==========================================
  // FAMILIA & CRIANZA (N1)
  // ==========================================
  {
    id: 'calculadora-panales-ahorro-tallas',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👶',
    nombre: 'Optimizador de Compra de Pañales por Talla y Peso',
    descripcionCorta: 'Calcula cuántos paquetes comprar por talla según la curva de crecimiento de tu bebé para no acumular sobrantes.',
    queEs: 'Guía de compras inteligentes para futuros padres que evita gastar de más en tallas que el bebé superará en 2 semanas.',
    problema: 'Comprar cajas gigantes de pañales recién nacido que quedan pequeñas antes de terminar el primer paquete.',
    comoFunciona: 'Ingresas el peso del bebé o fecha probable de parto; la calculadora entrega el número óptimo de paquetes por etapa.',
    publicoObjetivo: 'Futuros padres, regalos de baby shower y familias con recién nacidos.',
    funcionesPrincipales: ['Estimación de pañales diarios por mes de vida', 'Comparador de precio unitario por pañal', 'Checklist de bolso de maternidad'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['bebes', 'pañales', 'maternidad', 'crianza', 'ahorro']
  },

  // ==========================================
  // MASCOTAS (N1)
  // ==========================================
  {
    id: 'calculador-edad-humana-perro-gato',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐾',
    nombre: 'Calculadora de Edad Real y Etapa Vital de Mascotas',
    descripcionCorta: 'Calcula la edad biológica de tu perro según su tamaño y raza con consejos de cuidados geriátricos y nutrición.',
    queEs: 'Herramienta veterinaria explicativa que desmiente el mito de los "7 años humanos por cada año de perro".',
    problema: 'Tratar a un perro senior como adulto joven y no adaptar sus paseos y chequeos preventivos.',
    comoFunciona: 'Seleccionas raza y fecha de nacimiento; entrega la equivalencia biológica exacta y el calendario de controles recomendados.',
    publicoObjetivo: 'Dueños de perros y gatos de todas las edades.',
    funcionesPrincipales: ['Fórmulas diferenciadas para razas pequeñas, medianas y gigantes', 'Guía de señales de envejecimiento prematuro', 'Ficha para el veterinario'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$7 USD',
    tags: ['perros', 'gatos', 'edad', 'veterinaria', 'mascotas']
  },

  // ==========================================
  // NUTRICIÓN (N1)
  // ==========================================
  {
    id: 'calculadora-agua-hidratacion-diaria',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Calculadora de Hidratación según Peso y Clima',
    descripcionCorta: 'Descubre cuántos litros de agua exacta necesita tu cuerpo según tu peso, horas de ejercicio y temperatura ambiente.',
    queEs: 'Guía interactiva de consumo de líquidos con recordatorios de vasos a lo largo de la jornada.',
    problema: 'Dolores de cabeza y fatiga vespertina provocados por deshidratación involuntaria.',
    comoFunciona: 'Ajustas tu peso y actividad física; te muestra tu meta en vasos y te ayuda a distribuirlos entre la mañana y la tarde.',
    publicoObjetivo: 'Deportistas y personas que olvidan tomar agua.',
    funcionesPrincipales: ['Ajuste por sudoración y clima cálido', 'Consejos de hidratación con infusiones y electrolitos', 'Tracker de vasos tomados'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$6 USD',
    tags: ['agua', 'hidratacion', 'salud', 'nutricion']
  },

  // ==========================================
  // PRODUCTIVIDAD (N1)
  // ==========================================
  {
    id: 'regla-dos-minutos-iniciador',
    nivel: 'Nivel 1',
    categoria: 'Productividad',
    iconoCategoria: '⚡',
    nombre: 'Iniciador Anti-Procrastinación: Regla de los 2 Minutos',
    descripcionCorta: 'Comprométete a trabajar solo 120 segundos en esa tarea que evitas; supera la fricción inicial y activa el impulso.',
    queEs: 'Temporizador psicológico para vencer la parálisis por análisis y empezar a trabajar de inmediato.',
    problema: 'Pasar horas postergando una tarea que solo toma 15 minutos por miedo a empezar.',
    comoFunciona: 'Escribes la tarea, inicias la cuenta de 120 segundos y comienzas; al sonar la campana, el 85% decide continuar trabajando.',
    publicoObjetivo: 'Estudiantes, redactores y profesionales con tendencia a postergar.',
    funcionesPrincipales: ['Temporizador de activación rápida', 'Registro de tareas desbloqueadas', 'Técnicas de micro-arranque'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$9 USD',
    tags: ['procrastinacion', 'foco', 'productividad', 'habitos']
  },

  // ==========================================
  // RELACIONES (N1)
  // ==========================================
  {
    id: 'test-lenguajes-del-amor',
    nivel: 'Nivel 1',
    categoria: 'Relaciones',
    iconoCategoria: '❤️',
    nombre: 'Test de los 5 Lenguajes del Amor para Parejas',
    descripcionCorta: 'Descubre cómo te sientes amado (Palabras, Tiempo, Regalos, Actos o Contacto) y compártelo con tu pareja.',
    queEs: 'Cuestionario basado en el libro de Gary Chapman para entender las necesidades afectivas de tu pareja.',
    problema: 'Sentir que tu pareja no te demuestra afecto porque habla un lenguaje de amor diferente al tuyo.',
    comoFunciona: 'Respondes 20 situaciones comparativas; te entrega tu gráfico de porcentajes y una guía práctica para tu pareja.',
    publicoObjetivo: 'Parejas novias, casadas o en terapia de pareja.',
    funcionesPrincipales: ['Gráfico comparativo de ambos miembros de la pareja', 'Ideas concretas para expresar cada lenguaje', 'Informe descargable para leer juntos'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['parejas', 'lenguajesdelamor', 'amor', 'relaciones']
  },

  // ==========================================
  // VIAJES (N1)
  // ==========================================
  {
    id: 'planificador-itinerario-ciudades-3dias',
    nivel: 'Nivel 1',
    categoria: 'Viajes',
    iconoCategoria: '✈️',
    nombre: 'Generador de Itinerarios de Fin de Semana (3 Días)',
    descripcionCorta: 'Organiza visitas a monumentos y restaurantes por cercanía geográfica para no cruzar la ciudad 5 veces al día.',
    queEs: 'Constructor de rutas turísticas optimizadas por zonas para escapadas de fin de semana.',
    problema: 'Perder medio viaje en el metro por visitar lugares en orden aleatorio.',
    comoFunciona: 'Seleccionas la ciudad y tus atracciones deseadas; la herramienta las agrupa en circuitos lógicos de mañana y tarde.',
    publicoObjetivo: 'Viajeros urbanos y parejas de escapada de fin de semana.',
    funcionesPrincipales: ['Agrupación por proximidad geográfica', 'Horarios de apertura y tiempos recomendados de visita', 'Mapa de ruta offline'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['viajes', 'itinerario', 'turismo', 'ciudades']
  },

  // ==========================================
  // ORGANIZACIÓN DEL HOGAR (N1)
  // ==========================================
  {
    id: 'manual-simbolos-lavado-ropa',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏡',
    nombre: 'Decodificador de Símbolos de Etiquetas de Ropa',
    descripcionCorta: 'Identifica qué significan los triángulos, círculos y cubos de las etiquetas para no encoger ni desteñir tu ropa.',
    queEs: 'Guía visual instantánea para consultar el cuidado de telas delicadas antes de meterlas a la lavadora o secadora.',
    problema: 'Arruinar prendas caras de lana o seda por lavarlas a la temperatura incorrecta o usar lejía.',
    comoFunciona: 'Tocas los símbolos que ves en la etiqueta de tu prenda; la app te traduce las instrucciones en lenguaje claro.',
    publicoObjetivo: 'Jóvenes independizados, familias y amantes de la moda.',
    funcionesPrincipales: ['Buscador visual de más de 40 símbolos internacionales', 'Consejos para quitar manchas difíciles', 'Guía de temperaturas para plancha'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$6 USD',
    tags: ['ropa', 'lavado', 'etiquetas', 'hogar', 'organizacion']
  },

  // ==========================================
  // EMPRENDIMIENTO (N1)
  // ==========================================
  {
    id: 'generador-nombre-empresa-disponibilidad',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Creador de Nombres de Marcas y Disponibilidad .com',
    descripcionCorta: 'Genera nombres pegadizos para tu nuevo negocio basados en raíces latinas y combinaciones modernas.',
    queEs: 'Herramienta de naming para nuevos proyectos y startups con verificación rápida de dominios libres.',
    problema: 'Pasar semanas buscando un nombre bonito para descubrir después que el dominio ya está registrado.',
    comoFunciona: 'Ingresas tu concepto o industria; genera decenas de opciones originales con terminaciones modernas.',
    publicoObjetivo: 'Nuevos emprendedores y creadores de proyectos.',
    funcionesPrincipales: ['Filtros por estilo (corto, compuesto, moderno, clásico)', 'Verificación de pronunciabilidad', 'Plantilla de registro de marca'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$12 USD',
    tags: ['naming', 'marcas', 'emprendimiento', 'dominios']
  },

  // ==========================================
  // MARKETING (N1)
  // ==========================================
  {
    id: 'generador-asuntos-email-alta-apertura',
    nivel: 'Nivel 1',
    categoria: 'Marketing',
    iconoCategoria: '📣',
    nombre: 'Generador de Asuntos de Email con Alta Tasa de Apertura',
    descripcionCorta: '50 estructuras probadas con fórmulas de curiosidad, urgencia y beneficio para que tus emails no terminen en spam.',
    queEs: 'Asistente para redactar títulos de newsletter y correos de venta que aumentan la tasa de apertura del 15% al 35%.',
    problema: 'Escribir correos con títulos aburridos que los suscriptores eliminan sin siquiera abrirlos.',
    comoFunciona: 'Rellenas tu tema principal; la app genera variantes con emojis, preguntas intrigantes y llamados a la acción.',
    publicoObjetivo: 'Email marketers, redactores publicitarios y dueños de e-commerce.',
    funcionesPrincipales: ['Medidor de longitud de caracteres para móviles', 'Filtro anti-palabras de spam', 'Comparador A/B de asuntos'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['email', 'copywriting', 'marketing', 'newsletter']
  },

  // ==========================================
  // REDES SOCIALES (N1)
  // ==========================================
  {
    id: 'generador-carruseles-educativos-canva',
    nivel: 'Nivel 1',
    categoria: 'Redes Sociales',
    iconoCategoria: '📱',
    nombre: 'Estructurador de Carruseles Educativos para Instagram',
    descripcionCorta: 'Plantillas de 7 diapositivas (Gancho, Problema, Desarrollo, Solución, CTA) listas para multiplicar tus guardados.',
    queEs: 'Guía paso a paso para redactar contenido educativo de alto valor que fideliza seguidores y genera interacción.',
    problema: 'Hacer carruseles con demasiado texto que la gente no lee ni guarda.',
    comoFunciona: 'Escribes tu consejo principal; la app lo divide en 7 diapositivas con la cantidad justa de palabras por lámina.',
    publicoObjetivo: 'Consultores, formadores y creadores de contenido.',
    funcionesPrincipales: ['Estructura probada de 7 láminas', 'Contador de caracteres por diapositiva', 'Exportación de textos formateados'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['instagram', 'carruseles', 'redessociales', 'contenido']
  },

  // ==========================================
  // HOBBIES (N1)
  // ==========================================
  {
    id: 'calculador-exposicion-fotografia-manual',
    nivel: 'Nivel 1',
    categoria: 'Hobbies',
    iconoCategoria: '🎮',
    nombre: 'Simulador del Triángulo de Exposición Fotográfica',
    descripcionCorta: 'Entiende cómo interactúan la Apertura (f/), Velocidad de Obturación e ISO con vista previa en tiempo real.',
    queEs: 'Herramienta pedagógica interactiva para aprender fotografía en modo manual sin perderte en teoría técnica.',
    problema: 'El miedo a salir del modo automático de la cámara y obtener fotos borrosas o subexpuestas.',
    comoFunciona: 'Mueves los diales virtuales y ves al instante cómo cambia el desenfoque del fondo (bokeh), el grano y el movimiento congelado.',
    publicoObjetivo: 'Fotógrafos aficionados y estudiantes de cine y fotografía.',
    funcionesPrincipales: ['Simulador visual de profundidad de campo y desenfoque', 'Guía de ajustes recomendados para retratos, deportes y noche', 'Glosario interactivo'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['fotografia', 'camara', 'iso', 'apertura', 'hobbies']
  },

  // ==========================================
  // OTROS NICHOS RENTABLES (N1)
  // ==========================================
  {
    id: 'generador-politica-privacidad-aviso-legal',
    nivel: 'Nivel 1',
    categoria: 'Otros nichos rentables',
    iconoCategoria: '💡',
    nombre: 'Generador de Política de Privacidad y Cookies RGPD',
    descripcionCorta: 'Crea los textos legales obligatorios para tu página web o tienda online en 3 minutos adaptados a tu país.',
    queEs: 'Generador de textos de cumplimiento normativo para sitios web que recopilan formularios o usan Google Analytics.',
    problema: 'Pagar cientos de dólares a abogados para redactar textos legales estándar de páginas web.',
    comoFunciona: 'Indicas el nombre de tu web, país, uso de cookies y medios de contacto; descarga el texto legal formateado en HTML.',
    publicoObjetivo: 'Desarrolladores web, blogueros y dueños de tiendas online.',
    funcionesPrincipales: ['Textos actualizados conformes al RGPD y normativas internacionales', 'Aviso de cookies y banner informativo', 'Descarga en HTML y texto plano'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$14 USD',
    tags: ['legal', 'cookies', 'rgpd', 'privacidad', 'web']
  }
];
