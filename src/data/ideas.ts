import { MiniAppIdea } from '../types';
import { NIVEL_1_GROUP_A } from './nivel1GroupA';
import { NIVEL_1_GROUP_B } from './nivel1GroupB';
import { NIVEL_1_IDEAS } from './nivel1Ideas';
import { NIVEL_2_IDEAS } from './nivel2Ideas';
import { EXTRA_IDEAS } from './extraIdeas';
import { ADDITIONAL_CATALOG } from './additionalCatalog';

// Additional thematic ideas to ensure over 200+ rich, specific, and realistic ideas
const EXTENDED_COLLECTION: MiniAppIdea[] = [
  // Más Nivel 1
  {
    id: 'plan-nutricional-vegetariano-principiantes',
    nivel: 'Nivel 1',
    categoria: 'Nutrición',
    iconoCategoria: '🥗',
    nombre: 'Guía de Transición al Vegetarianismo Sin Déficit',
    descripcionCorta: 'Menú de 4 semanas con combinaciones de legumbres, cereales y suplementación de B12 explicada paso a paso.',
    queEs: 'Planificador interactivo para personas que quieren dejar la carne sin perder masa muscular ni sufrir anemia.',
    problema: 'Dejar la carne comiendo solo ensaladas y carbohidratos simples, sintiendo cansancio y hambre constante.',
    comoFunciona: 'La app diseña platos con proteína vegetal completa (ej. arroz con lentejas) y te recuerda la toma semanal de vitamina B12.',
    publicoObjetivo: 'Nuevos vegetarianos, flexitarianos y amantes de los animales.',
    funcionesPrincipales: ['Calculadora de proteína vegetal diaria', 'Lista de compras semanal', 'Guía de suplementación básica'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['vegetariano', 'nutricion', 'b12', 'salud', 'recetas']
  },
  {
    id: 'organizador-gastos-hormiga-diarios',
    nivel: 'Nivel 1',
    categoria: 'Finanzas & Inversiones',
    iconoCategoria: '💰',
    nombre: 'Calculadora de Inversión vs Consumo Innecesario',
    descripcionCorta: 'Calcula cuánto valdría en 10 años el dinero que gastas hoy en compras impulsivas si lo invirtieras en el S&P 500.',
    queEs: 'Freno psicológico interactivo antes de realizar una compra no planificada.',
    problema: 'Las compras por impulso que minan la capacidad de ahorro mensual.',
    comoFunciona: 'Ingresas el precio del producto que deseas comprar; la app te muestra su valor futuro en un fondo indexado.',
    publicoObjetivo: 'Consumidores conscientes y personas que buscan mejorar sus finanzas.',
    funcionesPrincipales: ['Comparador de costo de oportunidad', 'Regla de esperar 48 horas antes de comprar', 'Registro de compras evitadas y dinero ahorrado'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$9 USD',
    tags: ['ahorro', 'finanzas', 'inversion', 'psicologia']
  },
  {
    id: 'generador-prompts-midjourney-estilos',
    nivel: 'Nivel 1',
    categoria: 'Otros nichos rentables',
    iconoCategoria: '💡',
    nombre: 'Constructor Visual de Prompts para Midjourney y DALL-E',
    descripcionCorta: 'Elige iluminación, tipo de lente, estilo artístico y resolución para armar prompts profesionales sin recordar comandos complejos.',
    queEs: 'Asistente visual con selector de parámetros (--ar, --v, --style raw) para crear imágenes hiperrealistas con IA.',
    problema: 'Obtener imágenes genéricas o deformes por no conocer los modificadores técnicos de la IA.',
    comoFunciona: 'Seleccionas tu sujeto y marcas con casillas la iluminación (ej. luz volumétrica) y el lente (85mm f/1.4); copia el prompt listo.',
    publicoObjetivo: 'Diseñadores gráficos, creadores de contenido y agencias de publicidad.',
    funcionesPrincipales: ['Catálogo visual de 50 estilos artísticos', 'Selector de formatos de aspecto (16:9, 9:16, 1:1)', 'Botón de copiado con un solo toque'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$15 USD',
    tags: ['ia', 'midjourney', 'prompts', 'diseño', 'imagenes']
  },
  {
    id: 'tracker-lectura-libros-anuales',
    nivel: 'Nivel 1',
    categoria: 'Desarrollo Personal',
    iconoCategoria: '🌱',
    nombre: 'Reto de Lectura: 12 Libros en 12 Meses',
    descripcionCorta: 'Calcula cuántas páginas debes leer al día según el libro actual y mantén una biblioteca visual con tus mejores citas.',
    queEs: 'Registro de lectura minimalista con calculador de ritmo diario y espacio para notas clave.',
    problema: 'Comprar libros que se quedan acumulando polvo en la mesita de noche por falta de un ritmo constante.',
    comoFunciona: 'Ingresas el número de páginas del libro; la app te fija una meta realista de 10 a 15 páginas al día y registra tu progreso.',
    publicoObjetivo: 'Lectores constantes, estudiantes y profesionales en constante aprendizaje.',
    funcionesPrincipales: ['Calculador de páginas diarias por libro', 'Ficha de síntesis con 3 aprendizajes clave', 'Gráfico de estantería de libros leídos'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$8 USD',
    tags: ['libros', 'lectura', 'habitos', 'crecimiento']
  },
  {
    id: 'guia-primeros-auxilios-pediatricos',
    nivel: 'Nivel 1',
    categoria: 'Familia & Crianza',
    iconoCategoria: '👶',
    nombre: 'Guía Rápida de Primeros Auxilios y Fiebre Infantil',
    descripcionCorta: 'Protocolos de emergencia claros para atragantamiento, golpes en la cabeza y dosificación de antitérmicos por peso.',
    queEs: 'Manual interactivo de consulta rápida para padres ante situaciones de urgencia con niños pequeños.',
    problema: 'El pánico y la confusión sobre qué hacer en los primeros minutos de un accidente doméstico.',
    comoFunciona: 'Botones grandes por síntoma (ej. Fiebre, Golpe, Quemadura) que despliegan instrucciones visuales en 3 pasos y calculadora de dosis.',
    publicoObjetivo: 'Padres, madres, abuelos y niñeras.',
    funcionesPrincipales: ['Algoritmo de maniobra de Heimlich pediátrica en video', 'Calculadora de paracetamol e ibuprofeno por kilo', 'Lista de números de emergencia configurables'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$14 USD',
    tags: ['primerosauxilios', 'bebes', 'pediatria', 'salud', 'padres']
  },
  {
    id: 'generador-contratos-freelance-servicios',
    nivel: 'Nivel 1',
    categoria: 'Emprendimiento',
    iconoCategoria: '🚀',
    nombre: 'Generador de Contratos de Prestación de Servicios',
    descripcionCorta: 'Protege tu trabajo independiente con cláusulas de pagos por hitos, propiedad intelectual y límite de revisiones.',
    queEs: 'Plantilla legal interactiva para redactar acuerdos comerciales claros que evitan impagos y abusos de clientes.',
    problema: 'Clientes que piden cambios infinitos sin pagar extra o que se retrasan meses en liquidar el saldo final.',
    comoFunciona: 'Completas los datos del proyecto, montos y número de revisiones incluidas; descargas el contrato listo en PDF.',
    publicoObjetivo: 'Diseñadores, programadores, redactores y fotógrafos independientes.',
    funcionesPrincipales: ['Cláusula de límite de rondas de cambios (ej. máximo 2 revisiones)', 'Condición de anticipo del 50% previo al inicio', 'Descarga en formatos PDF y Word'],
    modeloMonetizacion: 'Pago único',
    rangoPrecio: '$17 USD',
    tags: ['contratos', 'freelance', 'legal', 'servicios', 'negocios']
  },
  {
    id: 'calculador-alcohol-en-sangre-conduccion',
    nivel: 'Nivel 1',
    categoria: 'Otros nichos rentables',
    iconoCategoria: '💡',
    nombre: 'Simulador de Tasa de Alcoholemia y Tiempo de Espera',
    descripcionCorta: 'Calcula tu tasa estimada de alcohol en sangre según bebidas consumidas, peso y sexo, y cuándo puedes volver a conducir seguro.',
    queEs: 'Herramienta preventiva de seguridad vial basada en la fórmula de Widmark.',
    problema: 'Conducir con dudas sobre si aún se supera el límite legal de alcohol tras una cena.',
    comoFunciona: 'Indicas lo que has tomado (cerveza, vino, destilados) y tu hora de última ingesta; la app calcula el descenso por hora.',
    publicoObjetivo: 'Conductores responsables y grupos de amigos.',
    funcionesPrincipales: ['Límites legales por país', 'Gráfico de curva de absorción y eliminación', 'Botón directo para pedir taxi o Uber'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$6 USD',
    tags: ['alcoholemia', 'seguridad', 'auto', 'salud']
  },
  {
    id: 'limpieza-organizada-armario-capsula',
    nivel: 'Nivel 1',
    categoria: 'Organización del Hogar',
    iconoCategoria: '🏡',
    nombre: 'Constructor de Armario Cápsula (33 Prendas)',
    descripcionCorta: 'Reduce tu ropa a 33 prendas versátiles y crea más de 70 combinaciones elegantes para vestirte en 2 minutos.',
    queEs: 'Método interactivo de depuración de ropa que ayuda a seleccionar prendas atemporales y combinables.',
    problema: 'Tener el armario lleno de ropa y sentir que no tienes nada que ponerte cada mañana.',
    comoFunciona: 'Clasificas tu ropa en básicos neutros y piezas de acento; la app te genera el catálogo de combinaciones semanales.',
    publicoObjetivo: 'Personas interesadas en minimalismo, moda sostenible y orden.',
    funcionesPrincipales: ['Regla 333 de Courtney Carver guiada', 'Matriz de combinación de colores', 'Checklist para donar y descartar ropa'],
    modeloMonetizacion: 'Producto digital',
    rangoPrecio: '$12 USD',
    tags: ['armario', 'capsula', 'moda', 'minimalismo', 'organizacion']
  }
];

// Combine all datasets
export const ALL_RAW_IDEAS: MiniAppIdea[] = [
  ...NIVEL_1_GROUP_A,
  ...NIVEL_1_GROUP_B,
  ...NIVEL_1_IDEAS,
  ...NIVEL_2_IDEAS,
  ...EXTRA_IDEAS,
  ...ADDITIONAL_CATALOG,
  ...EXTENDED_COLLECTION
];

// Normalize ideas to ensure complete fields and high quality
export const IDEAS: MiniAppIdea[] = ALL_RAW_IDEAS.map((idea, index) => {
  const queEsFinal = idea.queEs || (typeof idea.solucion === 'string' ? idea.solucion : idea.descripcionCorta);
  const problemaFinal = idea.problema || 'Falta de herramientas sencillas y enfocadas en resolver esta necesidad puntual.';
  const publicoFinal = idea.publicoObjetivo || 'Profesionales, particulares y negocios que buscan ahorrar tiempo y dinero.';
  const comoFuncionaFinal = Array.isArray(idea.comoFunciona) 
    ? idea.comoFunciona 
    : [typeof idea.comoFunciona === 'string' ? idea.comoFunciona : '1. Ingreso de datos clave. 2. Procesamiento automático. 3. Resultado listo para usar o exportar.'];
  const funcionesFinal = idea.funcionesPrincipales && idea.funcionesPrincipales.length > 0 
    ? idea.funcionesPrincipales 
    : ['Interfaz optimizada para móviles y escritorio', 'Cálculo y procesamiento en tiempo real', 'Exportación de resultados'];
  const modeloFinal = idea.modeloMonetizacion || (idea.nivel === 'Nivel 1' ? 'Pago único' : 'Suscripción');

  return {
    ...idea,
    id: idea.id || `idea-${index + 1}`,
    queEs: queEsFinal,
    problema: problemaFinal,
    comoFunciona: comoFuncionaFinal,
    publicoObjetivo: publicoFinal,
    funcionesPrincipales: funcionesFinal,
    modeloMonetizacion: modeloFinal,
    tags: idea.tags || [idea.categoria.toLowerCase(), idea.nivel.toLowerCase()]
  };
});
