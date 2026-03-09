<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';

const { t, tm } = useI18n();

const outsourceItems = computed(
    () => tm('home.two_ways.outsource.items') as string[],
);
const teamItems = computed(() => tm('home.two_ways.team.items') as string[]);
</script>

<template>
    <section
        class="border-t border-b border-[#b0c8f3] bg-white pt-12 pb-10 sm:pt-16 sm:pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16 2xl:pt-28 2xl:pb-20"
    >
        <!-- Section Header -->
        <div
            data-reveal="up"
            class="mb-8 flex flex-col items-center gap-[17px] px-5 sm:mb-10 md:mb-12 lg:mb-[61px] lg:px-0"
        >
            <h2
                class="font-instrument m-0 max-w-[300px] text-center text-[24px] leading-[30px] font-semibold text-black sm:max-w-[360px] sm:text-[28px] sm:leading-[34px] md:max-w-[420px] md:text-[32px] md:leading-[38px] lg:text-[36px] lg:leading-[42px] xl:text-[38px] 2xl:max-w-[462px] 2xl:text-[40px] 2xl:leading-[48px]"
            >
                {{ t('home.two_ways.title') }}
            </h2>
            <p
                class="font-mona m-0 text-center text-[14px] leading-5 font-normal text-black/85 sm:text-[15px] md:text-[16px] lg:text-[18px] lg:leading-[27px]"
            >
                {{ t('home.two_ways.subtitle') }}
            </p>
        </div>

        <!-- Cards Wrapper -->
        <div
            class="relative mx-auto flex flex-col gap-4 px-4 sm:gap-5 sm:px-5 md:gap-5 md:px-5 lg:max-w-[1271px] lg:flex-row lg:gap-11 lg:border-r lg:border-l lg:border-[#d3d8e1] lg:px-0"
        >
            <!-- Vertical Divider (desktop only) -->
            <div
                aria-hidden="true"
                class="pointer-events-none absolute top-0 left-1/2 hidden h-full w-px bg-[#d3d8e1] lg:block"
            ></div>

            <!-- LEFT CARD -->
            <div
                data-reveal="up"
                data-reveal-delay="0"
                class="relative overflow-hidden rounded-[14px] border border-[rgba(195,204,222,0.32)] sm:rounded-[16px] lg:mt-[21px] lg:mb-6 lg:ml-[18px] lg:flex-1 lg:rounded-[20px]"
            >
                <!-- Background gradient -->
                <div
                    aria-hidden="true"
                    class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(251,252,255,0.2)_52.4%,rgba(29,79,188,0.2)_100%)] opacity-[0.53]"
                ></div>

                <!-- Inner Content -->
                <div
                    class="relative z-1 flex flex-col gap-4 pt-5 pr-4 pb-5 pl-4 sm:gap-5 sm:pt-6 sm:pr-5 sm:pb-6 sm:pl-5 md:gap-6 md:pt-7 md:pr-8 md:pb-7 md:pl-6 lg:gap-8 lg:pt-[40px] lg:pr-[80px] lg:pb-[40px] lg:pl-8 2xl:gap-9 2xl:pt-[49px] 2xl:pr-[103px] 2xl:pb-[50px] 2xl:pl-9"
                >
                    <!-- Title Block -->
                    <div class="flex flex-col gap-1.75">
                        <h3
                            class="font-mona m-0 text-[20px] leading-[28px] font-semibold text-[#1a2d4b] sm:text-[22px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] xl:text-[36px] 2xl:text-[40px] 2xl:leading-[48px]"
                        >
                            {{ t('home.two_ways.outsource.title') }}
                        </h3>
                        <p
                            class="font-mona m-0 text-[13px] leading-[18px] font-semibold text-[#1a2d4b] sm:text-[14px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[24px] 2xl:text-[22px] 2xl:leading-[26px]"
                        >
                            {{ t('home.two_ways.outsource.subtitle') }}
                        </p>
                    </div>

                    <!-- Body -->
                    <p
                        class="font-mona m-0 text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
                        {{ t('home.two_ways.outsource.body') }}
                    </p>

                    <!-- Guide Block -->
                    <div class="flex flex-col gap-4 sm:gap-5">
                        <p
                            class="font-mona m-0 text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                        >
                            {{ t('home.two_ways.outsource.guide_label') }}
                        </p>
                        <ul
                            class="m-0 flex list-none flex-col gap-3 p-0 sm:gap-3.5 md:gap-4 lg:gap-4.5"
                        >
                            <li
                                v-for="item in outsourceItems"
                                :key="item"
                                class="flex flex-row items-center gap-2.5"
                            >
                                <img
                                    src="/resources/assets/images/blue-circle.svg"
                                    alt=""
                                    aria-hidden="true"
                                    class="h-[10px] w-[10px] shrink-0 sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[13px] lg:w-[13px] 2xl:h-[15px] 2xl:w-[15px]"
                                />
                                <span
                                    class="font-mona text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                                    >{{ item }}</span
                                >
                            </li>
                        </ul>
                    </div>

                    <!-- Footer Note -->
                    <p
                        class="font-mona m-0 text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
                        {{ t('home.two_ways.outsource.footer_note') }}
                    </p>

                    <!-- Primary CTA Button -->
                    <Link
                        :href="route('services.outsource')"
                        class="inline-block no-underline"
                    >
                        <div
                            class="flex h-10 w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-md bg-[#0b1f3f] px-3 py-2 md:h-11 md:w-auto md:px-4 lg:h-12 lg:w-[220px] lg:gap-2.5 lg:rounded-lg lg:px-4 2xl:h-[55px] 2xl:w-[251px] 2xl:py-2.5 2xl:pr-5 2xl:pl-3.75"
                        >
                            <span
                                aria-hidden="true"
                                class="flex h-4 w-4 min-w-4 items-center justify-center rounded-[100px] bg-[rgba(0,166,126,0.17)] p-1 sm:h-5 sm:w-5 sm:min-w-5 sm:p-1.5"
                            >
                                <span
                                    class="block h-2 w-2 rounded-full bg-[#0a5e4a]"
                                ></span>
                            </span>
                            <span
                                class="font-mona text-[13px] leading-4 font-semibold whitespace-nowrap text-white sm:text-[14px] md:text-[15px] lg:text-[16px]"
                            >
                                {{ t('home.two_ways.outsource.cta') }}
                            </span>
                            <svg
                                viewBox="0 0 18 18"
                                fill="none"
                                aria-hidden="true"
                                class="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px] md:h-[16px] md:w-[16px] lg:h-[18px] lg:w-[18px]"
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
                    </Link>
                </div>
            </div>

            <!-- RIGHT CARD -->
            <div
                data-reveal="up"
                data-reveal-delay="100"
                class="relative overflow-hidden rounded-[14px] border border-[rgba(195,204,222,0.32)] sm:rounded-[16px] lg:mt-[23px] lg:mr-[22px] lg:mb-[21px] lg:flex-1 lg:rounded-[20px]"
            >
                <!-- Inner Content -->
                <div
                    class="relative z-1 flex flex-col gap-4 pt-5 pr-4 pb-5 pl-4 sm:gap-5 sm:pt-6 sm:pr-5 sm:pb-6 sm:pl-5 md:gap-6 md:pt-7 md:pr-8 md:pb-7 md:pl-6 lg:gap-7 lg:pt-[40px] lg:pr-[70px] lg:pb-[40px] lg:pl-10 2xl:gap-7.25 2xl:pt-[47px] 2xl:pr-[89px] 2xl:pb-[51px] 2xl:pl-[50px]"
                >
                    <!-- Title Block -->
                    <div class="flex flex-col gap-px">
                        <h3
                            class="font-mona m-0 text-[20px] leading-[28px] font-semibold text-[#1a2d4b] sm:text-[22px] md:text-[26px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] xl:text-[36px] 2xl:text-[40px] 2xl:leading-[48px]"
                        >
                            {{ t('home.two_ways.team.title') }}
                        </h3>
                        <p
                            class="font-mona m-0 text-[13px] leading-[18px] font-semibold text-[#1a2d4b] sm:text-[14px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[24px] 2xl:text-[22px] 2xl:leading-[26px]"
                        >
                            {{ t('home.two_ways.team.subtitle') }}
                        </p>
                    </div>

                    <!-- Body -->
                    <p
                        class="font-mona m-0 text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
                        {{ t('home.two_ways.team.body') }}
                    </p>

                    <!-- Guide Block -->
                    <div class="flex flex-col gap-4 sm:gap-5">
                        <p
                            class="font-mona m-0 text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                        >
                            {{ t('home.two_ways.team.guide_label') }}
                        </p>
                        <ul
                            class="m-0 flex list-none flex-col gap-3 p-0 sm:gap-3.5 md:gap-4 lg:gap-4.5"
                        >
                            <li
                                v-for="item in teamItems"
                                :key="item"
                                class="flex flex-row items-center gap-2.5"
                            >
                                <img
                                    src="/resources/assets/images/blue-circle.svg"
                                    alt=""
                                    aria-hidden="true"
                                    class="h-[10px] w-[10px] shrink-0 sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[13px] lg:w-[13px] 2xl:h-[15px] 2xl:w-[15px]"
                                />
                                <span
                                    class="font-mona text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                                    >{{ item }}</span
                                >
                            </li>
                        </ul>
                    </div>

                    <!-- Footer Note -->
                    <p
                        class="font-mona m-0 text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
                        {{ t('home.two_ways.team.footer_note') }}
                    </p>

                    <!-- Outline CTA Button -->
                    <Link
                        :href="route('services.dedicated-team')"
                        class="inline-block no-underline"
                    >
                        <div
                            class="flex h-10 w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-md border border-[rgba(11,31,63,0.67)] bg-transparent px-3 py-2 md:h-11 md:w-auto md:px-4 lg:h-12 lg:w-[200px] lg:gap-2.5 lg:rounded-lg lg:px-4 2xl:h-[55px] 2xl:w-[221px] 2xl:px-5 2xl:py-2.5"
                        >
                            <span
                                class="font-mona text-[13px] leading-4 font-semibold whitespace-nowrap text-[#0b1f3f] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                            >
                                {{ t('home.two_ways.team.cta') }}
                            </span>
                            <svg
                                viewBox="0 0 18 18"
                                fill="none"
                                aria-hidden="true"
                                class="h-[14px] w-[14px] sm:h-[15px] sm:w-[15px] md:h-[16px] md:w-[16px] lg:h-[18px] lg:w-[18px]"
                            >
                                <path
                                    d="M4 14L14 4M14 4H7M14 4V11"
                                    stroke="#0B1F3F"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-instrument {
    font-family: 'Instrument Sans', sans-serif;
}
.font-mona {
    font-family: 'Mona Sans', sans-serif;
}
</style>
