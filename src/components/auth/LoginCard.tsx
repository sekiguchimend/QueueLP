
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "./LoginForm";

const LoginCard = () => {
  return (
    <Card className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden mx-auto">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600"></div>
      <CardHeader className="space-y-2 pb-4 px-6 sm:px-8">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center text-gray-800">アカウントにログイン</CardTitle>
        <CardDescription className="text-center text-gray-600 text-sm sm:text-base">
          AI Business Assistantへようこそ
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 sm:px-8 pb-8">
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
