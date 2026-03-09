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
  'btn',
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
    
    <slot />
    
    <span v-if="$slots['icon-right']" class="btn-icon-right ml-2">
      <slot name="icon-right" />
    </span>
  </component>
</template>

<style scoped>
/* No additional CSS needed as per requirements */
</style>
