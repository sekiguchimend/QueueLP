
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, Bot, Calendar, Database, FileCheck, FileText, 
  MessageSquare, Search, Settings, Shield, UserCog, Zap 
} from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import FeatureSection from "./FeatureSection";

interface TabsSectionProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsSection = ({ activeTab, setActiveTab }: TabsSectionProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="admin" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-2 w-full max-w-md bg-blue-50">
                <TabsTrigger 
                  value="admin" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-8 py-3"
                >
                  管理者機能
                </TabsTrigger>
                <TabsTrigger 
                  value="user" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-8 py-3"
                >
                  ユーザー機能
                </TabsTrigger>
              </TabsList>
            </div>
            
            <Card className="border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-0">
                <TabsContent value="admin" className="m-0">
                  <div className="p-8">
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">管理者向け機能</h2>
                      <p className="text-lg text-gray-600">
                        ワークメイトAIの管理者機能は、ユーザー管理からデータ分析まで、企業全体の生産性向上をサポートします。
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FeatureSection 
                        icon={<UserCog size={24} />}
                        title="ユーザー管理"
                        description="ユーザーアカウントの作成、編集、アクセス権限の設定をシンプルに管理できます。"
                      />
                      <FeatureSection 
                        icon={<Database size={24} />}
                        title="データベース統合"
                        description="社内のデータベースと連携し、AIが必要な情報を瞬時に検索・分析します。"
                      />
                      <FeatureSection 
                        icon={<Shield size={24} />}
                        title="セキュリティ設定"
                        description="高度な暗号化と詳細なアクセス制御で社内情報を安全に保護します。"
                      />
                      <FeatureSection 
                        icon={<BarChart size={24} />}
                        title="分析ダッシュボード"
                        description="使用状況やAIの活用度など、詳細なレポートを自動生成します。"
                      />
                      <FeatureSection 
                        icon={<Settings size={24} />}
                        title="カスタム設定"
                        description="企業のワークフローに合わせてAIの動作や応答をカスタマイズできます。"
                      />
                      <FeatureSection 
                        icon={<Zap size={24} />}
                        title="自動化ワークフロー"
                        description="繰り返し作業の自動化シナリオを設定し、業務効率を向上させます。"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="user" className="m-0">
                  <div className="p-8">
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">ユーザー向け機能</h2>
                      <p className="text-lg text-gray-600">
                        日々の業務を効率化し、生産性を高めるユーザー向け機能を提供します。
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FeatureSection 
                        icon={<Bot size={24} />}
                        title="AIアシスタント"
                        description="質問に即座に回答し、情報検索や業務サポートを行う対話型AIです。"
                      />
                      <FeatureSection 
                        icon={<FileText size={24} />}
                        title="文書管理・検索"
                        description="社内文書の検索・要約・分析を素早く行い、必要な情報を瞬時に取得します。"
                      />
                      <FeatureSection 
                        icon={<MessageSquare size={24} />}
                        title="チャット機能"
                        description="AIとのチャットで業務上の疑問を解消し、効率的に問題解決ができます。"
                      />
                      <FeatureSection 
                        icon={<Calendar size={24} />}
                        title="スケジュール管理"
                        description="会議の設定や日程調整をAIが行い、効率的な時間管理を実現します。"
                      />
                      <FeatureSection 
                        icon={<Search size={24} />}
                        title="インテリジェント検索"
                        description="キーワードだけでなく、意図を理解した高度な検索機能を提供します。"
                      />
                      <FeatureSection 
                        icon={<FileCheck size={24} />}
                        title="タスク管理"
                        description="ToDoリストの作成から進捗管理まで、業務タスクを効率的に管理します。"
                      />
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
