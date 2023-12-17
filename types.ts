// blogTypes.ts

import { Timestamp } from "firebase/firestore";

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: Date | Timestamp;
  slug: string;
}

export interface BlogCategory {
  title: string;
  items: Article[];
}

export interface BlogProps {
  // Add any props specific to your Blog component here
}

export interface FilterItemProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

export interface ArticleItemProps {
  article: Article;
}
