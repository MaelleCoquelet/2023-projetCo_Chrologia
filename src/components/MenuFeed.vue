<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconWeekly from '@/components/icons/IconWeekly.vue';
import IconReminder from '@/components/icons/IconReminder.vue';
</script>
<template>
    <nav class="fixed z-10 w-full top-0 mt-[118px] p-1 bg-slate-700">
        <ul class="flex justify-around">
            <li>
                <RouterLink to="/weekly" class="menuFeed-items">
                    <IconWeekly :class="{ '*:fill-orpink-200 *:stroke-orpink-200': $route.path === '/weekly' }" />
                    <h1 class="text-sm" :class="{ 'text-orpink-200 font-bold': $route.path === '/weekly' }">
                        Weekly</h1>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/reminder" class="menuFeed-items">
                    <IconReminder :class="{ '*:fill-orpink-200': $route.path === '/reminder' }" />
                    <h2 class="text-sm text-stone-100" :class="{ '!text-orpink-200 font-bold': $route.path === '/reminder' }">Reminder
                    </h2>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
