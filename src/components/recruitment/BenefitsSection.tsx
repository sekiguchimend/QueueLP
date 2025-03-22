
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">働く魅力</h2>
          <p className="text-gray-600 text-lg">
            社員一人ひとりが能力を発揮し、成長できる環境を整えています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="オフィス環境" 
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
          <div>
            <div className="space-y-8">
              {[
                {
                  title: "キャリア開発支援",
                  description: "社内研修プログラム、外部セミナー参加支援など、スキルアップをサポートします。"
                },
                {
                  title: "柔軟な働き方",
                  description: "リモートワークやフレックスタイム制度を導入し、ワークライフバランスを大切にしています。"
                },
                {
                  title: "健康サポート",
                  description: "定期的な健康診断、メンタルヘルスケアなど、社員の健康維持をサポートします。"
                },
                {
                  title: "社内イベント",
                  description: "チームビルディングやレクリエーションイベントを定期的に開催しています。"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
