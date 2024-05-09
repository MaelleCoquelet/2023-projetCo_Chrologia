<script setup lang="ts">

import { RouterLink } from 'vue-router';
import IconBell from './icons/IconBell.vue';
import IconLetter from './icons/IconLetter.vue';
import IconPlus from './icons/IconPlus.vue';
import IconSearch from './icons/IconSearch.vue';

</script>
<template>
    <footer>
        <ul>
            <div>
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
            <div>
                <li>
                    <RouterLink to="/">
                        <IconPlus />
                    </RouterLink>
                </li>
            </div>
            <div>
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