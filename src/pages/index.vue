<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import IconLogo from '@/components/icons/IconLogo.vue';
import { onMounted, ref } from 'vue';
import Pocketbase from 'pocketbase';
// import use router, const router = useROuter() dans dologin mettre 
//on mounted async currentUser
let currentUser = ref();
const router = useRouter()

const pb = new Pocketbase('http://127.0.0.1:8090');

const doLogin = async () => {
    const authData = await pb.collection('users').authWithPassword(login_data.value.email, login_data.value.password);
    currentUser.value = pb.authStore.model
    router.replace('/weekly')
}


const doLoginOAuth = async () => {
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' });
    currentUser.value = pb.authStore.model;
    console.log(currentUser.value);
    router.replace('/weekly')
};

let login_data = ref({
    email: '',
    password: '',
})


// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model)
console.log('hello');

// "logout" the last authenticated model
pb.authStore.clear();
console.log(pb.authStore.model)

</script>
<template>
    <main class="flex flex-col gap-16 mt-20">
        <header class="flex flex-col gap-6 justify-center items-center px-8">
            <IconLogo />
            <h1 class="text-orpink-200 text-3xl">Connexion</h1>
            <p class="text-sm">Veuillez vous connecter à Chrologia pour accéder au contenu de notre site</p>
        </header>
        <form action="/">
            <fieldset class="flex flex-col gap-6 px-4">
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="email">Adresse mail&nbsp;*</label>
                    <input v-model="login_data.email"
                        class="text-sm placeholder:text-stone-100 text-stone-100 border-slate-500 border-4 rounded-md bg-transparent px-3.5 py-3"
                        required placeholder="Ex. azerty@gmail.com">
                </div>
                <div class="flex flex-col gap-3">
                    <label class="text-stone-100 font-bold text-xl" for="mdp">Mot de passe&nbsp;*</label>
                    <input v-model="login_data.password" type="password"
                        class="text-sm placeholder:text-stone-100 text-stone-100 border-slate-500 border-4 rounded-md bg-transparent px-3.5 py-3"
                        minlength="8" maxlength="20" required placeholder="Ex. Mot_de_passe">
                </div>
            </fieldset>
        </form>
        <div class="flex flex-col px-8 gap-6">
            <div class="flex flex-col gap-3 justify-center items-center">
                <Button text="se connecter" url="#" @click="doLogin()" />
                <p>ou</p>
                <Button @click="doLoginOAuth" text="Connexion Google" url="#" />
            </div>
            <div class="flex gap-2 text-sm font-bold">
                <p>Vous n'avez pas de compte&nbsp;?</p>
                <RouterLink to="/inscription" class="text-orpink-200">Inscrivez vous</RouterLink>
            </div>
        </div>
    </main>
</template>