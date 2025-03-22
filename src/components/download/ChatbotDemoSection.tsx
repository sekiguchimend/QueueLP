
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { CHAT_EXAMPLES } from "./chatbot/types";
import ChatExampleCard from "./chatbot/ChatExampleCard";
import ChatInterface from "./chatbot/ChatInterface";
import ChatbotPreview from "./chatbot/ChatbotPreview";
import ChatbotFeatures from "./chatbot/ChatbotDemo";

const ChatbotDemoSection = () => {
  const [activeChatId, setActiveChatId] = useState(CHAT_EXAMPLES[0].id);
  const isMobile = useIsMobile();
  
  const activeChat = CHAT_EXAMPLES.find(chat => chat.id === activeChatId) || CHAT_EXAMPLES[0];

  return (
    <section id="chatbot-demo" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ワークメイトAIで業務を効率化</h2>
          <p className="text-xl text-gray-600">
            ワークメイトAIチャットボットは、様々な業務シーンであなたをサポート。
            メールアドレスを登録するだけで、無料トライアル版をダウンロードできます。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            {CHAT_EXAMPLES.map((chat, index) => (
              <ChatExampleCard 
                key={chat.id}
                title={chat.title}
                messages={chat.messages}
                isActive={chat.id === activeChatId}
                onClick={() => setActiveChatId(chat.id)}
                index={index}
              />
            ))}
            
            {isMobile ? (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="w-full mt-6">
                    チャットボットを体験する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="px-4 pb-6 pt-4">
                  <div className="mt-4">
                    <ChatInterface messages={activeChat.messages} />
                  </div>
                </DrawerContent>
              </Drawer>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full mt-6">
                    チャットボットを体験する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>ワークメイトAIチャットボット</DialogTitle>
                  </DialogHeader>
                  <ChatInterface messages={activeChat.messages} />
                </DialogContent>
              </Dialog>
            )}
          </div>
          
          <div className="lg:col-span-8 hidden lg:block">
            <ChatbotPreview messages={activeChat.messages} />
          </div>
        </div>
        
        <ChatbotFeatures />
      </div>
    </section>
  );
};

export default ChatbotDemoSection;
