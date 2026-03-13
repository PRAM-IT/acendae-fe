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
    <section
        class="landing-section bg-white"
    >
        <div class="wrap mx-auto">
            <div
                class="mb-7 text-center sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14"
                data-reveal="up"
            >
                <h2 class="title-section">
                    {{ t('home.how_we_work.title') }}
                </h2>
                <p class="subtitle">
                    {{ t('home.how_we_work.subtitle') }}
                </p>
            </div>

            <div
                class="grid grid-cols-1 gap-4 sm:gap-4 md:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8"
                data-stagger
            >
                <article
                    v-for="step in steps"
                    :key="step.num"
                    class="flex w-full flex-col rounded-[12px] border border-[#1D4FBC]/[.17] bg-[#F5F8FF] bg-gradient-to-b from-transparent to-[#4DA1F0]/[0.03] px-5 pb-6 pt-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(29,79,188,0.1)] sm:px-6 sm:pb-7 sm:pt-6 md:min-h-[300px] md:px-7 md:pb-7 md:pt-6 lg:min-h-[360px] lg:px-9 lg:pb-10 lg:pt-8 xl:min-h-[320px] xl:px-11 xl:pb-11 xl:pt-9 2xl:min-h-[350px] 2xl:px-12 2xl:pb-12 2xl:pt-10"
                >
                    <div class="step-num" aria-hidden="true">
                        {{ step.num }}
                    </div>
                    <h3 class="step-title">
                        {{ step.title }}
                    </h3>
                    <p class="step-desc">
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
