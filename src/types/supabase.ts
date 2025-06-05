export interface SupabaseArticle {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  author?: string;
  created_at: string | null;
  updated_at: string | null;
  is_published: boolean | null;
  published_at?: string | null;
  views: number | null;
  tags?: string[];
  thumbnail_url?: string;
}

export type DocumentRequest = {
  id: string;
  email: string;
  name: string;
  phone: string;
  position: string;
  company: string;
  status: 'pending' | 'sent' | 'failed';
  created_at: string;
}

export type Database = {
  public: {
    Tables: {
      document_requests: {
        Row: DocumentRequest;
        Insert: Omit<DocumentRequest, 'id' | 'created_at'>;
        Update: Partial<Omit<DocumentRequest, 'id' | 'created_at'>>;
      };
      // ... 他のテーブル定義
    };
  };
}; 