
import { Helmet } from "react-helmet-async";
import AuthBackground from "@/components/auth/AuthBackground";
import AuthLogo from "@/components/auth/AuthLogo";
import LoginCard from "@/components/auth/LoginCard";

const Login = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white p-4 sm:p-6 md:p-8">
      <Helmet>
        <title>ログイン | ワークメイトAI</title>
        <meta name="description" content="ワークメイトAIのAIビジネスアシスタントにログイン。業務の効率化と生産性向上をサポートします。" />
        <meta name="keywords" content="ログイン, AI, ビジネスアシスタント, ワークメイトAI" />
      </Helmet>
      
      <AuthBackground />
      <AuthLogo />
      <div className="w-full max-w-md px-4 z-10">
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
