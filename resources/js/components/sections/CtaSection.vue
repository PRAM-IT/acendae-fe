<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

// Avatars are placeholder colored circles for now
const avatarData = [
  { color: '#ABB677' }, // avatar-1.jpg placeholder
  { color: '#C7B9DA' }, // avatar-2.jpg placeholder
  { color: '#D9B9BB' }  // avatar-3.jpg placeholder
];
</script>

<template>
  <section class="relative w-full h-[525px] bg-[#F4F9FF] flex flex-col items-center justify-center font-mona overflow-hidden">
    
    <!-- Element 1: Avatar Group -->
    <div class="absolute top-[91px] flex items-center justify-center w-[120px] h-[56px]">
      <!-- Left Avatar -->
      <div 
        class="absolute left-0 w-[48px] h-[48px] rounded-full border-[1.5px] border-white shadow-sm z-10"
        :style="{ backgroundColor: avatarData[0].color }"
      ></div>
      <!-- Center Avatar -->
      <div 
        class="absolute left-1/2 -translate-x-1/2 w-[56px] h-[56px] rounded-full border-[1.5px] border-white shadow-md z-30"
        :style="{ backgroundColor: avatarData[1].color }"
      ></div>
      <!-- Right Avatar -->
      <div 
        class="absolute right-0 w-[48px] h-[48px] rounded-full border-[1.5px] border-white shadow-sm z-20"
        :style="{ backgroundColor: avatarData[2].color }"
      ></div>
    </div>

    <!-- Element 2 & 3: Heading + Subtext -->
    <div class="relative z-40 flex flex-col items-center justify-center text-center mt-[80px]">
      <h2 class="text-[20px] font-medium text-[#101828] leading-[30px] max-w-[613px] mb-2">
        Ready to start your ascent?
      </h2>
      <p class="text-[18px] font-normal text-[#667085] leading-[28px] max-w-[604px] mb-4">
        Let's talk about where you are today — and what the next step should be.
      </p>
      <p class="text-[18px] font-normal text-[#667085] leading-[28px] max-w-[581px] mb-[40px]">
        Whether you need a project delivered or a team built around your growth, we'll guide you to the right setup.
      </p>
    </div>

    <!-- Element 5: CTA Button Row -->
    <div class="flex flex-row items-center justify-center gap-[12px] w-full mt-4">
      <Link 
        href="/contact" 
        class="flex items-center gap-[12px] bg-[#0B1F3F] text-white px-[20px] py-[10px] rounded-[8px] h-[55px] w-[228px] justify-center hover:opacity-90 transition-opacity"
      >
        <div class="relative w-[20px] h-[20px] flex items-center justify-center bg-[#00A67E2B] rounded-full">
          <span class="w-[8px] h-[8px] bg-[#0A5E4A] rounded-full"></span>
          <span class="pulse-dot absolute w-[8px] h-[8px] bg-[#0A5E4A] rounded-full"></span>
        </div>
        <span class="text-[16px] font-semibold">Discuss a project</span>
      </Link>

      <Link 
        href="/team-outsourcing" 
        class="flex items-center bg-transparent text-[#0B1F3F] border border-[#0B1F3F]/60 px-[20px] py-[10px] rounded-[8px] h-[55px] w-[266px] justify-center hover:bg-[#0B1F3F10] transition-colors"
      >
        <span class="text-[16px] font-medium">Discuss team outsourcing</span>
      </Link>
    </div>

    <!-- Element 6: Italic Tagline -->
    <p class="text-[18px] font-medium italic text-[#1D4FBC] text-center w-[238px] mt-[40px]">
      We'll find the right next step.
    </p>

    <!-- Element 7: Decorative Gold Shape -->
    <!-- Replace with actual SVG asset: acendae-n-shape.svg -->
    <div class="absolute right-0 top-[90px] w-[451px] h-[435px] overflow-hidden pointer-events-none translate-x-[20%]">
      <div class="w-[501px] h-[411px] bg-[#D7A118] opacity-[0.86] rotate-[-8.9deg]"></div>
    </div>
  </section>
</template>

<style scoped>
.font-mona {
  font-family: 'Mona Sans', sans-serif;
}

.pulse-dot {
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(2.4); opacity: 0; }
  100% { transform: scale(1); opacity: 0; }
}
</style>
