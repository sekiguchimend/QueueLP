
import React from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LinkIcon, RefreshCw } from "lucide-react";

interface ArticleBasicInfoFieldsProps {
  generateSlug: () => void;
}

const ArticleBasicInfoFields = ({ generateSlug }: ArticleBasicInfoFieldsProps) => {
  const form = useFormContext();
  
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">タイトル</FormLabel>
            <FormControl>
              <Input 
                placeholder="記事のタイトル" 
                {...field} 
                className="transition-all focus-visible:ring-indigo-500"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel className="text-base font-medium">スラッグ (URL)</FormLabel>
              <div className="relative">
                <FormControl>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input 
                      placeholder="article-slug" 
                      {...field} 
                      className="pl-10 transition-all focus-visible:ring-indigo-500" 
                    />
                  </div>
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="button" 
          variant="outline"
          onClick={generateSlug}
          className="mb-0.5 gap-2 whitespace-nowrap hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
        >
          <RefreshCw size={16} className="animate-spin-once" />
          生成
        </Button>
      </div>
    </div>
  );
};

export default ArticleBasicInfoFields;
