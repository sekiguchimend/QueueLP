
import React from "react";
import ChatInterface from "./ChatInterface";
import { type ChatMessage } from "./types";

interface ChatbotPreviewProps {
  messages: ChatMessage[];
}

const ChatbotPreview = ({ messages }: ChatbotPreviewProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-primary text-white p-4 flex items-center">
        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
        <span className="ml-2 text-sm font-medium">ワークメイトAIチャット</span>
      </div>
      <div className="p-6 h-[480px] overflow-y-auto">
        <ChatInterface messages={messages} />
      </div>
    </div>
  );
};

export default ChatbotPreview;
