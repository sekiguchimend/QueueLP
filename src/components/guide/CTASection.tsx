
import { motion } from "framer-motion";
import React from "react";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-10 text-center text-white shadow-xl">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            ワークメイトAIを今すぐ体験してみませんか？
          </motion.h2>
          <motion.p 
            className="text-lg opacity-90 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            無料デモアカウントで機能の一部を試すことができます
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="/demo" className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-300">
              無料デモを試す
            </a>
            <a href="/contact" className="bg-blue-400/30 hover:bg-blue-400/50 text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-300 backdrop-blur-sm">
              詳細を問い合わせる
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
