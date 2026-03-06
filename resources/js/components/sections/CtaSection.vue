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
        class="font-mona relative w-full overflow-hidden bg-[#F4F9FF] py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20"
    >
        <div
            class="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5 px-4 sm:gap-6 sm:px-6 md:gap-7 md:px-8 lg:gap-8 lg:px-[85px]"
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
                <h2
                    class="w-full max-w-[613px] text-center text-[15px] font-medium leading-[22px] text-[#101828] sm:text-[16px] sm:leading-[24px] md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[28px] xl:text-[19px] xl:leading-[29px] 2xl:text-[20px] 2xl:leading-[30px]"
                >
                    {{ t('cta.readyTitle') }}
                </h2>
                <p
                    class="w-full max-w-[604px] text-center text-[13px] font-normal leading-5 text-[#667085] sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[27px] 2xl:text-[18px] 2xl:leading-[28px]"
                >
                    {{ t('cta.readySubtext1') }}
                </p>
                <p
                    class="w-full max-w-[581px] text-center text-[13px] font-normal leading-5 text-[#667085] sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[27px] 2xl:text-[18px] 2xl:leading-[28px]"
                >
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
                    class="!flex !h-[44px] !w-full !justify-center !border-0 !bg-[#0B1F3F] !px-0 sm:!h-[46px] md:!h-[48px] md:!w-auto md:!px-5 lg:!h-[52px] lg:!w-[210px] 2xl:!h-[55px] 2xl:!w-[228px] !rounded-[8px]"
                >
                    <div class="flex items-center justify-center gap-[10px]">
                        <div
                            class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00A67E]/20"
                        >
                            <div class="relative h-2 w-2 rounded-full bg-[#00A67E]">
                                <div
                                    class="absolute inset-0 rounded-full bg-[#00A67E]"
                                ></div>
                            </div>
                        </div>
                        <span
                            class="text-[13px] font-semibold whitespace-nowrap text-white md:text-[14px] lg:text-[15px] 2xl:text-[16px]"
                        >
                            {{ t('cta.discussProject') }}
                        </span>
                    </div>
                </AppButton>

                <AppButton
                    variant="outline"
                    tag="Link"
                    href="/team-outsourcing"
                    class="!flex !h-[44px] !w-full !justify-center !border !border-[rgba(11,31,63,0.67)] !px-0 sm:!h-[46px] md:!h-[48px] md:!w-auto md:!px-5 lg:!h-[52px] lg:!w-[240px] 2xl:!h-[55px] 2xl:!w-[266px] !rounded-[8px]"
                >
                    <span
                        class="text-[13px] font-medium text-[#0B1F3F] md:text-[14px] lg:text-[15px] 2xl:text-[16px]"
                    >
                        {{ t('cta.discussOutsourcing') }}
                    </span>
                </AppButton>
            </div>

            <!-- Italic Tagline -->
            <p
                class="w-full max-w-[238px] text-center text-[12px] font-medium italic leading-5 text-[#1D4FBC] sm:max-w-[260px] sm:text-[13px] md:text-[14px] md:leading-[22px] lg:max-w-[300px] lg:text-[16px] lg:leading-[26px] 2xl:text-[18px] 2xl:leading-[28px]"
            >
                {{ t('cta.tagline') }}
            </p>

            <!-- Decorative Gold Shape -->
            <div
                class="pointer-events-none select-none absolute z-0 hidden md:block overflow-visible
                       md:bottom-[-70px] md:right-[-80px] md:w-[450px] md:opacity-80
                       lg:bottom-[-90px] lg:right-[-120px] lg:w-[500px] lg:opacity-100
                       2xl:bottom-[-130px] 2xl:right-[-160px] 2xl:w-[620px]"
            >
                <img
                    src="/resources/assets/images/logo-n.svg"
                    alt=""
                    class="h-auto w-full"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-mona {
    font-family: 'Mona Sans', sans-serif;
}

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
