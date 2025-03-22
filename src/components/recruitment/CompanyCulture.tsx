
import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, HeartHandshake } from "lucide-react";

const CompanyCulture = () => {
  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">私たちの企業文化</h2>
          <p className="text-gray-600 text-lg">
            革新的なアイデアの追求と社員の成長を大切にする企業文化を育んでいます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "チームワーク",
              description: "多様な背景やスキルを持つメンバーが協力し、互いの強みを活かしています。"
            },
            {
              icon: <GraduationCap className="h-8 w-8 text-primary" />,
              title: "継続的な学習",
              description: "常に新しい技術やアイデアを学び、自己成長と専門性の向上を奨励しています。"
            },
            {
              icon: <HeartHandshake className="h-8 w-8 text-primary" />,
              title: "ワークライフバランス",
              description: "柔軟な勤務体制を整え、プロフェッショナルとしての成長と個人の生活を両立できる環境を提供しています。"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;
