
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SubmissionSuccess = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
    >
      <div className="text-center py-8">
        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">応募が完了しました</h2>
        <p className="text-gray-600 mb-6">
          応募内容を確認の上、ご連絡いたします。<br />
          応募いただき、ありがとうございました。
        </p>
        <Button onClick={() => navigate("/recruitment")} className="bg-primary hover:bg-primary/90">
          採用情報に戻る
        </Button>
      </div>
    </motion.div>
  );
};

export default SubmissionSuccess;
