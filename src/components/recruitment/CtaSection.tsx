
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary/10 mix-blend-multiply"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              私たちと一緒に未来を創りませんか？
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              あなたのスキルと情熱を活かせる場所がここにあります。正社員でも業務委託でも、あなたに合った形で新しい挑戦を始めましょう。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="shadow-lg bg-primary hover:bg-primary/90 text-white">
                <Link to="/apply">応募する</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <Link to="/contact">詳細を問い合わせる</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
