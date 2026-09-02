import React, { useState, useMemo } from 'react';
import { IDEAS } from './data/ideas';
import { Level, MiniAppIdea } from './types';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { IdeaCard } from './components/IdeaCard';
import { IdeaDetailModal } from './components/IdeaDetailModal';
import { Search, X, Zap, Sparkles, LayoutGrid, Filter } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Level | 'Todas'>('Todas');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedIdea, setSelectedIdea] = useState<MiniAppIdea | null>(null);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Quick suggestion tags for search
  const quickTags = [
    'restaurantes',
    'finanzas',
    'niños',
    'nutrición',
    'marketing',
    'IA',
    'inmobiliario',
    'fitness',
    'e-commerce'
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    IDEAS.forEach((idea) => {
      counts[idea.categoria] = (counts[idea.categoria] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered ideas based on search, level, and category
  const filteredIdeas = useMemo(() => {
    return IDEAS.filter((idea) => {
      // Level filter
      if (selectedLevel !== 'Todas' && idea.nivel !== selectedLevel) {
        return false;
      }

      // Category filter
      if (selectedCategory && idea.categoria !== selectedCategory) {
        return false;
      }

      // Search query filter (matches name, category, description, problem, what it is, and tags)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inName = idea.nombre.toLowerCase().includes(query);
        const inCategory = idea.categoria.toLowerCase().includes(query);
        const inDesc = idea.descripcionCorta.toLowerCase().includes(query);
        const inProblem = (idea.problema || '').toLowerCase().includes(query);
        const inTarget = (idea.publicoObjetivo || '').toLowerCase().includes(query);
        const inTags = (idea.tags || []).some((tag) => tag.toLowerCase().includes(query));

        if (!inName && !inCategory && !inDesc && !inProblem && !inTarget && !inTags) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedLevel, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col antialiased">
      {/* 1. Encabezado — Barra Superior Oscura */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalIdeas={IDEAS.length}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(true)}
      />

      {/* Main Layout Area: Sidebar + Content */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* 4. Columna Lateral de Categorías */}
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          categoryCounts={categoryCounts}
          totalCount={IDEAS.length}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Central Content Area */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 py-8 md:py-10">
          {/* Header Title Section */}
          <div className="mb-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              {IDEAS.length}+ Ideas Rentables de Mini-Apps
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Ideas de mini-apps con investigación, copy y anuncios listos para que las pongas en práctica hoy.
            </p>
          </div>

          {/* 2. Buscador Central */}
          <div className="mb-6">
            <div className="relative max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="main-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por idea o nicho..."
                className="w-full bg-white border-2 border-slate-200 focus:border-indigo-600 rounded-2xl pl-12 pr-10 py-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none shadow-xs transition-all"
              />
              {searchQuery && (
                <button
                  id="btn-clear-main-search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick search tags */}
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <span className="text-xs text-slate-400 font-medium">Sugerencias:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  id={`btn-tag-${tag}`}
                  onClick={() => setSearchQuery(tag)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    searchQuery.toLowerCase() === tag
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Filtro Principal: Todas | Nivel 1 | Nivel 2 */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pt-2 pb-4 border-b border-slate-200">
            {/* Level Toggle */}
            <div className="inline-flex bg-slate-200/80 p-1 rounded-2xl">
              <button
                id="filter-all-levels"
                onClick={() => setSelectedLevel('Todas')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedLevel === 'Todas'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Todas</span>
              </button>

              <button
                id="filter-nivel-1"
                onClick={() => setSelectedLevel('Nivel 1')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedLevel === 'Nivel 1'
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Nivel 1</span>
              </button>

              <button
                id="filter-nivel-2"
                onClick={() => setSelectedLevel('Nivel 2')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedLevel === 'Nivel 2'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Nivel 2</span>
              </button>
            </div>

            {/* Active Filters / Results Count */}
            <div className="flex items-center gap-2">
              {selectedCategory && (
                <div className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1.5 rounded-xl text-xs font-semibold">
                  <span>{selectedCategory}</span>
                  <button
                    id="btn-clear-category"
                    onClick={() => setSelectedCategory(null)}
                    className="hover:text-indigo-900 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <span className="text-xs font-bold text-slate-500">
                Mostrando <strong className="text-slate-900">{filteredIdeas.length}</strong> de {IDEAS.length} ideas
              </span>
            </div>
          </div>

          {/* 5. Cuadrícula de Tarjetas */}
          {filteredIdeas.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredIdeas.map((idea) => (
                <IdeaCard
                  key={idea.id}
                  idea={idea}
                  onSelect={setSelectedIdea}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                No encontramos ideas con esa búsqueda
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Intenta buscar por otro término o restablece los filtros para ver todas las ideas disponibles.
              </p>
              <button
                id="btn-reset-filters"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLevel('Todas');
                  setSelectedCategory(null);
                }}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Ver todas las ideas
              </button>
            </div>
          )}
        </main>
      </div>

      {/* 7. "Ver Idea" — Panel de Detalle */}
      <IdeaDetailModal
        idea={selectedIdea}
        onClose={() => setSelectedIdea(null)}
      />
    </div>
  );
}
export default App;
