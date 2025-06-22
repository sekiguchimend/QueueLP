import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import ChallengesSection from "@/components/sections/ChallengesSection";

const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.origin + link.pathname === window.location.origin + window.location.pathname) {
        e.preventDefault();
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>ワークメイトAI | 次世代の業務効率化チャットボット | Workmate AI</title>
        <meta name="title" content="ワークメイトAI | 次世代の業務効率化チャットボット | Workmate AI" />
        <meta name="description" content="ワークメイトAI（Workmate AI）は業務効率を飛躍的に高めるAIチャットボット。社内情報へのアクセスを迅速化し、業務フローをスマートにする次世代の社内コミュニケーションツール。無料トライアル提供中。" />
        <meta name="keywords" content="ワークメイトAI,Workmate AI,workmate ai,ワークメイト,AI,チャットボット,業務効率化,生産性向上,社内チャットボット,AI業務支援,社内知識検索,業務自動化,AI assistant,business chatbot,workflow automation,productivity tool,enterprise AI,日本製AI,国産AI,社内DX,デジタルトランスフォーメーション,オフィス効率化,AIアシスタント,business assistant,社内ツール,work efficiency" />
        <meta name="author" content="Queue株式会社" />
        <meta name="language" content="Japanese" />
        <meta name="geo.region" content="JP" />
        <meta name="geo.country" content="Japan" />
        
        <link rel="canonical" href="https://www.workmate-ai.jp/" />
        <link rel="alternate" hreflang="ja" href="https://www.workmate-ai.jp/" />
        <link rel="alternate" hreflang="x-default" href="https://www.workmate-ai.jp/" />
        
        <meta property="og:title" content="ワークメイトAI | 次世代の業務効率化チャットボット | Workmate AI" />
        <meta property="og:description" content="ワークメイトAI（Workmate AI）は業務効率を飛躍的に高めるAIチャットボット。社内情報へのアクセスを迅速化し、業務フローをスマートにする次世代ツール。" />
        <meta property="og:url" content="https://www.workmate-ai.jp/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.workmate-ai.jp/work_mate.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ワークメイトAI - 次世代の業務効率化チャットボット" />
        <meta property="og:site_name" content="ワークメイトAI | Workmate AI" />
        <meta property="og:locale" content="ja_JP" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ワークメイトAI | 次世代の業務効率化チャットボット | Workmate AI" />
        <meta name="twitter:description" content="ワークメイトAI（Workmate AI）は業務効率を飛躍的に高めるAIチャットボット。社内情報検索・業務自動化を実現する次世代AIツール。" />
        <meta name="twitter:image" content="https://www.workmate-ai.jp/work_mate.png" />
        <meta name="twitter:image:alt" content="ワークメイトAI - 次世代の業務効率化チャットボット" />
        <meta name="twitter:creator" content="@QueueCorp" />
        <meta name="twitter:site" content="@QueueCorp" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ワークメイトAI",
              "alternateName": ["Workmate AI", "workmate ai", "ワークメイト"],
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "url": "https://www.workmate-ai.jp/",
              "image": "https://www.workmate-ai.jp/work_mate.png",
              "description": "ワークメイトAI（Workmate AI）は業務効率を飛躍的に高めるAIチャットボット。社内情報へのアクセスを迅速化し、業務フローをスマートにする次世代の社内コミュニケーションツール。",
              "publisher": {
                "@type": "Organization",
                "name": "Queue株式会社",
                "url": "https://www.workmate-ai.jp/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.workmate-ai.jp/work_mate.png"
                }
              },
              "offers": {
                "@type": "Offer",
                "category": "subscription",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "0",
                  "priceCurrency": "JPY"
                },
                "description": "無料トライアル提供中"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "AIチャットボット",
                "業務効率化",
                "社内情報検索",
                "業務自動化",
                "生産性向上",
                "社内コミュニケーション",
                "文書作成支援",
                "データ分析",
                "ワークフロー最適化"
              ],
              "softwareVersion": "2.0",
              "datePublished": "2023-01-01",
              "dateModified": "2024-12-01"
            }
          `}
        </script>
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "ワークメイトAI - 次世代の業務効率化チャットボット",
              "description": "ワークメイトAI（Workmate AI）の公式ホームページ。AIを活用した業務効率化ソリューションで、社内業務を革新します。",
              "url": "https://www.workmate-ai.jp/",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "ワークメイトAI",
                "alternateName": "Workmate AI"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                "@type": "ListItem",
                    "position": 1,
                    "name": "ホーム",
                    "item": "https://www.workmate-ai.jp/"
                  }
                ]
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": "https://www.workmate-ai.jp/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                {
                  "@type": "ViewAction",
                  "target": "https://www.workmate-ai.jp/",
                  "name": "ワークメイトAIを見る"
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ChallengesSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
