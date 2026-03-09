<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Link } from '@inertiajs/vue3'
import { route } from 'ziggy-js'
import AppButton from '@/components/ui/AppButton.vue'

const { t } = useI18n()
</script>

<template>
  <section class="relative w-full overflow-hidden bg-white font-mona pt-[74px] flex items-center min-h-[700px] sm:min-h-[750px] md:min-h-[850px] lg:min-h-[660px] xl:min-h-[690px] 2xl:min-h-[707px]">
    <div class="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center justify-center gap-8 px-4 pt-0 pb-10 sm:gap-10 sm:px-5 sm:pt-2 sm:pb-12 md:gap-12 md:px-10 md:pt-12 md:pb-16 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:gap-x-[40px] lg:gap-y-0 lg:px-[60px] lg:py-0 xl:gap-x-[50px] xl:px-[75px] 2xl:gap-x-[60px] 2xl:px-[85px]">

      <!-- Left Column - Text Area -->
      <div 
        class="flex w-full flex-col items-start lg:w-[460px] xl:w-[580px] 2xl:w-[676px] lg:col-start-1 lg:row-start-1" 
        data-reveal="up"
      >
        
        <!-- Eyebrow Badge -->
        <div 
          class="mb-4 flex w-fit flex-row items-center rounded-full bg-[rgba(77,161,240,0.11)] px-3 py-1.5 sm:mb-5 sm:px-4 sm:py-2 md:mb-6 md:px-5 lg:mb-8 lg:px-[22px] lg:py-2.5 2xl:mb-[47px] 2xl:px-[24px] 2xl:py-3"
        >
          <span class="text-[12px] font-medium leading-tight text-[#1D4FBC] sm:text-[12px] md:text-[13px] lg:text-[14px]">
            {{ t('home.hero.eyebrow') }}
          </span>
        </div>

        <!-- Content Block -->
        <div class="mb-6 flex flex-col gap-4 sm:mb-7 sm:gap-5 md:mb-8 md:gap-6 lg:mb-8 lg:gap-[20px] xl:mb-10 xl:gap-[24px] 2xl:mb-[47px]">
          <h1 
            class="w-full text-[26px] font-semibold leading-[34px] text-[#0B1F3F] sm:text-[30px] sm:leading-[40px] md:text-[36px] md:leading-[48px] lg:text-[32px] lg:leading-[42px] xl:text-[38px] xl:leading-[52px] 2xl:text-[44px] 2xl:leading-[62px]"
          >
            {{ t('home.hero.title') }}
          </h1>

          <p 
            class="w-full text-[14px] font-normal leading-5 text-black/85 sm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[15px] lg:leading-[22px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
          >
            {{ t('home.hero.subtitle') }}
          </p>
        </div>
      </div>

      <!-- Right Column - Image Stack -->
      <div 
        class="group relative w-full overflow-hidden rounded-[6px] shadow-lg h-[320px] sm:h-[420px] md:h-[520px] lg:h-[440px] lg:w-[420px] xl:h-[500px] xl:w-[480px] 2xl:h-[563px] 2xl:w-[546px] lg:col-start-2 lg:row-span-2" 
        data-reveal="fade"
      >
        <!-- Photo -->
        <img
          src="/images/hero-team.png"
          :alt="t('home.hero.image_alt')"
          class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="eager"
        />

        <!-- Overlay Layer -->
        <div 
          class="absolute inset-0 z-10"
          style="background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(11, 31, 63, 0.6) 100%)"
        ></div>

        <!-- Caption & Play Button Group -->
        <div 
          class="absolute inset-x-0 bottom-4 z-20 flex px-4 sm:bottom-5 sm:px-5 md:bottom-6 md:px-6 lg:bottom-[30px] lg:px-6 xl:bottom-[45px] xl:px-10 2xl:bottom-[55px] 2xl:px-12"
        >
          <div class="ml-auto flex items-end gap-2 sm:gap-3 md:gap-4 lg:items-center lg:gap-5 xl:gap-8">
            <!-- Text Part -->
            <div class="max-w-[250px] text-right sm:max-w-[350px] md:max-w-[450px] lg:max-w-[280px] xl:max-w-[380px] 2xl:max-w-[420px]">
              <p class="text-[12px] font-medium leading-[16px] text-white sm:text-[13px] sm:leading-[18px] md:text-[14px] lg:text-[13px] lg:leading-[18px] xl:text-[16px] xl:leading-[22px]">
                {{ t('home.hero.image_caption') }}
              </p>
            </div>

            <!-- Play Button -->
            <button
              class="flex shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-[#FCF2F2] shadow-md transition-transform hover:scale-110 w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[52px] md:h-[52px] lg:w-[48px] lg:h-[48px] xl:w-[58px] xl:h-[58px]"
              :aria-label="t('home.hero.play_aria')"
            >
              <svg viewBox="0 0 19 25" fill="none" class="ml-1 w-[14px] h-[18px] sm:w-[15px] sm:h-[20px] md:w-[16px] md:h-[21px] lg:w-[15px] lg:h-[20px] xl:w-[19px] xl:h-[25px]">
                <path d="M2 2L17 12.5L2 23V2" fill="#1D1D1D" stroke="#1D1D1D" stroke-width="1.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Column - CTA Buttons (Moves below image on small screens) -->
      <div 
        class="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row lg:gap-[12px] lg:col-start-1 lg:row-start-2 lg:w-[460px] xl:w-[580px] 2xl:w-[676px]" 
        data-reveal="up"
        data-reveal-delay="100"
      >
        <!-- Primary CTA -->
        <AppButton
          variant="primary"
          tag="Link"
          :href="route('services.outsource')"
          class="!flex !h-[48px] !w-full !items-center !justify-center !gap-[10px] !border-0 !bg-[#0B1F3F] !px-4 sm:!h-[50px] md:!h-[50px] md:!w-auto md:!px-5 lg:!h-[48px] lg:!w-[185px] xl:!h-[52px] xl:!w-[210px] 2xl:!h-[55px] 2xl:!w-[228px] !rounded-[8px] 2xl:!px-[15px] 2xl:!pr-[20px]"
        >
          <div class="flex items-center gap-[10px]">
            <div class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(0,166,126,0.17)] md:h-[18px] md:w-[18px] 2xl:h-5 2xl:w-5">
              <div class="h-1.5 w-1.5 rounded-full bg-[#0A5E4A] md:h-[7px] md:w-[7px] 2xl:h-2 2xl:w-2"></div>
            </div>
            <span class="text-[13px] font-semibold leading-[13px] text-white sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]">
              {{ t('home.hero.cta_outsource') }}
            </span>
          </div>
        </AppButton>

        <!-- Outline CTA -->
        <AppButton
          variant="outline"
          tag="Link"
          :href="route('services.dedicated-team')"
          class="!flex !h-[48px] !w-full !items-center !justify-center !bg-transparent !px-4 sm:!h-[50px] md:!h-[50px] md:!w-auto md:!px-5 lg:!h-[48px] lg:!w-[185px] xl:!h-[52px] xl:!w-[205px] 2xl:!h-[55px] 2xl:!w-[221px] !rounded-[8px] 2xl:!px-[20px] !border-[rgba(11,31,63,0.67)]"
        >
          <span class="text-[13px] font-medium leading-[13px] text-[#0B1F3F] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]">
            {{ t('home.hero.cta_team') }}
          </span>
        </AppButton>
      </div>

    </div>
  </section>
</template>

<style scoped>
.font-mona {
  font-family: 'Mona Sans', sans-serif;
}
</style>
