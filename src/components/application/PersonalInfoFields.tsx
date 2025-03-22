
import React from "react";
import { User, Mail, Phone } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EmailInput } from "@/components/ui/email-input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// Form schema type
export const personalInfoSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z.string().email({ message: "正しいメールアドレスを入力してください" }),
  phone: z.string().optional(),
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;

interface PersonalInfoFieldsProps {
  form: UseFormReturn<any>;
}

const PersonalInfoFields = ({ form }: PersonalInfoFieldsProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">個人情報</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>お名前 <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <div className="relative">
                  <Input 
                    placeholder="山田 太郎" 
                    className="pl-10" 
                    {...field} 
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
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
              <FormLabel>メールアドレス <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <EmailInput 
                  value={field.value} 
                  onChange={field.onChange}
                  placeholder="your-email@example.com" 
                />
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
              <FormLabel>電話番号</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input 
                    placeholder="090-1234-5678" 
                    className="pl-10" 
                    {...field} 
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default PersonalInfoFields;
