<template>
    <div class="flex justify-center basis-1/3 min-w-[300px] grow">
        <div class="w-full m-2 px-4 py-10c flex flex-col justify-center text-center border border-lightGray rounded-sm items-center py-12 px-2">
            <img :src="imageUrl" class="w-[4rem]"/>
            <h2 class="font-bold text-md">{{title}}</h2>
            <p class="text-sm">{{content}}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    image: {
        required: true,
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    content: {
        required: true,
        type: String,
    }
})

const imageUrl = computed(() => { return new URL(`../assets/img/${props.image}`, import.meta.url).href });



</script>