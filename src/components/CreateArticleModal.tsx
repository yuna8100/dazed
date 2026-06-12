import React, { useState } from 'react';
import { Article } from '../types';

interface CreateArticleModalProps {
  onClose: () => void;
  onSave: (article: Article) => void;
}

export default function CreateArticleModal({
  onClose,
  onSave,
}: CreateArticleModalProps) {
  const [category, setCategory] = useState<'FASHION' | 'BEAUTY' | 'CULTURE' | 'ART' | 'MUSIC'>('FASHION');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [credit, setCredit] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  // Preset images to choose from if they don't have a URL handy
  const presetPhotos = [
    {
      name: 'Avant-garde Portrait',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Cyber Haute Couture',
      url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Minimal Editorial',
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('제목과 본문은 필수 입력값입니다.');
      return;
    }

    const finalImage = imageUrl.trim() || presetPhotos[0].url;

    const newArticle: Article = {
      id: `custom-${Date.now()}`,
      category,
      title: title.trim(),
      subtitle: subtitle.trim() || undefined,
      imageUrl: finalImage,
      content: content.trim(),
      author: author.trim() || 'Guest Editor',
      date: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).replace(/\s/g, '').slice(0, -1),
      credit: credit.trim() || undefined,
    };

    onSave(newArticle);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-55 overflow-y-auto animate-fade-in flex justify-center items-center p-4">
      <div className="relative w-full max-w-2xl bg-[#131313] border border-white/20 text-white p-6 md:p-10 shadow-2xl flex flex-col justify-between">
        
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-white/20 pb-4 mb-6">
          <div>
            <h3 className="text-xl font-bold tracking-widest font-bodoni text-acid-green uppercase">CREATE NEW COVER FEEDS</h3>
            <p className="text-xxs font-mono text-editorial-gray">SUBMIT CUSTOM AVANT-GARDE EDITORIAL</p>
          </div>
          <button
            onClick={onClose}
            className="text-editorial-gray hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Category SELECT & AUTHOR */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xxs font-mono text-editorial-gray tracking-widest uppercase mb-1">
                EDITORIAL CATEGORY
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-neutral-900 border border-white/20 px-3 py-2 text-sm text-white focus:outline-none focus:border-acid-green rounded-none"
              >
                <option value="FASHION">FASHION</option>
                <option value="BEAUTY">BEAUTY</option>
                <option value="CULTURE">CULTURE</option>
                <option value="ART">ART</option>
                <option value="MUSIC">MUSIC</option>
              </select>
            </div>
            <div>
              <label className="block text-xxs font-mono text-editorial-gray tracking-widest uppercase mb-1">
                AUTHOR / PHOTOGRAPHER
              </label>
              <input
                type="text"
                placeholder="e.g. Guest Editor Park"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-neutral-900 border border-white/20 px-3 py-2 text-sm text-white focus:outline-none focus:border-acid-green rounded-none placeholder-white/20"
              />
            </div>
          </div>

          {/* EDITORIAL TITLE */}
          <div>
            <label className="block text-xxs font-mono text-editorial-gray tracking-widest uppercase mb-1">
              EDITORIAL MAIN TITLE (KOREAN / ENGLISH) *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 눈부신 태양과 파도 아래 선 그가 그리다"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-neutral-900 border border-white/20 px-3 py-2 text-sm text-white focus:outline-none focus:border-acid-green rounded-none placeholder-white/20 font-hanken"
            />
          </div>

          {/* SECONDARY SUBTITLE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xxs font-mono text-editorial-gray tracking-widest uppercase mb-1">
                SECONDARY SUBTITLE (OR TRANSLATION)
              </label>
              <input
                type="text"
                placeholder="e.g. The radiant summer breeze of Jeju"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full bg-neutral-900 border border-white/20 px-3 py-2 text-sm text-white focus:outline-none focus:border-acid-green rounded-none placeholder-white/20 font-hanken"
              />
            </div>
            <div>
              <label className="block text-xxs font-mono text-editorial-gray tracking-widest uppercase mb-1">
                BOTTOM CREDIT TAG
              </label>
              <input
                type="text"
                placeholder="e.g. FOREVER WITH YOU"
                value={credit}
                onChange={(e) => setCredit(e.target.value)}
                className="w-full bg-neutral-900 border border-white/20 px-3 py-2 text-sm text-white focus:outline-none focus:border-acid-green rounded-none placeholder-white/20 font-hanken uppercase"
              />
            </div>
          </div>

          {/* IMAGE SELECTOR */}
          <div>
            <label className="block text-xxs font-mono text-editorial-gray tracking-widest uppercase mb-1">
              VISUAL IMAGE URL OR PRESETS
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-neutral-900 border border-white/20 px-3 py-2 text-xs text-white focus:outline-none focus:border-acid-green rounded-none placeholder-white/20 font-mono mb-2"
            />
            
            <div className="flex gap-2 items-center mt-1">
              <span className="text-[10px] font-mono text-editorial-gray uppercase">PRESETS:</span>
              <div className="flex gap-2">
                {presetPhotos.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setImageUrl(preset.url)}
                    className={`text-[10px] font-mono border px-2 py-0.5 rounded-none transition-all ${
                      imageUrl === preset.url 
                        ? 'bg-acid-green text-black border-acid-green font-bold' 
                        : 'border-white/10 text-white hover:border-white/40'
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FULL STORY */}
          <div>
            <label className="block text-xxs font-mono text-editorial-gray tracking-widest uppercase mb-1">
              FULL EDITORIAL STORY *
            </label>
            <textarea
              required
              rows={4}
              placeholder="이 화보에 걸맞는 스토리 텍스트를 적어주세요..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-neutral-900 border border-white/20 p-3 text-sm text-white focus:outline-none focus:border-acid-green rounded-none placeholder-white/20 resize-none font-hanken"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
            <button
              onClick={onClose}
              type="button"
              className="border border-white/20 text-white hover:text-red-400 hover:border-red-400 transition-colors px-6 py-2 text-xs font-mono"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="bg-acid-green text-black hover:bg-white transition-colors px-8 py-2 text-xs font-mono font-bold tracking-widest"
            >
              PUBLISH FEEDS
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
