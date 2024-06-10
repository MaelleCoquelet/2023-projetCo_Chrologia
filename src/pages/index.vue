<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Button from '@/components/Button.vue';
</script>
<template>
    <main class="flex flex-col gap-16 mt-44">
        <header class="flex flex-col gap-6 justify-center items-center px-8">
            <h1 class="text-orpink-200 text-3xl">Connexion</h1>
            <p class="text-sm">Veuillez vous connecter à Chrologia pour accéder au contenu de notre site</p>
        </header>
        <form action="/">
            <fieldset class="flex flex-col gap-6 px-4">
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="email">Adresse mail ou num téléphone *</label>
                    <input
                        class="text-sm placeholder:text-stone-100 border-slate-500 border-4 rounded-md bg-transparent px-3.5 py-3"
                        id="email" type="email" name="email" required placeholder="Ex. azerty@gmail.com">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="mdp">Mot de passe *</label>
                    <input
                        class="text-sm placeholder:text-stone-100 border-slate-500 border-4 rounded-md bg-transparent px-3.5 py-3"
                        id="mdp" type="password" name="mdp" minlength="8" maxlength="20" required
                        placeholder="Ex. Mot_de_passe">
                </div>
            </fieldset>
        </form>
        <div class="flex flex-col px-8 gap-6">
            <div class="flex flex-col gap-3 justify-center items-center">
                <Button text="se connecter" url="/weekly"/>
                <p>ou</p>
                <p>A REMPLACER</p> <!-- A remplacer par le composant de l'api Google -->
            </div>
            <div class="flex gap-2 text-sm font-bold">
                <p>Vous n'avez pas de compte ?</p>
                <RouterLink to="/inscription" class="text-orpink-200">Inscrivez vous</RouterLink>
            </div>
        </div>
    </main>
</template>