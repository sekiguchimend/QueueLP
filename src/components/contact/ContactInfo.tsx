import { Phone, Mail, MessageCircle, MapPin, Info } from "lucide-react";
import ContactMethod from "./ContactMethod";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold mb-8">お問い合わせ先</h2>
      
      <div className="space-y-8">
        <ContactMethod 
          icon={<Phone className="text-green-500" />}
          title="お電話"
          detail="平日 9:00-18:00"
          contact="03-6687-0550"
        />
        
        <ContactMethod 
          icon={<Mail className="text-blue-500" />}
          title="メール"
          detail="24時間受付"
          contact="queue@queue-tech.jp"
        />
        
        <ContactMethod 
          icon={<MessageCircle className="text-purple-500" />}
          title="チャットサポート"
          detail="平日 9:00-20:00"
          contact="ログイン後にご利用いただけます"
        />
        
        <ContactMethod 
          icon={<MapPin className="text-red-500" />}
          title="所在地"
          detail=""
          contact="東京都中央区銀座１丁目２２番１１号銀座大竹ビジデンス２Ｆ"
        />
      </div>
      
      <div className="mt-10 pt-10 border-t border-gray-100">
        <h3 className="text-xl font-bold mb-4">よくあるお問い合わせ</h3>
        <ul className="space-y-3">
          <li>
            <a href="#" className="flex items-start group">
              <Info size={18} className="mr-2 mt-0.5 text-gray-400 group-hover:text-primary" />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                導入までの流れについて
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-start group">
              <Info size={18} className="mr-2 mt-0.5 text-gray-400 group-hover:text-primary" />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                料金プランと支払い方法
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-start group">
              <Info size={18} className="mr-2 mt-0.5 text-gray-400 group-hover:text-primary" />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                システム連携と対応API
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-start group">
              <Info size={18} className="mr-2 mt-0.5 text-gray-400 group-hover:text-primary" />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                セキュリティポリシーについて
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
