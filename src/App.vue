<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <HeaderPage />
  <main class="mt-44">
    <RouterView />
  </main>
  <FooterPage />
</template>
