<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import IconLike from '@/components/icons/IconLike.vue';
import IconComment from '@/components/icons/IconComment.vue';
import IconMore from '@/components/icons/IconMore.vue';
import IconCross from './icons/IconCross.vue';
import IconUnfollow from './icons/IconUnfollow.vue';
import IconBlock from './icons/IconBlock.vue';
import IconEye from './icons/IconEye.vue';
import IconFlag from './icons/IconFlag.vue';


const activeText = ref(false)
const parametrePostOpen = ref(false)
</script>
<template>
    <article class="flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <RouterLink to="/" class="flex gap-3 items-center">
                <img class="rounded-full h-8" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
                <p>Nom Utilisateur</p>
            </RouterLink>
            <IconMore @click="parametrePostOpen = !parametrePostOpen" />
        </div>
        <img src="" alt=" Photo Ici">
        <div class="flex gap-1">
            <p class="">Début de la description ici
                <span class="text-orpink-200 contents" @click="activeText = !activeText"
                    :class="{ '!hidden': activeText }">...voir plus</span>
            </p>
            <p class="hidden" :class="{ '!contents': activeText }">
                fin de la description ici.
            </p>
        </div>
        <ul class="flex justify-center gap-20">
            <li class="flex gap-2 items-center">
                <IconLike />
                <p>12</p>
            </li>
            <li class="flex gap-2 items-center">
                <IconComment />
                <p>4</p>
            </li>
        </ul>
        <section class="hidden py-11 rounded-t flex-col *:py-6 divide-y bg-slate-700 divide-slate-500 px-5 -translate-x-5 fixed z-20 bottom-0 w-full"
            :class="{ '!flex': parametrePostOpen }">
            <div class="flex items-center justify-between pb-3 border-b border-slate-500">
                <IconCross />
                <h3 class="text-white text-xl text-center">
                    Paramètres du post
                </h3>
                <div></div>
            </div>
            <div class="flex flex-col gap-6">
                <h4 class="text-white text-sm text-bold">Infos du post</h4>
                <div class="flex flex-row justify-center gap-6">
                    <p class="flex flex-col justify-center items-center gap-1">Date de création<span>DATE</span></p>
                    <p class="flex flex-col justify-center items-center gap-1">Date de publication<span>DATE</span></p>
                </div>
            </div>
            <div class="flex flex-col gap-6 justify-start items-start">
                <button class="flex gap-6 items-center">
                    <IconUnfollow />
                    <p>Ne plus suivre l’utilisateur</p>
                </button>
                <button class="flex gap-6 items-center">
                    <IconBlock />
                    <p>Bloquer l’utilisateur</p>
                </button>
                <button class="flex gap-6 items-center">
                    <IconEye />
                    <p>Masquer le post</p>
                </button>
            </div>
            <button class="flex gap-6 items-center">
                <IconFlag />
                <p>Signaler le post</p>
            </button>
        </section>
    </article>
</template>
