<script setup lang="ts">
import NotificationPerson from '@/components/NotificationPerson.vue';
import { allUtilisateurs } from '@/backend';

const usersListe = await allUtilisateurs()
</script>
<template>
    <main class="px-5 flex flex-col gap-12 py-12 mt-20">
        <h1 class="text-sm">Dernières notifications</h1>
        <section class="flex flex-col gap-8">
            <NotificationPerson v-for="notif in usersListe" v-bind="notif" :key="notif.id" />
        </section>
    </main>

</template>