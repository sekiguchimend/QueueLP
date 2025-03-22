
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { type ChatMessage } from "./types";

interface ChatExampleCardProps {
  title: string;
  messages: ChatMessage[];
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ChatExampleCard = ({ 
  title, 
  messages, 
  isActive, 
  onClick,
  index
}: ChatExampleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div 
        onClick={onClick}
        className={`p-5 rounded-xl cursor-pointer transition-all duration-300 ${
          isActive 
            ? "bg-primary/10 border-2 border-primary" 
            : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
        }`}
      >
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{messages[0].content}</p>
        <div className="mt-3 flex items-center text-xs text-gray-500">
          <MessageSquare className="h-3 w-3 mr-1" />
          <span>サンプル会話を見る</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatExampleCard;
