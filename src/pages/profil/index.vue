<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CardWeekly from '@/components/CardWeekly.vue';
import Button from '@/components/Button.vue';
import IconCross from '@/components/icons/IconCross.vue';
import AddPerson from '@/components/AddPerson.vue';
import ImgPb from '@/components/ImgPb.vue';
import { ref } from 'vue';
import { type UsersResponse } from '@/pocketbase-types';
import { allReminderByUtilisateursId, allWeeklyByUtilisateursId, oneUtilisateur, allAmisByUtilisateursId } from '@/backend';
import CardReminder from '@/components/CardReminder.vue';

const oneUserId: UsersResponse<any> = await oneUtilisateur('6nc3c6ptunkazl3')
const userWeeklyListe = await allWeeklyByUtilisateursId(pb.authStore.model?.id)
const userReminderListe = await allReminderByUtilisateursId(pb.authStore.model?.id)
const overlayAmisOpen = ref(0)
const contentDisplay = ref('weekly')

const amisListe = await allAmisByUtilisateursId(pb.authStore.model?.id)

import { pb } from '@/backend';
console.log(pb.authStore.model)

</script>
<template>
    <main class="flex flex-col py-12 mt-20 mb-20">
        <div>
            <img class="h-[116px] w-full object-cover" src="/src/assets/img/palicoMHW.webp" alt="Bannière de profil">
            <div class="flex justify-between px-5">
                <!-- <img class="rounded-full h-20 relative top-[-40px]" src="/src/assets/img/palicoMHW.webp"
                    alt="Photo de profil"> -->
                <ImgPb :height="20" :width="20" :record="props" :filename="pb.authStore.model?.photoProfil"
                    class="rounded-full relative top-[40px]" />
                <Button text="éditer le profil" variant="dark" class="w-fit h-fit translate-y-2" url="#" />
            </div>
            <p class="px-5 pb-6 font-bold">{{ pb.authStore.model?.username }}</p>
        </div>
        <div class="flex justify-evenly gap-3 px-5 pb-6">
            <button @pointerdown="overlayAmisOpen = 1"
                class="flex flex-col flex-1 justify-center items-center rounded gap-1 p-2 bg-slate-900">
                <p class="font-bold">Amis</p>
                <p>3</p>
            </button>
            <div class="flex flex-col flex-1 justify-center items-center rounded gap-1 p-2 bg-slate-900">
                <p class="font-bold">Posts</p>
                <p>4</p>
            </div>
            <div class="flex flex-col flex-1 justify-center items-center rounded gap-1 p-2 bg-slate-900">
                <p class="font-bold">Likes</p>
                <p>8</p>
            </div>
        </div>
        <div class="px-5 flex flex-col gap-12">
            <div class="flex justify-around font-bold">
                <p class="cursor-pointer" :class="{ 'text-orpink-200': contentDisplay === 'weekly' }"
                    @pointerdown="contentDisplay = 'weekly'">Reminder</p>
                <p class="cursor-pointer" :class="{ 'text-orpink-200': contentDisplay === 'reminder' }"
                    @pointerdown="contentDisplay = 'reminder'">Weekly</p>
            </div>
            <CardWeekly class="hidden" :class="{ '!flex': contentDisplay === 'weekly' }"
                v-for="weekly in userWeeklyListe" v-bind="weekly" :key="weekly.id"
                :createur="pb.authStore.model?.username" />
            <CardReminder class="hidden" :class="{ '!flex': contentDisplay === 'reminder' }"
                v-for="reminder in userReminderListe" v-bind="reminder" :key="reminder.id" :createur="pb.authStore.model?.username"/>
        </div>
        <section class="hidden px-5 flex-col gap-12 py-12 top-0 z-20 h-screen fixed w-full bg-slate-700"
            :class="{ '!flex': overlayAmisOpen === 1 }">
            <header class="flex items-center justify-between pb-3 border-b border-slate-500">
                <IconCross class="hover:cursor-pointer" @pointerdown="overlayAmisOpen = 0" />
                <h1 class="text-stone-100 text-sm text-center">
                    Liste d'ami(e)s
                </h1>
                <div></div>
            </header>
            <div class="flex flex-col gap-6">
                <AddPerson v-for="ami in amisListe" v-bind="ami" :key="ami.id" />
            </div>
        </section>
    </main>
</template>