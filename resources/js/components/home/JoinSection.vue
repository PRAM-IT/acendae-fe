<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

const { t, tm } = useI18n();
</script>

<template>
    <section
        class="flex flex-col border-b border-[#D3D8E1] bg-white lg:flex-row lg:border-y"
    >
        <!-- LEFT COLUMN -->
        <div
            class="acendae-container join-content-left flex w-full flex-col gap-4 bg-white py-10 sm:py-12 md:gap-5 md:py-14 lg:mx-0 lg:max-w-none lg:flex-[0_0_44%] lg:gap-5 lg:px-0 lg:py-[70px] lg:pr-[var(--container-padding)] xl:py-[80px] 2xl:py-[90px]"
            data-reveal="up"
        >
            <h2
                class="font-instrument text-[24px] leading-[30px] font-semibold text-[#1A2D4B] sm:text-[26px] sm:leading-[32px] md:text-[28px] md:leading-[34px] lg:text-[32px] lg:leading-[40px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[48px]"
            >
                {{ t('home.join.title') }}
            </h2>

            <p
                class="font-instrument text-[14px] leading-[20px] font-semibold text-[#152746] sm:text-[15px] sm:leading-[21px] md:text-[16px] md:leading-[23px] lg:text-[18px] lg:leading-[25px] xl:text-[20px] xl:leading-[27px] 2xl:text-[22px] 2xl:leading-[28px]"
            >
                {{ t('home.join.subtitle') }}
            </p>

            <div class="flex flex-col gap-3 sm:gap-4 md:gap-4 lg:gap-5">
                <p
                    class="max-w-full text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:max-w-[420px] lg:text-[16px] lg:leading-[25px] xl:max-w-[460px] xl:text-[17px] xl:leading-[26px] 2xl:max-w-[480px] 2xl:text-[18px] 2xl:leading-[27px]"
                >
                    {{ t('home.join.body1') }}
                </p>
                <p
                    class="max-w-full text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:max-w-[420px] lg:text-[16px] lg:leading-[25px] xl:max-w-[460px] xl:text-[17px] xl:leading-[26px] 2xl:max-w-[480px] 2xl:text-[18px] 2xl:leading-[27px]"
                >
                    {{ t('home.join.body2') }}
                </p>
            </div>

            <p
                class="text-[13px] leading-5 font-semibold text-black/85 sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
            >
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
                        class="flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-full bg-[#D5E2FF] p-0.5 sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[13px] lg:w-[13px] 2xl:h-[15px] 2xl:w-[15px]"
                    >
                        <div
                            class="h-[7px] w-[7px] rounded-full bg-[#1D4FBC] sm:h-[8px] sm:w-[8px] md:h-[9px] md:w-[9px] lg:h-[10px] lg:w-[10px] 2xl:h-[11px] 2xl:w-[11px]"
                        ></div>
                    </div>
                    <span
                        class="text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
                        {{ value }}
                    </span>
                </li>
            </ul>

            <div
                class="mt-2 flex flex-col gap-3 sm:mt-3 sm:gap-4 md:gap-4 lg:mt-4 lg:gap-5"
            >
                <p
                    class="max-w-full text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:max-w-[420px] lg:text-[16px] lg:leading-[25px] xl:max-w-[460px] xl:text-[17px] xl:leading-[26px] 2xl:max-w-[480px] 2xl:text-[18px] 2xl:leading-[27px]"
                >
                    {{ t('home.join.body3') }}
                </p>
                <p
                    class="max-w-full text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:max-w-[420px] lg:text-[16px] lg:leading-[25px] xl:max-w-[460px] xl:text-[17px] xl:leading-[26px] 2xl:max-w-[480px] 2xl:text-[18px] 2xl:leading-[27px]"
                >
                    {{ t('home.join.body4') }}
                </p>
            </div>

            <!-- PRIMARY CTA BUTTON -->
            <div class="mt-2 sm:mt-3 lg:mt-4">
                <Link
                    :href="route('careers')"
                    class="flex w-full items-center justify-center rounded-md bg-[#0B1F3F] px-6 py-2 transition-all duration-200 hover:-translate-y-px hover:bg-[#1a3358] hover:shadow-[0_6px_20px_rgba(11,31,58,0.28)] active:translate-y-0 active:bg-[#081629] sm:h-[44px] sm:px-7 md:h-[46px] md:px-8 lg:h-[50px] lg:w-fit lg:rounded-lg lg:px-8 2xl:h-[55px] 2xl:px-10 2xl:py-2.5"
                >
                    <span
                        class="text-[13px] font-semibold text-white sm:text-[14px] md:text-[15px] lg:text-[16px]"
                    >
                        {{ t('home.join.cta') }}
                    </span>
                </Link>
            </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div
            class="relative min-h-[500px] w-full sm:min-h-[540px] md:min-h-[580px] lg:min-h-[500px] lg:flex-1 xl:min-h-[540px] 2xl:min-h-[560px]"
            data-reveal="fade"
            data-reveal-delay="100"
        >
            <!-- TEAM PHOTO -->
            <img
                src="/images/units/team.png"
                alt=""
                class="absolute inset-0 z-0 block h-full w-full object-cover object-center"
            />

            <!-- QUOTE CONTENT -->
            <div
                class="absolute inset-0 z-2 flex items-start justify-center px-6 pt-16 pb-8 sm:px-8 sm:pt-20 sm:pb-10 md:px-10 md:pt-24 md:pb-11 lg:mt-0 lg:px-10 lg:py-12 xl:px-12 xl:py-14 2xl:px-14 2xl:py-16"
            >
                <blockquote
                    class="font-instrument w-full max-w-[280px] text-center text-[24px] leading-[32px] font-semibold text-white sm:max-w-[340px] sm:text-[28px] sm:leading-[36px] md:max-w-[420px] md:text-[34px] md:leading-[42px] lg:max-w-[360px] lg:text-[26px] lg:leading-[34px] xl:max-w-[390px] xl:text-[30px] xl:leading-[40px] 2xl:max-w-[420px] 2xl:text-[36px] 2xl:leading-[46px]"
                    data-reveal="up"
                    data-reveal-delay="200"
                >
                    “<span>{{
                        t('home.join.right_quote').split(' climb together')[0]
                    }}</span
                    ><span class="text-[#D7A118]"> climb together</span>”
                </blockquote>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-instrument {
    font-family: 'Instrument Sans Variable', sans-serif;
}

@media (min-width: 1024px) {
    .join-content-left {
        margin-left: var(--container-offset);
    }
}
</style>
