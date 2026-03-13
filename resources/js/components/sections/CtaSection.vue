<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import AppButton from '@/components/ui/AppButton.vue';

const { t } = useI18n();

// Avatars with background colors and placeholder images as per Figma CSS
const avatarData = [
    { color: '#ABB677', image: '1748848358611.jpg' },
    { color: '#C7B9DA', image: '1700324446153.jpg' },
    { color: '#D9B9BB', image: '1756030038149.jpg' },
];
</script>

<template>
    <section
        class="landing-section relative w-full overflow-hidden bg-[#F4F9FF] text-navy dark:bg-[#070F1C] dark:text-white"
    >
        <div
            class="wrap relative mx-auto flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8"
        >
            <!-- Avatar group -->
            <div
                class="relative flex h-[56px] w-[120px] shrink-0 items-center justify-center"
            >
                <!-- Left Avatar -->
                <div
                    class="absolute top-2 left-0 z-10 h-[48px] w-[48px] overflow-hidden rounded-full border-[1.5px] border-white bg-[#ABB677] shadow-sm"
                >
                    <img
                        src="/images/avatars/avatar1.png"
                        alt=""
                        class="h-full w-full object-cover"
                    />
                </div>

                <!-- Right Avatar -->
                <div
                    class="absolute top-2 left-[72px] z-20 h-[48px] w-[48px] overflow-hidden rounded-full border-[1.5px] border-white bg-[#D9B9BB] shadow-sm"
                >
                    <img
                        src="/images/avatars/avatar2.png"
                        alt=""
                        class="h-full w-full object-cover"
                    />
                </div>

                <!-- Center Avatar -->
                <div
                    class="absolute top-0 left-8 z-30 h-[56px] w-[56px] overflow-hidden rounded-full border-[1.5px] border-white bg-[#C7B9DA] shadow-sm"
                >
                    <img
                        src="/images/avatars/avatar3.png"
                        alt=""
                        class="h-full w-full object-cover"
                    />
                </div>
            </div>

            <!-- Heading & Supporting Text -->
            <div class="flex w-full flex-col items-center gap-2">
                <h2 class="title-section text-center dark:text-white">
                    {{ t('cta.readyTitle') }}
                </h2>
                <p class="body w-full max-w-2xl text-center text-muted dark:text-white/80">
                    {{ t('cta.readySubtext1') }}
                </p>
                <p class="body w-full max-w-2xl text-center text-muted dark:text-white/80">
                    {{ t('cta.readySubtext2') }}
                </p>
            </div>

            <!-- CTA Buttons -->
            <div
                class="flex w-full flex-col items-center gap-3 md:w-auto md:flex-row lg:gap-[12px]"
            >
                <AppButton
                    variant="primary"
                    tag="Link"
                    href="/contact"
                    class="!flex !h-[48px] !w-full !items-center !justify-center !gap-[10px] !rounded-[8px] !border-0 !bg-[#0B1F3F] !px-4 !transition-all !duration-200 hover:!-translate-y-px hover:!bg-[#1a3358] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629] sm:!h-[50px] md:!h-[50px] md:!w-auto md:!px-5 lg:!h-[48px] lg:!w-auto lg:!px-8 xl:!h-[52px] xl:!px-10 2xl:!h-[55px] 2xl:!px-12"
                >
                    <div class="flex items-center gap-[10px]">
                        <div
                            class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[rgba(0,166,126,0.17)]
                            md:h-[18px] md:w-[18px] 2xl:h-5 2xl:w-5 dark:bg-[#FFB200]/80"
                        >
                            <div
                                class="h-1.5 w-1.5 rounded-full bg-[#0A5E4A] animate-blink-dot md:h-[7px] md:w-[7px] 2xl:h-2 2xl:w-2"
                            ></div>
                        </div>
                        <span class="btn-text">
                            {{ t('cta.discussProject') }}
                        </span>
                    </div>
                </AppButton>

                <AppButton
                    variant="outline"
                    tag="Link"
                    href="/team-outsourcing"
                    class="!flex !h-[44px] !w-full !justify-center !rounded-[8px] border border-[rgba(11,31,63,0.67)] dark:!border-[#FFB200]/80
                    bg-transparent !px-0 sm:!h-[46px] md:!h-[48px] md:!w-auto md:!px-5 lg:!h-[52px] lg:!w-[240px] 2xl:!h-[55px] 2xl:!w-[266px]"
                >
                    <span class="btn-text-outline dark:!text-[#ffffff]">
                        {{ t('cta.discussOutsourcing') }}
                    </span>
                </AppButton>
            </div>

            <!-- Italic Tagline -->
            <p
                class="eyebrow-accent w-full max-w-xs text-center sm:max-w-sm md:max-w-md lg:max-w-md 2xl:max-w-lg italic"
            >
                {{ t('cta.tagline') }}
            </p>

            <!-- Decorative Gold Shape -->
            <div
                class="pointer-events-none absolute z-0 hidden overflow-visible select-none lg:right-[-120px] lg:bottom-[-90px] lg:w-[500px] lg:opacity-100 2xl:right-[-160px] 2xl:bottom-[-130px] 2xl:w-[620px]"
            >
                <img src="/images/logo-n.svg" alt="" class="h-auto w-full" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.pulse-dot {
    animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(3);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
}
</style>
