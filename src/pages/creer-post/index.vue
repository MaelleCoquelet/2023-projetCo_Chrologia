<script setup lang="ts">
import IconImage from '@/components//icons/IconImage.vue';
import IconCross from '@/components/icons/IconCross.vue';
import IconWeekly from '@/components/icons/IconWeekly.vue';
import IconReminder from '@/components/icons/IconReminder.vue';
import Button from '@/components/Button.vue';
import { ref, computed } from 'vue';

import { useRouter } from 'vue-router';
const router = useRouter()

const postTypeSelected = ref('Weekly')
import { addNewPosts, commentairesPosts, pb } from '@/backend';
import { PostsTypePostsOptions } from '@/pocketbase-types';
console.log(pb.authStore.model)

/* const imageForPb = ref();
const imagePreview = ref<HTMLInputElement | null>(null);
const imageFichier = ref<File | null>(null);
const imageUrl = computed(() => imageFichier.value ? URL.createObjectURL(imageFichier.value) : '')

function ajoutImage(e: any) {
    if (e.target) { imageForPb.value = e.target.files[0] }
    imagePreview.value = e.target as HTMLInputElement;
    if (imagePreview.value.files && imagePreview.value.files.length > 0) {
        imageFichier.value = imagePreview.value.files[0]
    }
} */

const post_response = ref({
    imagePost: '',
    textePost: '',
    favoriNb: 0,
    commentaireNb: 0,
    hiddenPost: false,
    createur: pb.authStore.model?.id,
    statutLike: 0,
    typePosts: postTypeSelected,
    datePost: '',
})

const sendPost = async () => {
    addNewPosts(post_response.value)
    alert('Votre message a bien été envoyé !')
    router.replace('/profil')
}



</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12">
        <header class="flex items-center justify-between pb-3 border-b border-slate-500">
            <RouterLink to="/weekly">
                <IconCross />
            </RouterLink>
            <h1 class="text-stone-100 text-xl text-center">
                Poster
            </h1>
            <div></div>
        </header>
        <section>
            <div class="flex flex-col gap-6">
                <div class="flex items-center justify-center">
                    <img class="rounded-full h-16" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
                </div>
                <h2 class="text-stone-100 text-sm font-normal">Créez votre reminder ou votre weekly !</h2>
                <ul class="flex justify-around">
                    <li>
                        <button class="menuFeed-items" @pointerdown="postTypeSelected = 'Weekly'">
                            <IconWeekly
                                :class="{ '*:fill-orpink-200 *:stroke-orpink-200': postTypeSelected === 'Weekly' }" />
                            <p class="text-sm" :class="{ 'text-orpink-200 font-bold': postTypeSelected === 'Weekly' }">
                                Weekly</p>
                        </button>
                    </li>
                    <li>
                        <button to="/reminder" class="menuFeed-items" @pointerdown="postTypeSelected = 'Reminder'">
                            <IconReminder :class="{ '*:fill-orpink-200': postTypeSelected === 'Reminder' }" />
                            <p class="text-sm text-stone-100"
                                :class="{ '!text-orpink-200 font-bold': postTypeSelected === 'Reminder' }">Reminder
                            </p>
                        </button>
                    </li>
                </ul>
            </div>
            <textarea class="text-sm text-stone-100 placeholder:text-stone-100 bg-transparent w-full h-fit py-8"
                placeholder="Écrivez votre post..." v-model="post_response.textePost"></textarea>
            <div class="flex justify-between items-center">
                <div>
                    <IconImage />
                </div>
                <Button @pointerdown="sendPost()" text="poster" url="/weekly" />
            </div>
        </section>
    </main>
</template>