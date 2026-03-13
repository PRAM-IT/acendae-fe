<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

const { t, tm } = useI18n();
</script>

<template>
    <section
        class="wrap mt-0 flex flex-col border-b border-[#D3D8E1] bg-white text-navy md:mt-12 md:border-y
        lg:mt-14 2xl:mt-20 4xl:mt-26 dark:bg-[#070F1C] dark:text-white dark:border-[#30456B]"
    >
        <div class="flex w-full flex-col lg:flex-row lg:items-stretch">
            <!-- LEFT COLUMN -->
            <div
                class="join-content-left md:container-pr flex w-full flex-1 flex-col gap-4 bg-white md:pr-20
                py-16 md:flex-[0_0_44%] md:gap-5 dark:bg-[#070F1C]"
                data-reveal="up"
            >
                <h2 class="title-section text-navy-light dark:text-white">
                    {{ t('home.join.title') }}
                </h2>

                <p class="subtitle text-navy-light dark:text-white/80">
                    {{ t('home.join.subtitle') }}
                </p>

                <div class="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5">
                    <p
                        class="body max-w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl dark:text-white/80"
                    >
                        {{ t('home.join.body1') }}
                    </p>
                    <p
                        class="body max-w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl dark:text-white/80"
                    >
                        {{ t('home.join.body2') }}
                    </p>
                </div>

                <p class="label text-navy/85 dark:text-white/80">
                    {{ t('home.join.who_label') }}
                </p>

                <!-- BULLET LIST -->
                <ul
                    class="flex flex-col gap-3 sm:gap-3.5 md:gap-[14px] lg:gap-[14px]"
                >
                    <li
                        v-for="(value, index) in tm('home.join.values') as any"
                        :key="index"
                        class="flex flex-row items-center gap-2 lg:gap-[10px]"
                    >
                        <div
                            class="flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-full bg-[#D5E2FF] p-0.5 sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[13px] lg:w-[13px] 2xl:h-[15px] 2xl:w-[15px] dark:bg-[rgba(201,168,76,0.15)]"
                        >
                            <div
                                class="h-[7px] w-[7px] rounded-full bg-[#1D4FBC] sm:h-[8px] sm:w-[8px] md:h-[9px] md:w-[9px] lg:h-[10px] lg:w-[10px] 2xl:h-[11px] 2xl:w-[11px] dark:bg-[#C9A84C]"
                            ></div>
                        </div>
                        <span class="body dark:text-white/80">
                            {{ value }}
                        </span>
                    </li>
                </ul>

                <div
                    class="mt-2 flex flex-col gap-3 sm:mt-3 sm:gap-4 md:gap-4 lg:mt-4 lg:gap-5"
                >
                    <p
                        class="body max-w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl dark:text-white/80"
                    >
                        {{ t('home.join.body3') }}
                    </p>
                    <p
                        class="body max-w-full lg:max-w-md xl:max-w-lg 2xl:max-w-xl dark:text-white/80"
                    >
                        {{ t('home.join.body4') }}
                    </p>
                </div>

                <!-- PRIMARY CTA BUTTON -->
                <div class="mt-2 sm:mt-3 lg:mt-4">
                    <Link
                        :href="route('careers')"
                        class="flex w-full items-center justify-center rounded-[6px] bg-[#0B1F3F] px-6 py-2
                        transition-all duration-200 hover:-translate-y-px hover:bg-[#1a3358]
                         hover:shadow-[0_6px_20px_rgba(11,31,58,0.28)] active:translate-y-0 active:bg-[#081629]
                         sm:h-[44px] sm:px-7 md:h-[46px] md:px-8 lg:h-[50px] lg:w-fit lg:rounded-lg
                         lg:px-8 2xl:h-[55px] 2xl:px-10 2xl:py-2.5 dark:bg-[#FFB200]/80 dark:hover:bg-[#E3C45F]
                         dark:active:bg-[#B8933D]"
                    >
                        <span class="btn-text dark:text-[#070F1C]">
                            {{ t('home.join.cta') }}
                        </span>
                    </Link>
                </div>
            </div>

            <!-- RIGHT COLUMN -->
            <div
                class="relative min-h-[500px] w-full sm:min-h-[540px] md:min-h-[600px] lg:min-h-0 lg:flex-1 xl:min-h-[540px] 2xl:min-h-[560px]"
                data-reveal="fade"
                data-reveal-delay="100"
            >
                <!-- TEAM PHOTO -->
                <img
                    src="/images/units/team.png"
                    :alt="t('home.join.team_image_alt')"
                    class="absolute inset-0 z-0 block h-full w-full object-cover object-center"
                />

                <!-- QUOTE CONTENT -->
                <div
                    class="absolute inset-0 z-2 flex items-start justify-center px-6 pt-16 pb-8 sm:px-8 sm:pt-20 sm:pb-10
                    md:px-10 md:pt-10 md:pb-11 lg:mt-0 lg:px-10 lg:py-12 xl:px-12 xl:py-14 2xl:px-14 2xl:py-16"
                >
                    <blockquote
                        class="title-section w-full max-w-xs text-center sm:max-w-sm
                        md:max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-lg"
                        data-reveal="up"
                        data-reveal-delay="200"
                    >
                        <span class="text-white">“{{ t('home.join.right_quote_prefix') }}</span
                        ><span class="text-highlight-gold ms-3">{{
                            t('home.join.right_quote_highlight')
                        }}”</span
                        >
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-instrument {
    font-family: 'Instrument Sans Variable', sans-serif;
}
</style>
