
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
            使い方
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            3ステップで始まる知識活用
          </h2>
          <p className="text-xl text-gray-600">
            文書をアップロード→AIが学習→質問するだけ。特別なトレーニングは不要です。
          </p>
        </div>

        <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="upload" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                文書アップロード
              </TabsTrigger>
              <TabsTrigger value="ask" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                質問・回答
              </TabsTrigger>
              <TabsTrigger value="manage" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                管理・分析
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <TabsContent value="upload" className="mt-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-4 flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="ml-2 text-sm font-medium">文書アップロード画面</span>
                  </div>
                  <div className="p-6">
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center">
                      <div className="text-gray-600 mb-4">
                        <svg className="mx-auto w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-lg font-medium">ファイルをここにドラッグ&ドロップ</p>
                        <p className="text-sm text-gray-500 mt-2">PDF、Excel、Word、テキストファイル対応<br />最大100MB</p>
                      </div>
                      <div className="mt-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          Google Drive連携も可能
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ask" className="mt-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-4 flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="ml-2 text-sm font-medium">社内チャット例</span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col space-y-6">
                      <div className="self-start max-w-[80%] bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                        <p className="text-gray-800">有給休暇の申請方法を教えて</p>
                      </div>
                      <div className="self-end max-w-[80%] bg-blue-50 text-blue-800 rounded-2xl rounded-br-sm p-4">
                        <p>有給休暇の申請は以下の手順で行います：<br />
                        1. 人事システムにログイン<br />
                        2. 「休暇申請」メニューを選択<br />
                        3. 希望日と理由を入力して送信<br /><br />
                        <span className="text-xs bg-blue-100 px-2 py-1 rounded">情報ソース: 就業規則 P.15</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="manage" className="mt-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-primary text-white p-4 flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="ml-2 text-sm font-medium">管理画面ダッシュボード</span>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900">資料参照回数分析</h4>
                        <div className="mt-2">
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                          </div>
                          <p className="text-sm text-blue-700 mt-1">就業規則: 45回</p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium text-green-900">感情分析</h4>
                        <div className="text-sm text-green-700 mt-2">
                          <div>ポジティブ: 68%</div>
                          <div>ニュートラル: 28%</div>
                          <div>ネガティブ: 4%</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        チャット履歴CSV出力 | 社員管理 | 利用状況レポート
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>

            <div className="space-y-8 animate-fade-up">
              <StepItem 
                number="01" 
                title="文書をアップロードしてAIに学習させる"
                description="PDF、Excel、Wordファイルをドラッグ&ドロップまたはGoogle Drive連携でアップロード。AIが文書内容を学習し、質問に答える準備が完了します。"
                isActive={activeTab === "upload"}
                onClick={() => setActiveTab("upload")}
              />
              <StepItem 
                number="02" 
                title="自然な言葉で質問して即座に回答を取得"
                description="「有給休暇の申請方法は？」といった自然な質問で、AIが学習した文書から適切な答えを生成。回答の根拠となる文書も表示されます。"
                isActive={activeTab === "ask"}
                onClick={() => setActiveTab("ask")}
              />
              <StepItem 
                number="03" 
                title="利用状況を分析して業務改善に活用"
                description="どの資料がよく参照されるか、どんな質問が多いかを分析。社員の招待管理やチャット履歴の確認で、より効果的な運用が可能です。"
                isActive={activeTab === "manage"}
                onClick={() => setActiveTab("manage")}
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
