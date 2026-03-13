<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/svg+xml" href="/images/logo-n.svg">

        @inertiaHead
        @routes
        @vite(['resources/css/app.css', 'resources/js/app.ts'])
    </head>
    <body class="antialiased">
        <div id="acendae-loader" class="acendae-loader">
            <div class="acendae-loader__bg"></div>
            <!-- Corner accents -->
            <div class="acendae-loader__corner acendae-loader__corner--tl"></div>
            <div class="acendae-loader__corner acendae-loader__corner--tr"></div>
            <div class="acendae-loader__corner acendae-loader__corner--bl"></div>
            <div class="acendae-loader__corner acendae-loader__corner--br"></div>
            <div class="acendae-loader__content">
                <span class="acendae-loader__badge">Strategy & Engineering</span>
                <div class="acendae-loader__logo">
                    <img src="/assets/images/logo-dark.svg" alt="Acendae" class="acendae-loader__logo-img">
                </div>
                <div class="acendae-loader__mountain">
                    <span class="acendae-loader__path"></span>
                    <span class="acendae-loader__climber"></span>
                </div>
                <p class="acendae-loader__tagline">Every business has its mountain. We guide you to the summit.</p>
                <div class="acendae-loader__progress">
                    <div class="acendae-loader__progress-track">
                        <div class="acendae-loader__progress-bar"></div>
                    </div>
                    <span class="acendae-loader__loading-text">Loading<span class="acendae-loader__dots"><span>.</span><span>.</span><span>.</span></span></span>
                </div>
            </div>
        </div>
        @inertia
    </body>
</html>
