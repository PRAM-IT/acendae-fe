import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import nl from '@/locales/nl.json';

export type MessageSchema = typeof en;

export const i18n = createI18n<[MessageSchema], 'en' | 'nl'>({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        nl,
    },
    // Ensure we can return objects/arrays for lists
    missingWarn: false,
    fallbackWarn: false,
});

// Type augmentation for useI18n and global $t
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $t: (key: string, ...args: any[]) => string;
    }
}

export default i18n;
