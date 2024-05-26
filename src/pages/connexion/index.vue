<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <h1>Connexion</h1>
    <p>Veuillez vous connecter à Chrologia pour accéder au contenu de notre site</p>
    <form action="/"></form>
    <fieldset class="">
        <div class="">
            <label class="" for="email">Adresse mail ou num téléphone *</label>
            <input class="" id="email" type="email" name="email" required placeholder="Ex. azerty@gmail.com">
        </div>
        <div class="">
            <label class="" for="mdp">Mot de passe *</label>
            <input class="" id="mdp" type="password" name="mdp" minlength="8" maxlength="20" required
                placeholder="Ex. Mot_de_passe">
        </div>
    </fieldset>
    <button>
        Se connecter
    </button>
    <p>ou</p>
    <p>A REMPLACER</p>
    <RouterLink to="#">Mot de passe oublié</RouterLink>
    <div class="">
        <p>Vous n'avez pas de compte ?</p>
        <RouterLink to="#">Inscrivez vous</RouterLink>
    </div>
</template>