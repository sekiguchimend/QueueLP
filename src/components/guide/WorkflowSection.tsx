
import { Lightbulb, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import WorkflowItem from "./WorkflowItem";

interface WorkflowSectionProps {
  activeTab: string;
}

const WorkflowSection = ({ activeTab }: WorkflowSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full text-primary"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                type: "spring",
                stiffness: 200 
              }}
            >
              <Lightbulb size={32} />
              <motion.div
                className="absolute -top-1 -right-1 text-yellow-400"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles size={14} />
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {activeTab === "admin" ? "管理者のワークフロー例" : "ユーザーのワークフロー例"}
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {activeTab === "admin" 
                ? "ワークメイトAIをどのように管理・設定できるかの例です" 
                : "日々の業務でワークメイトAIをどのように活用できるかの例です"}
            </motion.p>
          </div>
          
          <div className="relative">
            {/* Center line with animation */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="w-1 h-full bg-gradient-to-b from-blue-300 to-indigo-300 rounded-full" />
            </motion.div>
            
            {/* Workflow items */}
            {activeTab === "admin" ? (
              // Admin workflow
              <div className="space-y-20">
                <WorkflowItem 
                  number="01"
                  title="ユーザーアカウントのセットアップ"
                  description="社員の情報を登録し、部署や役職に応じた適切なアクセス権限を設定します。一括インポート機能でスムーズに導入できます。"
                  isRight={false}
                />
                <WorkflowItem 
                  number="02"
                  title="データソースの連携"
                  description="社内のデータベースやクラウドストレージとの連携設定を行い、AIが必要な情報にアクセスできるようにします。"
                  isRight={true}
                />
                <WorkflowItem 
                  number="03"
                  title="セキュリティポリシーの設定"
                  description="機密情報の取り扱いポリシーを設定し、情報漏洩のリスクを最小限に抑えながらAIを活用できるようにします。"
                  isRight={false}
                />
                <WorkflowItem 
                  number="04"
                  title="利用状況のモニタリング"
                  description="ダッシュボードで利用状況を確認し、AIがどのように活用されているかを分析。改善が必要な部分を特定します。"
                  isRight={true}
                />
              </div>
            ) : (
              // User workflow
              <div className="space-y-20">
                <WorkflowItem 
                  number="01"
                  title="AIアシスタントとの対話"
                  description="自然な会話でAIに質問を投げかけ、業務に関する疑問を解消。複雑な質問にも正確に回答します。"
                  isRight={false}
                />
                <WorkflowItem 
                  number="02"
                  title="会議の自動議事録作成"
                  description="AIが会議の内容を分析し、重要なポイントをまとめた議事録を自動生成。時間の節約と情報共有が容易になります。"
                  isRight={true}
                />
                <WorkflowItem 
                  number="03"
                  title="社内情報の検索・分析"
                  description="膨大な社内ドキュメントから必要な情報を瞬時に検索。AIが関連情報も含めて整理し、意思決定をサポートします。"
                  isRight={false}
                />
                <WorkflowItem 
                  number="04"
                  title="タスク管理と進捗報告"
                  description="AIがタスクの優先順位を提案し、期限管理をサポート。進捗状況の報告も自動化し、マネージャーの負担を軽減します。"
                  isRight={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
