
import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Download, 
  FileImage, 
  ExternalLink, 
  FileCheck, 
  BadgeCheck, 
  BarChart4, 
  TrendingUp 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Document {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  pages: number;
  featured?: boolean;
}

const documents: Document[] = [
  {
    id: "doc1",
    title: "業界動向レポート2023年版",
    description: "最新の市場動向と将来の予測を分析した包括的なレポートです。",
    icon: <BarChart4 className="w-6 h-6 text-primary" />,
    category: "市場調査",
    pages: 24,
    featured: true
  },
  {
    id: "doc2",
    title: "成功事例集：導入企業10選",
    description: "様々な業種での導入事例と成果をまとめた事例集です。",
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    category: "事例",
    pages: 18
  },
  {
    id: "doc3",
    title: "効率化戦略ガイド",
    description: "業務効率化の手法と実践的なステップを解説したガイドです。",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    category: "ガイド",
    pages: 32
  },
  {
    id: "doc4",
    title: "導入手順マニュアル",
    description: "スムーズな導入を実現するための詳細なマニュアルです。",
    icon: <FileCheck className="w-6 h-6 text-primary" />,
    category: "マニュアル",
    pages: 15
  }
];

const DocumentList = () => {
  return (
    <section id="documents" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ダウンロード資料一覧</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ビジネスのさまざまな課題解決に役立つ資料を無料でご用意しています。
            メールアドレスをご登録いただくだけで、すべての資料をダウンロードいただけます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DocumentCard document={doc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DocumentCard = ({ document }: { document: Document }) => {
  return (
    <Card className={`overflow-hidden border ${document.featured ? 'border-primary' : 'border-gray-200'} shadow-lg hover:shadow-xl transition-all duration-300`}>
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          <div className={`p-6 ${document.featured ? 'bg-primary/5' : 'bg-gray-50'}`}>
            <div className="flex items-start">
              <div className={`p-3 rounded-xl ${document.featured ? 'bg-primary/10' : 'bg-white border border-gray-200'} mr-4`}>
                {document.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-500">{document.category}</span>
                  {document.featured && (
                    <span className="px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                      おすすめ
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{document.title}</h3>
                <p className="text-gray-600 mb-3">{document.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <FileText className="w-4 h-4 mr-1" />
                  <span>{document.pages}ページ</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 flex items-center justify-between mt-auto">
            <div className="text-sm text-gray-500">
              無料ダウンロード
            </div>
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              ダウンロード
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentList;
