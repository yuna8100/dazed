export interface Article {
  id: string;
  category: 'FASHION' | 'BEAUTY' | 'CULTURE' | 'ART' | 'MUSIC';
  title: string;
  englishTitle?: string;
  subtitle?: string;
  englishSubtitle?: string;
  imageUrl: string;
  content: string;
  date: string;
  author: string;
  featured?: boolean;
  isPortrait?: boolean;
  isWide?: boolean;
  credit?: string;
}

export interface Bookmark {
  articleId: string;
}

export type ActiveTab = 'home' | 'discover' | 'bookmarks' | 'profile';
