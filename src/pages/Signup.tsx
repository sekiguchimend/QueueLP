
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AuthLogo from "@/components/auth/AuthLogo";
import AuthBackground from "@/components/auth/AuthBackground";
import SignupForm from "@/components/auth/SignupForm";
import SocialButtons from "@/components/auth/SocialButtons";

const Signup = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4">
      <Helmet>
        <title>新規アカウント登録 | ワークメイトAI - AIチャットボット</title>
        <meta name="description" content="ワークメイトAIのAIチャットボットソリューションの新規アカウント登録ページです。無料トライアルを今すぐ開始できます。" />
        <meta name="keywords" content="アカウント登録, AIチャットボット, 無料トライアル, ワークメイトAI, 業務効率化" />
        <meta property="og:title" content="新規アカウント登録 | ワークメイトAI" />
        <meta property="og:description" content="ワークメイトAIのAIチャットボットソリューションの新規アカウント登録ページです。無料トライアルを今すぐ開始できます。" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <AuthBackground />
      <AuthLogo />

      <Card className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-xl border-0 relative z-10 rounded-xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <CardHeader className="space-y-2 pb-4">
          <CardTitle className="text-2xl font-bold text-center text-gray-800">新規アカウント登録</CardTitle>
          <CardDescription className="text-center text-gray-600">
            無料トライアルを開始しましょう
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 pt-2">
          <SocialButtons />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
