<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Twitter, Facebook } from 'lucide-vue-next';

const footerSections = [
  {
    title: 'Company',
    width: '128px',
    links: [
      { name: 'About Acendae', path: '/about' },
      { name: 'Life @ Acendae', path: '/life' },
      { name: 'Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
    ],
  },
  {
    title: 'Services',
    width: '153px',
    links: [
      { name: 'Development Unit', path: '/services/development' },
      { name: 'Engineering Unit', path: '/services/engineering' },
      { name: 'Team Outsourcing', path: '/services/outsourcing' },
      { name: 'Experience Unit', path: '/services/experience' },
    ],
  },
  {
    title: 'Resources',
    width: '119px',
    links: [
      { name: 'Our Process', path: '/process' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'FAQs', path: '/faqs' },
    ],
  },
  {
    title: 'Contact',
    width: '109px',
    links: [
      { name: 'Get in Touch', path: '/contact' },
      { name: 'Partnerships', path: '/partnerships' },
      { name: 'Support', path: '/support' },
    ],
  },
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms & Conditions', path: '/terms-and-conditions' },
  { name: 'Manage Cookies', path: '/cookies' },
];
</script>

<template>
  <footer class="section-dark w-full bg-[#070F1C] font-mona text-white pt-[100px] pb-10 overflow-hidden">
    <div class="acendae-container-wide flex flex-col items-center">
      
      <!-- Section 1: 4-Column Link Grid -->
      <div class="flex flex-row justify-between w-full max-w-[1103px] gap-[198px] mb-[150px]">
        <div 
          v-for="section in footerSections" 
          :key="section.title"
          :style="{ width: section.width }"
          class="flex flex-col flex-shrink-0"
        >
          <h4 class="text-[20px] font-medium text-white mb-[24px]">
            {{ section.title }}
          </h4>
          <ul class="flex flex-col gap-2">
            <li v-for="link in section.links" :key="link.path">
              <Link 
                :href="link.path"
                class="text-[16px] font-normal leading-[1.4] text-white/70 hover:text-white transition-colors"
              >
                {{ link.name }}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Section 2: Social Icons Row -->
      <div class="flex items-center w-full max-w-[1264px] mb-[64px]">
        <div class="flex-grow h-[1px] bg-white/30"></div>
        <div class="flex items-center gap-[28px] mx-[28px]">
          <!-- Instagram -->
          <a href="#" class="text-white hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-instagram.svg" alt="Instagram" class="w-6 h-6" />
          </a>
          <!-- LinkedIn -->
          <a href="#" class="text-white hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
          </a>
          <!-- TikTok -->
          <a href="#" class="text-white hover:text-gold transition-all group">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.6 8.6 0 01-1.87-1.44v6.86a8.4 8.4 0 01-1.12 4.13c-1.11 2-3.13 3.49-5.38 3.73a8.4 8.4 0 01-3.66-.46c-2.43-.88-4.21-3.26-4.21-5.91 0-1.83.75-3.56 2.05-4.7s3.15-1.58 4.96-1.52c.04 0 .04 0 .04.02v4.03c-1.11-.08-2.26.11-3.23.68a4.4 4.4 0 00-1.78 6.13c1.07 1.83 3.65 2.37 5.41 1.15.8-.57 1.34-1.49 1.45-2.48.06-2.24.04-4.48.05-6.72V-.02z"/>
            </svg>
          </a>
          <!-- X/Twitter -->
          <a href="#" class="text-white hover:text-gold transition-all group">
            <Twitter class="w-6 h-6" />
          </a>
          <!-- Facebook -->
          <a href="#" class="text-white hover:text-gold transition-all group">
            <Facebook class="w-6 h-6" />
          </a>
        </div>
        <div class="flex-grow h-[1px] bg-white/30"></div>
      </div>

      <!-- Section 3: Logo -->
      <Link href="/" class="mb-12">
        <img 
          src="/resources/assets/images/logo-light.svg" 
          alt="Acendae" 
          class="w-[217px] h-[75px] object-contain"
        />
      </Link>

      <!-- Section 4: Copyright + Legal -->
      <div class="flex flex-col items-center gap-[64px]">
        <p class="text-[20px] font-normal text-white">
          Copyright &copy; 2026 Acendae
        </p>

        <div class="flex flex-row items-center gap-[64px]">
          <Link 
            v-for="link in legalLinks" 
            :key="link.path"
            :href="link.path"
            class="text-[16px] font-normal text-white hover:opacity-70 transition-opacity"
          >
            {{ link.name }}
          </Link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.font-mona {
  font-family: 'Mona Sans', sans-serif;
}
</style>
