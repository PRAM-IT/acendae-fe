<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section class="wrap bg-white pt-5 xl:pt-10 dark:bg-[#070F1C]">
        <div class="mx-auto">
            <div
                class="relative mx-auto aspect-[360/340] h-auto w-full overflow-hidden rounded-lg md:aspect-[16/9] lg:aspect-auto lg:h-[340px] lg:max-w-full dark:border dark:border-white"
                data-reveal="up"
            >
                <!-- BACKGROUND IMAGE -->
                <img
                    src="/images/quote-bg.png"
                    alt=""
                    role="presentation"
                    class="absolute inset-0 z-0 h-full w-full origin-left scale-[2.5] object-cover object-left sm:scale-[1.8] md:scale-[1.2] lg:origin-center lg:scale-105 lg:object-center xl:scale-100"
                />

                <!-- FADE OVERLAY (light: white, dark: navy) -->
                <div
                    class="absolute inset-x-0 bottom-0 z-1 h-3/4 bg-gradient-to-t from-[rgba(255,255,255,0.85)] via-[rgba(255,255,255,0.4)] to-transparent lg:h-full lg:bg-gradient-to-b lg:from-transparent lg:via-transparent lg:to-[rgba(255,255,255,0.85)] dark:from-[rgba(7,15,28,0.9)] dark:via-[rgba(7,15,28,0.7)] dark:to-transparent lg:dark:from-transparent lg:dark:via-transparent lg:dark:to-[rgba(7,15,28,0.9)]"
                ></div>

                <!-- QUOTE CONTENT -->
                <div
                    class="section-px relative z-2 flex h-full flex-col items-center justify-center"
                >
                    <blockquote
                        class="quote-heading"
                        :aria-label="t('home.quote.aria_label')"
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
