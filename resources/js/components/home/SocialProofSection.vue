<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section
        class="flex w-full flex-col overflow-hidden border-t border-b border-[#D3D8E1] bg-white lg:flex-row"
    >
        <!-- LEFT PANEL: Dark Hero -->
        <div
            class="relative flex min-h-[440px] w-full shrink-0 flex-col justify-start overflow-hidden px-5 py-8 sm:min-h-[480px] sm:px-6 sm:py-9 md:min-h-[400px] md:px-8 md:py-10 lg:min-h-[640px] lg:w-[440px] lg:p-0 xl:min-h-[660px] xl:w-[510px] 2xl:min-h-[680px] 2xl:w-[576px]"
            style="
                background: linear-gradient(180deg, #0e2a66 0%, #0b244e 100%);
            "
            data-reveal="fade"
        >
            <!-- Decorative Logo Watermark (Desktop) -->
            <div
                class="pointer-events-none absolute right-[-50px] bottom-[-20px] z-0 block w-[220px] overflow-visible select-none sm:right-[-15px] sm:bottom-[-25px] sm:w-[270px] md:right-[-30px] md:bottom-[-40px] md:w-[380px] lg:right-[-80px] lg:w-[420px] lg:opacity-50 2xl:right-[-100px] 2xl:bottom-[-60px] 2xl:w-[480px] 2xl:opacity-100"
            >
                <img
                    src="/resources/assets/images/logo-n.svg"
                    alt=""
                    class="h-auto w-full"
                />
            </div>

            <!-- Content -->
            <div
                class="relative z-10 flex w-full flex-col gap-5 sm:gap-6 md:gap-7 lg:absolute lg:top-[70px] lg:left-[55px] lg:w-[340px] lg:gap-8 xl:top-[90px] xl:left-[62px] xl:w-[385px] xl:gap-9 2xl:top-[109px] 2xl:left-[74px] 2xl:w-[427px] 2xl:gap-[44px]"
            >
                <h2
                    class="w-full text-[22px] leading-[30px] font-semibold text-white sm:text-[24px] sm:leading-[32px] md:text-[28px] md:leading-[36px] lg:text-[32px] lg:leading-[40px] xl:text-[36px] xl:leading-[44px] 2xl:text-[40px] 2xl:leading-[48px]"
                >
                    {{ t('home.social_proof.title') }}
                </h2>
                <div
                    class="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-5 2xl:gap-6"
                >
                    <p
                        class="w-full text-[13px] leading-5 font-normal text-white/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
                    >
                        {{ t('home.social_proof.body') }}
                    </p>
                </div>
            </div>
        </div>

        <!-- RIGHT PANEL: Grid + Map -->
        <div class="relative flex flex-1 flex-col bg-white lg:min-h-[680px]">
            <!-- Content Grid Area -->
            <div class="flex flex-col md:flex-row md:items-stretch">
                <!-- Sri Lanka Column -->
                <div
                    class="w-full px-4 pt-5 pb-5 sm:px-5 sm:pt-6 sm:pb-6 md:flex-[0_0_290px] md:[background-image:repeating-linear-gradient(to_bottom,#D3D8E1_0,#D3D8E1_14px,transparent_14px,transparent_24px)] md:[background-size:1px_100%] md:[background-position:right_center] md:[background-repeat:no-repeat] md:px-7 md:pt-7 lg:flex-[0_0_350px] lg:px-8 lg:pt-8 xl:flex-[0_0_400px] xl:px-10 2xl:flex-[0_0_463px] 2xl:px-11 2xl:pt-[35px] 2xl:pb-10"
                    data-reveal="up"
                >
                    <h3
                        class="text-[18px] leading-[25px] font-semibold text-[#1A2D4B] sm:text-[19px] sm:leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[21px] lg:leading-[30px] xl:text-[22px] xl:leading-[32px] 2xl:leading-[48px]"
                    >
                        {{ t('home.social_proof.sri_lanka.title') }}
                    </h3>
                    <div
                        class="mt-2.5 flex flex-col gap-3 sm:mt-3 sm:gap-4 md:gap-4 lg:mt-4 lg:gap-5 2xl:gap-6"
                    >
                        <p
                            class="text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
                        >
                            {{ t('home.social_proof.sri_lanka.body1') }}
                        </p>
                        <p
                            class="text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
                        >
                            {{ t('home.social_proof.sri_lanka.body2') }}
                        </p>
                    </div>
                </div>

                <!-- Netherlands Column Container (Vertical Split) -->
                <div
                    class="flex flex-1 flex-col [background-image:repeating-linear-gradient(to_right,#D3D8E1_0,#D3D8E1_14px,transparent_14px,transparent_24px)] [background-size:100%_1px] [background-position:top_left] [background-repeat:no-repeat] md:[background-image:none]"
                    data-reveal="up"
                >
                    <!-- Top Part: Netherlands Text -->
                    <div
                        class="px-4 pt-5 pb-5 sm:px-5 sm:pt-6 sm:pb-5 md:px-7 md:pt-7 lg:px-8 lg:pt-[26px] lg:pb-7 xl:px-10 2xl:px-11 2xl:pt-[35px]"
                    >
                        <h3
                            class="text-[15px] leading-[22px] font-semibold text-[#1A2D4B] sm:text-[16px] sm:leading-[24px] md:text-[17px] md:leading-[26px] lg:text-[18px] lg:leading-[28px] xl:text-[20px] xl:leading-[30px] 2xl:text-[22px] 2xl:leading-[48px]"
                        >
                            {{ t('home.social_proof.netherlands.title') }}
                        </h3>
                        <div class="mt-2.5 sm:mt-3 lg:mt-4">
                            <p
                                class="text-[13px] leading-5 font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[25px] xl:text-[17px] xl:leading-[26px] 2xl:text-[18px] 2xl:leading-[27px]"
                            >
                                {{ t('home.social_proof.netherlands.body') }}
                            </p>
                        </div>
                    </div>

                    <!-- Separator Line -->
                    <div
                        class="h-px w-full [background-image:repeating-linear-gradient(to_right,#D3D8E1_0,#D3D8E1_14px,transparent_14px,transparent_24px)]"
                    ></div>

                    <!-- Bottom Part: Tagline + Flags -->
                    <div
                        class="px-4 pt-5 pb-5 sm:px-5 sm:pt-6 sm:pb-6 md:px-7 md:pt-6 lg:px-8 lg:pt-[38px] lg:pb-9 xl:px-10 2xl:px-11 2xl:pt-[43px] 2xl:pb-10"
                    >
                        <div class="flex flex-col gap-3 sm:gap-4 lg:gap-5">
                            <!-- Flag Pair -->
                            <div
                                class="flex items-center -space-x-2.5 sm:-space-x-3 md:-space-x-3 lg:-space-x-3.5 2xl:-space-x-4"
                            >
                                <div
                                    class="z-20 h-9 w-9 overflow-hidden rounded-full border border-white shadow-sm ring-2 ring-white sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-11 lg:w-11 2xl:h-12 2xl:w-12"
                                >
                                    <img
                                        src="/images/flags/sri-lanka.png"
                                        alt=""
                                        class="h-full w-full object-cover"
                                    />
                                </div>
                                <div
                                    class="z-10 h-9 w-9 overflow-hidden rounded-full border border-white shadow-sm ring-2 ring-white sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-11 lg:w-11 2xl:h-12 2xl:w-12"
                                >
                                    <img
                                        src="/images/flags/netherlands.png"
                                        alt=""
                                        class="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <h4
                                class="font-instrument text-[14px] leading-[20px] font-semibold text-[#1A2D4B] sm:text-[15px] sm:leading-[22px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[25px] xl:text-[20px] xl:leading-[28px] 2xl:max-w-[313px] 2xl:text-[24px] 2xl:leading-[32px]"
                            >
                                {{ t('home.social_proof.tagline') }}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <!-- WORLD MAP (Aligns to bottom) -->
            <div
                class="relative mt-auto h-[160px] w-full overflow-visible sm:h-[200px] md:h-[240px] lg:h-[270px] xl:h-[295px] 2xl:h-[300px]"
            >
                <!-- Map Background -->
                <div class="absolute right-0 bottom-0 h-full w-full">
                    <img
                        src="/images/world-map-dots.png"
                        alt=""
                        class="h-full w-full object-contain object-bottom opacity-80"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.font-instrument {
    font-family: 'Instrument Sans', sans-serif;
}
.font-work {
    font-family: 'Work Sans', sans-serif;
}
</style>
