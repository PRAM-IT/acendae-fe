<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import HeroSection from '@/components/home/HeroSection.vue';
import SocialProofSection from '@/components/home/SocialProofSection.vue';
import TwoWaysSection from '@/components/home/TwoWaysSection.vue';
import OurUnitsSection from '@/components/home/OurUnitsSection.vue';
import HowWeWorkSection from '@/components/home/HowWeWorkSection.vue';
import QuoteSection from '@/components/home/QuoteSection.vue';
import JoinSection from '@/components/home/JoinSection.vue';
import CtaSection from '@/components/sections/CtaSection.vue';

const { t } = useI18n();
</script>

<template>
    <Head>
        <title>
            {{ t('home.meta.title', 'Acendae | Strategy & Engineering') }}
        </title>
        <meta
            name="description"
            :content="
                t(
                    'home.meta.description',
                    'Every business has its mountain. Acendae is the guide.',
                )
            "
        />
        <meta
            property="og:title"
            :content="t('home.meta.title', 'Acendae | Strategy & Engineering')"
        />
        <meta
            property="og:description"
            :content="
                t(
                    'home.meta.description',
                    'Every business has its mountain. Acendae is the guide.',
                )
            "
        />
    </Head>

    <HeroSection />
    <SocialProofSection />
    <TwoWaysSection />
    <OurUnitsSection />
    <HowWeWorkSection />
    <QuoteSection />
    <JoinSection />
    <CtaSection />
</template>
