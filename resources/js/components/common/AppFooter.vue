<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { 
  InstagramIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  FacebookIcon, 
  Music2Icon as TikTokIcon 
} from 'lucide-vue-next';

const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Acendae', path: '/about' },
      { name: 'Life @ Acendae', path: '/life' },
      { name: 'Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Development Unit', path: '/services/development' },
      { name: 'Engineering Unit', path: '/services/engineering' },
      { name: 'Team Outsourcing', path: '/services/outsourcing' },
      { name: 'Experience Unit', path: '/services/ux-design' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Our Process', path: '/process' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'FAQs', path: '/faqs' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: 'Get in Touch', path: '/contact' },
      { name: 'Partnerships', path: '/partnerships' },
      { name: 'Support', path: '/support' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/acendae' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/company/acendae' },
  { name: 'TikTok', icon: TikTokIcon, url: 'https://tiktok.com/@acendae' },
  { name: 'X', icon: TwitterIcon, url: 'https://x.com/acendae' },
  { name: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com/acendae' },
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  { name: 'Manage Cookies', path: '/cookies' },
];
</script>

<template>
  <footer class="section-dark pt-20 pb-10">
    <div class="acendae-container">
      <!-- Top Section: 4-Column Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 mb-20">
        <div v-for="section in footerSections" :key="section.title">
          <h4 class="text-gold uppercase tracking-widest text-xs font-bold mb-8 opacity-90">
            {{ section.title }}
          </h4>
          <ul class="space-y-4">
            <li v-for="link in section.links" :key="link.path">
              <Link 
                :href="link.path"
                class="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {{ link.name }}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Middle Section: Social Icons Row -->
      <div class="flex items-center justify-center gap-8 mb-16 py-8 border-y border-white/10">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white hover:text-gold transition-colors p-2"
          :aria-label="social.name"
        >
          <component :is="social.icon" class="w-5 h-5" />
        </a>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col items-center gap-10">
        <Link href="/" class="flex items-center justify-center mb-2">
          <span class="acendae-logo text-white font-bold text-2xl tracking-tight">Acendae</span>
        </Link>

        <p class="text-white/50 text-sm font-medium">
          Copyright &copy; 2026 Acendae. &nbsp; All rights reserved.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Link 
            v-for="link in legalLinks" 
            :key="link.path"
            :href="link.path"
            class="text-white/50 hover:text-white transition-colors text-xs font-medium"
          >
            {{ link.name }}
          </Link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* No additional CSS needed as per requirements */
</style>
