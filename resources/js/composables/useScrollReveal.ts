import { onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealOptions {
    delay?: number;
    duration?: number;
    y?: number;
    once?: boolean;
}

/**
 * Side-effect composable that animates an element into view using GSAP + ScrollTrigger.
 * Kills the ScrollTrigger instance on unmount to prevent memory leaks.
 */
export function useScrollReveal(
    target: Ref<HTMLElement | null>,
    options: ScrollRevealOptions = {},
): void {
    const {
        delay = 0,
        duration = 0.8,
        y = 40,
        once = true,
    } = options;

    let scrollTriggerInstance: ScrollTrigger | undefined;

    onMounted(() => {
        if (!target.value) return;

        gsap.fromTo(
            target.value,
            { opacity: 0, y },
            {
                opacity: 1,
                y: 0,
                duration,
                delay,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: target.value,
                    start: 'top 85%',
                    once,
                    onToggle: (self) => {
                        scrollTriggerInstance = self;
                    },
                },
            },
        );
    });

    onUnmounted(() => {
        scrollTriggerInstance?.kill();
    });
}
