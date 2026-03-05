<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const steps = computed(() => [
  {
    num: '01',
    title: t('home.how_we_work.steps.basecamp.title', 'Discovery & Basecamp'),
    desc: t('home.how_we_work.steps.basecamp.desc', 'We map out your current state, define technical requirements, and build a roadmap for the journey ahead.'),
  },
  {
    num: '02',
    title: t('home.how_we_work.steps.ascent.title', 'The Ascent'),
    desc: t('home.how_we_work.steps.ascent.desc', 'Sprint by sprint, our teams build, test, and release. You remain involved in every critical decision.'),
  },
  {
    num: '03',
    title: t('home.how_we_work.steps.summit.title', 'Summit & Scale'),
    desc: t('home.how_we_work.steps.summit.desc', 'We launch and optimize. Once the foundation holds we shift toward maintenance, iterations, and long-term scaling.'),
  },
])
</script>

<template>
  <section class="bg-white py-[60px] lg:py-[80px] px-5 lg:px-[85px] border-b border-[var(--color-border)]">
    <div class="max-w-[1270px] mx-auto">
      <div class="text-center mb-10 lg:mb-14" data-reveal="up">
        <h2 class="font-bold text-[26px] lg:text-[40px] leading-[1.2] text-[var(--color-navy)] mb-2">{{ t('home.how_we_work.title', 'How we work together') }}</h2>
        <p class="text-[18px] text-black/85">{{ t('home.how_we_work.subtitle', 'A transparent process, from start to finish.') }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8" data-stagger>
        <article
          v-for="step in steps"
          :key="step.num"
          class="bg-gradient-to-b from-transparent to-[#4DA1F0]/[0.03] bg-[#F5F8FF] border border-[#1D4FBC]/[.17] rounded-[8px] p-8 lg:px-12 lg:pt-10 lg:pb-12 min-h-auto lg:min-h-[280px] transition-all duration-200 hover:shadow-[0_8px_32px_rgba(29,79,188,0.1)] hover:-translate-y-0.5"
        >
          <div class="font-bold text-[36px] leading-[1.42] text-[#0C2143]/28 mb-7" aria-hidden="true">{{ step.num }}</div>
          <h3 class="font-semibold text-[22px] leading-[1.41] text-[#152746] mb-3.5">{{ step.title }}</h3>
          <p class="text-[18px] leading-relaxed text-black/85">{{ step.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
