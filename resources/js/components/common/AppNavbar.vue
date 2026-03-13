<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import AppButton from '@/components/ui/AppButton.vue';
import { usePreferencesStore } from '@/stores/preferences';
import { useAppearance } from '@/composables/useAppearance';
import logoDark from '@assets/images/logo-dark.svg';
import globeIcon from '@assets/images/globe.svg';

const page = usePage();
const { t, locale } = useI18n();
const preferences = usePreferencesStore();
const { resolvedAppearance, updateAppearance } = useAppearance();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const updateScroll = () => {
    isScrolled.value = window.pageYOffset > 20;
};

onMounted(() => {
    window.addEventListener('scroll', updateScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll);
});

const navLinks = computed(() => [
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.careers'), path: '/careers' },
    { name: t('nav.lifeAtAcendae'), path: '/life' },
]);

const isActive = (path: string) => {
    return page.url === path || page.url.startsWith(path + '/');
};

const switchLanguage = (lang: 'en' | 'nl') => {
    locale.value = lang;
    preferences.lang = lang;
};

const toggleDarkMode = () => {
    const next =
        resolvedAppearance.value === 'dark' ||
        resolvedAppearance.value === 'system'
            ? 'light'
            : 'dark';

    updateAppearance(next);
};

const navbarClasses = computed(() => [
    'fixed top-0 inset-x-0 z-[100] bg-white transition-all duration-300 dark:bg-[#070F1C]',
    isScrolled.value
        ? 'h-[60px] lg:h-[74px] border-b border-black/5 shadow-sm shadow-black/5'
        : 'h-[64px] lg:h-[74px] border-b border-transparent shadow-none',
]);

const closeAllMobile = () => {
    isMobileMenuOpen.value = false;
};
</script>

