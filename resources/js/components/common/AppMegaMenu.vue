<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { ChevronRight } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import AppButton from '@/components/ui/AppButton.vue';

const { t } = useI18n();

interface Props {
  open?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
});

const emit = defineEmits(['close']);

const outsourceLinks = computed(() => [
  { name: t('megaMenu.outsource.links.softwareEng'), path: '/services/software-engineering' },
  { name: t('megaMenu.outsource.links.webDev'), path: '/services/web-development' },
  { name: t('megaMenu.outsource.links.saasDev'), path: '/services/saas-development' },
  { name: t('megaMenu.outsource.links.uxui'), path: '/services/ux-ui-design' },
]);

const teamLinks = computed(() => [
  { name: t('megaMenu.dedicated.links.hireWebDev'), path: '/hire/web-developers' },
  { name: t('megaMenu.dedicated.links.hireSoftwareEng'), path: '/hire/software-engineers' },
  { name: t('megaMenu.dedicated.links.hireUxui'), path: '/hire/ux-ui-designers' },
  { name: t('megaMenu.dedicated.links.fullTeams'), path: '/hire/dedicated-teams' },
]);

const handleClose = () => {
  emit('close');
};
</script>

<template>
  <Transition name="slide-down">
    <div 
      v-if="open" 
      class="absolute left-0 right-0 w-full bg-white shadow-navy-lg z-[90] overflow-hidden pt-[40px]"
      @mouseleave="handleClose"
    >
      <div class="acendae-container mx-auto grid grid-cols-2 gap-0">
        <!-- Left Column -->
        <div class="flex flex-col gap-6 pr-12 pb-12">
          <div class="mb-4">
            <h3 class="text-[18px] font-bold text-[#0B1F3F] mb-1">{{ t('megaMenu.outsource.title') }}</h3>
            <p class="text-[14px] text-black/50">{{ t('megaMenu.outsource.subtitle') }}</p>
          </div>
          
          <div class="flex flex-col gap-1">
            <Link 
              v-for="link in outsourceLinks" 
              :key="link.path"
              :href="link.path"
              class="group flex items-center justify-between p-[12px] px-[16px] rounded-lg transition-all border-l-2 border-transparent hover:border-[#C9A84C] hover:bg-[#C9A84C0F]"
              @click="handleClose"
            >
              <span class="text-[15px] font-medium text-[#0B1F3F] group-hover:text-[#C9A84C] transition-colors">
                {{ link.name }}
              </span>
              <ChevronRight class="w-4 h-4 text-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col gap-6 bg-[#F0F4F8] p-12 rounded-tl-2xl rounded-tr-2xl">
          <div class="mb-4">
            <h3 class="text-[18px] font-bold text-[#0B1F3F] mb-1">{{ t('megaMenu.dedicated.title') }}</h3>
            <p class="text-[14px] text-black/50">{{ t('megaMenu.dedicated.subtitle') }}</p>
          </div>
          
          <div class="flex flex-col gap-1">
            <Link 
              v-for="link in teamLinks" 
              :key="link.path"
              :href="link.path"
              class="group flex items-center justify-between p-[12px] px-[16px] rounded-lg transition-all border-l-2 border-transparent hover:border-[#0B1F3F] hover:bg-white/50"
              @click="handleClose"
            >
              <span class="text-[15px] font-medium text-[#0B1F3F] group-hover:text-[#0B1F3F]/80 transition-colors">
                {{ link.name }}
              </span>
              <ChevronRight class="w-4 h-4 text-[#0B1F3F] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="bg-[#0B1F3F] h-[60px] flex items-center justify-between px-4 sm:px-6 lg:px-[var(--container-padding)] w-full mt-auto">
        <i18n-t keypath="megaMenu.tagline" tag="p" class="text-[13px] sm:text-[15px] text-white/70 italic">
          <template #highlight>
            <strong class="text-white font-bold ml-1">{{ t('megaMenu.taglineHighlight') }}</strong>
          </template>
        </i18n-t>
        
        <AppButton 
          variant="outline" 
          tag="Link" 
          href="/contact" 
          class="!text-[14px] !font-medium !text-white !border-white/40 !rounded-[6px] !px-[24px] !py-[10px] hover:!bg-white/10"
          @click="handleClose"
        >
          {{ t('megaMenu.letsTalk') }}
        </AppButton>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.shadow-navy-lg {
  box-shadow: 0 10px 30px rgba(11, 31, 63, 0.15);
}
</style>
