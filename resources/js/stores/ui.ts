import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', () => {
    /** Controls the mobile navigation menu open/close state */
    const menuOpen = ref(false);

    function toggleMenu(): void {
        menuOpen.value = !menuOpen.value;
    }

    function closeMenu(): void {
        menuOpen.value = false;
    }

    /** Tracks which mega-menu section is currently active (by name) */
    const megaMenuActive = ref<string | null>(null);

    function setMegaMenu(name: string | null): void {
        megaMenuActive.value = name;
    }

    /** Global loading overlay state */
    const globalLoading = ref(false);

    function setLoading(val: boolean): void {
        globalLoading.value = val;
    }

    return {
        menuOpen,
        toggleMenu,
        closeMenu,
        megaMenuActive,
        setMegaMenu,
        globalLoading,
        setLoading,
    };
});

export type UiStore = ReturnType<typeof useUiStore>;
