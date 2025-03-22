
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Save, X, ArrowLeft } from "lucide-react";

interface ArticleFormActionsProps {
  isEditing: boolean;
  loading: boolean;
}

const ArticleFormActions = ({ isEditing, loading }: ArticleFormActionsProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-end gap-4">
      <Button 
        type="button" 
        variant="outline" 
        onClick={() => navigate("/admin/articles")}
        className="gap-2"
      >
        <ArrowLeft size={16} />
        戻る
      </Button>
      <Button 
        type="button" 
        variant="ghost" 
        onClick={() => navigate("/admin/articles")}
        className="gap-2"
      >
        <X size={16} />
        キャンセル
      </Button>
      <Button 
        type="submit" 
        className="gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all" 
        disabled={loading}
      >
        <Save size={16} />
        {loading ? '処理中...' : isEditing ? "更新する" : "作成する"}
      </Button>
    </div>
  );
};

export default ArticleFormActions;
