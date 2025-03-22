
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Download, Mail, User, Building2, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  company: z.string().min(1, { message: "会社名を入力してください" }),
  phone: z.string().optional(),
});

const DownloadForm = ({ documentId }: { documentId: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, documentId);
    // Handle form submission here - in a real app, this would send the data to a server
    // and then trigger the document download
    
    // Simulate download
    alert("ダウンロードを開始します。ご入力いただいたメールアドレスに資料のリンクが送信されました。");
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-6 shadow-xl max-w-md mx-auto"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-4">資料をダウンロード</h3>
      <p className="text-gray-600 mb-6">
        以下のフォームに必要事項をご入力いただくと、すぐに無料資料をダウンロードいただけます。
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>お名前</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="山田 太郎" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="your@email.com" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>会社名</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="株式会社サンプル" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電話番号（任意）</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="03-1234-5678" 
                      className="pl-10" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full gap-2">
            <Download className="h-4 w-4" />
            今すぐダウンロード
          </Button>
          
          <p className="text-xs text-gray-400 text-center mt-4">
            ご入力いただいた情報は資料のダウンロードおよび関連情報のご提供にのみ使用させていただきます。
            詳しくは<a href="/privacy" className="text-primary hover:underline">プライバシーポリシー</a>をご覧ください。
          </p>
        </form>
      </Form>
    </motion.div>
  );
};

export default DownloadForm;
