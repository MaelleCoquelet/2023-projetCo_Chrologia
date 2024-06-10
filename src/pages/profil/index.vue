<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CardWeekly from '@/components/CardWeekly.vue';
import Button from '@/components/Button.vue';
</script>
<template>
    <main class="flex flex-col py-12 mt-20 mb-20">
        <div>
            <img class="h-[116px] w-full object-cover" src="/src/assets/img/palicoMHW.webp" alt="Bannière de profil">
            <div class="flex justify-between px-5">
                <img class="rounded-full h-20 relative top-[-40px]" src="/src/assets/img/palicoMHW.webp"
                    alt="Photo de profil">
                <Button text="éditer le profil" variant="dark" class="w-fit h-fit translate-y-2" url="#"/>
            </div>
        </div>
        <div class="flex justify-evenly gap-3 px-5 pb-6">
            <RouterLink to="" class="flex flex-col flex-1 justify-center items-center rounded gap-1 p-2 bg-slate-900">
                <p class="font-bold">Amis</p>
                <p>3</p>
            </RouterLink>
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
    </main>
</template>
