import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
              社内向けAIアシスタント
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              業務効率を飛躍的に
              <span className="block mt-2">高める</span>
              <span className="text-primary block mt-2">AIチャットボット</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              社内情報へのアクセスを迅速化し、日々の業務フローをスマートにする次世代の社内コミュニケーションツール
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/demo">
                  無料デモを体験
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-gray-300">
                <Link to="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center lg:justify-end">
            <div className="w-full max-w-lg relative">
              {/* Background decorative elements */}
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-50 animate-float"></div>
              <div className="absolute -right-5 -bottom-5 w-28 h-28 bg-blue-100 rounded-full opacity-70 animate-subtle-bounce"></div>
              
              {/* Main illustration */}
              <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-primary text-white p-4 flex items-center">
                  <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="ml-2 text-sm font-medium">社内チャットボット</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-col space-y-6">
                    <div className="self-start max-w-[80%] bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-gray-800">今月の営業レポートを教えてください</p>
                    </div>
                    <div className="self-end max-w-[80%] bg-blue-50 text-blue-800 rounded-2xl rounded-br-sm p-4">
                      <p>6月の営業実績は目標の112%を達成しました。特に新規顧客獲得が前月比24%増加しています。詳細レポートをお送りしますか？</p>
                    </div>
                    <div className="self-start max-w-[80%] bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-gray-800">はい、お願いします。また、来月のイベント情報も教えてください</p>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                      <div className="w-6 h-1 bg-blue-200 rounded-full animate-pulse"></div>
                      <div className="w-6 h-1 bg-blue-300 rounded-full animate-pulse delay-75"></div>
                      <div className="w-6 h-1 bg-blue-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
