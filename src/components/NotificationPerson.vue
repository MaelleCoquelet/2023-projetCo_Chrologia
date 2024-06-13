<script setup lang="ts">
import { type UsersResponse } from '@/pocketbase-types';
const props = defineProps<UsersResponse>()
</script>
<template>
    <div class="flex justify-between items-center">
        <ImgPb :record="props" :filename="photoProfil" :height="24" :width="24" class="rounded-full" />
        <!-- <img class="rounded-full h-6 pr-2" src="/src/assets/img/palicoMHW.webp" alt="Photo de profil"> -->
        <p class="overflow-auto break-all"><span>{{ username }}</span> a posté un
            <span>weekly</span>
        </p>
        <p class="pl-2"><span>3</span>j</p>
    </div>
</template>
