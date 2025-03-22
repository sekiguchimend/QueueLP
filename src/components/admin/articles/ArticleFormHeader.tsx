
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ArticleFormHeaderProps {
  isEditing: boolean;
}

const ArticleFormHeader = ({ isEditing }: ArticleFormHeaderProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center gap-4 mb-6">
      <Button 
        variant="outline" 
        onClick={() => navigate("/admin/articles")}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        戻る
      </Button>
      <div>
        <h1 className="text-2xl font-bold">{isEditing ? "記事を編集" : "記事を作成"}</h1>
        <p className="text-gray-600">ヘルプセンターの記事情報を入力してください</p>
      </div>
    </div>
  );
};

export default ArticleFormHeader;
