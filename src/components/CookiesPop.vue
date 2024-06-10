<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCross from '@/components/icons/IconCross.vue';
import { ref } from 'vue';
import Button from './Button.vue';

const openCookies = ref(true);
</script>
<template>
    <section class="fixed z-10 top-52 bg-slate-700 p-5 mx-6 flex flex-col gap-6" :class="{ 'hidden': !openCookies }">
        <IconCross @click="openCookies = !openCookies" />
        <h3 class="text-xl text-stone-100">
            Autoriser les cookies sur ce navigateur ? </h3>
        <p>Chrologia utilise des cookies et des technologies similaires pour vous aider à personnaliser votre contenu et
            vos publicités au maximum, vous offrant ainsi une meilleure expérience. </p>
        <p class="flex flex-col">Chrologia utilise des cookies et des technologies similaires pour vous aider à
            personnaliser votre contenu et
            vos publicités au maximum, vous offrant ainsi une meilleure expérience.<span>
                En autorisant les cookies, vous acceptez la <RouterLink to="/" class="text-orpink-200 underline">
                    politique relative aux cookies</RouterLink>.
                Pour plus d'informations sur les cookies, veuillez vous référer à la page sur la <RouterLink to="/"
                    class="text-orpink-200 underline">
                    politique relative aux cookies. </RouterLink></span></p>
        <div class="flex flex-col gap-3">
            <Button @click="openCookies = !openCookies" url="/weekly" text="Autoriser tous les cookies" />
            <Button @click="openCookies = !openCookies" url="/weekly" variant="dark" text="Refuser tous les cookies" />
        </div>
    </section>
</template>
