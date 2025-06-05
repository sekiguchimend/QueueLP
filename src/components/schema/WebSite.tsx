import React from 'react';
import { Helmet } from 'react-helmet-async';

const WebSite = () => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.workmate-ai.jp/#website',
    name: 'Workmate AI | ワークメイトAI - 次世代の業務効率化AIチャットボット',
    alternateName: 'Workmate AI Chatbot',
    description: 'Workmate AI（ワークメイトAI）は、企業内知識の検索・活用を効率化し、社員の生産性を高める次世代型AIチャットボットです。社内情報へのアクセスを迅速化し、業務フローをスマートにします。',
    url: 'https://www.workmate-ai.jp/',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://www.workmate-ai.jp/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@id': 'https://www.workmate-ai.jp/#organization'
    },
    inLanguage: ['ja-JP', 'en-US'],
    availableLanguage: [
      {
        '@type': 'Language',
        name: 'Japanese',
        alternateName: 'ja'
      },
      {
        '@type': 'Language',
        name: 'English',
        alternateName: 'en'
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default WebSite; 