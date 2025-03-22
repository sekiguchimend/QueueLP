
import { motion } from "framer-motion";
import { Bot, Database, FileText, Search } from "lucide-react";
import React from "react";
import FeatureSection from "./FeatureSection";

const UserFeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
            ユーザー向け機能
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            ユーザー画面の高度な機能
          </h2>
          <p className="text-xl text-gray-600">
            ワークメイトAIの優れた機能で、業務効率と情報アクセスを大幅に改善
          </p>
        </div>

        {/* 情報ソース明示機能セクション */}
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
                  <span className="ml-2 text-sm font-medium">ワークメイトAIチャット</span>
                </div>
                <div className="p-4">
                  <div className="flex flex-col space-y-4">
                    <div className="self-start max-w-[85%] bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                      <p>来客時の応対マナーについて教えてください。</p>
                    </div>
                    <div className="self-end max-w-[85%] bg-primary/10 text-gray-800 rounded-2xl rounded-br-sm p-4">
                      <p className="mb-4">来客応対では以下のポイントに注意しましょう：</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>来客の5分前には受付に到着しておく</li>
                        <li>笑顔で挨拶し、名刺交換は丁寧に</li>
                        <li>案内する際は先導し、エレベーターでは先に乗り降りする</li>
                        <li>会議室では最適な席に案内する</li>
                      </ol>
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <FileText className="inline-block h-4 w-4 mr-1" />
                          <span className="font-medium">情報ソース:</span> 社内マナーハンドブック2023（P.14-15）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900">
                情報ソースの明示機能
              </h3>
              <p className="text-gray-600 text-lg">
                ワークメイトAIは、質問に対する回答の際に情報の出典元を明示します。これにより以下のメリットが得られます：
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FeatureSection 
                    icon={<FileText size={20} />}
                    title="情報の信頼性向上"
                    description="どの資料から得られた情報かを明示することで、回答の信頼性を高めます"
                  />
                  <FeatureSection 
                    icon={<Bot size={20} />}
                    title="学習促進"
                    description="元の資料を参照できるため、より詳細な情報を必要に応じて確認できます"
                  />
                  <FeatureSection 
                    icon={<Search size={20} />}
                    title="知識の追跡可能性"
                    description="組織内のどの文書に記載されているかを即座に把握できるため、情報の検証が容易"
                  />
                  <FeatureSection 
                    icon={<Database size={20} />}
                    title="ナレッジベースの評価"
                    description="どの資料が頻繁に参照されているかを分析し、重要度の高い文書を特定"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UserFeatureSection;
