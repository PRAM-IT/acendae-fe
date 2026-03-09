// Re-export all domain content types
export * from './content.types';

// Re-export Inertia shared props types (also augments @inertiajs/vue3)
export * from './inertia.types';

// Vue SFC component declaration (ensures *.vue files are typed as Vue components)
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    const component: DefineComponent<{}, {}, any>
    export default component
}
