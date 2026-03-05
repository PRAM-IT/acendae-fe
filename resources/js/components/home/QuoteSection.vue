<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-[340px] flex items-center justify-center overflow-hidden border-b border-[var(--color-border)]" :aria-label="t('home.quote.aria_label', 'Customer Quote')">
    <div class="absolute inset-0 bg-gradient-to-b from-[#0B1F3F]/80 to-[#0B1F3F]/90 bg-cover bg-center z-0" style="background-image: url('/images/quote-bg.png'); background-blend-mode: overlay;" aria-hidden="true"></div>
    <blockquote class="relative z-10 font-bold text-[22px] lg:text-[38px] leading-[1.3] text-center text-white max-w-[900px] px-6 py-12 lg:px-[85px] lg:py-[60px] m-0 border-none" data-reveal="scale">
      <span class="text-[40px] lg:text-[64px] leading-[0.5] align-[-0.25em] text-[#D7A118]/70 mx-1" aria-hidden="true">"</span>
      {{ t('home.quote.text', 'By letting Acendae manage our technical load, we could focus entirely on expanding our market presence.') }}
      <span class="text-[40px] lg:text-[64px] leading-[0.5] align-[-0.25em] text-[#D7A118]/70 mx-1" aria-hidden="true">"</span>
    </blockquote>
  </section>
</template>
