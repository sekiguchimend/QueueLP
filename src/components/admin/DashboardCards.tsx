
import React, { useEffect, useState } from "react";
import { 
  BarChart, 
  MessageSquare, 
  TrendingUp, 
  Users,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fetchDashboardStatistics } from "@/services/statisticsService";
import { DashboardStatistics } from "@/types/statistics";
import { Skeleton } from "@/components/ui/skeleton";

const DashboardCards = () => {
  const [stats, setStats] = useState<DashboardStatistics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadStatistics = async () => {
      try {
        setIsLoading(true);
        const data = await fetchDashboardStatistics();
        setStats(data);
        setError(null);
      } catch (err) {
        console.error("Failed to load dashboard statistics:", err);
        setError("統計データの読み込みに失敗しました。もう一度お試しください。");
      } finally {
        setIsLoading(false);
      }
    };

    loadStatistics();
  }, []);

  if (error) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="col-span-full">
          <CardContent className="p-6">
            <p className="text-red-500">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading || !stats) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="総アカウント数"
        value={stats.total_accounts.toLocaleString()}
        trend={`${stats.accounts_change_pct > 0 ? '+' : ''}${stats.accounts_change_pct}%`}
        trendUp={stats.accounts_change_pct >= 0}
        description="先月比"
        icon={<Users className="h-5 w-5" />}
        color="bg-blue-500"
      />
      <StatCard
        title="お問い合わせ"
        value={stats.total_inquiries.toLocaleString()}
        trend={`${stats.inquiries_change_pct > 0 ? '+' : ''}${stats.inquiries_change_pct}%`}
        trendUp={stats.inquiries_change_pct >= 0}
        description="先月比"
        icon={<MessageSquare className="h-5 w-5" />}
        color="bg-purple-500"
      />
      <StatCard
        title="アクティブユーザー"
        value={Math.round(stats.active_users).toLocaleString()}
        trend={`${stats.active_users_change_pct > 0 ? '+' : ''}${stats.active_users_change_pct}%`}
        trendUp={stats.active_users_change_pct >= 0}
        description="先週比"
        icon={<TrendingUp className="h-5 w-5" />}
        color="bg-indigo-500"
      />
      <StatCard
        title="AI利用回数"
        value="12,482"
        trend="+18%"
        trendUp={true}
        description="先月比"
        icon={<BarChart className="h-5 w-5" />}
        color="bg-pink-500"
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({
  title,
  value,
  trend,
  trendUp,
  description,
  icon,
  color,
}: StatCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            <div className={`flex items-center mt-1 ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
              {trendUp ? (
                <ArrowUpRight className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDownRight className="h-4 w-4 mr-1" />
              )}
              <span className="text-sm font-medium">
                {trend} {description}
              </span>
            </div>
          </div>
          <div className={`p-3 rounded-full ${color}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCards;
