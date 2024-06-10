<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MenuFeed from '@/components/MenuFeed.vue';
import CardWeekly from '@/components/CardWeekly.vue';
import CookiesPop from '@/components/CookiesPop.vue';
</script>
<template>
    <MenuFeed />
    <CookiesPop />
    <main class="flex flex-col gap-12 py-12 mt-44 mb-20 px-5">
        <CardWeekly v-for="post in 5" />
    </main>
</template>
