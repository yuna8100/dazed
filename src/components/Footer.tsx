import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-20 px-6 text-center gap-6 bg-[#131313] border-t border-white/10 mt-16 pb-24 md:pb-20">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-bodoni text-white tracking-widest uppercase">
        DAZED KOREA
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 my-4">
        <a 
          href="#about" 
          onClick={(e) => { e.preventDefault(); alert("DAZED KOREA Replica Version 2026. Made with love for premium digital styling."); }}
          className="text-sm font-hanken text-editorial-gray hover:text-white underline underline-offset-4 transition-colors"
        >
          About
        </a>
        <a 
          href="#contact" 
          onClick={(e) => { e.preventDefault(); alert("Contact: info@dazedkorea.com / yuna041218@gmail.com"); }}
          className="text-sm font-hanken text-editorial-gray hover:text-white underline underline-offset-4 transition-colors"
        >
          Contact
        </a>
        <a 
          href="#privacy" 
          onClick={(e) => { e.preventDefault(); alert("We support fully offline tracking. Your bookmarks and generated covers are hosted locally."); }}
          className="text-sm font-hanken text-editorial-gray hover:text-white underline underline-offset-4 transition-colors"
        >
          Privacy Policy
        </a>
      </div>
      
      <p className="text-xs font-mono text-editorial-gray tracking-wider mt-2">
        © 2026 DAZED KOREA. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
