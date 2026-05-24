<script setup lang="ts">
const props = defineProps<{
  onClick: () => void,
  image: string
}>()
</script>

<template>
  <button type="button" class="… cursor-pointer …" :aria-label="props.ariaLabel" @click="props.onClick">
    <img
    :src="props.image"
    :alt="props.image"
    class="cursor-pointer w-36 sm:w-42 md:w-64 lg:w-125"
  />
  </button>
</template>

<style scoped></style>
