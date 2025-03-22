
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface LegalPageLayoutProps {
  children: React.ReactNode;
  title: string;
  updatedDate?: string;
}

const LegalPageLayout = ({ children, title, updatedDate }: LegalPageLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-4 sm:mb-6 transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="relative group-hover:pl-1 transition-all duration-200">ホームに戻る</span>
          </Link>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
              {updatedDate && (
                <p className="text-gray-500 mt-2 text-sm">最終更新日: {updatedDate}</p>
              )}
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

export default LegalPageLayout;
