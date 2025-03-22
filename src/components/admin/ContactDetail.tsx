
import React from "react";
import { X, Check, Mail, User, Building, Calendar, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Contact, getStatusColor, formatDate } from "./ContactsTypes";

interface ContactDetailProps {
  contact: Contact;
  onClose: () => void;
  onStatusUpdate: (id: string, status: string) => Promise<void>;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ 
  contact, 
  onClose,
  onStatusUpdate
}) => {
  return (
    <Card className="border rounded-lg bg-white shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">お問い合わせ詳細</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8 rounded-full"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">閉じる</span>
          </Button>
        </div>
        <Badge className={`${getStatusColor(contact.status)} mt-1`}>
          {contact.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">お名前</p>
                <p className="font-semibold">{contact.name}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">メールアドレス</p>
                <p className="font-semibold">{contact.email}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">会社名</p>
                <p className="font-semibold">{contact.company || '-'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">日付</p>
                <p className="font-semibold">{formatDate(contact.created_at)}</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <div className="flex items-center mb-2 gap-2">
            <MessageSquare className="h-4 w-4 text-gray-500" />
            <p className="text-sm text-gray-500">お問い合わせ種別</p>
          </div>
          <p className="font-semibold">{contact.subject}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-2">お問い合わせ内容</p>
          <div className="bg-gray-50 p-4 rounded-md text-gray-800 whitespace-pre-wrap border border-gray-100">
            {contact.message}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center gap-2">
          {contact.status !== "対応中" && (
            <Button
              variant="outline"
              onClick={() => onStatusUpdate(contact.id, "対応中")}
              className="border-yellow-500 text-yellow-700 hover:bg-yellow-50"
            >
              対応中にする
            </Button>
          )}
          {contact.status !== "対応済み" && (
            <Button
              variant="outline"
              onClick={() => onStatusUpdate(contact.id, "対応済み")}
              className="border-green-500 text-green-700 hover:bg-green-50"
            >
              <Check className="mr-1 h-4 w-4" />
              対応済みにする
            </Button>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="default"
            onClick={() => {
              toast.success("返信メールを送信しました");
              onStatusUpdate(contact.id, "対応済み");
            }}
          >
            <Mail className="mr-1 h-4 w-4" />
            返信する
          </Button>
          <Button
            variant="secondary"
            onClick={onClose}
          >
            閉じる
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContactDetail;
