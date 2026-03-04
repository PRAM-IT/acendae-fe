<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import AppButton from '../ui/AppButton.vue';
import { ChevronRightIcon } from 'lucide-vue-next';

interface Props {
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits(['update:modelValue', 'close']);

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

const outsourceLinks = [
  { name: 'Software Engineering', path: '/services/software-engineering' },
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'SaaS Development', path: '/services/saas-development' },
  { name: 'UX/UI Design', path: '/services/ux-ui-design' },
];

const teamLinks = [
  { name: 'Hire Web Developers', path: '/hire/web-developers' },
  { name: 'Hire Software Engineers', path: '/hire/software-engineers' },
  { name: 'Hire UX/UI Designers', path: '/hire/ux-ui-designers' },
  { name: 'Full Dedicated Teams', path: '/hire/dedicated-teams' },
];
</script>

<template>
  <Transition name="slide-down">
    <div 
      v-if="modelValue" 
      class="absolute top-[72px] left-0 w-full bg-white shadow-2xl z-[var(--z-dropdown)] overflow-hidden border-t border-navy/5"
      @mouseleave="close"
    >
      <div class="acendae-container py-12">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Left Column -->
          <div class="flex flex-col gap-6">
            <div class="border-l-4 border-gold pl-6">
              <h3 class="text-xl font-bold text-navy mb-2">Outsource a Project</h3>
              <p class="text-navy/60 text-sm">Structured delivery from strategy to launch.</p>
            </div>
            
            <div class="grid gap-2 pl-6">
              <Link 
                v-for="link in outsourceLinks" 
                :key="link.path"
                :href="link.path"
                class="group flex items-center justify-between p-3 rounded-lg hover:bg-gold/5 transition-colors border-l-2 border-transparent hover:border-gold"
                @click="close"
              >
                <span class="text-navy font-semibold group-hover:text-gold transition-colors">{{ link.name }}</span>
                <ChevronRightIcon class="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col gap-6 bg-[#F0F4F8] p-8 rounded-2xl">
            <div class="border-l-4 border-navy pl-6">
              <h3 class="text-xl font-bold text-navy mb-2">Build a Dedicated Team</h3>
              <p class="text-navy/60 text-sm">Long term embedded teams aligned with your company.</p>
            </div>
            
            <div class="grid gap-2 pl-6">
              <Link 
                v-for="link in teamLinks" 
                :key="link.path"
                :href="link.path"
                class="group flex items-center justify-between p-3 rounded-lg hover:bg-white/50 transition-colors border-l-2 border-transparent hover:border-navy"
                @click="close"
              >
                <span class="text-navy font-semibold group-hover:text-navy transition-colors">{{ link.name }}</span>
                <ChevronRightIcon class="w-4 h-4 text-navy opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="bg-navy py-6 text-white w-full overflow-hidden">
        <div class="acendae-container flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="italic text-sm text-white/80 opacity-90 text-center md:text-left">
            "Dutch strategy. Sri Lankan execution. One integrated team."
          </p>
          <AppButton 
            variant="outline-white" 
            tag="Link" 
            href="/contact" 
            class="scale-90"
            @click="close"
          >
            Let's Talk
          </AppButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* No additional CSS needed as per requirements */
</style>
