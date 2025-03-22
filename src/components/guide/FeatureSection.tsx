
import { motion } from "framer-motion";
import React from "react";
import { Sparkles } from "lucide-react";

interface FeatureSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureSection = ({ icon, title, description }: FeatureSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
      }
    },
    hover: { 
      y: -8,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="relative flex items-start space-x-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {/* Subtle background decoration */}
      <motion.div 
        className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-blue-50/50 opacity-60"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative mt-1 bg-blue-50 p-3 rounded-lg text-primary z-10">
        <motion.div
          whileHover={{ 
            rotate: [0, -10, 10, -5, 0],
            transition: { duration: 0.5 } 
          }}
        >
          {icon}
        </motion.div>
        <motion.div 
          className="absolute top-0 right-0 -mr-1 -mt-1"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Sparkles size={12} className="text-yellow-400" />
        </motion.div>
      </div>
      
      <div className="relative z-10">
        <motion.h3 
          className="text-lg font-medium mb-2 text-gray-900"
          variants={childVariants}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          variants={childVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
