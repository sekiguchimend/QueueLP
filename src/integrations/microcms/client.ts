import { createClient } from 'microcms-js-sdk';

if (!import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('VITE_MICROCMS_SERVICE_DOMAIN is required');
}

if (!import.meta.env.VITE_MICROCMS_API_KEY) {
  throw new Error('VITE_MICROCMS_API_KEY is required');
}

export const microCMSClient = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

console.log('microCMS Configuration:', {
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY.substring(0, 4) + '...',
}); 