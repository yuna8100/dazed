import React, { useState } from 'react';

interface HeaderProps {
  onSearchClick: () => void;
  onCreateClick: () => void;
  onFilterChange: (category: string) => void;
  currentCategory: string;
}

export default function Header({
  onSearchClick,
  onCreateClick,
  onFilterChange,
  currentCategory,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['ALL', 'FASHION', 'BEAUTY', 'CULTURE', 'ART', 'MUSIC'];

  const handleMenuClick = (item: string) => {
    onFilterChange(item);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 bg-[#131313] border-b border-white/20 h-16">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          className="text-white hover:text-acid-green transition-colors focus:outline-none"
        >
          <span className="material-symbols-outlined !text-[28px] md:!text-[32px]">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <h1 
          className="text-[20px] md:text-[32px] tracking-widest uppercase text-white font-bold font-bodoni text-center font-display-xl cursor-pointer"
          onClick={() => handleMenuClick('ALL')}
        >
          DAZED KOREA
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={onCreateClick}
            aria-label="Create Article"
            className="text-white hover:text-acid-green transition-colors hidden sm:flex items-center gap-1 text-xs font-mono border border-white/30 px-3 py-1 rounded-none hover:border-acid-green"
          >
            <span className="material-symbols-outlined !text-[16px]">edit</span>
            CREATE
          </button>
          
          <button
            onClick={onSearchClick}
            aria-label="Search"
            className="text-white hover:text-acid-green transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined !text-[28px] md:!text-[32px]">search</span>
          </button>
        </div>
      </header>

      {/* Full screen menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-black z-40 flex flex-col justify-between p-8 animate-fade-in md:px-20 py-16">
          <div className="flex flex-col gap-6 md:gap-8 mt-4">
            <p className="text-acid-green font-mono text-xs tracking-widest uppercase">CATEGORIES</p>
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMenuClick(item)}
                  className={`text-left text-4xl md:text-6xl font-bold font-bodoni uppercase tracking-tight transition-colors hover:text-acid-green ${
                    currentCategory === item ? 'text-acid-green' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between text-editorial-gray text-xs font-mono gap-4">
              <div>
                <p>DAZED KOREA DIGITAL FEEDS EDITION</p>
                <p>VOL. 218 — 2026</p>
              </div>
              <div className="flex gap-6">
                <button onClick={onCreateClick} className="hover:text-white uppercase transition-colors">
                  Submit Editorial
                </button>
                <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
                <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
