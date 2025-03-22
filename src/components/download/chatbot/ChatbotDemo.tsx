
import React from "react";
import { MessageSquare, FileText, Check } from "lucide-react";
import FeatureCard from "./FeatureCard";

const ChatbotFeatures = () => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard
        icon={<MessageSquare className="h-10 w-10 text-primary" />}
        title="自然な会話"
        description="専門用語や複雑な説明なしで、自然な日本語で質問するだけで最適な回答が得られます。"
      />
      <FeatureCard
        icon={<FileText className="h-10 w-10 text-primary" />}
        title="社内知識に接続"
        description="マニュアルや社内文書に基づいた正確な情報を提供。常に最新の情報にアクセスできます。"
      />
      <FeatureCard
        icon={<Check className="h-10 w-10 text-primary" />}
        title="業務自動化"
        description="定型業務の自動化、レポート作成、スケジュール管理など、様々なタスクを効率化します。"
      />
    </div>
  );
};

export default ChatbotFeatures;
