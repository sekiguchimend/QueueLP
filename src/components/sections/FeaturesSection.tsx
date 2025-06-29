
import { 
  MessageSquare, 
  Search, 
  Clock, 
  Globe, 
  Shield, 
  BarChart,
  Brain,
  Upload,
  Users,
  FileText,
  Settings
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
            会社の知識を最大限活用する包括的な機能
          </h2>
          <p className="text-xl text-gray-600">
            文書学習から権限管理、分析まで。会社の情報資産を効率的に活用するための充実した機能群
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Upload className="w-6 h-6" />}
            title="簡単文書アップロード"
            description="PDF、Excel、Word等の文書をドラッグ&ドロップで簡単アップロード。Google Drive連携にも対応し、既存ファイルをすぐに学習できます。"
            delay="0"
          />
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="自然な会話体験"
            description="誤字や言い回しに関わらず質問の意図を正確に理解。「有給休暇の申請方法は？」といった自然な質問に的確に回答します。"
            delay="100"
          />
          <FeatureCard
            icon={<FileText className="w-6 h-6" />}
            title="根拠文書の表示"
            description="回答の下に「情報ソース：○○資料 P.○」として参照した文書名を表示。回答の信頼性を担保し、詳細確認も可能です。"
            delay="200"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="4段階権限管理"
            description="運営者・社長・管理者・社員の4段階権限設定。各権限に応じた機能制限とアクセス制御により、セキュアな運用を実現します。"
            delay="300"
          />
          <FeatureCard
            icon={<Settings className="w-6 h-6" />}
            title="カスタムプロンプト"
            description="管理者が各文書に対して指令を設定可能。「必ず注釈を付ける」「決定事項とTodoを分けて表示」など、回答をカスタマイズできます。"
            delay="400"
          />
          <FeatureCard
            icon={<BarChart className="w-6 h-6" />}
            title="高度な分析機能"
            description="資料参照回数、感情分析、繰り返し質問パターンなど、AIによる詳細分析。チャット履歴のCSV出力や利用状況レポートも提供します。"
            delay="500"
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            title="24時間即時対応"
            description="24時間365日、いつでも質問可能。新入社員研修や急な情報確認など、必要な時にすぐに回答を得られます。"
            delay="600"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="強固なセキュリティ"
            description="企業の機密情報を扱うため、高度なセキュリティ対策を実施。データ暗号化とアクセス権限の厳密な管理を行います。"
            delay="700"
          />
          <FeatureCard
            icon={<Search className="w-6 h-6" />}
            title="社員管理・招待機能"
            description="管理者は新しい社員の招待、利用状況の確認、社員の削除が可能。初期パスワード設定から一元管理できます。"
            delay="800"
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
