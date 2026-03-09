<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Unit;
use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $units = [
            [
                'name' => 'Development Unit',
                'slug' => 'development',
                'tagline' => 'We build products that scale',
                'tags' => ['Vue.js', 'Laravel', 'SaaS', 'Web Dev', 'No Code'],
                'description' => 'Our development unit focuses on building high-performance web applications using modern frameworks. We specialize in creating scalable SaaS solutions and robust backend infrastructures.',
                'sort_order' => 1,
                'image_url' => 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
            ],
            [
                'name' => 'Engineering Unit',
                'slug' => 'engineering',
                'tagline' => 'Precision engineering for complex systems',
                'tags' => ['Software Eng', 'Web Dev', 'SaaS Dev', 'UX/UI'],
                'description' => 'The engineering unit tackles complex technical challenges with precision and expertise. We ensure that every system we build is architected for stability, security, and long-term maintainability.',
                'sort_order' => 2,
                'image_url' => 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
            ],
            [
                'name' => 'Team Outsourcing',
                'slug' => 'outsourcing',
                'tagline' => 'Your team, extended with ours',
                'tags' => ['Hire Web Dev', 'Software Eng', 'UX/UI', 'Full Teams'],
                'description' => 'Our outsourcing services provide you with dedicated professionals who integrate seamlessly into your existing workflows. We offer flexible staffing solutions to help you scale your engineering capacity.',
                'sort_order' => 3,
                'image_url' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
            ],
            [
                'name' => 'Experience Unit',
                'slug' => 'experience',
                'tagline' => 'Designing experiences that guide decisions',
                'tags' => ['UX/UI Design', 'Brand', 'Product Strategy'],
                'description' => 'We believe that great design is functional and intuitive. Our experience unit works closely with clients to craft digital journeys that delight users and drive business results through strategic design.',
                'sort_order' => 4,
                'image_url' => 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
            ],
        ];

        foreach ($units as $data) {
            Unit::create($data);
        }
    }
}
