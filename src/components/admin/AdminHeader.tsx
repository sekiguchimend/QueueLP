
import React from "react";
import { Bell, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminHeader = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("userEmail") || "admin@queue-ai.co.jp";

  const handleLogout = () => {
    // 実際にはログアウト処理を実装
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    toast.success("ログアウトしました");
    navigate("/login");
  };

  return (
    <header className="border-b bg-white px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-2 sm:gap-4">
        <h1 className="font-bold text-lg sm:text-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent truncate">
          管理者ダッシュボード
        </h1>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-purple-100 text-purple-600">
            <User className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">管理者</p>
            <p className="text-xs text-gray-500">{userEmail}</p>
          </div>
        </div>
        
        <Button variant="ghost" size="icon" onClick={handleLogout} className="h-8 w-8 sm:h-10 sm:w-10">
          <LogOut className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
