
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Home, 
  MessageSquare, 
  Settings, 
  Users, 
  Database,
  BookOpen,
  FileText
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  
  // Check if the current path matches the link path
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };
  
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4">
      <div className="mb-8 flex items-center gap-2">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 h-8 rounded-md flex items-center justify-center">
          <span className="font-bold text-white">Q</span>
        </div>
        <h2 className="text-xl font-bold">Queue Admin</h2>
      </div>
      
      <nav className="space-y-1">
        <NavItem 
          href="/admin" 
          icon={<Home className="h-5 w-5" />} 
          label="ダッシュボード" 
          active={isActive("/admin") && !isActive("/admin/")} 
        />
        <NavItem 
          href="/admin/contacts" 
          icon={<MessageSquare className="h-5 w-5" />} 
          label="お問い合わせ" 
          active={isActive("/admin/contacts")} 
        />
        <NavItem 
          href="/admin/articles" 
          icon={<FileText className="h-5 w-5" />} 
          label="記事管理" 
          active={isActive("/admin/articles")} 
        />
        <NavItem 
          href="/admin/users" 
          icon={<Users className="h-5 w-5" />} 
          label="ユーザー管理" 
          active={isActive("/admin/users")} 
        />
        <NavItem 
          href="/admin/analytics" 
          icon={<BarChart3 className="h-5 w-5" />} 
          label="アナリティクス" 
          active={isActive("/admin/analytics")} 
        />
        <NavItem 
          href="/admin/knowledge" 
          icon={<BookOpen className="h-5 w-5" />} 
          label="知識ベース管理" 
          active={isActive("/admin/knowledge")} 
        />
        <NavItem 
          href="/admin/settings" 
          icon={<Settings className="h-5 w-5" />} 
          label="設定" 
          active={isActive("/admin/settings")} 
        />
        <div className="mt-6 border-t border-gray-700 pt-4">
          <Link to="/" className="text-gray-400 hover:text-white text-sm flex items-center gap-2 p-2 rounded-md">
            <span>サイトに戻る</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem = ({ href, icon, label, active }: NavItemProps) => {
  return (
    <Link
      to={href}
      className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
        active
          ? "bg-indigo-600 text-white"
          : "text-gray-300 hover:text-white hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default AdminSidebar;
