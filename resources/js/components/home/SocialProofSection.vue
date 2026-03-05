<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="w-full border-y border-[var(--color-border)] flex flex-col lg:flex-row bg-white" aria-label="About Acendae">
    
    <!-- Left: Dark panel -->
    <div class="relative w-full lg:w-[40%] xl:w-[576px] shrink-0 bg-gradient-to-b from-[#0E2A66] to-[#0B244E] px-8 py-16 lg:px-[74px] lg:py-[70px] overflow-hidden" data-reveal="fade">
      
      <!-- Decorative logo watermark -->
      <div class="absolute -right-10 -bottom-10 pointer-events-none opacity-50" aria-hidden="true">
        <svg width="260" height="210" viewBox="0 0 560 485" fill="none">
          <g opacity="0.86">
            <path d="M495.518 0L348.712 415.875L394.485 414.776L495.518 0Z" fill="var(--color-gold)"/>
            <path d="M350.64 415.715L285.198 244.809L312.414 192.278L373.088 353.019L350.64 415.715Z" fill="#AB7B29"/>
            <path d="M269.024 193.339L61.7849 469.98L61.4954 470.273L170.291 467.659L312.399 192.297L269.024 193.339Z" fill="var(--color-gold)"/>
          </g>
        </svg>
      </div>

      <h2 class="relative z-10 font-bold text-[32px] md:text-[40px] leading-[1.2] text-white max-w-[427px] mb-10">
        {{ t('home.social_proof.title', 'Progress is not a shortcut. It’s a journey.') }}
      </h2>
      <p class="relative z-10 text-[18px] leading-relaxed text-white/85 max-w-[427px]">
        {{ t('home.social_proof.body', 'Acendae was born from the idea of ascension rising with intention, structure, and trust. We believe sustainable growth is built step by step, not rushed through quick wins. Many businesses struggle with unclear technical decisions, unreliable delivery, or scaling their teams at the wrong moment. That’s where we come in. We partner with organisations at every stage of their journey — from launching a first website, to building complex software, to scaling through automation or dedicated teams.') }}
      </p>
    </div>

    <!-- Right: Two-column country grid -->
    <div class="flex-1 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] lg:border-l border-[var(--color-border)]">
      
      <!-- Sri Lanka Column -->
      <div class="px-8 xl:px-11 py-10 xl:py-[50px] border-b md:border-b-0 md:border-r border-[var(--color-border)]" data-reveal="up">
        <h3 class="font-bold text-[22px] text-[#1A2D4B] leading-[2.2] mb-3">
          {{ t('home.social_proof.sri_lanka.title', 'Sri Lanka') }}
        </h3>
        <p class="text-[18px] leading-relaxed text-black/85 mb-4">
          {{ t('home.social_proof.sri_lanka.body', 'Top-tier technical talent, deep engineering expertise, innovation, and execution power. This is where ideas are built, scaled, and refined.') }}
        </p>
        <p class="text-[18px] leading-relaxed text-black/85">
          {{ t('home.social_proof.sri_lanka.body2', 'Together, this allows our clients to move faster without losing control — and scale without sacrificing quality. This is not outsourcing. This is one global team, aligned in standards, ownership, and ambition.') }}
        </p>
      </div>

      <!-- Netherlands Column -->
      <div class="px-8 xl:px-11 py-10 xl:py-[50px]" data-reveal="up">
        <h3 class="font-bold text-[22px] text-[#1A2D4B] leading-[2.2] mb-3">
          {{ t('home.social_proof.netherlands.title', 'The Netherlands') }}
        </h3>
        <p class="text-[18px] leading-relaxed text-black/85">
          {{ t('home.social_proof.netherlands.body', 'Strategy, structure, clarity, client relationships, and premium quality. This is where vision is shaped and direction is set.') }}
        </p>
      </div>

      <!-- Location banner (Spans full width) -->
      <div class="col-span-1 md:col-span-2 border-t border-[var(--color-border)] px-8 xl:px-11 py-8 flex flex-col md:flex-row items-start md:items-center gap-6" data-reveal="up">
        <div class="flex items-center" aria-hidden="true">
          <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-2xl bg-[#f0f0f0] overflow-hidden -mr-3 z-10 shadow-sm">🇱🇰</div>
          <div class="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-2xl bg-[#f0f0f0] overflow-hidden z-20 shadow-sm">🇳🇱</div>
        </div>
        <p class="font-bold text-[22px] xl:text-[24px] text-[#1A2D4B] leading-[1.33]">
          {{ t('home.social_proof.location_tagline', 'Dutch strategy. Sri Lankan execution. One team.') }}
        </p>
      </div>
      
    </div>
  </section>

  <!-- World Map Strip Section -->
  <div class="w-full flex flex-col lg:flex-row items-center border-b border-[var(--color-border)] bg-white px-8 md:px-[85px] py-10 lg:py-12 gap-8 lg:gap-[60px] overflow-hidden" aria-hidden="true">
    
    <!-- Map Canvas -->
    <div class="flex-1 w-full relative min-h-[200px] lg:min-h-[268px]" data-reveal="fade">
      <img src="/images/world-map-dots.png" alt="" class="w-full object-cover opacity-85" onerror="this.src='/images/world-map-dots.png'" />
      
      <!-- Amsterdam pin -->
      <div class="absolute flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2" style="left: 45%; top: 32%">
        <div class="w-5 h-5 rounded-full relative bg-[radial-gradient(circle,rgba(77,161,240,0.2)_0%,rgba(0,46,118,0.5)_100%)]">
            <div class="absolute inset-[4px] bg-[var(--color-navy)] rounded-full"></div>
        </div>
        <div class="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-navy)] whitespace-nowrap">
          <span class="text-[16px]">🇳🇱</span>
          Amsterdam, NL
        </div>
      </div>

      <!-- Colombo pin -->
      <div class="absolute flex flex-col items-center gap-1.5 -translate-x-1/2 -translate-y-1/2" style="left: 70%; top: 65%">
        <div class="w-5 h-5 rounded-full relative bg-[radial-gradient(circle,rgba(77,161,240,0.2)_0%,rgba(0,46,118,0.5)_100%)]">
            <div class="absolute inset-[4px] bg-[var(--color-navy)] rounded-full"></div>
        </div>
        <div class="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-navy)] whitespace-nowrap">
          <span class="text-[16px]">🇱🇰</span>
          Colombo, LK
        </div>
      </div>
    </div>
  </div>
</template>
