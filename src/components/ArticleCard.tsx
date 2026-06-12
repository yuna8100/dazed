import React from 'react';
import { Article } from '../types';

interface ArticleCardProps {
  key?: string;
  article: Article;
  onSelect: (article: Article) => void;
  isBookmarked: boolean;
  onBookmarkToggle: (e: React.MouseEvent | null, id: string) => void;
}

export default function ArticleCard({
  article,
  onSelect,
  isBookmarked,
  onBookmarkToggle,
}: ArticleCardProps) {
  const { id, category, title, englishTitle, subtitle, imageUrl, featured, isPortrait, isWide, credit } = article;

  // Let's implement specific styling structures to perfectly match specified ones in the image!
  if (featured) {
    return (
      <section 
        className="w-full relative mb-16 cursor-pointer group"
        onClick={() => onSelect(article)}
      >
        <div className="w-full relative block overflow-hidden bg-black/40">
          <img 
            alt={title} 
            className="w-full object-top object-contain max-h-[85vh] transition-transform duration-700 ease-out group-hover:scale-102"
            src={imageUrl}
            referrerPolicy="no-referrer"
          />
          {/* Subtle Bookmark Button */}
          <button
            onClick={(e) => onBookmarkToggle(e, id)}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 border border-white/20 transition-colors z-20"
            aria-label="Bookmark"
          >
            <span className="material-symbols-outlined !text-[20px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>
        <div className="px-4 py-8 text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-hanken tracking-tight mb-2 text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-editorial-gray tracking-widest max-w-2xl uppercase">
            {subtitle}
          </p>
        </div>
      </section>
    );
  }

  // Article 2 styling (Jeongyeon - Alone, Not Lonely)
  if (id === '3') {
    return (
      <article 
        className="w-full relative flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer items-start mb-16 px-4 md:px-0"
        onClick={() => onSelect(article)}
      >
        <div className="w-full md:w-2/3 aspect-[1.5] overflow-hidden bg-neutral-900 relative">
          <img 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
            src={imageUrl}
            referrerPolicy="no-referrer"
          />
          <button
            onClick={(e) => onBookmarkToggle(e, id)}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 border border-white/20 z-10"
          >
            <span className="material-symbols-outlined !text-[20px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>
        <div className="w-full md:w-1/3 flex flex-col gap-2 md:pt-4">
          <span className="text-xs font-mono text-acid-green tracking-widest uppercase font-bold">{category}</span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-acid-green transition-colors font-hanken">
            {title}
          </h3>
          <p className="text-sm text-editorial-gray leading-relaxed mt-2">
            {subtitle}
          </p>
        </div>
      </article>
    );
  }

  // Article 3 styling (Chaeyoung - Portrait with offset overlapping outline box)
  if (isPortrait) {
    return (
      <article 
        className="w-full relative flex flex-col group cursor-pointer mb-20 px-4 md:px-0"
        onClick={() => onSelect(article)}
      >
        <div className="w-[85%] md:w-[65%] ml-auto aspect-[0.86] md:aspect-[0.8] overflow-hidden border border-white/10 bg-neutral-900 relative">
          <img 
            alt={title} 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-103" 
            src={imageUrl}
            referrerPolicy="no-referrer"
          />
          <button
            onClick={(e) => onBookmarkToggle(e, id)}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 border border-white/20 z-20"
          >
            <span className="material-symbols-outlined !text-[20px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>
        
        {/* Overlapping text box exactly matching the image */}
        <div className="mr-auto w-[85%] md:w-[60%] bg-black/90 p-6 md:p-8 -mt-16 sm:-mt-24 md:-mt-32 relative z-10 border border-white/25 flex flex-col gap-2">
          <span className="text-xs font-mono text-acid-green tracking-widest uppercase font-bold">{category}</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-acid-green transition-colors font-hanken">
            {title}
          </h3>
          <p className="text-sm text-editorial-gray leading-relaxed mt-2">
            {subtitle}
          </p>
        </div>
      </article>
    );
  }

  // Article 5 / Lim Ji-yeon: Offset asymmetrical with right text alignment option
  if (id === '6') {
    return (
      <article 
        className="w-full relative flex flex-col md:flex-row-reverse gap-6 md:gap-12 group cursor-pointer items-end mb-16 px-4 md:px-0"
        onClick={() => onSelect(article)}
      >
        <div className="w-full md:w-3/5 aspect-[1.5] overflow-hidden bg-neutral-900 relative">
          <img 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
            src={imageUrl}
            referrerPolicy="no-referrer"
          />
          <button
            onClick={(e) => onBookmarkToggle(e, id)}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 border border-white/20 z-10"
          >
            <span className="material-symbols-outlined !text-[20px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>
        <div className="w-full md:w-2/5 flex flex-col gap-2 md:pb-4 text-left md:text-right">
          <span className="text-xs font-mono text-acid-green tracking-widest uppercase font-bold">{category}</span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-acid-green transition-colors font-hanken">
            {title}
          </h3>
          {credit && (
            <p className="text-xs sm:text-sm font-mono text-editorial-gray tracking-wider mt-2 uppercase">
              {credit}
            </p>
          )}
        </div>
      </article>
    );
  }

  // Article 6 / Delvaux: Large Poster Style with overlaid metadata (as requested)
  if (id === '7') {
    return (
      <article 
        className="w-full relative flex flex-col group cursor-pointer mb-16 px-4 md:px-0"
        onClick={() => onSelect(article)}
      >
        <div className="w-full aspect-[1.3] md:aspect-[1.6] overflow-hidden relative border border-white/10 bg-neutral-900">
          <img 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal" 
            src={imageUrl}
            referrerPolicy="no-referrer"
          />
          
          {/* Real overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 opacity-90"></div>
          
          <button
            onClick={(e) => onBookmarkToggle(e, id)}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 border border-white/20 z-20"
          >
            <span className="material-symbols-outlined !text-[20px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>

          <div className="absolute bottom-0 left-0 p-6 md:p-10 flex flex-col gap-2 w-full z-15">
            <span className="text-xs font-mono text-acid-green tracking-widest uppercase font-bold">{category}</span>
            <h3 className="text-lg sm:text-xl md:text-2xl md:max-w-4xl font-bold text-white group-hover:text-acid-green transition-colors font-hanken leading-snug">
              {title}
            </h3>
            {credit && (
              <p className="text-xs sm:text-sm font-mono text-editorial-gray tracking-wider mt-1 uppercase">
                {credit}
              </p>
            )}
          </div>
        </div>
      </article>
    );
  }

  // Article 1 / Krystal: Colorful Title Layout strictly mimicking original 제주 컬렉션
  if (id === '2') {
    return (
      <article 
        className="w-full relative flex flex-col group cursor-pointer mb-16 px-4 md:px-0"
        onClick={() => onSelect(article)}
      >
        <div className="w-full aspect-[1.5] md:aspect-[1.78] overflow-hidden bg-neutral-900 relative">
          <img 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103" 
            src={imageUrl}
            referrerPolicy="no-referrer"
          />
          <button
            onClick={(e) => onBookmarkToggle(e, id)}
            className="absolute top-4 right-4 bg-black/60 text-white p-2 border border-white/20 z-10"
          >
            <span className="material-symbols-outlined !text-[20px]">
              {isBookmarked ? 'bookmark_added' : 'bookmark'}
            </span>
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          {/* Strictly mimic the acid green split typography shown in Image 1.png */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-hanken text-acid-green leading-snug tracking-tight">
            어떻게 잊겠어.<br />
            랄프 로렌 컬렉션을 입은<br />
            크리스탈과 함께한 제주
          </h3>
          {credit && (
            <p className="text-xs sm:text-sm font-mono text-editorial-gray mt-2 tracking-wider">
              {credit}
            </p>
          )}
        </div>
      </article>
    );
  }

  // Standard Default Article (e.g. Article 4/Han So-hee or any user-created custom cards)
  return (
    <article 
      className="w-full relative flex flex-col group cursor-pointer mb-16 px-4 md:px-0"
      onClick={() => onSelect(article)}
    >
      <div className="w-full aspect-[1.5] md:aspect-[1.78] overflow-hidden bg-neutral-900 relative">
        <img 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
          src={imageUrl}
          referrerPolicy="no-referrer"
        />
        <button
          onClick={(e) => onBookmarkToggle(e, id)}
          className="absolute top-4 right-4 bg-black/60 text-white p-2 border border-white/20 z-10"
        >
          <span className="material-symbols-outlined !text-[20px]">
            {isBookmarked ? 'bookmark_added' : 'bookmark'}
          </span>
        </button>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <span className="text-xs font-mono text-acid-green tracking-widest uppercase font-bold">{category}</span>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-acid-green transition-colors font-hanken">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-editorial-gray leading-relaxed mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </article>
  );
}
