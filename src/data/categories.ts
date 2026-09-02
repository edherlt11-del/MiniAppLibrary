export interface CategoryItem {
  id: string;
  nombre: string;
  emoji: string;
  nivel: 'Nivel 1' | 'Nivel 2' | 'Ambos';
}

export const NIVEL_1_CATEGORIES: CategoryItem[] = [
  { id: 'adelgazamiento-fitness', nombre: 'Adelgazamiento & Fitness', emoji: '🏋️', nivel: 'Nivel 1' },
  { id: 'artesania-diy', nombre: 'Artesanía & DIY', emoji: '🛠️', nivel: 'Nivel 1' },
  { id: 'belleza-skincare', nombre: 'Belleza & Skincare', emoji: '💄', nivel: 'Nivel 1' },
  { id: 'carrera-linkedin', nombre: 'Carrera & LinkedIn', emoji: '💼', nivel: 'Nivel 1' },
  { id: 'cocina-reposteria', nombre: 'Cocina & Repostería', emoji: '🍰', nivel: 'Nivel 1' },
  { id: 'desarrollo-personal', nombre: 'Desarrollo Personal', emoji: '🌱', nivel: 'Nivel 1' },
  { id: 'educacion-oposiciones', nombre: 'Educación & Oposiciones', emoji: '🎓', nivel: 'Nivel 1' },
  { id: 'espiritualidad', nombre: 'Espiritualidad', emoji: '✝️', nivel: 'Nivel 1' },
  { id: 'finanzas-inversiones', nombre: 'Finanzas & Inversiones', emoji: '💰', nivel: 'Nivel 1' },
  { id: 'familia-crianza', nombre: 'Familia & Crianza', emoji: '👨‍👩‍👧', nivel: 'Nivel 1' },
  { id: 'mascotas', nombre: 'Mascotas', emoji: '🐶', nivel: 'Nivel 1' },
  { id: 'nutricion', nombre: 'Nutrición', emoji: '🥗', nivel: 'Nivel 1' },
  { id: 'productividad', nombre: 'Productividad', emoji: '⏱️', nivel: 'Nivel 1' },
  { id: 'relaciones', nombre: 'Relaciones', emoji: '❤️', nivel: 'Nivel 1' },
  { id: 'viajes', nombre: 'Viajes', emoji: '✈️', nivel: 'Nivel 1' },
  { id: 'eventos-fiestas', nombre: 'Eventos & Fiestas', emoji: '🎉', nivel: 'Nivel 1' },
  { id: 'organizacion-hogar', nombre: 'Organización del Hogar', emoji: '🏠', nivel: 'Nivel 1' },
  { id: 'emprendimiento', nombre: 'Emprendimiento', emoji: '🚀', nivel: 'Nivel 1' },
  { id: 'marketing', nombre: 'Marketing', emoji: '📣', nivel: 'Nivel 1' },
  { id: 'redes-sociales', nombre: 'Redes Sociales', emoji: '📱', nivel: 'Nivel 1' },
  { id: 'creatividad', nombre: 'Creatividad', emoji: '🎨', nivel: 'Nivel 1' },
  { id: 'freelancers', nombre: 'Freelancers', emoji: '🧑‍💻', nivel: 'Nivel 1' }
];

export const NIVEL_2_CATEGORIES: CategoryItem[] = [
  { id: 'atencion-cliente', nombre: 'Atención al Cliente', emoji: '🤝', nivel: 'Nivel 2' },
  { id: 'automatizacion-marketing', nombre: 'Automatización de Marketing', emoji: '🎯', nivel: 'Nivel 2' },
  { id: 'contabilidad-fiscal', nombre: 'Contabilidad & Fiscal', emoji: '📊', nivel: 'Nivel 2' },
  { id: 'creadores-contenido', nombre: 'Creadores de Contenido', emoji: '🎥', nivel: 'Nivel 2' },
  { id: 'ecommerce-ventas', nombre: 'E-commerce & Ventas', emoji: '🛒', nivel: 'Nivel 2' },
  { id: 'educacion-elearning', nombre: 'Educación & E-learning', emoji: '🎓', nivel: 'Nivel 2' },
  { id: 'eventos-fiestas-saas', nombre: 'Eventos & Fiestas', emoji: '🎉', nivel: 'Nivel 2' },
  { id: 'fitness-personal', nombre: 'Fitness & Personal', emoji: '🏋️', nivel: 'Nivel 2' },
  { id: 'freelancers-agencias', nombre: 'Freelancers & Agencias', emoji: '🧑‍💻', nivel: 'Nivel 2' },
  { id: 'gestion-financiera', nombre: 'Gestión Financiera', emoji: '💳', nivel: 'Nivel 2' },
  { id: 'ia-automatizacion', nombre: 'IA & Automatización', emoji: '🤖', nivel: 'Nivel 2' },
  { id: 'inmobiliario', nombre: 'Inmobiliario', emoji: '🏠', nivel: 'Nivel 2' },
  { id: 'juridico-abogacia', nombre: 'Jurídico & Abogacía', emoji: '⚖️', nivel: 'Nivel 2' },
  { id: 'logistica-entregas', nombre: 'Logística & Entregas', emoji: '🚚', nivel: 'Nivel 2' },
  { id: 'pet-shops-veterinarios', nombre: 'Pet Shops & Veterinarios', emoji: '🐕', nivel: 'Nivel 2' },
  { id: 'productividad-tareas', nombre: 'Productividad & Tareas', emoji: '🧠', nivel: 'Nivel 2' },
  { id: 'rrhh-reclutamiento', nombre: 'RR. HH. & Reclutamiento', emoji: '👥', nivel: 'Nivel 2' },
  { id: 'restaurantes-delivery', nombre: 'Restaurantes & Delivery', emoji: '🍔', nivel: 'Nivel 2' },
  { id: 'salones-estetica', nombre: 'Salones & Estética', emoji: '💇', nivel: 'Nivel 2' },
  { id: 'salud-clinicas', nombre: 'Salud & Clínicas', emoji: '🏥', nivel: 'Nivel 2' }
];

export const ALL_CATEGORIES: CategoryItem[] = [
  ...NIVEL_1_CATEGORIES,
  ...NIVEL_2_CATEGORIES
];
