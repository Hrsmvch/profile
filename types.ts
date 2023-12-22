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
 
export type TechStack = {
  stack_title: string;
  stack_tags: string[];
};

export type KeyFeatureItem = {
  title: string;
  description: string;  
};

export type KeyFeature = {
  preview: string;
  items: KeyFeatureItem[];  
};

export type TypographyInfo = {
  font_name: string;
  font_summary: string;
};

export type FutureEnhancement = {
  summary: string;
  items: KeyFeatureItem[];  
};

export type ProjectFrontendBase = {
  id: string;
  name: string;
  summary: string;
  slug: string;
  date: Date;
  published: boolean;
  liveDemo: string;
  urlSource: string;
  stack: {
    summary: string;
    tech_items: TechStack[];
  };
  keyFeatures: KeyFeature;
  topography: TypographyInfo;
  colors: string[]; // Adjust the type based on the actual content of colors
  icons: string[]; // Adjust the type based on the actual content of icons
  futureEnhancements: FutureEnhancement;
};


export type FormProps = {
  data: any; 
  categories: SelectProps[];
  handleType: (value: string) => void;
};

export type ProjectDesignBase = {
  id: string;
  name: string;
  summary: string;
  slug: string;
  date: Date;
  published: boolean;
  liveDemo: string;
  urlSource: string; 
  designProcess: {
    summary: string;
    items: string[];
  };
  topography: TypographyInfo;
  colors: string[];  
  icons: string[];
  showcase: {
    summary: string;
    items: string[];
  };

};

export type Project = ProjectFrontendBase | ProjectDesignBase;

export interface ProjectCategory {
  title: string;
  items: Project[];
}

export type ProjectWithCategory<T extends Project> = T & { category: string };

export type ProjectBase = ProjectWithCategory<Project>;