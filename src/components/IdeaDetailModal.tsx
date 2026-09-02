import React, { useEffect } from 'react';
import { MiniAppIdea } from '../types';
import { ArrowLeft, X, CheckCircle2, DollarSign, Users, HelpCircle, Lightbulb, Cog } from 'lucide-react';

interface IdeaDetailModalProps {
  idea: MiniAppIdea | null;
  onClose: () => void;
}

export const IdeaDetailModal: React.FC<IdeaDetailModalProps> = ({ idea, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!idea) return null;

  const isLevel1 = idea.nivel === 'Nivel 1';
  const steps = Array.isArray(idea.comoFunciona) 
    ? idea.comoFunciona 
    : [idea.comoFunciona];

  return (
    <div
      id="idea-detail-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="idea-detail-modal-container"
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <button
            id="btn-modal-back-top"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la biblioteca</span>
          </button>

          <button
            id="btn-modal-close-icon"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-7">
          {/* Header Title & Subtitle */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-2.5 py-1 text-[11px] font-extrabold rounded-md uppercase tracking-wider ${
                  isLevel1
                    ? 'bg-amber-50 text-amber-800 border border-amber-200'
                    : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                }`}
              >
                {idea.nivel}
              </span>
              <span className="text-sm font-semibold text-slate-500">
                {idea.iconoCategoria} {idea.categoria}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {idea.nombre}
            </h1>
          </div>

          {/* 1. ¿Qué es? */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              <h3>¿Qué es?</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
              {idea.queEs || idea.descripcionCorta}
            </p>
          </section>

          {/* 2. ¿Qué problema resuelve? */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <HelpCircle className="w-4 h-4 text-rose-500" />
              <h3>¿Qué problema resuelve?</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-rose-50/50 p-4 rounded-2xl border border-rose-100/60">
              {idea.problema}
            </p>
          </section>

          {/* 3. ¿Cómo funcionaría? */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Cog className="w-4 h-4 text-indigo-500" />
              <h3>¿Cómo funcionaría?</h3>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-2.5">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. ¿Para quién? */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <Users className="w-4 h-4 text-sky-500" />
              <h3>¿Para quién?</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed bg-sky-50/50 p-4 rounded-2xl border border-sky-100/60">
              {idea.publicoObjetivo}
            </p>
          </section>

          {/* 5. Funciones principales */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <h3>Funciones principales</h3>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <ul className="space-y-2">
                {idea.funcionesPrincipales.map((fn, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>{fn}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Modelo de monetización */}
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <h3>Modelo de monetización</h3>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider block">
                  Tipo de monetización
                </span>
                <span className="text-base font-extrabold text-emerald-900">
                  {idea.modeloMonetizacion || (isLevel1 ? 'Pago único' : 'Suscripción')}
                </span>
              </div>
              {idea.rangoPrecio && (
                <div className="sm:text-right">
                  <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider block">
                    Precio sugerido
                  </span>
                  <span className="text-sm font-bold text-emerald-800">
                    {idea.rangoPrecio}
                  </span>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Footer with return button */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <button
            id="btn-modal-back-bottom"
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la biblioteca</span>
          </button>
        </div>
      </div>
    </div>
  );
};
