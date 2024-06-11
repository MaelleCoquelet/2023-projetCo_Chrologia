<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CardWeekly from '@/components/CardWeekly.vue';
import Button from '@/components/Button.vue';
import IconCross from '@/components/icons/IconCross.vue';
import AddPerson from '@/components/AddPerson.vue';
import { ref } from 'vue';
const overlayAmisOpen = ref(1)
</script>
<template>
    <main class="flex flex-col py-12 mt-20 mb-20">
        <div>
            <img class="h-[116px] w-full object-cover" src="/src/assets/img/palicoMHW.webp" alt="Bannière de profil">
            <div class="flex justify-between px-5">
                <img class="rounded-full h-20 relative top-[-40px]" src="/src/assets/img/palicoMHW.webp"
                    alt="Photo de profil">
                <Button text="éditer le profil" variant="dark" class="w-fit h-fit translate-y-2" url="#" />
            </div>
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
                <p class="">Reminder</p>
                <p class="">Weekly</p>
            </div>
            <CardWeekly v-for="post in 5" />
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
                <AddPerson v-for="notif in 7" />
            </div>
        </section>
    </main>
</template>
