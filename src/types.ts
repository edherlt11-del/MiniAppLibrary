export type Level = 'Nivel 1' | 'Nivel 2';

export type MonetizationModel = 
  | 'Producto digital' 
  | 'Pago único' 
  | 'Suscripción' 
  | 'Freemium' 
  | 'Servicio';

export interface MiniAppIdea {
  id: string;
  nivel: Level;
  categoria: string;
  iconoCategoria: string;
  nombre: string;
  descripcionCorta: string; // 1-3 líneas persuasivas
  
  // Detalle de la idea (Panel de detalle)
  queEs?: string; // ¿Qué es?
  problema: string; // ¿Qué problema resuelve?
  comoFunciona: string[] | string; // ¿Cómo funcionaría?
  publicoObjetivo: string; // ¿Para quién?
  funcionesPrincipales: string[]; // Funciones principales
  modeloMonetizacion?: MonetizationModel | string; // Modelo de monetización
  
  // Campos complementarios y de compatibilidad
  monetizacionTipo?: string;
  solucion?: string;
  rangoPrecio?: string;
  dificultad?: string;
  score?: any;
  blueprint?: any;
  mvp?: string[];
  despuesPuedesAnadir?: string[];
  tags?: string[];
}
