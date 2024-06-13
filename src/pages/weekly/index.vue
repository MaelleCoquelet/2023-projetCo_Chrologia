<script setup lang="ts">
import { RouterLink } from 'vue-router';
import MenuFeed from '@/components/MenuFeed.vue';
import CardWeekly from '@/components/CardWeekly.vue';
import CookiesPop from '@/components/CookiesPop.vue';
import { allWeeklyByUtilisateursId, allAmisByUtilisateursId } from '@/backend';
const weeklyListe = await allWeeklyByUtilisateursId('6nc3c6ptunkazl3')

import { pb } from '@/backend';
console.log(pb.authStore.model)

</script>
<template>
    <MenuFeed />
    <CookiesPop />
    <main class="flex flex-col gap-12 py-12 mt-44 mb-20 px-5">
        <CardWeekly v-for="weekly in weeklyListe" v-bind="weekly" :key="weekly.id"/>
    </main>
</template>
