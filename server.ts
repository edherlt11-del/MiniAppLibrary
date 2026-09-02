import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is missing.');
    }
    geminiClient = new GoogleGenAI({ apiKey });
  }
  return geminiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    appName: 'MINIAPP LIBRARY',
    timestamp: new Date().toISOString(),
    geminiConfigured: Boolean(process.env.GEMINI_API_KEY)
  });
});

// API: Generar nueva idea personalizada con IA
app.post('/api/generate-idea', async (req, res) => {
  try {
    const { prompt, nivel, categoria, monetizacion, audiencia } = req.body;
    
    if (!prompt && !categoria) {
      return res.status(400).json({ error: 'Se requiere una descripción o categoría para generar la idea.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: 'Servicio de IA no configurado. Por favor configura GEMINI_API_KEY en los ajustes.'
      });
    }

    const ai = getGeminiClient();
    
    const systemPrompt = `Eres un experto estratega de micro-SaaS, arquitecto de software y creador de negocios digitales rápidos.
Tu trabajo es generar una ficha de oportunidad de negocio de "Mini-App" o "Mini-SaaS" altamente viable, rentable y rápida de construir.

Debes responder ÚNICAMENTE con un objeto JSON válido (sin bloques markdown de código envolventes ni explicaciones adicionales), siguiendo exactamente esta estructura:
{
  "id": "slug-identificador-unico",
  "nivel": "${nivel || 'Nivel 1'}",
  "categoria": "${categoria || 'Productividad'}",
  "iconoCategoria": "⚡",
  "nombre": "Nombre Comercial Atractivo",
  "descripcionCorta": "Descripción directa de 1 frase explicando qué hace y por qué alguien pagaría.",
  "monetizacionTipo": "${monetizacion || 'Pago único'}",
  "rangoPrecio": "$15 - $29 USD",
  "dificultad": "Rápida",
  "score": {
    "total": 92,
    "demanda": 94,
    "problema": 95,
    "facilidadConstruccion": 90,
    "potencialPago": 92,
    "potencialSuscripcion": 80,
    "potencialIA": 95,
    "facilidadVenta": 93,
    "analisisBreve": "Explicación de 1 o 2 frases del porqué este negocio tiene alta probabilidad de éxito."
  },
  "problema": "Explicación detallada y dolorosa del problema real que sufren los usuarios.",
  "solucion": "Explicación clara de la micro-solución sin funciones innecesarias.",
  "publicoObjetivo": "A quién se le vende exactamente.",
  "comoFunciona": [
    "Paso 1 del usuario",
    "Paso 2 del usuario",
    "Paso 3 del usuario",
    "Paso 4 del usuario",
    "Paso 5 del usuario"
  ],
  "funcionesPrincipales": [
    "Función clave 1",
    "Función clave 2",
    "Función clave 3",
    "Función clave 4"
  ],
  "mvp": [
    "Elemento esencial 1",
    "Elemento esencial 2",
    "Elemento esencial 3"
  ],
  "despuesPuedesAnadir": [
    "Mejora futura 1",
    "Mejora futura 2"
  ],
  "blueprint": {
    "objetivo": "Objetivo principal de la aplicación",
    "usuario": "Perfil del usuario principal",
    "funcionesMvp": ["Función 1", "Función 2", "Función 3"],
    "pantallas": [
      { "nombre": "Pantalla 1", "descripcion": "Detalle de lo que muestra" },
      { "nombre": "Pantalla 2", "descripcion": "Detalle de lo que muestra" }
    ],
    "flujo": ["Paso 1", "Paso 2", "Paso 3", "Paso 4"],
    "monetizacion": "Estrategia de precios exacta recomendada",
    "tecnologiaRecomendada": {
      "frontend": "React + Tailwind CSS + Lucide Icons",
      "backend": "Express API o SPA Client-side",
      "ia": "Gemini 3.8 Flash para optimización y generación inteligente",
      "deploy": "Google AI Studio / Cloud Run"
    }
  }
}`;

    const userMessage = `Genera una idea innovadora y rentable basada en esta solicitud del usuario:
Tema o petición: "${prompt || 'Generar una micro-herramienta altamente demandada'}"
Preferencia de Nivel: ${nivel || 'Cualquiera'}
Categoría objetivo: ${categoria || 'Automática'}
Audiencia: ${audiencia || 'Emprendedores y profesionales'}
Tipo de monetización: ${monetizacion || 'Pago único o suscripción'}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: systemPrompt + '\n\n' + userMessage }] }
      ],
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7
      }
    });

    const responseText = response.text?.trim() || '{}';
    const parsedData = JSON.parse(responseText);

    // Ensure ID is set
    if (!parsedData.id) {
      parsedData.id = 'ai-idea-' + Date.now();
    }

    res.json({ success: true, idea: parsedData });
  } catch (error: any) {
    console.error('Error generating idea with Gemini:', error);
    res.status(500).json({
      error: 'Hubo un error al generar la idea con IA: ' + (error.message || 'Error desconocido')
    });
  }
});

// API: Mejorar y formatear prompt de construcción para Cursor / AI Studio
app.post('/api/generate-build-prompt', async (req, res) => {
  try {
    const { idea, customInstructions } = req.body;
    if (!idea) {
      return res.status(400).json({ error: 'Se requiere la información de la idea.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      // Fallback local template if API key is not yet set
      const fallbackPrompt = `# PROMPT MAESTRO PARA CONSTRUIR: ${idea.nombre.toUpperCase()}

## 1. DESCRIPCIÓN DEL PROYECTO
Construye una aplicación web llamada "${idea.nombre}".
${idea.descripcionCorta}

## 2. PÚBLICO Y PROBLEMA
- **Público Objetivo:** ${idea.publicoObjetivo}
- **Problema:** ${idea.problema}
- **Solución:** ${idea.solucion}

## 3. ESPECIFICACIÓN TÉCNICA (STACK)
- **Frontend:** ${idea.blueprint?.tecnologiaRecomendada?.frontend || 'React + Tailwind CSS + Lucide Icons'}
- **IA:** ${idea.blueprint?.tecnologiaRecomendada?.ia || 'Gemini 3.8 Flash SDK'}
- **Estilo Visual:** Limpio, moderno, tipografía legible, mucho espacio en blanco, sin elementos superfluos.

## 4. FUNCIONALIDADES ESENCIALES (MVP)
${(idea.mvp || []).map((m: string, i: number) => `${i + 1}. ${m}`).join('\n')}

## 5. PANTALLAS A DESARROLLAR
${(idea.blueprint?.pantallas || []).map((p: any) => `- **${p.nombre}:** ${p.descripcion}`).join('\n')}

## 6. FLUJO DEL USUARIO
${(idea.blueprint?.flujo || []).join('\n')}

## 7. MONETIZACIÓN
- **Modelo:** ${idea.monetizacionTipo} (${idea.rangoPrecio})
- ${idea.blueprint?.monetizacion || ''}
`;
      return res.json({ prompt: fallbackPrompt });
    }

    const ai = getGeminiClient();
    const promptRequest = `Actúa como un Lead Software Architect y Prompt Engineer senior.
Genera un PROMPT MAESTRO listo para copiar y pegar en Google AI Studio, Cursor o Claude para que construya la siguiente Mini-App desde cero con código perfecto.

Datos de la Mini-App:
Nombre: ${idea.nombre}
Categoría: ${idea.categoria}
Problema: ${idea.problema}
Solución: ${idea.solucion}
Público Objetivo: ${idea.publicoObjetivo}
MVP: ${(idea.mvp || []).join(', ')}
Funciones: ${(idea.funcionesPrincipales || []).join(', ')}
Stack Recomendado: ${JSON.stringify(idea.blueprint?.tecnologiaRecomendada || {})}
Instrucciones adicionales del usuario: ${customInstructions || 'Ninguna'}

Devuelve un prompt en formato Markdown claro, estructurado, profesional, sin rodeos, con instrucciones paso a paso para el agente de IA.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: promptRequest }] }],
      config: { temperature: 0.5 }
    });

    res.json({ prompt: response.text?.trim() });
  } catch (error: any) {
    console.error('Error generating build prompt:', error);
    res.status(500).json({ error: 'Error al generar el prompt de construcción: ' + error.message });
  }
});

// Vite Middleware & SPA Static fallback
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`MINIAPP LIBRARY Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
