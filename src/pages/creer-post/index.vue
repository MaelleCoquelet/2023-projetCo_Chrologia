<script setup lang="ts">
import IconImage from '@/components//icons/IconImage.vue';
import IconCross from '@/components/icons/IconCross.vue';
import IconWeekly from '@/components/icons/IconWeekly.vue';
import IconReminder from '@/components/icons/IconReminder.vue';
import Button from '@/components/Button.vue';
import { ref } from 'vue';

const postTypeSelected = ref(1)

</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12">
        <header class="flex items-center justify-between pb-3 border-b border-slate-500">
            <RouterLink to="/parametres">
                <IconCross />
            </RouterLink>
            <h1 class="text-stone-100 text-xl text-center">
                Poster
            </h1>
            <div></div>
        </header>
        <section>
            <div>
                <img class="rounded-full h-16" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
            </div>
            <h1>Créez votre reminder ou votre weekly !</h1>
            <ul class="flex justify-around">
                <li>
                    <button class="menuFeed-items" @pointerdown="postTypeSelected = 1">
                        <IconWeekly :class="{ '*:fill-orpink-200 *:stroke-orpink-200': postTypeSelected === 1 }" />
                        <h1 class="text-sm" :class="{ 'text-orpink-200 font-bold': postTypeSelected === 1 }">
                            Weekly</h1>
                    </button>
                </li>
                <li>
                    <button to="/reminder" class="menuFeed-items" @pointerdown="postTypeSelected = 2">
                        <IconReminder :class="{ '*:fill-orpink-200': postTypeSelected === 2 }" />
                        <h2 class="text-sm text-stone-100"
                            :class="{ '!text-orpink-200 font-bold': postTypeSelected === 2 }">Reminder
                        </h2>
                    </button>
                </li>
            </ul>
            <textarea class="text-sm text-stone-100 placeholder:text-stone-100 bg-transparent"
                placeholder="Écrivez votre message ici"></textarea>
            <div>
                <button>
                    <IconImage />
                </button>
                <Button />
            </div>
        </section>
    </main>
</template>