<template>
    <header :class="navbarClasses" class="flex items-center">
        <div
            class="wrap mx-auto flex h-full w-full items-center justify-between"
        >
            <!-- LOGO SECTION -->
            <div class="logo-wrap flex items-center">
                <Link
                    href="/"
                    class="flex items-center transition-opacity duration-200 hover:opacity-90 active:opacity-95"
                >
                    <!-- Light theme logo -->
                    <img
                        :src="logoDark"
                        :alt="t('common.logoAlt') || 'Acendae'"
                        class="logo-sharp logo-nav h-[36px] w-auto shrink-0 object-contain lg:h-[40px] xl:h-[48px] dark:hidden"
                        width="217"
                        height="75"
                        fetchpriority="high"
                        onerror="this.src = '/images/logo-dark.svg'"
                    />
                    <!-- Dark theme logo -->
                    <img
                        src="/assets/images/logo-light.svg"
                        :alt="t('common.logoAlt') || 'Acendae'"
                        class="logo-sharp logo-nav hidden h-[36px] w-auto shrink-0 object-contain lg:h-[40px] xl:h-[48px] dark:block"
                        width="217"
                        height="75"
                        fetchpriority="high"
                    />
                </Link>
            </div>

            <!-- DESKTOP NAVIGATION -->
            <nav
                class="hidden items-center gap-x-[20px] lg:flex xl:gap-x-[28px] 2xl:gap-x-[36px]"
            >
                <Link
                    v-for="link in navLinks"
                    :key="link.path"
                    :href="link.path"
                    class="nav-link group relative py-2 text-[14px] leading-[18px] font-medium whitespace-nowrap transition-colors duration-200 xl:text-[15px] 2xl:text-[16px]"
                    :class="
                        isActive(link.path)
                            ? 'text-[#0B1F3F] dark:text-white'
                            : 'text-black/85 hover:text-[#0B1F3F] dark:text-white/80 dark:hover:text-white'
                    "
                >
                    {{ link.name }}
                    <span
                        class="absolute -bottom-1 left-0 h-[2px] bg-[#C9A84C] transition-all duration-300"
                        :class="
                            isActive(link.path)
                                ? 'w-full opacity-100'
                                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-40'
                        "
                    ></span>
                </Link>
            </nav>

            <!-- RIGHT ACTIONS CLUSTER -->
            <div
                class="hidden items-center gap-x-[20px] lg:flex xl:gap-x-[32px] 2xl:gap-x-[40px]"
            >
                <!-- Branded Language Switcher Pill -->
                <div
                    class="relative flex h-[36px] items-center rounded-full border border-black/10 bg-white p-1.5 dark:border-white/15 dark:bg-[#0B1F3F]"
                >
                    <div class="flex items-center pr-2">
                        <img
                            :src="globeIcon"
                            class="h-[24px] w-[24px] dark:brightness-110 dark:invert"
                            alt=""
                        />
                    </div>
                    <div class="flex items-center gap-1">
                        <button
                            v-for="lang in ['en', 'nl'] as const"
                            :key="lang"
                            @click="switchLanguage(lang)"
                            class="flex h-[28px] min-w-[30px] items-center justify-center rounded-full px-3 py-1 text-[14px] font-medium uppercase transition-all duration-150"
                            :class="
                                locale === lang
                                    ? 'bg-[rgba(213,226,255,0.31)] text-[#1D4FBC] dark:bg-[#C9A84C] ' +
                                      'dark:text-[#070F1C]'
                                    : 'text-black hover:bg-black/10 dark:text-white dark:hover:bg-white/15'
                            "
                        >
                            {{ lang }}
                        </button>
                    </div>
                </div>

                <!-- Dark Mode Toggle -->
                <button
                    @click="toggleDarkMode"
                    class="group relative flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-gray-100 xl:h-9 xl:w-9 dark:hover:bg-white/10"
                    :title="t('common.darkMode')"
                >
                    <Sun
                        v-if="resolvedAppearance === 'dark'"
                        class="h-5 w-5 text-[#C9A84C] transition-transform group-hover:rotate-12 xl:h-6 xl:w-6"
                    />
                    <Moon
                        v-else
                        class="h-5 w-5 text-[#0B1F3F] transition-transform group-hover:rotate-12 xl:h-6 xl:w-6 dark:text-white"
                    />
                </button>

                <!-- Branded Primary CTA -->
                <AppButton
                    variant="primary"
                    tag="Link"
                    href="/contact"
                    class="!h-[44px] !w-auto !rounded-[6px] !bg-[#0B1F3F] !px-4 transition-all duration-200 hover:!-translate-y-px hover:!bg-[#1a3358] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629] xl:!h-[48px] xl:!w-[159px] xl:!px-5"
                >
                    <span
                        class="text-[14px] leading-[16px] font-semibold whitespace-nowrap text-[#9ABAFF] xl:text-[16px]"
                    >
                        {{ t('nav.getStarted') }}
                    </span>
                </AppButton>
            </div>

            <!-- MOBILE MENU TRIGGER -->
            <button
                class="flex h-10 w-10 items-center justify-center rounded-lg text-[#0B1F3F] transition-colors hover:bg-black/5 lg:hidden dark:text-white dark:hover:bg-white/10"
                @click="isMobileMenuOpen = !isMobileMenuOpen"
                :aria-expanded="isMobileMenuOpen"
            >
                <div class="relative h-6 w-6">
                    <Transition name="fade" mode="out-in">
                        <Menu
                            v-if="!isMobileMenuOpen"
                            key="menu"
                            class="h-6 w-6"
                        />
                        <X v-else key="close" class="h-6 w-6" />
                    </Transition>
                </div>
            </button>
        </div>

        <!-- MOBILE DRAWER -->
        <Transition name="slide-down">
            <div
                v-if="isMobileMenuOpen"
                class="fixed inset-x-0 top-[64px] z-[90] h-[calc(100vh-64px)] w-full overflow-y-auto bg-white lg:hidden dark:bg-[#070F1C]"
            >
                <div class="flex flex-col p-6 pt-8 pb-12">
                    <!-- Nav Links Stack -->
                    <nav
                        class="flex flex-col divide-y divide-black/5 dark:divide-white/10"
                    >
                        <Link
                            v-for="link in navLinks"
                            :key="link.path"
                            :href="link.path"
                            class="group flex h-[64px] items-center justify-between py-4"
                            @click="closeAllMobile"
                        >
                            <span
                                class="text-[18px] font-semibold transition-colors"
                                :class="
                                    isActive(link.path)
                                        ? 'text-[#C9A84C]'
                                        : 'text-[#0B1F3F] group-active:text-[#C9A84C] dark:text-white dark:group-active:text-[#C9A84C]'
                                "
                            >
                                {{ link.name }}
                            </span>
                            <ChevronDown
                                class="h-5 w-5 -rotate-90 text-black/20 dark:text-white/30"
                            />
                        </Link>
                    </nav>

                    <!-- Bottom Branded Area -->
                    <div
                        class="mt-10 space-y-8 rounded-2xl bg-gray-50/80 p-6 dark:bg-white/5"
                    >
                        <!-- Theme Toggle -->
                        <div class="flex items-center justify-between">
                            <span
                                class="text-[15px] font-medium text-black/60 dark:text-white/80"
                            >
                                {{ t('common.darkMode') }}
                            </span>
                            <button
                                @click="toggleDarkMode"
                                class="group flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-black/10 dark:hover:bg-white/15"
                                :title="t('common.darkMode')"
                            >
                                <Sun
                                    v-if="resolvedAppearance === 'dark'"
                                    class="h-6 w-6 text-[#C9A84C] transition-transform group-hover:rotate-12"
                                />
                                <Moon
                                    v-else
                                    class="h-6 w-6 text-[#0B1F3F] transition-transform group-hover:rotate-12 dark:text-white"
                                />
                            </button>
                        </div>

                        <!-- Language Switcher -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <img
                                    :src="globeIcon"
                                    class="h-5 w-5 opacity-60 dark:brightness-110 dark:invert"
                                    alt=""
                                />
                                <span
                                    class="text-[15px] font-medium text-black/60 dark:text-white/80"
                                    >{{ t('common.language') }}</span
                                >
                            </div>
                            <div
                                class="flex items-center gap-4 rounded-full border border-black/10 bg-white p-1.5 dark:border-white/15 dark:bg-[#0B1F3F]"
                            >
                                <button
                                    v-for="lang in ['en', 'nl'] as const"
                                    :key="lang"
                                    @click="switchLanguage(lang)"
                                    class="flex h-[36px] min-w-[48px] flex-1 items-center justify-center rounded-full px-5 py-2 text-[13px] font-bold uppercase transition-all hover:bg-black/10 dark:hover:bg-white/15"
                                    :class="
                                        locale === lang
                                            ? 'bg-[#D5E2FF] text-[#1D4FBC] dark:bg-[#C9A84C] dark:text-[#070F1C]'
                                            : 'text-black/50 dark:text-white/90'
                                    "
                                >
                                    {{ lang }}
                                </button>
                            </div>
                        </div>

                        <!-- CTA Stack -->
                        <div class="space-y-4">
                            <AppButton
                                variant="primary"
                                tag="Link"
                                href="/contact"
                                class="!h-[56px] w-full !rounded-[12px] !bg-[#0B1F3F] !text-[16px] !font-bold dark:!bg-[#FFB200]/80 dark:hover:!bg-[#E3C45F] dark:active:!bg-[#B8933D]"
                                @click="closeAllMobile"
                            >
                                <span class="text-[#9ABAFF] dark:!text-white">{{
                                    t('nav.getStarted')
                                }}</span>
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </header>
</template>

<style scoped>
/* Slide Down with scale & fade for modern feel */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-20px) scale(0.98);
    opacity: 0;
}

/* Generic Fade */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
