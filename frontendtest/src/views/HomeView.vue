<script setup>
import BenefitsSection from '../components/Sections/BenefitsSection.vue'
import TextInfoPiece from '../components/TextInfoPiece.vue';

</script>

<template>
  <main class="my-[4rem] md:mx-[4rem] lg:mx-[10rem] flex flex-col">
    <BenefitsSection />
    <TextInfoPiece subtitle="Available now" title="No waiting, start today" content="Traditional stakeholder mapping takes time – usually months. If we have a Thecosystem in the area you’re working in, you can have it today."/>
    <TextInfoPiece subtitle="Global" title="Expertise does not need a passport." content="Brilliance, drive, and influence can emerge anywhere in the world. A system subscription gives you a global view of the real movers and shakers."/>
    <TextInfoPiece title="No big databases to navigate." content="When looking for a needle in a haystack, why go digging around in a bigger haystack? Each system focuses on one therapeutic condition at a time, so you can focus on what matters."/>
    <TextInfoPiece subtitle="Subscription" title="Affordable" content="3-, 6-, and 12-month subscriptions instantly available."/>
  </main>
</template>

