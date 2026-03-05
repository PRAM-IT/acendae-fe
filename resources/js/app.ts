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

createInertiaApp({
    title: (title) => (title ? `${title} | Acendae` : 'Acendae'),

    resolve: (name) => {
        const pages = import.meta.glob<{ default: DefineComponent }>('./pages/**/*.vue', { eager: true });
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

        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(i18n)
            .use(head)
            .use(ZiggyVue);

        // Global Reveal Logic
        const initReveal = () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe data-reveal elements
            document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));

            // Observe children of data-stagger elements
            document.querySelectorAll('[data-stagger] > *').forEach((el, index) => {
                const htmlEl = el as HTMLElement;
                htmlEl.style.transitionDelay = `${(index % 4) * 0.1}s`;
                observer.observe(htmlEl);
            });
        };

        router.on('finish', () => {
            setTimeout(initReveal, 100); // Small delay to ensure DOM is ready
        });

        app.mount(el);
        initReveal();
    },

    progress: {
        color: '#C9A84C',
    },
});
