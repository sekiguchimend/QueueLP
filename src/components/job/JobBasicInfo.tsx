
import React from "react";
import { BriefcaseBusiness, Building, MapPin, CalendarClock } from "lucide-react";

interface JobBasicInfoProps {
  job: {
    department: string;
    type: string;
    location: string;
    schedule: string;
  };
}

const JobBasicInfo = ({ job }: JobBasicInfoProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="bg-white rounded-lg px-4 py-2 flex items-center shadow-sm">
        <BriefcaseBusiness className="h-5 w-5 text-primary mr-2" />
        <span>{job.department}</span>
      </div>
      <div className="bg-white rounded-lg px-4 py-2 flex items-center shadow-sm">
        <Building className="h-5 w-5 text-primary mr-2" />
        <span>{job.type}</span>
      </div>
      <div className="bg-white rounded-lg px-4 py-2 flex items-center shadow-sm">
        <MapPin className="h-5 w-5 text-primary mr-2" />
        <span>{job.location}</span>
      </div>
      <div className="bg-white rounded-lg px-4 py-2 flex items-center shadow-sm">
        <CalendarClock className="h-5 w-5 text-primary mr-2" />
        <span>{job.schedule}</span>
      </div>
    </div>
  );
};

export default JobBasicInfo;
