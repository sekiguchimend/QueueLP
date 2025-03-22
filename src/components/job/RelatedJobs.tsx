
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, ChevronRight } from "lucide-react";

interface JobPosition {
  title: string;
  type: string;
  department: string;
  location: string;
  schedule: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
}

interface RelatedJobsProps {
  jobPositions: Record<string, JobPosition>;
  currentId: string;
}

const RelatedJobs = ({ jobPositions, currentId }: RelatedJobsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">関連する募集ポジション</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(jobPositions)
            .filter(([key]) => key !== currentId)
            .slice(0, 3)
            .map(([key, position], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Building className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{position.type}</span>
                  </div>
                  <Link to={`/job-details/${key}`} className="text-primary font-medium inline-flex items-center group/link">
                    詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedJobs;
