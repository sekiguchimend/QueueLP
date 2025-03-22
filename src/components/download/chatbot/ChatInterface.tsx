
import React from "react";
import { ArrowRight } from "lucide-react";
import { type ChatMessage } from "./types";

interface ChatInterfaceProps {
  messages: ChatMessage[];
}

const ChatInterface = ({ messages }: ChatInterfaceProps) => {
  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message) => (
        <div 
          key={message.id}
          className={`${
            message.isBot 
              ? "self-start max-w-[85%] bg-gray-100 rounded-2xl rounded-tl-sm" 
              : "self-end max-w-[85%] bg-primary/10 text-gray-800 rounded-2xl rounded-br-sm"
          } p-4`}
        >
          <p className="whitespace-pre-line">{message.content}</p>
        </div>
      ))}
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="メッセージを入力..."
            className="flex-grow bg-transparent border-none focus:outline-none text-sm"
            disabled
          />
          <button className="ml-2 p-1 rounded-full bg-primary/10 text-primary" disabled>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">これはデモです。実際のチャットボットをお試しいただくには、ダウンロードしてください。</p>
      </div>
    </div>
  );
};

export default ChatInterface;
