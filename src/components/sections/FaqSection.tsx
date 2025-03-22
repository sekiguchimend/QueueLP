
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-block bg-blue-50 px-4 py-2 rounded-full text-blue-700 font-medium text-sm mb-6">
            よくある質問
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            導入に関するよくある質問
          </h2>
          <p className="text-xl text-gray-600">
            お客様からよくいただく質問をまとめました。ご不明な点があればお気軽にお問い合わせください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-up">
          <Accordion type="single" collapsible className="space-y-4">
            <FaqItem 
              value="item-1" 
              question="導入までにどのくらいの期間がかかりますか？"
              answer="標準的な導入期間は約2〜4週間です。お客様の環境や要件によって異なりますが、初期設定から社内システムとの連携、テスト運用を経て本格導入となります。専任のサポートチームが導入をサポートします。"
            />
            <FaqItem 
              value="item-2" 
              question="既存の社内システムと連携できますか？"
              answer="はい、可能です。社内ポータル、グループウェア、CRM、ERPなど、APIを公開している主要なシステムとの連携が可能です。連携方法については、個別にご相談ください。"
            />
            <FaqItem 
              value="item-3" 
              question="カスタマイズは可能ですか？"
              answer="はい、お客様の業務フローや社内用語に合わせたカスタマイズが可能です。また、ボットの応答内容や対応できる業務範囲なども、お客様のニーズに合わせて調整できます。"
            />
            <FaqItem 
              value="item-4" 
              question="社内の機密情報を扱う上でのセキュリティは大丈夫ですか？"
              answer="セキュリティ対策には万全を期しています。データの暗号化、アクセス権限の厳密な管理、定期的なセキュリティ監査などを実施しています。また、ご要望に応じてオンプレミス環境での導入も可能です。"
            />
            <FaqItem 
              value="item-5" 
              question="導入後のサポート体制はどうなっていますか？"
              answer="導入後も専任のサポートチームが継続的にサポートします。定期的なメンテナンスやアップデート、トラブル対応、機能追加のご相談など、安心してご利用いただける体制を整えています。"
            />
            <FaqItem 
              value="item-6" 
              question="利用料金体系を教えてください"
              answer="利用料金は、基本ライセンス料と利用ユーザー数に応じた従量課金の組み合わせとなっています。詳細な料金プランについては、お問い合わせいただくか、資料請求をお願いします。"
            />
            <FaqItem 
              value="item-7" 
              question="無料トライアルはありますか？"
              answer="はい、無料トライアルをご用意しています。トライアル版では「資料アップロード：1つの資料のみアップロード可能」「質問回数：最大5回まで質問可能」「アカウント登録時の情報：会社名の入力が必須」といった制限がございますが、主要な機能をお試しいただけます。"
            />
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ 
  value, 
  question, 
  answer 
}: { 
  value: string; 
  question: string; 
  answer: string;
}) => {
  return (
    <AccordionItem value={value} className="border border-gray-200 rounded-lg overflow-hidden">
      <AccordionTrigger className="bg-white px-6 py-4 hover:bg-gray-50">
        <span className="text-left font-medium">{question}</span>
      </AccordionTrigger>
      <AccordionContent className="px-6 py-4 text-gray-600">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqSection;
