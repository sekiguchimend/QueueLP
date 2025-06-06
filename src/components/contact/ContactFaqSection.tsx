
import { Button } from "@/components/ui/button";
import FaqItem from "./FaqItem";

const ContactFaqSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">よくある質問</h2>
          
          <div className="space-y-6 text-left">
            <FaqItem 
              question="導入にはどのくらいの期間がかかりますか？" 
              answer="標準的な導入期間は約2週間です。ご要望によるカスタマイズが必要な場合は、追加で1〜2週間ほどかかることがあります。詳細なスケジュールについては、お問い合わせください。" 
            />
            <FaqItem 
              question="無料トライアルはありますか？" 
              answer="はい、無料トライアルをご用意しています。トライアル版では「資料アップロード：1つの資料のみアップロード可能」「質問回数：最大5回まで質問可能」「アカウント登録時の情報：会社名の入力が必須」といった制限がございますが、主要な機能をお試しいただけます。" 
            />
            <FaqItem 
              question="既存の社内システムと連携できますか？" 
              answer="はい、API連携により多くの社内システムと接続が可能です。Microsoft 365、Google Workspace、Slack、Salesforceなどの主要サービスとの連携実績があります。詳細な連携方法については、お問い合わせください。" 
            />
            <FaqItem 
              question="セキュリティ対策は万全ですか？" 
              answer="はい、企業レベルのセキュリティ対策を実施しています。データの暗号化、厳格なアクセス制御、定期的なセキュリティ監査などを行い、お客様の大切な情報を守ります。また、SOC2、ISMSなどの認証も取得しています。" 
            />
          </div>
          
{/*           <div className="mt-10">
            <Button asChild variant="outline">
              <a href="/help">ヘルプセンターでもっと見る</a>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactFaqSection;
