<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12 mt-20">
        <nav>
            <ul class="text-stone-100 text-sm flex flex-col gap-8">
                <li class="flex justify-between items-center">
                    <RouterLink to="/">Votre compte</RouterLink>
                    <IconArrow />
                </li>
                <li class="flex justify-between items-center">
                    <RouterLink to="/">Abonnement</RouterLink>
                    <IconArrow />
                </li>
                <li class="flex justify-between items-center">
                    <RouterLink to="/parametres/politique-confidentialite">Politique de confidentialité</RouterLink>
                    <IconArrow />
                </li>
                <li class="flex justify-between items-center">
                    <RouterLink to="/parametres/conditions-utilisation">Conditions d'utilisation</RouterLink>
                    <IconArrow />
                </li>
                <li class="flex justify-between items-center">
                    <RouterLink to="/parametres/conditions-vente">Conditions générales de vente</RouterLink>
                    <IconArrow />
                </li>
                <li class="flex justify-between items-center">
                    <RouterLink to="/parametres/politique-cookies">Politique relative aux cookies</RouterLink>
                    <IconArrow />
                </li>
                <li class="flex justify-between items-center">
                    <RouterLink to="/parametres/a-propos">À propos</RouterLink>
                    <IconArrow />
                </li>
            </ul>
        </nav>
    </main>
</template>