<template>
    <div class="mt-18 mb-[30vh]">
      <TextInfoPiece 
        data-aos="fade-in" 
        data-aos-anchor-placement="top-center"
        data-aos-delay="0"
        data-aos-offset="0"
        data-aos-duration="1000"
        v-for="(item, index) of data" 
        :key="index" :subtitle="item.subtitle" :title="item.title" :content="item.content"/>
    </div>
</template>

<script setup>
import TextInfoPiece from '../TextInfoPiece.vue';

const data = [
  {
    "subtitle": "Available now",
    "title": "No waiting, start today",
    "content": "Traditional stakeholder mapping takes time – usually months. If we have a Thecosystem in the area you’re working in, you can have it today."
  },
  {
    "subtitle": "Global",
    "title": "Expertise does not need a passport.",
    "content": "Brilliance, drive, and influence can emerge anywhere in the world. A system subscription gives you a global view of the real movers and shakers."
  },
  {
    "title": "No big databases to navigate.",
    "subtitle": "Clear-cut",
    "content": "When looking for a needle in a haystack, why go digging around in a bigger haystack? Each system focuses on one therapeutic condition at a time, so you can focus on what matters."
  },
  {
    "subtitle": "Subscription",
    "title": "Affordable",
    "content": "3-, 6-, and 12-month subscriptions instantly available."
  }
]

</script>
