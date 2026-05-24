<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#eadcb9]">
    <NavBar />
    <main class="flex flex-1 flex-col">
      <RouterView />
    </main>
  </div>
</template>