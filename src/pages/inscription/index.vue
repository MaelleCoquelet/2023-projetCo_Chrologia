<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconLogo from '@/components/icons/IconLogo.vue';
import Button from '@/components/Button.vue';


</script>
<template>
    <header
        class="flex flex-col gap-6 justify-center items-center pt-11 pb-3 px- border-b-[1px] bg-slate-700 border-slate-500 fixed z-10 w-full top-0">
        <h1 class="text-xl">Inscription</h1>
    </header>
    <main class="mt-20 mb-20 flex flex-col gap-16">
        <div class="flex flex-col items-center gap-6 pt-12">
            <IconLogo />
            <p class="text-sm text-center">Inscrivez-vous sur Chrologia afin d’avoir accès aux différents contenus de
                vos amis.</p>
        </div>
        <form action="/" class="px-4 flex flex-col gap-12">
            <fieldset class="flex flex-col gap-6">
                <h2 class="text-xl text-orpink-200 pb-2">Informations Personnelles</h2>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="prenom">Prénom&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="prenom" type="text" name="prenom" required placeholder="Ex. Shoyo">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="nom">Nom&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="nom" type="text" name="nom" required placeholder="Ex. Hinata">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="date">Date de Naissance&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="dateDeNaissance" type="date" name="dateDeNaissance" required>
                </div>
            </fieldset>
            <fieldset class="flex flex-col gap-6">
                <h2 class="text-xl text-orpink-200">Contact</h2>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="email">Adresse mail&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="email" type="email" name="email" required placeholder="Ex. azerty@gmail.com">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="email">Téléphone&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="telephone" type="tel" name="telephone" placeholder="Ex. 08 20 20 20 20">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="mdp">Mot de passe&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="mdp" type="password" name="mdp" minlength="8" maxlength="20" required
                        placeholder="Ex. Mot_de_passe">
                </div>
            </fieldset>
            <fieldset class="flex flex-col gap-6">
                <h2 class="text-xl text-orpink-200">Compte</h2>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="prenom">Nom d'utilisateur&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="pseudo" type="text" name="pseudo" required placeholder="Ex. HighFly">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="mdp">Mot de passe&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="mdp" type="password" name="mdp" minlength="8" maxlength="20" required
                        placeholder="Ex. Mot_de_passe">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="mdp">Confirmation mot de passe&nbsp;*</label>
                    <input
                        class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                        id="mdp" type="password" name="mdp" minlength="8" maxlength="20" required
                        placeholder="Ex. Mot_de_passe">
                </div>
            </fieldset>
            <div class="text-white text-xs flex flex-col gap-8 items-center px-8">
                <div class="flex gap-8">
                    <input type="checkbox" id="cguPdc" name="cguPdc" required>
                    <label for="cguPdc">En cochant cette case j’accepte les <RouterLink
                            to="/parametres/conditions-utilisation" class="text-orpink-200 underline">Conditions
                            d’utilisation</RouterLink> et la <RouterLink to="/parametres/politique-confidentialite"
                            class="text-orpink-200 underline">
                            Politique de
                            Confidentialité</RouterLink>&nbsp;*</label>
                </div>
                <div class="flex gap-8">
                    <input type="checkbox" id="data" name="data">
                    <label for="data">En cochant cette case, j'autorise Chrologia à partager mes données
                        personnelles
                        avec des partenaires dans le cadre de
                        ses activités marketing et commerciales, dans le respect de sa <RouteurLink
                            class="text-orpink-200 underline" to="/parametres/politique-confidentialite">Politique de
                            Confidentialité</RouteurLink></label>
                </div>
                <div class="">
                    <div class="">
                        <Button url="/" text="s'inscrire" />
                    </div>
                </div>
                <div class="">
                    <p class="">*&nbsp;champs obligatoires</p>
                </div>
            </div>
        </form>
    </main>
</template>