<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section
        class="font-mona flex w-full flex-col border-t border-b border-[#D3D8E1] bg-white lg:flex-row"
    >
        <!-- LEFT PANEL: Dark Hero -->
        <div
            class="relative flex h-auto w-full shrink-0 flex-col justify-start overflow-hidden px-[20px] pt-[37px] pb-[37px] lg:min-h-[766px] lg:w-[576px] lg:p-0"
            style="
                background: linear-gradient(180deg, #0e2a66 0%, #0b244e 100%);
            "
            data-reveal="fade"
        >
            <!-- Decorative Logo Watermark (Desktop) -->
            <svg
                class="pointer-events-none absolute hidden lg:block"
                style="
                    width: 398.16px;
                    height: 326.83px;
                    left: 237px;
                    top: 461px;
                    opacity: 0.86;
                    transform: rotate(-8.9deg);
                "
                viewBox="0 0 560 485"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M495.518 0L348.712 415.875L394.485 414.776L495.518 0Z"
                    fill="#D7A118"
                />
                <path
                    d="M350.64 415.715L285.198 244.809L312.414 192.278L373.088 353.019L350.64 415.715Z"
                    fill="#AB7B29"
                />
                <path
                    d="M269.024 193.339L61.7849 469.98L170.291 467.659L312.399 192.297L269.024 193.339Z"
                    fill="#D7A118"
                />
            </svg>
            <!-- Decorative Logo Watermark (Mobile) -->
            <svg
                class="pointer-events-none absolute lg:hidden"
                style="
                    width: 295.78px;
                    height: 242.8px;
                    left: 176px;
                    top: 259px;
                    opacity: 0.86;
                    transform: rotate(-8.9deg);
                "
                viewBox="0 0 560 485"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M495.518 0L348.712 415.875L394.485 414.776L495.518 0Z"
                    fill="#D7A118"
                />
                <path
                    d="M350.64 415.715L285.198 244.809L312.414 192.278L373.088 353.019L350.64 415.715Z"
                    fill="#AB7B29"
                />
                <path
                    d="M269.024 193.339L61.7849 469.98L170.291 467.659L312.399 192.297L269.024 193.339Z"
                    fill="#D7A118"
                />
            </svg>

            <!-- Content -->
            <div
                class="relative z-10 flex w-full flex-col gap-[25px] lg:absolute lg:top-[109px] lg:left-[74px] lg:w-[427px] lg:gap-[44px]"
            >
                <h2
                    class="w-full max-w-[307px] text-[24px] leading-[34px] font-semibold text-white lg:max-w-none lg:text-[40px] lg:leading-[48px]"
                >
                    {{ t('home.social_proof.title') }}
                </h2>
                <p
                    class="w-full text-[14px] leading-[20px] font-normal text-white/85 lg:text-[18px] lg:leading-[27px]"
                >
                    {{ t('home.social_proof.body') }}
                </p>
            </div>
        </div>

        <!-- RIGHT PANEL: Grid + Map -->
        <div
            class="z-0 flex w-full flex-1 flex-col bg-white lg:border-l lg:border-[#D3D8E1]"
        >
            <!-- Country Grid Top Section -->
            <div class="flex w-full flex-col border-b border-dashed border-[#B2B8C2] lg:flex-row">
                <!-- Sri Lanka -->
                <div
                    class="flex flex-1 flex-col border-b border-dashed border-[#B2B8C2] p-5 lg:w-1/2 lg:border-r lg:border-b-0 lg:py-12 lg:px-12"
                    data-reveal="up"
                >
                    <h3
                        class="mb-[10px] text-[20px] leading-[28px] font-semibold text-[#1A2D4B] lg:mb-[15px] lg:text-[22px] lg:leading-[48px]"
                    >
                        {{ t('home.social_proof.sri_lanka.title') }}
                    </h3>
                    <div class="flex flex-col gap-[15px]">
                        <p
                            class="text-[14px] leading-[20px] font-normal text-black/85 lg:w-[287px] lg:text-[18px] lg:leading-[27px]"
                        >
                            {{ t('home.social_proof.sri_lanka.body1') }}
                        </p>
                        <p
                            class="text-[14px] leading-[20px] font-normal text-black/85 lg:w-[306px] lg:text-[18px] lg:leading-[27px]"
                        >
                            {{ t('home.social_proof.sri_lanka.body2') }}
                        </p>
                    </div>
                </div>

                <!-- Netherlands + Tagline (Right Column) -->
                <div class="flex flex-1 flex-col lg:w-1/2" data-reveal="up">
                    <!-- Netherlands -->
                    <div
                        class="flex flex-col border-b border-dashed border-[#B2B8C2] p-5 lg:py-12 lg:px-12"
                    >
                        <h3
                            class="mb-[10px] text-[20px] leading-[28px] font-semibold text-[#1A2D4B] lg:mb-[15px] lg:text-[22px] lg:leading-[48px]"
                        >
                            {{ t('home.social_proof.netherlands.title') }}
                        </h3>
                        <p
                            class="text-[14px] leading-[20px] font-normal text-black/85 lg:w-[315px] lg:text-[18px] lg:leading-[27px]"
                        >
                            {{ t('home.social_proof.netherlands.body') }}
                        </p>
                    </div>

                    <!-- Location Tagline Banner -->
                    <div
                        class="flex flex-col items-start gap-[25px] p-5 lg:py-12 lg:px-12"
                    >
                        <!-- Flag Circles -->
                        <div class="flex shrink-0 flex-row items-center">
                            <div
                                class="z-10 flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-full border border-white bg-[#f0f0f0] shadow-sm"
                            >
                                <img
                                    src="/images/flags/sri-lanka.png"
                                    alt=""
                                    class="h-full w-full object-cover"
                                    onerror="
                                        this.style.display = 'none';
                                        this.nextElementSibling.style.display =
                                            'block';
                                    "
                                />
                                <span class="hidden pt-1 text-2xl leading-none"
                                    >🇱🇰</span
                                >
                            </div>
                            <div
                                class="z-20 -ml-[12px] flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-full border border-white bg-[#f0f0f0] shadow-sm"
                            >
                                <img
                                    src="/images/flags/netherlands.png"
                                    alt=""
                                    class="h-full w-full object-cover"
                                    onerror="
                                        this.style.display = 'none';
                                        this.nextElementSibling.style.display =
                                            'block';
                                    "
                                />
                                <span class="hidden pt-1 text-2xl leading-none"
                                    >🇳🇱</span
                                >
                            </div>
                        </div>
                        <!-- Tagline -->
                        <p
                            class="font-instrument w-[313px] text-[16px] leading-[22px] font-semibold text-[#1A2D4B] lg:text-[24px] lg:leading-[32px]"
                        >
                            {{ t('home.social_proof.tagline') }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bottom Map Area -->
            <div
                class="relative flex h-[133.53px] w-full flex-1 items-center justify-center overflow-hidden px-0 py-0 lg:h-auto lg:px-[44px] lg:py-[40px]"
                data-reveal="fade"
            >
                <!-- Map bounding box relative for precise coordinates -->
                <div
                    class="relative mx-auto h-[133.53px] w-[430px] shrink-0 lg:mx-0 lg:h-auto lg:w-full"
                >
                    <img
                        src="/images/world-map-dots.png"
                        :alt="t('home.social_proof.map_alt')"
                        class="mx-auto h-full w-full object-cover opacity-90 lg:h-auto lg:object-contain"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-mona {
    font-family: 'Mona Sans', sans-serif;
}
.font-instrument {
    font-family: 'Instrument Sans', sans-serif;
}
.font-work {
    font-family: 'Work Sans', sans-serif;
}
</style>