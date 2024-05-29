<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconWeekly from '@/components/icons/IconWeekly.vue';
import IconReminderActive from '@/components/icons/IconReminderActive.vue';
</script>
<template>
    <nav class="fixed z-10 w-full top-0 mt-[118px] p-1 bg-slate-700">
        <ul class="flex justify-around">
            <li>
                <RouterLink to="/weekly" class="menuFeed-items">
                    <IconWeekly />
                    <p class="font-bold">Weekly</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/reminder" class="menuFeed-items">
                    <IconReminderActive />
                    <h1 class="text-orpink-200 text-sm">Reminder</h1>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
