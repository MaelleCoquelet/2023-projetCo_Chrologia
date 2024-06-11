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
                Condition général de vente
            </h1>
            <div></div>
        </header>

        <section class="text-stone-200 flex flex-col gap-6">
            <h1 class="">Conditions générales de vente et d’abonnement</h1>
            <div class="flex flex-col gap-6">
                <header class="">
                    <div class="flex flex-col gap-3">
                        <h2 class="">1. Objet</h2>
                        <p class="">Les présentes conditions générales de vente 
                            (ci-après désignées CGV) régissent les relations contractuelles entre vous et :</p>
                        <p>
                             la SARL Chrologia, immatriculée au Registre du commerce sous le numéro XXX XX XXXX,
                             et dont le siège social est situé au 4 places lucien tharradin 25100 Montbéliard </p>
                        <p>Nous vous invitons à les lire attentivement avant passer une commande sur le site www.chrologia.fr. Toute commande passée sur ce site implique votre adhésion expresse et sans réserve aux présentes CGV.
                             Leur acceptation formelle vous sera demandée avant la validation de votre commande.</p>
                        <p>
                            Chrologia se réserve le droit de modifier les présentes CGV ainsi que les conditions tarifaires de ses abonnements. Les nouvelles CGV seront, le cas échéant, portées à la connaissance du client par modification en ligne et seront applicables aux seules ventes réalisées postérieurement à la modification. 
                            Les CGV en vigueur sont consultables à tout moment sur le Site et peuvent être imprimées à partir de celui-ci.</p>
                    </div>
                </header>
                <div class="flex flex-col gap-6">
                    <h2 class="">2. Modalités de souscription</h2>
                    <div class="flex flex-col gap-3">
                        <p class="">Les parties conviennent que leurs relations seront régies exclusivement par les présentes CGV,
                             à l’exclusion de toute autre condition préalablement disponible sur le Site.</p>
                        <p> L’Utilisateur reconnaît avoir pris connaissance, au moment de la validation de sa commande, des présentes CGV, en vigueur à la date de la commande, et déclare les accepter sans réserve en cochant la case correspondante (obligatoire) sur le formulaire d’abonnement en ligne. 
                            Les CGV sont en vigueur entre les Parties pour la durée nécessaire à l’exécution du contrat conclu avec l’Utilisateur.</p>
                        <p>Les informations relatives au contrat portées à la connaissance de l’Utilisateur au moment de la commande font l’objet d’une confirmation par e-mail adressé à l’Utilisateur à l’issue de la commande. 
                            Il est recommandé à l’Utilisateur de conserver cet e-mail de confirmation ou de l’imprimer.</p>
                        <p>
                            L’Utilisateur accepte de recevoir de la part de Chrologia, sur l’adresse e-mail qu’il a déclarée lors de son inscription au Service, des informations relatives à l’utilisation du Service. 
                            L’Utilisateur est invité à consulter régulièrement cette boîte aux lettres afin de prendre connaissance des éventuels messages d’information dont il est destinataire.</p>
                        <p>
                           Sauf preuve contraire, les données enregistrées par Chrologia constituent la preuve de l’ensemble des transactions passées par  
                            Chrologia avec les Utilisateurs du Site. Les données enregistrées par le système de paiement constituent la preuve des transactions financières, sauf preuve contraire.</p>
                            <p> Chrologia se réserve le droit de suspendre ou de clôturer le compte d’un Utilisateur qui contreviendrait 
                                aux stipulations des CGV ainsi qu’aux dispositions légales et règlementaires françaises en vigueur.
                            </p>   
                            <p> Chrologia se réserve le droit d’annuler ou de refuser la commande d’un Utilisateur avec lequel il
                                existerait un litige relatif au paiement d’une commande antérieure, sans que celui-ci puisse prétendre à une quelconque indemnité à quelque titre que ce soit.
                            </p> 
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">3. Les offres d’abonnement</h2>
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-col gap-3">
                        <p class="">Les différentes offres d’abonnement sont présentées dans la rubrique «&nbsp;Abonnement&nbsp;» du site www.chrologia.fr
                        </p>
                        <p>Ces offres sont proposées dans la limite des stocks disponibles. Les offres en vigueur sont celles affichées sur le site au jour de l’enregistrement de la commande, 
                            RS France/Positive Media se réservant le droit de les modifier à tout moment.</p>
                    </div>
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