<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconLogo from '@/components/icons/IconLogo.vue';
import IconSettings from '@/components/icons/IconSettings.vue';
</script>

<template>
  <header class="fixed z-10 w-full top-0">
    <nav>
      <RouterLink to="/">
        <IconLogo />
      </RouterLink>
      <RouterLink to="/">
        <IconSettings />
      </RouterLink>
    </nav>
  </header>
</template>