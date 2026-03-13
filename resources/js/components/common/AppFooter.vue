<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';

import logoLight from '@assets/images/logo-light.svg';
import iconInstagram from '@assets/images/icon-instagram.svg';
import iconLinkedin from '@assets/images/icon-linkedin.svg';
import iconTiktok from '@assets/images/icon-tiktok.svg';
import iconTwitter from '@assets/images/icon-twitter.svg';
import iconFacebook from '@assets/images/icon-facebook.svg';

const { t } = useI18n();

const footerSections = computed(() => [
    {
        title: t('footer.columns.company'),
        width: '128px',
        links: [
            { name: t('footer.company.aboutAcendae'), path: '/about' },
            { name: t('footer.company.lifeAtAcendae'), path: '/life' },
            { name: t('footer.company.team'), path: '/team' },
            { name: t('footer.company.careers'), path: '/careers' },
        ],
    },
    {
        title: t('footer.columns.services'),
        width: '153px',
        links: [
            {
                name: t('footer.services.developmentUnit'),
                path: '/services/development',
            },
            {
                name: t('footer.services.engineeringUnit'),
                path: '/services/engineering',
            },
            {
                name: t('footer.services.teamOutsourcing'),
                path: '/services/outsourcing',
            },
            {
                name: t('footer.services.experienceUnit'),
                path: '/services/experience',
            },
        ],
    },
    {
        title: t('footer.columns.resources'),
        width: '119px',
        links: [
            { name: t('footer.resources.ourProcess'), path: '/process' },
            { name: t('footer.resources.caseStudies'), path: '/case-studies' },
            { name: t('footer.resources.blog'), path: '/blog' },
            { name: t('footer.resources.faqs'), path: '/faqs' },
        ],
    },
    {
        title: t('footer.columns.contact'),
        width: '109px',
        links: [
            { name: t('footer.contact.getInTouch'), path: '/contact' },
            { name: t('footer.contact.partnerships'), path: '/partnerships' },
            { name: t('footer.contact.support'), path: '/support' },
        ],
    },
]);

const legalLinks = computed(() => [
    { name: t('footer.legal.privacy'), path: '/privacy-policy' },
    { name: t('footer.legal.terms'), path: '/terms-and-conditions' },
    { name: t('footer.legal.cookies'), path: '/cookies' },
]);
</script>

<template>
    <footer
        class="section-py w-full bg-[#070F1C] font-['Mona_Sans',sans-serif] text-white"
    >
        <div class="wrap mx-auto flex w-full flex-col items-center gap-0">
            <!-- Link Grid -->
            <!-- Mobile: 2×2 grid | Desktop: single row flex -->
            <div
                class="grid w-full grid-cols-2 gap-x-[40px] gap-y-[44px] sm:gap-x-[55px] items-center justify-items-center
    lg:flex lg:flex-row lg:justify-between lg:gap-0"
            >
                <div
                    v-for="section in footerSections"
                    :key="section.title"
                    class="flex flex-col gap-[24px]"
                >
                    <h4 class="footer-heading">
                        {{ section.title }}
                    </h4>
                    <ul class="flex flex-col gap-[8px]">
                        <li v-for="link in section.links" :key="link.path">
                            <Link :href="link.path" class="footer-link">
                                {{ link.name }}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Social Row -->
            <div
                class="section-pt flex w-full items-center justify-center gap-[29px]"
            >
                <div class="flex-1 border-t border-white/30"></div>

                <div class="flex flex-row items-center gap-[28px]">
                    <a
                        href="https://www.instagram.com/acendae?igsh=Ym1wMWo2OTd1czg1"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="h-6 w-6 transition-opacity hover:opacity-70"
                        aria-label="Acendae on Instagram"
                    >
                        <img
                            :src="iconInstagram"
                            :alt="t('common.instagram') || 'Instagram'"
                            class="h-6 w-6 object-contain"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/acendae/posts/?feedView=all"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="h-6 w-6 transition-opacity hover:opacity-70"
                        aria-label="Acendae on LinkedIn"
                    >
                        <img
                            :src="iconLinkedin"
                            :alt="t('common.linkedin') || 'LinkedIn'"
                            class="h-6 w-6 object-contain"
                        />
                    </a>
                    <a
                        href="https://www.tiktok.com/@acendae"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="h-6 w-6 transition-opacity hover:opacity-70"
                    >
                        <img
                            :src="iconTiktok"
                            :alt="t('common.tiktok') || 'TikTok'"
                            class="h-6 w-6 object-contain"
                        />
                    </a>
                    <a
                        href="#"
                        class="h-6 w-6 transition-opacity hover:opacity-70"
                    >
                        <img
                            :src="iconTwitter"
                            :alt="t('common.twitter') || 'X'"
                            class="h-6 w-6 object-contain"
                        />
                    </a>
                    <a
                        href="#"
                        class="h-6 w-6 transition-opacity hover:opacity-70"
                    >
                        <img
                            :src="iconFacebook"
                            :alt="t('common.facebook') || 'Facebook'"
                            class="h-6 w-6 object-contain"
                        />
                    </a>
                </div>

                <div class="flex-1 border-t border-white/30"></div>
            </div>

            <!-- Logo -->
            <div class="mt-[57px] h-[75px] w-[217px]">
                <Link href="/">
                    <img
                        :src="logoLight"
                        :alt="t('common.logoAlt') || 'Acendae'"
                        class="h-full w-full object-contain"
                        onerror="this.src = '/images/logo-light.svg'"
                    />
                </Link>
            </div>

            <!-- Copyright + Legal -->
            <div
                class="mt-[40px] flex w-full flex-col items-center gap-6  border-white/20 pt-8 text-center lg:gap-[32px] lg:pt-10"
            >
                <p class="footer-copyright">
                    {{ t('footer.copyright') }}
                </p>
                <div
                    class="flex flex-row flex-wrap items-center justify-center gap-x-8 gap-y-2 lg:gap-x-[64px]"
                >
                    <Link
                        v-for="link in legalLinks"
                        :key="link.name"
                        :href="link.path"
                        class="footer-legal"
                    >
                        {{ link.name }}
                    </Link>
                </div>
            </div>
        </div>
    </footer>
</template>
