
import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for user activity
const mockUserActivityData = [
  { name: "田中太郎", department: "営業部", questions: 45, chats: 38, duration: 125 },
  { name: "佐藤花子", department: "人事部", questions: 32, chats: 27, duration: 98 },
  { name: "山田健太", department: "技術部", questions: 78, chats: 60, duration: 210 },
  { name: "伊藤誠", department: "技術部", questions: 65, chats: 42, duration: 175 },
  { name: "鈴木雅子", department: "マーケティング部", questions: 55, chats: 50, duration: 160 },
  { name: "中村智也", department: "営業部", questions: 28, chats: 25, duration: 85 },
  { name: "小林れい", department: "法務部", questions: 40, chats: 36, duration: 115 },
  { name: "加藤裕太", department: "経理部", questions: 25, chats: 20, duration: 78 }
];

// Department aggregated data
const departmentData = [
  { name: "営業部", questions: 73, chats: 63, duration: 210 },
  { name: "人事部", questions: 32, chats: 27, duration: 98 },
  { name: "技術部", questions: 143, chats: 102, duration: 385 },
  { name: "マーケティング部", questions: 55, chats: 50, duration: 160 },
  { name: "法務部", questions: 40, chats: 36, duration: 115 },
  { name: "経理部", questions: 25, chats: 20, duration: 78 }
];

const UserActivityChart = () => {
  const [period, setPeriod] = useState("month");
  const [view, setView] = useState("user");
  const [metric, setMetric] = useState("questions");
  
  const data = view === "user" ? mockUserActivityData : departmentData;
  
  const getChartTitle = () => {
    const metricLabel = metric === "questions" ? "質問数" : 
                         metric === "chats" ? "チャットセッション数" : "利用時間（分）";
    const periodLabel = period === "week" ? "週間" : 
                         period === "month" ? "月間" : "年間";
    return `${periodLabel}${metricLabel}`;
  };
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-sm">
          <p className="font-medium">{`${label}`}</p>
          <p className="text-sm">
            {metric === "questions" ? "質問数: " : 
             metric === "chats" ? "チャットセッション: " : "利用時間: "}
            <span className="font-medium">{payload[0].value}</span>
            {metric === "duration" ? "分" : ""}
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <h2 className="text-xl font-semibold">{getChartTitle()}</h2>
        <div className="flex gap-2">
          <Tabs value={view} onValueChange={setView} className="w-auto">
            <TabsList>
              <TabsTrigger value="user">ユーザー別</TabsTrigger>
              <TabsTrigger value="department">部署別</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Select value={metric} onValueChange={setMetric}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="指標を選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="questions">質問数</SelectItem>
              <SelectItem value="chats">チャットセッション</SelectItem>
              <SelectItem value="duration">利用時間</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[110px]">
              <SelectValue placeholder="期間" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">週間</SelectItem>
              <SelectItem value="month">月間</SelectItem>
              <SelectItem value="year">年間</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar 
                  dataKey={metric} 
                  name={metric === "questions" ? "質問数" : 
                        metric === "chats" ? "チャットセッション" : "利用時間（分）"} 
                  fill="#4f46e5" 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="合計質問数" 
          value={data.reduce((acc, curr) => acc + curr.questions, 0)} 
          trend={"+12%"} 
          trendDirection="up" 
        />
        <StatCard 
          title="チャットセッション" 
          value={data.reduce((acc, curr) => acc + curr.chats, 0)} 
          trend={"+8%"} 
          trendDirection="up" 
        />
        <StatCard 
          title="平均利用時間/ユーザー" 
          value={Math.round(data.reduce((acc, curr) => acc + curr.duration, 0) / data.length)} 
          unit="分"
          trend={"+15%"} 
          trendDirection="up" 
        />
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: number;
  unit?: string;
  trend: string;
  trendDirection: "up" | "down";
}

const StatCard = ({ title, value, unit = "", trend, trendDirection }: StatCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <div className="flex items-baseline">
            <h3 className="text-2xl font-bold">
              {value.toLocaleString()}{unit && unit}
            </h3>
            <span className={`ml-2 text-xs font-medium ${
              trendDirection === "up" ? "text-green-600" : "text-red-600"
            }`}>
              {trend}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserActivityChart;
