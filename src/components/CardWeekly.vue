<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import IconLike from '@/components/icons/IconLike.vue';
import IconComment from '@/components/icons/IconComment.vue';
import IconMore from '@/components/icons/IconMore.vue';

const activeText = ref(false)
</script>
<template>
    <article class="flex flex-col gap-6">
        <div class="flex justify-between items-center">
            <RouterLink to="/" class="flex gap-3 items-center">
                <img class="rounded-full h-8" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
                <p>Nom Utilisateur</p>
            </RouterLink>
            <IconMore />
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
    </article>
</template>
