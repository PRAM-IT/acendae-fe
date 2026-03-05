<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { usePreferencesStore } from '@/stores/preferences';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const page = usePage();
const { locale } = useI18n();
const preferences = usePreferencesStore();

/**
 * Restore the user's preferred language on mount.
 */
onMounted(() => {
    locale.value = preferences.lang;
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
