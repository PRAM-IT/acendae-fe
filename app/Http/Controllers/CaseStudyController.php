<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\CaseStudy;
use Inertia\Inertia;
use Inertia\Response;

class CaseStudyController extends Controller
{
    public function index(): Response
    {
        $caseStudies = CaseStudy::latest('published_at')->get();
        return Inertia::render('CaseStudies/Index', compact('caseStudies'));
    }

    public function show(CaseStudy $caseStudy): Response
    {
        return Inertia::render('CaseStudies/Show', compact('caseStudy'));
    }
}
