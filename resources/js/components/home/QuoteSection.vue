<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section class="landing-section bg-white">
        <div class="wrap mx-auto">
            <div
                class="relative mx-auto aspect-[389/340] h-auto w-full overflow-hidden rounded-lg border border-white md:aspect-[16/9] lg:aspect-auto lg:h-[340px] lg:max-w-full"
                data-reveal="up"
            >
                <!-- BACKGROUND IMAGE -->
                <img
                    src="/images/quote-bg.png"
                    alt=""
                    role="presentation"
                    class="absolute inset-0 z-0 h-full w-full origin-left scale-[2.5] object-cover object-left sm:scale-[1.8] md:scale-[1.2] lg:origin-center lg:scale-105 lg:object-center xl:scale-100"
                />

                <!-- WHITE FADE OVERLAY -->
                <div
                    class="z-1 absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[rgba(255,255,255,0.85)] via-[rgba(255,255,255,0.4)] to-transparent lg:h-full lg:bg-gradient-to-b lg:from-transparent lg:via-transparent lg:to-[rgba(255,255,255,0.85)]"
                ></div>

                <!-- QUOTE CONTENT -->
                <div
                    class="z-2 relative flex h-full flex-col items-center justify-center section-px"
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
