<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconBell from './icons/IconBell.vue';
import IconLetter from './icons/IconLetter.vue';
import IconPlus from './icons/IconPlus.vue';
import IconSearch from './icons/IconSearch.vue';

</script>
<template>
    <footer class="fixed z-10 w-full bottom-0">
        <nav>
            <ul class=" bg-slate-900 flex px-8 py-2 justify-between">
                <div class="footer-items">
                    <li>
                        <RouterLink to="/">
                            <IconBell />
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/">
                            <IconSearch />
                        </RouterLink>
                    </li>
                </div>
                <div class=" -translate-y-8 ">
                    <li class="bg-red-200 p-2 rounded-full">
                        <RouterLink to="/">
                            <IconPlus />
                        </RouterLink>
                    </li>
                </div>
                <div class="footer-items">
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
                </div>
            </ul>
        </nav>
    </footer>
</template>