<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'gold' | 'navy';
  size?: 'sm' | 'md';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
});

const classes = computed(() => [
  'acendae-badge',
  props.variant !== 'default' ? `acendae-badge-${props.variant}` : '',
  {
    'text-xs px-2 py-0.5': props.size === 'sm',
    'text-sm px-2.5 py-1': props.size === 'md',
  },
]);
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<style scoped>
/* No additional CSS needed as per requirements */
</style>
