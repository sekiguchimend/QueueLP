
import React, { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  ChevronLeft, 
  ChevronRight, 
  Edit, 
  FileText, 
  Globe, 
  MoreHorizontal, 
  Search, 
  Trash2, 
  Youtube 
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

// Mock data for knowledge resources
const mockResources = [
  {
    id: "doc-1",
    title: "営業マニュアル 2023年度版",
    type: "pdf",
    category: "company",
    dateAdded: "2023-09-12T10:30:00",
    addedBy: "管理者",
    status: "active",
    isPublic: true
  },
  {
    id: "doc-2",
    title: "新入社員研修資料",
    type: "pptx",
    category: "training",
    dateAdded: "2023-09-15T14:20:00",
    addedBy: "管理者",
    status: "active",
    isPublic: true
  },
  {
    id: "doc-3",
    title: "社内規定集",
    type: "pdf",
    category: "hr",
    dateAdded: "2023-08-28T09:15:00",
    addedBy: "管理者",
    status: "active",
    isPublic: true
  },
  {
    id: "doc-4",
    title: "製品仕様書",
    type: "pdf",
    category: "product",
    dateAdded: "2023-09-05T11:45:00",
    addedBy: "管理者",
    status: "active",
    isPublic: false
  },
  {
    id: "doc-5",
    title: "顧客対応マニュアル",
    type: "docx",
    category: "company",
    dateAdded: "2023-09-10T16:30:00",
    addedBy: "管理者",
    status: "active",
    isPublic: true
  },
  {
    id: "doc-6",
    title: "システム導入ガイド",
    type: "url",
    category: "technical",
    dateAdded: "2023-09-18T13:10:00",
    addedBy: "管理者",
    status: "active",
    isPublic: true
  },
  {
    id: "doc-7",
    title: "製品紹介動画",
    type: "youtube",
    category: "product",
    dateAdded: "2023-09-20T09:30:00",
    addedBy: "管理者",
    status: "active",
    isPublic: true
  }
];

const KnowledgeResourceList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  // Filter resources based on search query and filters
  const filteredResources = mockResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || resource.category === categoryFilter;
    const matchesType = typeFilter === "all" || resource.type === typeFilter;
    return matchesSearch && matchesCategory && matchesType;
  });
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const paginatedResources = filteredResources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);
  };
  
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "company":
        return <Badge className="bg-blue-500">社内規定</Badge>;
      case "product":
        return <Badge className="bg-green-500">製品情報</Badge>;
      case "technical":
        return <Badge className="bg-purple-500">技術資料</Badge>;
      case "hr":
        return <Badge className="bg-yellow-500">人事関連</Badge>;
      case "training":
        return <Badge className="bg-orange-500">研修資料</Badge>;
      default:
        return <Badge>その他</Badge>;
    }
  };
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "url":
        return <Globe className="h-4 w-4 text-blue-500" />;
      case "youtube":
        return <Youtube className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };
  
  const handleTogglePublic = (resourceId: string, isCurrentlyPublic: boolean) => {
    // In a real app, we would update the resource in the database
    toast.success(`リソースを${isCurrentlyPublic ? '非公開' : '公開'}に設定しました`);
  };
  
  const handleDeleteResource = (resourceId: string) => {
    // In a real app, we would delete the resource from the database
    toast.success("リソースを削除しました");
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>知識ベースリソース</CardTitle>
        <CardDescription>
          AIが参照する知識ベースのリソース一覧
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="リソースを検索..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="カテゴリー" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                <SelectItem value="company">社内規定</SelectItem>
                <SelectItem value="product">製品情報</SelectItem>
                <SelectItem value="technical">技術資料</SelectItem>
                <SelectItem value="hr">人事関連</SelectItem>
                <SelectItem value="training">研修資料</SelectItem>
                <SelectItem value="other">その他</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="種類" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="docx">Word</SelectItem>
                <SelectItem value="pptx">PowerPoint</SelectItem>
                <SelectItem value="xlsx">Excel</SelectItem>
                <SelectItem value="url">Webページ</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[40%]">タイトル</TableHead>
                <TableHead>カテゴリー</TableHead>
                <TableHead>追加日</TableHead>
                <TableHead>公開</TableHead>
                <TableHead className="text-right">アクション</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedResources.length > 0 ? (
                paginatedResources.map((resource) => (
                  <TableRow key={resource.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(resource.type)}
                        <span>{resource.title}</span>
                        <span className="text-xs text-gray-500">
                          {resource.type.toUpperCase()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getCategoryBadge(resource.category)}</TableCell>
                    <TableCell>{formatDate(resource.dateAdded)}</TableCell>
                    <TableCell>
                      <Switch
                        checked={resource.isPublic}
                        onCheckedChange={() => handleTogglePublic(resource.id, resource.isPublic)}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            編集
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            className="text-red-600"
                            onClick={() => handleDeleteResource(resource.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            削除
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    検索条件に一致するリソースが見つかりませんでした
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        
        {filteredResources.length > 0 && (
          <div className="flex items-center justify-between py-2">
            <div className="text-sm text-gray-500">
              {filteredResources.length}件中 {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredResources.length)}件を表示
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
      </CardContent>
    </Card>
  );
};

export default KnowledgeResourceList;
