<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';
import AppButton from '@/components/ui/AppButton.vue';

const { t, tm } = useI18n();

const outsourceItems = computed(
    () => tm('home.two_ways.outsource.items') as string[],
);
const teamItems = computed(() => tm('home.two_ways.team.items') as string[]);
</script>

<template>
    <section
        class="section-pt relative overflow-hidden bg-white text-navy dark:border-[#30456B] dark:bg-[#070F1C] dark:text-white"
    >
        <!-- 1. Header Area -->
        <div class="wrap mx-auto mb-5 md:mb-10 xl:mb-14">
            <div
                data-reveal="up"
                class="relative z-10 flex flex-col items-center gap-4"
            >
                <h2
                    class="title-section m-0 max-w-[300px] text-center md:max-w-md 2xl:max-w-lg"
                >
                    {{ t('home.two_ways.title') }}
                </h2>
                <p class="subtitle m-0 text-center dark:text-[#000000D9]">
                    {{ t('home.two_ways.subtitle') }}
                </p>
            </div>
        </div>

        <!-- 2. The Connected Grid Area -->
        <div
            class="wrap relative w-full border-t border-b border-[#d3d8e1] dark:border-[#30456B]"
        >
            <div class="relative z-10 mx-auto w-full px-0">
                <div
                    class="flex w-full flex-col divide-y divide-[#d3d8e1] border-x border-[#d3d8e1]/20 lg:flex-row lg:divide-x lg:divide-y-0 dark:divide-[#30456B] dark:border-[#30456B]"
                >
                    <!-- LEFT COLUMN -->
                    <div
                        class="relative flex w-full flex-col p-4 sm:p-5 lg:w-1/2 lg:p-8 4xl:p-10"
                    >
                        <!-- Gradient Background -->
                        <div
                            class="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(251,252,255,0.2)] via-[rgba(251,252,255,0.4)] to-[rgba(29,79,188,0.2)] opacity-60 dark:from-transparent dark:via-transparent dark:to-[#FFB200]/40"
                        ></div>

                        <!-- Card — flex-1 so it fills the column height -->
                        <div
                            data-reveal="up"
                            class="relative flex flex-1 flex-col rounded-[14px] border border-[rgba(195,204,222,0.32)] bg-transparent sm:rounded-[16px] md:px-0 lg:rounded-[20px]"
                        >
                            <!-- Card Content — flex-1 so button can sit at bottom -->
                            <div
                                class="relative z-10 flex flex-1 flex-col gap-6 bg-transparent p-6 sm:p-8 md:p-10 lg:gap-8 2xl:gap-9"
                            >
                                <div class="flex flex-col gap-2">
                                    <h3
                                        class="title-card m-0 text-navy-light dark:!text-[#FFB200]"
                                    >
                                        {{ t('home.two_ways.outsource.title') }}
                                    </h3>
                                    <p
                                        class="label m-0 text-navy-light dark:text-white/80"
                                    >
                                        {{
                                            t(
                                                'home.two_ways.outsource.subtitle',
                                            )
                                        }}
                                    </p>
                                </div>

                                <p class="body m-0 dark:text-white/80">
                                    {{ t('home.two_ways.outsource.body') }}
                                </p>

                                <div class="flex flex-col gap-4">
                                    <p
                                        class="label m-0 text-navy/85 dark:text-white/80"
                                    >
                                        {{
                                            t(
                                                'home.two_ways.outsource.guide_label',
                                            )
                                        }}
                                    </p>
                                    <ul
                                        class="m-0 flex list-none flex-col gap-3 p-0"
                                    >
                                        <li
                                            v-for="item in outsourceItems"
                                            :key="item"
                                            class="flex items-center gap-3"
                                        >
                                            <div
                                                class="flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-full bg-[#D5E2FF] sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[13px] lg:w-[13px] 2xl:h-[15px] 2xl:w-[15px] dark:bg-[rgba(201,168,76,0.15)]"
                                            >
                                                <div
                                                    class="h-[7px] w-[7px] rounded-full bg-[#1D4FBC] sm:h-[8px] sm:w-[8px] md:h-[9px] md:w-[9px] dark:bg-[#C9A84C]"
                                                ></div>
                                            </div>
                                            <span
                                                class="body dark:text-white/80"
                                                >{{ item }}</span
                                            >
                                        </li>
                                    </ul>
                                </div>

                                <p class="body m-0 dark:text-white/80">
                                    {{
                                        t('home.two_ways.outsource.footer_note')
                                    }}
                                </p>

                                <!-- mt-auto pushes button to the bottom of the card -->
                                <AppButton
                                    variant="primary"
                                    tag="Link"
                                    :href="route('services.outsource')"
                                    class="mt-auto !flex !h-12 w-full !items-center !justify-center !rounded-[8px] !border-0 !bg-[#0B1F3F] !px-10 !transition-all !duration-200 hover:!-translate-y-px hover:!bg-[#1a3358] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629] sm:w-fit dark:!bg-[#FFB200]/80"
                                >
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(0,166,126,0.17)]"
                                        >
                                            <div
                                                class="animate-blink-dot h-1.5 w-1.5 rounded-full bg-[#0A5E4A]"
                                            ></div>
                                        </div>
                                        <span class="btn-text">
                                            {{
                                                t('home.two_ways.outsource.cta')
                                            }}
                                        </span>
                                        <svg
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            class="h-4 w-4"
                                        >
                                            <path
                                                d="M4 14L14 4M14 4H7M14 4V11"
                                                stroke="white"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </AppButton>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT COLUMN -->
                    <div
                        class="flex w-full flex-col bg-white p-4 sm:p-5 lg:w-1/2 lg:p-8 4xl:p-10 dark:bg-[#070F1C]/50"
                    >
                        <!-- Card — flex-1 so it fills the column height -->
                        <div
                            data-reveal="up"
                            data-reveal-delay="100"
                            class="relative flex flex-1 flex-col rounded-[14px] border border-[rgba(195,204,222,0.32)] bg-transparent sm:rounded-[16px] lg:rounded-[20px]"
                        >
                            <!-- Card Content — flex-1 so button can sit at bottom -->
                            <div
                                class="relative z-10 flex flex-1 flex-col gap-6 bg-transparent p-6 sm:p-8 md:p-10 lg:gap-8 2xl:gap-9"
                            >
                                <div class="flex flex-col gap-2">
                                    <h3
                                        class="title-card m-0 text-navy-light dark:!text-[#FFB200]"
                                    >
                                        {{ t('home.two_ways.team.title') }}
                                    </h3>
                                    <p
                                        class="label m-0 text-navy-light dark:text-white/80"
                                    >
                                        {{ t('home.two_ways.team.subtitle') }}
                                    </p>
                                </div>

                                <p class="body m-0 dark:text-white/80">
                                    {{ t('home.two_ways.team.body') }}
                                </p>

                                <div class="flex flex-col gap-4">
                                    <p
                                        class="label m-0 text-navy/85 dark:text-white/80"
                                    >
                                        {{
                                            t('home.two_ways.team.guide_label')
                                        }}
                                    </p>
                                    <ul
                                        class="m-0 flex list-none flex-col gap-3 p-0"
                                    >
                                        <li
                                            v-for="item in teamItems"
                                            :key="item"
                                            class="flex items-center gap-3"
                                        >
                                            <div
                                                class="flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-full bg-[#D5E2FF] sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[13px] lg:w-[13px] 2xl:h-[15px] 2xl:w-[15px] dark:bg-[rgba(201,168,76,0.15)]"
                                            >
                                                <div
                                                    class="h-[7px] w-[7px] rounded-full bg-[#1D4FBC] sm:h-[8px] sm:w-[8px] md:h-[9px] md:w-[9px] dark:bg-[#C9A84C]"
                                                ></div>
                                            </div>
                                            <span
                                                class="body dark:text-white/80"
                                                >{{ item }}</span
                                            >
                                        </li>
                                    </ul>
                                </div>

                                <p class="body m-0 dark:text-white/80">
                                    {{ t('home.two_ways.team.footer_note') }}
                                </p>

                                <!-- mt-auto pushes button to the bottom of the card -->
                                <AppButton
                                    variant="outline"
                                    tag="Link"
                                    :href="route('services.dedicated-team')"
                                    class="mt-auto !flex !h-12 w-full !items-center !justify-center !rounded-[8px] !border-[rgba(11,31,63,0.67)] !bg-transparent !px-10 sm:w-fit dark:!border-[#FFB200]/80"
                                >
                                    <div class="flex items-center gap-3">
                                        <span
                                            class="btn-text-outline dark:!text-white"
                                        >
                                            {{ t('home.two_ways.team.cta') }}
                                        </span>
                                    </div>
                                </AppButton>
                            </div>
                        </div>
                    </div>
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
