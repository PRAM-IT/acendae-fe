<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/ui/AppButton.vue'

const { t } = useI18n()

const activeTab = ref(0)

const tabs = computed(() => [
  t('home.units.tabs.development', 'Web & App Development'),
  t('home.units.tabs.engineering', 'Platform Engineering'),
  t('home.units.tabs.outsourcing', 'Team Outsourcing'),
  t('home.units.tabs.experience', 'Digital Experience'),
])

interface UnitData {
  key: string
  image: string
  imageAlt: string
  ctaPrimary: string
  ctaPrimaryHref: string
  ctaSecondary: string
  ctaSecondaryHref: string
}

const units = computed<UnitData[]>(() => [
  {
    key: 'development',
    image: '/images/units/development.png',
    imageAlt: t('home.units.development.image_alt', 'Development'),
    ctaPrimary: t('home.units.development.cta_primary', 'Outsource a project'),
    ctaPrimaryHref: '/services/outsource',
    ctaSecondary: t('home.units.development.cta_secondary', 'Build a team'),
    ctaSecondaryHref: '/services/dedicated-team',
  },
  {
    key: 'engineering',
    image: '/images/units/engineering.png',
    imageAlt: t('home.units.engineering.image_alt', 'Engineering'),
    ctaPrimary: t('home.units.engineering.cta_primary', 'View our capabilities'),
    ctaPrimaryHref: '/services/outsource',
    ctaSecondary: t('home.units.engineering.cta_secondary', 'Speak to an expert'),
    ctaSecondaryHref: '/services/dedicated-team',
  },
  {
    key: 'outsourcing',
    image: '/images/units/outsourcing.png',
    imageAlt: t('home.units.outsourcing.image_alt', 'Outsourcing'),
    ctaPrimary: t('home.units.outsourcing.cta_primary', 'Find developers'),
    ctaPrimaryHref: '/services/outsource',
    ctaSecondary: t('home.units.outsourcing.cta_secondary', 'Learn about models'),
    ctaSecondaryHref: '/services/dedicated-team',
  },
  {
    key: 'experience',
    image: '/images/units/experience.png',
    imageAlt: t('home.units.experience.image_alt', 'Experience'),
    ctaPrimary: t('home.units.experience.cta_primary', 'See case studies'),
    ctaPrimaryHref: '/services/outsource',
    ctaSecondary: t('home.units.experience.cta_secondary', 'Request a review'),
    ctaSecondaryHref: '/services/dedicated-team',
  },
])

const currentUnit = computed(() => units.value[activeTab.value])
</script>

