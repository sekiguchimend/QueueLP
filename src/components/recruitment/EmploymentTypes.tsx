
import React from "react";
import { motion } from "framer-motion";
import { Building, Briefcase, GraduationCap } from "lucide-react";

const EmploymentTypes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">多様な働き方</h2>
          <p className="text-gray-600 text-lg">
            あなたのライフスタイルやキャリアプランに合わせた最適な働き方を選択できます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building className="h-8 w-8 text-primary" />,
              title: "正社員",
              description: "安定した環境で長期的なキャリア形成を目指す方向けの雇用形態です。福利厚生も充実しています。"
            },
            {
              icon: <Briefcase className="h-8 w-8 text-primary" />,
              title: "業務委託",
              description: "専門スキルを活かして柔軟な働き方を希望する方に最適です。リモートワークも可能です。"
            },
            {
              icon: <GraduationCap className="h-8 w-8 text-primary" />,
              title: "インターンシップ",
              description: "学生やキャリアチェンジを考えている方に、実践的な経験を積む機会を提供します。"
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

export default EmploymentTypes;
