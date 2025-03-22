
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ApplicationSidebar = () => {
  return (
    <Card className="border-gray-100 shadow-sm sticky top-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">応募について</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium mb-2">選考フロー</h3>
            <ol className="space-y-2 pl-5 list-decimal text-sm text-gray-600">
              <li>書類選考</li>
              <li>一次面接（オンライン）</li>
              <li>二次面接（対面またはオンライン）</li>
              <li>最終面接</li>
              <li>内定</li>
            </ol>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-2">よくある質問</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-gray-900">選考結果はいつ頃連絡がありますか？</p>
                <p className="text-gray-600">書類選考の結果は、応募から1週間以内にご連絡いたします。</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">面接はオンラインですか？</p>
                <p className="text-gray-600">一次面接はオンラインで実施します。二次面接以降は状況に応じて対面またはオンラインで行います。</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-2">お問い合わせ</h3>
            <p className="text-sm text-gray-600 mb-2">
              応募に関するご質問は、以下のメールアドレスまでお問い合わせください。
            </p>
            <p className="text-sm font-medium">
              recruit@workmate-ai.jp
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
