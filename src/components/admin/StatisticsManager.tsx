
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const StatisticsManager = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    total_accounts: "",
    total_inquiries: "",
    active_users: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Convert form values to numbers
      const dataToSave = {
        date: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
        total_accounts: parseInt(formData.total_accounts),
        total_inquiries: parseInt(formData.total_inquiries),
        active_users: parseInt(formData.active_users)
      };
      
      // Insert or update the statistics for today
      const { error } = await supabase
        .from('dashboard_statistics')
        .upsert(dataToSave, { onConflict: 'date' });
      
      if (error) {
        throw error;
      }
      
      toast.success("統計データが正常に更新されました");
      setDialogOpen(false);
      
      // Reset form
      setFormData({
        total_accounts: "",
        total_inquiries: "",
        active_users: ""
      });
      
    } catch (error) {
      console.error("Statistics update error:", error);
      toast.error("統計データの更新中にエラーが発生しました");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>統計データ管理</CardTitle>
          <CardDescription>
            ダッシュボードに表示される統計データを手動で更新します
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              データは毎日自動的に更新されますが、必要に応じて手動で最新の数値を入力できます。
            </p>
            <Button onClick={() => setDialogOpen(true)}>
              統計データを更新
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>統計データの更新</DialogTitle>
            <DialogDescription>
              本日の統計データを入力してください。既存のデータは上書きされます。
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="total_accounts" className="text-right">
                  総アカウント数
                </Label>
                <Input
                  id="total_accounts"
                  name="total_accounts"
                  className="col-span-3"
                  value={formData.total_accounts}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="total_inquiries" className="text-right">
                  お問い合わせ数
                </Label>
                <Input
                  id="total_inquiries"
                  name="total_inquiries"
                  className="col-span-3"
                  value={formData.total_inquiries}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="active_users" className="text-right">
                  アクティブユーザー
                </Label>
                <Input
                  id="active_users"
                  name="active_users"
                  className="col-span-3"
                  value={formData.active_users}
                  onChange={handleChange}
                  type="number"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                キャンセル
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    処理中...
                  </>
                ) : (
                  "保存"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StatisticsManager;
