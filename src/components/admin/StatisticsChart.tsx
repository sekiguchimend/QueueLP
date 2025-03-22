
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchStatisticsHistory } from "@/services/statisticsService";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const StatisticsChart = () => {
  const [statHistory, setStatHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState("30");
  const [metric, setMetric] = useState("total_accounts");

  useEffect(() => {
    const loadStatisticsHistory = async () => {
      try {
        setIsLoading(true);
        const data = await fetchStatisticsHistory(parseInt(period));
        // Sort by date ascending for the chart
        const sortedData = [...data].sort((a, b) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        setStatHistory(sortedData);
        setError(null);
      } catch (err) {
        console.error("Failed to load statistics history:", err);
        setError("統計履歴の読み込みに失敗しました。もう一度お試しください。");
        toast.error("統計履歴の読み込みに失敗しました。もう一度お試しください。");
      } finally {
        setIsLoading(false);
      }
    };

    loadStatisticsHistory();
  }, [period]);

  const getMetricDisplayName = (metricKey: string) => {
    const metricMap: Record<string, string> = {
      'total_accounts': '総アカウント数',
      'total_inquiries': 'お問い合わせ数',
      'active_users': 'アクティブユーザー'
    };
    return metricMap[metricKey] || metricKey;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader className="pb-0">
          <Skeleton className="h-7 w-48" />
        </CardHeader>
        <CardContent className="p-6">
          <Skeleton className="h-80 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>{getMetricDisplayName(metric)}の推移</CardTitle>
        <div className="flex items-center gap-2">
          <Select value={metric} onValueChange={setMetric}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="指標を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="total_accounts">総アカウント数</SelectItem>
              <SelectItem value="total_inquiries">お問い合わせ数</SelectItem>
              <SelectItem value="active_users">アクティブユーザー</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="期間" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7日間</SelectItem>
              <SelectItem value="14">14日間</SelectItem>
              <SelectItem value="30">30日間</SelectItem>
              <SelectItem value="60">60日間</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-80">
          {statHistory.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={statHistory}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={formatDate}
                  interval={Math.ceil(statHistory.length / 10)} 
                />
                <YAxis />
                <Tooltip 
                  labelFormatter={(label) => formatDate(label)}
                  formatter={(value) => [value, getMetricDisplayName(metric)]}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey={metric} 
                  name={getMetricDisplayName(metric)}
                  stroke="#4f46e5" 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-gray-500">データがありません</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatisticsChart;
