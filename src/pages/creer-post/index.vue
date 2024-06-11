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
                        <button class="menuFeed-items" @pointerdown="postTypeSelected = 1">
                            <IconWeekly :class="{ '*:fill-orpink-200 *:stroke-orpink-200': postTypeSelected === 1 }" />
                            <p class="text-sm" :class="{ 'text-orpink-200 font-bold': postTypeSelected === 1 }">
                                Weekly</p>
                        </button>
                    </li>
                    <li>
                        <button to="/reminder" class="menuFeed-items" @pointerdown="postTypeSelected = 2">
                            <IconReminder :class="{ '*:fill-orpink-200': postTypeSelected === 2 }" />
                            <p class="text-sm text-stone-100"
                                :class="{ '!text-orpink-200 font-bold': postTypeSelected === 2 }">Reminder
                            </p>
                        </button>
                    </li>
                </ul>
            </div>
            <textarea class="text-sm text-stone-100 placeholder:text-stone-100 bg-transparent w-full h-fit py-8"
                placeholder="Écrivez votre post..."></textarea>
            <div class="flex justify-between items-center">
                <button>
                    <IconImage />
                </button>
                <Button text="poster" url="/weekly" />
            </div>
        </section>
    </main>
</template>