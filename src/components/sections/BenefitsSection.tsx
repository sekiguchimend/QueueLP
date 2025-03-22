
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
              チャットボットの導入により、社員の業務効率が向上し、本来の業務に集中できる環境を実現します。
            </p>

            <div className="space-y-4">
              <BenefitItem>情報検索時間を最大70%削減</BenefitItem>
              <BenefitItem>問い合わせ対応の自動化で人的リソースを最適化</BenefitItem>
              <BenefitItem>24時間365日、即時対応で待ち時間をゼロに</BenefitItem>
              <BenefitItem>社内ナレッジの共有と活用を促進</BenefitItem>
              <BenefitItem>新入社員のオンボーディング期間を短縮</BenefitItem>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-fade-in">
            {/* Decorative elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute -left-5 -bottom-5 w-28 h-28 bg-blue-100 rounded-full opacity-70"></div>
            
            {/* Stats display */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <StatItem value="70%" label="情報検索時間の削減" />
                <StatItem value="45%" label="問い合わせ対応の自動化" />
                <StatItem value="24h" label="対応可能時間" />
                <StatItem value="89%" label="社員満足度" />
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-100">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">導入企業からの声</h4>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-600 italic mb-4">
                    「社内チャットボットの導入後、よくある質問への対応時間が大幅に削減され、本来の業務に集中できるようになりました。新入社員のサポートにも役立っています。」
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">山田 太郎</p>
                      <p className="text-sm text-gray-500">人事部長 / 株式会社サンプル</p>
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
