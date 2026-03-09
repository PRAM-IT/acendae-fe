import { useHead } from '@unhead/vue';

export interface SeoOptions {
    title: string;
    description: string;
    ogImage?: string;
    canonical?: string;
}

/**
 * Composable that sets page-level SEO meta tags via Unhead.
 * Automatically appends " | Acendae" to the title.
 */
export function useSeo(options: SeoOptions): void {
    const fullTitle = `${options.title} | Acendae`;

    useHead({
        title: fullTitle,
        meta: [
            { name: 'description', content: options.description },

            // Open Graph
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: fullTitle },
            { property: 'og:description', content: options.description },
            ...(options.ogImage
                ? [{ property: 'og:image', content: options.ogImage }]
                : []),

            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: fullTitle },
            { name: 'twitter:description', content: options.description },
        ],
        link: [
            ...(options.canonical
                ? [{ rel: 'canonical', href: options.canonical }]
                : []),
        ],
    });
}
