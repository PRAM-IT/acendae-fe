<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Menu, X } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import AppButton from '@/components/ui/AppButton.vue';
import AppMegaMenu from '@/components/common/AppMegaMenu.vue';
import { usePreferencesStore } from '@/stores/preferences';
import logoDark from '@assets/images/logo-dark.svg';
import globeIcon from '@assets/images/globe.svg';
import moonIcon from '@assets/images/moon.svg';

const page = usePage();
const { t, locale } = useI18n();
const preferences = usePreferencesStore();

const isScrolled = ref(false);
const isVisible = ref(true);
const isMobileMenuOpen = ref(false);
const isMegaMenuOpen = ref(false);
let lastScrollY = typeof window !== 'undefined' ? window.pageYOffset : 0;

const updateScroll = () => {
  const scrollY = window.pageYOffset;
  
  // Background shadow/scrolled state
  isScrolled.value = scrollY > 20;

  // Scroll visibility (hide/show)
  if (scrollY > lastScrollY && scrollY > 80) {
    isVisible.value = false;
  } else if (scrollY < lastScrollY) {
    isVisible.value = true;
  }
  
  lastScrollY = scrollY > 0 ? scrollY : 0;
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
  'fixed top-0 left-0 w-full z-[var(--z-navbar)] transition-transform duration-300 bg-white border-b border-black/5',
  isVisible.value ? 'translate-y-0' : '-translate-y-full',
  isScrolled.value ? 'shadow-md' : 'shadow-none',
]);
</script>

<template>
  <header :class="navbarClasses" class="h-[64px] lg:h-[74px] flex items-center bg-white font-mona">
    <div class="relative w-full max-w-[1440px] mx-auto h-full flex items-center">
      
      <!-- Logo (Left: 85px) -->
      <Link href="/" class="absolute left-6 lg:left-[85px] top-1/2 -translate-y-[calc(50%+4.49px)]">
        <img 
          :src="logoDark" 
          :alt="t('common.logoAlt') || 'Acendae'" 
          class="w-[134px] h-[49px] object-contain"
          onerror="this.src='/images/logo-dark.svg'"
        />
      </Link>

      <!-- Nav Links (Center/Left-ish Cluster) -->
      <nav class="hidden lg:flex items-center absolute left-[calc(50%-455px/2-100px)] h-20 gap-[36px]">
        <!-- Service Mega Menu Toggle -->
        <div 
          class="relative h-full flex items-center"
          @mouseenter="isMegaMenuOpen = true"
          @mouseleave="isMegaMenuOpen = false"
        >
          <button 
            class="text-[16px] font-medium transition-colors cursor-pointer"
            :class="isMegaMenuOpen ? 'text-[#0B1F3F]' : 'text-black/85 hover:text-[#0B1F3F]'"
          >
            {{ t('nav.services') }}
          </button>
          
          <AppMegaMenu :open="isMegaMenuOpen" @close="isMegaMenuOpen = false" />
        </div>

        <!-- Dynamic Links -->
        <Link 
          v-for="link in navLinks" 
          :key="link.path"
          :href="link.path"
          class="text-[16px] font-medium transition-colors relative text-center"
          :class="isActive(link.path) || link.path === '/life' ? 'text-[#0B1F3F]' : 'text-black/85 hover:text-[#0B1F3F]'"
        >
          {{ link.name }}
          <span v-if="isActive(link.path)" class="absolute -bottom-1 left-0 w-full h-[2px] bg-gold"></span>
        </Link>
      </nav>

      <!-- Right Cluster -->
      <div class="hidden lg:flex items-center absolute left-[996px] h-[52px] gap-[40px] w-[356px]">
        
        <!-- Language Switcher -->
        <div class="flex items-center gap-[20px] w-[157px] h-[36px]">
          <div class="relative w-[109px] h-[36px] bg-white border border-black/10 rounded-full">
            <img :src="globeIcon" class="absolute left-[5px] top-[5px] w-[26px] h-[26px]" :alt="t('common.language') || 'Globe'" />
            
            <button 
              @click="switchLanguage('en')"
              class="absolute left-[37px] top-[5px] w-[32px] h-[26px] flex items-center justify-center text-[14px] font-medium transition-all rounded-full"
              :class="locale === 'en' ? 'bg-[#D5E2FF4F] text-[#1D4FBC]' : 'text-black'"
            >
              {{ t('common.en') }}
            </button>
            <button 
              @click="switchLanguage('nl')"
              class="absolute left-[73px] top-[5px] w-[32px] h-[26px] flex items-center justify-center text-[14px] font-medium transition-all rounded-full"
              :class="locale === 'nl' ? 'bg-[#D5E2FF4F] text-[#1D4FBC]' : 'text-black'"
            >
              {{ t('common.nl') }}
            </button>
          </div>
        </div>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="w-7 h-7 flex items-center justify-center transition-transform hover:scale-105">
          <img :src="moonIcon" :alt="t('common.darkMode') || 'Dark Mode'" class="w-7 h-7" />
        </button>

        <!-- CTA Button -->
        <AppButton 
          variant="primary" 
          tag="Link" 
          href="/contact" 
          class="!w-[159px] !h-[48px] !bg-[#0B1F3F] !rounded-[6px] hover:!opacity-90"
        >
          <span class="text-[#9ABAFF] font-semibold text-[16px]">{{ t('nav.getStarted') }}</span>
        </AppButton>
      </div>

      <!-- Mobile Toggle -->
      <button 
        class="lg:hidden absolute right-6 text-[#0B1F3F] p-2"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-label="isMobileMenuOpen ? t('nav.closeMenu') || 'Close menu' : t('nav.openMenu') || 'Open menu'"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg border-t border-black/5 h-[calc(100vh-64px)] overflow-y-auto px-6 py-8"
      >
        <nav class="flex flex-col gap-2">
          <Link 
            :href="'/services'"
            class="h-[48px] flex items-center text-[18px] font-semibold text-[#0B1F3F]"
            @click="isMobileMenuOpen = false"
          >
            {{ t('nav.services') }}
          </Link>
          <Link 
            v-for="link in navLinks" 
            :key="link.path"
            :href="link.path"
            class="h-[48px] flex items-center text-[18px] font-semibold text-[#0B1F3F]"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </Link>
          
          <div class="mt-8 border-t border-black/5 pt-8 flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <span class="text-black/50 font-medium">{{ t('common.language') || 'Language' }}</span>
              <div class="flex items-center gap-4">
                <button @click="switchLanguage('en')" :class="locale === 'en' ? 'text-[#1D4FBC] font-bold' : 'text-black'">{{ t('common.en') }}</button>
                <button @click="switchLanguage('nl')" :class="locale === 'nl' ? 'text-[#1D4FBC] font-bold' : 'text-black'">{{ t('common.nl') }}</button>
              </div>
            </div>
            
            <AppButton 
              variant="primary" 
              tag="Link" 
              href="/contact" 
              class="w-full !h-[52px] !bg-[#0B1F3F] !rounded-[6px]"
              @click="isMobileMenuOpen = false"
            >
              <span class="text-[#9ABAFF] font-semibold text-[16px]">{{ t('nav.getStarted') }}</span>
            </AppButton>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.font-mona {
  font-family: 'Mona Sans', sans-serif;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
