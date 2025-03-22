
import React from "react";
import { Briefcase } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// Job positions data (moved from JobApplication)
export const jobPositions = {
  "ai-engineer": {
    title: "AIエンジニア",
    department: "テクノロジー部門",
    type: "正社員・業務委託",
  },
  "frontend-developer": {
    title: "フロントエンドデベロッパー",
    department: "プロダクト開発部門",
    type: "正社員・業務委託",
  },
  "uiux-designer": {
    title: "UIUXデザイナー",
    department: "クリエイティブ部門",
    type: "正社員・業務委託",
  },
  "marketing-specialist": {
    title: "マーケティングスペシャリスト",
    department: "マーケティング部門",
    type: "正社員",
  }
};

// Employment type options
export const employmentTypes = [
  { id: "fulltime", label: "正社員" },
  { id: "contract", label: "業務委託" },
  { id: "internship", label: "インターン" }
];

// Form schema
export const jobDetailsSchema = z.object({
  position: z.string().min(1, { message: "職種を選択してください" }),
  employmentType: z.string().min(1, { message: "雇用形態を選択してください" }),
});

export type JobDetailsFormValues = z.infer<typeof jobDetailsSchema>;

interface JobDetailsFieldsProps {
  form: UseFormReturn<any>;
}

const JobDetailsFields = ({ form }: JobDetailsFieldsProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">職種情報</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>応募職種 <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <div className="relative">
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    {...field}
                  >
                    <option value="">職種を選択してください</option>
                    {Object.entries(jobPositions).map(([key, position]) => (
                      <option key={key} value={key}>
                        {position.title}
                      </option>
                    ))}
                  </select>
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="employmentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>雇用形態 <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  {...field}
                >
                  <option value="">雇用形態を選択してください</option>
                  {employmentTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default JobDetailsFields;
