import '../css/app.css';

import { createInertiaApp, router } from '@inertiajs/vue3';
import { createHead } from '@unhead/vue/client';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import i18n from '@/plugins/i18n';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { usePreferencesStore } from '@/stores/preferences';
import { initializeTheme } from '@/composables/useAppearance';

function setupScrollReveal() {
    if (typeof window === 'undefined') return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const elements = Array.from(
        document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.classList.add('reveal-visible');
                    observer.unobserve(target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: '0px 0px -10% 0px',
        },
    );

    elements.forEach((el) => {
        // Apply per-element delay from data-reveal-delay (in ms), if present
        const delay = el.getAttribute('data-reveal-delay');
        if (delay) {
            el.style.transitionDelay = `${parseInt(delay, 10) || 0}ms`;
        }

        // Skip already revealed elements
        if (!el.classList.contains('reveal-visible')) {
            observer.observe(el);
        }
    });
}

createInertiaApp({
    title: (title) => (title ? `${title} | Acendae` : 'Acendae'),

    resolve: (name) => {
        const pages = import.meta.glob<{ default: DefineComponent }>(
            './pages/**/*.vue',
            { eager: true },
        );
        const page = pages[`./pages/${name}.vue`];

        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }

        const component = page.default;
        component.layout = component.layout ?? DefaultLayout;

        return component;
    },

    setup({ el, App, props, plugin }) {
        const pinia = createPinia();
        pinia.use(piniaPluginPersistedstate);

        const head = createHead();

        router.on('before', (event: any) => {
            const preferences = usePreferencesStore(pinia);
            event.detail.visit.headers['X-Locale'] = preferences.lang;
        });

        initializeTheme();

        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(i18n)
            .use(head)
            .use(ZiggyVue);

        app.mount(el);

        const loader = document.getElementById('acendae-loader');
        if (loader) {
            // Keep loader visible a bit longer for a smoother, more deliberate intro
            const MIN_VISIBLE_MS = 1600;
            window.setTimeout(() => {
                loader.classList.add('acendae-loader--fade-out');
                window.setTimeout(() => {
                    loader.remove();
                }, 900);
            }, MIN_VISIBLE_MS);
        }

        // Initial scroll reveal on first mount
        window.requestAnimationFrame(() => setupScrollReveal());

        // Re-run reveal when navigating between Inertia pages
        router.on('success', () => {
            window.requestAnimationFrame(() => setupScrollReveal());
        });
    },

    progress: {
        color: '#C9A84C',
    },
});
