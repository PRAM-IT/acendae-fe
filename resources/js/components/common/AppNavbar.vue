<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Globe2, Menu, X, Moon } from 'lucide-vue-next';
import AppButton from '@/components/ui/AppButton.vue';
import AppMegaMenu from '@/components/common/AppMegaMenu.vue';
import { usePreferencesStore } from '@/stores/preferences';

const page = usePage();
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

const navLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'Life @ Acendae', path: '/life' },
];

const isActive = (path: string) => {
  return page.url === path || page.url.startsWith(path + '/');
};

const switchLanguage = (lang: 'en' | 'nl') => {
  preferences.setLang(lang);
};

const toggleDarkMode = () => {
  preferences.toggleDarkMode();
  document.documentElement.classList.toggle('dark');
};

const navbarClasses = computed(() => [
  'fixed top-0 left-0 w-full z-[var(--z-navbar)] transition-transform duration-300 bg-white shadow-sm border-b border-navy/5',
  isVisible.value ? 'translate-y-0' : '-translate-y-full',
  isScrolled.value ? 'shadow-md' : 'shadow-none',
]);
</script>

<template>
  <header :class="navbarClasses" class="h-[64px] lg:h-[74px] flex items-center bg-white font-mona font-medium">
    <div class="acendae-container-wide w-full flex items-center justify-between px-6 lg:px-[85px]">
      
      <!-- Logo -->
      <Link href="/" class="flex-shrink-0">
        <img 
          src="/resources/assets/images/logo-dark.svg" 
          alt="Acendae" 
          class="w-[134px] h-[49px] object-contain"
        />
      </Link>

      <!-- Center Links (Desktop) -->
      <nav class="hidden lg:flex items-center gap-[36px]">
        <div 
          class="relative h-full flex items-center"
          @mouseenter="isMegaMenuOpen = true"
          @mouseleave="isMegaMenuOpen = false"
        >
          <button 
            class="text-[16px] text-black/85 hover:text-[#0B1F3F] transition-colors cursor-pointer"
            :class="{ 'text-[#0B1F3F] font-semibold': isMegaMenuOpen }"
          >
            Service
          </button>
          
          <AppMegaMenu v-model="isMegaMenuOpen" @close="isMegaMenuOpen = false" />
        </div>

        <Link 
          v-for="link in navLinks" 
          :key="link.path"
          :href="link.path"
          class="text-[16px] transition-colors relative"
          :class="isActive(link.path) ? 'text-[#0B1F3F] font-semibold' : 'text-black/85 hover:text-[#0B1F3F]'"
        >
          {{ link.name }}
          <span v-if="isActive(link.path)" class="absolute -bottom-1 left-0 w-full h-[2px] bg-gold"></span>
        </Link>
      </nav>

      <!-- Right Cluster -->
      <div class="hidden lg:flex items-center gap-[40px]">
        <!-- Language Switcher -->
        <div class="flex items-center gap-2">
          <Globe2 class="w-4 h-4 text-black/40" />
          <div class="flex items-center w-[109px] h-[36px] bg-white border border-black/10 rounded-full p-1 shadow-sm">
            <button 
              @click="switchLanguage('en')"
              class="flex-1 text-[14px] leading-none transition-all rounded-full h-full"
              :class="preferences.lang === 'en' ? 'bg-[#D5E2FF4F] text-[#1D4FBC] font-medium' : 'text-black font-medium'"
            >
              EN
            </button>
            <button 
              @click="switchLanguage('nl')"
              class="flex-1 text-[14px] leading-none transition-all rounded-full h-full"
              :class="preferences.lang === 'nl' ? 'bg-[#D5E2FF4F] text-[#1D4FBC] font-medium' : 'text-black font-medium'"
            >
              NL
            </button>
          </div>
        </div>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="text-navy transition-transform hover:scale-105">
          <img src="/resources/assets/images/icon-moon.svg" alt="Dark Mode" class="w-[28px] h-[28px]" />
        </button>

        <!-- CTA Button -->
        <AppButton 
          variant="primary" 
          tag="Link" 
          href="/contact" 
          class="!bg-[#0B1F3F] !rounded-[6px] !px-[20px] !py-[10px] !gap-[12px] group"
        >
          <div class="flex items-center bg-[#00A67E2B] rounded-full p-[6px]">
            <span class="w-2 h-2 bg-[#0A5E4A] rounded-full"></span>
            <span class="pulse-dot absolute w-2 h-2 bg-[#0A5E4A] rounded-full"></span>
          </div>
          <span class="text-[#9ABAFF] font-semibold text-[16px]">Get Started</span>
        </AppButton>
      </div>

      <!-- Mobile Toggle -->
      <button 
        class="lg:hidden text-navy p-2"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Drawer -->
    <Transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg border-t border-navy/5 h-[calc(100vh-64px)] overflow-y-auto px-6 py-8"
      >
        <nav class="flex flex-col gap-2">
          <Link 
            v-for="link in [{ name: 'Service', path: '/services' }, ...navLinks]" 
            :key="link.path"
            :href="link.path"
            class="h-[48px] flex items-center text-[18px] font-semibold text-[#0B1F3F]"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </Link>
          
          <div class="mt-8 border-t border-navy/5 pt-8 flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <span class="text-black/50 font-medium">Language</span>
              <div class="flex items-center gap-4">
                <button @click="switchLanguage('en')" :class="preferences.lang === 'en' ? 'text-[#1D4FBC] font-bold' : 'text-black'">EN</button>
                <button @click="switchLanguage('nl')" :class="preferences.lang === 'nl' ? 'text-[#1D4FBC] font-bold' : 'text-black'">NL</button>
              </div>
            </div>
            
            <AppButton 
              variant="primary" 
              tag="Link" 
              href="/contact" 
              class="w-full !bg-[#0B1F3F] !rounded-[6px] !py-[14px]"
              @click="isMobileMenuOpen = false"
            >
              <span class="text-[#9ABAFF] font-semibold text-[16px]">Get Started</span>
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

/* Custom shadow/border overrides as per prompt */
.shadow-navy-lg {
  box-shadow: 0 10px 30px rgba(11, 31, 63, 0.15);
}

.pulse-dot {
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(0.9); opacity: 0.8; }
  50% { transform: scale(1.4); opacity: 0; }
  100% { transform: scale(0.9); opacity: 0.8; }
}
</style>
