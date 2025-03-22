
import React from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CATEGORIES = [
  "はじめに",
  "チャット機能",
  "ドキュメント管理",
  "タスク管理",
  "トラブルシューティング",
  "管理者向け",
  "その他"
];

const ArticleCategoryField = () => {
  const form = useFormContext();
  
  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem>
          <FormLabel>カテゴリ</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value}
            value={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="カテゴリを選択" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {CATEGORIES.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ArticleCategoryField;
