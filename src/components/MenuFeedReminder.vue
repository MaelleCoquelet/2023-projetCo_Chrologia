<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconWeekly from '@/components/icons/IconWeekly.vue';
import IconReminderActive from '@/components/icons/IconReminderActive.vue';
</script>
<template>
    <nav class="fixed z-10 w-full top-0">
        <ul class="flex flex-row justify-around">
            <li>
                <RouterLink to="/" class="menuFeed-items">
                    <IconWeekly />
                    <p>Weekly</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/reminder" class="menuFeed-items">
                    <IconReminderActive />
                    <p class="text-orpink-200">Reminder</p>
                </RouterLink>
            </li>
        </ul>
        </nav>
</template>
