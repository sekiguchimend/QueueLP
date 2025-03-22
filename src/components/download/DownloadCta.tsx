
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DownloadCta = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/90 to-accent/90 rounded-3xl px-6 py-16 md:p-16 overflow-hidden relative shadow-xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                他にも多数の資料をご用意しています
              </h2>
              <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
                お客様のビジネスに最適なソリューションをご提案します。
                まずはお気軽にお問い合わせください。
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                "専任コンサルタントによるサポート",
                "業界別カスタマイズプラン",
                "導入後の手厚いフォロー"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white flex items-center"
                >
                  <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 font-medium">
                  <Link to="/contact" className="flex items-center">
                    お問い合わせ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white bg-primary/40 text-white hover:bg-white hover:text-primary transition-all duration-300 font-medium">
                  <Link to="/recruitment">採用情報</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCta;
