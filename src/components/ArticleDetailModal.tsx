import React, { useState } from 'react';
import { Article } from '../types';

interface ArticleDetailModalProps {
  article: Article;
  onClose: () => void;
  isBookmarked: boolean;
  onBookmarkToggle: () => void;
}

export default function ArticleDetailModal({
  article,
  onClose,
  isBookmarked,
  onBookmarkToggle,
}: ArticleDetailModalProps) {
  const [copied, setCopied] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<string[]>([
    '이번 화보 컨셉 진짜 전설적이다...',
    '역시 데이즈드 감성은 아무도 못 따라감.',
    '색감이랑 컷 구성이 대박이네요.'
  ]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([...comments, commentText.trim()]);
    setCommentText('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 animate-fade-in flex justify-end">
      {/* Background closer click area */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Main Panel */}
      <div className="relative w-full md:max-w-4xl bg-[#131313] min-h-screen text-white border-l border-white/20 shadow-2xl z-20 flex flex-col">
        {/* Detail Header */}
        <div className="sticky top-0 bg-[#131313]/90 backdrop-blur-md z-30 px-6 py-4 flex justify-between items-center border-b border-white/10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-mono text-editorial-gray hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined !text-[20px]">arrow_back</span>
            CLOSE
          </button>

          <div className="flex gap-4">
            <button
              onClick={onBookmarkToggle}
              className={`p-2 border transition-colors ${
                isBookmarked 
                  ? 'bg-acid-green text-black border-acid-green' 
                  : 'bg-black/40 text-white border-white/20 hover:text-acid-green'
              }`}
              title="Bookmark"
            >
              <span className="material-symbols-outlined !text-[18px]">
                {isBookmarked ? 'bookmark_added' : 'bookmark'}
              </span>
            </button>
            <button
              onClick={handleShare}
              className="p-2 bg-black/40 text-white border border-white/20 hover:text-acid-green transition-colors"
              title="Share Link"
            >
              <span className="material-symbols-outlined !text-[18px]">
                {copied ? 'done' : 'share'}
              </span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-10 hide-scrollbar pb-24">
          
          {/* Main Visual */}
          <div className="w-full relative group">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full object-cover max-h-[70vh] border border-white/10"
              referrerPolicy="no-referrer"
            />
            {article.credit && (
              <span className="absolute bottom-4 right-4 bg-black/80 font-mono text-[10px] tracking-widest px-3 py-1 text-acid-green">
                {article.credit}
              </span>
            )}
          </div>

          {/* Typography details */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-acid-green font-bold tracking-widest">{article.category}</span>
              <span className="text-editorial-gray">|</span>
              <span className="text-editorial-gray">{article.date}</span>
              <span className="text-editorial-gray">|</span>
              <span className="text-editorial-gray">BY {article.author.toUpperCase()}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-hanken tracking-tight capitalize text-white leading-tight">
              {article.title}
            </h1>
            
            {article.subtitle && (
              <p className="text-lg font-space-mono text-editorial-gray italic leading-relaxed">
                {article.subtitle}
              </p>
            )}
          </div>

          {/* Article Text Content */}
          <div className="border-t border-white/10 pt-8">
            <div className="text-base sm:text-lg leading-relaxed text-gray-200 font-hanken whitespace-pre-wrap space-y-4">
              {article.content}
            </div>
          </div>

          {/* Social Interactions Module (Comments) */}
          <div className="border-t border-white/10 pt-10 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-mono text-acid-green tracking-widest uppercase">
                READER RESPONSES ({comments.length})
              </h3>
              <span className="text-xs text-editorial-gray font-mono">DAZED COMMUNITY</span>
            </div>

            {/* Comment list */}
            <div className="space-y-3">
              {comments.map((cmt, idx) => (
                <div key={idx} className="bg-neutral-900 border border-white/5 p-4 flex flex-col gap-1">
                  <div className="flex justify-between items-center text-[10px] font-mono text-editorial-gray">
                    <span>ANONYMOUS READER</span>
                    <span>1 min ago</span>
                  </div>
                  <p className="text-sm text-gray-300 font-hanken">{cmt}</p>
                </div>
              ))}
            </div>

            {/* Response Form */}
            <form onSubmit={handleAddComment} className="flex flex-col gap-3">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="화보에 대한 감상을 남겨주세요..."
                rows={3}
                className="w-full bg-[#131313] border border-white/20 p-3 text-sm focus:outline-none focus:border-acid-green text-white resize-none"
              />
              <button
                type="submit"
                className="self-end bg-white text-black hover:bg-acid-green hover:text-black transition-colors px-6 py-2 text-xs font-mono font-bold tracking-widest"
              >
                POST RESPONSE
              </button>
            </form>
          </div>

        </div>

        {/* Copy confirmation notifier overlay */}
        {copied && (
          <div className="absolute top-16 right-6 bg-acid-green text-black px-4 py-2 font-mono text-xs font-bold tracking-wider animate-bounce z-40">
            ARTICLE LINK COPIED TO CLIPBOARD
          </div>
        )}

      </div>
    </div>
  );
}
