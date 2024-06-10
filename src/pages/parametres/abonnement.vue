<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCross from '@/components/icons/IconCross.vue';
import Button from '@/components/Button.vue';
</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12 mt-20">
        <header class="flex items-center justify-between pb-3 border-b border-slate-500">
            <IconCross />
            <h1 class="text-stone-100 text-xl text-center">
                Abonnement
            </h1>
            <div></div>
        </header>
        <section>
            <div>
                <h2>Chrologia +</h2>
                <p>Profitez pleinement de notre abonnement premium, Chrologia +, pour partager encore plus de contenu et
                    bénéficier d'interactions plus personnalisées.</p>
            </div>
            <div>
                <h3>Avantages</h3>
                <ul>
                    <li>Envie de partager davantage ? Poster plus fréquemment au moment du Reminder (4 maximum)</li>
                    <li>Personnalisation complète du profil (bannière et bio).</li>
                    <li>Profitez d'une expérience sans publicités</li>
                </ul>
            </div>
            <div>
                <h3>Abonnement mensuel sur Chrologia</h3>
                <p>4,99€ / mois</p>
                <Button text="S'abonner" />
            </div>
            <p>En cliquant sur S'abonner, vous acceptez nos
                <RouterLink to="">Conditions générales de ventes</RouterLink>.
            </p>
        </section>
    </main>
</template>