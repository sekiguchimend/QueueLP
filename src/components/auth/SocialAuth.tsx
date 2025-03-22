
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface SocialAuthProps {
  mode: "login" | "signup";
}

const SocialAuth = ({ mode }: SocialAuthProps) => {
  const isLogin = mode === "login";
  
  return (
    <>
      <div className="relative w-full text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500">または</span>
        </div>
      </div>
      
      <div className="flex flex-col space-y-3 w-full">
        <Button 
          variant="outline" 
          className="w-full border-gray-200 hover:bg-gray-50 hover:border-gray-300" 
          size="lg"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {isLogin ? "Googleでログイン" : "Googleで登録"}
        </Button>
        <Button 
          variant="outline" 
          className="w-full border-gray-200 hover:bg-gray-50 hover:border-gray-300" 
          size="lg"
        >
          <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {isLogin ? (
              <path d="M21.5827 5.84704C20.0734 4.97646 18.506 4.41091 16.9125 4.05202C16.8999 4.05202 16.8873 4.05202 16.8747 4.05941C16.6659 4.48203 16.4319 4.91943 16.2356 5.38899C14.5423 5.0449 12.8238 5.0449 11.1659 5.38899C10.9696 4.91943 10.7356 4.48203 10.5141 4.05941C10.5014 4.05202 10.4889 4.05202 10.4763 4.05202C8.88549 4.41091 7.31809 4.97646 5.80357 5.84704C5.79092 5.84704 5.77827 5.85443 5.76563 5.86182C2.31308 11.1243 1.4587 16.2551 1.88851 21.323C1.88851 21.343 1.90116 21.363 1.92645 21.3778C3.84068 22.8062 5.68798 23.6767 7.50999 24.248C7.52264 24.248 7.53528 24.248 7.54793 24.2406C8.0031 23.5702 8.41025 22.8654 8.7667 22.1233C8.78699 22.0864 8.76934 22.0421 8.73141 22.0347C8.0411 21.7611 7.37549 21.4285 6.73518 21.0443C6.6846 20.9999 6.67196 20.9333 6.71753 20.889C6.83134 20.8004 6.94514 20.7045 7.05895 20.6159C7.08424 20.5937 7.12217 20.5863 7.15245 20.6011C11.0141 22.4278 15.1613 22.4278 19.0229 20.6011C19.0532 20.5863 19.0911 20.5937 19.1164 20.6159C19.2302 20.7119 19.344 20.8004 19.4578 20.889C19.5034 20.9333 19.4908 20.9999 19.4402 21.0443C18.8125 21.4433 18.1343 21.7611 17.444 22.0273C17.4061 22.0347 17.3958 22.0864 17.4061 22.1233C17.7751 22.8654 18.1823 23.5628 18.6248 24.2332C18.6374 24.248 18.6501 24.248 18.6627 24.248C20.4974 23.6767 22.3447 22.8062 24.259 21.3778C24.2843 21.363 24.2969 21.343 24.2969 21.323C24.8109 15.4215 23.4651 10.3277 20.5184 5.86182C20.5057 5.85443 20.4931 5.84704 20.4805 5.84704Z" fill="#5865F2"/>
            ) : (
              <>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M21 11h-4V7h-2v4H9v2h6v4h2v-4h4z" fill="#5E5CE6"/>
                <rect width="20" height="15" x="2" y="3" rx="2" fill="none" stroke="#5E5CE6" strokeWidth="2"/>
              </>
            )}
          </svg>
          {isLogin ? "Microsoftでログイン" : "Microsoftで登録"}
        </Button>
      </div>
      
      <div className="text-center text-sm text-gray-600 pt-4">
        {isLogin ? "アカウントをお持ちでない方は" : "すでにアカウントをお持ちの方は"}
        <Link 
          to={isLogin ? "/signup" : "/login"} 
          className={`${isLogin ? "text-blue-600 hover:text-blue-800" : "text-purple-600 hover:text-purple-800"} hover:underline ml-1`}
        >
          {isLogin ? "新規登録" : "ログイン"}
        </Link>
      </div>
    </>
  );
};

export default SocialAuth;
