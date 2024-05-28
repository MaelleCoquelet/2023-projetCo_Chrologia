<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import IconLike from '@/components/icons/IconLike.vue';
import IconComment from '@/components/icons/IconComment.vue';
import IconEmoji from '@/components/icons/IconEmoji.vue';
import IconMore from '@/components/icons/IconMore.vue';

const activeText = ref(false)
</script>
<template>
    <article>
        <div>
            <RouterLink to="/">
                <img class="rounded-full h-8" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
                <p>Nom Utilisateur</p>
            </RouterLink>
            <IconMore />
        </div>
        <div class="flex gap-1">
            <p class="">Début de la description ici
                <span class="text-orpink-200 contents" @click="activeText = !activeText"
                    :class="{ '!hidden': activeText }">...voir plus</span>
            </p>
            <p class="hidden" :class="{ '!contents': activeText }">
                fin de la description ici.
            </p>
        </div>
        <div><img src="" alt=" Photo Ici">
        </div>
        <ul>
            <li>
                <IconLike />
                <p>nb Like</p>
            </li>
            <li>
                <IconComment />
                <p>nb Comments</p>
            </li>
            <li>
                <IconEmoji />
            </li>
        </ul>
    </article>
</template>
