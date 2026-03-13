<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const steps = computed(() => [
    {
        num: '01',
        title: t('home.how_we_work.steps.basecamp.title'),
        desc: t('home.how_we_work.steps.basecamp.desc'),
    },
    {
        num: '02',
        title: t('home.how_we_work.steps.ascent.title'),
        desc: t('home.how_we_work.steps.ascent.desc'),
    },
    {
        num: '03',
        title: t('home.how_we_work.steps.summit.title'),
        desc: t('home.how_we_work.steps.summit.desc'),
    },
]);
</script>

<template>
    <section class="section-pt bg-white text-navy dark:bg-[#070F1C] dark:text-white">
        <div class="wrap mx-auto">
            <div class="mb-5 text-center md:mb-10 4xl:mb-14" data-reveal="up">
                <h2 class="title-section">
                    {{ t('home.how_we_work.title') }}
                </h2>
                <p class="subtitle dark:text-white/70">
                    {{ t('home.how_we_work.subtitle') }}
                </p>
            </div>

            <div
                class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5 xl:gap-6 2xl:gap-8"
                data-stagger
            >
                <article
                    v-for="step in steps"
                    :key="step.num"
                    class="flex w-full flex-col items-start justify-start gap-3 md:gap-5
                           rounded-[12px] border border-[#1D4FBC]/[.17]
                           bg-[#F5F8FF] bg-gradient-to-b from-transparent to-[#4DA1F0]/[0.03]
                           p-8 sm:p-10 lg:p-12 xl:p-14 4xl:p-16
                           transition-all duration-200
                           hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(29,79,188,0.1)]
                           md:min-h-[300px] lg:min-h-[360px] xl:min-h-[250px] 4xl:min-h-[300px]
                           dark:border-[#30456B] dark:bg-[#0B1F3F] dark:bg-none dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
                >
                    <div class="step-num" aria-hidden="true">
                        {{ step.num }}
                    </div>
                    <h3 class="step-title m-0 dark:!text-[#FFB200]">
                        {{ step.title }}
                    </h3>
                    <p class="step-desc m-0">
                        {{ step.desc }}
                    </p>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-instrument {
    font-family: 'Instrument Sans Variable', sans-serif;
}
</style>
