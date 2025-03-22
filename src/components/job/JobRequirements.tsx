
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface JobRequirementsProps {
  job: {
    requirements: string[];
    preferred: string[];
  };
}

const JobRequirements = ({ job }: JobRequirementsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">応募要件</h2>
      <h3 className="text-xl font-bold text-gray-900 mb-3">必須条件</h3>
      <ul className="space-y-2 mb-6">
        {job.requirements.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">歓迎条件</h3>
      <ul className="space-y-2">
        {job.preferred.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default JobRequirements;
