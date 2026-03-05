<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/ui/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="bg-white py-16 lg:py-[80px] px-5 lg:px-[85px] border-b border-[var(--color-border)]">
    <div class="max-w-[1270px] mx-auto">
      <div class="text-center mb-10 lg:mb-14" data-reveal="up">
        <h2 class="font-bold text-[26px] lg:text-[40px] leading-[1.2] text-[var(--color-navy)] mb-2">
          {{ t('home.two_ways.title', 'Two ways to work with us') }}
        </h2>
        <p class="text-[18px] text-black/85 max-w-2xl mx-auto">
          {{ t('home.two_ways.subtitle', 'Depending on your needs, we integrate as a full project team or scale your existing capacity.') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 rounded-[12px] md:rounded-[20px] overflow-hidden border border-[#C3CCDE]/30" data-reveal="up">
        <!-- Outsource card -->
        <div class="flex flex-col border-b md:border-b-0 md:border-r border-[#C3CCDE]/30 p-8 lg:p-[60px]">
          <h3 class="font-bold text-[26px] lg:text-[36px] leading-[1.2] text-[#1A2D4B] mb-1.5">
            {{ t('home.two_ways.outsource.title', 'Outsource') }}
          </h3>
          <p class="font-semibold text-[18px] text-[#1A2D4B] leading-[1.4] mb-6">
            {{ t('home.two_ways.outsource.subtitle', 'A complete project delivery') }}
          </p>
          <p class="text-[18px] leading-relaxed text-black/85 mb-5">
            {{ t('home.two_ways.outsource.body', 'You have a project that needs to be built from scratch, or an existing platform that requires a major overhaul. We take full ownership of the process.') }}
          </p>

          <p class="text-[18px] leading-relaxed text-black/85 mb-4">
            {{ t('home.two_ways.outsource.guide_label', 'Perfect if you need:') }}
          </p>
          <ul class="flex flex-col gap-3.5 mb-6">
            <li
              v-for="item in (t('home.two_ways.outsource.items', { returnObjects: true }) as unknown as string[])"
              :key="item"
              class="flex items-start gap-2.5 text-[18px] leading-relaxed text-[#081B3A]"
            >
              <span class="w-[15px] h-[15px] rounded-full bg-[#D5E2FF] inline-flex items-center justify-center shrink-0 mt-1 relative">
                <span class="absolute w-[11px] h-[11px] bg-[#1D4FBC] rounded-full"></span>
              </span>
              {{ item }}
            </li>
          </ul>

          <p class="text-[16px] leading-relaxed text-black/60 mb-8 flex-1">
            {{ t('home.two_ways.outsource.footer_note', 'We manage the team, the process, and the delivery.') }}
          </p>

          <div class="mt-auto">
            <AppButton variant="primary" size="lg" tag="a" href="/services/outsource" class="w-full justify-center">
              <template #icon-left>
                <span class="w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0" style="background:rgba(0,166,126,0.17)">
                  <span class="w-2 h-2 bg-[#0A5E4A] rounded-full"></span>
                </span>
              </template>
              {{ t('home.two_ways.outsource.cta', 'Explore Outsourcing') }}
              <template #icon-right>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </AppButton>
          </div>
        </div>

        <!-- Dedicated team card -->
        <div class="flex flex-col p-8 lg:p-[60px]">
          <h3 class="font-bold text-[26px] lg:text-[36px] leading-[1.2] text-[#1A2D4B] mb-1.5">
            {{ t('home.two_ways.team.title', 'Dedicated Team') }}
          </h3>
          <p class="font-semibold text-[18px] text-[#1A2D4B] leading-[1.4] mb-6">
            {{ t('home.two_ways.team.subtitle', 'Scale your exact capacity') }}
          </p>
          <p class="text-[18px] leading-relaxed text-black/85 mb-5">
            {{ t('home.two_ways.team.body', 'You have an ongoing operation but lack the technical capacity. We provide dedicated engineers who integrate directly into your workflows.') }}
          </p>

          <p class="text-[18px] leading-relaxed text-black/85 mb-4">
            {{ t('home.two_ways.team.guide_label', 'Perfect if you need:') }}
          </p>
          <ul class="flex flex-col gap-3.5 mb-6">
            <li
              v-for="item in (t('home.two_ways.team.items', { returnObjects: true }) as unknown as string[])"
              :key="item"
              class="flex items-start gap-2.5 text-[18px] leading-relaxed text-[#081B3A]"
            >
              <span class="w-[15px] h-[15px] rounded-full bg-[#D5E2FF] inline-flex items-center justify-center shrink-0 mt-1 relative">
                <span class="absolute w-[11px] h-[11px] bg-[#1D4FBC] rounded-full"></span>
              </span>
              {{ item }}
            </li>
          </ul>

          <p class="text-[16px] leading-relaxed text-black/60 mb-8 flex-1">
            {{ t('home.two_ways.team.footer_note', 'You manage the product, we manage the people.') }}
          </p>

          <div class="mt-auto">
            <AppButton variant="outline" size="lg" tag="a" href="/services/dedicated-team" class="w-full justify-center">
              {{ t('home.two_ways.team.cta', 'Explore Dedicated Teams') }}
              <template #icon-right>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
