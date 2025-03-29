import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email.trim() || !formData.name.trim()) {
      toast({
        title: "必須項目を入力してください",
        description: "お名前とメールアドレスは必須です",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/request-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      toast({
        title: "送信完了",
        description: "資料をお送りいたしました。ご確認ください。",
        variant: "default"
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "エラーが発生しました",
        description: "しばらく時間をおいて再度お試しください。",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">
        資料請求フォーム
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">お名前 <span className="text-red-500">*</span></label>
          <Input
            type="text"
            placeholder="山田 太郎"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">メールアドレス <span className="text-red-500">*</span></label>
          <Input
            type="email"
            placeholder="example@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">会社名</label>
          <Input
            type="text"
            placeholder="株式会社〇〇"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">ご質問・ご要望</label>
          <Textarea
            placeholder="ご質問やご要望がございましたらご記入ください"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[100px]"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-r-transparent rounded-full"></span>
              送信中...
            </span>
          ) : (
            "資料請求する"
          )}
        </Button>
      </form>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        ※ お客様の個人情報は当社プライバシーポリシーに基づき適切に管理いたします
      </p>
    </motion.div>
  );
};

export default RequestForm; 