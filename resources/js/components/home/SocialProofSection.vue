<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
    <section
        class="flex w-full overflow-hidden border-t border-b border-[#D3D8E1] bg-white text-navy dark:bg-[#070F1C] dark:text-white dark:border-[#30456B]"
    >
        <div class="mx-auto flex w-full flex-col lg:flex-row">
            <!-- LEFT PANEL: Dark Hero -->
            <div
                class="container-px relative flex min-h-[440px] shrink-0 flex-col
                justify-start overflow-hidden py-8 sm:min-h-[480px] sm:py-9 md:min-h-[500px]
                md:py-10 lg:min-h-[640px] lg:w-[44%] lg:shrink-0 xl:min-h-[660px] 2xl:min-h-[700px]"
                style="
                    background: linear-gradient(
                        180deg,
                        #0e2a66 0%,
                        #0b244e 100%
                    );
                "
                data-reveal="fade"
            >
                <!-- Decorative Logo Watermark (Desktop) -->
                <div
                    class="pointer-events-none absolute right-[-50px] bottom-[-20px] z-0 block w-[220px] overflow-visible select-none sm:right-[-15px] sm:bottom-[-25px] sm:w-[270px] md:right-[-30px] md:bottom-[-40px] md:w-[380px] lg:right-[-80px] lg:w-[420px] 2xl:right-[-100px] 2xl:bottom-[-60px] 2xl:w-[480px]"
                >
                    <img
                        src="/images/logo-n.svg"
                        alt=""
                        class="h-auto w-full"
                    />
                </div>

                <!-- Content -->
                <div
                    class="relative z-10 flex h-full w-full flex-col flex-wrap gap-5 sm:gap-6 md:gap-7 lg:gap-8
                    xl:gap-9 xl:gap-14 2xl:gap-[44px]"
                >
                    <h2 class="title-section-light pt-20 lg:pt-32">
                        {{ t('home.social_proof.title') }}
                    </h2>
                    <div
                        class="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-5 2xl:gap-6"
                    >
                        <p class="body-on-dark">
                            {{ t('home.social_proof.body') }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- RIGHT PANEL: Grid + Map -->
            <div
                class="relative flex w-full lg:w-1/2 flex-1 flex-col bg-white lg:min-h-[680px] dark:bg-[#070F1C]"
            >
                <!-- Content Grid Area -->
                <div
                    class="flex flex-col md:flex-row md:items-stretch lg:flex-col xl:flex-row xl:items-stretch"
                >
                    <!-- Sri Lanka Column -->
                    <div
                        class="section-px w-full py-5 md:flex-[0_0_310px] md:[background-image:repeating-linear-gradient(to_bottom,#B2B8C2_0,#B2B8C2_5px,transparent_5px,transparent_8px)] md:[background-size:1px_100%] md:[background-position:right_center] md:[background-repeat:no-repeat] md:py-10 lg:w-full lg:flex-none lg:[background-image:repeating-linear-gradient(to_right,#B2B8C2_0,#B2B8C2_5px,transparent_5px,transparent_8px)] lg:[background-size:100%_1px] lg:[background-position:center_bottom] lg:[background-repeat:no-repeat] xl:w-auto xl:flex-[0_0_350px] xl:[background-image:repeating-linear-gradient(to_bottom,#B2B8C2_0,#B2B8C2_5px,transparent_5px,transparent_8px)] xl:[background-size:1px_100%] xl:[background-position:right_center] xl:[background-repeat:no-repeat] 2xl:flex-[0_0_400px] 2xl:py-14"
                        data-reveal="up"
                    >
                        <h3 class="heading-panel">
                            {{ t('home.social_proof.sri_lanka.title') }}
                        </h3>
                        <div
                            class="mt-2.5 flex flex-col gap-3 sm:mt-3 sm:gap-4 md:gap-4 lg:mt-4 lg:gap-5 2xl:gap-6"
                        >
                            <p class="body-panel">
                                {{ t('home.social_proof.sri_lanka.body1') }}
                            </p>
                            <p class="body-panel">
                                {{ t('home.social_proof.sri_lanka.body2') }}
                            </p>
                        </div>
                    </div>

                    <!-- Netherlands Column Container (Vertical Split) -->
                    <div
                        class="flex flex-1 flex-col [background-image:repeating-linear-gradient(to_right,#B2B8C2_0,#B2B8C2_5px,transparent_5px,transparent_8px)] [background-size:100%_1px] [background-position:top_left] [background-repeat:no-repeat] md:[background-image:none]"
                        data-reveal="up"
                    >
                        <!-- Top Part: Netherlands Text -->
                        <div
                            class="m e-5 py-5 ps-4 md:me-10 md:py-10 md:ps-5 lg:ps-6 xl:me-20 xl:ps-8 2xl:py-14 2xl:ps-10 4xl:me-40 4xl:ps-14"
                        >
                            <h3 class="heading-panel-sm">
                                {{ t('home.social_proof.netherlands.title') }}
                            </h3>
                            <div class="mt-2.5 sm:mt-3 lg:mt-4">
                                <p class="body-panel">
                                    {{
                                        t('home.social_proof.netherlands.body')
                                    }}
                                </p>
                            </div>
                        </div>

                        <!-- Separator Line -->
                        <div
                            class="h-px w-full [background-image:repeating-linear-gradient(to_right,#B2B8C2_0,#B2B8C2_5px,transparent_5px,transparent_8px)]"
                        ></div>

                        <!-- Bottom Part: Tagline + Flags -->
                        <div
                            class="section-px pt-5 pb-5 sm:pt-6 sm:pb-6 md:pt-6 lg:pt-[38px] lg:pr-16 lg:pb-9 xl:pr-24 2xl:pt-[43px] 2xl:pr-32 2xl:pb-10"
                        >
                            <div
                                class="flex flex-row items-center gap-4 sm:gap-5 lg:flex-col lg:items-start lg:gap-5 2xl:gap-[25px]"
                            >
                                <!-- Flag Pair: Netherlands on top, Sri Lanka behind -->
                                <div
                                    class="flex items-center -space-x-2.5 sm:-space-x-3 md:-space-x-3 lg:-space-x-3 2xl:-space-x-3"
                                >
                                    <div
                                        class="z-10 h-9 w-9 overflow-hidden rounded-full border border-white shadow-sm ring-2 ring-white sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-11 lg:w-11 2xl:h-12 2xl:w-12"
                                    >
                                        <img
                                            src="/images/flags/sri-lanka.png"
                                            alt=""
                                            class="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div
                                        class="z-20 h-9 w-9 overflow-hidden rounded-full border border-white shadow-sm ring-2 ring-white sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-11 lg:w-11 2xl:h-12 2xl:w-12"
                                    >
                                        <img
                                            src="/images/flags/netherlands.png"
                                            alt=""
                                            class="h-full w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h4 class="tagline-panel">
                                    <span
                                        v-for="(part, index) in t(
                                            'home.social_proof.tagline',
                                        )
                                            .split('.')
                                            .filter((p) => p.trim())"
                                        :key="index"
                                        class="after:content-['._'] lg:block lg:after:content-['.']"
                                        >{{ part.trim() }}</span
                                    >
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
        </div>
    </section>
</template>

<style scoped>
.font-instrument {
    font-family: 'Instrument Sans Variable', sans-serif;
}
</style>
