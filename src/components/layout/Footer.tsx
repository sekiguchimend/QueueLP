
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, MessageCircle, HelpCircle, Mail, Download, Activity } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-20 pb-10 bg-subtle-grid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-gray-200">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-primary">ワークメイト</span>
              <span className="text-2xl font-light">AI</span>
            </Link>
            <p className="text-gray-600 mb-6 font-light">
              効率的な業務をサポートする社内向けAIチャットボット
            </p>
            <div className="flex space-x-5">
              <SocialIcon icon={<Facebook size={18} />} label="Facebook" />
              <SocialIcon icon={<Twitter size={18} />} label="Twitter" />
              <SocialIcon icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialIcon icon={<Instagram size={18} />} label="Instagram" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">サービス</h4>
            <ul className="space-y-3">
              <FooterLink href="#features">機能紹介</FooterLink>
              <FooterLink href="#benefits">メリット</FooterLink>
              <FooterLink href="#how-it-works">使い方</FooterLink>
              <FooterLink href="#success-stories">事例</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">サポート</h4>
            <ul className="space-y-3">
              <FooterLink href="/help">ヘルプセンター</FooterLink>
              <FooterLink href="/contact">お問い合わせ</FooterLink>
              <FooterLink href="#faq">よくある質問</FooterLink>
              <FooterLink href="/status">サービスステータス<Activity size={14} className="inline ml-1" /></FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-5 text-lg">企業情報</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">会社概要</FooterLink>
              <FooterLink href="/recruitment">採用情報</FooterLink>
              <FooterLink href="/download">資料ダウンロード<Download size={14} className="inline ml-1" /></FooterLink>
              <FooterLink href="/privacy">プライバシーポリシー</FooterLink>
              <FooterLink href="/terms">利用規約</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-10 text-center">
          <p className="text-gray-500 text-sm font-light">
            &copy; {currentYear} ワークメイトAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <a
    href="#"
    className="bg-white p-2.5 rounded-full text-gray-500 hover:text-primary hover:shadow-md transition-all duration-300 border border-gray-100"
    aria-label={label}
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a
      href={href}
      className="text-gray-600 hover:text-primary transition-colors font-light relative inline-block group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/30 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
);

export default Footer;
