
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-indigo-100 rounded-full text-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BookOpen size={32} />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            ワークメイトAI 機能ガイド
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            ビジネスをさらに効率化するための詳細な機能説明
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
