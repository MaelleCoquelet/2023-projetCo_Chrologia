<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconWeekly from '@/components/icons/IconWeekly.vue';
import IconReminder from '@/components/icons/IconReminder.vue';
</script>
<template>
    <nav>
        <ul class="flex flex-row justify-around">
            <li>
                <RouterLink to="/" class="menuFeed-items">
                    <IconWeekly />
                    <p class="text-orpink-200">Weekly</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/" class="menuFeed-items">
                    <IconReminder />
                    <p>Reminder</p>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
