import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/work_mate.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/work_mate.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/work_mate.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/work_mate.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 