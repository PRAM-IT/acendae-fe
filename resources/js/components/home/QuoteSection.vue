<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section
        class="bg-white pt-2 pb-2 sm:pt-3 sm:pb-3 md:pt-4 md:pb-4 lg:pt-5 lg:pb-5 2xl:pt-6 2xl:pb-6"
    >
        <div class="acendae-container mx-auto">
            <div
                class="relative mx-auto aspect-[389/340] h-auto w-full overflow-hidden rounded-lg border border-white md:aspect-[16/9] lg:h-[340px] lg:aspect-auto lg:max-w-full"
                data-reveal="up"
            >
                <!-- BACKGROUND IMAGE -->
                <img
                    src="/images/quote-bg.png"
                    alt=""
                    class="absolute inset-0 z-0 h-full w-full origin-left scale-[2.5] object-cover object-left sm:scale-[1.8] md:scale-[1.2] lg:origin-center lg:scale-105 lg:object-center xl:scale-100"
                />

                <!-- WHITE FADE OVERLAY -->
                <div
                    class="absolute inset-x-0 bottom-0 z-1 h-3/4 bg-gradient-to-t from-[rgba(255,255,255,0.85)] via-[rgba(255,255,255,0.4)] to-transparent lg:h-full lg:bg-gradient-to-b lg:from-transparent lg:via-transparent lg:to-[rgba(255,255,255,0.85)]"
                ></div>

                <!-- QUOTE CONTENT -->
                <div
                    class="relative z-2 flex h-full flex-col items-center justify-center px-12 sm:px-5 md:px-6 lg:px-8 xl:px-9 2xl:px-10"
                >
                    <blockquote
                        class="quote-heading h-auto w-full text-center text-[20px] leading-[34px] font-medium text-white sm:text-[24px] sm:leading-[38px] md:text-[32px] md:leading-[44px] lg:max-w-[887px] lg:text-[40px] lg:leading-[48px]"
                        data-reveal="up"
                        data-reveal-delay="100"
                    >
                        “{{ t('home.quote.text') }}”
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
