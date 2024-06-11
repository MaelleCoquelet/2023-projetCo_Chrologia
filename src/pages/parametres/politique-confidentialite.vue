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
                Politique de confidentialité
            </h1>
            <div></div>
        </header>

        <section class="text-stone-200 flex flex-col gap-6">
            <h1 class="">Politique de confidentialité</h1>
            <div class="flex flex-col gap-6">
                <header class="">
                    <div class="flex flex-col gap-3">
                        <p class="">Date d'entrée en vigueur :&nbsp;24/02/2024</p>
                        <p class="">Bienvenue sur Chrologia ! Chrologia est un réseau social proposant
                            à
                            ses
                            Utilisateurs de créer des posts et de
                            planifier votre publication mensuelle afin de projeter vos contenus dans le futur ! Profitez
                            aussi
                            des
                            publications
                            conçues pour être diffusées de manière aléatoire. Votre capsule temporelle vous attendra
                            patiemment,
                            jusqu'à la fin du
                            compte à rebours. Chez Chrologia , nous accordons une importance primordiale à la protection
                            de
                            votre
                            vie privée et à la
                            transparence quant à la manière dont nous utilisons vos données.</p>
                    </div>
                </header>
                <div class="flex flex-col gap-6">
                    <h2 class="">1. Collecte de Données</h2>
                    <div class="flex flex-col gap-3">
                        <p>En utilisant notre plateforme, vous consentez à la collecte et au traitement de vos
                            informations
                            personnelles telles que
                            détaillées ci-dessous&nbsp;:</p>
                        <ul class="list-disc pl-6">
                            <li>Informations de Profil&nbsp;: Nous collectons les informations que vous fournissez lors
                                de la
                                création de votre compte,
                                telles que votre nom, votre adresse e-mail,votre date de naissance et d'autres
                                informations
                                que vous choisissez de
                                partager (telles que votre ).</li>
                            <li>Activités sur la Plateforme&nbsp;: Nous recueillons des données sur vos interactions
                                avec
                                notre
                                site, y compris vos
                                publications, vos interactions avec d'autres utilisateurs, vos préférences de contenu,
                                vos
                                clics.</li>
                            <li>Informations de Connexion&nbsp;: Nous enregistrons les informations sur votre
                                utilisation de
                                notre site, y compris votre
                                adresse IP, votre type de navigateur, votre fournisseur d'accès Internet, vos pages de
                                renvoi/sortie et vos horodatages</li>
                            <li>Les données d’interaction&nbsp;: amis, nombre d’amis, invitation d’amis, réactions,
                                commentaires
                                que vous laissez sur le
                                contenu partagé par d’autres, amis avec lesquels tu interagis le plus, données
                                fonctionnelles liées aux commentaires ou
                                aux messages.</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">2. Utilisation des Données</h2>
                    <div class="flex flex-col gap-3">
                        <p>Nous utilisons les données collectées pour les finalités suivantes&nbsp;:</p>
                        <ul class="list-disc pl-6">
                            <li>Fourniture de Services&nbsp;: Nous utilisons vos informations pour vous offrir une
                                expérience
                                personnalisée sur notre
                                plateforme, y compris la personnalisation du contenu et des recommandations.</li>
                            <li>Communication&nbsp;: Nous pouvons utiliser vos coordonnées pour vous envoyer des
                                communications promotionnelles, des mises à
                                jour de produits ou des annonces concernant notre site.</li>
                            <li>Amélioration de nos Services&nbsp;: Vos données sont également utilisées pour analyser
                                les
                                tendances d'utilisation,
                                diagnostiquer les problèmes techniques, et améliorer la convivialité et la
                                fonctionnalité de notre plateforme.</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">3. Partage des Données</h2>
                    <div class="flex flex-col gap-3">
                        <p>Nous ne partageons pas vos informations personnelles identifiables avec des tiers sans votre
                            consentement explicite,
                            sauf dans les cas suivants&nbsp;:</p>
                        <ul class="list-disc pl-6">
                            <li>Consentement de l'Utilisateur&nbsp;: Si vous cochez la case “ j'autorise Chrologia à
                                partager mes données avec des
                                partenaires dans le cadre de ses activités marketing et commerciales, dans le respect de
                                sa Politique de
                                Confidentialité.", vous consentez expressément à ce que vos données soient partagées
                                avec nos partenaires dans le cadre
                                de nos activités marketing et commerciales.</li>
                            <li>Prestataires de Services&nbsp;: Nous pouvons partager vos informations avec des
                                prestataires
                                de services tiers qui nous
                                aident à fournir et à améliorer notre plateforme, sous conditions d'obligations de
                                confidentialité appropriées.</li>
                            <li>Conformité Juridique&nbsp;: Nous pouvons divulguer vos données si nous sommes légalement
                                tenus de le faire pour nous
                                conformer à une obligation légale, protéger nos droits ou faire respecter nos conditions
                                d'utilisation.</li>
                            <li>Marketing et Recherche Commerciale&nbsp;: Nous pouvons partager des données agrégées et
                                anonymisées avec des partenaires pour
                                des analyses marketing et commerciales, dans le but de développer de nouveaux produits,
                                d'améliorer nos services et de
                                fournir des publicités ciblées.</li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">4. Vos Choix et Contrôles</h2>
                    <div class="flex flex-col gap-3">
                        <p>Vous avez le contrôle sur vos informations personnelles et pouvez choisir de limiter ou de
                            désactiver certaines
                            fonctionnalités de collecte de données dans les paramètres de votre compte. Vous pouvez
                            également&nbsp;:</p>
                        <ul class="list-disc pl-6">
                            <li>Nous contacter à tout moment pour demander la suppression ou la mise à jour de vos
                                données.</li>
                            <li>Savoir avec qui nous partageons vos données.</li>
                            <li>Obtenir une copie de vos informations en contactant notre service d'assistance en
                                matière de protection de la vie privée</li>
                            <li>Corriger tes informations en utilisant les réglages du Site Web ou en contactant notre
                                service d'assistance en matière
                                de protection de la vie privée.</li>
                            <li>Poser une question sur nos pratiques de protection de la vie privée en contactant notre
                                service d’assistance en matière
                                de protection de la vie privée.</li>
                        </ul>
                        <p>Vous avez également le droit de rétractation concernant le consentement que vous avez accordé
                            pour l'utilisation de vos
                            données à des fins marketing et commerciales. Vous pouvez exercer ce droit en nous
                            contactant par e-mail à
                            <a class="text-orpink-200" href="mailto:chrologiapro@gmail.com">
                                chrologiapro@gmail.com
                            </a> Veuillez noter que vos données seront conservées mais non exploitées
                            pendant une période
                            maximale de 3 (trois) ans à compter de la date de réception de votre demande de
                            rétractation.</p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">5. Protection des Enfants</h2>
                    <div class="flex flex-col gap-3">
                        <p>Chrologia n'est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas
                            intentionnellement d'informations
                            personnelles auprès des enfants de moins de 16 ans . Si vous avez moins de 16 ans, veuillez
                            ne pas utiliser Chrologia ni
                            nous fournir vos informations personnelles. Si nous découvrons que nous avons collecté
                            involontairement des informations
                            personnelles auprès d'un enfant de moins de 16 ans , nous prendrons des mesures pour
                            supprimer ces informations dans les
                            meilleurs délais. Les parents ou tuteurs qui pensent que leur enfant a fourni des
                            informations personnelles à Chrologia
                            et qui souhaitent que ces informations soient supprimées de nos systèmes sont invités à nous
                            contacter à
                            <a class="text-orpink-200" href="mailto:chrologiapro@gmail.com">
                                chrologiapro@gmail.com
                            </a> Nous encourageons les parents et tuteurs à surveiller l'utilisation
                            d'Internet de leurs enfants
                            et à les guider lorsqu'ils naviguent en ligne. Chrologia assure avoir pris les mesures pour
                            éviter l’accès à son service
                            à des enfants de moins de 16 ans, et se décharge de toute responsabilité dans le cas où un
                            enfant de moins de 16 ans
                            obtiendrait un accès à son service par des moyens de détournement.</p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">6. Sécurité des Données</h2>
                    <div class="flex flex-col gap-3">
                        <p>Nous prenons des mesures de sécurité techniques et organisationnelles pour protéger vos
                            informations contre tout accès
                            non autorisé, toute divulgation ou toute altération.</p>
                        <p>En cochant la case d'accord lors de la création de votre compte ou lors de l'utilisation de
                            notre plateforme, vous
                            reconnaissez avoir lu, compris et accepté les termes de cette Politique de Confidentialité.
                        </p>
                        <p>Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment et
                            vous encourageons à la
                            consulter régulièrement pour rester informé de nos pratiques en matière de confidentialité.
                        </p>
                        <p>Pour toute question ou préoccupation concernant notre Politique de Confidentialité, veuillez
                            nous contacter à
                            <a class="text-orpink-200" href="mailto:chrologiapro@gmail.com">
                                chrologiapro@gmail.com
                            </a></p>
                        <p>Merci d'utiliser Chrologia !</p>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>