<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCross from '@/components/icons/IconCross.vue';
</script>
<template>
    <section class="fixed z-10 top-52 bg-slate-700 p-5 mx-6 flex flex-col gap-6">
        <IconCross />
        <h3 class="text-xl text-stone-100">
            PLACEHOLDER TITLE
        </h3>
        <p>Chrologia utilise des cookies et des technologies similaires pour vous aider à personnaliser votre contenu et
            vos publicités au maximum, vous offrant ainsi une meilleure expérience. </p>
        <p>Chrologia utilise des cookies et des technologies similaires pour vous aider à personnaliser votre contenu et
            vos publicités au maximum, vous offrant ainsi une meilleure expérience.<span>
                En autorisant les cookies, vous acceptez la <RouterLink to="">politique relative aux cookies</RouterLink>.
                Pour plus d'informations sur les cookies, veuillez vous référer à la page sur la <RouterLink to="">
                    politique relative aux cookies. </RouterLink></span></p>
        <div>
            <button>Autoriser tous les cookies</button>
            <button>Refuser les cookies</button>
        </div>
    </section>
</template>
