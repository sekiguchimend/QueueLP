
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, BriefcaseBusiness, Building, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OpenPositions = () => {
  return (
    <section id="positions" className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">募集ポジション</h2>
          <p className="text-gray-600 text-lg">
            私たちのビジョンに共感し、共に成長していける方を募集しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              id: "ai-engineer",
              title: "AIエンジニア",
              department: "テクノロジー部門",
              type: "正社員・業務委託",
              location: "東京（リモート可）"
            },
            {
              id: "frontend-developer",
              title: "フロントエンドデベロッパー",
              department: "プロダクト開発部門",
              type: "正社員・業務委託",
              location: "東京（リモート可）"
            },
            {
              id: "uiux-designer",
              title: "UIUXデザイナー",
              department: "クリエイティブ部門",
              type: "正社員・業務委託",
              location: "東京（リモート可）"
            },
            {
              id: "marketing-specialist",
              title: "マーケティングスペシャリスト",
              department: "マーケティング部門",
              type: "正社員",
              location: "東京（リモート可）"
            }
          ].map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-gray-600">
                        <BriefcaseBusiness className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{position.department}</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Building className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{position.type}</span>
                      </li>
                      <li className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{position.location}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link to={`/recruitment/${position.id}`} className="block w-full">
                  <Button className="w-full group-hover:bg-primary transition-colors">
                    詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
