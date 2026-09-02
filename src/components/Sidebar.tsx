import React from 'react';
import { NIVEL_1_CATEGORIES, NIVEL_2_CATEGORIES, CategoryItem } from '../data/categories';
import { Level } from '../types';
import { Sparkles, Zap, LayoutGrid, X } from 'lucide-react';

interface SidebarProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  selectedLevel: Level | 'Todas';
  onSelectLevel: (level: Level | 'Todas') => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedLevel,
  onSelectLevel,
  categoryCounts,
  totalCount,
  isOpenMobile,
  onCloseMobile
}) => {
  const content = (
    <div className="flex flex-col h-full py-4 px-3 space-y-6">
      {/* Quick Level Filter in Sidebar */}
      <div>
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
          Vistas Rápidas
        </div>
        <div className="space-y-1">
          <button
            id="sidebar-btn-all"
            onClick={() => {
              onSelectLevel('Todas');
              onSelectCategory(null);
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedLevel === 'Todas' && selectedCategory === null
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" />
              <span>Todas las ideas</span>
            </div>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
              selectedLevel === 'Todas' && selectedCategory === null
                ? 'bg-indigo-500 text-white'
                : 'bg-slate-200/80 text-slate-600'
            }`}>
              {totalCount}
            </span>
          </button>

          <button
            id="sidebar-btn-nivel-1"
            onClick={() => {
              onSelectLevel('Nivel 1');
              onSelectCategory(null);
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedLevel === 'Nivel 1' && selectedCategory === null
                ? 'bg-amber-500 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Nivel 1 (Mini-Apps)</span>
            </div>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
              selectedLevel === 'Nivel 1' && selectedCategory === null
                ? 'bg-amber-600 text-white'
                : 'bg-slate-200/80 text-slate-600'
            }`}>
              Nivel 1
            </span>
          </button>

          <button
            id="sidebar-btn-nivel-2"
            onClick={() => {
              onSelectLevel('Nivel 2');
              onSelectCategory(null);
              onCloseMobile();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              selectedLevel === 'Nivel 2' && selectedCategory === null
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Nivel 2 (Mini-SaaS)</span>
            </div>
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
              selectedLevel === 'Nivel 2' && selectedCategory === null
                ? 'bg-emerald-700 text-white'
                : 'bg-slate-200/80 text-slate-600'
            }`}>
              Nivel 2
            </span>
          </button>
        </div>
      </div>

      {/* NIVEL 1 CATEGORIES */}
      {(selectedLevel === 'Todas' || selectedLevel === 'Nivel 1') && (
        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
              Categorías Nivel 1
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Mini-apps</span>
          </div>
          <div className="space-y-0.5">
            {NIVEL_1_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.nombre] || 0;
              const isSelected = selectedCategory === cat.nombre;
              return (
                <button
                  key={cat.id}
                  id={`cat-n1-${cat.id}`}
                  onClick={() => {
                    onSelectCategory(isSelected ? null : cat.nombre);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors text-left cursor-pointer ${
                    isSelected
                      ? 'bg-amber-100/80 text-amber-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span>{cat.emoji}</span>
                    <span className="truncate">{cat.nombre}</span>
                  </span>
                  {count > 0 && (
                    <span className="text-[10px] text-slate-400 font-medium ml-1">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* NIVEL 2 CATEGORIES */}
      {(selectedLevel === 'Todas' || selectedLevel === 'Nivel 2') && (
        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
              Categorías Nivel 2
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Mini-SaaS</span>
          </div>
          <div className="space-y-0.5">
            {NIVEL_2_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat.nombre] || 0;
              const isSelected = selectedCategory === cat.nombre;
              return (
                <button
                  key={cat.id}
                  id={`cat-n2-${cat.id}`}
                  onClick={() => {
                    onSelectCategory(isSelected ? null : cat.nombre);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs transition-colors text-left cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-100/80 text-emerald-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <span>{cat.emoji}</span>
                    <span className="truncate">{cat.nombre}</span>
                  </span>
                  {count > 0 && (
                    <span className="text-[10px] text-slate-400 font-medium ml-1">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 shrink-0 bg-white border-r border-slate-200/90 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <span className="font-bold text-sm text-slate-900">Categorías y Filtros</span>
              <button
                id="btn-close-mobile-sidebar"
                onClick={onCloseMobile}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
};
