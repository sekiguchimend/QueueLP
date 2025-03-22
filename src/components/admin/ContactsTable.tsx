
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Clock } from "lucide-react";
import { Contact, getStatusColor, formatDate } from "./ContactsTypes";

interface ContactsTableProps {
  contacts: Contact[];
  isLoading: boolean;
  onSelectContact: (contact: Contact) => void;
  onUpdateStatus: (id: string, status: string) => Promise<void>;
}

const ContactsTable: React.FC<ContactsTableProps> = ({
  contacts,
  isLoading,
  onSelectContact,
  onUpdateStatus,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-10">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">読み込み中...</span>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="text-center p-10 text-gray-500">
        お問い合わせはまだありません
      </div>
    );
  }

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 hover:bg-gray-50">
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>お名前</TableHead>
            <TableHead>会社名</TableHead>
            <TableHead className="hidden md:table-cell">メール</TableHead>
            <TableHead className="hidden lg:table-cell">日付</TableHead>
            <TableHead>ステータス</TableHead>
            <TableHead className="text-right">アクション</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow 
              key={contact.id} 
              className="hover:bg-gray-50 cursor-pointer transition-colors" 
              onClick={() => onSelectContact(contact)}
            >
              <TableCell className="font-medium">{contact.id.substring(0, 8)}</TableCell>
              <TableCell className="font-medium">{contact.name}</TableCell>
              <TableCell>{contact.company || '-'}</TableCell>
              <TableCell className="hidden md:table-cell">{contact.email}</TableCell>
              <TableCell className="hidden lg:table-cell">{formatDate(contact.created_at)}</TableCell>
              <TableCell>
                <Badge className={`${getStatusColor(contact.status)}`}>
                  {contact.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  {contact.status !== "対応中" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 text-yellow-600 border-yellow-300 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateStatus(contact.id, "対応中");
                      }}
                    >
                      <span className="sr-only">対応中にする</span>
                      <Clock className="h-4 w-4" />
                    </Button>
                  )}
                  {contact.status !== "対応済み" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 w-8 p-0 text-green-600 border-green-300 hover:bg-green-50 hover:text-green-700 hover:border-green-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdateStatus(contact.id, "対応済み");
                      }}
                    >
                      <span className="sr-only">対応済みにする</span>
                      <Check className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContactsTable;
