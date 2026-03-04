<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { Twitter, Facebook } from 'lucide-vue-next';

// Re-using footer sections from earlier, but with updated values to match Figma CSS gaps
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
  <footer class="relative w-full h-[661px] bg-[#070F1C] font-mona text-white overflow-hidden overflow-y-auto">
    <div class="acendae-container-wide relative w-[1440px] h-full mx-auto">
      
      <!-- Frame 1000003325: Link Grid -->
      <div class="absolute top-[100px] left-1/2 -translate-x-1/2 flex flex-row gap-[198px] w-[1103px] h-[164px]">
        <div 
          v-for="section in footerSections" 
          :key="section.title"
          :style="{ width: section.width }"
          class="flex flex-col gap-[24px]"
        >
          <h4 class="text-[20px] font-medium leading-[24px] text-white">
            {{ section.title }}
          </h4>
          <ul class="flex flex-col gap-[8px]">
            <li v-for="link in section.links" :key="link.path" class="h-[23px]">
              <Link 
                :href="link.path"
                class="text-[16px] font-normal leading-[23px] text-white hover:opacity-70 transition-opacity whitespace-nowrap"
              >
                {{ link.name }}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Frame 1000003324: Social row (Top: 350px) -->
      <div class="absolute top-[350px] left-1/2 -translate-x-1/2 flex items-center w-[1264px] h-[24px] gap-[29px]">
        <div class="w-[489px] h-[0px] border border-white/30"></div>
        
        <div class="flex flex-row items-center gap-[28px] w-[220px] justify-center text-white">
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-instagram.svg" alt="Instagram" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-tiktok.svg" alt="TikTok" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-twitter.svg" alt="X" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-facebook.svg" alt="Facebook" class="w-6 h-6" />
          </a>
        </div>

        <div class="w-[497px] h-[0px] border border-white/30"></div>
      </div>

      <!-- Logo Frame (Top: 414px) -->
      <div class="absolute top-[414px] left-1/2 -translate-x-1/2 w-[217px] h-[75px]">
        <Link href="/">
          <img src="/resources/assets/images/logo-light.svg" alt="Acendae" class="w-full h-full object-contain" />
        </Link>
      </div>

      <!-- Footer Bottom Frame 1000003383 (Top: 529px) -->
      <div class="absolute top-[529px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[32px] w-[507px]">
        <!-- Copyright -->
        <div class="w-full text-center h-[28px]">
           <p class="text-[20px] font-normal leading-[28px] text-white">
             Copyright &copy; 2026 Acendae
           </p>
        </div>

        <!-- Legal links -->
        <div class="flex flex-row gap-[64px] items-start w-full justify-center h-[23px]">
          <Link 
            v-for="link in legalLinks" 
            :key="link.name"
            :href="link.path"
            class="text-[16px] font-normal leading-[23px] text-white hover:opacity-70 transition-opacity whitespace-nowrap"
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
