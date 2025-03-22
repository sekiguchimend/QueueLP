
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArticleFormData } from "@/types/article";
import { createArticle, getArticleById, updateArticle } from "@/data/articleService";

export const formSchema = z.object({
  title: z.string().min(5, {
    message: "タイトルは5文字以上で入力してください。",
  }),
  slug: z.string().min(3, {
    message: "スラッグは3文字以上で入力してください。",
  }).regex(/^[a-z0-9-]+$/, {
    message: "スラッグは半角英数字とハイフンのみ使用できます。",
  }),
  excerpt: z.string().min(10, {
    message: "抜粋は10文字以上で入力してください。",
  }).max(200, {
    message: "抜粋は200文字以内で入力してください。",
  }),
  content: z.string().min(50, {
    message: "本文は50文字以上で入力してください。",
  }),
  category: z.string().min(1, {
    message: "カテゴリを選択してください。",
  }),
  isPublished: z.boolean().default(false),
});

export type ArticleFormValues = z.infer<typeof formSchema>;

const convertToHtml = (text: string): string => {
  if (!text) return '';
  
  return text
    .split(/\n\s*\n/)
    .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br />')}</p>`)
    .join('\n');
};

export const useArticleForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(isEditing);
  
  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      isPublished: false,
    },
  });

  useEffect(() => {
    const loadArticle = async () => {
      if (isEditing && id) {
        setInitialLoading(true);
        try {
          const article = await getArticleById(id);
          if (article) {
            const plainContent = article.content
              .replace(/<p>/g, '')
              .replace(/<\/p>/g, '\n\n')
              .replace(/<br \/>/g, '\n')
              .trim();
              
            form.reset({
              title: article.title,
              slug: article.slug,
              excerpt: article.excerpt,
              content: plainContent,
              category: article.category,
              isPublished: article.is_published,
            });
          } else {
            toast.error("記事が見つかりませんでした");
            navigate("/admin/articles");
          }
        } catch (error) {
          console.error("Failed to load article:", error);
          toast.error("記事の読み込みに失敗しました");
          navigate("/admin/articles");
        } finally {
          setInitialLoading(false);
        }
      } else {
        setInitialLoading(false);
      }
    };

    loadArticle();
  }, [id, isEditing, navigate, form]);

  const onSubmit = async (data: ArticleFormValues) => {
    console.log("Form submitted with values:", data);
    setLoading(true);
    
    try {
      const htmlContent = convertToHtml(data.content);
      const formattedData: ArticleFormData = {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: htmlContent,
        category: data.category,
        is_published: data.isPublished
      };
      
      if (isEditing && id) {
        const updated = await updateArticle(id, formattedData);
        if (updated) {
          toast.success("記事を更新しました");
          navigate("/admin/articles");
        }
      } else {
        const created = await createArticle(formattedData);
        if (created) {
          toast.success("記事を作成しました");
          navigate("/admin/articles");
        }
      }
    } catch (error) {
      console.error("Error submitting article:", error);
      toast.error("エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = () => {
    const title = form.getValues("title");
    if (!title) {
      toast.error("タイトルを入力してください");
      return;
    }
    
    const slug = title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
    
    form.setValue("slug", slug);
    toast.success("スラッグを生成しました");
  };

  return {
    form,
    isEditing,
    loading,
    initialLoading,
    onSubmit,
    generateSlug
  };
};
