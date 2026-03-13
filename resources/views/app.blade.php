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
        <div
            id="acendae-loader"
            class="acendae-loader fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f0f4f9] via-[#e8ecf4] to-[#dfe4ed] p-6 transition-all duration-500 ease-in-out"
        >
            <div
                class="absolute inset-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-60 mix-blend-soft-light"
                style="background-image: url('/images/quote-bg.png')"
            ></div>
            <div class="absolute top-4 left-4 z-10 h-14 w-14 rounded-tl-lg border-t-2 border-l-2 border-gold/50 border-transparent"></div>
            <div class="absolute top-4 right-4 z-10 h-14 w-14 rounded-tr-lg border-t-2 border-r-2 border-gold/50 border-transparent"></div>
            <div class="absolute bottom-4 left-4 z-10 h-14 w-14 rounded-bl-lg border-b-2 border-l-2 border-gold/50 border-transparent"></div>
            <div class="absolute bottom-4 right-4 z-10 h-14 w-14 rounded-br-lg border-b-2 border-r-2 border-gold/50 border-transparent"></div>
            <div
                class="relative z-10 flex w-full max-w-[340px] flex-col items-center justify-center gap-6 rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-xl backdrop-blur-2xl md:max-w-[380px] md:gap-7 md:p-9"
            >
                <span class="text-xs font-semibold uppercase tracking-widest text-navy/90">Strategy & Engineering</span>
                <div class="flex w-full items-center justify-center animate-loader-pop">
                    <img
                        src="/assets/images/logo-dark.svg"
                        alt="Acendae"
                        class="logo-sharp block h-auto max-w-full w-[100px] object-contain animate-loader-pulse md:w-[120px]"
                    >
                </div>
                <div class="loader-mountain">
                    <span class="loader-path"></span>
                    <span class="loader-climber"></span>
                </div>
                <p class="m-0 max-w-[18rem] text-sm font-medium leading-relaxed text-navy md:text-base">Every business has its mountain. We guide you to the summit.</p>
                <div class="flex w-full max-w-[180px] flex-col items-center gap-2 md:max-w-[200px]">
                    <div class="h-1.5 w-full overflow-hidden rounded-full bg-navy/10">
                        <div class="loader-bar h-full w-9 min-w-[50px] rounded-full bg-gradient-to-r from-gold via-[#ffb200] to-[#e8c25a] shadow-[0_0_16px_rgba(255,178,0,0.5)]"></div>
                    </div>
                    <span class="loader-loading-text text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-navy/75">Loading<span class="loader-dots"><span>.</span><span>.</span><span>.</span></span></span>
                </div>
            </div>
        </div>
        @inertia
    </body>
</html>
