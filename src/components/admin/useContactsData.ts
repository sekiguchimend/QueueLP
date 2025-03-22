
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Contact } from "./ContactsTypes";

export const useContactsData = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('お問い合わせデータの取得中にエラーが発生しました:', error);
        toast.error('データの読み込みに失敗しました');
      } else {
        // Type assertion to ensure data conforms to Contact[] type
        setContacts(data as Contact[] || []);
      }
    } catch (error) {
      console.error('予期せぬエラーが発生しました:', error);
      toast.error('データの読み込みに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Contact["status"]) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        console.error('ステータス更新中にエラーが発生しました:', error);
        toast.error('ステータスの更新に失敗しました');
      } else {
        toast.success(`お問い合わせのステータスを「${newStatus}」に更新しました`);
        
        // 選択中のお問い合わせも更新
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact({
            ...selectedContact,
            status: newStatus
          });
        }
      }
    } catch (error) {
      console.error('予期せぬエラーが発生しました:', error);
      toast.error('ステータスの更新に失敗しました');
    }
  };

  useEffect(() => {
    // 初回のデータ取得
    fetchContacts();

    // リアルタイム更新をサブスクライブ
    const channel = supabase
      .channel('public:contacts')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'contacts' },
        (payload) => {
          console.log('リアルタイム更新:', payload);
          fetchContacts(); // 変更があったら再取得
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    contacts,
    isLoading,
    selectedContact,
    setSelectedContact,
    updateStatus
  };
};
