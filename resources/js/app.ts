import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { createHead } from '@unhead/vue/client';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import i18n from '@/plugins/i18n';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

createInertiaApp({
    title: (title) => (title ? `${title} | Acendae` : 'Acendae'),

    resolve: (name) => {
        const pages = import.meta.glob<{ default: DefineComponent }>('../pages/**/*.vue', { eager: true });
        const page = pages[`../pages/${name}.vue`];
        
        if (page?.default) {
            page.default.layout = page.default.layout ?? DefaultLayout;
        }
        
        return page;
    },

    setup({ el, App, props, plugin }) {
        const pinia = createPinia();
        pinia.use(piniaPluginPersistedstate);

        const head = createHead();

        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(i18n)
            .use(head)
            .use(ZiggyVue)
            .mount(el);
    },

    progress: {
        color: '#C9A84C',
    },
});
