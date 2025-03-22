
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const ArticleContentFields = () => {
  const form = useFormContext();
  
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="excerpt"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">抜粋</FormLabel>
            <FormDescription className="text-sm text-gray-500">
              記事の簡単な説明（検索結果などに表示されます）
            </FormDescription>
            <FormControl>
              <Textarea
                placeholder="記事の簡単な説明（200文字以内）"
                className="resize-none min-h-[100px] transition-all focus-visible:ring-amber-500"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="content"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-medium">本文</FormLabel>
            <FormDescription className="text-sm text-gray-500">
              記事の本文を入力してください
            </FormDescription>
            <Alert className="mb-3 bg-blue-50 border-blue-100">
              <InfoIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
              <AlertDescription className="text-blue-700 text-sm">
                段落や改行はそのまま保持されます。空行で段落分けをすることができます。
              </AlertDescription>
            </Alert>
            <FormControl>
              <Textarea
                placeholder="記事の本文を入力してください"
                className="min-h-[300px] transition-all focus-visible:ring-amber-500"
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

export default ArticleContentFields;
