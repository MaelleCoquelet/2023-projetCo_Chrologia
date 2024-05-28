<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconLogo from '@/components/icons/IconLogo.vue';
import IconSettings from '@/components/icons/IconSettings.vue';
import { ref, computed, watch } from 'vue'

const settingActive = ref(false)

function disableSetting() {
  settingActive.value = false
} 
</script>

<template>
  <header class="fixed-top py-6">
    <nav class="flex justify-between px-[20px] items-center">
      <RouterLink to="/weekly" @click="disableSetting">
        <IconLogo />
      </RouterLink>
      <RouterLink to="/settings" @click="settingActive = !settingActive">
        <IconSettings :class="{ 'icon-fillActive': settingActive }" />
      </RouterLink>
    </nav>
  </header>
</template>