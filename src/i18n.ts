import { getRequestConfig } from 'next-intl/server';
import coreEn from '@/core/i18n/en.json';
import authEn from '@/features/auth/i18n/en.json';
import chatSessionEn from '@/features/chat-session/i18n/en.json';

export default getRequestConfig(async () => {
  // Merge all translations
  const messages = {
    ...coreEn,
    ...authEn,
    ...chatSessionEn,
  };

  return {
    locale: 'en',
    messages,
  };
});
