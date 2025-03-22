
import React from "react";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// Form schema
export const coverLetterSchema = z.object({
  coverLetter: z.string().min(10, { message: "自己PRは10文字以上で入力してください" }),
});

export type CoverLetterFormValues = z.infer<typeof coverLetterSchema>;

interface CoverLetterFieldProps {
  form: UseFormReturn<any>;
}

const CoverLetterField = ({ form }: CoverLetterFieldProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">自己PR <span className="text-red-500">*</span></h2>
      <FormField
        control={form.control}
        name="coverLetter"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                placeholder="あなたのスキル、経験、当社への志望動機などをご記入ください。"
                className="min-h-[200px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CoverLetterField;
