<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const progress = ref(0);
const hasStarted = ref(false);
const isAtSummit = ref(false);

const updateProgress = () => {
    const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

    const docHeight =
        Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
        ) - window.innerHeight;

    if (docHeight <= 0) {
        progress.value = 0;
        return;
    }

    const raw = scrollTop / docHeight;
    const clamped = Math.min(1, Math.max(0, raw));

    progress.value = clamped;
    hasStarted.value = clamped > 0.01;
    isAtSummit.value = clamped > 0.96;
};

onMounted(() => {
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateProgress);
    window.removeEventListener('resize', updateProgress);
});
</script>

<template>
    <!-- Fixed bottom-right "mountain summit" scroll indicator -->
    <div class="pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-end">
        <div
            class="pointer-events-auto mr-4 hidden items-center gap-3 rounded-2xl bg-white/95 px-3.5 py-2 shadow-[0_18px_45px_rgba(7,15,28,0.42)] ring-1 ring-navy/5 backdrop-blur-xl
            transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(7,15,28,0.6)]
            md:flex lg:mr-6
            dark:bg-[#050915]/95 dark:ring-white/5"
            :class="{
                'opacity-0 translate-y-3 scale-95': !hasStarted,
                'opacity-100 translate-y-0 scale-100': hasStarted,
            }"
            aria-hidden="true"
        >
            <!-- Mountain path -->
            <div
                class="relative h-14 w-12 overflow-hidden rounded-xl bg-gradient-to-t from-[#050915] via-[#0B1F3F] to-[#193B6A]
                shadow-[0_10px_30px_rgba(7,15,28,0.75)]"
            >
                <!-- Mountain silhouette -->
                <div
                    class="absolute inset-x-[-20%] bottom-[-6%] h-[120%] bg-[radial-gradient(circle_at_20%_100%,#293C5E_0,transparent_55%),radial-gradient(circle_at_80%_100%,#1D2E4C_0,transparent_55%),linear-gradient(to_top,#0C1424_0,#1D2A40_40%,transparent_75%)] opacity-90 mountain-glow"
                />

                <!-- Vertical climb track -->
                <div class="absolute inset-y-3 left-1/2 w-[2px] -translate-x-1/2 bg-white/10">
                    <div
                        class="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-[#FF8A00] via-[#FFB200] to-[#FFE07A] transition-all duration-200 ease-out"
                        :style="{ height: `${Math.max(8, progress * 100)}%` }"
                    />
                </div>

                <!-- Climber marker -->
                <div
                    class="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_0_2px_rgba(7,15,28,0.6)] transition-transform duration-200 ease-out"
                    :style="{
                        transform: `translate(-50%, ${50 - progress * 80}%)`,
                    }"
                >
                    <div
                        class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFB200] to-[#FFE07A] climber-pulse"
                    />
                </div>

                <!-- Summit star -->
                <div
                    class="absolute top-1 right-1 h-3 w-3 rounded-full bg-[#FFE07A] shadow-[0_0_0_2px_rgba(7,15,28,0.65)] transition-transform duration-300"
                    :class="{ 'summit-twinkle': isAtSummit }"
                >
                    <div
                        class="absolute inset-0 rotate-45 rounded-[3px] bg-[#FFB200]/70"
                    />
                </div>
            </div>

            <!-- Text label -->
            <div class="flex flex-col">
                <span
                    class="text-[11px] font-medium uppercase tracking-[0.16em] text-[#5E6A85] dark:text-white/60"
                >
                    {{ isAtSummit ? 'Summit reached' : 'Summit progress' }}
                </span>
                <span class="text-xs font-semibold text-navy dark:text-white">
                    {{ Math.round(progress * 100) }}%
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes mountainGlow {
    0% {
        opacity: 0.75;
        transform: translateY(0);
    }
    50% {
        opacity: 1;
        transform: translateY(-1px);
    }
    100% {
        opacity: 0.8;
        transform: translateY(0);
    }
}

@keyframes climberPulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 178, 0, 0.55);
    }
    70% {
        box-shadow: 0 0 0 6px rgba(255, 178, 0, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 178, 0, 0);
    }
}

@keyframes summitTwinkle {
    0%,
    100% {
        transform: scale(1);
        filter: drop-shadow(0 0 4px rgba(255, 224, 122, 0.8));
    }
    50% {
        transform: scale(1.2) rotate(8deg);
        filter: drop-shadow(0 0 8px rgba(255, 224, 122, 1));
    }
}

.mountain-glow {
    animation: mountainGlow 4s ease-in-out infinite;
}

.climber-pulse {
    animation: climberPulse 1.6s ease-out infinite;
}

.summit-twinkle {
    animation: summitTwinkle 1.2s ease-in-out infinite;
}
</style>

