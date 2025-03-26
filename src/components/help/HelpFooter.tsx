import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const HelpFooter = () => {
  const categories = [
    { name: "使い方ガイド", path: "/help/categories/使い方ガイド" },
    { name: "セキュリティ", path: "/help/categories/セキュリティ" },
    { name: "トラブルシューティング", path: "/help/categories/トラブルシューティング" },
    { name: "データ管理", path: "/help/categories/データ管理" },
  ];

  const resources = [
    { name: "よくある質問", path: "/help/faq" },
    { name: "お知らせ", path: "/help/news" },
    { name: "用語集", path: "/help/glossary" },
    { name: "動画ガイド", path: "/help/videos" },
  ];

  const company = [
    { name: "会社概要", path: "/about" },
    { name: "プライバシーポリシー", path: "/privacy" },
    { name: "利用規約", path: "/terms" },
    { name: "お問い合わせ", path: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img 
                src="/work_mate.png" 
                alt="WorkMate AI" 
                className="h-12 sm:h-14 w-auto" 
              />
            </Link>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              ワークメイトAIは、AIを活用して業務効率を向上させる次世代の業務支援ツールです。
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              カテゴリー
            </h3>
            <ul className="mt-4 space-y-3">
              {categories.map((category) => (
                <li key={category.path}>
                  <Link
                    to={category.path}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              リソース
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((resource) => (
                <li key={resource.path}>
                  <Link
                    to={resource.path}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              企業情報
            </h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} WorkMate AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HelpFooter; 