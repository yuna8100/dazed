import React from 'react';
import { Article } from '../types';

interface SearchPanelProps {
  onClose: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filteredArticles: Article[];
  onSelectArticle: (article: Article) => void;
}

export default function SearchPanel({
  onClose,
  searchQuery,
  onSearchChange,
  filteredArticles,
  onSelectArticle,
}: SearchPanelProps) {
  const trendingSearches = ['제니', '크리스탈', '부쉐론', '임지연', '돌체앤가바나', 'FASHION'];

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto animate-fade-in flex flex-col p-6 md:p-16">
      {/* Search Header */}
      <div className="flex justify-between items-center border-b border-white/20 pb-6 mb-8">
        <span className="font-mono text-xs tracking-widest text-acid-green">DIGITAL ARCHIVE SEARCH</span>
        <button
          onClick={onClose}
          className="flex items-center gap-1 text-xs font-mono text-editorial-gray hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined !text-[18px]">close</span>
          CLOSE
        </button>
      </div>

      {/* Input container */}
      <div className="relative w-full max-w-4xl mx-auto mb-8">
        <input
          autoFocus
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="인물, 브랜드, 키워드로 검색해보세요..."
          className="w-full bg-transparent border-b-2 border-white/35 py-4 px-2 text-2xl md:text-4xl text-white placeholder-white/30 focus:outline-none focus:border-acid-green font-hanken tracking-tight"
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-editorial-gray">
          <span className="material-symbols-outlined !text-[32px]">search</span>
        </span>
      </div>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column: Trending Searches */}
        <div className="space-y-4">
          <h4 className="font-mono text-xs tracking-widest text-editorial-gray uppercase">TRENDING FEEDS</h4>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((tag) => (
              <button
                key={tag}
                onClick={() => onSearchChange(tag)}
                className="bg-neutral-900 border border-white/10 px-3 py-1.5 text-xs text-stone-300 hover:border-acid-green hover:text-acid-green transition-all"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* Right column: Instant search results */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-xs tracking-widest text-editorial-gray uppercase">
            ARCHIVE MATCHES ({filteredArticles.length})
          </h4>
          
          <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 hide-scrollbar">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="flex gap-4 p-3 border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/20 transition-all cursor-pointer items-center"
                >
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-16 h-16 object-cover bg-neutral-800"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1">
                    <div className="flex gap-2 items-center">
                      <span className="text-[10px] font-mono text-acid-green uppercase">{article.category}</span>
                      <span className="text-[10px] font-mono text-editorial-gray">{article.date}</span>
                    </div>
                    <h5 className="text-sm font-semibold text-white truncate font-hanken">
                      {article.title}
                    </h5>
                    <p className="text-xs text-editorial-gray truncate font-hanken">
                      {article.subtitle || article.content}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-editorial-gray text-xs font-mono">
                NO RESULTS FOUND FOR "{searchQuery}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
