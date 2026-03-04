<script setup lang="ts">
import AppButton from '@/components/ui/AppButton.vue';

// Avatars with background colors and placeholder images as per Figma CSS
const avatarData = [
  { color: '#ABB677', image: '1748848358611.jpg' },
  { color: '#C7B9DA', image: '1700324446153.jpg' },
  { color: '#D9B9BB', image: '1756030038149.jpg' }
];
</script>

<template>
  <section class="relative w-full h-[525px] bg-[#F4F9FF] font-mona overflow-hidden">
    <div class="relative w-full max-w-[1440px] h-full mx-auto">
      
      <!-- Avatar group (Top: 91px, Center) -->
      <div class="absolute top-[91px] left-1/2 -translate-x-1/2 w-[120px] h-[56px] flex items-center justify-center">
        <!-- Left Avatar (48x48) -->
        <div 
          class="absolute left-0 top-2 w-[48px] h-[48px] rounded-full border-[1.5px] border-white shadow-sm z-10 overflow-hidden"
          :style="{ backgroundColor: avatarData[0].color }"
        >
          <!-- Using a color placeholder as image is not provided -->
          <div class="w-full h-full opacity-0"></div> 
        </div>

        <!-- Right Avatar (48x48) -->
        <div 
          class="absolute left-[72px] top-2 w-[48px] h-[48px] rounded-full border-[1.5px] border-white shadow-sm z-20 overflow-hidden"
          :style="{ backgroundColor: avatarData[2].color }"
        >
          <div class="w-full h-full opacity-0"></div>
        </div>

        <!-- Center Avatar (56x56) -->
        <div 
          class="absolute left-8 top-0 w-[56px] h-[56px] rounded-full border-[1.5px] border-white shadow-sm z-30 overflow-hidden"
          :style="{ backgroundColor: avatarData[1].color }"
        >
          <div class="w-full h-full opacity-0"></div>
        </div>
      </div>

      <!-- Heading & Supporting Text (Top: 185px, Center) -->
      <div class="absolute top-[185px] left-1/2 -translate-x-1/2 w-[613px] flex flex-col items-center gap-2">
        <h2 class="text-[20px] font-medium leading-[30px] text-[#101828] text-center w-full">
          Ready to start your ascent?
        </h2>
        <p class="text-[18px] font-normal leading-[28px] text-[#667085] text-center w-[604px]">
          Let's talk about where you are today — and what the next step should be.
        </p>
      </div>

      <!-- Supporting Text 2 (Top: 262px, Center) -->
      <p class="absolute top-[262px] left-1/2 -translate-x-1/2 w-[581px] text-[18px] font-normal leading-[28px] text-[#667085] text-center">
        Whether you need a project delivered or a team built around your growth, we'll guide you to the right setup.
      </p>

      <!-- CTA Buttons (Top: 359px, Center) -->
      <div class="absolute top-[359px] left-1/2 -translate-x-1/2 flex items-center gap-[12px] w-[506px] h-[55px]">
        <!-- Primary Button -->
        <AppButton 
          variant="primary" 
          tag="Link" 
          href="/contact" 
          class="!w-[228px] !h-[55px] !bg-[#0B1F3F] !rounded-[8px] !px-0 !justify-center !border-0"
        >
          <div class="flex items-center gap-[10px] w-[174px] justify-center">
            <div class="w-[20px] h-[20px] bg-[rgba(0,166,126,0.17)] rounded-full flex items-center justify-center relative">
              <img src="/resources/assets/images/green-circle.svg" alt="" class="w-2 h-2" />
              <div class="pulse-dot absolute w-2 h-2 bg-[#0A5E4A] rounded-full"></div>
            </div>
            <span class="text-[16px] font-semibold text-white whitespace-nowrap">Discuss a project</span>
          </div>
        </AppButton>

        <!-- Secondary Button -->
        <AppButton 
          variant="outline" 
          tag="Link" 
          href="/team-outsourcing" 
          class="!w-[266px] !h-[55px] !border-[rgba(11,31,63,0.67)] !border !rounded-[8px] !px-0 !justify-center"
        >
          <span class="text-[16px] font-medium text-[#0B1F3F]">Discuss team outsourcing</span>
        </AppButton>
      </div>

      <!-- Italic Tagline (Top: 446px, Center) -->
      <p class="absolute top-[446px] left-1/2 -translate-x-1/2 w-[238px] text-center text-[18px] font-medium italic text-[#1D4FBC] leading-[28px]">
        We'll find the right next step.
      </p>

      <!-- Decorative Gold Shape (Top: 90px, Left: 987px) -->
      <div class="absolute top-[90px] left-[987px] w-[451px] h-[435px] pointer-events-none overflow-visible">
        <img 
          src="/resources/assets/images/logo-n.svg" 
          alt="" 
          class="w-[501px] h-[411px] max-w-none transform -rotate-[8.9deg] opacity-[0.86]"
        />
      </div>
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
  50% { transform: scale(3); opacity: 0; }
  100% { transform: scale(1); opacity: 0; }
}
</style>
