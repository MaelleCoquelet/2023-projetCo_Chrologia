<script setup lang="ts">
import AddPerson from '@/components/AddPerson.vue';
import IconSearch from '@/components/icons/IconSearch.vue';

import { allUtilisateurs } from '@/backend';
const usersListe = await allUtilisateurs()

</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12 mt-20">
        <div class="flex items-center bg-slate-900 rounded-md py-1 px-3">
            <IconSearch class="h-4" />
            <input class="text-sm text-stone-100 placeholder:text-stone-100 bg-transparent w-full"
                placeholder="Rechercher"></input>
        </div>
        <section class="flex flex-col gap-8">
            <h1 class="text-sm">Suggestions</h1>
            <div class="flex flex-col gap-6">
                <AddPerson v-for="user in usersListe" v-bind="user" :key="user.id" />
            </div>
        </section>
    </main>
</template>