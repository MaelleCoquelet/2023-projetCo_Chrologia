<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconHome from '@/components/icons/IconHome.vue';
import IconLetter from '@/components/icons/IconLetter.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import IconSearch from '@/components/icons/IconSearch.vue';

</script>
<template>
    <footer class="fixed z-10 w-full bottom-0">
        <nav>
            <ul class=" bg-slate-900 flex px-8 py-2 justify-between">

                <li>
                    <RouterLink to="/">
                        <IconHome />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <IconSearch />
                    </RouterLink>
                </li>


                <li class="bg-orpink-200 p-2 rounded-full -translate-y-8">
                    <RouterLink to="/">
                        <IconPlus />
                    </RouterLink>
                </li>


                <li>
                    <RouterLink to="/">
                        <IconLetter />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/">
                        <img class="rounded-full h-8" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
                    </RouterLink>
                </li>

            </ul>
        </nav>
    </footer>
</template>