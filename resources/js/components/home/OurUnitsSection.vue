<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

const { t, tm } = useI18n();
const activeTab = ref(0);

const tabs = computed(() => [
    t('home.units.tabs.development'),
    t('home.units.tabs.engineering'),
    t('home.units.tabs.outsourcing'),
    t('home.units.tabs.experience'),
]);

type UnitKey = 'development' | 'engineering' | 'outsourcing' | 'experience';
const unitKeys: UnitKey[] = [
    'development',
    'engineering',
    'outsourcing',
    'experience',
];

const activeUnit = computed(() => unitKeys[activeTab.value]);
</script>

<template>
    <section
        class="acendae-container border-b border-[#D3D8E1] bg-white pt-10 pb-0 sm:pt-12 md:pt-14 lg:pt-16 2xl:pt-20"
    >
        <!-- SECTION HEADER (centered) -->
        <div
            class="acendae-container mx-auto mb-6 flex flex-col items-center gap-4 sm:mb-8 md:mb-10 lg:mb-12"
            data-reveal="up"
        >
            <h2
                class="font-instrument text-center text-[24px] leading-[30px] font-semibold text-[#1A2D4B] sm:text-[28px] sm:leading-[34px] md:text-[32px] md:leading-[38px] lg:text-[36px] lg:leading-[42px] xl:text-[38px] 2xl:text-[40px] 2xl:leading-[48px]"
            >
                {{ t('home.units.title') }}
            </h2>
            <p
                class="text-center text-[14px] leading-5 font-normal text-[#6b7280] sm:text-[15px] md:text-[16px] lg:text-[18px] lg:leading-[27px]"
            >
                {{ t('home.units.subtitle') }}
            </p>
        </div>

        <!-- TAB NAVIGATION -->
        <div
            class="mx-auto grid h-auto w-full grid-cols-2 border border-[#D3D8E1] lg:flex lg:h-[65px] lg:max-w-[var(--content-width)] lg:flex-row xl:h-[70px] 2xl:h-[77px]"
            data-reveal="up"
            data-reveal-delay="50"
        >
            <button
                v-for="(tab, index) in tabs"
                :key="index"
                class="flex h-[52px] cursor-pointer items-center justify-center transition-colors duration-200 sm:h-[56px] md:h-[60px] lg:h-full lg:flex-1"
                :class="[
                    activeTab === index
                        ? 'bg-[#F3F5FB] font-medium text-[#0b1f3a]'
                        : 'bg-white font-normal text-[#0b1f3a]/40',
                    index === 0
                        ? 'border-r border-b border-[#D3D8E1] lg:border-b-0'
                        : '',
                    index === 1
                        ? 'border-b border-[#D3D8E1] lg:border-r lg:border-b-0 lg:border-[#D3D8E1]'
                        : '',
                    index === 2 ? 'border-r border-[#D3D8E1] lg:border-r' : '',
                    index === 3 ? 'lg:border-r-0' : '',
                ]"
                @click="activeTab = index"
            >
                <span
                    class="text-[14px] leading-[20px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 2xl:leading-[27px]"
                >
                    {{ tab }}
                </span>
            </button>
        </div>

        <!-- UNIT CARD PANEL WRAPPER
             Desktop: fixed height so both columns fill exactly the same height.
             Mobile: auto height (image 340px top + content below).
        -->
        <div
            class="mx-auto mt-10 w-full overflow-hidden border border-[#D3D8E1] lg:h-[560px] lg:max-w-[var(--content-width)] xl:h-[510px] 2xl:h-[565px]"
        >
            <Transition name="unit-fade" mode="out-in">
                <div
                    :key="activeTab"
                    class="flex w-full flex-col lg:h-full lg:flex-row"
                >
                    <!-- LEFT COLUMN (content) — order-last on mobile, order-first at lg -->
                    <div
                        class="order-last flex w-full flex-col bg-[rgba(249,251,255,0.71)] p-5 sm:p-6 md:p-8 lg:order-first lg:h-full lg:w-[430px] lg:shrink-0 lg:p-[50px_44px] xl:w-[480px] xl:p-[55px_50px] 2xl:w-[535px] 2xl:p-[60px_58px]"
                        data-reveal="up"
                        data-reveal-delay="100"
                    >
                        <!-- HEADING GROUP: title + tagline -->
                        <div class="flex flex-col gap-2 lg:gap-[16px]">
                            <h3
                                class="font-instrument text-[22px] leading-[30px] font-semibold text-[#0C2143] sm:text-[24px] sm:leading-[32px] md:text-[26px] md:leading-[34px] lg:text-[28px] lg:leading-[38px] xl:text-[32px] xl:leading-[44px] 2xl:text-[36px] 2xl:leading-[51px]"
                            >
                                {{ t(`home.units.${activeUnit}.name`) }}
                            </h3>
                            <p
                                class="text-[13px] leading-[20px] font-semibold text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px]"
                            >
                                {{ t(`home.units.${activeUnit}.tagline`) }}
                            </p>
                        </div>

                        <!-- BODY + BULLETS GROUP -->
                        <div
                            class="mt-4 flex flex-col gap-3 sm:mt-5 lg:mt-0 lg:gap-[32px] lg:pt-[32px]"
                        >
                            <p
                                class="text-[13px] leading-[20px] font-normal text-black/85 sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px]"
                            >
                                {{ t(`home.units.${activeUnit}.description`) }}
                            </p>

                            <!-- BULLET LIST -->
                            <div
                                class="flex flex-col gap-3 sm:gap-3.5 md:gap-4"
                            >
                                <div
                                    v-for="(feature, fIndex) in tm(
                                        `home.units.${activeUnit}.features`,
                                    ) as any"
                                    :key="fIndex"
                                    class="flex flex-row items-center gap-2 lg:gap-[10px]"
                                >
                                    <div
                                        class="flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-full bg-[#D5E2FF] p-[1.5px] sm:h-[11px] sm:w-[11px] md:h-[12px] md:w-[12px] lg:h-[13px] lg:w-[13px] 2xl:h-[15px] 2xl:w-[15px] 2xl:p-[2px]"
                                    >
                                        <div
                                            class="h-[7px] w-[7px] rounded-full bg-[#1D4FBC] sm:h-[8px] sm:w-[8px] md:h-[9px] md:w-[9px] lg:h-[10px] lg:w-[10px] 2xl:h-[11px] 2xl:w-[11px]"
                                        ></div>
                                    </div>
                                    <span
                                        class="text-[13px] leading-[20px] text-[#081B3A] sm:text-[14px] sm:leading-[21px] md:text-[15px] md:leading-[22px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[27px]"
                                    >
                                        {{ feature }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- CTA BUTTONS
                             mobile/lg: stacked (flex-col), each full-width
                             xl+: side-by-side (flex-row), auto-width
                             lg inner width = 342px — too tight for two buttons side-by-side
                             xl inner width = 380px — fits comfortably
                        -->
                        <div
                            class="mt-5 flex flex-col gap-[10px] sm:mt-6 lg:mt-auto lg:gap-[10px] xl:flex-row xl:gap-[14px]"
                        >
                            <!-- PRIMARY button -->
                            <Link
                                :href="route('services.outsource')"
                                class="flex h-[44px] w-full items-center justify-center gap-[7px] rounded-[6px] bg-[#0B1F3F] px-4 transition-all duration-200 hover:-translate-y-px hover:bg-[#1a3358] hover:shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c] active:translate-y-0 active:bg-[#081629] sm:h-[46px] lg:h-[48px] lg:rounded-[8px] lg:px-5 xl:w-auto 2xl:h-[55px]"
                            >
                                <span
                                    class="text-[13px] font-semibold whitespace-nowrap text-white sm:text-[14px] lg:text-[16px]"
                                >
                                    {{
                                        t(
                                            `home.units.${activeUnit}.cta_primary`,
                                        )
                                    }}
                                </span>
                                <svg
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    class="h-[13px] w-[13px] shrink-0 sm:h-[14px] sm:w-[14px] lg:h-[18px] lg:w-[18px]"
                                >
                                    <path
                                        d="M4 14L14 4M14 4H7M14 4V11"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>

                            <!-- SECONDARY button -->
                            <Link
                                :href="route('services.dedicated-team')"
                                class="flex h-[44px] w-full items-center justify-center gap-[7px] rounded-[6px] bg-[rgba(77,161,240,0.11)] px-4 transition-all duration-200 hover:-translate-y-px hover:bg-[rgba(77,161,240,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c] active:translate-y-0 sm:h-[46px] lg:h-[48px] lg:rounded-[8px] lg:px-5 xl:w-auto 2xl:h-[55px]"
                            >
                                <span
                                    class="text-[13px] font-semibold whitespace-nowrap text-[#1D4FBC] sm:text-[14px] lg:text-[16px]"
                                >
                                    {{
                                        t(
                                            `home.units.${activeUnit}.cta_secondary`,
                                        )
                                    }}
                                </span>
                                <svg
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    class="h-[13px] w-[13px] shrink-0 sm:h-[14px] sm:w-[14px] lg:h-[18px] lg:w-[18px]"
                                >
                                    <path
                                        d="M4 14L14 4M14 4H7M14 4V11"
                                        stroke="#1D4FBC"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <!-- RIGHT COLUMN (image panel) — order-first on mobile, order-last at lg
                         Mobile: h-[340px] per Figma mobile spec.
                         Desktop: lg:h-full — fills the parent fixed card height exactly.
                    -->
                    <div
                        class="relative order-first h-[340px] w-full overflow-hidden sm:h-[400px] md:h-[460px] lg:order-last lg:flex lg:h-full lg:flex-1 lg:items-center lg:justify-center"
                        style="
                            background: linear-gradient(
                                180deg,
                                #0c2144 0%,
                                #0c2c71 100%
                            );
                        "
                        data-reveal="fade"
                        data-reveal-delay="150"
                    >
                        <!-- DECORATIVE VERTICAL STRIPES — mobile -->
                        <div
                            class="pointer-events-none absolute inset-0 lg:hidden"
                        >
                            <div
                                v-for="i in 14"
                                :key="'sm-' + i"
                                class="absolute top-0 bottom-0 w-[60px] bg-white/4"
                                :style="{ left: 10 + (i - 1) * 80 + 'px' }"
                            ></div>
                        </div>

                        <!-- DECORATIVE VERTICAL STRIPES — desktop -->
                        <div
                            class="pointer-events-none absolute inset-0 hidden lg:block"
                        >
                            <div
                                v-for="i in 8"
                                :key="'lg-' + i"
                                class="absolute top-0 bottom-0 w-[110px] bg-white/4"
                                :style="{ left: 40 + (i - 1) * 145 + 'px' }"
                            ></div>
                        </div>

                        <!-- UNIT IMAGE -->
                        <div
                            class="relative z-10 flex h-full w-full justify-center"
                            :class="
                                activeUnit === 'outsourcing'
                                    ? 'items-end'
                                    : 'items-center'
                            "
                        >
                            <img
                                :src="`/images/units/${activeUnit}.png`"
                                :alt="t(`home.units.${activeUnit}.image_alt`)"
                                :class="[
                                    activeUnit === 'development'
                                        ? 'h-auto w-[115%] max-w-none translate-x-6 object-contain drop-shadow-[0px_12px_32px_rgba(0,0,0,0.4)] lg:h-full lg:w-auto lg:max-w-[115%] lg:translate-x-10 2xl:max-w-[120%] 2xl:translate-x-14'
                                        : activeUnit === 'outsourcing'
                                          ? 'h-auto w-full object-contain drop-shadow-[0px_12px_32px_rgba(0,0,0,0.3)] lg:h-full lg:w-full lg:object-cover 2xl:shadow-[0px_24px_64px_rgba(0,0,0,0.35)]'
                                          : 'h-full w-full object-cover shadow-[0px_12px_32px_rgba(0,0,0,0.3)] 2xl:shadow-[0px_24px_64px_rgba(0,0,0,0.35)]',
                                ]"
                            />
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </section>
</template>

<style scoped>
.unit-fade-enter-active,
.unit-fade-leave-active {
    transition:
        opacity 0.25s ease,
        transform 0.25s ease;
}
.unit-fade-enter-from {
    opacity: 0;
    transform: translateY(10px);
}
.unit-fade-leave-to {
    opacity: 0;
    transform: translateY(-6px);
}

.font-instrument {
    font-family: 'Instrument Sans Variable', sans-serif;
}
</style>
