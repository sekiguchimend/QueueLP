
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactsTable from "./ContactsTable";
import ContactDetail from "./ContactDetail";
import { useContactsData } from "./useContactsData";
import { Contact } from "./ContactsTypes";
import { Search, Inbox, Clock, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";

const ContactList = () => {
  const {
    contacts,
    isLoading,
    selectedContact,
    setSelectedContact,
    updateStatus
  } = useContactsData();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  // Filter contacts based on search term and active tab
  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    if (activeTab === "all") return true;
    return contact.status === activeTab;
  });

  const pendingCount = contacts.filter(c => c.status === "未対応").length;
  const inProgressCount = contacts.filter(c => c.status === "対応中").length;
  const completedCount = contacts.filter(c => c.status === "対応済み").length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-red-700 flex items-center">
              <Inbox className="h-4 w-4 mr-2" />
              未対応
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-800">{pendingCount}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-yellow-700 flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              対応中
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-yellow-800">{inProgressCount}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-700 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              対応済み
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-800">{completedCount}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>お問い合わせ一覧</CardTitle>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="検索..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">
                すべて
                <Badge className="ml-2 bg-gray-500">{contacts.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="未対応">
                未対応
                <Badge className="ml-2 bg-red-500">{pendingCount}</Badge>
              </TabsTrigger>
              <TabsTrigger value="対応中">
                対応中
                <Badge className="ml-2 bg-yellow-500">{inProgressCount}</Badge>
              </TabsTrigger>
              <TabsTrigger value="対応済み">
                対応済み
                <Badge className="ml-2 bg-green-500">{completedCount}</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="m-0">
              <div className="rounded-md border bg-white overflow-hidden">
                <ContactsTable
                  contacts={filteredContacts}
                  isLoading={isLoading}
                  onSelectContact={setSelectedContact}
                  onUpdateStatus={updateStatus}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {selectedContact && (
        <ContactDetail
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onStatusUpdate={updateStatus}
        />
      )}
    </div>
  );
};

export default ContactList;
