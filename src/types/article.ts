
export interface Article {
  id: string;
  title: string;
  content: string;
  category: string;
  views: number;
  slug: string;
  published_at: string;
  excerpt: string;
  is_published: boolean;
  created_at?: string;
  updated_at?: string;
}

export type ArticleFormData = {
  title: string;
  content: string;
  category: string;
  slug: string;
  excerpt: string;
  is_published: boolean;
  published_at?: string;
};
