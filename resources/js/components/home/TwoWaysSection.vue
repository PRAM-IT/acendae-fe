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
        class="landing-section relative overflow-hidden border-t border-[#b0c8f3] bg-white"
    >
        <!-- 1. Header Area (Above the grid) -->
        <div
            class="wrap mx-auto"
        >
            <div
                data-reveal="up"
                class="relative z-10 flex flex-col items-center gap-[17px]"
            >
                <h2
                    class="title-section ssm:max-w-sm m-0 max-w-xs text-center md:max-w-md 2xl:max-w-lg"
                >
                    {{ t('home.two_ways.title') }}
                </h2>
                <p class="subtitle m-0 text-center">
                    {{ t('home.two_ways.subtitle') }}
                </p>
            </div>
        </div>

        <!-- 2. The Connected Grid Area -->
        <div class="relative border-b border-t border-[#d3d8e1]">
            <!-- Grid Content -->
            <div class="wrap relative z-10 mx-auto px-0">
                <div
                    class="flex flex-col divide-y divide-[#d3d8e1] border-x border-[#d3d8e1] lg:flex-row lg:divide-x lg:divide-y-0"
                >
                    <!-- LEFT COLUMN -->
                    <div
                        class="relative flex flex-1 justify-center container-px py-4 sm:py-6 lg:py-8 lg:pr-0 2xl:py-10"
                    >
                        <!-- Gradient Background (Mobile & Desktop) -->
                        <div
                            class="absolute inset-0 z-0"
                            style="
                                background: linear-gradient(
                                    180deg,
                                    rgba(251, 252, 255, 0.2) 52.4%,
                                    rgba(29, 79, 188, 0.2) 100%
                                );
                                opacity: 0.53;
                            "
                        ></div>
                        <div
                            data-reveal="up"
                            class="relative w-full max-w-[580px] rounded-[14px] border border-[rgba(195,204,222,0.32)] bg-transparent sm:rounded-[16px] lg:rounded-[20px]"
                        >
                            <!-- Card Content (Transparent) -->
                            <div
                                class="z-1 relative flex flex-col gap-6 bg-transparent p-6 sm:p-8 md:p-10 lg:gap-8 lg:p-12 2xl:gap-9 2xl:p-14"
                            >
                                <div class="flex flex-col gap-2">
                                    <h3 class="title-card text-navy-light m-0">
                                        {{ t('home.two_ways.outsource.title') }}
                                    </h3>
                                    <p class="label text-navy-light m-0">
                                        {{
                                            t(
                                                'home.two_ways.outsource.subtitle',
                                            )
                                        }}
                                    </p>
                                </div>

                                <p class="body m-0">
                                    {{ t('home.two_ways.outsource.body') }}
                                </p>

                                <div class="flex flex-col gap-4">
                                    <p class="label text-navy/85 m-0">
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
                                            <img
                                                src="/images/blue-circle.svg"
                                                alt=""
                                                class="h-3 w-3 shrink-0"
                                            />
                                            <span class="body">{{ item }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <p class="body m-0">
                                    {{
                                        t('home.two_ways.outsource.footer_note')
                                    }}
                                </p>

                                <AppButton
                                    variant="primary"
                                    tag="Link"
                                    :href="route('services.outsource')"
                                    class="!flex !h-12 w-full !items-center !justify-center !rounded-[8px] !border-0 !bg-[#0B1F3F] !px-10 !transition-all !duration-200 hover:!-translate-y-px hover:!bg-[#1a3358] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629] sm:w-fit"
                                >
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(0,166,126,0.17)]"
                                        >
                                            <div
                                                class="h-1.5 w-1.5 rounded-full bg-[#0A5E4A]"
                                            ></div>
                                        </div>
                                        <span
                                            class="btn-text"
                                        >
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
                        class="flex flex-1 justify-center bg-white container-px py-4 sm:py-6 lg:py-8 lg:pl-0 2xl:py-10"
                    >
                        <div
                            data-reveal="up"
                            data-reveal-delay="100"
                            class="relative w-full max-w-[580px] rounded-[14px] border border-[rgba(195,204,222,0.32)] bg-transparent sm:rounded-[16px] lg:rounded-[20px]"
                        >
                            <!-- Card Content (Transparent) -->
                            <div
                                class="z-1 relative flex flex-col gap-6 bg-transparent p-6 sm:p-8 md:p-10 lg:gap-8 lg:p-12 2xl:gap-9 2xl:p-14"
                            >
                                <div class="flex flex-col gap-2">
                                    <h3 class="title-card text-navy-light m-0">
                                        {{ t('home.two_ways.team.title') }}
                                    </h3>
                                    <p class="label text-navy-light m-0">
                                        {{ t('home.two_ways.team.subtitle') }}
                                    </p>
                                </div>

                                <p class="body m-0">
                                    {{ t('home.two_ways.team.body') }}
                                </p>

                                <div class="flex flex-col gap-4">
                                    <p class="label text-navy/85 m-0">
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
                                            <img
                                                src="/images/blue-circle.svg"
                                                alt=""
                                                class="h-3 w-3 shrink-0"
                                            />
                                            <span class="body">{{ item }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <p class="body m-0">
                                    {{ t('home.two_ways.team.footer_note') }}
                                </p>

                                <AppButton
                                    variant="outline"
                                    tag="Link"
                                    :href="route('services.dedicated-team')"
                                    class="!flex !h-12 w-full !items-center !justify-center !rounded-[8px] !border-[rgba(11,31,63,0.67)] !bg-transparent !px-10 sm:w-fit"
                                >
                                    <div class="flex items-center gap-3">
                                        <span
                                            class="btn-text-outline"
                                        >
                                            {{ t('home.two_ways.team.cta') }}
                                        </span>
                                        <svg
                                            viewBox="0 0 18 18"
                                            fill="none"
                                            class="h-4 w-4 text-[#0b1f3f] transition-colors duration-200"
                                        >
                                            <path
                                                d="M4 14L14 4M14 4H7M14 4V11"
                                                stroke="currentColor"
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
