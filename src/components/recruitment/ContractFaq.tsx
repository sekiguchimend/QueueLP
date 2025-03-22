
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContractFaq = () => {
  const faqItems = [
    {
      question: "業務委託での契約期間はどのくらいですか？",
      answer: "基本的には3ヶ月〜12ヶ月の契約期間となりますが、プロジェクトの内容や双方の合意により柔軟に対応いたします。"
    },
    {
      question: "完全リモートでの業務は可能ですか？",
      answer: "はい、完全リモートでの業務も可能です。定期的なオンラインミーティングでコミュニケーションを取りながら進めていきます。"
    },
    {
      question: "業務委託から正社員への転換は可能ですか？",
      answer: "可能です。業務委託として一定期間働いた後、双方の合意があれば正社員への転換を検討することができます。"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">業務委託についてよくある質問</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default ContractFaq;
