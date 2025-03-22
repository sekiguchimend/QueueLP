
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileUp, Globe, Link2, Youtube, Upload, X, File } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const KnowledgeUploader = () => {
  const [uploadType, setUploadType] = useState("file");
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("company");
  const [isPublic, setIsPublic] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      setTitle(selectedFile.name.split('.')[0]);
    }
  };
  
  const handleUpload = async () => {
    // Validate form
    if (uploadType === "file" && !file) {
      toast.error("ファイルを選択してください");
      return;
    }
    
    if (uploadType !== "file" && !url) {
      toast.error("URLを入力してください");
      return;
    }
    
    if (!title) {
      toast.error("タイトルを入力してください");
      return;
    }
    
    setIsUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      toast.success("リソースが正常にアップロードされました");
      
      // Reset form
      setFile(null);
      setUrl("");
      setTitle("");
      setDescription("");
      setIsUploading(false);
    }, 2000);
  };
  
  const handleReset = () => {
    setFile(null);
    setUrl("");
    setTitle("");
    setDescription("");
  };
  
  const getUploadTypeIcon = () => {
    switch (uploadType) {
      case "file":
        return <FileUp className="h-5 w-5" />;
      case "url":
        return <Globe className="h-5 w-5" />;
      case "youtube":
        return <Youtube className="h-5 w-5" />;
      default:
        return <Link2 className="h-5 w-5" />;
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>ナレッジベースにリソースを追加</CardTitle>
        <CardDescription>
          各種資料をアップロードして、AIの知識ベースを拡充します
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={uploadType} onValueChange={setUploadType} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="file">ファイルアップロード</TabsTrigger>
            <TabsTrigger value="url">ウェブページURL</TabsTrigger>
            <TabsTrigger value="youtube">YouTube動画</TabsTrigger>
          </TabsList>
          
          <TabsContent value="file" className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              {file ? (
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded">
                  <div className="flex items-center gap-2">
                    <File className="h-5 w-5 text-blue-500" />
                    <span className="font-medium">{file.name}</span>
                    <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setFile(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="py-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <Upload className="h-10 w-10 text-gray-400" />
                    <p className="text-sm text-gray-500">
                      PDFやスプレッドシートなどのファイルをアップロード
                    </p>
                    <Input
                      type="file"
                      className="hidden"
                      id="fileInput"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.xlsx,.pptx,.txt"
                    />
                    <Button asChild variant="outline">
                      <label htmlFor="fileInput">ファイルを選択</label>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="url" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="urlInput">ウェブページURL</Label>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-gray-400" />
                <Input
                  id="urlInput"
                  type="url"
                  placeholder="https://example.com/document"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500">
                公開されているウェブページのURLを入力してください
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="youtube" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="youtubeInput">YouTube動画URL</Label>
              <div className="flex items-center gap-2">
                <Youtube className="h-5 w-5 text-gray-400" />
                <Input
                  id="youtubeInput"
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <p className="text-xs text-gray-500">
                YouTube動画のURLを入力してください
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">タイトル</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="リソースのタイトル"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">説明</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="リソースの説明（オプション）"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="category">カテゴリー</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="カテゴリーを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="company">社内規定</SelectItem>
                <SelectItem value="product">製品情報</SelectItem>
                <SelectItem value="technical">技術資料</SelectItem>
                <SelectItem value="hr">人事関連</SelectItem>
                <SelectItem value="training">研修資料</SelectItem>
                <SelectItem value="other">その他</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="visibility"
              checked={isPublic}
              onCheckedChange={setIsPublic}
            />
            <Label htmlFor="visibility">全社員に公開する</Label>
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={handleReset}>
              リセット
            </Button>
            <Button
              onClick={handleUpload}
              disabled={isUploading}
              className="gap-2"
            >
              {getUploadTypeIcon()}
              {isUploading ? "アップロード中..." : "アップロード"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeUploader;
