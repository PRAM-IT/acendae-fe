<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section
        class="bg-white px-4 py-6 sm:px-5 sm:py-7 md:px-8 md:py-8 lg:px-[50px] lg:py-9 xl:px-[70px] 2xl:px-[85px] 2xl:py-10"
    >
        <div
            class="relative h-[220px] overflow-hidden rounded-lg border border-white sm:h-[240px] md:h-[270px] lg:h-[300px] xl:h-[320px] 2xl:h-[340px]"
            data-reveal="up"
        >
            <!-- BACKGROUND IMAGE -->
            <img
                src="/images/quote-bg.png"
                alt=""
                class="absolute inset-0 z-0 h-full w-full origin-left scale-[1.5] object-cover object-left sm:scale-[1.3] md:scale-[1.15] lg:origin-center lg:scale-100 lg:object-center"
            />

            <!-- WHITE FADE OVERLAY -->
            <div
                class="absolute inset-0 z-1 bg-gradient-to-b from-[rgba(17,38,81,0)] to-[rgba(255,255,255,0.82)] sm:to-[rgba(255,255,255,0.72)] md:to-[rgba(255,255,255,0.62)] lg:to-[rgba(255,255,255,0.45)]"
            ></div>

            <!-- QUOTE CONTENT -->
            <div
                class="relative z-2 flex h-full flex-col items-center justify-center px-4 sm:px-5 md:px-6 lg:px-8 xl:px-9 2xl:px-10"
            >
                <blockquote
                    class="font-mona w-full max-w-[280px] text-center text-[16px] leading-[24px] font-medium text-white sm:max-w-[360px] sm:text-[18px] sm:leading-[26px] md:max-w-[500px] md:text-[22px] md:leading-[30px] lg:max-w-[640px] lg:text-[28px] lg:leading-[36px] xl:max-w-[780px] xl:text-[34px] xl:leading-[42px] 2xl:max-w-[887px] 2xl:text-[40px] 2xl:leading-[48px]"
                    data-reveal="up"
                    data-reveal-delay="100"
                >
                    “{{ t('home.quote.text') }}”
                </blockquote>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-mona {
    font-family: 'Mona Sans', sans-serif;
}
</style>
