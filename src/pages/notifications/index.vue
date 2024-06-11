<script setup lang="ts">
import NotificationPerson from '@/components/NotificationPerson.vue';
</script>
<template>
    <main class="px-5 flex flex-col gap-12 py-12 mt-20">
        <h1 class="text-sm">Dernières notifications</h1>
        <section class="flex flex-col gap-8">
            <NotificationPerson v-for="notif in 7" />
        </section>
    </main>

</template>