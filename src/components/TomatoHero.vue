<script setup lang="ts">
import tomatoImage from '@/assets/tomato.png'
const props = defineProps<{
  timerFormat: string
  imageTomato?: string
  animateTomato: number
}>()

const tomato = props.imageTomato ?? tomatoImage
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 py-6">
    <p class="text-center text-7xl font-bold text-[#d23a1e]">
      {{ props.timerFormat }}
    </p>
    <img
      :src="tomato"
      class="transition-transform duration-300"
      :style="{
        transform: `rotate(${(props.animateTomato)}deg)`,
      }"
      alt="image_tomato_hover"
    />
  </div>
</template>

<style scoped>
</style>
