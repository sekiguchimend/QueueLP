
import { Mail, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white shadow-lg"
          >
            <Mail size={32} />
          </motion.div>
          
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent"
          >
            お問い合わせ
          </motion.h1>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              ワークメイトAIについてのご質問や導入に関するご相談など、お気軽にお問い合わせください。
            </p>
            
            <div className="flex items-center justify-center gap-8 mt-4">
              <div className="flex items-center text-indigo-600">
                <Sparkles size={18} className="mr-2" />
                <span className="font-medium">最短翌営業日に回答</span>
              </div>
              <div className="flex items-center text-indigo-600">
                <Users size={18} className="mr-2" />
                <span className="font-medium">専任サポート体制</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
