<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Menu, X, ChevronDown } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import AppButton from '@/components/ui/AppButton.vue';
import { usePreferencesStore } from '@/stores/preferences';
import logoDark from '@assets/images/logo-dark.svg';
import globeIcon from '@assets/images/globe.svg';
import moonIcon from '@assets/images/moon.svg';

const page = usePage();
const { t, locale } = useI18n();
const preferences = usePreferencesStore();

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
    preferences.toggleDarkMode();
};

const navbarClasses = computed(() => [
    'fixed top-0 inset-x-0 z-[100] bg-white transition-all duration-300',
    isScrolled.value
        ? 'h-[60px] lg:h-[74px] border-b border-black/5 shadow-sm shadow-black/5'
        : 'h-[64px] lg:h-[74px] border-b border-transparent shadow-none',
]);

const closeAllMobile = () => {
    isMobileMenuOpen.value = false;
};
</script>

<template>
    <header :class="navbarClasses" class="flex items-center bg-white">
        <div
            class="acendae-container mx-auto flex h-full w-full items-center justify-between"
        >
            <!-- LOGO SECTION -->
            <div class="flex items-center">
                <Link
                    href="/"
                    class="flex items-center transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                    <img
                        :src="logoDark"
                        :alt="t('common.logoAlt') || 'Acendae'"
                        class="h-[34px] w-auto shrink-0 object-contain lg:h-[40px] xl:h-[49px]"
                        onerror="this.src = '/images/logo-dark.svg'"
                    />
                </Link>
            </div>

            <!-- DESKTOP NAVIGATION -->
            <nav class="hidden items-center gap-x-[36px] lg:flex">
                <Link
                    v-for="link in navLinks"
                    :key="link.path"
                    :href="link.path"
                    class="group relative py-2 text-[16px] leading-[18px] font-medium transition-colors duration-200"
                    :class="
                        isActive(link.path)
                            ? 'text-[#0B1F3F]'
                            : 'text-black/85 hover:text-[#0B1F3F]'
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
            <div class="hidden items-center gap-x-[40px] lg:flex">
                <!-- Branded Language Switcher Pill -->
                <div
                    class="relative flex h-[36px] items-center rounded-full border border-black/10 bg-white pr-1 pl-1.5"
                >
                    <div class="flex items-center pr-1">
                        <img
                            :src="globeIcon"
                            class="h-[26px] w-[26px]"
                            alt=""
                        />
                    </div>
                    <div class="flex">
                        <button
                            v-for="lang in ['en', 'nl'] as const"
                            :key="lang"
                            @click="switchLanguage(lang)"
                            class="flex h-[26px] w-[32px] items-center justify-center text-[14px] font-medium uppercase transition-all duration-150"
                            :class="
                                locale === lang
                                    ? 'rounded-full bg-[rgba(213,226,255,0.31)] text-[#1D4FBC]'
                                    : 'rounded text-black hover:bg-black/5'
                            "
                        >
                            {{ lang }}
                        </button>
                    </div>
                </div>

                <!-- Dark Mode Toggle -->
                <button
                    @click="toggleDarkMode"
                    class="group relative flex h-8 w-8 items-center justify-center rounded-full transition-all hover:bg-gray-100 xl:h-9 xl:w-9"
                    :title="t('common.darkMode')"
                >
                    <img
                        :src="moonIcon"
                        class="h-5 w-5 transition-transform group-hover:rotate-12 xl:h-6 xl:w-6"
                        alt=""
                    />
                </button>

                <!-- Branded Primary CTA -->
                <AppButton
                    variant="primary"
                    tag="Link"
                    href="/contact"
                    class="!h-[48px] !w-[159px] !rounded-[6px] !bg-[#0B1F3F] !px-5 transition-all duration-200 hover:!-translate-y-px hover:!bg-[#1a3358] hover:!shadow-[0_6px_20px_rgba(11,31,58,0.28)] focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-[#C9A84C] active:!translate-y-0 active:!bg-[#081629]"
                >
                    <span
                        class="text-[16px] leading-[16px] font-semibold text-[#9ABAFF]"
                    >
                        {{ t('nav.getStarted') }}
                    </span>
                </AppButton>
            </div>

            <!-- MOBILE MENU TRIGGER -->
            <button
                class="flex h-10 w-10 items-center justify-center rounded-lg text-[#0B1F3F] transition-colors hover:bg-black/5 lg:hidden"
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
                class="fixed inset-x-0 top-[64px] z-[90] h-[calc(100vh-64px)] w-full overflow-y-auto bg-white lg:hidden"
            >
                <div class="flex flex-col p-6 pt-8 pb-12">
                    <!-- Nav Links Stack -->
                    <nav class="flex flex-col divide-y divide-black/5">
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
                                        : 'text-[#0B1F3F] group-active:text-[#C9A84C]'
                                "
                            >
                                {{ link.name }}
                            </span>
                            <ChevronDown
                                class="h-5 w-5 -rotate-90 text-black/20"
                            />
                        </Link>
                    </nav>

                    <!-- Bottom Branded Area -->
                    <div class="mt-10 space-y-8 rounded-2xl bg-gray-50/80 p-6">
                        <!-- Language Switcher -->
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-3">
                                <img
                                    :src="globeIcon"
                                    class="h-5 w-5 opacity-60"
                                    alt=""
                                />
                                <span
                                    class="text-[15px] font-medium text-black/60"
                                    >{{ t('common.language') }}</span
                                >
                            </div>
                            <div
                                class="flex rounded-full border border-black/10 bg-white p-1"
                            >
                                <button
                                    v-for="lang in ['en', 'nl'] as const"
                                    :key="lang"
                                    @click="switchLanguage(lang)"
                                    class="flex h-[28px] w-[40px] items-center justify-center rounded-full text-[13px] font-bold uppercase transition-all"
                                    :class="
                                        locale === lang
                                            ? 'bg-[#D5E2FF] text-[#1D4FBC]'
                                            : 'text-black/50'
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
                                class="!h-[56px] w-full !rounded-[12px] !bg-[#0B1F3F] !text-[16px] !font-bold"
                                @click="closeAllMobile"
                            >
                                <span class="text-[#9ABAFF]">{{
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
