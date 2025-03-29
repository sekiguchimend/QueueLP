export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          category: string
          content: string
          created_at: string | null
          excerpt: string
          id: string
          is_published: boolean | null
          published_at: string | null
          slug: string
          title: string
          updated_at: string | null
          views: number | null
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          excerpt: string
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug: string
          title: string
          updated_at?: string | null
          views?: number | null
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          excerpt?: string
          id?: string
          is_published?: boolean | null
          published_at?: string | null
          slug?: string
          title?: string
          updated_at?: string | null
          views?: number | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      dashboard_statistics: {
        Row: {
          active_users: number
          created_at: string | null
          date: string
          id: string
          total_accounts: number
          total_inquiries: number
          updated_at: string | null
        }
        Insert: {
          active_users: number
          created_at?: string | null
          date: string
          id?: string
          total_accounts: number
          total_inquiries: number
          updated_at?: string | null
        }
        Update: {
          active_users?: number
          created_at?: string | null
          date?: string
          id?: string
          total_accounts?: number
          total_inquiries?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          cover_letter: string | null
          created_at: string | null
          email: string
          employment_type: string
          id: string
          name: string
          phone: string | null
          position: string
          resume_url: string | null
          status: string | null
        }
        Insert: {
          cover_letter?: string | null
          created_at?: string | null
          email: string
          employment_type: string
          id?: string
          name: string
          phone?: string | null
          position: string
          resume_url?: string | null
          status?: string | null
        }
        Update: {
          cover_letter?: string | null
          created_at?: string | null
          email?: string
          employment_type?: string
          id?: string
          name?: string
          phone?: string | null
          position?: string
          resume_url?: string | null
          status?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          email: string
          id: string
          role: string | null
        }
        Insert: {
          email: string
          id: string
          role?: string | null
        }
        Update: {
          email?: string
          id?: string
          role?: string | null
        }
        Relationships: []
      }
      document_requests: {
        Row: {
          id: string
          created_at: string | null
          email: string
          name: string
          phone: string
          position: string
          company: string
          status: string
        }
        Insert: {
          id?: string
          created_at?: string | null
          email: string
          name: string
          phone: string
          position: string
          company: string
          status?: string
        }
        Update: {
          id?: string
          created_at?: string | null
          email?: string
          name?: string
          phone?: string
          position?: string
          company?: string
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      monthly_statistics: {
        Row: {
          accounts_change_pct: number | null
          active_users: number | null
          active_users_change_pct: number | null
          inquiries_change_pct: number | null
          total_accounts: number | null
          total_inquiries: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
