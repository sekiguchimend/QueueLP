import { Check } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-up">
            <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
              導入メリット
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              業務時間の削減と<br />生産性の向上を実現
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              会社の文書をAIが学習することで、社員が必要な情報にすぐアクセスでき、本来の業務に集中できる環境を実現します。
            </p>

            <div className="space-y-4">
              <BenefitItem>「有給休暇の申請方法は？」といった質問に即座に回答</BenefitItem>
              <BenefitItem>回答の根拠となる文書が表示されるため情報の信頼性が高い</BenefitItem>
              <BenefitItem>24時間365日、いつでも必要な情報を取得可能</BenefitItem>
              <BenefitItem>新入社員研修の効率化と質問対応時間の削減</BenefitItem>
              <BenefitItem>4段階の権限管理でセキュアな情報共有を実現</BenefitItem>
              <BenefitItem>資料参照回数や感情分析でよくある質問パターンを把握</BenefitItem>
              <BenefitItem>Google Drive連携で既存ファイルを簡単に学習データ化</BenefitItem>
              <BenefitItem>チャット履歴CSV出力で利用状況を詳細に分析</BenefitItem>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute -left-5 -bottom-5 w-28 h-28 bg-blue-100 rounded-full opacity-70"></div>
            
            {/* Image display */}
            <img 
              src="/work-man.png" 
              alt="WorkMate AI" 
              className="w-full h-auto object-contain rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start">
      <div className="shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 mr-3 mt-0.5">
        <Check className="w-4 h-4" />
      </div>
      <p className="text-gray-700">{children}</p>
    </div>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div>
      <p className="text-4xl font-bold text-primary mb-2">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default BenefitsSection;
