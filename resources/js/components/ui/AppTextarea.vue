<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  modelValue?: string | number;
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  rows?: number;
  resize?: 'none' | 'vertical' | 'both';
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  disabled: false,
  required: false,
  rows: 4,
  resize: 'vertical',
});

const emit = defineEmits(['update:modelValue']);

const inputId = computed(() => props.id || props.label?.toLowerCase().replace(/\s+/g, '-'));

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
};

const resizeClasses = {
  none: 'resize-none',
  vertical: 'resize-y',
  both: 'resize',
};
</script>

<template>
  <div class="app-textarea-wrapper w-full">
    <label 
      v-if="label" 
      :for="inputId" 
      class="block mb-2 text-sm font-semibold text-navy"
    >
      {{ label }}
      <span v-if="required" class="text-gold" aria-hidden="true">*</span>
    </label>
    
    <div class="relative">
      <textarea
        :id="inputId"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :rows="rows"
        class="w-full px-4 py-3 rounded-lg border text-sm font-medium transition-all duration-250 outline-none
               bg-white text-navy placeholder:text-navy/40"
        :class="[
          error 
            ? 'border-red-500 focus-visible:border-red-500' 
            : 'border-navy/15 focus-visible:border-gold',
          disabled 
            ? 'opacity-50 cursor-not-allowed' 
            : 'focus-visible:ring-0',
          resizeClasses[props.resize]
        ]"
        @input="handleInput"
      />
    </div>
    
    <Transition name="fade">
      <p v-if="error" class="mt-1.5 text-xs text-red-500 font-medium ml-1">
        {{ error }}
      </p>
    </Transition>
  </div>
</template>

<style scoped>
/* Focus visible states handled by Tailwind classes */
</style>
