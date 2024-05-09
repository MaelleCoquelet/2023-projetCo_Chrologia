<script setup lang="ts">
import IconLogo from './icons/IconLogo.vue';
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconTwitter from './icons/IconTwitter.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import { RouterLink } from 'vue-router';
</script>
<template>
    <footer class="container">
        <div class="lg:flex lg:flex-row lg:justify-around">
            <div class="py-12">
                <IconLogo />
            </div>
            <nav class="grid grid-rows-3 grid-flow-col gap-8 pb-16 lg:grid-rows-2">
                <div>
                    <h3>SELL A HOME</h3>
                    <ul class="text-gray-500">
                        <li>
                            <RouterLink to="/">Request an offer</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Pricing</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Reviews</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Stories</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>BUY A HOME</h3>
                    <ul class="text-gray-500">
                        <li>
                            <RouterLink to="/">Buy</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Finance</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>BUY, RENT AND SELL</h3>
                    <ul class="text-gray-500">
                        <li>
                            <RouterLink to="/">Buy & sell properties</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Rent home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Builder trade-up</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>TERMS & PRIVACY</h3>
                    <ul class="text-gray-500">
                        <li>
                            <RouterLink to="/">Trust & Safety</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Terms of Service</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Privacy Policy</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>ABOUT</h3>
                    <ul class="text-gray-500">
                        <li>
                            <RouterLink to="/">Company</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">How it works</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Contact</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Investors</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>RESOURCES</h3>
                    <ul class="text-gray-500">
                        <li>
                            <RouterLink to="/">Blog</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Guides</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">FAQ</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Help Center</RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="flex flex-col items-center gap-6 justify-center text-gray-500 border-t-2 lg:flex-row lg:justify-evenly">
            <p class="pt-8">©2021 Estatery. All rights reserved</p>
            <div class="flex gap-10 opacity-30 color">
                <a href="#">
                    <IconFacebook />
                </a>
                <a href="#">
                    <IconInstagram />
                </a>
                <a href="#">
                    <IconTwitter />
                </a>
                <a href="#">
                    <IconLinkedin />
                </a>
            </div>
        </div>
    </footer>
</template>