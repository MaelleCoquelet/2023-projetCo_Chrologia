<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconLogo from '@/components/icons/IconLogo.vue';
import IconSettings from '@/components/icons/IconSettings.vue';
import { useRoute } from 'vue-router'

</script>

<template>
  <header class="fixed z-10 w-full top-0 py-6 bg-slate-700">
    <nav class="flex justify-between px-[20px] items-center">
      <RouterLink to="/weekly">
        <IconLogo class="h-20" />
      </RouterLink>
      <RouterLink to="/parametres">
        <IconSettings :class="{ 'icon-fillActive': $route.path==='/parametres' }" />
      </RouterLink>
    </nav>
  </header>
</template>