<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import AppButton from '@/components/ui/AppButton.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import { home } from '@/routes';

defineOptions({ layout: BlankLayout });

const props = defineProps<{
    status: number;
}>();

const { t } = useI18n();

const is404 = computed(() => props.status === 404);
const is403 = computed(() => props.status === 403);
const is503 = computed(() => props.status === 503);

const errorKey = computed(() => {
    if (is404.value) return '404';
    if (is403.value) return '403';
    if (is503.value) return '503';
    return '500';
});

const title = computed(() =>
    t(`errors.${errorKey.value}.title`, 'Storm at the summit'),
);
const subtitle = computed(() =>
    t(`errors.${errorKey.value}.subtitle`, 'Something went wrong'),
);
const description = computed(() =>
    t(
        `errors.${errorKey.value}.description`,
        'We hit some rough weather. Our team is already on it. Please try again in a moment.',
    ),
);
const ctaText = computed(() => t('errors.goHome', 'Return home'));
const pageTitle = computed(() =>
    t(`errors.${errorKey.value}.pageTitle`, 'Server Error'),
);
</script>

<template>
    <div class="contents">
        <Head :title="pageTitle" />
        <div
            class="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#f0f4f9] via-[#e8ecf4] to-[#dfe4ed] px-6 py-16 dark:from-[#070F1C] dark:via-[#0a1428] dark:to-[#081629]"
        >
            <!-- Mountain background -->
            <div
                class="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 mix-blend-soft-light dark:opacity-30"
                style="background-image: url('/images/quote-bg.png')"
            />
            <!-- Corner accents -->
            <div
                class="absolute top-6 left-6 z-10 h-12 w-12 rounded-tl-lg border-t-2 border-l-2 border-gold/50 dark:border-gold/40"
            />
            <div
                class="absolute top-6 right-6 z-10 h-12 w-12 rounded-tr-lg border-t-2 border-r-2 border-gold/50 dark:border-gold/40"
            />
            <div
                class="absolute bottom-6 left-6 z-10 h-12 w-12 rounded-bl-lg border-b-2 border-l-2 border-gold/50 dark:border-gold/40"
            />
            <div
                class="absolute right-6 bottom-6 z-10 h-12 w-12 rounded-br-lg border-r-2 border-b-2 border-gold/50 dark:border-gold/40"
            />

            <!-- Content card -->
            <div
                class="relative z-10 flex w-full max-w-[420px] flex-col items-center justify-center gap-6 rounded-3xl border border-white/60 bg-white/80 p-8 text-center shadow-xl backdrop-blur-2xl md:gap-8 md:p-10 dark:border-white/10 dark:bg-[#0B1F3F]/90"
            >
                <span
                    class="text-xs font-semibold tracking-widest text-navy/80 uppercase dark:text-[#9ABAFF]/90"
                >
                    Strategy & Engineering
                </span>
                <div class="flex w-full items-center justify-center">
                    <img
                        src="/assets/images/logo-dark.svg"
                        alt="Acendae"
                        class="h-auto w-[100px] object-contain md:w-[120px] dark:hidden"
                        onerror="this.src = '/images/logo-dark.svg'"
                    />
                    <img
                        src="/assets/images/logo-light.svg"
                        alt="Acendae"
                        class="hidden h-auto w-[100px] object-contain md:w-[120px] dark:block"
                        onerror="this.src = '/images/logo-dark.svg'"
                    />
                </div>
                <!-- Mountain track visual -->
                <div
                    class="error-mountain flex w-full max-w-[200px] items-center justify-center"
                >
                    <div
                        class="relative h-2 w-full overflow-hidden rounded-full bg-navy/10 dark:bg-white/20"
                    >
                        <span class="error-path absolute inset-0 block" />
                        <span
                            class="error-climber absolute bottom-0 left-[10%] h-2.5 w-2.5 rounded-full"
                            :class="
                                is404
                                    ? 'animate-climb-lost'
                                    : 'animate-climb-storm'
                            "
                        />
                    </div>
                </div>
                <div class="space-y-2">
                    <p
                        class="text-5xl font-bold text-[#0B1F3F] tabular-nums md:text-6xl dark:text-white"
                    >
                        {{ status }}
                    </p>
                    <h1
                        class="text-xl font-bold tracking-tight text-navy md:text-2xl dark:text-white"
                    >
                        {{ title }}
                    </h1>
                    <p
                        class="text-sm font-medium text-navy/70 md:text-base dark:text-white/70"
                    >
                        {{ subtitle }}
                    </p>
                    <p
                        class="mx-auto max-w-[280px] text-sm leading-relaxed text-navy/60 dark:text-white/60"
                    >
                        {{ description }}
                    </p>
                </div>
                <AppButton
                    variant="primary"
                    tag="Link"
                    :href="home()"
                    class="!h-[48px] !rounded-[10px] !bg-[#0B1F3F] !px-6 !font-semibold !text-[#9ABAFF] transition-all hover:!bg-[#1a3358] dark:!bg-gold dark:!text-[#070F1C] dark:hover:!bg-[#d4b55a]"
                >
                    {{ ctaText }}
                </AppButton>
            </div>
        </div>
    </div>
</template>

<style scoped>
.error-path {
    background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(201, 168, 76, 0.3) 30%,
        rgba(201, 168, 76, 0.6) 50%,
        rgba(201, 168, 76, 0.3) 70%,
        transparent 100%
    );
}
.error-climber {
    background: linear-gradient(135deg, #ffe7a9 0%, #ffb200 50%, #b37506 100%);
    box-shadow:
        0 0 0 2px rgba(255, 255, 255, 0.9),
        0 2px 6px rgba(11, 31, 58, 0.2);
}
@keyframes climb-lost {
    0% {
        transform: translateX(-8px);
        opacity: 0.6;
    }
    50% {
        transform: translateX(40px);
        opacity: 1;
    }
    100% {
        transform: translateX(88px);
        opacity: 0.5;
    }
}
@keyframes climb-storm {
    0% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
    25% {
        transform: translateX(20px) scale(1.1);
        opacity: 0.8;
    }
    50% {
        transform: translateX(40px) scale(0.95);
        opacity: 1;
    }
    75% {
        transform: translateX(60px) scale(1.05);
        opacity: 0.7;
    }
    100% {
        transform: translateX(88px) scale(1);
        opacity: 0.5;
    }
}
.animate-climb-lost {
    animation: climb-lost 2.5s ease-in-out infinite;
}
.animate-climb-storm {
    animation: climb-storm 3s ease-in-out infinite;
}
</style>
