
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
            title="情報検索に時間がかかる"
            description="必要な情報を見つけるために、複数のシステムやフォルダを検索する時間が無駄になっている。"
            delay="0"
          />
          <ChallengeCard 
            icon={<Search />}
            title="ナレッジの分散"
            description="社内の知識や情報が様々な場所に散らばっており、必要な時に迅速にアクセスできない。"
            delay="100"
          />
          <ChallengeCard 
            icon={<PieChart />}
            title="作業の重複"
            description="同じ質問に何度も回答したり、同じ説明を繰り返し行ったりする非効率な状況が続いている。"
            delay="200"
          />
          <ChallengeCard 
            icon={<Users />}
            title="新入社員の教育負担"
            description="新入社員のオンボーディングや教育に多くの時間とリソースが必要で、既存社員の負担となっている。"
            delay="300"
          />
          <ChallengeCard 
            icon={<FileQuestion />}
            title="マニュアルの更新・管理"
            description="業務マニュアルの更新や管理が追いつかず、最新の情報が反映されていないことがある。"
            delay="400"
          />
          <ChallengeCard 
            icon={<ServerCrash />}
            title="システム間の連携不足"
            description="複数の社内システム間でデータ連携がスムーズでなく、情報の一元管理ができていない。"
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
