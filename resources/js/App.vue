<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import i18n from '@/plugins/i18n';
import { usePreferencesStore } from '@/stores/preferences';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const page = usePage();
const preferencesStore = usePreferencesStore();

/**
 * Restore the user's preferred language on mount.
 * i18n.global.locale is a Ref<string> in Composition API mode (legacy: false).
 */
onMounted(() => {
    i18n.global.locale.value = preferencesStore.lang;
});

/**
 * Resolve the layout component from the current Inertia page component.
 * Falls back to DefaultLayout if the page does not declare one.
 */
const Layout = computed(() => {
    const component = page.component as unknown as { layout?: unknown };
    return (component?.layout as typeof DefaultLayout) ?? DefaultLayout;
});
</script>

<template>
    <component :is="Layout">
        <Transition name="page" mode="out-in">
            <slot />
        </Transition>
    </component>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.25s ease;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
