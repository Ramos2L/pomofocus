<script setup lang="ts">
</script>

<template>
  <nav class="flex justify-end bg-[#eadcb9] px-4 py-4">
      <div class="flex space-x-6">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 text-2xl text-[#d23a1e] hover:text-[#F1BE53]"
        >
          <img src="@/assets/home_icon.png" alt="home_icon" class="h-6" />
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="inline-flex items-center gap-2 text-2xl text-[#d23a1e] hover:text-[#F1BE53]"
        >
          <img src="@/assets/about_icon.png" alt="about_icon" class="h-6" />
          About
        </RouterLink>
      </div>
    </nav>
</template>

<style scoped></style>