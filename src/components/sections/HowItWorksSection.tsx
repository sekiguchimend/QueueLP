
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("ask");

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
            使い方
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            シンプルでわかりやすい操作性
          </h2>
          <p className="text-xl text-gray-600">
            特別なトレーニングは不要。直感的な操作で、誰でも簡単に利用できます。
          </p>
        </div>

        <Tabs defaultValue="ask" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="ask" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                質問する
              </TabsTrigger>
              <TabsTrigger value="analyze" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                分析する
              </TabsTrigger>
              <TabsTrigger value="automate" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                自動化する
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <TabsContent value="ask" className="mt-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-4 flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="ml-2 text-sm font-medium">社内質問例</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col space-y-6">
                      <div className="self-start max-w-[80%] bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                        <p className="text-gray-800">新いんしゃいん研修のしりょうはどこ？</p>
                      </div>
                      <div className="self-end max-w-[80%] bg-blue-50 text-blue-800 rounded-2xl rounded-br-sm p-4">
                        <p>新入社員研修の資料は以下の場所にあります：<br />
                        1. 社内ポータル {'>'}人事部{'>'}研修資料<br />
                        2. 共有ドライブ{'>'}HR{'>'}FY2023{'>'}新入社員<br /><br />
                        直接リンクをお送りしますか？</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analyze" className="mt-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-4 flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="ml-2 text-sm font-medium">データ分析例</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col space-y-6">
                      <div className="self-start max-w-[80%] bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                        <p className="text-gray-800">第2四半期の営業データを分析して、トレンドを教えてください</p>
                      </div>
                      <div className="self-end max-w-[80%] bg-blue-50 text-blue-800 rounded-2xl rounded-br-sm p-4">
                        <p>第2四半期の分析結果です：<br />
                        • 前年同期比で売上が12%増加<br />
                        • 新規顧客獲得数は8%減少<br />
                        • リピート率は15%向上<br />
                        • 最も成長した商品カテゴリはサービスA<br /><br />
                        詳細なグラフと分析レポートを表示しますか？</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="automate" className="mt-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-4 flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="ml-2 text-sm font-medium">業務自動化例</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col space-y-6">
                      <div className="self-start max-w-[80%] bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                        <p className="text-gray-800">来週の部門ミーティングの議事録テンプレートを作成し、全員に送付してください</p>
                      </div>
                      <div className="self-end max-w-[80%] bg-blue-50 text-blue-800 rounded-2xl rounded-br-sm p-4">
                        <p>了解しました。以下の手順で対応します：<br />
                        1. 前回のミーティングテンプレートをベースに新規作成<br />
                        2. 議題を更新（先週のアクションアイテムを含む）<br />
                        3. 参加予定者リストを取得（15名）<br />
                        4. カレンダーから会議詳細を追加<br /><br />
                        テンプレートを作成し、メール送信を実行しました。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>

            <div className="space-y-8 animate-fade-up">
              <StepItem 
                number="01" 
                title="自然な言葉で質問を入力"
                description="誤字や口調に関わらず質問の意図を正確に理解。複雑な検索コマンドやキーワードの設定は不要です。"
                isActive={activeTab === "ask"}
                onClick={() => setActiveTab("ask")}
              />
              <StepItem 
                number="02" 
                title="レポートやデータの分析依頼"
                description="データの分析や要約が必要な場合は、分析したい内容を指定するだけ。チャットボットが重要なポイントを抽出します。"
                isActive={activeTab === "analyze"}
                onClick={() => setActiveTab("analyze")}
              />
              <StepItem 
                number="03" 
                title="定型業務の自動化を設定"
                description="定期的なレポート作成やデータ収集など、繰り返し行う業務を自動化できます。一度設定すれば、あとはお任せください。"
                isActive={activeTab === "automate"}
                onClick={() => setActiveTab("automate")}
              />
              
              <div className="pt-6">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link to="/guide">詳細なガイドを見る</Link>
                </Button>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

const StepItem = ({ 
  number, 
  title, 
  description, 
  isActive, 
  onClick 
}: { 
  number: string; 
  title: string; 
  description: string; 
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div 
      className={`p-6 rounded-xl transition-all cursor-pointer ${
        isActive ? "bg-white shadow-md" : "bg-transparent hover:bg-white/50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-4 ${
          isActive ? "bg-primary text-white" : "bg-blue-50 text-primary"
        }`}>
          {number}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
