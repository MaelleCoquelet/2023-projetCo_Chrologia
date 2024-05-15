<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconWeeklyActive from '@/components/icons/IconWeeklyActive.vue';
import IconReminder from '@/components/icons/IconReminder.vue';
</script>
<template>
    <nav class="fixed z-10 w-full top-0 fixed-topNav">
        <ul class="flex justify-around">
            <li>
                <RouterLink to="/" class="menuFeed-items">
                    <IconWeeklyActive />
                    <p class="text-orpink-200">Weekly</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/reminder" class="menuFeed-items">
                    <IconReminder />
                    <p>Reminder</p>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
