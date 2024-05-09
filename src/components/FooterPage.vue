<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconBell from './icons/IconBell.vue';
import IconLetter from './icons/IconLetter.vue';
import IconPlus from './icons/IconPlus.vue';
import IconSearch from './icons/IconSearch.vue';

</script>
<template>
    <footer class="relative" >
        <ul class=" bg-slate-900 flex px-8 py-4 justify-between">
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
            <div class="bg-red-200 p-2 rounded-full absolute -top-1/3 translate-x-full">
                <li>
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
                        <div></div>
                    </RouterLink>
                </li>
            </div>
        </ul>
    </footer>
</template>