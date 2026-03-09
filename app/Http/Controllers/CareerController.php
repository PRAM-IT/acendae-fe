<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\JobListing;
use Inertia\Inertia;
use Inertia\Response;

class CareerController extends Controller
{
    public function index(): Response
    {
        $jobs = JobListing::active()->get();
        return Inertia::render('Careers', compact('jobs'));
    }
}
