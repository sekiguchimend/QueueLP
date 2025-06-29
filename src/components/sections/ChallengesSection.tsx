
import { 
  Clock, 
  Search, 
  PieChart, 
  Users, 
  FileQuestion, 
  ServerCrash 
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ChallengesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-amber-50 px-4 py-2 rounded-full text-amber-700 font-medium text-sm mb-6">
            こんな課題はありませんか？
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            多くの企業が直面する<br />業務効率化の課題
          </h2>
          <p className="text-xl text-gray-600">
            ワークメイトAIは、これらの一般的な課題を解決し、業務効率を大幅に向上させます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ChallengeCard 
            icon={<Clock />}
            title="「有給申請の方法は？」毎回聞かれる"
            description="新入社員や忘れがちな社員から、同じ基本的な質問を何度も受け、その都度説明に時間を取られている。"
            delay="0"
          />
          <ChallengeCard 
            icon={<Search />}
            title="文書が散らばって見つからない"
            description="就業規則、マニュアル、議事録などが様々な場所に保存され、必要な情報をすぐに見つけることができない。"
            delay="100"
          />
          <ChallengeCard 
            icon={<PieChart />}
            title="同じ質問への繰り返し回答"
            description="「研修資料はどこ？」「会議室の予約方法は？」など、毎回同じ説明をすることで貴重な時間が失われている。"
            delay="200"
          />
          <ChallengeCard 
            icon={<Users />}
            title="新入社員のサポート負担"
            description="新入社員研修や基本的な質問対応で、既存社員の本来の業務時間が圧迫されている。"
            delay="300"
          />
          <ChallengeCard 
            icon={<FileQuestion />}
            title="情報の信頼性が不明確"
            description="口頭での説明や古い資料を参考にしてしまい、最新の正確な情報かどうかがわからない。"
            delay="400"
          />
          <ChallengeCard 
            icon={<ServerCrash />}
            title="夜間・休日の情報アクセス困難"
            description="担当者が不在の時間帯に急ぎの確認が必要になっても、必要な情報にアクセスできない。"
            delay="500"
          />
        </div>
      </div>
    </section>
  );
};

const ChallengeCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: string;
}) => {
  return (
    <Card 
      className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="pb-2 pt-6">
        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ChallengesSection;
