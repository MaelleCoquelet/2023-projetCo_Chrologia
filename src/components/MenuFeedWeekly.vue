<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconWeeklyActive from '@/components/icons/IconWeeklyActive.vue';
import IconReminder from '@/components/icons/IconReminder.vue';
</script>
<template>
    <nav class="fixed z-10 w-full top-0 mt-[118px] p-1 bg-slate-700">
        <ul class="flex justify-around">
            <li>
                <RouterLink to="/weekly" class="menuFeed-items">
                    <IconWeeklyActive />
                    <h1 class="text-orpink-200 text-sm">Weekly</h1>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/reminder" class="menuFeed-items">
                    <IconReminder />
                    <p class="font-bold">Reminder</p>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
