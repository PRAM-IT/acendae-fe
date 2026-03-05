<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const footerSections = computed(() => [
  {
    title: t('footer.columns.company'),
    width: '128px',
    links: [
      { name: t('footer.company.aboutAcendae'), path: '/about' },
      { name: t('footer.company.lifeAtAcendae'), path: '/life' },
      { name: t('footer.company.team'), path: '/team' },
      { name: t('footer.company.careers'), path: '/careers' },
    ],
  },
  {
    title: t('footer.columns.services'),
    width: '153px',
    links: [
      { name: t('footer.services.developmentUnit'), path: '/services/development' },
      { name: t('footer.services.engineeringUnit'), path: '/services/engineering' },
      { name: t('footer.services.teamOutsourcing'), path: '/services/outsourcing' },
      { name: t('footer.services.experienceUnit'), path: '/services/experience' },
    ],
  },
  {
    title: t('footer.columns.resources'),
    width: '119px',
    links: [
      { name: t('footer.resources.ourProcess'), path: '/process' },
      { name: t('footer.resources.caseStudies'), path: '/case-studies' },
      { name: t('footer.resources.blog'), path: '/blog' },
      { name: t('footer.resources.faqs'), path: '/faqs' },
    ],
  },
  {
    title: t('footer.columns.contact'),
    width: '109px',
    links: [
      { name: t('footer.contact.getInTouch'), path: '/contact' },
      { name: t('footer.contact.partnerships'), path: '/partnerships' },
      { name: t('footer.contact.support'), path: '/support' },
    ],
  },
]);

const legalLinks = computed(() => [
  { name: t('footer.legal.privacy'), path: '/privacy-policy' },
  { name: t('footer.legal.terms'), path: '/terms-and-conditions' },
  { name: t('footer.legal.cookies'), path: '/cookies' },
]);
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
            <img src="/resources/assets/images/icon-instagram.svg" :alt="t('common.instagram') || 'Instagram'" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-linkedin.svg" :alt="t('common.linkedin') || 'LinkedIn'" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-tiktok.svg" :alt="t('common.tiktok') || 'TikTok'" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-twitter.svg" :alt="t('common.twitter') || 'X'" class="w-6 h-6" />
          </a>
          <a href="#" class="w-6 h-6 hover:text-gold transition-all group">
            <img src="/resources/assets/images/icon-facebook.svg" :alt="t('common.facebook') || 'Facebook'" class="w-6 h-6" />
          </a>
        </div>

        <div class="w-[497px] h-[0px] border border-white/30"></div>
      </div>

      <!-- Logo Frame (Top: 414px) -->
      <div class="absolute top-[414px] left-1/2 -translate-x-1/2 w-[217px] h-[75px]">
        <Link href="/">
          <img src="/resources/assets/images/logo-light.svg" :alt="t('common.logoAlt') || 'Acendae'" class="w-full h-full object-contain" />
        </Link>
      </div>

      <!-- Footer Bottom Frame 1000003383 (Top: 529px) -->
      <div class="absolute top-[529px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[32px] w-[507px]">
        <!-- Copyright -->
        <div class="w-full text-center h-[28px]">
           <p class="text-[20px] font-normal leading-[28px] text-white">
             {{ t('footer.copyright') }}
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
