<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { usePreferencesStore } from '@/stores/preferences';
import { Globe2Icon } from 'lucide-vue-next';

const { locale, t } = useI18n();
const preferences = usePreferencesStore();

function setLanguage(lang: 'en' | 'nl') {
    locale.value = lang;
    preferences.lang = lang;
}
</script>

<template>
    <div class="flex items-center gap-3">
        <Globe2Icon class="h-4 w-4 text-navy opacity-50" />

        <div class="flex items-center gap-2 text-sm">
            <button
                @click="setLanguage('en')"
                class="font-semibold transition-all duration-300"
                :class="
                    locale === 'en'
                        ? 'scale-105 text-navy'
                        : 'text-navy/50 hover:text-navy/80'
                "
            >
                {{ t('common.en') }}
            </button>

            <span class="text-navy/20 select-none" aria-hidden="true"
                >&middot;</span
            >

            <button
                @click="setLanguage('nl')"
                class="font-semibold transition-all duration-300"
                :class="
                    locale === 'nl'
                        ? 'scale-105 text-navy'
                        : 'text-navy/50 hover:text-navy/80'
                "
            >
                {{ t('common.nl') }}
            </button>
        </div>
    </div>
</template>

<style scoped>
/* Smooth transitions between active states */
</style>
