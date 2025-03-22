
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2, AlertCircle } from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import { toast } from 'sonner';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { supabase } from '@/integrations/supabase/client';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

const formSchema = z.object({
  email: z.string().email({ message: "正しいメールアドレスを入力してください" }),
  password: z.string().min(8, {
    message: "パスワードは8文字以上で入力してください",
  }),
})

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [signupMode, setSignupMode] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const { signIn } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setAuthError(null);
    
    try {
      if (signupMode) {
        console.log("Attempting to sign up with:", values.email);
        // Create a new user account
        const { data, error: signUpError } = await supabase.auth.signUp({
          email: values.email,
          password: values.password,
        });
        
        if (signUpError) {
          console.error("Sign up error:", signUpError);
          if (signUpError.message.includes("already") || signUpError.message.includes("exists")) {
            setAuthError("このメールアドレスは既に登録されています。ログインしてください。");
          } else {
            setAuthError(signUpError.message || "アカウント作成に失敗しました。再度お試しください。");
          }
          throw signUpError;
        }
        
        toast.success("アカウントを作成しました", {
          description: "ログインしてください",
        });
        
        setSignupMode(false);
      } else {
        // Log in with existing account
        console.log("Attempting to log in with:", values.email);
        try {
          const result = await signIn(values.email, values.password);
          if (result && result.user) {
            console.log("Login successful for user:", result.user.email);
            toast.success("ログインに成功しました");
          } else {
            // This shouldn't happen due to error handling in signIn, but just in case
            console.error("No user returned from signIn but no error thrown");
            setAuthError("認証に失敗しました。再度お試しください。");
          }
        } catch (error: any) {
          console.error("Login error:", error);
          
          // Check for specific error types
          if (error.code === "invalid_credentials" || error.message?.includes("Invalid login credentials")) {
            setAuthError("メールアドレスまたはパスワードが間違っています。アカウントをお持ちでない場合は、新規登録してください。");
          } else {
            setAuthError(error.message || "ログインに失敗しました。再度お試しください。");
          }
          toast.error("ログインに失敗しました");
        }
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      
      // Handle specific error codes
      if (error.code === "invalid_credentials") {
        setAuthError("メールアドレスまたはパスワードが間違っています。アカウントをお持ちでない場合は、新規登録してください。");
      } else if (error.code === "user_already_exists") {
        setAuthError("このメールアドレスは既に登録されています。ログインしてください。");
        setSignupMode(false);
      } else {
        setAuthError(error.message || "認証に失敗しました。再度お試しください。");
      }
      
      toast.error("認証に失敗しました", {
        description: error.message || "再度お試しください",
      });
    } finally {
      setLoading(false);
    }
  }

  const toggleMode = () => {
    setSignupMode(!signupMode);
    setAuthError(null);
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {authError && (
          <Alert variant="destructive" className="mb-4 bg-red-50">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>エラー</AlertTitle>
            <AlertDescription>{authError}</AlertDescription>
          </Alert>
        )}
        
        <EmailInput 
          name="email" 
          label="メールアドレス" 
        />
        
        <PasswordInput 
          name="password" 
          label="パスワード" 
        />
        
        <div>
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {signupMode ? '登録中...' : 'ログイン中...'}</>
            ) : (
              signupMode ? '新規登録' : 'ログイン'
            )}
          </Button>
        </div>
        
        <div className="text-center text-sm text-gray-600">
          {signupMode ? (
            <>アカウントをお持ちですか？ </>
          ) : (
            <>アカウントをお持ちでないですか？ </>
          )}
          <button 
            type="button"
            onClick={toggleMode}
            className="font-medium text-primary hover:underline"
          >
            {signupMode ? 'ログイン' : '新規登録'}
          </button>
        </div>
        
        <div className="text-center text-xs text-gray-500 mt-4">
          <p>テスト用アカウントをお持ちでない場合は「新規登録」から作成してください。</p>
          <p>登録後、すぐにログイン可能です。</p>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
