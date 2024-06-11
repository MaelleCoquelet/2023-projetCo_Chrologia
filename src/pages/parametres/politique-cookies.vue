<script setup lang="ts">
import { RouterLink } from 'vue-router';
import IconCross from '@/components/icons/IconCross.vue';



</script>
<template>


    <main class="px-5 flex flex-col gap-12 py-12">
        <header class="flex items-center justify-between pb-3 border-b border-slate-500">
            <RouterLink to="/parametres">
                <IconCross />
            </RouterLink>
            <h1 class="text-stone-100 text-xl text-center">
                Politiques relatives aux cookies
            </h1>
            <div></div>
        </header>

        <section class="text-stone-200 flex flex-col gap-6">
            <div class="flex flex-col gap-6">
                <header class="">
                    <div class="flex flex-col gap-3">
                        <p class="font-bold">
                            Notre site utilise des cookies pour améliorer votre expérience de navigation.
                            En continuant à utiliser notre site, vous acceptez notre utilisation de cookies conformément 
                            à notre politique de confidentialité.
                        </p>
                    </div>
                </header>
                <div class="flex flex-col gap-6">
                    <h2 class="">1. Précision sur les types de cookies utilisés</h2>
                    <div class="flex flex-col gap-3">
                        <p> 
                            Nous utilisons différents types de cookies sur notre site, notamment des cookies de performance, 
                            de fonctionnalité et de ciblage. Les cookies de performance nous permettent d'évaluer l'efficacité 
                            de notre site et d'améliorer ses performances. Les cookies de fonctionnalité nous permettent de vous 
                            offrir une expérience personnalisée en fonction de vos préférences. Les cookies de ciblage nous permettent 
                            de vous proposer du contenu et de la publicité adaptés à vos centres d'intérêt.
                        </p>
                        
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">2. Précision sur la gestion des cookies</h2>
                    <div class="flex flex-col gap-3">
                        <p>
                            Vous pouvez gérer vos préférences en matière de cookies en modifiant les paramètres de votre navigateur ou en utilisant 
                            des outils de gestion de cookies tels que le module de gestion de cookies de notre site. Vous pouvez également refuser 
                            tous les cookies en configurant votre navigateur de manière appropriée.
                        </p>
                        
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">3. Précision sur la durée des cookies</h2>
                    <div class="flex flex-col gap-3">
                        <p> 
                        Les cookies sur notre site web ont une durée de vie de 3 mois. Cela signifie que ces cookies resteront actifs sur l'appareil
                        de l'utilisateur pendant une période de trois mois à partir du moment où ils sont définis. Cette durée a été déterminée pour 
                        fournir une expérience utilisateur optimale tout en respectant les normes de confidentialité et de sécurité. Si vous avez 
                        des questions concernant l'utilisation des cookies sur notre site, n'hésitez pas à nous contacter pour obtenir plus
                        d'informations à l’adresse mail suivant : <a class="text-orpink-200" href="mailto:chrologiapro@gmail.com">
                            chrologiapro@gmail.com
                            </a>
                        </p>
                        
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">4. Mention de la politique de confidentialité</h2>
                    <div class="flex flex-col gap-3">
                        <p> 
                            Pour en savoir plus sur notre utilisation des cookies et
                            sur la manière dont nous traitons vos données personnelles, 
                            veuillez consulter notre politique de confidentialité.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">5. Suppression des cookies</h2>
                    <div class="flex flex-col gap-3">
                        <p> 
                            Vous pouvez demander la suppression des cookies en nous
                            contactant par e-mail à 
                            <a class="text-orpink-200" href="mailto:chrologiapro@gmail.com">
                            chrologiapro@gmail.com
                            </a>
                             Nous traiterons 
                            votre demande dans les meilleurs délais et veillerons à ce que les 
                            cookies soient supprimés conformément à nos politiques de confidentialité 
                            et de gestion des données. Nous nous engageons à protéger votre vie privée
                            et à respecter vos préférences en matière de cookies. Si vous avez des questions 
                            supplémentaires concernant notre utilisation des cookies ou si vous avez besoin d'assistance 
                            pour gérer vos préférences en matière de confidentialité, n'hésitez pas à nous contacter.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>