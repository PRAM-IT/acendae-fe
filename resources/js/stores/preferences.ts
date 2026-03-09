import { ref } from 'vue';
import { defineStore } from 'pinia';

export const usePreferencesStore = defineStore(
    'preferences',
    () => {
        /** User's preferred language — persisted to localStorage */
        const lang = ref<'en' | 'nl'>('en');

        function setLang(l: 'en' | 'nl'): void {
            lang.value = l;
        }

        /** Dark mode toggle — persisted to localStorage */
        const darkMode = ref(false);

        function toggleDarkMode(): void {
            darkMode.value = !darkMode.value;
        }

        return {
            lang,
            setLang,
            darkMode,
            toggleDarkMode,
        };
    },
    {
        persist: true,
    },
);

export type PreferencesStore = ReturnType<typeof usePreferencesStore>;
