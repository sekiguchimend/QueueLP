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
              question="ユーザー権限はどのように管理されますか？"
              answer="4段階の権限管理システムを採用しています。①運営者：システム全体の最高管理者、②社長：自社内の最高権限者で管理者ユーザーの追加・管理が可能、③管理者：部門やチーム単位での管理権限で資料のアップロード・管理や社員の招待・管理、利用状況の分析が可能、④社員：基本的なチャット機能の利用が可能。"
            />
            <FaqItem 
              value="item-2" 
              question="どのような文書がアップロードできますか？"
              answer="PDF、Excel（.xlsx/.xls）、Word（.docx/.doc）、テキストファイル（.txt）に対応しています。最大ファイルサイズは100MBです。ドラッグ&ドロップでの簡単アップロードに加え、Google Drive連携での文書取り込みも可能です。"
            />
            <FaqItem 
              value="item-3" 
              question="回答の信頼性はどのように担保されますか？"
              answer="AIの回答の下には必ず「情報ソース：○○資料 P.○」として参照した文書名とページ数が表示されます。これにより回答の根拠を明確にし、必要に応じて元の文書も確認できます。また、ハルシネーション（誤った情報の生成）を防ぐため、学習した文書のみから回答を生成します。"
            />
            <FaqItem 
              value="item-4" 
              question="カスタムプロンプト機能とは何ですか？"
              answer="管理者が各文書に対して特別な指令を設定できる機能です。例：「この資料から回答する際は、必ず『参考』として注釈を付けてください」「この議事録を要約する際は、決定事項とTodoを分けて表示してください」など、回答スタイルをカスタマイズできます。"
            />
            <FaqItem 
              value="item-5" 
              question="分析機能では何がわかりますか？"
              answer="①資料参照回数分析：どの文書がよく参照されるか、②カテゴリ・感情分析：質問内容の傾向や感情分析、③アクティブユーザー推移：利用状況の時系列分析、④繰り返し質問パターン：よくある質問の特定などが可能です。チャット履歴のCSV出力機能もあります。"
            />
            <FaqItem 
              value="item-6" 
              question="無料版（デモ版）の制限を教えてください"
              answer="デモ版では以下の制限があります：①質問回数：1日最大5回まで（毎日午前0時にリセット）、②文書アップロード：1つの資料のみ、③アカウント作成時に会社名の入力が必須。制限に達した場合は「本番版への移行申請」が可能です。"
            />
            <FaqItem 
              value="item-7" 
              question="社員の招待・管理はどのように行いますか？"
              answer="管理者以上の権限を持つユーザーは、①新しい社員の招待（メールアドレスと初期パスワードを設定）、②各社員の利用状況確認（質問数、最終ログイン日時）、③社員の削除が可能です。招待された社員は設定されたメールアドレスとパスワードでログインできます。"
            />
            <FaqItem 
              value="item-8" 
              question="セキュリティ対策について教えてください"
              answer="企業の機密情報を扱うため、高度なセキュリティ対策を実施しています。データの暗号化、アクセス権限の厳密な管理、定期的なセキュリティ監査を行っています。また、4段階の権限管理により、各ユーザーが必要な情報のみにアクセス可能です。"
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
