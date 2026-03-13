<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { ChevronRight } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import AppButton from '@/components/ui/AppButton.vue';

const { t } = useI18n();

interface Props {
    open?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    open: false,
});

const emit = defineEmits(['close']);

const outsourceLinks = computed(() => [
    {
        name: t('megaMenu.outsource.links.softwareEng'),
        path: '/services/software-engineering',
    },
    {
        name: t('megaMenu.outsource.links.webDev'),
        path: '/services/web-development',
    },
    {
        name: t('megaMenu.outsource.links.saasDev'),
        path: '/services/saas-development',
    },
    {
        name: t('megaMenu.outsource.links.uxui'),
        path: '/services/ux-ui-design',
    },
]);

const teamLinks = computed(() => [
    {
        name: t('megaMenu.dedicated.links.hireWebDev'),
        path: '/hire/web-developers',
    },
    {
        name: t('megaMenu.dedicated.links.hireSoftwareEng'),
        path: '/hire/software-engineers',
    },
    {
        name: t('megaMenu.dedicated.links.hireUxui'),
        path: '/hire/ux-ui-designers',
    },
    {
        name: t('megaMenu.dedicated.links.fullTeams'),
        path: '/hire/dedicated-teams',
    },
]);

const handleClose = () => {
    emit('close');
};
</script>

<template>
    <Transition name="slide-down">
        <div
            v-if="open"
            class="shadow-navy-lg absolute right-0 left-0 z-[90] w-full overflow-hidden bg-white pt-[40px]"
            @mouseleave="handleClose"
        >
            <div class="wrap mx-auto grid grid-cols-2 gap-0">
                <!-- Left Column -->
                <div class="flex flex-col gap-6 pr-12 pb-12">
                    <div class="mb-4">
                        <h3 class="mb-1 text-[18px] font-bold text-[#0B1F3F]">
                            {{ t('megaMenu.outsource.title') }}
                        </h3>
                        <p class="text-[14px] text-black/50">
                            {{ t('megaMenu.outsource.subtitle') }}
                        </p>
                    </div>

                    <div class="flex flex-col gap-1">
                        <Link
                            v-for="link in outsourceLinks"
                            :key="link.path"
                            :href="link.path"
                            class="group flex items-center justify-between rounded-lg border-l-2 border-transparent p-[12px] px-[16px] transition-all hover:border-[#C9A84C] hover:bg-[#C9A84C0F]"
                            @click="handleClose"
                        >
                            <span
                                class="text-[15px] font-medium text-[#0B1F3F] transition-colors group-hover:text-[#C9A84C]"
                            >
                                {{ link.name }}
                            </span>
                            <ChevronRight
                                class="h-4 w-4 text-[#C9A84C] opacity-0 transition-opacity group-hover:opacity-100"
                            />
                        </Link>
                    </div>
                </div>

                <!-- Right Column -->
                <div
                    class="flex flex-col gap-6 rounded-tl-2xl rounded-tr-2xl bg-[#F0F4F8] p-12"
                >
                    <div class="mb-4">
                        <h3 class="mb-1 text-[18px] font-bold text-[#0B1F3F]">
                            {{ t('megaMenu.dedicated.title') }}
                        </h3>
                        <p class="text-[14px] text-black/50">
                            {{ t('megaMenu.dedicated.subtitle') }}
                        </p>
                    </div>

                    <div class="flex flex-col gap-1">
                        <Link
                            v-for="link in teamLinks"
                            :key="link.path"
                            :href="link.path"
                            class="group flex items-center justify-between rounded-lg border-l-2 border-transparent p-[12px] px-[16px] transition-all hover:border-[#0B1F3F] hover:bg-white/50"
                            @click="handleClose"
                        >
                            <span
                                class="text-[15px] font-medium text-[#0B1F3F] transition-colors group-hover:text-[#0B1F3F]/80"
                            >
                                {{ link.name }}
                            </span>
                            <ChevronRight
                                class="h-4 w-4 text-[#0B1F3F] opacity-0 transition-opacity group-hover:opacity-100"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div
                class="container-px mt-auto flex h-[60px] w-full items-center justify-between bg-[#0B1F3F]"
            >
                <i18n-t
                    keypath="megaMenu.tagline"
                    tag="p"
                    class="text-[13px] text-white/70 italic sm:text-[15px]"
                >
                    <template #highlight>
                        <strong class="ml-1 font-bold text-white">{{
                            t('megaMenu.taglineHighlight')
                        }}</strong>
                    </template>
                </i18n-t>

                <AppButton
                    variant="outline"
                    tag="Link"
                    href="/contact"
                    class="!rounded-[6px] !border-white/40 !px-[24px] !py-[10px] !text-[14px] !font-medium !text-white hover:!bg-white/10"
                    @click="handleClose"
                >
                    {{ t('megaMenu.letsTalk') }}
                </AppButton>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.shadow-navy-lg {
    box-shadow: 0 10px 30px rgba(11, 31, 63, 0.15);
}
</style>
