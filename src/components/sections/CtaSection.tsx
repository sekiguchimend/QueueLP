import { ArrowRight, FileBox, MessageCircle, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const CtaSection = () => {
  return (
    <section className="py-24 bg-grain">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl px-6 py-16 md:p-16 overflow-hidden relative shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                業務効率化の第一歩を踏み出しましょう
              </h2>
              <p className="text-xl text-blue-100 mb-10 font-light leading-relaxed">
                導入企業の97%が業務効率の向上を実感。今すぐ無料デモをお試しいただけます。
              </p>
            </div>
            
            {/* Trial Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <TrialFeatureCard
                icon={<FileBox className="h-8 w-8 text-blue-300" />}
                title="資料アップロード"
                description="1つの資料のみアップロード可能"
              />
              <TrialFeatureCard
                icon={<MessageCircle className="h-8 w-8 text-blue-300" />}
                title="質問回数"
                description="最大5回まで質問可能"
              />
              <TrialFeatureCard
                icon={<Building className="h-8 w-8 text-blue-300" />}
                title="アカウント登録"
                description="会社名の入力が必須"
              />
            </div>
            
            <div className="text-center">
              <p className="text-blue-100 mb-8 italic">
                各アカウントごとにトライアル期間を設けており、無料で主要機能をお試しいただけます
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                  <Link to="/demo" className="flex items-center">
                    無料デモを体験
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
                <Button asChild variant="outline" size="lg" className="border-white text-white bg-blue-800/60 hover:bg-blue-700 hover:text-white backdrop-blur-sm transition-all duration-300 font-medium">
                  <Link to="/contact">お問い合わせ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrialFeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <Card className="bg-white/10 border-none backdrop-blur-sm rounded-xl overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CtaSection;
