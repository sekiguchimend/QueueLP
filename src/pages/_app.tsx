// _app.tsx
import { useEffect, useState } from 'react';
import App from '../App'; // App.tsx をインポート
import '@/index.css'; // グローバルCSSをインポート
import '../App.css'; // App.cssをインポー

export default function CustomApp() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <App />;
}