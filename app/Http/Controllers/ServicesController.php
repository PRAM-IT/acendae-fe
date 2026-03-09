<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ServicesController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Services/Index');
    }

    public function outsource(): Response
    {
        return Inertia::render('Services/Outsource');
    }

    public function dedicatedTeam(): Response
    {
        return Inertia::render('Services/DedicatedTeam');
    }
}
