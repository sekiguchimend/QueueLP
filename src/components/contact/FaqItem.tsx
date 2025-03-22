
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-indigo-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="font-bold text-lg text-gray-800">{question}</h3>
        <span className={`text-indigo-500 flex-shrink-0 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} />
        </span>
      </button>
      
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
