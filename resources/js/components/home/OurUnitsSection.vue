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

const setActiveTab = (index: number) => {
    activeTab.value = index;
};
</script>

<template>
    <section class="section-pt bg-white text-navy dark:bg-[#070F1C] dark:text-white">
        <div class="wrap mx-auto">
            <!-- SECTION HEADER -->
            <div
                class="mx-auto mb-5 flex flex-col items-center gap-4 md:mb-10 xl:mb-14"
                data-reveal="up"
            >
                <h2 class="title-section text-center text-navy-light dark:text-white">
                    {{ t('home.units.title') }}
                </h2>
                <p class="subtitle text-center dark:text-white/70">
                    {{ t('home.units.subtitle') }}
                </p>
            </div>

            <!-- TAB NAVIGATION -->
            <div
                class="lg:max-w-inner mx-auto grid h-auto w-full grid-cols-2 border border-[#D3D8E1] bg-white lg:flex lg:h-[65px] lg:flex-row xl:h-[70px] 2xl:h-[77px] dark:bg-[#0B1F3F] dark:border-[#30456B]"
                data-reveal="up"
                data-reveal-delay="50"
            >
                <button
                    v-for="(tab, index) in tabs"
                    :key="index"
                    class="flex h-[52px] cursor-pointer items-center justify-center transition-colors duration-200 sm:h-[56px] md:h-[60px] lg:h-full lg:flex-1"
                    :class="[
                        activeTab === index
                            ? 'bg-[#F3F5FB] dark:bg-[#102347]'
                            : 'bg-white hover:bg-[#F3F5FB]/50 dark:bg-[#0B1F3F] dark:hover:bg-[#102347]',
                        index === 0
                            ? 'border-r border-b border-[#D3D8E1] lg:border-b-0'
                            : '',
                        index === 1
                            ? 'border-b border-[#D3D8E1] lg:border-r lg:border-b-0 lg:border-[#D3D8E1]'
                            : '',
                        index === 2
                            ? 'border-r border-[#D3D8E1] lg:border-r'
                            : '',
                        index === 3 ? 'lg:border-r-0' : '',
                    ]"
                    @click="setActiveTab(index)"
                >
                    <span
                        class="subtitle px-1 lg:px-0"
                        :class="
                            activeTab === index
                                ? '!font-semibold !text-black dark:!text-white'
                                : 'font-normal text-[#0b1f3a]/40 dark:text-white/50'
                        "
                    >
                        {{ tab }}
                    </span>
                </button>
            </div>

            <!-- UNIT CARD PANEL WRAPPER -->
            <div
                class="lg:max-w-inner mx-auto mt-10 flex w-full flex-col overflow-hidden border
                border-[#D3D8E1] bg-white lg:min-h-[520px] xl:min-h-[565px] dark:bg-[#0B1F3F] dark:border-[#30456B]"
            >
                <Transition name="unit-fade" mode="out-in" class="flex flex-1">
                    <div
                        :key="activeTab"
                        class="flex w-full flex-1 flex-col lg:flex-row lg:items-stretch"
                    >
                        <!-- LEFT COLUMN (no data-reveal: content is dynamic on tab switch) -->
                        <div
                            class="order-last flex w-full lg:w-1/2 flex-col bg-[rgba(249,251,255,0.71)]
                            p-5 sm:p-6 md:p-8 lg:order-first lg:shrink-0 lg:p-[50px_44px]
                            xl:p-[55px_50px] 2xl:p-[60px_58px] dark:bg-[#070F1C]"
                        >
                            <!-- HEADING GROUP -->
                            <div class="flex flex-col gap-2 lg:gap-[16px]">
                                <h3 class="title-card text-[#0C2143] dark:text-white">
                                    {{ t(`home.units.${activeUnit}.name`) }}
                                </h3>
                                <p class="label text-[#000000D9] dark:text-white/80">
                                    {{ t(`home.units.${activeUnit}.tagline`) }}
                                </p>
                            </div>

                            <!-- BODY + BULLETS -->
                            <div
                                class="mt-4 flex flex-col gap-3 sm:mt-5 lg:mt-0 lg:flex-1 lg:gap-[32px] lg:pt-[32px]"
                            >
                                <p class="body dark:text-white/80">
                                    {{
                                        t(
                                            `home.units.${activeUnit}.description`,
                                        )
                                    }}
                                </p>

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
                                        <span class="body text-[#081B3A] dark:text-white/80">{{
                                            feature
                                        }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- CTA BUTTONS -->
                            <div
                                class="flex flex-col gap-[10px] lg:gap-[10px] lg:pt-[32px] xl:flex-row xl:gap-[14px] mt-8 lg:mt-0"
                            >
                                <Link
                                    :href="route('services.outsource')"
                                    class="flex h-[44px] w-full items-center justify-center gap-[7px] rounded-[6px] bg-[#0B1F3F] dark:!bg-[#FFB200]/80
                                     px-4 transition-all duration-200 hover:-translate-y-px hover:bg-[#1a3358] hover:shadow-[0_6px_20px_rgba(11,31,58,0.28)]
                                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c] active:translate-y-0 active:bg-[#081629] sm:h-[46px] lg:h-[48px] lg:rounded-[8px] lg:px-6 xl:w-auto 2xl:h-[55px]"
                                >
                                    <span class="btn-text whitespace-nowrap">
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

                                <Link
                                    :href="route('services.dedicated-team')"
                                    class="flex h-[44px] w-full items-center justify-center gap-[7px] rounded-[6px] bg-[rgba(77,161,240,0.11)]
                                    dark:bg-transparent dark:border dark:border-[#FFB200]/80
                                    px-4 transition-all duration-200 hover:-translate-y-px
                                    hover:bg-[rgba(77,161,240,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-[#c9a84c] active:translate-y-0 sm:h-[46px] lg:h-[48px] lg:rounded-[8px]
                                    lg:px-6 xl:w-auto 2xl:h-[55px]"
                                >
                                    <span
                                        class="btn-text font-semibold whitespace-nowrap !text-[#1D4FBC] dark:!text-white"
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
                                            class="dark:stroke-white"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <!-- RIGHT COLUMN (image) (no data-reveal: content is dynamic) -->
                        <div
                            class="relative order-first h-[340px] w-full overflow-hidden sm:h-[400px] md:h-[460px] lg:order-last lg:h-auto lg:flex-1 lg:self-stretch"
                            style="
                                background: linear-gradient(
                                    180deg,
                                    #0c2144 0%,
                                    #0c2c71 100%
                                );
                            "
                        >
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

                            <div
                                class="relative z-10 flex h-full w-full justify-center lg:absolute lg:inset-0"
                                :class="
                                    activeUnit === 'outsourcing'
                                        ? 'items-end'
                                        : 'items-center'
                                "
                            >
                                <img
                                    :src="`/images/units/${activeUnit}.png`"
                                    :alt="
                                        t(`home.units.${activeUnit}.image_alt`)
                                    "
                                    :class="[
                                        activeUnit === 'development'
                                            ? 'h-auto w-full translate-x-6 object-contain object-left ' +
                                             'drop-shadow-[0px_12px_32px_rgba(0,0,0,0.4)] lg:h-full' +
                                              'lg:translate-x-10 2xl:translate-x-14'
                                            : activeUnit === 'outsourcing'
                                              ? 'h-auto w-full object-contain drop-shadow-[0px_12px_32px_rgba(0,0,0,0.3)] ' +
                                               'lg:h-full lg:object-cover 2xl:shadow-[0px_24px_64px_rgba(0,0,0,0.35)]'
                                              : 'h-full w-full object-cover shadow-[0px_12px_32px_rgba(0,0,0,0.3)] ' +
                                               '2xl:shadow-[0px_24px_64px_rgba(0,0,0,0.35)]',
                                    ]"
                                />
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
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
</style>
