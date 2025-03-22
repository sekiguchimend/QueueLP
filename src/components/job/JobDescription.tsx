
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface JobDescriptionProps {
  job: {
    description: string;
    responsibilities: string[];
  };
}

const JobDescription = ({ job }: JobDescriptionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">職務内容</h2>
      <p className="text-gray-700 mb-6">{job.description}</p>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">主な責任</h3>
      <ul className="space-y-2">
        {job.responsibilities.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default JobDescription;
