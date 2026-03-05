<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/ui/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="flex flex-col lg:flex-row border-y border-[var(--color-border)] bg-white w-full">
    <!-- Left: Content -->
    <div class="lg:w-[720px] shrink-0 p-10 lg:p-[90px] lg:px-[88px]" data-reveal="up">
      <h2 class="font-bold text-[32px] lg:text-[40px] leading-[1.2] text-[var(--color-navy)] mb-2">
        {{ t('home.join.title', 'Join the climb') }}
      </h2>
      <p class="font-semibold text-[20px] lg:text-[22px] leading-[1.41] text-[#152746] mb-8">
        {{ t('home.join.subtitle', 'We are always looking for people who care.') }}
      </p>

      <p class="text-[18px] leading-relaxed text-black/85 mb-4">
        {{ t('home.join.body1', 'At Acendae, we don\'t just write code or design screens. We solve real problems for real businesses.') }}
      </p>
      <p class="text-[18px] leading-relaxed text-black/85 mb-4">
        {{ t('home.join.body2', 'We are a team that values structure, open communication, and taking ownership.') }}
      </p>

      <p class="font-semibold text-[18px] text-[var(--color-navy)] mt-6 mb-4">
        {{ t('home.join.who_label', 'Who we are looking for:') }}
      </p>
      <ul class="flex flex-col gap-4 mb-6">
        <li
          v-for="value in (t('home.join.values', { returnObjects: true }) as unknown as string[])"
          :key="value"
          class="flex items-start gap-2.5 text-[16px] leading-relaxed text-[#081B3A]"
        >
          <span class="w-[15px] h-[15px] rounded-full bg-[#D5E2FF] inline-flex items-center justify-center shrink-0 mt-[3px] relative">
            <span class="absolute w-[11px] h-[11px] bg-[#1D4FBC] rounded-full"></span>
          </span>
          {{ value }}
        </li>
      </ul>

      <p class="text-[18px] leading-relaxed text-black/85 mb-4">
        {{ t('home.join.body3', 'If you want to work on complex, high-impact projects — you belong here.') }}
      </p>
      <p class="text-[18px] leading-relaxed text-black/85 mb-9">
        {{ t('home.join.body4', 'We work hard, but we also respect boundaries. Because sustainable growth applies to people, too.') }}
      </p>

      <AppButton variant="primary" size="lg" tag="a" href="/careers">
        <template #icon-left>
          <span class="w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0" style="background:rgba(0,166,126,0.17)">
            <span class="w-2 h-2 bg-[#0A5E4A] rounded-full"></span>
          </span>
        </template>
        {{ t('home.join.cta', 'View open positions') }}
      </AppButton>
    </div>

    <!-- Right: Dark quote panel -->
    <div
      class="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-12 lg:p-20 text-center min-h-[380px]"
      style="background: linear-gradient(180deg, #123C89 0%, #070F1C 100%)"
      aria-hidden="true"
      data-reveal="fade"
    >
      <!-- Decorative logo -->
      <div class="absolute top-10 left-10 pointer-events-none" style="opacity:0.2">
        <svg width="120" height="100" viewBox="0 0 560 485" fill="none">
          <g opacity="0.86">
            <path d="M495.518 0L348.712 415.875L394.485 414.776L495.518 0Z" fill="#D7A118"/>
            <path d="M350.64 415.715L285.198 244.809L312.414 192.278L373.088 353.019L350.64 415.715Z" fill="#AB7B29"/>
            <path d="M269.024 193.339L61.7849 469.98L61.4954 470.273L170.291 467.659L312.399 192.297L269.024 193.339Z" fill="#D7A118"/>
          </g>
        </svg>
      </div>

      <blockquote class="font-bold text-[28px] lg:text-[36px] leading-[1.25] text-white relative z-10 m-0 border-none">
        "{{ t('home.join.right_quote', 'Empowering global talent to do their best work.') }}"
      </blockquote>

      <!-- Gold dots decoration -->
      <div class="absolute bottom-10 right-10 flex gap-2.5">
        <div class="w-4 h-4 rounded-full" style="background:rgba(255,183,0,0.74)"></div>
        <div class="w-4 h-4 rounded-full" style="background:rgba(255,183,0,0.74);opacity:0.6"></div>
      </div>
    </div>
  </section>
</template>
