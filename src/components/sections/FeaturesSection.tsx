
import { 
  MessageSquare, 
  Search, 
  Clock, 
  Globe, 
  Shield, 
  BarChart,
  Brain
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
            主な機能
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            あらゆる業務課題を解決する先進機能
          </h2>
          <p className="text-xl text-gray-600">
            社内情報への迅速なアクセスから業務の自動化まで、日々の業務をよりスムーズにする機能が充実
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="自然な会話体験"
            description="自然言語処理技術を活用し、まるで人間と話しているような会話体験を提供します。複雑な質問にも的確に回答します。"
            delay="0"
          />
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="意図理解能力"
            description="誤字や言い回しに関わらず、質問の本質を正確に理解。ハルシネーション（誤った情報の生成）なく、意図に沿った適切な回答を提供します。"
            delay="100"
          />
          <FeatureCard
            icon={<Search className="w-6 h-6" />}
            title="社内情報の即時検索"
            description="社内文書やナレッジベース、過去の議事録など、膨大な情報から必要なデータを瞬時に検索・提供します。"
            delay="200"
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            title="予定管理の効率化"
            description="会議のスケジュール調整や予定の確認、リマインダーの設定など、日々のスケジュール管理をサポートします。"
            delay="300"
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6" />}
            title="多言語対応"
            description="日本語はもちろん、英語、中国語など多言語に対応。グローバルな社内コミュニケーションをサポートします。"
            delay="400"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="セキュリティ対策"
            description="企業の機密情報を扱うため、高度なセキュリティ対策を実施。権限に基づいたアクセス制御を行います。"
            delay="500"
          />
          <FeatureCard
            icon={<BarChart className="w-6 h-6" />}
            title="分析レポート"
            description="チャットボットの利用状況や頻出質問などを分析し、業務改善のためのインサイトを提供します。"
            delay="600"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
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
    <div 
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;
