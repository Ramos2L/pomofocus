<script setup lang="ts">
const props = defineProps<{
  style?: string;
  actions: Array<{ icon: string; onClick: () => void }>
}>()
</script>

<template>
  <div
    :class="props.style ? props.style : 'flex flex-row flex-wrap items-center justify-center gap-6 px-4 py-8 sm:gap-12 sm:px-8 md:gap-24 md:p-16'"
  >
    <img
      v-for="action in props.actions"
      @click="action.onClick"
      :key="action.icon"
      :src="action.icon"
      :alt="action.icon"
      class="cursor-pointer w-32 sm:w-40 md:w-48 lg:w-100"
    />
  </div>
</template>

<style scoped></style>
