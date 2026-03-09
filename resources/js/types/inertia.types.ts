import type { PageProps as InertiaPageProps } from '@inertiajs/core';

export interface SharedProps {
    app: {
        name: string;
        locale: string;
    };
    flash: {
        success?: string;
        error?: string;
    };
    auth: {
        user: null | {
            id: number;
            name: string;
            email: string;
        };
    };
}

declare module '@inertiajs/vue3' {
    interface PageProps extends InertiaPageProps, SharedProps {}
}
