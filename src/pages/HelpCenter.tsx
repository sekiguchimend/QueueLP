import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Article } from "@/types/article";
import { Helmet } from "react-helmet-async";

const HelpCenter = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        // Direct Supabase query to fetch published articles
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false });

        if (error) {
          console.error("Error fetching articles:", error);
          return;
        }
        
        setArticles(data || []);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Get unique categories
  const categories = Array.from(new Set(articles.map(article => article.category)));

  // Group articles by category
  const articlesByCategory = categories.map(category => ({
    category,
    articles: articles.filter(article => article.category === category).slice(0, 3)
  }));

  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>ヘルプセンター | ワークメイトAI</title>
        <meta name="description" content="ワークメイトAIのヘルプセンターです。使い方やよくある質問をご確認いただけます。" />
      </Helmet>

      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              ワークメイトAI ヘルプセンター
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              お探しの情報はこちらでご確認いただけます
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">記事が見つかりませんでした</h2>
            <p className="text-gray-600">現在ヘルプセンターには記事がありません。</p>
          </div>
        ) : (
          <div className="space-y-12">
            {articlesByCategory.map(({ category, articles }) => (
              <div key={category}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{category}</h2>
                  <Link
                    to="/articles"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    すべて見る
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <Link
                      key={article.id}
                      to={`/articles/${article.slug}`}
                      className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 text-blue-600 font-medium hover:text-blue-800">
                          続きを読む
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* お問い合わせ先情報 */}
            <div className="mt-16 bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ先</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">電話でのお問い合わせ</h3>
                  <p className="text-gray-600">03-6687-0550</p>
                  <p className="text-sm text-gray-500">受付時間: 平日 9:00〜18:00</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">メールでのお問い合わせ</h3>
                  <a href="mailto:queue@queuefood.co.jp" className="text-blue-600 hover:text-blue-800">queue@queuefood.co.jp</a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">所在地</h3>
                  <p className="text-gray-600">〒104-0061</p>
                  <p className="text-gray-600">東京都中央区銀座一丁目22番11号</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
