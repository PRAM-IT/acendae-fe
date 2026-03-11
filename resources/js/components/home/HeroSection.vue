<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';
import AppButton from '@/components/ui/AppButton.vue';

const { t } = useI18n();
</script>

<template>
    <section
        class="relative flex min-h-[700px] w-full items-center overflow-hidden bg-white pt-4 sm:min-h-[750px] md:min-h-[850px] lg:mb-8 lg:min-h-[660px] xl:min-h-[690px] 2xl:min-h-[707px]"
    >
        <div
            class="acendae-container mx-auto grid w-full grid-cols-1 items-center justify-center gap-10 pt-0 pb-10 sm:gap-12 sm:pt-0 sm:pb-12 md:gap-14 md:pt-4 md:pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-10 lg:py-0 xl:grid-cols-[1.1fr_0.9fr] xl:gap-x-16 2xl:grid-cols-[1.15fr_0.85fr] 2xl:gap-x-20"
        >
            <!-- Left Column - Text Area -->
            <div
                class="flex w-full flex-col items-start lg:col-start-1 lg:justify-start"
                data-reveal="up"
            >
                <!-- Eyebrow Badge -->
                <div
                    class="mb-4 flex w-fit flex-row items-center rounded-2xl bg-[rgba(77,161,240,0.11)] px-2.5 py-1 sm:mb-5 sm:px-4 sm:py-2 md:mb-6 md:px-5 lg:mb-6 lg:py-[10px] lg:pr-[22px] lg:pl-[18px] 2xl:mb-[24px] 2xl:py-[10px] 2xl:pr-[24px] 2xl:pl-[18px]"
                >
                    <span
                        class="text-[11px] leading-[16px] font-medium whitespace-nowrap text-[#1D4FBC] sm:text-[12px] sm:leading-[20px] sm:whitespace-normal md:text-[15px] md:leading-[24px] lg:text-[16px] lg:leading-[28px]"
                    >
                        {{ t('home.hero.eyebrow') }}
                    </span>
                </div>

                <!-- Content Block -->
                <div
                    class="mb-6 flex w-full flex-col gap-2 sm:mb-7 sm:gap-2.5 md:mb-8 md:gap-3 lg:mb-[28px] lg:gap-[10px] 2xl:mb-[28px] 2xl:gap-[10px]"
                >
                    <h1
                        class="w-full text-[22px] leading-[30px] font-semibold text-[#0B1F3F] sm:text-[28px] sm:leading-[38px] md:text-[36px] md:leading-[48px] lg:text-[32px] lg:leading-[42px] xl:text-[38px] xl:leading-[52px] 2xl:text-[44px] 2xl:leading-[62px]"
                    >
                        {{ t('home.hero.title') }}
                    </h1>

                    <p
                        class="w-full text-[14px] leading-5 font-normal text-black/85 sm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[15px] lg:leading-[22px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
                        {{ t('home.hero.subtitle') }}
                    </p>
                </div>
                <!-- Bottom Column - CTA Buttons (Desktop only) -->
                <div
                    class="mt-6 hidden w-full flex-col items-center gap-3 md:mt-6 md:w-auto md:flex-row lg:mt-6 lg:flex lg:gap-[12px] xl:mt-8"
                    data-reveal="up"
                    data-reveal-delay="100"
                >
                    <!-- Primary CTA -->
                    <AppButton
                        variant="primary"
                        tag="Link"
                        :href="route('services.outsource')"
                        class="!flex !h-[48px] !w-full !items-center !justify-center !gap-[10px] !rounded-[8px] !border-0 !bg-[#0B1F3F] !px-4 !transition-all !duration-200 hover:!-translate-y-px hover:!bg-[#1a3358] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629] sm:!h-[50px] md:!h-[50px] md:!w-auto md:!px-5 lg:!h-[48px] lg:!w-auto lg:!px-8 xl:!h-[52px] xl:!px-4 2xl:!h-[55px] 2xl:!px-6"
                    >
                        <div class="flex items-center gap-[10px]">
                            <div
                                class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(0,166,126,0.17)] md:h-[18px] md:w-[18px] 2xl:h-5 2xl:w-5"
                            >
                                <div
                                    class="h-1.5 w-1.5 rounded-full bg-[#0A5E4A] md:h-[7px] md:w-[7px] 2xl:h-2 2xl:w-2"
                                ></div>
                            </div>
                            <span
                                class="text-[13px] leading-[13px] font-semibold text-white sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]"
                            >
                                {{ t('home.hero.cta_outsource') }}
                            </span>
                        </div>
                    </AppButton>

                    <!-- Outline CTA -->
                    <AppButton
                        variant="outline"
                        tag="Link"
                        :href="route('services.dedicated-team')"
                        class="!flex !h-[48px] !w-full !items-center !justify-center !rounded-[8px] !border-[rgba(11,31,63,0.67)] !bg-transparent !px-4 sm:!h-[50px] md:!px-5 lg:!h-[48px] lg:!h-[50px] lg:!w-auto lg:!px-8 xl:!h-[52px] xl:!px-10 2xl:!h-[55px] 2xl:!px-6"
                    >
                        <span
                            class="text-[13px] leading-[13px] font-medium text-[#0B1F3F] sm:text-[14px] md:text-[15px] lg:text-[14px] xl:text-[16px]"
                        >
                            {{ t('home.hero.cta_team') }}
                        </span>
                    </AppButton>
                </div>
            </div>

            <!-- Right Column - Image Stack -->
            <div
                class="group relative h-[320px] w-full overflow-hidden rounded-[6px] shadow-lg sm:h-[420px] md:h-[520px] lg:col-start-2 lg:h-[440px] lg:justify-self-end xl:h-[500px] 2xl:h-[563px]"
                data-reveal="fade"
            >
                <!-- Photo -->
                <img
                    src="/images/hero-team.png"
                    :alt="t('home.hero.image_alt')"
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                />

                <!-- Overlay Layer -->
                <div
                    class="absolute inset-0 z-10"
                    style="
                        background: linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0) 0%,
                            rgba(11, 31, 63, 0.6) 100%
                        );
                    "
                ></div>

                <!-- Caption & Play Button Group -->
                <div
                    class="absolute inset-x-0 bottom-4 z-20 flex px-4 sm:bottom-5 sm:px-5 md:bottom-6 md:px-6 lg:bottom-[30px] lg:px-6 xl:bottom-[45px] xl:px-10 2xl:bottom-[55px] 2xl:px-12"
                >
                    <div
                        class="ml-auto flex items-end gap-2 sm:gap-3 md:gap-4 lg:items-center lg:gap-5 xl:gap-8"
                    >
                        <!-- Text Part -->
                        <div
                            class="max-w-[250px] text-right sm:max-w-[350px] md:max-w-[450px] lg:max-w-[280px] xl:max-w-[380px] 2xl:max-w-[420px]"
                        >
                            <p
                                class="text-[12px] leading-[16px] font-medium text-white sm:text-[13px] sm:leading-[18px] md:text-[14px] lg:text-[13px] lg:leading-[18px] xl:text-[16px] xl:leading-[20px] 2xl:leading-[20px]"
                            >
                                {{ t('home.hero.image_caption') }}
                            </p>
                        </div>

                        <!-- Play Button -->
                        <button
                            class="flex h-[44px] w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-[#FCF2F2] shadow-md transition-transform hover:scale-110 sm:h-[48px] sm:w-[48px] md:h-[52px] md:w-[52px] lg:h-[48px] lg:w-[48px] xl:h-[58px] xl:w-[58px]"
                            :aria-label="t('home.hero.play_aria')"
                        >
                            <svg
                                viewBox="0 0 19 25"
                                fill="none"
                                class="ml-1 h-[18px] w-[14px] sm:h-[20px] sm:w-[15px] md:h-[21px] md:w-[16px] lg:h-[20px] lg:w-[15px] xl:h-[25px] xl:w-[19px]"
                            >
                                <path
                                    d="M2 2L17 12.5L2 23V2"
                                    fill="#1D1D1D"
                                    stroke="#1D1D1D"
                                    stroke-width="1.5"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- CTA Buttons - Mobile/Tablet (below image) -->
            <div
                class="flex w-full flex-col items-center gap-3 lg:hidden"
                data-reveal="up"
                data-reveal-delay="100"
            >
                <!-- Primary CTA -->
                <AppButton
                    variant="primary"
                    tag="Link"
                    :href="route('services.outsource')"
                    class="!flex !h-[52px] !w-full !max-w-none !items-center !justify-center !gap-[10px] !rounded-[10px] !border-0 !bg-[#001D3D] !px-4 !transition-all !duration-200 hover:!-translate-y-px hover:!bg-[#002855] hover:!shadow-[0_6px_20px_rgba(0,29,61,0.2)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 sm:!h-[55px]"
                >
                    <div class="flex items-center gap-[10px]">
                        <div
                            class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(0,166,126,0.17)] md:h-[18px] md:w-[18px]"
                        >
                            <div
                                class="h-1.5 w-1.5 rounded-full bg-[#0A5E4A] md:h-[7px] md:w-[7px]"
                            ></div>
                        </div>
                        <span
                            class="text-[15px] leading-[15px] font-semibold tracking-[-0.01em] text-white"
                        >
                            {{ t('home.hero.cta_outsource') }}
                        </span>
                    </div>
                </AppButton>

                <!-- Outline CTA -->
                <AppButton
                    variant="outline"
                    tag="Link"
                    :href="route('services.dedicated-team')"
                    class="!flex !h-[52px] !w-full !max-w-none !items-center !justify-center !rounded-[10px] !border !border-[#BCC5D3] !bg-white !px-4 sm:!h-[55px]"
                >
                    <span
                        class="text-[15px] leading-[15px] font-medium tracking-[-0.02em] text-[#001D3D]"
                    >
                        {{ t('home.hero.cta_team') }}
                    </span>
                </AppButton>
            </div>
        </div>
    </section>
</template>
