export interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    category: string;
    tags: string[];
    location: string;
    summary: string;
    image: string;
    url: string;
}

export interface Unit {
    id: number;
    name: string;
    slug: string;
    description: string;
    tags: string[];
    image: string;
    ctaPrimary: string;
    ctaSecondary: string;
}

export interface JobListing {
    id: number;
    title: string;
    department: string;
    location: string;
    type: 'full-time' | 'part-time' | 'contract';
    summary: string;
    isActive: boolean;
}

export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export interface MegaMenuColumn {
    heading: string;
    items: NavItem[];
}
