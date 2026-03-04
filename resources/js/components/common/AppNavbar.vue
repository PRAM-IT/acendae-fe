<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import AppButton from '../ui/AppButton.vue';
import AppMegaMenu from './AppMegaMenu.vue';
import AppLanguageSwitcher from './AppLanguageSwitcher.vue';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-vue-next';

const page = usePage();
const isScrolled = ref(false);
const scrollDirection = ref<'up' | 'down' | null>(null);
const isMobileMenuOpen = ref(false);
const isMegaMenuOpen = ref(false);
let lastScrollY = typeof window !== 'undefined' ? window.pageYOffset : 0;

const updateScroll = () => {
  const scrollY = window.pageYOffset;
  
  // Scrolled state for background
  isScrolled.value = scrollY > 20;

  // Scroll direction for hide/show navbar
  if (scrollY > lastScrollY && scrollY > 80) {
    scrollDirection.value = 'down';
  } else if (scrollY < lastScrollY) {
    scrollDirection.value = 'up';
  }
  
  if (scrollY <= 0) scrollDirection.value = null;
  lastScrollY = scrollY > 0 ? scrollY : 0;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll);
});

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'Life @ Acendae', path: '/life' },
];

const isActive = (path: string) => {
  const currentPath = page.url;
  if (path === '/' && currentPath === '/') return true;
  if (path !== '/' && currentPath.startsWith(path)) return true;
  return false;
};

// Dark mode logic (placeholder)
const isDark = ref(false);
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark');
};

const navbarClasses = computed(() => [
  'fixed top-0 left-0 w-full z-[var(--z-navbar)] transition-all duration-300 bg-white h-[72px] lg:h-[72px] h-[64px]',
  {
    '-translate-y-full': scrollDirection.value === 'down' && !isMobileMenuOpen.value,
    'shadow-sm': isScrolled.value,
  }
]);
</script>

<template>
  <header :class="navbarClasses">
    <div class="acendae-container h-full flex items-center justify-between">
      <!-- Left: Logo -->
      <Link href="/" class="flex items-center">
        <span class="acendae-logo text-navy font-bold text-xl tracking-tight">Acendae</span>
      </Link>

      <!-- Center: Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-x-8 h-full">
        <Link 
          v-for="link in navLinks.slice(0, 1)" 
          :key="link.path"
          :href="link.path"
          class="acendae-nav relative h-full flex items-center"
          :class="{ 'text-gold': isActive(link.path) }"
        >
          {{ link.name }}
          <span v-if="isActive(link.path)" class="absolute bottom-6 left-0 w-full h-0.5 bg-gold"></span>
        </Link>
        
        <!-- Service with MegaMenu -->
        <div 
          class="h-full flex items-center relative"
          @mouseenter="isMegaMenuOpen = true"
          @mouseleave="isMegaMenuOpen = false"
        >
          <button 
            class="acendae-nav cursor-pointer flex items-center gap-1"
            :class="{ 'text-gold': isMegaMenuOpen }"
          >
            Service
            <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isMegaMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <AppMegaMenu v-model="isMegaMenuOpen" @close="isMegaMenuOpen = false" />
        </div>

        <Link 
          v-for="link in navLinks.slice(1)" 
          :key="link.path"
          :href="link.path"
          class="acendae-nav relative h-full flex items-center"
          :class="{ 'text-gold': isActive(link.path) }"
        >
          {{ link.name }}
          <span v-if="isActive(link.path)" class="absolute bottom-6 left-0 w-full h-0.5 bg-gold"></span>
        </Link>
      </nav>

      <!-- Right: Desktop Actions -->
      <div class="hidden lg:flex items-center gap-6">
        <AppLanguageSwitcher />
        
        <button @click="toggleDarkMode" class="text-navy hover:text-gold transition-colors">
          <MoonIcon v-if="!isDark" class="w-5 h-5" />
          <SunIcon v-else class="w-5 h-5" />
        </button>
        
        <AppButton variant="primary" size="sm" tag="Link" href="/contact" class="group">
          Get in Touch
          <span class="pulse-dot ml-2"></span>
        </AppButton>
      </div>

      <!-- Mobile Toggle -->
      <button 
        class="lg:hidden text-navy p-2"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <MenuIcon v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <XIcon v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden absolute top-[64px] left-0 w-full bg-white shadow-lg border-t border-navy/5 px-6 py-8 h-[calc(100vh-64px)] overflow-y-auto"
      >
        <div class="flex flex-col gap-6">
          <Link 
            v-for="link in navLinks" 
            :key="link.path"
            :href="link.path"
            class="text-lg font-semibold text-navy hover:text-gold"
            @click="isMobileMenuOpen = false"
          >
            {{ link.name }}
          </Link>
          
          <div class="py-4 border-t border-navy/5 flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <span class="text-navy/60 font-medium">Language</span>
              <AppLanguageSwitcher />
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-navy/60 font-medium">Appearance</span>
              <button @click="toggleDarkMode" class="flex items-center gap-2 text-navy">
                <MoonIcon v-if="!isDark" class="w-5 h-5" />
                <SunIcon v-else class="w-5 h-5" />
                {{ isDark ? 'Light Mode' : 'Dark Mode' }}
              </button>
            </div>
          </div>
          
          <AppButton 
            variant="primary" 
            tag="Link" 
            href="/contact" 
            class="w-full"
            @click="isMobileMenuOpen = false"
          >
            Get in Touch
            <span class="pulse-dot ml-2"></span>
          </AppButton>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.acendae-nav {
  @apply font-semibold;
}
</style>
