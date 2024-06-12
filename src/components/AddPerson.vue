<script setup lang="ts">
import Button from '@/components/Button.vue';
import { type UsersResponse } from '@/pocketbase-types';
import ImgPb from '@/components/ImgPb.vue';

const props = defineProps<UsersResponse>()

</script>
<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center gap-3">
            <ImgPb :record="props" :filename="photoProfil" :height="40" :width="40" class="rounded-full pr-2" />
            <!-- <img class="rounded-full h-10 pr-2" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil"> -->
            <p class="overflow-auto break-all">{{ username }}</p>
        </div>
        <Button text="suivre" url="#" />
    </div>
</template>
