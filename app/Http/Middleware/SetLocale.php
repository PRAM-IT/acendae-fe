<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    private const SUPPORTED = ['en', 'nl'];

    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->header('X-Locale');

        if ($locale && in_array($locale, self::SUPPORTED, true)) {
            App::setLocale($locale);
            session(['locale' => $locale]);
        } elseif (session()->has('locale') && in_array(session('locale'), self::SUPPORTED, true)) {
            App::setLocale(session('locale'));
        } else {
            App::setLocale(config('app.locale', 'en'));
        }

        return $next($request);
    }
}
