
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BriefcaseBusiness, Building, MapPin, CalendarClock } from "lucide-react";
import JobBasicInfo from "./JobBasicInfo";

interface JobDetailHeaderProps {
  job: {
    title: string;
    department: string;
    type: string;
    location: string;
    schedule: string;
  };
}

const JobDetailHeader = ({ job }: JobDetailHeaderProps) => {
  return (
    <section className="bg-primary/5 pt-24 pb-16 relative overflow-hidden">
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
        <Link to="/recruitment" className="inline-flex items-center text-primary hover:underline mb-6 group">
          <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" />
          採用情報に戻る
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{job.title}</h1>
          
          <JobBasicInfo job={job} />
        </motion.div>
      </div>
    </section>
  );
};

export default JobDetailHeader;
