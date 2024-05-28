<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MenuFeedWeekly from '@/components/MenuFeedWeekly.vue';
import CardWeekly from '@/components/CardWeekly.vue';
</script>
<template>
    <MenuFeedWeekly />
    <main class="px-5">
        <CardWeekly />
    </main>
</template>
