
// お問い合わせデータの型定義
export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string | null;
  subject: string;
  message: string;
  status: "未対応" | "対応中" | "対応済み" | string; // Allow any string to handle database values
  created_at: string;
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

export const getStatusColor = (status: Contact["status"]) => {
  switch (status) {
    case "未対応":
      return "bg-red-500";
    case "対応中":
      return "bg-yellow-500";
    case "対応済み":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};
