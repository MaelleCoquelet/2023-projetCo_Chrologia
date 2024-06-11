<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconHome from '@/components/icons/IconHome.vue';
import IconNotif from '@/components/icons/IconNotif.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import IconSearch from '@/components/icons/IconSearch.vue';

</script>
<template>
    <footer class="fixed z-10 w-full bottom-0">
        <nav>
            <ul class=" bg-slate-900 flex px-8 py-2 justify-between">

                <li>
                    <RouterLink to="/weekly">
                        <IconHome />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/notifications">
                        <IconNotif />
                    </RouterLink>
                </li>


                <li class="bg-orpink-200 p-2 rounded-full -translate-y-8">
                    <RouterLink to="/creer-post">
                        <IconPlus />
                    </RouterLink>
                </li>


                <li>
                    <RouterLink to="/rechercher">
                        <IconSearch />
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/profil">
                        <img class="rounded-full h-8" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil">
                    </RouterLink>
                </li>

            </ul>
        </nav>
    </footer>
</template>