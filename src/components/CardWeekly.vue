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
import IconSend from './icons/IconSend.vue';
import Commentaire from '@/components/Commentaire.vue';
import ImgPb from './ImgPb.vue';
import { oneUtilisateur } from '@/backend';
import { type PostsResponse, type UsersResponse } from '@/pocketbase-types';
/* const oneUserId: UsersResponse<any> = await oneUtilisateur('6nc3c6ptunkazl3') */
const props = defineProps<PostsResponse>()
const overlayOpen = ref(0)
console.log((props.expand as any).createur)
</script>
<template>
    <article class="flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <RouterLink to="/" class="flex gap-3 items-center">
                <ImgPb :record="(props.expand as any).createur" :filename="(props.expand as any).createur.photoProfil" :height="32"
                    :width="32" class="rounded-full" />
                <p>{{ createur }}</p>
            </RouterLink>
            <IconMore @pointerdown="overlayOpen = 1" />
        </div>
        <ImgPb :record="props" :filename="imagePost" />
        <div class="flex gap-1 overflow-auto break-all">
            <p class="">{{ textePost }}
            </p>
        </div>
        <ul class="flex justify-center gap-20">
            <li class="flex gap-2 items-center">
                <IconLike />
                <p>{{ favoriNb }}</p>
            </li>
            <li class="flex gap-2 items-center">
                <IconComment @pointerdown="overlayOpen = 2" />
                <p>{{ commentaireNb }}</p>
            </li>
        </ul>
        <section
            class="hidden py-11 rounded-t flex-col *:py-6 divide-y bg-slate-700 divide-slate-500 px-5 -translate-x-5 fixed z-20 bottom-0 w-full"
            :class="{ '!flex': overlayOpen == 1 }">
            <header class="flex items-center justify-between pb-3 border-b border-slate-500">
                <IconCross @pointerdown="overlayOpen = 0" />
                <h3 class="text-stone-100 text-xl text-center">
                    Paramètres du post
                </h3>
                <div></div>
            </header>
            <div class="flex flex-col gap-6">
                <h4 class="text-stone-100 text-sm text-bold">Infos du post</h4>
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

        <section
            class="hidden py-6 rounded-t flex-col gap-6 border-b border-slate-500 bg-slate-700 px-5 -translate-x-5 fixed z-30 bottom-0 w-full"
            :class="{ '!flex': overlayOpen == 2 }">
            <header class="flex items-center justify-between pb-3 border-b border-slate-500">
                <IconCross @pointerdown="overlayOpen = 0" />
                <h3 class="text-stone-100 text-xl text-center">
                    Commentaires
                </h3>
                <div></div>
            </header>
            <div class="flex flex-col gap-6 max-h-screen overflow-scroll">
                <Commentaire v-for="commentaire in 8" />
            </div>
            <div class="flex items-center justify-between gap-2">
                <img class="rounded-full h-10" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
                <input
                    class="text-sm text-stone-100 placeholder:text-stone-100 in bg-slate-900 rounded-md px-3 py-[6px] overflow-auto break-all w-full"
                    required placeholder="Saisir le message">
                <button>
                    <IconSend />
                </button>
            </div>
        </section>
    </article>
</template>
