import { MiniAppIdea } from '../types';

export const NIVEL_1_GROUP_A: MiniAppIdea[] = [
  // ==========================================
  // 1. ADELGAZAMIENTO & FITNESS
  // ==========================================
  {
    id: 'n1-protocolo-21-dias-abdomen',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏋️',
    nombre: 'Protocolo 21 Días Abdomen Definido',
    descripcionCorta: '21 entrenamientos rápidos de 15 minutos para realizar en casa, con progresión sencilla y seguimiento diario.',
    queEs: 'Un programa guiado de 21 días con rutinas de 15 minutos para tonificar el abdomen en casa sin equipamiento especial.',
    problema: 'La falta de constancia y no saber qué ejercicios específicos hacer cada día para obtener resultados visibles.',
    comoFunciona: [
      'Accedes a la rutina interactiva del día con video y temporizador.',
      'Completas la sesión guiada de 15 minutos paso a paso.',
      'Marcas el día completado para activar tu racha y desbloquear el siguiente entrenamiento.'
    ],
    publicoObjetivo: 'Personas que quieren quemar grasa abdominal y tonificar su cuerpo desde casa con poco tiempo.',
    funcionesPrincipales: [
      'Calendario progresivo de 21 días con desbloqueo diario',
      'Temporizador de intervalos integrado con avisos de descanso',
      'Guía visual con técnica correcta para cada ejercicio',
      'Registro de racha activa y porcentaje de avance'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$17 USD',
    tags: ['fitness', 'abdomen', 'casa', 'rutinas', 'entrenamiento']
  },
  {
    id: 'n1-calc-calorias-peso',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏋️',
    nombre: 'Calculadora de Calorías para Perder Peso',
    descripcionCorta: 'Calcula una meta calórica diaria según edad, peso, altura, actividad y objetivo.',
    queEs: 'Herramienta de cálculo nutricional que define tus calorías y distribución de macronutrientes para perder grasa de forma saludable.',
    problema: 'Seguir dietas genéricas sin conocer el gasto calórico real del propio cuerpo.',
    comoFunciona: [
      'Ingresas tus datos antropométricos y nivel de actividad.',
      'Eliges tu objetivo de pérdida de peso (moderado o acelerado).',
      'Obtienes tu presupuesto calórico diario y desglose de porciones.'
    ],
    publicoObjetivo: 'Hombres y mujeres en proceso de pérdida de grasa o cambio de composición corporal.',
    funcionesPrincipales: [
      'Cálculo automático de metabolismo basal y gasto calórico total',
      'Ajuste inteligente de déficit calórico sostenible',
      'Equivalencias prácticas en platos y porciones diarias',
      'Exportación del plan en PDF para guardar o imprimir'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['calorias', 'deficit', 'nutricion', 'peso', 'calculadora']
  },
  {
    id: 'n1-reto-30-habitos-fitness',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏋️',
    nombre: 'Reto 30 Días de Hábitos',
    descripcionCorta: 'Un reto visual que ayuda a crear hábitos diarios relacionados con alimentación, movimiento y descanso.',
    queEs: 'Panel interactivo de progreso para consolidar hábitos saludables clave durante un mes completo.',
    problema: 'Intentar cambiar todos los hábitos de golpe y abandonar a los pocos días por saturación.',
    comoFunciona: [
      'Eliges o personalizas tus 3 a 5 micro-hábitos diarios.',
      'Marcas cada casilla al completar agua, pasos, comida sana o descanso.',
      'Visualizas tu gráfico de consistencia y celebras tus logros semanales.'
    ],
    publicoObjetivo: 'Personas que buscan transformar su estilo de vida y crear rutinas duraderas.',
    funcionesPrincipales: [
      'Tablero visual de 30 casillas con medidor de consistencia',
      'Recordatorios diarios motivacionales',
      'Estadísticas de adherencia por hábito',
      'Recompensas e insignias visuales al cumplir hitos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['habitos', 'reto', 'salud', 'constancia', 'bienestar']
  },
  {
    id: 'n1-generador-rutinas-casa',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏋️',
    nombre: 'Generador de Rutinas en Casa',
    descripcionCorta: 'Crea una rutina según tiempo disponible, nivel y equipamiento que tenga la persona.',
    queEs: 'Creador dinámico de circuitos de ejercicio personalizados para entrenar en la sala o habitación.',
    problema: 'No saber qué entrenar hoy ni cómo adaptar los ejercicios cuando no se tienen pesas ni máquinas.',
    comoFunciona: [
      'Indicas los minutos que tienes (10, 20 o 30 min) y tu equipamiento (ninguno, mancuernas, bandas).',
      'Seleccionas tu nivel y grupo muscular preferido.',
      'La mini-app ensambla un circuito listo con temporizador interactivo.'
    ],
    publicoObjetivo: 'Teletrabajadores, estudiantes y madres/padres que entrenan en casa.',
    funcionesPrincipales: [
      'Generación instantánea de circuitos equilibrados',
      'Filtro por equipamiento disponible (peso corporal, bandas, sillas)',
      'Temporizador integrado para tiempos de trabajo y descanso',
      'Alternativas sencillas para ejercicios de alto impacto'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$14 USD',
    tags: ['rutinas', 'casa', 'ejercicios', 'sinpesas', 'entrenamiento']
  },
  {
    id: 'n1-tracker-progreso-corporal',
    nivel: 'Nivel 1',
    categoria: 'Adelgazamiento & Fitness',
    iconoCategoria: '🏋️',
    nombre: 'Tracker de Progreso Corporal',
    descripcionCorta: 'Permite registrar peso, medidas y fotografías para visualizar la evolución semana a semana.',
    queEs: 'Bitácora privada de transformación física para medir cambios reales más allá del número de la balanza.',
    problema: 'Frustrarse pensando que no hay progreso porque el peso oscila, sin ver cambios en cintura y ropa.',
    comoFunciona: [
      'Registras tus medidas clave cada semana (cintura, cadera, pecho, muslos).',
      'Subes tus fotos comparativas de frente y perfil.',
      'Observas la gráfica de tendencia real y comparativa visual antes/después.'
    ],
    publicoObjetivo: 'Personas en planes de recomposición corporal, pérdida de peso o aumento de masa.',
    funcionesPrincipales: [
      'Comparador interactivo de fotos lado a lado (slider antes/después)',
      'Gráficos de reducción de centímetros corporales',
      'Cálculo estimado de porcentaje de grasa aproximado',
      'Almacenamiento privado y seguro de datos personales'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['medidas', 'progreso', 'fotos', 'transformacion', 'cuerpo']
  },

  // ==========================================
  // 2. ARTESANÍA & DIY
  // ==========================================
  {
    id: 'n1-calc-precio-manualidades',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🛠️',
    nombre: 'Calculadora de Precio para Manualidades',
    descripcionCorta: 'Calcula el precio de venta considerando materiales, tiempo de trabajo, gastos y margen.',
    queEs: 'Simulador financiero para artesanos que calcula precios de venta justos y rentables para creaciones hechas a mano.',
    problema: 'Cobrar por debajo del costo real por olvidar la mano de obra, luz, empaques y comisiones de pasarelas.',
    comoFunciona: [
      'Ingresas los materiales utilizados y su costo unitario.',
      'Añades los minutos dedicados a la confección y tu valor por hora.',
      'Defines el margen de ganancia deseado y obtienes el precio final sugerido.'
    ],
    publicoObjetivo: 'Artesanos de crochet, velas, jabones, bisutería, resina y costura creativa.',
    funcionesPrincipales: [
      'Desglose minucioso de costo de materiales y mermas',
      'Cálculo de valor/hora de trabajo del creador',
      'Sugerencia de precio mayorista vs precio minorista',
      'Ficha técnica descargable por cada producto'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['artesania', 'precios', 'manualidades', 'costos', 'diy']
  },
  {
    id: 'n1-generador-ideas-diy',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🛠️',
    nombre: 'Generador de Ideas DIY',
    descripcionCorta: 'Introduce materiales disponibles y recibe ideas de proyectos que puede crear con ellos.',
    queEs: 'Buscador creativo de proyectos que sugiere manualidades según los insumos que ya tienes en tu taller.',
    problema: 'Tener sobrantes de telas, maderas, lanas o frascos acumulando polvo sin saber qué hacer con ellos.',
    comoFunciona: [
      'Seleccionas los materiales que tienes a mano (cartón, lana, frascos de vidrio, retazos).',
      'Eliges la dificultad y el tiempo que deseas dedicar.',
      'Recibes una lista de proyectos creativos con instrucciones básicas.'
    ],
    publicoObjetivo: 'Aficionados a las manualidades, familias y entusiastas del reciclaje creativo.',
    funcionesPrincipales: [
      'Buscador por combinación múltiple de insumos',
      'Filtro por nivel de dificultad y duración del proyecto',
      'Guía paso a paso de cada idea sugerida',
      'Opción de guardar proyectos favoritos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['ideas', 'manualidades', 'reciclaje', 'proyectos', 'diy']
  },
  {
    id: 'n1-planner-proyectos-diy',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🛠️',
    nombre: 'Planner de Proyectos DIY',
    descripcionCorta: 'Organiza materiales, pasos, presupuesto y tiempo necesario para cada proyecto.',
    queEs: 'Organizador estructurado para planificar y ejecutar proyectos manuales desde la idea inicial hasta el acabado final.',
    problema: 'Empezar manualidades con entusiasmo y dejarlas a medias por falta de organización y materiales faltantes.',
    comoFunciona: [
      'Creas una ficha para tu nuevo proyecto con fotos de referencia.',
      'Anotas los materiales requeridos, presupuesto y fases de trabajo.',
      'Haces seguimiento del avance hasta completar la pieza.'
    ],
    publicoObjetivo: 'Makers, carpinteros aficionados, tejedores y creadores de contenido DIY.',
    funcionesPrincipales: [
      'Ficha completa de proyecto con galería de inspiración',
      'Checklist de insumos y compras pendientes',
      'Cronograma por fases de confección o secado',
      'Registro de costos reales vs presupuesto inicial'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['planner', 'proyectos', 'artesanos', 'organizacion', 'diy']
  },
  {
    id: 'n1-lista-materiales-manualidades',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🛠️',
    nombre: 'Lista de Materiales para Manualidades',
    descripcionCorta: 'Selecciona un proyecto y genera automáticamente una checklist de materiales.',
    queEs: 'Generador de listas de compras e inventario optimizado para diferentes tipos de artesanías populares.',
    problema: 'Ir a la tienda de manualidades y olvidar comprar pegamentos, agujas específicas o barnices clave.',
    comoFunciona: [
      'Seleccionas la técnica que vas a realizar (macramé, resina epoxi, scrapbooking).',
      'Indicas la escala o número de piezas a elaborar.',
      'Obtienes la lista exacta de herramientas e insumos organizada para comprar.'
    ],
    publicoObjetivo: 'Principiantes en manualidades y dueños de pequeños talleres de artesanías.',
    funcionesPrincipales: [
      'Listas predefinidas para más de 30 técnicas artesanales',
      'Calculadora de cantidades según dimensiones de la pieza',
      'Modo checklist interactivo para ir marcando en la tienda',
      'Exportación directa a WhatsApp o notas del móvil'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['materiales', 'compras', 'checklist', 'taller', 'manualidades']
  },
  {
    id: 'n1-calc-costos-artesania',
    nivel: 'Nivel 1',
    categoria: 'Artesanía & DIY',
    iconoCategoria: '🛠️',
    nombre: 'Calculadora de Costos de Artesanía',
    descripcionCorta: 'Registra materiales y cantidades para conocer exactamente cuánto cuesta fabricar cada pieza.',
    queEs: 'Hoja de costeo unitario precisa para desglosar insumos directos e indirectos por producto.',
    problema: 'Desconocer el margen real de ganancia al vender piezas individuales o por encargo.',
    comoFunciona: [
      'Añades el costo por paquete de cada insumo (ej. ovillo de hilo, frasco de resina).',
      'Indicas la cantidad exacta utilizada en una unidad (ej. 45 gramos).',
      'La herramienta calcula el costo unitario de producción al milímetro.'
    ],
    publicoObjetivo: 'Pequeños emprendedores y artesanos que venden en ferias, Instagram o tiendas online.',
    funcionesPrincipales: [
      'Conversión automática de unidades (gramos, metros, mililitros)',
      'Inclusión de costos de embalaje, etiquetas y packaging',
      'Cálculo de rentabilidad porcentual sobre el precio final',
      'Historial de costos guardado por catálogo de productos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['costos', 'artesania', 'rentabilidad', 'produccion', 'diy']
  },

  // ==========================================
  // 3. BELLEZA & SKINCARE
  // ==========================================
  {
    id: 'n1-rutina-skincare-personalizada',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '💄',
    nombre: 'Rutina Skincare Personalizada',
    descripcionCorta: 'Crea una rutina básica según tipo de piel, objetivos y productos disponibles.',
    queEs: 'Asistente de cuidado facial que estructura el orden correcto de aplicación de productos de día y noche.',
    problema: 'Mezclar principios activos incompatibles (ej. retinol y vitamina C) o aplicar productos en el orden incorrecto.',
    comoFunciona: [
      'Indicas tu tipo de piel (grasa, seca, mixta, sensible) y preocupación principal (acné, manchas, arrugas).',
      'Seleccionas los productos que ya tienes en casa.',
      'Recibes el paso a paso ordenado con tiempos de absorción.'
    ],
    publicoObjetivo: 'Personas que quieren cuidar su rostro de manera efectiva sin gastar de más.',
    funcionesPrincipales: [
      'Constructor de rutina AM / PM por capas de densidad',
      'Detector de incompatibilidades entre ingredientes activos',
      'Guía de aplicación con cantidades recomendadas (tamaño guisante, 3 gotas)',
      'Recordatorio de uso y reaplicación de protector solar'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['skincare', 'rutina', 'belleza', 'piel', 'cosmetica']
  },
  {
    id: 'n1-tracker-skincare-constancia',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '💄',
    nombre: 'Tracker de Skincare',
    descripcionCorta: 'Permite registrar la rutina diaria y observar la constancia durante semanas.',
    queEs: 'Registro diario de cuidado de la piel para medir constancia y correlacionar mejorías con productos aplicados.',
    problema: 'Abandonar tratamientos dermatológicos antes de ver resultados por falta de seguimiento diario.',
    comoFunciona: [
      'Marcas cada mañana y noche los pasos de tu rutina completados.',
      'Anotas el estado de tu piel (brotes, rojeces, luminosidad).',
      'Revisas la evolución tras 4 y 8 semanas continuas.'
    ],
    publicoObjetivo: 'Personas en tratamientos para acné, rosácea o rejuvenecimiento facial.',
    funcionesPrincipales: [
      'Checklist AM/PM rápido de 1 toque',
      'Diario de fotos faciales con fecha y comparativa',
      'Registro de reacciones alérgicas o brotes temporales',
      'Gráficas de constancia mensual'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['tracker', 'skincare', 'piel', 'constancia', 'belleza']
  },
  {
    id: 'n1-test-tipo-de-piel',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '💄',
    nombre: 'Test de Tipo de Piel',
    descripcionCorta: 'Un cuestionario sencillo que orienta al usuario sobre su tipo de piel y cuidados básicos.',
    queEs: 'Evaluación rápida basada en sensaciones al despertar, poros y brillo para identificar el biotipo cutáneo.',
    problema: 'Comprar cosméticos inadecuados por no saber si la piel es grasa deshidratada, seca o mixta.',
    comoFunciona: [
      'Respondes 6 preguntas visuales sobre cómo reacciona tu piel durante el día.',
      'El sistema diagnostica tu tipo de piel dominante.',
      'Obtienes una guía de ingredientes recomendados y qué evitar.'
    ],
    publicoObjetivo: 'Personas que inician en el cuidado personal y quieren comprar cosméticos con seguridad.',
    funcionesPrincipales: [
      'Test interactivo de 2 minutos con ilustraciones explicativas',
      'Diagnóstico de tipo de piel y estado de la barrera cutánea',
      'Listado de activos estrella (ácido hialurónico, niacinamida, etc.)',
      'Ficha resumen descargable para llevar de compras'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$7 USD',
    tags: ['test', 'piel', 'diagnostico', 'belleza', 'cosmetica']
  },
  {
    id: 'n1-organizador-productos-belleza',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '💄',
    nombre: 'Organizador de Productos de Belleza',
    descripcionCorta: 'Registra productos, fechas de apertura y recordatorios de reposición.',
    queEs: 'Inventario inteligente para cosméticos y maquillaje con alertas de vencimiento tras la apertura (PAO).',
    problema: 'Usar cremas y máscaras de pestañas vencidas que causan infecciones o pierden su eficacia.',
    comoFunciona: [
      'Añades tus productos con su fecha de apertura y símbolo PAO (6M, 12M).',
      'La app calcula automáticamente la fecha de caducidad real.',
      'Recibes alertas cuando un producto está por expirar o necesita reposición.'
    ],
    publicoObjetivo: 'Amantes del maquillaje, cosmetólogas y personas con tocador con múltiples productos.',
    funcionesPrincipales: [
      'Calculadora de fecha límite según el símbolo PAO del frasco',
      'Alertas de caducidad antes de que el producto se degrade',
      'Control de gastos y productos duplicados',
      'Lista de reposición de cosméticos esenciales'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['organizador', 'maquillaje', 'caducidad', 'tocador', 'belleza']
  },
  {
    id: 'n1-planner-rutina-belleza',
    nivel: 'Nivel 1',
    categoria: 'Belleza & Skincare',
    iconoCategoria: '💄',
    nombre: 'Planner de Rutina de Belleza',
    descripcionCorta: 'Organiza las rutinas de mañana, noche y cuidados semanales.',
    queEs: 'Planificador integral que coordina exfoliaciones semanales, mascarillas, cuidado capilar y corporal.',
    problema: 'Olvidar cuándo toca hacer exfoliación, mascarilla capilar o depilación, perdiendo continuidad.',
    comoFunciona: [
      'Configuras tus días de cuidados especiales (ej. mascarilla domingos, exfoliación miércoles).',
      'Revisas tu calendario semanal de belleza.',
      'Marcas cada ritual completado para mantener una rutina balanceada.'
    ],
    publicoObjetivo: 'Personas que disfrutan del autocuidado y quieren una rutina semanal bien estructurada.',
    funcionesPrincipales: [
      'Calendario semanal de tratamientos faciales y capilares',
      'Control de frecuencia para evitar sobre-exfoliación',
      'Espacio para notas y sensaciones de cada mascarilla',
      'Plantilla imprimible y versión móvil sincronizada'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['planner', 'rutina', 'autocuidado', 'belleza', 'semanal']
  },

  // ==========================================
  // 4. CARRERA & LINKEDIN
  // ==========================================
  {
    id: 'n1-generador-titular-linkedin',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Generador de Titular de LinkedIn',
    descripcionCorta: 'Introduce profesión, experiencia y especialidad para obtener diferentes propuestas de titular.',
    queEs: 'Creador de titulares de alto impacto optimizados con palabras clave para atraer reclutadores y clientes.',
    problema: 'Tener un titular genérico ("En búsqueda activa de empleo" o solo el cargo) que pasa desapercibido.',
    comoFunciona: [
      'Rellenas tu rol actual, propuesta de valor única y habilidades clave.',
      'La herramienta genera al instante 10 variantes (orientadas a captación, autoridad o resultados).',
      'Eliges y copias la opción que mejor represente tu perfil.'
    ],
    publicoObjetivo: 'Profesionales, consultores, freelancers y personas en transición laboral.',
    funcionesPrincipales: [
      'Fórmulas probadas de copywriting profesional (Beneficio + Rol + Prueba)',
      'Medidor de caracteres para evitar que se corte en móviles',
      'Optimización SEO para búsquedas internas de reclutadores',
      'Sugerencias de emojis profesionales para destacar'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['linkedin', 'titular', 'empleo', 'carrera', 'curriculum']
  },
  {
    id: 'n1-optimizador-perfil-profesional',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Optimizador de Perfil Profesional',
    descripcionCorta: 'Checklist interactivo para revisar las principales secciones de un perfil profesional.',
    queEs: 'Auditoría guiada de 20 puntos para convertir un perfil estático en un imán de oportunidades laborales.',
    problema: 'Perder oportunidades laborales por tener secciones incompletas, foto poco profesional o falta de palabras clave.',
    comoFunciona: [
      'Revisas cada sección de tu perfil (banner, acerca de, experiencia, destacados).',
      'Marcas los ítems completados y sigues los ejemplos prácticos incluidos.',
      'Obtienes tu puntuación de optimización y recomendaciones de mejora.'
    ],
    publicoObjetivo: 'Candidatos a puestos de trabajo, directivos y freelancers.',
    funcionesPrincipales: [
      'Checklist interactivo dividido por secciones estratégicas',
      'Plantillas de redacción para la sección "Acerca de"',
      'Puntuación global de atractivo de perfil',
      'Guía de dimensiones y buenas prácticas para banner y foto'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['perfil', 'linkedin', 'auditoria', 'carrera', 'empleo']
  },
  {
    id: 'n1-generador-publicaciones-linkedin',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Generador de Publicaciones de LinkedIn',
    descripcionCorta: 'Introduce un tema y genera diferentes estructuras de publicaciones.',
    queEs: 'Asistente de redacción que transforma aprendizajes profesionales en posts atractivos y virales.',
    problema: 'Tener conocimientos valiosos pero sufrir el síndrome de la hoja en blanco al querer publicar en LinkedIn.',
    comoFunciona: [
      'Escribes tu idea, lección o logro en 2 líneas.',
      'Seleccionas la estructura deseada (historia personal, lista de consejos, caso de estudio).',
      'Obtienes el post estructurado con ganchos y llamadas a la acción.'
    ],
    publicoObjetivo: 'Fundadores, ejecutivos, formadores y creadores de contenido B2B.',
    funcionesPrincipales: [
      'Más de 15 estructuras de posts probadas con alto engagement',
      'Generador de ganchos iniciales para maximizar clics en "ver más"',
      'Contador de caracteres y previsualización de formato',
      'Banco de llamadas a la acción para generar comentarios'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['posts', 'linkedin', 'copywriting', 'marca-personal', 'redaccion']
  },
  {
    id: 'n1-planner-busqueda-empleo',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Planner de Búsqueda de Empleo',
    descripcionCorta: 'Organiza empresas, vacantes, postulaciones, entrevistas y seguimiento.',
    queEs: 'Tablero de control estilo CRM para gestionar procesos de selección de personal sin olvidar ningún seguimiento.',
    problema: 'Postular a decenas de ofertas y no recordar qué CV se envió, qué sueldo se pidió o cuándo hacer seguimiento.',
    comoFunciona: [
      'Registras cada vacante con enlace, empresa, salario y versión de CV enviada.',
      'Mueves la tarjeta de estado (Postulado, Entrevista RH, Prueba Técnica, Oferta).',
      'Recibes recordatorios de cuándo enviar emails de agradecimiento o seguimiento.'
    ],
    publicoObjetivo: 'Profesionales en búsqueda activa de empleo o cambio de carrera.',
    funcionesPrincipales: [
      'Tablero Kanban de etapas de selección',
      'Plantillas de correos de seguimiento post-entrevista',
      'Registro de contactos clave y reclutadores por empresa',
      'Calculadora de tasa de respuesta de tus postulaciones'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['empleo', 'busqueda', 'entrevistas', 'carrera', 'postulaciones']
  },
  {
    id: 'n1-calc-salario-profesional',
    nivel: 'Nivel 1',
    categoria: 'Carrera & LinkedIn',
    iconoCategoria: '💼',
    nombre: 'Calculadora de Salario Profesional',
    descripcionCorta: 'Compara salario actual, salario objetivo y valor estimado por hora.',
    queEs: 'Evaluador de compensación laboral que desglosa sueldo neto, beneficios no monetarios y tarifa horaria real.',
    problema: 'Aceptar ofertas salariales sin calcular deducciones de impuestos, gastos de transporte y horas extras reales.',
    comoFunciona: [
      'Ingresas tu salario bruto propuesto y beneficios incluidos.',
      'Añades horas reales de trabajo y desplazamientos.',
      'Obtienes tu tarifa neta real por hora y comparativa con tu empleo actual.'
    ],
    publicoObjetivo: 'Empleados evaluando ofertas de trabajo o negociando incrementos salariales.',
    funcionesPrincipales: [
      'Cálculo de salario neto estimado por país',
      'Conversor automático entre salario anual, mensual y por hora',
      'Simulador de impacto financiero de un cambio de empleo',
      'Guía con argumentos para negociar aumento de sueldo'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['salario', 'sueldo', 'negociacion', 'dinero', 'carrera']
  },

  // ==========================================
  // 5. COCINA & REPOSTERÍA
  // ==========================================
  {
    id: 'n1-recetario-5-ingredientes',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍰',
    nombre: 'Recetario de Máximo 5 Ingredientes',
    descripcionCorta: 'Encuentra recetas sencillas utilizando pocos ingredientes.',
    queEs: 'Buscador de preparaciones rápidas, deliciosas y económicas que solo requieren 5 ingredientes básicos.',
    problema: 'Llegar a casa cansado y no saber qué cocinar sin complicarse con listas interminables del supermercado.',
    comoFunciona: [
      'Seleccionas los ingredientes que tienes en tu refrigerador.',
      'Filtra las recetas que puedes hacer de inmediato en menos de 20 minutos.',
      'Sigues el paso a paso ilustrado.'
    ],
    publicoObjetivo: 'Estudiantes, personas solas, familias ocupadas y cocineros principiantes.',
    funcionesPrincipales: [
      'Más de 100 recetas probadas de almuerzos, cenas y postres',
      'Filtro por tiempo de preparación y utensilio (sartén, horno, microondas)',
      'Información nutricional básica por porción',
      'Modo cocina con pantalla siempre encendida'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['recetas', 'cocina', 'facil', 'ingredientes', 'comida']
  },
  {
    id: 'n1-calc-porciones-cocina',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍰',
    nombre: 'Calculadora de Porciones',
    descripcionCorta: 'Introduce la cantidad de personas y adapta automáticamente las cantidades de una receta.',
    queEs: 'Escalador automático de recetas que recalcula gramos, tazas y cucharadas para cualquier número de comensales.',
    problema: 'Equivocarse al multiplicar o dividir ingredientes de repostería y arruinar la textura del pastel.',
    comoFunciona: [
      'Pegas o introduces los ingredientes de la receta original para X comensales.',
      'Indicas cuántas porciones necesitas hoy (ej. de 4 a 10 personas).',
      'Obtienes las cantidades recalculadas con redondeo inteligente.'
    ],
    publicoObjetivo: 'Reposteros, anfitriones de cenas y amantes de la cocina casera.',
    funcionesPrincipales: [
      'Escalado proporcional exacto de gramos, mililitros y unidades',
      'Conversor de medidas (tazas a gramos según el ingrediente)',
      'Ajuste automático de tiempos de horneado estimados',
      'Botón para copiar la nueva receta ajustada'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['porciones', 'reposteria', 'cocina', 'recetas', 'calculadora']
  },
  {
    id: 'n1-planificador-semanal-comidas',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍰',
    nombre: 'Planificador Semanal de Comidas',
    descripcionCorta: 'Organiza desayunos, almuerzos y cenas para toda la semana.',
    queEs: 'Organizador semanal de menús para evitar el estrés del "qué comemos hoy" y ahorrar en comida a domicilio.',
    problema: 'La improvisación diaria que lleva a comer mal, pedir delivery caro y tirar comida que caduca en la nevera.',
    comoFunciona: [
      'Arrastras platos a los días de la semana de lunes a domingo.',
      'Equilibras carnes, verduras, legumbres y pastas.',
      'Descargas el menú familiar para colocarlo en la puerta del refrigerador.'
    ],
    publicoObjetivo: 'Familias, practicantes de meal prep y personas que quieren comer sano y ahorrar.',
    funcionesPrincipales: [
      'Cuadrícula semanal intuitiva de desayunos, almuerzos y cenas',
      'Sugerencias automáticas para reutilizar sobras de manera creativa',
      'Plantilla imprimible en alta resolución',
      'Integración con la lista de compras del supermercado'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['menu', 'planificador', 'comidas', 'semanal', 'mealprep']
  },
  {
    id: 'n1-lista-compras-inteligente-cocina',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍰',
    nombre: 'Lista de Compras Inteligente',
    descripcionCorta: 'Convierte automáticamente un menú semanal en una lista de ingredientes.',
    queEs: 'Agrupador automático de insumos que consolida los ingredientes de tu menú en pasillos de supermercado.',
    problema: 'Comprar ingredientes duplicados o dar vueltas desordenadas por el supermercado perdiendo tiempo.',
    comoFunciona: [
      'Seleccionas los platos planificados para la semana.',
      'La herramienta suma cantidades y genera la lista agrupada por categorías (frutas, lácteos, despensa).',
      'Tachas productos en tiempo real mientras recorres la tienda.'
    ],
    publicoObjetivo: 'Amas de casa, parejas y organizadores del hogar.',
    funcionesPrincipales: [
      'Agrupación automática por pasillos y secciones del mercado',
      'Consolidación de ingredientes compartidos entre recetas',
      'Estimador de presupuesto total de la compra',
      'Opción de compartir lista por WhatsApp en 1 clic'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['compras', 'supermercado', 'lista', 'despensa', 'cocina']
  },
  {
    id: 'n1-calc-costos-recetas-ventas',
    nivel: 'Nivel 1',
    categoria: 'Cocina & Repostería',
    iconoCategoria: '🍰',
    nombre: 'Calculadora de Costos de Recetas',
    descripcionCorta: 'Calcula cuánto cuesta preparar una receta y cuánto debería cobrarse si se vende.',
    queEs: 'Hoja de escandallo culinario para calcular el costo exacto por porción y fijar precios de venta en pastelería o comida.',
    problema: 'Vender pasteles o postres caseros y descubrir a fin de mes que los ingresos no cubren los ingredientes ni el gas.',
    comoFunciona: [
      'Introduces los ingredientes con sus precios de compra comercial.',
      'Añades costos de empaque (caja, cinta, tarjeta) y horas de horno.',
      'Fijas tu margen de ganancia y obtienes el precio unitario y por docena.'
    ],
    publicoObjetivo: 'Emprendedores de repostería casera, catering y pequeños restaurantes.',
    funcionesPrincipales: [
      'Escandallo profesional con cálculo de merma y desperdicio',
      'Inclusión de costos de energía, agua y desgaste de moldes',
      'Comparativa de precio de venta vs costo de producción',
      'Ficha técnica con margen bruto por producto'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['escandallo', 'costos', 'recetas', 'reposteria', 'precios']
  },

  // ==========================================
  // 6. DESARROLLO PERSONAL
  // ==========================================
  {
    id: 'n1-reto-21-habitos-desarrollo',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Reto 21 Días de Hábitos',
    descripcionCorta: 'Un programa visual para completar pequeños hábitos durante 21 días.',
    queEs: 'Guía interactiva basada en neurociencia para instaurar un nuevo hábito mediante micro-acciones progresivas.',
    problema: 'La falta de disciplina y motivación que hace abandonar nuevos hábitos en la primera semana.',
    comoFunciona: [
      'Eliges el hábito a consolidar (lectura, meditación, despertar temprano).',
      'Completas la micro-tarea diaria asignada.',
      'Registras tu estado y ves crecer tu medidor de racha ininterrumpida.'
    ],
    publicoObjetivo: 'Personas interesadas en crecimiento personal, productividad y superación.',
    funcionesPrincipales: [
      'Estructura de 21 días dividida en 3 fases de consolidación neuronal',
      'Técnica de anclaje de hábitos (habit stacking)',
      'Reflexiones diarias para superar la resistencia mental',
      'Diplomado simbólico al finalizar con éxito el reto'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['habitos', 'reto21', 'crecimiento', 'disciplina', 'mente']
  },
  {
    id: 'n1-diario-gratitud-diario',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Diario de Gratitud',
    descripcionCorta: 'Registra diariamente momentos positivos y permite revisar el progreso.',
    queEs: 'Espacio sereno para registrar 3 agradecimientos diarios y cultivar una mentalidad positiva y resiliente.',
    problema: 'El sesgo de negatividad que nos hace obsesionarnos con lo que falta en lugar de valorar lo que tenemos.',
    comoFunciona: [
      'Abres la app al despertar o antes de dormir.',
      'Escribes 3 agradecimientos y una lección aprendida.',
      'Revisas tu mural histórico de momentos felices en días difíciles.'
    ],
    publicoObjetivo: 'Personas que buscan reducir la ansiedad y mejorar su bienestar emocional.',
    funcionesPrincipales: [
      'Prompts y preguntas reflexivas que cambian cada día',
      'Muro visual de recuerdos y agradecimientos pasados',
      'Modo nocturno relajante para escribir antes de dormir',
      'Exportación en formato revista o libro de recuerdos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['gratitud', 'diario', 'bienestar', 'mindfulness', 'positividad']
  },
  {
    id: 'n1-tracker-habitos-rachas',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Tracker de Hábitos',
    descripcionCorta: 'Marca hábitos diarios y visualiza las rachas conseguidas.',
    queEs: 'Registro minimalista de hábitos diarios con medidor visual de rachas inspirado en la regla "no rompas la cadena".',
    problema: 'Olvidar cumplir con los objetivos diarios y perder la noción del progreso acumulado.',
    comoFunciona: [
      'Configuras tus hábitos principales (ej. leer 10 páginas, tomar 2L de agua).',
      'Marcas cada casilla al completarlo durante el día.',
      'Visualizas tu mapa de calor mensual de consistencia.'
    ],
    publicoObjetivo: 'Estudiantes, profesionales y personas orientadas a objetivos.',
    funcionesPrincipales: [
      'Mapa de calor mensual estilo GitHub',
      'Contador de mejor racha histórica vs racha actual',
      'Agrupación por categorías (salud, mente, finanzas)',
      'Sonido satisfactorio al completar todos los hábitos del día'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['tracker', 'habitos', 'rachas', 'disciplina', 'productividad']
  },
  {
    id: 'n1-planner-objetivos-metas',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Planner de Objetivos',
    descripcionCorta: 'Convierte un objetivo grande en pequeñas acciones semanales.',
    queEs: 'Desglosador metodológico de metas SMART que transforma grandes sueños en tareas accionables de 15 minutos.',
    problema: 'Sentir parálisis por abrumamiento ante metas grandes sin saber cuál es el siguiente paso concreto.',
    comoFunciona: [
      'Defines tu objetivo trimestral o anual.',
      'La herramienta te guía para dividirlo en 3 hitos y micro-tareas semanales.',
      'Haces seguimiento semanal de avance porcentual.'
    ],
    publicoObjetivo: 'Emprendedores, creativos y personas con proyectos personales pendientes.',
    funcionesPrincipales: [
      'Metodología SMART y OKRs simplificada',
      'Desglose en cascada: Meta Anual > Hito Mensual > Tarea Semanal',
      'Barra de progreso visual por objetivo',
      'Plantilla de revisión y ajuste trimestral'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['objetivos', 'metas', 'planner', 'okrs', 'accion']
  },
  {
    id: 'n1-ruleta-productividad-accion',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Ruleta de Productividad',
    descripcionCorta: 'Cuando el usuario no sabe qué hacer, recibe una pequeña acción productiva aleatoria.',
    queEs: 'Disparador anti-procrastinación que entrega una micro-tarea de 5 minutos para romper el bloqueo mental.',
    problema: 'Perder horas scrolleando en redes sociales por no decidir qué tarea empezar.',
    comoFunciona: [
      'Pulsas el botón de girar ruleta cuando te sientas estancado.',
      'Recibes una acción rápida (ej. ordenar el escritorio, responder 1 email pendiente, estirar 3 min).',
      'Inicias el temporizador y pasas a la acción de inmediato.'
    ],
    publicoObjetivo: 'Personas con tendencia a procrastinar o con fatiga de decisión.',
    funcionesPrincipales: [
      'Ruleta visual animada con más de 50 micro-acciones productivas',
      'Opción de añadir tareas personalizadas de tu propia lista',
      'Temporizador de activación rápida de 5 minutos',
      'Historial de tareas desbloqueadas en el día'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$8 USD',
    tags: ['ruleta', 'productividad', 'procrastinacion', 'foco', 'accion']
  },

  // ==========================================
  // 7. EDUCACIÓN & OPOSICIONES
  // ==========================================
  {
    id: 'n1-generador-flashcards-estudio',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '🎓',
    nombre: 'Generador de Flashcards',
    descripcionCorta: 'Introduce un tema y crea tarjetas de estudio para repasar.',
    queEs: 'Creador interactivo de tarjetas de memoria con repetición espaciada para memorizar conceptos y leyes rápidamente.',
    problema: 'Pasar horas releyendo apuntes pasivamente sin retener la información para el día del examen.',
    comoFunciona: [
      'Escribes o pegas tus preguntas y respuestas clave.',
      'La mini-app genera las tarjetas interactivas de doble cara.',
      'Practicas volteando tarjetas y clasificándolas según tu nivel de dominio.'
    ],
    publicoObjetivo: 'Opositores, estudiantes universitarios y aprendices de idiomas.',
    funcionesPrincipales: [
      'Algoritmo de repetición espaciada (modo Leitner)',
      'Modo repaso rápido en móvil para estudiar en el transporte',
      'Exportación en formato PDF imprimible para recortar',
      'Estadísticas de retención por materia'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['flashcards', 'estudio', 'oposiciones', 'memoria', 'examenes']
  },
  {
    id: 'n1-generador-quiz-practica',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '🎓',
    nombre: 'Generador de Quiz',
    descripcionCorta: 'Introduce un contenido y crea preguntas para practicar.',
    queEs: 'Constructor de cuestionarios tipo test con opciones múltiples y retroalimentación inmediata.',
    problema: 'No contar con simulacros de preguntas para comprobar si realmente se domina un tema antes de la prueba.',
    comoFunciona: [
      'Introduces las preguntas con su respuesta correcta y opciones trampa.',
      'Inicias el modo test con cronómetro.',
      'Obtienes tu calificación final y la explicación detallada de cada fallo.'
    ],
    publicoObjetivo: 'Profesores, formadores y estudiantes que preparan exámenes tipo test.',
    funcionesPrincipales: [
      'Generación de tests con preguntas aleatorias',
      'Explicación justificada al fallar una pregunta',
      'Medición de tiempo por pregunta',
      'Compartir cuestionarios mediante un enlace directo'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['quiz', 'test', 'examenes', 'preguntas', 'estudio']
  },
  {
    id: 'n1-planificador-estudio-oposiciones',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '🎓',
    nombre: 'Planificador de Estudio',
    descripcionCorta: 'Introduce fechas de exámenes y horas disponibles para crear un calendario de estudio.',
    queEs: 'Distribuidor inteligente de temarios que calcula cuántos temas o páginas estudiar al día para llegar a tiempo.',
    problema: 'Llegar a la fecha del examen sin haber alcanzado a repasar la mitad del temario.',
    comoFunciona: [
      'Ingresas el número de temas y la fecha de tu examen oficial.',
      'Indicas tus días de descanso y horas diarias de estudio disponibles.',
      'El sistema genera el calendario diario con vueltas de repaso programadas.'
    ],
    publicoObjetivo: 'Opositores a cuerpos del estado, MIR, selectividad y oposiciones docentes.',
    funcionesPrincipales: [
      'Cálculo de ritmo diario necesario (temas/día y horas/semana)',
      'Programación automática de repasos espaciados (1ª, 2ª y 3ª vuelta)',
      'Ajuste dinámico si te retrasas un día sin perder el control',
      'Gráfica de progreso del temario completado'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['planificador', 'oposiciones', 'estudio', 'temario', 'calendario']
  },
  {
    id: 'n1-simulador-examen-tiempo',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '🎓',
    nombre: 'Simulador de Examen',
    descripcionCorta: 'Permite practicar preguntas con límite de tiempo y resultado final.',
    queEs: 'Entorno de simulación de exámenes con presión de tiempo real, penalización por respuestas incorrectas y plantilla de respuestas.',
    problema: 'Bloquearse por los nervios del cronómetro durante el examen real y administrar mal el tiempo por pregunta.',
    comoFunciona: [
      'Configuras el número de preguntas, tiempo total y fórmula de penalización (-0.33 por fallo).',
      'Realizas el simulacro sin distracciones.',
      'Obtienes tu nota sobre 10 y análisis de velocidad.'
    ],
    publicoObjetivo: 'Aspirantes a oposiciones oficiales, certificaciones y pruebas de admisión universitaria.',
    funcionesPrincipales: [
      'Temporizador regresivo con avisos de tiempo restante',
      'Cálculo de nota neta con penalizaciones oficiales',
      'Marcador de preguntas dudosas para revisar al final',
      'Historial de evolución de notas en simulacros'
    ],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$14 USD',
    tags: ['simulador', 'examen', 'oposiciones', 'test', 'tiempo']
  },
  {
    id: 'n1-tracker-estudio-horas',
    nivel: 'Nivel 1',
    categoria: 'Educación & Oposiciones',
    iconoCategoria: '🎓',
    nombre: 'Tracker de Estudio',
    descripcionCorta: 'Registra horas estudiadas, materias y progreso semanal.',
    queEs: 'Cronómetro de concentración (Study Time Tracker) con registro de horas netas dedicadas por asignatura.',
    problema: 'Engañarse con el "tiempo de silla" pensando que se estudiaron 8 horas cuando solo fueron 3 horas netas de concentración.',
    comoFunciona: [
      'Inicias el cronómetro de estudio al sentarte en el escritorio.',
      'Pausas en cada descanso para contabilizar únicamente tiempo efectivo.',
      'Revisas los reportes semanales de horas por materia.'
    ],
    publicoObjetivo: 'Opositores, universitarios y estudiantes autodidactas.',
    funcionesPrincipales: [
      'Cronómetro de estudio neto por materia',
      'Gráficas semanales de horas acumuladas',
      'Meta semanal de horas con barra de progreso',
      'Exportación de reportes de dedicación'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['tracker', 'horas', 'estudio', 'concentracion', 'oposiciones']
  },

  // ==========================================
  // 8. ESPIRITUALIDAD
  // ==========================================
  {
    id: 'n1-plan-lectura-biblica',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '✝️',
    nombre: 'Planificador de Lectura Bíblica',
    descripcionCorta: 'Organiza un plan diario de lectura y permite marcar cada día completado.',
    queEs: 'Guía de lectura que estructura la Biblia en 365 días (cronológico, por testamentos o temático) con registro de avance.',
    problema: 'Empezar a leer en Génesis y abandonar en Levítico por falta de un plan estructurado y motivador.',
    comoFunciona: [
      'Eliges tu plan preferido (Biblia en 1 año, Nuevo Testamento en 90 días, etc.).',
      'Lees los capítulos asignados al día.',
      'Marcas la casilla para ver tu porcentaje de avance en cada libro bíblico.'
    ],
    publicoObjetivo: 'Creyentes, líderes de iglesia, jóvenes y lectores de la Biblia.',
    funcionesPrincipales: [
      'Planes cronológicos, históricos y temáticos',
      'Checklist interactivo de los 66 libros de la Biblia',
      'Barra de progreso visual de cada libro y testamento',
      'Espacio para anotar reflexiones del pasaje del día'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['biblia', 'lectura', 'fe', 'devocional', 'espiritualidad']
  },
  {
    id: 'n1-diario-oracion-peticiones',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '✝️',
    nombre: 'Diario de Oración',
    descripcionCorta: 'Permite registrar motivos de oración y hacer seguimiento de ellos.',
    queEs: 'Bitácora espiritual para organizar peticiones personales, familiares y comunitarias, registrando testimonios de oraciones contestadas.',
    problema: 'Olvidar orar por las peticiones encomendadas por amigos o no recordar cómo Dios respondió en el pasado.',
    comoFunciona: [
      'Añades peticiones por categorías (familia, salud, finanzas, iglesia).',
      'Haces seguimiento en tus momentos devocionales diarios.',
      'Mueves a "Oraciones Contestadas" y escribes la fecha y testimonio.'
    ],
    publicoObjetivo: 'Personas de fe y miembros de comunidades cristianas.',
    funcionesPrincipales: [
      'Clasificación de peticiones por etiquetas y urgencia',
      'Muro de gratitud con oraciones respondidas',
      'Recordatorio diario para momentos de oración',
      'Opción de crear listas de oración para grupos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['oracion', 'diario', 'fe', 'peticiones', 'espiritualidad']
  },
  {
    id: 'n1-reto-21-devocional-diario',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '✝️',
    nombre: 'Reto 21 Días de Devocional',
    descripcionCorta: 'Programa diario con lectura, reflexión y acción práctica.',
    queEs: 'Guía espiritual de 3 semanas con lecturas cortas y desafíos prácticos para fortalecer la relación con Dios.',
    problema: 'La falta de hábito y constancia en el tiempo a solas diario con Dios.',
    comoFunciona: [
      'Abres la lectura del día (versículo clave + reflexión de 3 minutos).',
      'Respondes a la pregunta de aplicación para tu vida cotidiana.',
      'Realizas el reto práctico de amor al prójimo asignado.'
    ],
    publicoObjetivo: 'Personas que desean reavivar su vida espiritual y crear el hábito devocional.',
    funcionesPrincipales: [
      '21 devocionales temáticos con versículos y reflexiones',
      'Preguntas de autoexamen y aplicación práctica',
      'Audio reflexivo corto para escuchar en cualquier lugar',
      'Ficha de compromiso y certificado al concluir los 21 días'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['devocional', 'reto21', 'fe', 'espiritualidad', 'reflexion']
  },
  {
    id: 'n1-generador-versiculos-temas',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '✝️',
    nombre: 'Generador de Versículos por Tema',
    descripcionCorta: 'Selecciona un tema y encuentra referencias bíblicas relacionadas.',
    queEs: 'Buscador temático de pasajes bíblicos clasificados por emociones, situaciones de vida y doctrinas.',
    problema: 'Necesitar consuelo o dirección en un momento difícil y no saber qué pasaje bíblico leer.',
    comoFunciona: [
      'Eliges una emoción o tema (ansiedad, perdón, finanzas, duelo, esperanza).',
      'La herramienta muestra los versículos más relevantes y contextualizados.',
      'Copias o compartes el versículo con diseño de imagen para redes.'
    ],
    publicoObjetivo: 'Maestros de escuela dominical, pastores, consejeros y creyentes.',
    funcionesPrincipales: [
      'Más de 80 temas categorizados con citas bíblicas directas',
      'Comparativa de diferentes versiones (RVR1960, NVI, NTV)',
      'Generador de tarjetas con versículos para descargar o compartir',
      'Buscador instantáneo por palabra clave'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['versiculos', 'biblia', 'temas', 'consuelo', 'espiritualidad']
  },
  {
    id: 'n1-planner-grupo-pequeno-iglesia',
    nivel: 'Nivel 1',
    categoria: 'Espiritualidad',
    iconoCategoria: '✝️',
    nombre: 'Planner de Grupo Pequeño',
    descripcionCorta: 'Organiza reuniones, temas, asistentes y actividades de un grupo.',
    queEs: 'Organizador para líderes de células o grupos pequeños de estudio bíblico en hogares.',
    problema: 'Llegar a la reunión sin orden en los temas, refrigerios, dinámicas o seguimiento a los nuevos asistentes.',
    comoFunciona: [
      'Planificas la estructura de la reunión (bienvenida, alabanza, estudio, oración).',
      'Asignas quién lleva el refrigerio y quién dirige las preguntas.',
      'Llevas el registro de asistencia y motivos de oración del grupo.'
    ],
    publicoObjetivo: 'Líderes de células, pastores de jóvenes y coordinadores de grupos de estudio bíblico.',
    funcionesPrincipales: [
      'Estructura tipo minutero para reuniones de 60-90 minutos',
      'Banco de dinámicas de rompehielo y preguntas de discusión',
      'Registro de asistencia y visitantes',
      'Asignación de refrigerios y anfitriones de casa'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['celulas', 'grupos', 'iglesia', 'liderazgo', 'planner']
  },

  // ==========================================
  // 9. FINANZAS & INVERSIONES
  // ==========================================
  {
    id: 'n1-calc-presupuesto-mensual',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Calculadora de Presupuesto Mensual',
    descripcionCorta: 'Distribuye los ingresos entre gastos, ahorro, inversión y objetivos.',
    queEs: 'Planificador financiero basado en la regla 50/30/20 para organizar ingresos mensuales y evitar deudas.',
    problema: 'Llegar a fin de mes sin saber en qué se gastó el sueldo y sin capacidad de ahorro.',
    comoFunciona: [
      'Ingresas tus ingresos netos mensuales.',
      'La herramienta calcula los límites recomendados para necesidades (50%), deseos (30%) y ahorro/inversión (20%).',
      'Ajustas tus gastos reales y detectas desbalances de inmediato.'
    ],
    publicoObjetivo: 'Trabajadores, familias y personas que desean ordenar sus finanzas personales.',
    funcionesPrincipales: [
      'Distribución automática con la regla 50/30/20 y método del presupuesto base cero',
      'Alertas visuales si los gastos fijos superan el límite saludable',
      'Plantilla descargable para control mensual continuo',
      'Gráfica interactiva de tarta de tus gastos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['presupuesto', 'finanzas', 'ahorro', 'dinero', 'gastos']
  },
  {
    id: 'n1-simulador-ahorro-metas',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Simulador de Ahorro',
    descripcionCorta: 'Indica cuánto quieres ahorrar y calcula cuánto necesitas separar cada semana o mes.',
    queEs: 'Calculadora de metas de ahorro que desglosa el monto necesario según la fecha límite que te propongas.',
    problema: 'Querer ahorrar para un viaje, fondo de emergencia o auto sin saber exactamente cuánto apartar cada semana.',
    comoFunciona: [
      'Defines tu meta monetaria y el plazo en meses o semanas.',
      'El simulador calcula el aporte periódico exacto requerido.',
      'Visualizas el termómetro de progreso a medida que registras tus depósitos.'
    ],
    publicoObjetivo: 'Ahorradores con metas concretas a corto y mediano plazo.',
    funcionesPrincipales: [
      'Cálculo de cuota semanal, quincenal y mensual',
      'Termómetro visual de llenado de alcancía',
      'Simulador del reto del ahorro de las 52 semanas',
      'Estrategias para acelerar el cumplimiento de la meta'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['ahorro', 'metas', 'simulador', 'dinero', 'finanzas']
  },
  {
    id: 'n1-calc-interes-compuesto',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Calculadora de Interés Compuesto',
    descripcionCorta: 'Simula cuánto podría crecer una inversión con aportes periódicos.',
    queEs: 'Simulador patrimonial que proyecta el crecimiento exponencial del dinero invertido a largo plazo con aportes mensuales.',
    problema: 'No dimensionar el poder del interés compuesto y postergar el inicio de la inversión para el retiro.',
    comoFunciona: [
      'Ingresas capital inicial, aporte mensual, rendimiento anual estimado y plazo en años.',
      'La herramienta calcula el desglose entre dinero aportado y ganancias por interés.',
      'Visualizas la curva exponencial de crecimiento financiero.'
    ],
    publicoObjetivo: 'Inversionistas principiantes, ahorradores para el retiro y entusiastas de la educación financiera.',
    funcionesPrincipales: [
      'Gráfico interactivo de barras comparando capital propio vs intereses generados',
      'Ajuste por tasa de inflación proyectada',
      'Tabla detallada año por año del balance patrimonial',
      'Comparativa de rentabilidades (ej. 5%, 8%, 10% anual)'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['inversion', 'interes-compuesto', 'retiro', 'patrimonio', 'finanzas']
  },
  {
    id: 'n1-tracker-gastos-categorias',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Tracker de Gastos',
    descripcionCorta: 'Registra gastos por categorías y muestra dónde se está yendo el dinero.',
    queEs: 'Registro de gastos diarios ultra-rápido para categorizar desembolsos en menos de 5 segundos.',
    problema: 'La fuga de dinero en "gastos hormiga" invisibles que destruyen la capacidad de ahorro.',
    comoFunciona: [
      'Registras cada gasto con su monto y categoría (comida, transporte, salidas, suscripciones).',
      'La app genera gráficos automáticos de distribución.',
      'Identificas tus mayores fugas financieras del mes.'
    ],
    publicoObjetivo: 'Personas que necesitan controlar sus gastos diarios sin apps complejas ni vincular cuentas bancarias.',
    funcionesPrincipales: [
      'Ingreso rápido de gastos en 2 clics',
      'Detección automática de gastos hormiga y suscripciones',
      'Gráficas de porcentaje por categoría de consumo',
      'Resumen comparativo mensual con límites presupuestarios'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['gastos', 'tracker', 'control', 'dinero', 'presupuesto']
  },
  {
    id: 'n1-simulador-libertad-financiera',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Simulador de Libertad Financiera',
    descripcionCorta: 'Estima cuánto capital e ingresos pasivos podrían necesitarse según determinados objetivos.',
    queEs: 'Calculadora del movimiento FIRE (Financial Independence, Retire Early) basada en la regla del 4% para alcanzar la jubilación temprana.',
    problema: 'No tener un número exacto de cuánto capital acumulado se requiere para vivir de rentas e inversiones.',
    comoFunciona: [
      'Introduces tu costo de vida mensual deseado.',
      'El simulador calcula tu "Número de Libertad Financiera" necesario.',
      'Muestra los años requeridos según tu tasa actual de ahorro e inversión.'
    ],
    publicoObjetivo: 'Personas que buscan independencia financiera, retiro anticipado e ingresos pasivos.',
    funcionesPrincipales: [
      'Cálculo de la regla del 4% (monto de patrimonio objetivo)',
      'Estimación de rentas pasivas mensuales generadas',
      'Simulador de años restantes según diferentes tasas de ahorro',
      'Informe descargable con ruta de acción financiera'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$15 USD',
    tags: ['libertad-financiera', 'fire', 'jubilacion', 'ingresos-pasivos', 'inversion']
  },

  // ==========================================
  // 10. FAMILIA & CRIANZA
  // ==========================================
  {
    id: 'n1-planner-rutinas-infantiles',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👨‍👩‍👧',
    nombre: 'Planner de Rutinas Infantiles',
    descripcionCorta: 'Crea rutinas visuales para mañana, tarde y noche.',
    queEs: 'Tablero de pictogramas visuales para que niños pequeños sigan sus hábitos diarios de forma autónoma y sin rabietas.',
    problema: 'Las batallas matutinas y nocturnas para que los niños se vistan, laven los dientes o se vayan a dormir.',
    comoFunciona: [
      'Seleccionas las actividades con iconos coloridos (cepillarse, pijama, guardar juguetes).',
      'Creas la secuencia visual de mañana o noche.',
      'El niño marca la tarea completada y gana estrellas o stickers.'
    ],
    publicoObjetivo: 'Padres y madres con niños de 2 a 8 años, educadores infantiles.',
    funcionesPrincipales: [
      'Más de 40 pictogramas infantiles ilustrados y amigables',
      'Secuencias personalizadas para mañana, tarde y hora de dormir',
      'Versión interactiva en tablet/móvil y versión imprimible para la nevera',
      'Sistema de recompensas positivas por cumplimiento'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['ninos', 'rutinas', 'crianza', 'pictogramas', 'padres']
  },
  {
    id: 'n1-tabla-responsabilidades-ninos',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👨‍👩‍👧',
    nombre: 'Tabla de Responsabilidades',
    descripcionCorta: 'Asigna pequeñas tareas a los niños y permite marcar las completadas.',
    queEs: 'Cuadro de tareas del hogar adaptadas a la edad del niño para fomentar la colaboración, autonomía y sentido de responsabilidad.',
    problema: 'Hacer todas las tareas del hogar los padres solos sin lograr que los hijos cooperen en casa.',
    comoFunciona: [
      'Asignas tareas según la edad (hacer la cama, alimentar a la mascota, poner la mesa).',
      'El niño desliza o marca la casilla al terminar su responsabilidad.',
      'Al final de la semana se celebra el logro en familia.'
    ],
    publicoObjetivo: 'Familias con hijos de 4 a 14 años.',
    funcionesPrincipales: [
      'Guía de tareas recomendadas según la edad (metodología Montessori)',
      'Tablero de seguimiento semanal por cada hijo',
      'Asignación de puntos o privilegios familiares acumulables',
      'Diseño atractivo para motivar la participación infantil'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['tareas', 'responsabilidad', 'crianza', 'hogar', 'ninos']
  },
  {
    id: 'n1-reto-ahorro-para-ninos',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👨‍👩‍👧',
    nombre: 'Reto de Ahorro para Niños',
    descripcionCorta: 'Convierte el ahorro infantil en un reto visual con metas.',
    queEs: 'Alcancía digital interactiva para enseñar educación financiera a los niños de forma lúdica y tangible.',
    problema: 'La cultura de la gratificación instantánea en los niños y la dificultad para enseñar el valor del dinero y la paciencia.',
    comoFunciona: [
      'El niño elige el juguete o experiencia que desea comprar con sus ahorros.',
      'Registra cada moneda o billete guardado en su alcancía.',
      'Ve cómo se llena la barra de progreso hasta alcanzar la meta.'
    ],
    publicoObjetivo: 'Padres que desean inculcar hábitos financieros saludables a sus hijos.',
    funcionesPrincipales: [
      'Alcancía visual animada con medidor de monedas',
      'División de propina en 3 frascos: Ahorro, Gasto y Donación',
      'Certificado de pequeño ahorrador al alcanzar la meta',
      'Consejos de educación financiera adaptados a la infancia'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['ahorro', 'ninos', 'educacion-financiera', 'crianza', 'metas']
  },
  {
    id: 'n1-generador-actividades-ninos-casa',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👨‍👩‍👧',
    nombre: 'Generador de Actividades para Niños',
    descripcionCorta: 'Selecciona edad, tiempo disponible y materiales para obtener actividades.',
    queEs: 'Motor de juegos y experimentos sensoriales caseros para entretener a los niños sin recurrir a pantallas.',
    problema: 'Días de lluvia o tardes en casa donde los niños dicen "estoy aburrido" y terminan pegados a la televisión.',
    comoFunciona: [
      'Indicas la edad de tus hijos, el lugar (sala, patio) y materiales que tienes a mano (cajas, pintura, harina).',
      'Obtienes al instante 5 ideas de juegos creativos con instrucciones.',
      'Comienzan a jugar en menos de 2 minutos.'
    ],
    publicoObjetivo: 'Padres, madres, abuelos y cuidadores de niños de 1 a 10 años.',
    funcionesPrincipales: [
      'Más de 150 actividades sensoriales, motrices y artísticas',
      'Filtro por nivel de desorden (bajo, medio, alto)',
      'Tiempo estimado de juego y preparación',
      'Instrucciones paso a paso ilustradas'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['juegos', 'ninos', 'actividades', 'sin-pantallas', 'crianza']
  },
  {
    id: 'n1-calendario-familiar-organizacion',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👨‍👩‍👧',
    nombre: 'Calendario Familiar',
    descripcionCorta: 'Organiza actividades, tareas, eventos y responsabilidades de toda la familia.',
    queEs: 'Centro de comando familiar que coordina citas médicas, actividades extraescolares, cumpleaños y menús en una sola vista.',
    problema: 'El caos de agendas cruzadas donde se olvidan actos escolares, vacunas o citas importantes.',
    comoFunciona: [
      'Creas perfiles con colores para cada miembro de la familia.',
      'Añades los eventos y tareas semanales.',
      'Toda la familia consulta el calendario centralizado.'
    ],
    publicoObjetivo: 'Familias ocupadas con múltiples hijos y actividades extracurriculares.',
    funcionesPrincipales: [
      'Vista semanal y mensual con código de color por miembro',
      'Lista de compras y recordatorios familiares compartidos',
      'Planificador de fines de semana y vacaciones',
      'Diseño limpio apto para imprimir o consultar en pantalla'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['familia', 'calendario', 'organizacion', 'agenda', 'crianza']
  },

  // ==========================================
  // 11. MASCOTAS
  // ==========================================
  {
    id: 'n1-planner-cuidados-mascota',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐶',
    nombre: 'Planner de Cuidados de Mascota',
    descripcionCorta: 'Organiza alimentación, higiene, paseos y cuidados.',
    queEs: 'Organizador integral para el bienestar de perros y gatos que centraliza horarios de comida, baños, corte de uñas y paseos.',
    problema: 'Olvidar si ya se le dio de comer a la mascota, cuándo fue el último baño o cuándo toca desparasitar.',
    comoFunciona: [
      'Configuras el perfil de tu mascota (nombre, peso, raza).',
      'Creas el cronograma de paseos, comidas y aseo.',
      'Marcas cada cuidado completado para mantener una rutina saludable.'
    ],
    publicoObjetivo: 'Dueños de perros y gatos primerizos o con múltiples mascotas.',
    funcionesPrincipales: [
      'Checklist diario de alimentación y paseos',
      'Calendario de higiene (baño, cepillado de dientes, corte de uñas)',
      'Registro de medicamentos y tratamientos especiales',
      'Ficha de contacto veterinario de emergencia'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['mascotas', 'perros', 'gatos', 'cuidados', 'planner']
  },
  {
    id: 'n1-recordatorio-vacunas-mascota',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐶',
    nombre: 'Recordatorio de Vacunas',
    descripcionCorta: 'Registra vacunas y fechas próximas de renovación.',
    queEs: 'Cartilla sanitaria digital para perros y gatos que avisa con antelación sobre revacunaciones y desparasitaciones.',
    problema: 'Perder la cartilla física de vacunación o olvidar la fecha anual de la vacuna antirrábica o séxtuple.',
    comoFunciona: [
      'Anotas las vacunas aplicadas con fecha y lote.',
      'La mini-app calcula automáticamente la próxima fecha de revacunación.',
      'Recibes alertas preventivas antes de que venza la inmunidad.'
    ],
    publicoObjetivo: 'Tutores de perros y gatos comprometidos con la salud preventiva.',
    funcionesPrincipales: [
      'Calendario oficial de vacunas según la especie y edad',
      'Control de desparasitaciones internas y externas (pipetas/pastillas)',
      'Historial descargable en PDF para mostrar en el veterinario o guardería',
      'Alertas programables previas al vencimiento'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['vacunas', 'veterinaria', 'mascotas', 'salud', 'perros']
  },
  {
    id: 'n1-calc-alimentacion-mascotas',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐶',
    nombre: 'Calculadora de Alimentación',
    descripcionCorta: 'Calcula una referencia orientativa de porciones según los datos introducidos.',
    queEs: 'Calculadora de raciones de pienso o comida natural (BARF/Cocida) según el peso ideal, edad y actividad de la mascota.',
    problema: 'El sobrepeso en mascotas por alimentar a ojo o no ajustar porciones tras la esterilización.',
    comoFunciona: [
      'Ingresas el peso de tu mascota, edad, estado reproductivo y nivel de actividad.',
      'Seleccionas el tipo de dieta (croquetas secas, húmeda o dieta natural).',
      'Obtienes los gramos diarios exactos recomendados divididos por tomas.'
    ],
    publicoObjetivo: 'Dueños de perros y gatos que buscan prevenir la obesidad y mejorar la nutrición de su mascota.',
    funcionesPrincipales: [
      'Cálculo de Requerimiento Energético de Mantenimiento (REM)',
      'Porciones diferenciadas para cachorros, adultos y seniors',
      'Calculadora de transición gradual de alimentos (regla 7 días)',
      'Lista de alimentos prohibidos y tóxicos para perros y gatos'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['alimentacion', 'porciones', 'nutricion-mascotas', 'barf', 'perros']
  },
  {
    id: 'n1-diario-mascota-salud',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐶',
    nombre: 'Diario de Mascota',
    descripcionCorta: 'Registra peso, hábitos, actividades y observaciones.',
    queEs: 'Cuaderno clínico y de anécdotas para documentar la evolución del peso, síntomas extraños y momentos entrañables.',
    problema: 'Llegar a la consulta veterinaria y no recordar con precisión cuándo empezó el vómito, la cojera o el cambio de ánimo.',
    comoFunciona: [
      'Registras el peso mensual de tu mascota en la gráfica.',
      'Anotas cualquier cambio de comportamiento, heces o apetito.',
      'Compartes el registro cronológico con tu médico veterinario.'
    ],
    publicoObjetivo: 'Tutores de mascotas en tratamientos crónicos o dueños minuciosos.',
    funcionesPrincipales: [
      'Gráfico de curva de peso a lo largo de los meses',
      'Registro de incidentes de salud y medicamentos administrados',
      'Álbum de fotos de recuerdos y cumpleaños',
      'Informe clínico resumido para consultas médicas'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$10 USD',
    tags: ['diario', 'salud-mascota', 'peso', 'veterinario', 'perros']
  },
  {
    id: 'n1-checklist-nuevo-cachorro',
    nivel: 'Nivel 1',
    categoria: 'Mascotas',
    iconoCategoria: '🐶',
    nombre: 'Checklist para Nuevo Cachorro',
    descripcionCorta: 'Guía interactiva con todo lo necesario para preparar la llegada de una mascota.',
    queEs: 'Manual de preparación del hogar con lista de compras indispensables y protocolo para los primeros 7 días del cachorro.',
    problema: 'La improvisación y estrés de los primeros días por no tener comida adecuada, transportadora o productos antitóxicos.',
    comoFunciona: [
      'Revisas la lista de compras esenciales antes de que llegue el cachorro.',
      'Sigues la guía de seguridad para adaptar tu casa (cables, plantas venenosas).',
      'Implementas el protocolo de las primeras noches sin llantos.'
    ],
    publicoObjetivo: 'Familias y personas que van a adoptar o comprar un cachorro o gatito.',
    funcionesPrincipales: [
      'Checklist de compras categorizada (cama, platos, juguetes seguros, higiene)',
      'Guía anti-accidentes para el hogar',
      'Plan de entrenamiento para hacer sus necesidades en el lugar correcto',
      'Cronograma de primeras visitas veterinarias'
    ],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['cachorro', 'adopcion', 'checklist', 'primerosdias', 'mascotas']
  }
];
