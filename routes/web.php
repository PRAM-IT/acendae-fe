<?php

declare(strict_types=1);

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\CaseStudyController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ServicesController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/about', [AboutController::class, 'index'])->name('about');

Route::prefix('services')->name('services.')->group(function () {
    Route::get('/', [ServicesController::class, 'index'])->name('index');
    Route::get('/outsource', [ServicesController::class, 'outsource'])->name('outsource');
    Route::get('/dedicated-team', [ServicesController::class, 'dedicatedTeam'])->name('dedicated-team');
});

Route::prefix('projects')->name('case-studies.')->group(function () {
    Route::get('/', [CaseStudyController::class, 'index'])->name('index');
    Route::get('/{caseStudy}', [CaseStudyController::class, 'show'])->name('show');
});

Route::get('/careers', [CareerController::class, 'index'])->name('careers');

Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia\Inertia::render('Dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
