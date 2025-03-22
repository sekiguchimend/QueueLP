
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Building, Eye, EyeOff, Lock, User, UserPlus } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { signupFormSchema, type SignupFormValues } from "@/schemas/auth-schemas";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      company: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = (values: SignupFormValues) => {
    console.log(values);
    toast.success("アカウント登録しています...");
    
    // ダミーの登録処理（実際には認証ロジックを実装）
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">会社名</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="株式会社サンプル"
                    className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    {...field}
                  />
                </FormControl>
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">メールアドレス</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder="your-email@company.com"
                    className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    {...field}
                  />
                </FormControl>
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">パスワード</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    {...field}
                  />
                </FormControl>
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">パスワード（確認）</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="********"
                    className="pl-10 pr-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    {...field}
                  />
                </FormControl>
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm text-gray-700">
                  <span>
                    <Link to="/terms" className="text-purple-600 hover:text-purple-800 hover:underline">利用規約</Link>
                    と
                    <Link to="/privacy" className="text-purple-600 hover:text-purple-800 hover:underline ml-1">プライバシーポリシー</Link>
                    に同意します
                  </span>
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full mt-6 flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700" 
          size="lg"
        >
          <UserPlus className="mr-2 h-5 w-5" />
          無料で登録する
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
