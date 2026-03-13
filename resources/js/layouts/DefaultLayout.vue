<script setup lang="ts">
import AppNavbar from '@/components/common/AppNavbar.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<template>
    <div
        class="default-layout overflow-x-hidden bg-white text-navy dark:bg-[#070F1C] dark:text-white"
    >
        <AppNavbar />
        <main class="pt-[64px] lg:pt-[74px]">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
