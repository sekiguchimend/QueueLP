
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

interface WorkflowItemProps {
  number: string;
  title: string;
  description: string;
  isRight: boolean;
}

const WorkflowItem = ({ number, title, description, isRight }: WorkflowItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Custom variants based on position (left or right)
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: isRight ? 50 : -50,
      y: 20,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: { 
        duration: 0.7,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };
  
  // Subtle different colors for left vs right items
  const bgColor = isRight ? "bg-blue-50/30" : "bg-indigo-50/30";
  const borderColor = isRight ? "border-blue-100" : "border-indigo-100";
  const numberBg = isRight ? "bg-blue-500" : "bg-indigo-500";

  return (
    <div className="relative" ref={ref}>
      {/* Center number circle */}
      <motion.div 
        className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full ${numberBg} text-white flex items-center justify-center font-bold z-10`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.2,
          type: "spring",
          stiffness: 200 
        }}
      >
        {number}
      </motion.div>
      
      {/* Content box */}
      <motion.div 
        className={`relative w-full md:w-5/12 ${bgColor} p-6 rounded-xl border ${borderColor} shadow-md ${isRight ? 'md:ml-auto' : 'md:mr-auto'}`}
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Decorative element */}
        <motion.div 
          className={`absolute ${isRight ? '-left-2' : '-right-2'} top-1/2 transform -translate-y-1/2 text-primary`}
          initial={{ opacity: 0, x: isRight ? -10 : 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? -10 : 10 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <ArrowRight className={`w-4 h-4 ${isRight ? 'rotate-180' : ''}`} />
        </motion.div>
        
        <div className="flex items-start gap-3">
          <motion.div 
            className="mt-1 text-green-500"
            variants={itemVariants}
          >
            <CheckCircle className="w-5 h-5" />
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-3 text-gray-900"
              variants={itemVariants}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-gray-600"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Background decoration */}
        <motion.div 
          className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-primary/5 z-0"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default WorkflowItem;
