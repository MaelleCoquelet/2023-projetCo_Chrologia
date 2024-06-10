<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCross from '@/components/icons/IconCross.vue';
import Button from '@/components/Button.vue';
</script>
<template>


    <main class="px-5 flex flex-col gap-6 py-12 mt-20 mb-20">
        <header class="flex items-center justify-between pb-3 border-b border-slate-500">
            <IconCross />
            <h1 class="text-stone-100 text-xl text-center">
                À propos
            </h1>
            <div></div>
        </header>
        <section class="flex flex-col gap-3">
            <h2 class="text-xl text-orpink-200 font-bold">Qui sommes nous&nbsp;?</h2>
            <p>Nous sommes trois étudiants en MMI (Métiers du Multimédia et de l'Internet) et avons élaboré ce
                projet dans le cadre de nos études. Notre ambition était de concevoir un concept novateur destiné à
                révolutionner la vie quotidienne de nombreux groupes d'amis. Nous avons mis en commun nos
                compétences en design, en développement web et en communication pour donner vie à cette idée. Notre
                objectif était de créer une solution pratique et attrayante, parfaitement adaptée aux besoins et aux
                habitudes de notre génération. Après des mois de recherche, de conception et de développement, nous
                sommes fiers de présenter le fruit de notre travail&nbsp;: Chrologia qui révolutionne la façon dont
                les
                amis interagissent ensemble.</p>

        </section>


        <section class="flex flex-col gap-6">
            <header class="flex flex-col gap-3">
                <h2 class="text-xl text-orpink-200 font-bold">Formulaire de contact</h2>
                <p>Une question ? Une remarque ? N’hésitez pas à nous contacter par le biais de notre formulaire dédié.
                    Vous pouvez aussi nous adresser un message en nous rejoignant sur LinkedIn, Instagram et X.</p>
            </header>
            <form action="/" class="flex flex-col gap-6">
                <fieldset class="flex flex-col gap-6">
                    <h3 class="text-xl text-stone-100 pb-2">Informations Personnelles</h3>
                    <div class="flex flex-col gap-3">
                        <label class="text-stone-100 font-bold text-sm" for="prenom">Prénom *</label>
                        <input
                            class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                            id="prenom" type="text" name="prenom" required placeholder="Ex. Toru">
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="text-stone-100 font-bold text-sm" for="nom">Nom *</label>
                        <input
                            class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                            id="nom" type="text" name="nom" required placeholder="Ex. Oikawa">
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="text-stone-100 font-bold text-sm" for="email">Adresse mail *</label>
                        <input
                            class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                            required placeholder="Ex. greatestvillain@gmail.com">
                    </div>
                </fieldset>
                <fieldset class="flex flex-col gap-6">
                    <h3 class="text-xl text-stone-100">Message</h3>

                    <div class="flex flex-col gap-3">
                        <label class="text-stone-100 font-bold text-sm" for="email">Objet&nbsp;*</label>
                        <input
                            class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                            placeholder="Problème technique">
                    </div>
                    <div class="flex flex-col gap-3">
                        <label class="text-stone-100 font-bold text-sm" for="email">Message&nbsp;*</label>
                        <textarea
                            class="text-sm text-stone-100 placeholder:text-stone-100 border-slate-500 border-2 rounded-md bg-transparent px-3.5 py-3"
                            placeholder="Écrivez votre message ici"></textarea>
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
                                Confidentialité</RouterLink> *</label>
                    </div>
                    <div class="flex gap-8">
                        <input type="checkbox" id="data" name="data">
                        <label for="data">En cochant cette case, j'autorise Chrologia à partager mes données
                            personnelles
                            avec des partenaires dans le cadre de
                            ses activités marketing et commerciales, dans le respect de sa <RouteurLink
                                class="text-orpink-200 underline" to="/parametres/politique-confidentialite">Politique
                                de
                                Confidentialité</RouteurLink></label>
                    </div>
                    <div class="">
                        <div class="">
                            <button
                                class="inline-flex text-center px-4 py-2 bg-orpink-200 text-slate-900 text-sm font-bold uppercase items-center justify-center rounded-md transition duration-300 ease-in-out">Envoyer</button>
                        </div>
                    </div>
                    <div class="">
                        <p class="">*&nbsp;champs obligatoires</p>
                    </div>
                </div>
            </form>
        </section>
    </main>
</template>