import React from 'react';
import { Helmet } from 'react-helmet-async';

const LocalBusiness = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.workmate-ai.jp/#organization',
    name: 'Queue株式会社',
    alternateName: ['キュー株式会社', 'Queue Corporation', 'Workmate AI'],
    url: 'https://www.workmate-ai.jp/',
    logo: 'https://www.workmate-ai.jp/work_mate.png',
    image: 'https://www.workmate-ai.jp/images/og-image.jpg',
    description: 'Queue株式会社は、Workmate AI（ワークメイトAI）を通じて企業の業務効率化と生産性向上を支援しています。最先端の生成AIを活用した次世代型社内チャットボットを提供し、企業のデジタルトランスフォーメーションに貢献します。',
    email: 'info@workmate-ai.jp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '東京都中央区銀座１丁目２２番１１号銀座大竹ビジデンス２Ｆ',
      addressLocality: '中央区',
      addressRegion: '東京都',
      postalCode: '104-0061',
      addressCountry: 'JP'
    },
    telephone: '+81-03-1234-5678',
    sameAs: [
      'https://twitter.com/workmate_ai_jp',
      'https://www.facebook.com/workmateaijp',
      'https://www.linkedin.com/company/workmate-ai-jp'
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    priceRange: '¥¥',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-03-1234-5678',
      contactType: 'customer service',
      areaServed: 'JP',
      availableLanguage: ['Japanese', 'English']
    },
    founders: [
      {
        '@type': 'Person',
        name: '山田 太郎',
        jobTitle: 'CEO',
        sameAs: 'https://www.linkedin.com/in/taro-yamada'
      }
    ],
    foundingDate: '2020-01-01',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '25'
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Workmate AI',
          alternateName: 'ワークメイトAI',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: 'Enterprise AI chatbot that streamlines access to internal knowledge, automates workflows, and enhances employee productivity with advanced natural language processing.',
          offers: {
            '@type': 'Offer',
            price: '50000',
            priceCurrency: 'JPY',
            priceValidUntil: '2024-12-31',
            availability: 'https://schema.org/InStock'
          }
        }
      }
    ],
    slogan: 'Transforming workplace productivity with AI',
    keywords: 'Workmate AI, enterprise AI, chatbot, productivity, knowledge management, workflow automation'
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default LocalBusiness; 