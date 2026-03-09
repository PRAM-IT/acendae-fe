<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { usePreferencesStore } from '@/stores/preferences';
import { Globe2Icon } from 'lucide-vue-next';

const { locale } = useI18n();
const store = usePreferencesStore();

const currentLang = computed(() => store.lang);

const switchLanguage = (newLocale: 'en' | 'nl') => {
  locale.value = newLocale;
  store.setLang(newLocale);
};
</script>

<template>
  <div class="flex items-center gap-3">
    <Globe2Icon class="w-4 h-4 text-navy opacity-50" />
    
    <div class="flex items-center gap-2 text-sm">
      <button 
        @click="switchLanguage('en')"
        class="font-semibold transition-all duration-300"
        :class="currentLang === 'en' ? 'text-navy scale-105' : 'text-navy/50 hover:text-navy/80'"
      >
        EN
      </button>
      
      <span class="text-navy/20 select-none">&middot;</span>
      
      <button 
        @click="switchLanguage('nl')"
        class="font-semibold transition-all duration-300"
        :class="currentLang === 'nl' ? 'text-navy scale-105' : 'text-navy/50 hover:text-navy/80'"
      >
        NL
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions between active states */
</style>
