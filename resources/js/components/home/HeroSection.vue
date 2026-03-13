<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';
import AppButton from '@/components/ui/AppButton.vue';

const { t } = useI18n();
</script>

<template>
    <section
        class="container-px relative flex min-h-[700px] w-full items-center overflow-hidden
        bg-white pt-5 sm:min-h-[750px] sm:pt-6 md:min-h-[850px] md:pt-7 lg:mb-8
        lg:min-h-[660px] lg:pt-0 xl:min-h-[690px] 2xl:min-h-[700px]"
    >
        <div
            class="grid w-full grid-cols-1 items-center justify-center gap-7
            pb-10 sm:gap-8 sm:pb-12 md:gap-8 md:pb-10 md:pt-4 lg:grid-cols-[1fr_420px]
            lg:gap-x-10 lg:py-0 xl:grid-cols-[1fr_480px] xl:gap-x-16 2xl:grid-cols-[1fr_546px] 2xl:gap-x-20"
        >
            <!-- Left Column - Text Area -->
            <div
                class="flex w-full min-w-0 flex-col items-start lg:col-start-1 lg:justify-start"
                data-reveal="up"
            >
                <!-- Eyebrow Badge -->
                <div
                    class="mb-3 flex w-fit max-w-full flex-row items-center rounded-2xl bg-[rgba(77,161,240,0.11)] px-3 py-1 sm:mb-5 sm:px-4 sm:py-2 md:mb-6 md:px-5 lg:mb-6 lg:max-w-md lg:py-2.5 lg:pl-4 lg:pr-6 2xl:mb-6 2xl:max-w-none 2xl:py-2.5 2xl:pl-4 2xl:pr-6"
                >
                    <span class="eyebrow-accent">
                        {{ t('home.hero.eyebrow') }}
                    </span>
                </div>

                <!-- Content Block -->
                <div
                    class="mb-6 flex w-full flex-col gap-2 sm:mb-7 sm:gap-2.5 md:mb-8 md:gap-3 lg:mb-7 lg:gap-2.5 2xl:mb-7 2xl:gap-2.5"
                >
                    <h1 class="title w-full break-words">
                        {{ t('home.hero.title') }}
                    </h1>

                    <p class="body w-full">
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
                                class="btn-text"
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
                            class="btn-text-outline"
                        >
                            {{ t('home.hero.cta_team') }}
                        </span>
                    </AppButton>
                </div>
            </div>

            <!-- Right Column - Image Stack -->
            <div
                class="group relative h-[402px] w-full overflow-hidden rounded-[6px] shadow-lg sm:h-[440px] md:h-[520px] lg:col-start-2 lg:h-[440px] xl:h-[500px] 2xl:h-[563px]"
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
                    class="absolute inset-x-0 bottom-4 z-20 flex px-4 sm:bottom-5 sm:px-5 md:bottom-6 md:px-6 lg:bottom-8 lg:px-6 xl:bottom-11 xl:px-10 2xl:bottom-14 2xl:px-12"
                >
                    <div
                        class="ml-auto flex items-end gap-2 sm:gap-3 md:gap-4 lg:items-center lg:gap-5 xl:gap-8"
                    >
                        <!-- Text Part -->
                        <div
                            class="max-w-[250px] text-right sm:max-w-[350px] md:max-w-[450px] lg:max-w-[280px] xl:max-w-[380px] 2xl:max-w-[420px]"
                        >
                            <p
                                class="text-right text-xs font-medium text-white sm:text-sm md:text-sm xl:text-base"
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
                class="flex w-full flex-col items-center gap-[10px] lg:hidden"
                data-reveal="up"
                data-reveal-delay="100"
            >
                <!-- Primary CTA — Figma: bg #0B1F3F, h=47px, border-radius 6.77px -->
                <AppButton
                    variant="primary"
                    tag="Link"
                    :href="route('services.outsource')"
                    class="!flex !h-[47px] !w-full !max-w-none !items-center !justify-center !gap-[8px] !rounded-[7px] !border-0 !bg-[#0B1F3F] !px-4 !transition-all !duration-200 hover:!-translate-y-px hover:!bg-[#1a3358] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629] sm:!h-[50px]"
                >
                    <div class="flex items-center gap-[8px]">
                        <div
                            class="flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[rgba(0,166,126,0.17)]"
                        >
                            <div
                                class="h-[6px] w-[6px] rounded-full bg-[#0A5E4A]"
                            ></div>
                        </div>
                        <span class="btn-text">
                            {{ t('home.hero.cta_outsource') }}
                        </span>
                    </div>
                </AppButton>

                <!-- Outline CTA — Figma: border rgba(11,31,63,0.67), h=47px, border-radius 6.77px -->
                <AppButton
                    variant="outline"
                    tag="Link"
                    :href="route('services.dedicated-team')"
                    class="group !flex !h-[47px] !w-full !max-w-none !items-center !justify-center !rounded-[7px] !border !border-[rgba(11,31,63,0.67)] !bg-transparent !px-4 !transition-all !duration-200 hover:!-translate-y-px hover:!border-[#0b1f3a] hover:!bg-[#0b1f3a] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.2)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629] sm:!h-[50px]"
                >
                    <span class="btn-text-outline">
                        {{ t('home.hero.cta_team') }}
                    </span>
                </AppButton>
            </div>
        </div>
    </section>
</template>
