
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight, Search, UserCircle } from "lucide-react";

// Mock data for question logs
const mockQuestionLogs = [
  {
    id: "q1",
    userName: "田中太郎",
    userType: "社員",
    department: "営業部",
    question: "新しい製品パンフレットはどこにありますか？",
    sentiment: "neutral",
    timestamp: "2023-10-15T09:30:00",
    responseTime: 0.8
  },
  {
    id: "q2",
    userName: "佐藤花子",
    userType: "社員",
    department: "人事部",
    question: "休暇申請の手続きについて教えてください",
    sentiment: "neutral",
    timestamp: "2023-10-15T10:15:00",
    responseTime: 1.2
  },
  {
    id: "q3",
    userName: "山田健太",
    userType: "顧客",
    department: "",
    question: "サポート契約の更新方法を教えてください",
    sentiment: "positive",
    timestamp: "2023-10-15T11:05:00",
    responseTime: 0.9
  },
  {
    id: "q4",
    userName: "伊藤誠",
    userType: "社員",
    department: "技術部",
    question: "サーバーの障害が発生しています。対処方法を教えてください。",
    sentiment: "negative",
    timestamp: "2023-10-15T13:45:00",
    responseTime: 1.5
  },
  {
    id: "q5",
    userName: "鈴木雅子",
    userType: "社員",
    department: "マーケティング部",
    question: "新しいキャンペーンの資料はどこにありますか？",
    sentiment: "neutral",
    timestamp: "2023-10-15T14:30:00",
    responseTime: 0.7
  },
  {
    id: "q6",
    userName: "中村智也",
    userType: "顧客",
    department: "",
    question: "製品の不具合について問い合わせです",
    sentiment: "negative",
    timestamp: "2023-10-15T15:20:00",
    responseTime: 1.1
  },
  {
    id: "q7",
    userName: "小林れい",
    userType: "社員",
    department: "法務部",
    question: "契約書テンプレートの最新版はどれですか？",
    sentiment: "neutral",
    timestamp: "2023-10-15T16:15:00",
    responseTime: 0.6
  }
];

const QuestionLogTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Filter logs based on search query
  const filteredLogs = mockQuestionLogs.filter((log) =>
    log.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.department.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage);
  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  const renderSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return <Badge className="bg-green-500">ポジティブ</Badge>;
      case "negative":
        return <Badge className="bg-red-500">ネガティブ</Badge>;
      default:
        return <Badge className="bg-gray-500">ニュートラル</Badge>;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="質問、ユーザー名、部署で検索..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ユーザー</TableHead>
              <TableHead>質問内容</TableHead>
              <TableHead>感情</TableHead>
              <TableHead>日時</TableHead>
              <TableHead className="text-right">応答時間</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLogs.length > 0 ? (
              paginatedLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <UserCircle className="h-6 w-6 text-gray-400" />
                      <div>
                        <div className="font-medium">{log.userName}</div>
                        <div className="text-xs text-gray-500">
                          {log.userType === "社員" ? `${log.department} (社員)` : "顧客"}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md truncate">
                    {log.question}
                  </TableCell>
                  <TableCell>{renderSentimentBadge(log.sentiment)}</TableCell>
                  <TableCell>{formatDate(log.timestamp)}</TableCell>
                  <TableCell className="text-right">
                    {log.responseTime}秒
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  検索条件に一致するログが見つかりませんでした
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {filteredLogs.length > 0 && (
        <div className="flex items-center justify-between py-2">
          <div className="text-sm text-gray-500">
            {filteredLogs.length}件中 {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredLogs.length)}件を表示
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              {currentPage} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionLogTable;
