<script setup lang="ts">
import { ref, watch, computed, onUnmounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { CheckCircle2Icon, XCircleIcon, XIcon } from 'lucide-vue-next';

const page = usePage();
const { t } = useI18n();

const message = computed(() => (page.props.flash as any)?.success || (page.props.flash as any)?.error || null);
const variant = computed(() => (page.props.flash as any)?.success ? 'success' : 'error');
const visible = ref(false);
const duration = 4000;
let timer: ReturnType<typeof setTimeout> | null = null;

const close = () => {
    visible.value = false;
};

watch(message, (newVal) => {
    if (newVal) {
        visible.value = true;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            close();
        }, duration);
    }
}, { immediate: true });

onUnmounted(() => {
    if (timer) clearTimeout(timer);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div 
        v-if="visible && message" 
        class="fixed bottom-8 right-8 z-[var(--z-toast)] flex items-center min-w-[320px] max-w-md p-4 rounded-xl shadow-[var(--shadow-md)] overflow-hidden"
        :class="variant === 'success' ? 'bg-[#4CAF89] text-white' : 'bg-[#E53E3E] text-white'"
      >
        <!-- Icon -->
        <div class="flex-shrink-0 mr-3">
          <CheckCircle2Icon v-if="variant === 'success'" class="w-6 h-6" />
          <XCircleIcon v-else class="w-6 h-6" />
        </div>

        <!-- Message -->
        <div class="flex-grow pr-6">
          <p class="text-sm font-semibold tracking-tight">{{ message }}</p>
        </div>

        <!-- Close Button -->
        <button 
          @click="close"
          class="flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity p-1"
          :aria-label="t('common.dismiss') || 'Dismiss'"
        >
          <XIcon class="w-4 h-4" />
        </button>

        <!-- Progress Bar -->
        <div 
          class="absolute bottom-0 left-0 h-1 bg-white/30"
          :style="{ 
            width: '100%',
            animation: `progress-drain ${duration}ms linear forwards` 
          }"
        ></div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@keyframes progress-drain {
  from { width: 100%; }
  to { width: 0%; }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%) scale(0.9);
  opacity: 0;
}
</style>
