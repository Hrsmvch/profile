// blogTypes.ts

import { Timestamp } from "firebase/firestore";

export type ArticleBase = {
  id: string;
  title: string;
  summary: string;
  content: string;
  slug: string;
  date: Date;
  published: boolean;
};

export type ArticleWithCategory<T extends ArticleBase> = T & { category: string };

export type Article = ArticleWithCategory<ArticleBase>;

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

export interface SelectProps {
  label: string;
  value: string;
}