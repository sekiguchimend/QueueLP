
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ApplicationHeaderProps {
  jobTitle: string;
}

const ApplicationHeader = ({ jobTitle }: ApplicationHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-primary/5 py-16">
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
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="mb-4">
          <Button variant="ghost" onClick={() => navigate(-1)} className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition group-hover:-translate-x-1" />
            戻る
          </Button>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">応募フォーム</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            {jobTitle}への応募をご希望いただき、ありがとうございます。以下のフォームにご記入ください。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationHeader;
