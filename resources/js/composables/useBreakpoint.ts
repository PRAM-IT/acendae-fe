import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

/**
 * Reactive breakpoint composable based on @vueuse/core's useWindowSize.
 * Matches Tailwind's default breakpoints (sm=640, md=768, lg=1024).
 */
export function useBreakpoint() {
    const { width, height } = useWindowSize();

    const isMobile = computed(() => width.value < 768);
    const isTablet = computed(() => width.value >= 768 && width.value < 1024);
    const isDesktop = computed(() => width.value >= 1024);

    return {
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
    };
}
