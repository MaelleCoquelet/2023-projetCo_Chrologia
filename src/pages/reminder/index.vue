<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MenuFeed from '@/components/MenuFeed.vue'
import CardReminder from '@/components/CardReminder.vue';

</script>
<template>
    <MenuFeed />
    <main class="flex flex-col gap-12 py-12 mt-44 mb-20 px-5">
        <CardReminder v-for="card in 6" />
    </main>
</template>
