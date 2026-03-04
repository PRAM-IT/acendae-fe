<script setup lang="ts">
import AppNavbar from '@/components/common/AppNavbar.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>

<template>
    <div class="default-layout">
        <AppNavbar />
        <main>
            <slot />
        </main>
        <AppFooter />
    </div>
</template>
