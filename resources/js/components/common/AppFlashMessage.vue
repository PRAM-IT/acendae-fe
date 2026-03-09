<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { CheckCircle2Icon, XCircleIcon, XIcon } from 'lucide-vue-next';

interface Props {
  message?: string;
  variant?: 'success' | 'error';
  duration?: number;
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  message: '',
  variant: 'success',
  duration: 4000,
  modelValue: false,
});

const emit = defineEmits(['update:modelValue', 'close']);

let timer: ReturnType<typeof setTimeout> | null = null;
const progressRef = ref<HTMLElement | null>(null);

const startTimer = () => {
  if (timer) clearTimeout(timer);
  if (!props.modelValue) return;

  timer = setTimeout(() => {
    close();
  }, props.duration);
};

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

watch(() => props.modelValue, (val) => {
  if (val) startTimer();
});

watch(() => props.message, () => {
  if (props.modelValue) startTimer();
});

onMounted(() => {
  if (props.modelValue) startTimer();
});

onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-up">
      <div 
        v-if="modelValue" 
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
          aria-label="Close message"
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
