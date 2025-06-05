import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const company = [
    { name: "会社概要", path: "/about" },
    { name: "プライバシーポリシー", path: "/privacy" },
    { name: "利用規約", path: "/terms" },
    { name: "お問い合わせ", path: "/contact" },
  ];

  const product = [
    { name: "機能", path: "/#features" },
    { name: "料金", path: "/pricing" },
    { name: "導入事例", path: "/case-studies" },
    { name: "ヘルプセンター", path: "/help" },
  ];

  const resources = [
    { name: "ブログ", path: "/blog" },
    { name: "ニュース", path: "/news" },
    { name: "開発者ドキュメント", path: "/docs" },
    { name: "ステータス", path: "/status" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block">
              <img 
                src="/work_mate.png" 
                alt="WorkMate AI" 
                className="h-16 sm:h-20 w-auto" 
              />
            </Link>
            <p className="mt-6 text-sm text-gray-600 leading-relaxed">
              ワークメイトAIは、AIを活用して業務効率を向上させる次世代の業務支援ツールです。
              あらゆる業務プロセスを効率化し、生産性の向上をサポートします。
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

          {/* Product */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              製品
            </h3>
            <ul className="mt-4 space-y-3">
              {product.map((item) => (
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

          {/* Resources */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              リソース
            </h3>
            <ul className="mt-4 space-y-3">
              {resources.map((item) => (
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

          {/* Company */}
          <div className="lg:col-span-1">
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

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              お問い合わせ
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-gray-600">
                03-6687-0550
                <br />
                <span className="text-xs">平日 9:00〜18:00</span>
              </p>
              <a 
                href="mailto:queue@queuefood.co.jp" 
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                queue@queuefood.co.jp
              </a>
              <p className="text-sm text-gray-600">
                〒104-0061
                <br />
                東京都中央区銀座一丁目22番11号
                <br />
                銀座大竹ビジデンス 2F
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} queue. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
