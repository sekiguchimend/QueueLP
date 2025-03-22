
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for question categories
const questionCategories = [
  { name: "製品情報", value: 35 },
  { name: "技術サポート", value: 25 },
  { name: "社内規定", value: 15 },
  { name: "人事関連", value: 10 },
  { name: "IT環境", value: 8 },
  { name: "その他", value: 7 }
];

// Mock data for question sentiment
const questionSentiment = [
  { name: "ポジティブ", value: 40 },
  { name: "ニュートラル", value: 45 },
  { name: "ネガティブ", value: 15 }
];

// Mock data for frequent keywords
const frequentKeywords = [
  { keyword: "製品マニュアル", count: 87 },
  { keyword: "休暇申請", count: 65 },
  { keyword: "サーバー障害", count: 58 },
  { keyword: "パスワードリセット", count: 52 },
  { keyword: "新入社員研修", count: 45 },
  { keyword: "営業資料", count: 43 },
  { keyword: "経費申請", count: 38 },
  { keyword: "システムエラー", count: 35 },
  { keyword: "会議室予約", count: 32 },
  { keyword: "プロジェクト計画", count: 29 }
];

// Colors for charts
const CATEGORY_COLORS = ["#4f46e5", "#8b5cf6", "#d946ef", "#f43f5e", "#0ea5e9", "#10b981"];
const SENTIMENT_COLORS = ["#10b981", "#6b7280", "#f43f5e"];

const QuestionAnalytics = () => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border rounded shadow-sm">
          <p className="font-medium">{`${payload[0].name}`}</p>
          <p className="text-sm">
            <span className="font-medium">{payload[0].value}</span>%
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>質問カテゴリー分布</CardTitle>
          <CardDescription>
            カテゴリー別の質問割合
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={questionCategories}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {questionCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CATEGORY_COLORS[index % CATEGORY_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>質問感情分析</CardTitle>
          <CardDescription>
            質問の感情傾向分析
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={questionSentiment}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {questionSentiment.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SENTIMENT_COLORS[index % SENTIMENT_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>頻出キーワード</CardTitle>
          <CardDescription>
            よく使われる検索・質問キーワード
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {frequentKeywords.map((item, index) => (
              <div
                key={index}
                className="px-3 py-1.5 bg-gray-100 rounded-full text-sm flex items-center"
                style={{ fontSize: `${Math.max(0.8, Math.min(1.5, 0.8 + item.count / 100))}rem` }}
              >
                <span className="mr-2">{item.keyword}</span>
                <span className="text-xs bg-gray-200 px-1.5 py-0.5 rounded-full">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionAnalytics;
