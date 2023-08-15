<template>
    <div class="px-12 flex flex-col justify-center my-[5rem] md:my-[10rem]">
        <h3 v-if="subtitle" class="text-xs md:text-sm text-sky uppercase font-blue font-bold">{{ subtitle }}</h3>
        <h2 class="text-blue text-md md:text-lg leading-none font-bold my-4">{{ title }}</h2>
        <p class="text-sm md:text-md font-bold">{{ content }}</p>
    </div>
</template>

<script setup>
defineProps({
    subtitle: {
        required: false,
        type: String,
    },
    title: {
        required: true,
        type: String,
    },
    content: {
        required: true,
        type: String,
    },
})

</script>