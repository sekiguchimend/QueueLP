
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const AuthLogo = () => {
  return (
    <div className="mb-6 text-center z-10">
      <Link to="/" className="inline-block">
        <div className="flex items-center justify-center mb-2">
          <Sparkles className="h-6 w-6 text-indigo-600 mr-2" />
          <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            ワークメイトAI
          </div>
        </div>
        <p className="text-gray-600 mt-2">AI チャットボットで業務効率化の新しいカタチ</p>
      </Link>
    </div>
  );
};

export default AuthLogo;
