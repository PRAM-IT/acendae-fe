<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  hover: true,
  padding: 'md',
});

const paddingClasses = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

const classes = computed(() => [
  'surface overflow-hidden',
  paddingClasses[props.padding],
  {
    'card-shadow': props.hover,
  },
]);
</script>

<template>
  <div :class="classes">
    <header v-if="$slots.header" class="mb-4">
      <slot name="header" />
    </header>
    
    <div class="card-content">
      <slot />
    </div>
    
    <footer v-if="$slots.footer" class="mt-4 pt-4 border-t border-navy/10">
      <slot name="footer" />
    </footer>
  </div>
</template>

<style scoped>
/* No additional CSS needed as per requirements */
</style>
