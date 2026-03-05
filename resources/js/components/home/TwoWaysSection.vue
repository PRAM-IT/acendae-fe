<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';

const { t, tm } = useI18n();

const outsourceItems = computed(() => tm('home.two_ways.outsource.items') as string[]);
const teamItems = computed(() => tm('home.two_ways.team.items') as string[]);
</script>

<template>
    <section class="border-t border-b border-[#b0c8f3] bg-white px-18 pt-28 pb-20">

        <!-- Section Header -->
        <div
            data-reveal="up"
            class="mb-11 flex flex-col items-center gap-6.75"
        >
            <h2 class="font-instrument m-0 max-w-115.5 text-center text-[40px] leading-12 font-semibold text-black">
                {{ t('home.two_ways.title') }}
            </h2>
            <p class="font-mona m-0 text-center text-[18px] leading-6.75 font-normal text-black/85">
                {{ t('home.two_ways.subtitle') }}
            </p>
        </div>

        <!-- Cards Wrapper -->
        <div class="relative mx-auto flex max-w-[1271px] flex-row border-l border-r border-[#d3d8e1]">

            <!-- Vertical Divider -->
            <div
                aria-hidden="true"
                class="pointer-events-none absolute top-0 left-1/2 h-185.25 w-px bg-[#d3d8e1]"
            ></div>

            <!-- LEFT CARD -->
            <div
                data-reveal="up"
                data-reveal-delay="0"
                class="relative my-5.25 ml-13.5 flex-1 overflow-hidden rounded-[20px] border border-[rgba(195,204,222,0.32)]"
            >
                <!-- Background gradient -->
                <div
                    aria-hidden="true"
                    class="pointer-events-none absolute inset-0 opacity-[0.53] bg-[linear-gradient(180deg,rgba(251,252,255,0.2)_52.4%,rgba(29,79,188,0.2)_100%)]"
                ></div>

                <!-- Inner Content -->
                <div class="relative z-1 flex flex-col gap-9 px-13.5 py-17.5">

                    <!-- Title Block -->
                    <div class="flex flex-col gap-1.75">
                        <h3 class="font-mona m-0 text-[40px] leading-12 font-semibold text-[#1a2d4b]">
                            {{ t('home.two_ways.outsource.title') }}
                        </h3>
                        <p class="font-mona m-0 text-[22px] leading-6.5 font-semibold text-[#1a2d4b]">
                            {{ t('home.two_ways.outsource.subtitle') }}
                        </p>
                    </div>

                    <!-- Body -->
                    <p class="font-mona m-0 max-w-113.75 text-[18px] leading-6.75 font-normal text-black/85">
                        {{ t('home.two_ways.outsource.body') }}
                    </p>

                    <!-- Guide Block -->
                    <div class="flex flex-col gap-5">
                        <p class="font-mona m-0 text-[18px] leading-6.75 font-normal text-black/85">
                            {{ t('home.two_ways.outsource.guide_label') }}
                        </p>
                        <ul class="m-0 flex list-none flex-col gap-4.5 p-0">
                            <li
                                v-for="item in outsourceItems"
                                :key="item"
                                class="flex flex-row items-center gap-2.5"
                            >
                                <img
                                    src="/resources/assets/images/blue-circle.svg"
                                    width="15"
                                    height="15"
                                    alt=""
                                    aria-hidden="true"
                                    class="shrink-0"
                                />
                                <span class="font-mona text-[18px] leading-6.75 font-normal text-black/85">{{ item }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Footer Note -->
                    <p class="font-mona m-0 max-w-113.75 text-[18px] leading-6.75 font-normal text-black/85">
                        {{ t('home.two_ways.outsource.footer_note') }}
                    </p>

                    <!-- Primary CTA Button -->
                    <Link :href="route('services.outsource')" class="inline-block no-underline">
                        <div class="flex h-13.75 w-62.75 cursor-pointer flex-row items-center justify-center gap-2.5 rounded-lg bg-[#0b1f3f] pl-3.75 pr-5 py-2.5">
                            <span
                                aria-hidden="true"
                                class="flex h-5 w-5 min-w-5 items-center justify-center rounded-[100px] bg-[rgba(0,166,126,0.17)] p-1.5"
                            >
                                <span class="block h-2 w-2 rounded-full bg-[#0a5e4a]"></span>
                            </span>
                            <span class="font-mona whitespace-nowrap text-[16px] leading-4 font-semibold text-white">
                                {{ t('home.two_ways.outsource.cta') }}
                            </span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path d="M4 14L14 4M14 4H7M14 4V11" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </Link>

                </div>
            </div>

            <!-- RIGHT CARD -->
            <div
                data-reveal="up"
                data-reveal-delay="100"
                class="relative my-5.25 mr-13.5 flex-1 overflow-hidden rounded-[20px] border border-[rgba(195,204,222,0.32)]"
            >
                <!-- Inner Content -->
                <div class="relative z-1 flex flex-col gap-7.25 px-13.5 py-17.5">

                    <!-- Title Block -->
                    <div class="flex flex-col gap-px">
                        <h3 class="font-mona m-0 text-[40px] leading-12 font-semibold text-[#1a2d4b]">
                            {{ t('home.two_ways.team.title') }}
                        </h3>
                        <p class="font-mona m-0 max-w-113.75 text-[22px] leading-6.5 font-semibold text-[#1a2d4b]">
                            {{ t('home.two_ways.team.subtitle') }}
                        </p>
                    </div>

                    <!-- Body -->
                    <p class="font-mona m-0 max-w-113.75 text-[18px] leading-6.75 font-normal text-black/85">
                        {{ t('home.two_ways.team.body') }}
                    </p>

                    <!-- Guide Block -->
                    <div class="flex flex-col gap-5">
                        <p class="font-mona m-0 text-[18px] leading-6.75 font-normal text-black/85">
                            {{ t('home.two_ways.team.guide_label') }}
                        </p>
                        <ul class="m-0 flex list-none flex-col gap-4.5 p-0">
                            <li
                                v-for="item in teamItems"
                                :key="item"
                                class="flex flex-row items-center gap-2.5"
                            >
                                <img
                                    src="/resources/assets/images/blue-circle.svg"
                                    width="15"
                                    height="15"
                                    alt=""
                                    aria-hidden="true"
                                    class="shrink-0"
                                />
                                <span class="font-mona text-[18px] leading-6.75 font-normal text-black/85">{{ item }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Footer Note -->
                    <p class="font-mona m-0 max-w-113.75 text-[18px] leading-6.75 font-normal text-black/85">
                        {{ t('home.two_ways.team.footer_note') }}
                    </p>

                    <!-- Outline CTA Button -->
                    <Link :href="route('services.dedicated-team')" class="inline-block no-underline">
                        <div class="flex h-13.75 w-55.25 cursor-pointer flex-row items-center justify-center gap-2.5 rounded-lg border border-[rgba(11,31,63,0.67)] bg-transparent px-5 py-2.5">
                            <span class="font-mona whitespace-nowrap text-[16px] leading-4 font-semibold text-[#0b1f3f]">
                                {{ t('home.two_ways.team.cta') }}
                            </span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path d="M4 14L14 4M14 4H7M14 4V11" stroke="#0B1F3F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.font-instrument { font-family: 'Instrument Sans', sans-serif; }
.font-mona       { font-family: 'Mona Sans', sans-serif; }
</style>