<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/ui/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="relative bg-white pt-[var(--navbar-height)] min-h-[707px] flex items-center">
    <div class="acendae-container grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-10 py-16 lg:py-[70px] items-center">

      <!-- Content column -->
      <div class="flex flex-col max-w-[676px]" data-reveal="up">

        <!-- Eyebrow badge -->
        <div class="inline-flex items-center gap-[10px] px-[18px] py-[10px] rounded-2xl w-max mb-6" style="background: rgba(77,161,240,0.11)">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true" class="shrink-0">
            <rect width="15" height="15" rx="7.5" fill="#D5E2FF"/>
            <circle cx="7.5" cy="7.5" r="5.5" fill="#1D4FBC"/>
          </svg>
          <span class="font-medium text-[14px] text-[#1D4FBC]">
            {{ t('home.hero.eyebrow', 'Dutch strategy. World-class execution. One integrated team') }}
          </span>
        </div>

        <!-- Headline -->
        <h1 class="font-bold text-[32px] md:text-[44px] leading-tight md:leading-[1.41] text-[var(--color-navy)] mb-4 lg:mb-[10px] text-balance">
          {{ t('home.hero.title', 'Every business has its mountain. Acendae is the guide.') }}
        </h1>

        <!-- Subtitle -->
        <p class="text-[16px] md:text-[18px] leading-relaxed text-black/85 mb-8 lg:mb-[47px]">
          {{ t('home.hero.subtitle', 'We help businesses ascend through strategy, technology, and people. From first steps to scalable systems — we climb together, step by step.') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <AppButton
            variant="primary"
            size="lg"
            tag="a"
            href="/services/outsource"
            class="w-full sm:w-auto min-w-[200px]"
          >
            <template #icon-left>
              <span class="w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0" style="background: rgba(0,166,126,0.17)">
                <span class="w-2 h-2 bg-[#0A5E4A] rounded-full"></span>
              </span>
            </template>
            {{ t('home.hero.cta_outsource', 'Outsource a project') }}
          </AppButton>

          <AppButton
            variant="outline"
            size="lg"
            tag="a"
            href="/services/dedicated-team"
            class="w-full sm:w-auto min-w-[200px]"
          >
            {{ t('home.hero.cta_team', 'Build a dedicated team') }}
            <template #icon-right>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="shrink-0">
                <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </AppButton>
        </div>
      </div>

      <!-- Image column -->
      <div class="w-full h-full flex justify-center lg:justify-end" data-reveal="fade">
        <div class="relative w-full max-w-[546px] rounded-lg overflow-hidden h-[400px] lg:h-[563px] shadow-lg group">
          <img
            src="/images/hero-team.png"
            :alt="t('home.hero.image_alt', 'Acendae Team')"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />

          <!-- Gradient & Play Button Overlay -->
          <div class="absolute inset-0 flex items-end justify-between p-7 text-white pointer-events-none" style="background: linear-gradient(to top, rgba(11,31,63,0.75) 0%, transparent 60%)">
            <p class="font-medium text-[15px] leading-[1.25] max-w-[260px]">
              {{ t('home.hero.image_caption', 'From idea to scale — strategy, design, technology, and teams that grow with you.') }}
            </p>
            <button
              class="w-[58px] h-[58px] bg-[#FCF2F2] hover:bg-white rounded-full flex items-center justify-center transition-transform hover:scale-105 pointer-events-auto shrink-0 border-0 cursor-pointer"
              :aria-label="t('home.hero.play_aria', 'Play video')"
              type="button"
            >
              <svg width="19" height="25" viewBox="0 0 19 25" fill="none" aria-hidden="true" class="ml-1">
                <path d="M2 2L17 12.5L2 23V2Z" fill="#1D1D1D" stroke="#1D1D1D" stroke-width="1.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
