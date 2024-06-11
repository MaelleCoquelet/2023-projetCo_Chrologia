<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCross from '@/components/icons/IconCross.vue';



</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12">
        <header class="flex items-center justify-between pb-3 border-b border-slate-500">
            <RouterLink to="/parametres">
                <IconCross />
            </RouterLink>
            <h1 class="text-stone-100 text-xl text-center">
                Politiques relatives aux cookies
            </h1>
            <div></div>
        </header>
    </main>
</template>