<template>
  <section class="py-16 lg:py-20 bg-white border-b border-[var(--color-border)]">
    <div class="text-center mb-10 max-w-[800px] mx-auto px-5" data-reveal="up">
      <h2 class="font-bold text-[26px] lg:text-[40px] leading-[1.2] text-[var(--color-navy)] mb-2">
        {{ t('home.units.title', 'Our capability units') }}
      </h2>
      <p class="text-[18px] text-black/85">
        {{ t('home.units.subtitle', 'Specialized teams for specific challenges.') }}
      </p>
    </div>

    <!-- Tab navigation -->
    <div
      class="max-w-[1271px] mx-auto w-full border border-[var(--color-border)] flex overflow-x-auto"
      role="tablist"
      :aria-label="t('home.units.tabs_aria', 'Capability units')"
      data-reveal="up"
    >
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        class="flex-1 min-w-[max-content] lg:min-w-0 px-4 py-3.5 lg:px-2.5 lg:py-[22px] text-center text-[14px] lg:text-[18px] transition-all duration-200 border-r border-[var(--color-border)] bg-white last:border-r-0"
        :class="activeTab === i
          ? 'bg-[#F3F5FB] text-black/85 font-medium'
          : 'text-black/36 font-normal hover:text-black/70 hover:bg-gray-50'"
        role="tab"
        :aria-selected="activeTab === i"
        :aria-controls="`unit-panel-${i}`"
        :id="`unit-tab-${i}`"
        @click="activeTab = i"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Panel -->
    <div class="max-w-[1271px] mx-auto w-full" data-reveal="fade">
      <Transition name="fade" mode="out-in">
        <div
          :key="activeTab"
          class="flex flex-col border border-[var(--color-border)] border-t-0"
          :class="activeTab % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
          style="background: rgba(249,251,255,0.71)"
          role="tabpanel"
          :id="`unit-panel-${activeTab}`"
          :aria-labelledby="`unit-tab-${activeTab}`"
        >
          <!-- Content Panel -->
          <div class="flex-none lg:w-[580px] p-8 lg:px-[58px] lg:py-[60px] flex flex-col gap-6 lg:gap-7">
            <div>
              <h3 class="font-bold text-[26px] lg:text-[36px] leading-[1.3] text-[#0C2143] mb-1.5">
                {{ t(`home.units.${currentUnit.key}.name`, 'Custom Software') }}
              </h3>
              <p class="font-semibold text-[18px] leading-[1.5] text-black/75">
                {{ t(`home.units.${currentUnit.key}.tagline`, 'Built to last') }}
              </p>
            </div>

            <p class="text-[18px] leading-[1.5] text-black/85">
              {{ t(`home.units.${currentUnit.key}.description`, 'From MVP to enterprise systems, we build scalable software that fits your business.') }}
            </p>

            <ul class="flex flex-col gap-3.5">
              <li
                v-for="item in (t(`home.units.${currentUnit.key}.features`, { returnObjects: true }) as unknown as string[])"
                :key="item"
                class="flex items-start gap-2.5 text-[16px] leading-[1.5] text-[#081B3A]"
              >
                <span class="w-[15px] h-[15px] rounded-full bg-[#D5E2FF] inline-flex items-center justify-center shrink-0 mt-[3px] relative">
                  <span class="absolute w-[11px] h-[11px] bg-[#1D4FBC] rounded-full"></span>
                </span>
                {{ item }}
              </li>
            </ul>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-auto pt-4">
              <AppButton variant="primary" size="md" tag="a" :href="currentUnit.ctaPrimaryHref">
                <template #icon-left>
                  <span class="w-5 h-5 rounded-full inline-flex items-center justify-center shrink-0" style="background:rgba(0,166,126,0.17)">
                    <span class="w-2 h-2 bg-[#0A5E4A] rounded-full"></span>
                  </span>
                </template>
                {{ currentUnit.ctaPrimary }}
                <template #icon-right>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
              </AppButton>

              <AppButton variant="ghost" size="md" tag="a" :href="currentUnit.ctaSecondaryHref">
                {{ currentUnit.ctaSecondary }}
                <template #icon-right>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </template>
              </AppButton>
            </div>
          </div>

          <!-- Right: Dark panel with image -->
          <div
            class="flex-1 relative overflow-hidden min-h-[260px] lg:min-h-[520px] flex items-center justify-center"
            style="background: linear-gradient(180deg, #0C2144 0%, #062964 100%)"
            aria-hidden="true"
          >
            <!-- Stripe decoration -->
            <div class="absolute inset-0 flex gap-[35px] pl-[37px] overflow-hidden pointer-events-none">
              <div v-for="n in 5" :key="n" class="w-[110px] h-full shrink-0" style="background: rgba(255,255,255,0.04)"></div>
            </div>
            <div class="relative z-10 p-8 w-full flex items-center justify-center">
              <img
                :src="currentUnit.image"
                :alt="currentUnit.imageAlt"
                class="w-[90%] max-w-[460px] h-auto rounded-[12px] object-cover"
                style="box-shadow: 0 20px 60px rgba(0,0,0,0.4)"
                onerror="this.src='/images/hero-team.png'"
              />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
