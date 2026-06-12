import React, { useState, useEffect } from 'react';
import { Article } from './types';
import { INITIAL_ARTICLES } from './data';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import ArticleDetailModal from './components/ArticleDetailModal';
import SearchPanel from './components/SearchPanel';
import CreateArticleModal from './components/CreateArticleModal';
import SubscriptionModal from './components/SubscriptionModal';
import Footer from './components/Footer';

export default function App() {
  // Articles state with localStorage fallback for persistence
  const [articles, setArticles] = useState<Article[]>(() => {
    const saved = localStorage.getItem('dazed_articles_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_ARTICLES;
      }
    }
    return INITIAL_ARTICLES;
  });

  // Bookmarks state
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('dazed_bookmarks_v1');
    return saved ? JSON.parse(saved) : [];
  });

  // UI Navigation states
  const [currentCategory, setCurrentCategory] = useState<string>('ALL');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  
  // Custom interactive features
  const [bilingualMode, setBilingualMode] = useState(false);
  const [acidNeonTheme, setAcidNeonTheme] = useState(false);
  const [onlyShowBookmarks, setOnlyShowBookmarks] = useState(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('dazed_articles_v1', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('dazed_bookmarks_v1', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Handle article bookmarks toggling
  const handleBookmarkToggle = (e: React.MouseEvent | null, articleId: string) => {
    if (e) {
      e.stopPropagation(); // Avoid triggering article selection click
    }
    setBookmarks((prev) => {
      if (prev.includes(articleId)) {
        return prev.filter((id) => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };

  // Add custom published article from publisher form
  const handleSaveArticle = (newArticle: Article) => {
    setArticles((prev) => [newArticle, ...prev]);
    // Inform user of successful publication
    alert('새로운 오뜨꾸뛰르 화보 피드가 성공적으로 발행되었습니다.');
  };

  // Filter logic
  const filteredArticles = articles.filter((article) => {
    // 1. Filter by bookmarks if toggled
    if (onlyShowBookmarks && !bookmarks.includes(article.id)) {
      return false;
    }
    // 2. Filter by category selector
    if (currentCategory !== 'ALL' && article.category !== currentCategory) {
      return false;
    }
    // 3. Search query parsing
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      return (
        article.title.toLowerCase().includes(query) ||
        (article.subtitle && article.subtitle.toLowerCase().includes(query)) ||
        article.content.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }
    return true;
  });

  return (
    <div className={`min-h-screen bg-[#131313] text-white selection:bg-acid-green selection:text-black transition-colors duration-500 pb-20 ${
      acidNeonTheme ? 'brightness-110 contrast-125' : ''
    }`}>
      
      {/* Editorial scanning overlay line if active */}
      {acidNeonTheme && (
        <div className="fixed inset-0 pointer-events-none z-60 bg-[linear-gradient(rgba(1,255,35,0.03)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-75" />
      )}

      {/* Header component */}
      <Header
        onSearchClick={() => setIsSearchOpen(true)}
        onCreateClick={() => setIsCreateOpen(true)}
        onFilterChange={(cat) => {
          setCurrentCategory(cat);
          setOnlyShowBookmarks(false);
        }}
        currentCategory={currentCategory}
      />

      {/* Interactive Quick Stats bar matching the premium editorial design guidelines */}
      <div className="pt-20 px-4 md:px-8 max-w-[1440px] mx-auto flex flex-wrap justify-between items-center text-[10px] font-mono border-b border-white/10 pb-3 gap-2 text-editorial-gray">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-acid-green animate-ping" />
            LIVE ARCHIVE
          </span>
          <span>VOLUME 218</span>
          <span>CURATED FEEDS: {articles.length}</span>
        </div>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => setBilingualMode(!bilingualMode)} 
            className={`transition-colors hover:text-white uppercase flex items-center gap-1 ${
              bilingualMode ? 'text-acid-green font-bold' : ''
            }`}
          >
            <span className="material-symbols-outlined !text-[12px]">translate</span>
            {bilingualMode ? 'BILINGUAL: ON' : 'ENGLISH DUAL'}
          </button>
          <span>UTC {new Date().toISOString().slice(11, 16)}</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-[1440px] mx-auto pt-6 md:px-8 select-none">
        
        {/* If Bookmarks Toggled Title header */}
        {onlyShowBookmarks && (
          <div className="px-4 mb-4">
            <h2 className="text-xl font-mono text-acid-green tracking-wider uppercase flex items-center gap-2">
              <span className="material-symbols-outlined">bookmarks</span>
              MEMBERS BOOKMARKS CHANNEL
            </h2>
            <p className="text-xxs text-editorial-gray">Showing saved fashion issues and cover stories</p>
          </div>
        )}

        {/* Categories Pills Quick Filter list */}
        <section className="px-4 mb-8 flex gap-2 overflow-x-auto hide-scrollbar py-2">
          {['ALL', 'FASHION', 'BEAUTY', 'CULTURE', 'ART', 'MUSIC'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCurrentCategory(cat);
                setOnlyShowBookmarks(false);
              }}
              className={`text-xs font-mono tracking-widest px-4 py-1.5 transition-all rounded-none ${
                currentCategory === cat && !onlyShowBookmarks
                  ? 'bg-white text-black font-bold border border-white'
                  : 'bg-transparent text-white border border-white/20 hover:border-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Cover Story / Featured Cover card (Jennie) */}
        {filteredArticles.length > 0 && !onlyShowBookmarks && currentCategory === 'ALL' && (
          <div className="animate-fade-in">
            {/* Find and render cover article */}
            {articles.filter(a => a.featured).map((coverArticle) => (
              <ArticleCard
                key={coverArticle.id}
                article={coverArticle}
                onSelect={setSelectedArticle}
                isBookmarked={bookmarks.includes(coverArticle.id)}
                onBookmarkToggle={handleBookmarkToggle}
              />
            ))}
          </div>
        )}

        {/* Editorial Feed Grid (Responsive & asymmetric styling) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 mt-8">
          {filteredArticles
            .filter((a) => !a.featured || onlyShowBookmarks || currentCategory !== 'ALL')
            .map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                onSelect={setSelectedArticle}
                isBookmarked={bookmarks.includes(article.id)}
                onBookmarkToggle={handleBookmarkToggle}
              />
            ))}
        </section>

        {filteredArticles.length === 0 && (
          <div className="py-24 text-center space-y-4">
            <span className="material-symbols-outlined !text-[48px] text-editorial-gray">folder_off</span>
            <p className="text-sm font-mono text-editorial-gray uppercase">NO ARCHIVE STORIES AVAILABLE</p>
            <button
              onClick={() => {
                setCurrentCategory('ALL');
                setOnlyShowBookmarks(false);
                setSearchQuery('');
              }}
              className="px-6 py-2 border border-white/20 hover:border-white text-xs font-mono tracking-widest"
            >
              RESET CHANNEL FILTER
            </button>
          </div>
        )}

        {/* High-contrast Marquee Section / Interactive Banner exact screenshot replica */}
        <section className="w-full my-12 px-4 md:px-0">
          <button 
            onClick={() => {
              setIsSubscriptionOpen(true);
            }}
            className="block w-full bg-acid-green flex items-center justify-center transition-transform active:scale-[0.98] group py-4 hover:opacity-90 rounded-none cursor-pointer"
          >
            <span className="text-black font-hanken font-bold tracking-tighter uppercase text-xl sm:text-2xl md:text-3xl flex items-center gap-3">
              DAZEDPLUS
              <span className="material-symbols-outlined !text-[24px] sm:!text-[28px] text-neutral-800">
                mail_lock
              </span>
            </span>
          </button>
          <p className="text-[10px] font-mono text-center text-editorial-gray mt-2 uppercase tracking-widest">
            CLICK TO JOIN DAZED KOREA PREMIUM MEMBERSHIP / 가입 화면으로 이동하기
          </p>
        </section>

      </main>

      {/* Footer component */}
      <Footer />

      {/* Permanent Dock-Style Bottom Navigation for Mobile Devices */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-16 bg-[#131313] border-t border-white/20 md:hidden px-4">
        <button
          onClick={() => {
            setCurrentCategory('ALL');
            setOnlyShowBookmarks(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Home"
          className={`flex flex-col items-center justify-center w-full h-full transition-all ${
            currentCategory === 'ALL' && !onlyShowBookmarks ? 'text-acid-green' : 'text-white'
          }`}
        >
          <span className="material-symbols-outlined !text-[24px]">home</span>
          <span className="text-[8px] font-mono mt-0.5 tracking-tighter">FEEDS</span>
        </button>

        <button
          onClick={() => {
            setBilingualMode(!bilingualMode);
            alert(bilingualMode ? 'Dual English descriptions disabled' : 'Dual English descriptions enabled where available');
          }}
          aria-label="Language"
          className={`flex flex-col items-center justify-center w-full h-full transition-all ${
            bilingualMode ? 'text-acid-green' : 'text-white'
          }`}
        >
          <span className="material-symbols-outlined !text-[24px]">language</span>
          <span className="text-[8px] font-mono mt-0.5 tracking-tighter">GLOBAL</span>
        </button>

        <button
          onClick={() => setIsCreateOpen(true)}
          aria-label="Submit Cover"
          className="flex flex-col items-center justify-center w-full h-full text-white hover:text-acid-green"
        >
          <span className="material-symbols-outlined !text-[24px]">person_add</span>
          <span className="text-[8px] font-mono mt-0.5 tracking-tighter">SUBMIT</span>
        </button>

        <button
          onClick={() => {
            setOnlyShowBookmarks(!onlyShowBookmarks);
            setCurrentCategory('ALL');
          }}
          aria-label="Bookmarks"
          className={`flex flex-col items-center justify-center w-full h-full transition-all ${
            onlyShowBookmarks ? 'text-acid-green' : 'text-white'
          }`}
        >
          <span className="material-symbols-outlined !text-[24px]">
            {onlyShowBookmarks ? 'bookmark_added' : 'bookmark'}
          </span>
          <span className="text-[8px] font-mono mt-0.5 tracking-tighter">SAVED</span>
        </button>
      </nav>

      {/* Modal overlays */}
      {selectedArticle && (
        <ArticleDetailModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          isBookmarked={bookmarks.includes(selectedArticle.id)}
          onBookmarkToggle={() => handleBookmarkToggle(null, selectedArticle.id)}
        />
      )}

      {isSearchOpen && (
        <SearchPanel
          onClose={() => setIsSearchOpen(false)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filteredArticles={filteredArticles}
          onSelectArticle={setSelectedArticle}
        />
      )}

      {isCreateOpen && (
        <CreateArticleModal
          onClose={() => setIsCreateOpen(false)}
          onSave={handleSaveArticle}
        />
      )}

      {isSubscriptionOpen && (
        <SubscriptionModal
          onClose={() => setIsSubscriptionOpen(false)}
        />
      )}

    </div>
  );
}
