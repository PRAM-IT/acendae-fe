import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
            '@assets': resolve(__dirname, 'resources/assets'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id: string) {
                    if (id.includes('node_modules/gsap')) {
                        return 'gsap';
                    }
                    if (id.includes('node_modules/pinia')) {
                        return 'pinia';
                    }
                    if (
                        id.includes('node_modules/@inertiajs') ||
                        id.includes('node_modules/axios')
                    ) {
                        return 'inertia';
                    }
                    if (
                        id.includes('node_modules/vue') ||
                        id.includes('node_modules/@vue')
                    ) {
                        return 'vendor';
                    }
                },
            },
        },
    },
});
