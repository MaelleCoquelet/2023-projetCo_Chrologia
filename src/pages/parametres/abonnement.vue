<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCross from '@/components/icons/IconCross.vue';
import Button from '@/components/Button.vue';
</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12 mt-20">
        <header class="flex items-center justify-between pb-3 border-b border-slate-500">
            <RouterLink to="/parametres">
                <IconCross />
            </RouterLink>
            <h1 class="text-stone-100 text-xl text-center">
                Abonnement
            </h1>
            <div></div>
        </header>
        <section class="flex flex-col gap-12">
            <div class="flex flex-col gap-6">
                <h2 class="text-xl text-orpink-200 font-bold text-center">Chrologia&nbsp;+</h2>
                <p>Profitez pleinement de notre abonnement premium, Chrologia +, pour partager encore plus de contenu et
                    bénéficier d'interactions plus personnalisées.</p>
            </div>
            <div class="flex flex-col gap-6">
                <h3 class="text-sm font-bold text-stone-100">Avantages</h3>
                <ul class="text-stone-100 text-sm flex flex-col gap-2 list-disc pl-2">
                    <li>Envie de partager davantage ? Poster plus fréquemment au moment du Reminder (4 maximum)</li>
                    <li>Personnalisation complète du profil (bannière et bio).</li>
                    <li>Profitez d'une expérience sans publicités</li>
                </ul>
            </div>
            <div class="flex flex-col gap-8 justify-center items-center">
                <h3 class="text-sm font-bold text-center text-stone-100">Abonnement mensuel sur Chrologia</h3>
                <p class="text-3xl font-semibold text-orpink-200 ">4,99€&nbsp;/&nbsp;mois</p>
                <Button text="S'abonner" />
            </div>
            <p>En cliquant sur S'abonner, vous acceptez nos
                <RouterLink to="/parametres/conditions-vente" class="text-orpink-200 underline">Conditions générales de
                    ventes</RouterLink>.
            </p>
        </section>
    </main>
</template>