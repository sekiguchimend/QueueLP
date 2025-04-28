import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Home from "./pages/Index";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/HelpCenter";
import NotFound from "./pages/NotFound";
import Recruitment from "./pages/Recruitment";
import JobDetail from "./pages/JobDetail";
import JobApplication from "./pages/JobApplication";
import Login from "./pages/Login";
import Download from "./pages/Download";
import Guide from "./pages/Guide";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import AdminSettings from "./pages/AdminSettings";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminKnowledgeBase from "./pages/AdminKnowledgeBase";
import { Toaster as SonnerToaster } from "sonner";
import AdminArticles from "./pages/AdminArticles";
import ArticleForm from "./pages/ArticleForm";
import ArticleDetail from "./pages/ArticleDetail";
import ArticleList from "./pages/ArticleList";
import ServiceStatus from "./pages/ServiceStatus";
import DemoComingSoon from "./pages/DemoComingSoon";
import AdminContacts from "./pages/AdminContacts";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import ScrollToTop from "./components/utils/ScrollToTop";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import ServiceDetail from "./pages/ServiceDetail";
import LocalBusiness from "./components/schema/LocalBusiness";
import WebSite from "./components/schema/WebSite";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Helmet>
            <meta name="description" content="ワークメイトAI（Workmate AI）は企業内知識の活用を効率化する次世代AIチャットボットです。社内情報へのアクセス迅速化、業務自動化、データ分析を通じて業務効率を平均30%向上させます。導入企業は情報検索時間の短縮、知識の共有促進、意思決定の質向上など多数のメリットを実現しています。" />
            <meta name="keywords" content="Workmate AI, ワークメイトAI, AIチャットボット, AI chatbot, 業務効率化, workplace productivity, 社内知識検索, enterprise search, 企業DX, digital transformation, 生産性向上, productivity improvement, 社内情報活用, knowledge management, AI業務支援, AI assistant, 自然言語処理, NLP, データ分析, data analytics, 業務自動化, workflow automation, ナレッジマネジメント, 企業内AI, enterprise AI" />
            <meta property="og:title" content="Workmate AI | ワークメイトAI - 企業内知識を活用した次世代の業務効率化AIチャットボット" />
            <meta property="og:description" content="Workmate AI（ワークメイトAI）は企業内知識の活用を効率化する次世代AIチャットボットです。社内情報へのアクセス迅速化、業務自動化、データ分析を通じて業務効率を平均30%向上させます。" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Workmate AI | ワークメイトAI" />
            <meta property="og:image" content="https://www.workmate-ai.jp/images/og-image.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="ja_JP" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Workmate AI | ワークメイトAI - 企業内知識を活用した次世代の業務効率化チャットボット" />
            <meta name="twitter:description" content="Workmate AI（ワークメイトAI）は企業内知識の活用を効率化する次世代AIチャットボットです。社内情報へのアクセス迅速化、業務自動化、データ分析を通じて業務効率を平均30%向上させます。" />
            <meta name="twitter:image" content="https://www.workmate-ai.jp/images/twitter-card.jpg" />
            <link rel="alternate" href="https://www.workmate-ai.jp" hrefLang="ja" />
            <link rel="alternate" href="https://www.workmate-ai.jp/en" hrefLang="en" />
            <link rel="alternate" href="https://www.workmate-ai.jp" hrefLang="x-default" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="theme-color" content="#4f46e5" />
          </Helmet>
          <LocalBusiness />
          <WebSite />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/recruitment/:id" element={<JobDetail />} />
            <Route path="/apply/:id" element={<JobApplication />} />
            <Route path="/apply" element={<JobApplication />} />
            <Route path="/login" element={<Login />} />
            <Route path="/download" element={<Download />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/status" element={<ServiceStatus />} />
            <Route path="/demo" element={<DemoComingSoon />} />
            <Route path="/service-detail" element={<ServiceDetail />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/contacts" element={<AdminContacts />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
            <Route path="/admin/knowledge" element={<AdminKnowledgeBase />} />
            <Route path="/admin/articles" element={<AdminArticles />} />
            <Route path="/admin/articles/new" element={<ArticleForm />} />
            <Route path="/admin/articles/edit/:id" element={<ArticleForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <SonnerToaster position="top-center" closeButton />
        </AuthProvider>
      </Router>
    </HelmetProvider>
  );
}
