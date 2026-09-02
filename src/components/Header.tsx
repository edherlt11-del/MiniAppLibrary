import React from 'react';
import { Layers, Search, X } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalIdeas: number;
  onToggleMobileSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  totalIdeas,
  onToggleMobileSidebar
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            id="btn-toggle-mobile-menu"
            onClick={onToggleMobileSidebar}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Abrir menú de categorías"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onSearchChange('')}>
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-white block leading-tight">
                MiniApps Library
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:block">
                Biblioteca interactiva de ideas
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar in Header */}
        <div className="flex-1 max-w-md mx-2 hidden sm:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="header-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar por idea, nicho, problema..."
              className="w-full bg-slate-800/90 hover:bg-slate-800 focus:bg-slate-800 border border-slate-700/80 focus:border-indigo-500 rounded-xl pl-9.5 pr-8 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                id="btn-clear-header-search"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Count Badge */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-semibold text-slate-300 flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{totalIdeas}+ Ideas</span>
          </div>
        </div>
      </div>
    </header>
  );
};
