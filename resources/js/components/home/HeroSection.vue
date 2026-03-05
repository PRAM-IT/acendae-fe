<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Link } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AppButton from '@/components/ui/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="relative bg-white pt-[74px] min-h-[707px] flex items-center overflow-hidden font-mona">
    <!-- Container: 1440px max, 85px h-padding (desktop), 40px (tablet), 20px (mobile) -->
    <div class="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[85px] py-16 lg:py-0 flex flex-col lg:flex-row items-center justify-center gap-[60px]">

      <!-- Left Column: exactly 676px wide on desktop -->
      <div class="w-full lg:w-[676px] flex flex-col items-start" data-reveal="up">
        
        <!-- Eyebrow Badge (47px gap below) -->
        <div 
          class="flex flex-row items-center bg-[rgba(77,161,240,0.11)] rounded-[16px] px-[18px] pr-[24px] py-[10px] w-full max-w-[438px] h-[47px] mb-[47px]"
        >
          <div class="flex items-center gap-[18px]">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" class="shrink-0">
              <rect width="15" height="15" rx="7.5" fill="#D5E2FF"/>
              <circle cx="7.5" cy="7.5" r="5.5" fill="#1D4FBC"/>
            </svg>
            <span class="font-medium text-[14px] leading-[27px] text-[#1D4FBC] whitespace-nowrap">
              {{ t('home.hero.eyebrow') }}
            </span>
          </div>
        </div>

        <!-- Content Block (Headline + Subline, 24px gap between, 47px gap below) -->
        <div class="flex flex-col gap-[24px] mb-[47px]">
          <!-- Headline: 44px (desktop), 30px (mobile), 62px line-height -->
          <h1 
            class="font-semibold text-[30px] md:text-[44px] leading-[1.3] md:leading-[62px] text-[#0B1F3F] w-full lg:w-[689px] lg:-mr-[13px]"
          >
            {{ t('home.hero.title') }}
          </h1>

          <!-- Subline: 18px, 27px line-height -->
          <p 
            class="font-normal text-[18px] leading-[27px] text-black/85 w-full lg:w-[676px]"
          >
            {{ t('home.hero.subtitle') }}
          </p>
        </div>

        <!-- CTA Buttons (Gap 12px) -->
        <div class="flex flex-col sm:flex-row items-center gap-[12px] w-full sm:w-auto">
          <!-- Primary CTA (228px x 55px) -->
          <AppButton
            variant="primary"
            tag="Link"
            :href="route('services.outsource')"
            class="!w-full sm:!w-[228px] !h-[55px] !rounded-[8px] !bg-[#0B1F3F] !px-[15px] !pr-[20px] !border-0 flex items-center justify-center gap-[10px]"
          >
            <div class="flex items-center gap-[10px]">
              <div class="w-5 h-5 bg-[rgba(0,166,126,0.17)] rounded-full flex items-center justify-center shrink-0">
                <div class="w-2 h-2 bg-[#0A5E4A] rounded-full"></div>
              </div>
              <span class="text-[16px] font-semibold text-white leading-[16px]">
                {{ t('home.hero.cta_outsource') }}
              </span>
            </div>
          </AppButton>

          <!-- Outline CTA (221px x 55px) -->
          <AppButton
            variant="outline"
            tag="Link"
            :href="route('services.dedicated-team')"
            class="!w-full sm:!w-[221px] !h-[55px] !rounded-[8px] !border-[rgba(11,31,63,0.67)] !p-[10px] !px-[20px] flex items-center justify-center gap-[10px] !bg-transparent"
          >
            <div class="flex items-center gap-[6px]">
              <span class="text-[16px] font-medium text-[#0B1F3F] leading-[16px]">
                {{ t('home.hero.cta_team') }}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="shrink-0">
                <path d="M3 13L13 3M13 3H7M13 3V9" stroke="#0B1F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </AppButton>
        </div>
      </div>

      <!-- Right Column: 546px wide x 563px tall -->
      <div 
        class="relative w-full lg:w-[546px] h-[300px] sm:h-[400px] lg:h-[563px] rounded-[6px] overflow-hidden group shadow-lg" 
        data-reveal="fade"
      >
        <!-- Photo -->
        <img
          src="/images/hero-team.png"
          :alt="t('home.hero.image_alt')"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="eager"
        />

        <!-- Overlay Layer -->
        <div 
          class="absolute inset-0 z-10"
          style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(11, 31, 63, 0.6) 100%)"
        ></div>

        <!-- Caption Layer -->
        <div 
          class="absolute left-0 lg:left-[82px] bottom-[35px] w-full lg:w-[350px] px-8 lg:px-0 text-right text-white z-20"
        >
          <p class="font-medium text-[16px] leading-[20px]">
            {{ t('home.hero.image_caption') }}
          </p>
        </div>

        <!-- Action Layer (Play Button) -->
        <div class="absolute right-[35px] bottom-[26px] z-30">
          <button
            class="w-[58px] h-[58px] bg-[#FCF2F2] rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer shadow-md border-0"
            :aria-label="t('home.hero.play_aria')"
          >
            <svg width="19" height="25" viewBox="0 0 19 25" fill="none" class="ml-1">
              <path d="M2 2L17 12.5L2 23V2" fill="#1D1D1D" stroke="#1D1D1D" stroke-width="1.5"/>
            </svg>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.font-mona {
  font-family: 'Mona Sans', sans-serif;
}
</style>
