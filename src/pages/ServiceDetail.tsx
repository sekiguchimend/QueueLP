import React from "react";
import ServicePageLayout from "@/components/layout/ServicePageLayout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  Search, 
  Database, 
  FileText, 
  Bot, 
  BarChart, 
  Clock, 
  Shield, 
  Building,
  Upload,
  Link as LinkIcon,
  Youtube,
  Clock10
} from "lucide-react";

const ServiceDetail = () => {
  return (
    <>
      <Helmet>
        <title>サービス詳細 | ワークメイトAI - 次世代AI業務支援ソリューション</title>
        <meta name="description" content="ワークメイトAIは、企業内知識の検索・活用を効率化し、社員の生産性を高める次世代型AIチャットボットです。社内情報へのアクセス迅速化、業務自動化、データ分析など、様々な機能で企業のDX推進を支援します。" />
        <meta name="keywords" content="ワークメイトAI, AI業務支援, 社内チャットボット, 業務効率化, 社内知識検索, 企業DX, AIソリューション" />
        <meta property="og:title" content="サービス詳細 | ワークメイトAI" />
        <meta property="og:description" content="ワークメイトAIは、企業内知識の検索・活用を効率化し、社員の生産性を高める次世代型AIチャットボットです。" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.workmate-ai.jp/service-detail" />
      </Helmet>
      
      <ServicePageLayout title="サービス詳細">
        <section className="mb-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            ワークメイトAIは、企業内の知識を効率的に検索・活用し、社員の生産性を向上させる次世代型AIチャットボットです。
            最先端のAI技術を活用し、社内情報へのアクセスを迅速化し、業務フローをスマート化します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">主要機能</h2>
          <div className="space-y-6">
            <FeatureCard 
              icon={<MessageSquare />}
              title="AIチャットボット"
              description="自然な対話形式で質問に回答。社内FAQやマニュアルの内容を瞬時に提供し、問い合わせ対応を効率化します。"
            />
            <FeatureCard 
              icon={<Search />}
              title="社内知識検索"
              description="企業内のドキュメント、マニュアル、過去のやり取りなどから最適な情報を検索・抽出。従来の検索では見つけにくかった情報もスマートに取得できます。"
            />
            <FeatureCard 
              icon={<Database />}
              title="知識ベース構築"
              description="社内の情報資産をAIが理解しやすい形で整理・構造化。断片的な情報を有機的につなげ、価値ある知識として活用できるようにします。"
            />
            <FeatureCard 
              icon={<FileText />}
              title="ドキュメント生成"
              description="議事録、報告書、提案書など各種ビジネス文書の下書きを自動生成。テンプレートに沿った一貫性のある文書作成をサポートします。"
            />
            <FeatureCard 
              icon={<Bot />}
              title="業務プロセス自動化"
              description="定型業務のフローを自動化し、人的ミスを削減。単純作業から社員を解放し、より創造的な業務に集中できる環境を提供します。"
            />
            <FeatureCard 
              icon={<BarChart />}
              title="データ分析・レポート"
              description="蓄積されたデータから傾向分析やレポートを自動生成。意思決定に役立つインサイトを提供します。"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AIの学習機能</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            ワークメイトAIは、簡単な操作で企業独自の情報を学習させることができます。様々な形式のデータに対応し、わずか10秒で学習を完了します。
            信頼性の高い情報提供を実現するため、学習した情報の範囲内でのみ回答を生成します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <LearningMethodCard 
              icon={<Upload />}
              title="多様なファイル形式に対応"
              description="PDF、Word、Excel、PowerPointなど、様々なファイル形式をアップロードするだけで簡単に学習させることができます。社内マニュアルや報告書をそのまま取り込み可能です。"
            />
            <LearningMethodCard 
              icon={<LinkIcon />}
              title="URLからの情報取得"
              description="URLを入力するだけで、そのページの情報を自動的に学習します。社内のイントラネットやナレッジベースサイトの情報を簡単に取り込めます。"
            />
            <LearningMethodCard 
              icon={<Youtube />}
              title="動画コンテンツの学習"
              description="YouTubeなどの動画URLを入力すると、動画内の音声を認識して学習します。社内研修や説明会の動画からも知識を抽出できます。"
            />
            <LearningMethodCard 
              icon={<Clock10 />}
              title="超高速学習"
              description="最先端の情報処理技術により、大量の情報でもわずか10秒で学習を完了。リアルタイムで情報を更新し、最新の知識を常に提供します。"
            />
          </div>
          <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">信頼性の高い情報提供</h3>
            <p className="text-gray-600">
              ワークメイトAIは、学習させた情報の範囲内でのみ回答を生成するため、不確かな情報や推測に基づく回答を防止します。明確な出典がない情報については「わかりません」と正直に回答し、誤った情報の拡散を防ぎます。これにより、企業内の意思決定や情報共有における信頼性を確保します。
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">導入メリット</h2>
          <div className="space-y-6">
            <BenefitItem 
              title="業務効率の飛躍的向上"
              description="情報検索時間の短縮により、1日あたり平均30〜60分の業務時間削減が可能です。調査によれば、一般的なビジネスパーソンは情報検索に1日平均1.8時間を費やしていますが、ワークメイトAIはこの時間を最大60%削減します。"
            />
            <BenefitItem 
              title="知識の民主化"
              description="特定の社員に依存していた専門知識や暗黙知を組織全体で共有・活用できるようになります。新入社員の教育コスト削減や、属人化解消による業務継続性の向上に貢献します。"
            />
            <BenefitItem 
              title="意思決定の質向上"
              description="必要な情報へのアクセスが容易になることで、より多くの情報に基づいた高品質な意思決定が可能になります。また、データ分析機能により、過去の傾向から将来予測を行うこともできます。"
            />
            <BenefitItem 
              title="コスト削減"
              description="問い合わせ対応の自動化による人件費削減、情報検索時間の短縮による生産性向上など、複数の側面からコスト削減効果が期待できます。導入企業の平均ROIは投資額の3〜5倍と報告されています。"
            />
            <BenefitItem 
              title="社員満足度向上"
              description="単調な作業や煩雑な情報検索から解放されることで、社員はより創造的で価値のある業務に集中できるようになります。これにより社員の仕事満足度が向上し、結果として人材定着率の向上にもつながります。"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">導入フロー</h2>
          <div className="space-y-6">
            <ProcessItem 
              number="01"
              title="初期ヒアリング"
              description="お客様の業務内容や課題をヒアリングし、最適な導入プランを提案します。"
            />
            <ProcessItem 
              number="02"
              title="システム設計"
              description="お客様の業務フローや既存システムに合わせたカスタマイズ設計を行います。"
            />
            <ProcessItem 
              number="03"
              title="知識ベース構築"
              description="社内ドキュメントや業務マニュアルなどをAIが理解できる形に変換し、知識ベースを構築します。"
            />
            <ProcessItem 
              number="04"
              title="テスト運用"
              description="限定したユーザーグループでテスト運用を行い、フィードバックを収集します。"
            />
            <ProcessItem 
              number="05"
              title="本格導入"
              description="テスト結果を踏まえた改善を行い、全社的な導入を実施します。"
            />
            <ProcessItem 
              number="06"
              title="運用サポート"
              description="導入後も継続的な運用サポートやバージョンアップデートを提供します。"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">セキュリティ対策</h2>
          <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 border border-green-100">
            <p className="text-gray-600 mb-4">
              ワークメイトAIは、企業の重要な情報資産を扱うため、最高水準のセキュリティ対策を実施しています：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>全通信のTLS/SSL暗号化</li>
              <li>データの暗号化保存</li>
              <li>アクセス権限の厳格な管理</li>
              <li>定期的なセキュリティ監査実施</li>
              <li>プライバシーバイデザインに基づいた設計</li>
              <li>24時間365日のセキュリティ監視</li>
              <li>SOC2、ISOなど各種セキュリティ認証取得</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">対応業種・業界</h2>
          <p className="text-gray-600 mb-6">
            ワークメイトAIは、様々な業種・業界に対応しており、それぞれの業界特有の課題やニーズに合わせたカスタマイズが可能です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <IndustryTag industry="製造業" />
            <IndustryTag industry="小売業" />
            <IndustryTag industry="金融・保険業" />
            <IndustryTag industry="医療・福祉" />
            <IndustryTag industry="情報通信業" />
            <IndustryTag industry="建設業" />
            <IndustryTag industry="教育・学習支援" />
            <IndustryTag industry="運輸・物流" />
            <IndustryTag industry="不動産業" />
            <IndustryTag industry="専門・技術サービス業" />
            <IndustryTag industry="公務" />
            <IndustryTag industry="エネルギー・資源" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">料金プラン</h2>
          <p className="text-gray-600 mb-4">
            詳細な料金プランは<a href="/pricing" className="text-primary hover:underline">料金ページ</a>をご確認ください。
            企業規模や利用ニーズに合わせた柔軟なプランをご用意しています。
          </p>
          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
            <p className="text-center text-gray-700 font-medium">
              初期費用・月額利用料・カスタマイズ費用など、お客様の導入規模や要件に応じたお見積りをご提供します。
              まずはお気軽に<a href="/contact" className="text-primary hover:underline">お問い合わせ</a>ください。
            </p>
          </div>
        </section>
      </ServicePageLayout>
    </>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="overflow-hidden border-gray-100 hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex items-start">
        <div className="mr-4 p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const LearningMethodCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="overflow-hidden border-gray-100 hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex items-start">
        <div className="mr-4 p-3 rounded-full bg-indigo-100 text-indigo-600">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const BenefitItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProcessItem = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const IndustryTag = ({ industry }: { industry: string }) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 bg-gray-50">
      <Building className="w-4 h-4 text-primary mr-2" />
      <span className="text-gray-700">{industry}</span>
    </div>
  );
};

export default ServiceDetail; 