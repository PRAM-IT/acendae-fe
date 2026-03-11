<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const steps = computed(() => [
    {
        num: '01',
        title: t('home.how_we_work.steps.basecamp.title', 'Basecamp – Understand'),
        desc: t(
            'home.how_we_work.steps.basecamp.desc',
            'We learn your business, goals, and constraints.',
        ),
    },
    {
        num: '02',
        title: t('home.how_we_work.steps.ascent.title', 'Ascent – Build'),
        desc: t(
            'home.how_we_work.steps.ascent.desc',
            'Design and development progress in structured phases, with clear communication and ownership.',
        ),
    },
    {
        num: '03',
        title: t('home.how_we_work.steps.summit.title', 'Summit – Scale'),
        desc: t(
            'home.how_we_work.steps.summit.desc',
            'After launch, we optimise, expand, and support continued growth.',
        ),
    },
]);
</script>

<template>
    <section
        class="bg-white pt-10 pb-0 sm:pt-12 sm:pb-0 md:pt-14 md:pb-0 lg:pt-16 lg:pb-0 xl:pt-[70px] xl:pb-0 2xl:pt-[80px] 2xl:pb-0"
    >
        <div class="acendae-container mx-auto">
            <div
                class="mb-7 text-center sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14"
                data-reveal="up"
            >
                <h2
                    class="font-instrument mb-2 text-[22px] leading-[28px] font-bold text-[var(--color-navy)] sm:text-[24px] sm:leading-[30px] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-[38px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[48px]"
                >
                    {{ t('home.how_we_work.title', 'How we work together') }}
                </h2>
                <p
                    class="text-[13px] leading-5 text-black/85 sm:text-[14px] md:text-[15px] md:leading-6 lg:text-[18px] lg:leading-[27px]"
                >
                    {{
                        t(
                            'home.how_we_work.subtitle',
                            'A transparent process, from start to finish.',
                        )
                    }}
                </p>
            </div>

            <div
                class="grid grid-cols-1 gap-3 sm:gap-3 md:grid-cols-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8"
                data-stagger
            >
                <article
                    v-for="step in steps"
                    :key="step.num"
                    class="flex aspect-[389/220] min-h-0 w-full flex-col overflow-hidden rounded-[12px] border border-[#1D4FBC]/[.17] bg-[#F5F8FF] bg-gradient-to-b from-transparent to-[#4DA1F0]/[0.03] px-7 py-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(29,79,188,0.1)] md:aspect-auto md:min-h-[300px] md:px-6 md:py-8 lg:min-h-[360px] lg:px-12 lg:py-10 xl:min-h-[400px] xl:px-14 xl:py-11 2xl:min-h-[440px] 2xl:px-16 2xl:py-12"
                >
                    <div
                        class="mb-3 text-[30px] leading-[38px] font-bold text-[#0C2143]/28 sm:mb-4 sm:text-[32px] sm:leading-[40px] md:text-[34px] md:leading-[42px] lg:mb-4 lg:text-[36px] lg:leading-[46px] xl:text-[38px] 2xl:mb-5 2xl:text-[42px] 2xl:leading-[54px]"
                        aria-hidden="true"
                    >
                        {{ step.num }}
                    </div>
                    <h3
                        class="mb-2 text-[15px] leading-[20px] font-semibold text-[#152746] sm:text-[16px] sm:leading-[22px] md:text-[17px] md:leading-[24px] lg:text-[19px] lg:leading-[27px] xl:text-[20px] 2xl:mb-5 2xl:text-[22px] 2xl:leading-[31px]"
                    >
                        {{ step.title }}
                    </h3>
                    <p
                        class="text-[13px] leading-5 text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
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