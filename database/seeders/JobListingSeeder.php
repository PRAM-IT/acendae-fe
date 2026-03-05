<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\JobListing;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class JobListingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jobs = [
            [
                'title' => 'Senior Vue.js Developer',
                'unit' => 'Development Unit',
                'location' => 'Remote',
                'type' => 'Full-time',
                'description' => 'We are looking for a Senior Vue.js Developer to join our growing team. You will be responsible for building and maintaining modern user interfaces for our diverse client base.',
                'requirements' => [
                    '5+ years of experience with Vue.js',
                    'Strong proficiency in TypeScript',
                    'Experience with Inertia.js',
                    'Solid understanding of Tailwind CSS',
                    'Excellent communication skills',
                ],
                'is_active' => true,
            ],
            [
                'title' => 'Laravel Backend Engineer',
                'unit' => 'Engineering Unit',
                'location' => 'Colombo, Sri Lanka',
                'type' => 'Full-time',
                'description' => 'As a Laravel Backend Engineer, you will design and implement robust backend architectures. You will work closely with frontend developers to deliver seamless full-stack experiences.',
                'requirements' => [
                    '4+ years of professional Laravel experience',
                    'Expertise in MySQL database design',
                    'Proficiency in building RESTful APIs',
                    'Experience with PHP 8.2+',
                    'Strong problem-solving abilities',
                ],
                'is_active' => true,
            ],
            [
                'title' => 'UX/UI Designer',
                'unit' => 'Experience Unit',
                'location' => 'Remote',
                'type' => 'Full-time',
                'description' => 'We are seeking a UX/UI Designer who is passionate about creating beautiful and functional interfaces. You will play a key role in defining the visual language of our projects.',
                'requirements' => [
                    'Proven experience as a UX/UI Designer',
                    'Proficiency in Figma',
                    'Strong portfolio showcasing design systems',
                    'Understanding of user-centered design principles',
                    'Ability to collaborate with developers',
                ],
                'is_active' => true,
            ],
            [
                'title' => 'Project Coordinator',
                'unit' => 'Team Outsourcing',
                'location' => 'Amsterdam, Netherlands',
                'type' => 'Full-time',
                'description' => 'The Project Coordinator will ensure the smooth operation of our outsourcing teams. You will be the main point of contact between our clients and our engineering talent.',
                'requirements' => [
                    'Experience in technical project management',
                    'Strong organizational and multitasking skills',
                    'Excellent written and verbal communication',
                    'Ability to work in a fast-paced environment',
                    'Familiarity with Agile methodologies',
                ],
                'is_active' => true,
            ],
        ];

        foreach ($jobs as $data) {
            $data['slug'] = Str::slug($data['title']);
            JobListing::create($data);
        }
    }
}
