
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Download } from "lucide-react";

const DownloadHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 800 800">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0M0 0L40 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center p-2 mb-6 text-primary bg-primary/10 rounded-full">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">AIチャットボット</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            ビジネスの生産性を高める<br />
            <span className="text-primary">ワークメイトAIを今すぐ体験</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            情報検索、データ分析、業務効率化をAIでサポート。
            社内知識に接続する次世代のビジネスアシスタントを無料でお試しいただけます。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#chatbot-demo" 
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-primary hover:bg-primary/90 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              無料ダウンロード
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadHero;
