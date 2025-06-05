import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ServicePageLayoutProps {
  children: React.ReactNode;
  title: string;
  updatedDate?: string;
}

const ServicePageLayout = ({ children, title, updatedDate }: ServicePageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
            </div>
            
            <div className="p-6 sm:p-8 md:p-10 prose prose-gray max-w-none prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-headings:font-bold prose-headings:tracking-tight prose-sm sm:prose-base">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout; 