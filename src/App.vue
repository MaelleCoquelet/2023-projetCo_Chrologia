<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import HeaderPage from '@/components/HeaderPage.vue'
import FooterPage from '@/components/FooterPage.vue'
import Button from '@/components/Button.vue';
import { onErrorCaptured, computed } from 'vue';

// Pour cacher le footer et header si besoin
const routeActuelle = useRoute()
/* const showOnRoutes = ['/weekly', '/reminder', '/notifications', '/rechercher', '/profil', '/parametres']; */
const show = computed(() => routeActuelle.path === '/weekly' || routeActuelle.path === '/reminder' || routeActuelle.path === '/notifications' || routeActuelle.path === '/rechercher' || routeActuelle.path === '/profil' || routeActuelle.path === '/parametres' );
</script>


<template>
  <HeaderPage v-if="show" />
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" :key="$route.path" />
    </Suspense>
  </RouterView>
  <FooterPage v-if="show" />
</template>
