<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import Button from '@/components/Button.vue';
import { onErrorCaptured, computed } from 'vue';

// Pour cacher le footer et header si besoin
const routeActuelle = useRoute()
const hideOnRoutes = ['/inscription']
const hide = computed(() => !hideOnRoutes.some(path => routeActuelle.path.startsWith(path)));
</script>


<template>
  <HeaderPage v-if="hide" />
  <RouterView />
  <FooterPage v-if="hide" />
</template>
