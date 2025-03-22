
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "一般的なお問い合わせ",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Supabaseにデータを送信
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            subject: formData.subject,
            message: formData.message
          }
        ]);
      
      if (error) {
        console.error('お問い合わせの送信中にエラーが発生しました:', error);
        toast({
          title: "エラーが発生しました",
          description: "お問い合わせの送信に失敗しました。後ほど再度お試しください。",
          variant: "destructive"
        });
      } else {
        toast({
          title: "お問い合わせを受け付けました",
          description: "担当者からの返信をお待ちください。",
        });
        
        // フォームをリセット
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "一般的なお問い合わせ",
          message: ""
        });
      }
    } catch (error) {
      console.error('予期せぬエラーが発生しました:', error);
      toast({
        title: "エラーが発生しました",
        description: "お問い合わせの送信に失敗しました。後ほど再度お試しください。",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-8">お問い合わせフォーム</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="山田 太郎"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@company.jp"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            会社名
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="株式会社ワークメイト"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ種別 <span className="text-red-500">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="一般的なお問い合わせ">一般的なお問い合わせ</option>
            <option value="料金プランについて">料金プランについて</option>
            <option value="導入に関するご相談">導入に関するご相談</option>
            <option value="技術的なご質問">技術的なご質問</option>
            <option value="その他">その他</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="お問い合わせ内容をご記入ください"
            rows={6}
          />
        </div>
        
        <div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>送信中...</>
            ) : (
              <>
                送信する
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
