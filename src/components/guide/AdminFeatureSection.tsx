
import { motion } from "framer-motion";
import { BarChart3, Database, FileDigit, History, Search, Settings, Upload, Users2 } from "lucide-react";
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FeatureSection from "./FeatureSection";

const AdminFeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
            管理者向け機能
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            管理画面の高度な機能
          </h2>
          <p className="text-xl text-gray-600">
            AIとの対話内容を分析し、ナレッジベースを強化するための豊富な機能を備えています
          </p>
        </div>

        {/* ログ分析セクション */}
        <div className="mb-20">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-primary text-white p-4 flex items-center rounded-t-lg">
                  <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="ml-2 text-sm font-medium">質問分析ダッシュボード</span>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">質問カテゴリー分布</h4>
                    <div className="aspect-square bg-blue-50 rounded-lg flex items-center justify-center">
                      <BarChart3 size={64} className="text-primary" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">利用者別質問数</h4>
                    <div className="aspect-square bg-blue-50 rounded-lg flex items-center justify-center">
                      <BarChart3 size={64} className="text-primary" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">質問トレンド分析</h4>
                    <div className="aspect-square bg-blue-50 rounded-lg flex items-center justify-center">
                      <Database size={64} className="text-primary" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">回答品質評価</h4>
                    <div className="aspect-square bg-blue-50 rounded-lg flex items-center justify-center">
                      <Database size={64} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900">
                質問ログ記録と詳細分析
              </h3>
              <p className="text-gray-600 text-lg">
                管理画面では、社員やユーザーからの各種質問をログとして記録し、データベースに蓄積することが可能です。これにより以下のことが実現できます：
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FeatureSection 
                    icon={<Database size={20} />}
                    title="質問内容の分析"
                    description="社員や顧客が抱える懸念事項や、どのような質問が多く寄せられているのかを詳細に分析"
                  />
                  <FeatureSection 
                    icon={<History size={20} />}
                    title="利用データの管理"
                    description="各社員やユーザーの利用頻度、質問回数、チャット履歴などの情報を一元管理"
                  />
                  <FeatureSection 
                    icon={<BarChart3 size={20} />}
                    title="傾向分析"
                    description="質問のトーンや内容を分析し、社内の課題や改善点を特定"
                  />
                  <FeatureSection 
                    icon={<Users2 size={20} />}
                    title="ユーザー行動の把握"
                    description="部署別・役職別の利用状況を可視化し、効果的な社内展開をサポート"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ナレッジベース管理セクション */}
        <div className="mt-20">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900">
                多様な資料の知識ベース化
              </h3>
              <p className="text-gray-600 text-lg mt-6">
                管理者はさまざまな形式の資料をアップロードすることで、AIが参照できる知識ベースを構築できます。
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FeatureSection 
                    icon={<FileDigit size={20} />}
                    title="多様なフォーマット対応"
                    description="PDF、スプレッドシート、プレゼンテーション資料など、幅広い形式に対応"
                  />
                  <FeatureSection 
                    icon={<Upload size={20} />}
                    title="簡単アップロード"
                    description="ドラッグ＆ドロップでの簡単アップロードに対応し、すぐに知識として反映"
                  />
                  <FeatureSection 
                    icon={<Search size={20} />}
                    title="選択的適用"
                    description="アップロードされた資料について、どの部分を適用するか細かく設定可能"
                  />
                  <FeatureSection 
                    icon={<Settings size={20} />}
                    title="自動更新設定"
                    description="特定のURLやデータソースから定期的に最新情報を取得し自動更新"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardHeader className="bg-primary text-white">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                    <CardTitle className="text-lg ml-2">ナレッジベース管理</CardTitle>
                  </div>
                  <CardDescription className="text-primary-foreground/80">
                    多様な情報源からナレッジを構築
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="p-6 space-y-4">
                    <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                      <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-2">ファイルをドラッグ&ドロップ</p>
                      <p className="text-gray-400 text-sm">PDF, Excel, PPT, URL, YouTube</p>
                      <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm">
                        ファイルを選択
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                        <FileDigit className="h-5 w-5 text-blue-600 mr-3" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">営業マニュアル2023.pdf</p>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-blue-600 h-1.5 rounded-full w-full"></div>
                          </div>
                        </div>
                        <span className="text-xs text-blue-600 ml-2">完了</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <FileDigit className="h-5 w-5 text-gray-400 mr-3" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">社内規定集.xlsx</p>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-blue-600 h-1.5 rounded-full w-2/3"></div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">67%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdminFeatureSection;
