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
  const bgColor = isRight ? "bg-blue-50" : "bg-indigo-50";
  const borderColor = isRight ? "border-blue-100" : "border-indigo-100";
  const numberBg = isRight ? "bg-blue-500" : "bg-indigo-500";

  return (
    <div className="relative" ref={ref}>
      {/* Center number circle */}
      <motion.div 
        className={`absolute left-1/2 transform -translate-x-1/2 -top-6 sm:-top-7 w-12 h-12 sm:w-14 sm:h-14 rounded-full ${numberBg} text-white flex items-center justify-center text-base sm:text-lg font-bold z-10 shadow-md`}
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
        className={`relative mt-8 sm:mt-10 w-[90%] sm:w-[95%] md:w-[45%] ${bgColor} p-5 sm:p-6 md:p-7 rounded-2xl border-2 ${borderColor} shadow-lg ${isRight ? 'ml-auto md:ml-auto' : 'mr-auto md:mr-auto'}`}
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Decorative element */}
        <motion.div 
          className={`absolute ${isRight ? '-left-3' : '-right-3'} top-1/2 transform -translate-y-1/2 text-primary hidden md:block`}
          initial={{ opacity: 0, x: isRight ? -10 : 10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? -10 : 10 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <ArrowRight className={`w-5 h-5 ${isRight ? 'rotate-180' : ''}`} />
        </motion.div>
        
        <div className="flex items-start gap-3 sm:gap-4">
          <motion.div 
            className="mt-1 text-green-500 flex-shrink-0"
            variants={itemVariants}
          >
            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
          
          <div>
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-2.5 sm:mb-3 text-gray-900"
              variants={itemVariants}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Background decoration */}
        <motion.div 
          className="absolute -bottom-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 z-0"
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
