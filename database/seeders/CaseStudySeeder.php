<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\CaseStudy;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CaseStudySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $caseStudies = [
            [
                'title' => 'FlowDesk Platform Redesign',
                'category' => 'SaaS Products',
                'location' => 'Netherland',
                'tagline' => 'Reduced onboarding time by 30% through structured platform redesign',
                'featured' => true,
                'client_name' => 'FlowDesk',
                'body' => 'Compelling narrative about how we transformed the FlowDesk platform, focusing on user efficiency and a modern aesthetic. The redesign involved a complete overhaul of the navigation and dashboard layouts.',
                'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                'published_at' => now(),
            ],
            [
                'title' => 'Harvestly E-Commerce Rebuild',
                'category' => 'E-Commerce',
                'location' => 'Netherland',
                'tagline' => 'Tripled conversion rate with structured checkout experience',
                'featured' => true,
                'client_name' => 'Harvestly',
                'body' => 'Harvestly needed a faster, more reliable infrastructure to handle their growing customer base. We rebuilt their entire e-commerce engine using Laravel and Vue, resulting in a significantly improved conversion rate.',
                'image_url' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
                'published_at' => now(),
            ],
            [
                'title' => 'Nomad Booking No-Code Build',
                'category' => 'No Code',
                'location' => 'Sri Lanka',
                'tagline' => 'Launched MVP in 6 weeks with zero custom backend',
                'featured' => false,
                'client_name' => 'Nomad Ventures',
                'body' => 'By leveraging no-code tools, we were able to bring Nomad Booking to market in record time. This project highlights our ability to choose the right technology for the specific needs of a startup.',
                'image_url' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
                'published_at' => now(),
            ],
            [
                'title' => 'Lens & Light UX Overhaul',
                'category' => 'UX/UI Design',
                'location' => 'Netherland',
                'tagline' => 'Improved task completion rate by 45% through systematic UX redesign',
                'featured' => false,
                'client_name' => 'Lens & Light',
                'body' => 'User experience was at the heart of this project. We conducted extensive user testing to identify friction points in the Lens & Light application and implemented a series of design changes to improve flow.',
                'image_url' => 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
                'published_at' => now(),
            ],
            [
                'title' => 'GreenRoute SaaS Dashboard',
                'category' => 'SaaS Products',
                'location' => 'Sri Lanka',
                'tagline' => 'Built real-time fleet tracking from scratch in 10 weeks',
                'featured' => true,
                'client_name' => 'GreenRoute Logistics',
                'body' => 'GreenRoute required a complex dashboard to track their fleet in real-time. We built a robust SaaS solution that provides actionable insights through data visualization and live tracking features.',
                'image_url' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
                'published_at' => now(),
            ],
        ];

        foreach ($caseStudies as $data) {
            $data['slug'] = Str::slug($data['title']);
            CaseStudy::create($data);
        }
    }
}
