
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary/5 py-32">
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
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              <span className="block text-primary">一緒に</span>
              <span className="block">未来を創造しましょう</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              私たちは常に情熱的で創造的な人材を求めています。あなたのスキルと情熱を活かして、革新的なAIソリューションを一緒に作り上げましょう。<span className="font-medium text-primary">正社員だけでなく、業務委託での参画も歓迎しています。</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg group">
                <a href="#positions">
                  募集ポジションを見る
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <a href="#about-us">企業について</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="チームで働く" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">私たちのチームに参加しませんか？</h3>
                <p className="text-white/80">多様性と創造性を大切にする環境で働く</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
