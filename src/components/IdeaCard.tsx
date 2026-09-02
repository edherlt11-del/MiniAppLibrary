import React from 'react';
import { MiniAppIdea } from '../types';
import { ArrowRight } from 'lucide-react';

interface IdeaCardProps {
  idea: MiniAppIdea;
  onSelect: (idea: MiniAppIdea) => void;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onSelect }) => {
  const isLevel1 = idea.nivel === 'Nivel 1';

  return (
    <div
      id={`idea-card-${idea.id}`}
      onClick={() => onSelect(idea)}
      className="bg-white rounded-2xl border border-slate-200/80 hover:border-indigo-500/60 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group"
    >
      <div>
        {/* Top Header: Level Badge & Category */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`px-2.5 py-1 text-[10px] font-extrabold rounded-md uppercase tracking-wider ${
              isLevel1
                ? 'bg-amber-50 text-amber-700 border border-amber-200/80'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
            }`}
          >
            {isLevel1 ? 'NIVEL 1' : 'NIVEL 2'}
          </span>

          <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 truncate">
            <span>{idea.iconoCategoria}</span>
            <span className="truncate">{idea.categoria}</span>
          </span>
        </div>

        {/* Idea Name */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
          {idea.nombre}
        </h3>

        {/* Short, persuasive description (1-3 lines) */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {idea.descripcionCorta}
        </p>
      </div>

      {/* Action CTA: Ver idea -> */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
        <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-600">
          {idea.modeloMonetizacion || (isLevel1 ? 'Pago único' : 'Suscripción')}
        </span>

        <button
          id={`btn-open-idea-${idea.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(idea);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-0.5 transition-all cursor-pointer"
        >
          <span>Ver idea</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
