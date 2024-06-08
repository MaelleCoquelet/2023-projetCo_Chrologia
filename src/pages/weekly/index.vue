<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MenuFeedWeekly from '@/components/MenuFeedWeekly.vue';
import CardWeekly from '@/components/CardWeekly.vue';
import CookiesPop from '@/components/CookiesPop.vue';
</script>
<template>
    <MenuFeedWeekly />
    <CookiesPop />
    <main class="px-5 flex flex-col gap-12 py-12 mt-44">
        <CardWeekly v-for="post in 5" />
    </main>
</template>
