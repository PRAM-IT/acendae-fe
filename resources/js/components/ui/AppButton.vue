<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

interface Props {
  variant?: 'primary' | 'ghost' | 'outline' | 'outline-white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  tag?: 'button' | 'a' | 'Link';
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  loading: false,
  disabled: false,
  type: 'button',
});

const emit = defineEmits(['click']);

const classes = computed(() => [
  'btn transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c]',
  props.variant === 'primary' ? 'bg-[#0B1F3F] hover:bg-[#1a3358] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(11,31,58,0.28)] active:bg-[#081629] active:translate-y-0 text-white' : '',
  props.variant === 'outline' ? 'group border border-[#0B1F3F] bg-transparent hover:bg-[#0b1f3a] hover:border-[#0b1f3a] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(11,31,58,0.2)] active:bg-[#081629] active:translate-y-0' : '',
  `btn-${props.variant}`,
  props.size !== 'md' ? `btn-${props.size}` : '',
  {
    'is-loading': props.loading,
    'opacity-50 pointer-events-none': props.disabled || props.loading,
  },
]);

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
</script>

<template>
  <component
    :is="tag === 'Link' ? Link : tag"
    :type="tag === 'button' ? type : undefined"
    :href="tag === 'button' ? undefined : href"
    :class="classes"
    :disabled="disabled || loading ? true : undefined"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner mr-2" aria-hidden="true"></span>
    
    <span v-if="$slots['icon-left']" class="btn-icon-left">
      <slot name="icon-left" />
    </span>
    
    <span :class="{ 'group-hover:text-white': variant === 'outline' }">
        <slot />
    </span>
    
    <span v-if="$slots['icon-right']" class="btn-icon-right ml-2">
      <slot name="icon-right" />
    </span>
  </component>
</template>

<style scoped>
/* No additional CSS needed as per requirements */
</style>
