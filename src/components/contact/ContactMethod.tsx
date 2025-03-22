
import React from "react";

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
  contact: string;
}

const ContactMethod = ({ icon, title, detail, contact }: ContactMethodProps) => (
  <div className="flex items-start p-5 rounded-xl transition-all duration-300 hover:bg-indigo-50/50 hover:shadow-sm group">
    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-lg mr-4 text-indigo-600 shadow-sm group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{detail}</p>
      <p className="font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">{contact}</p>
    </div>
  </div>
);

export default ContactMethod;
