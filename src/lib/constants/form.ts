import { z } from "zod";

export const jobDetailsSchema = z.object({
  position: z.string().min(1, { message: "職種を選択してください" }),
  employmentType: z.string().min(1, { message: "雇用形態を選択してください" }),
});

export type JobDetailsFormValues = z.infer<typeof jobDetailsSchema>;

export const personalInfoSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  phone: z.string().min(1, { message: "電話番号を入力してください" }),
  address: z.string().min(1, { message: "住所を入力してください" }),
});

export type PersonalInfoFormValues = z.infer<typeof personalInfoSchema>;

export const coverLetterSchema = z.object({
  coverLetter: z.string().min(1, { message: "志望動機を入力してください" }),
});

export type CoverLetterFormValues = z.infer<typeof coverLetterSchema>; 