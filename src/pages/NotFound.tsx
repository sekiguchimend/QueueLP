import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { HomeIcon } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  // ページタイトルを設定
  useEffect(() => {
    document.title = "ページが見つかりません | ワークメイトAI";
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>ページが見つかりません | ワークメイトAI</title>
        <meta name="description" content="お探しのページは見つかりませんでした。ワークメイトAIのホームページに戻り、業務効率化AIチャットボットについての情報をご確認ください。" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.workmate-ai.jp/" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center max-w-lg">
          <div className="text-9xl font-bold text-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">ページが見つかりません</h1>
          <p className="text-gray-600 mb-8">
            お探しのページは移動したか削除された可能性があります。
            URLが正しく入力されているか確認してください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate(-1)} 
              variant="outline"
              className="flex items-center gap-2"
            >
              前のページに戻る
            </Button>
            <Button 
              asChild
              className="flex items-center gap-2"
            >
              <Link to="/">
                <HomeIcon className="h-4 w-4" />
                ホームに戻る
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
