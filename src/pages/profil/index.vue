<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CardWeekly from '@/components/CardWeekly.vue';
</script>
<template>
    <main class="px-5 flex flex-col gap-12 py-12 mt-20">
        <div>
            <img src="/src/assets/img/palicoMHW.webp" alt="Bannière de profil">
            <img class="rounded-full h-8" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
            <button>éditer le profil</button>
            <div>
                <div>
                    <p>Amis<span>2</span></p>
                </div>
                <div>
                    <p>Posts<span>2</span></p>
                </div>
                <div>
                    <p>Likes<span>2</span></p>
                </div>
            </div>
        </div>
        <p>Reminder</p>
        <p>Weekly</p>
        <CardWeekly v-for="post in 5" />
    </main>
</template>
