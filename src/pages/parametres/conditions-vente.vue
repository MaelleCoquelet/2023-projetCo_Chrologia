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
                             et dont le siège social est situé au 4 places lucien tharradin 25100 Montbéliard</p>
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
                    <h2 class="">4. Avantages de l’abonnement</h2>
                    <div class="flex flex-col gap-3">
                        <p class=""> Tout abonnement listé ci-dessus donne un droit d’accès la version du site garantis sans pub et
                             l’accès à plus de création de contenus “ Reminder “ fonctionnalité principale du site web.
                        </p>
                        
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">5. Prix et Modalités de paiement</h2>
                    <div class="flex flex-col gap-3">
                        <p>Les prix en vigueur des différentes offres d’abonnement sont ceux affichés sur le Site au jour de l’enregistrement de la commande. Ils sont indiqués en euros, toutes taxes et participation aux frais 
                            de traitement et d’expédition comprises pour la France (frais additionnels pour la zone Euro, les Dom TOM, la suisse et le reste du monde). 
                            Toutes les commandes sont payables en euros. En aucun cas les fluctuations du prix d’un Abonnement ne peuvent donner lieu à réclamation ou à annulation d’une commande par l’Utilisateur
                        </p>
                        <ul class="list-disc pl-6">
                            <li class="font-bold">Paiement par carte bancaire par serveur de paiement sécurisé</li>
                            
                        </ul>
                        <p class=" pl-6"> Le paiement en ligne par carte bancaire est assuré par la solution sécurisée Payplug qui intègre un procédé de cryptage en mode SSL (Secure Socket Layer).Les cartes bancaires acceptées par les systèmes de paiement retenus par Chrologia sont présentées sur la page de paiement des offres selon leur disponibilité.Dans le cadre d’un paiement automatique par carte bancaire, 
                            il appartient à l’Utilisateur dont la durée de validité de la carte bancaire a expiré de contacter le service client et de fournir les coordonnées de carte bancaire valides. A défaut, l’abonnement sera suspendu.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">6. Conditions d’abonnement</h2>
                    <div class="flex flex-col gap-3">
                        <p>
                         <span class="font-bold">Pour les abonnements payés comptant par CB</span>, aucun remboursement ne sera accepté avant échéance de l’abonnement.
                        </p>
                        <p>
                        En cas de rejet d’un paiement, l’abonnement est suspendu jusqu’à régularisation de la situation. L’Utilisateur sera immédiatement informé de la suspension de son abonnement.
                        Les échanges (confirmations d’abonnement et de paiement, informations sur les offres et le service) se feront par courrier électronique à l’adresse indiquée par l’abonné.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">7. Garanties – responsabilité limitée</h2>
                    <div class="flex flex-col gap-3">
                        <p> La responsabilité de Chrologia ne pourra être engagée qu’à la condition qu’elle ait manqué à l’une de ses obligations, causant un préjudice direct et certain à l’Utilisateur.
                            La responsabilité de Chrologia pour inexécution ou mauvaise exécution de ses obligations ne pourra être retenue si cette inexécution / mauvaise exécution est imputable, soit à l’Utilisateur, 
                            soit au fait imprévisible et insurmontable d’un tiers au contrat, soit à un cas de force majeure.
                        </p>
                        <p> Chrologia ne saurait être tenue pour responsable de l’inexécution du contrat conclu, 
                            de force majeure telle que définie par la jurisprudence française, de dysfonctionnement, 
                            perturbation ou grève totale ou partielle et/ou de télécommunications.
                        </p>
                        <p>  Chrologia intervient en tant qu’éditeur de contenu, non en qualité de fournisseur d’accès à Internet.
                            A ce titre, elle ne peut garantir ni la qualité de la connexion Internet, ni l’absence d’interruptions propres au réseau.
                        </p>
                        <p>Les informations proposées sur le site sont conformes à la législation française en vigueur. La responsabilité de ne saurait être
                            engagée en cas de non-respect de la législation d’un autre pays à partir duquel les produits et services sont achetés.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">8. Confidentialité</h2>
                    <div class="flex flex-col gap-3">
                        <p class=""> 
                            Chrologia met en œuvre tous les moyens pour assurer la confidentialité et la sécurité des données transmises sur Internet.
                            À ce titre, le site Internet utilise un module sécurisé de paiement type SSL (Secure Socket Layer).
                        </p>
                        
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">9. Données personnelles</h2>
                    <div class="flex flex-col gap-3">
                        <p class=""> 
                            Chrologia demande à tout Utilisateur de communiquer un certain nombre d’informations personnelles 
                            appelées « données personnelles » : nom, prénom, adresse électronique,, etc. afin d’être en mesure de l’identifier, de 
                            le faire bénéficier des services auxquels il est abonné ou de lui proposer des services personnalisés.
                        </p>
                        <p class=""> 
                            Chrologia ne conserve les données personnelles de ses Utilisateurs qu’à des fins historiques, statistiques ou de gestion des 
                            réclamations et pour une durée maximale de 3 ans à compter de la fin de l’abonnement avant qu’elles ne soient détruites. 
                            Ces données feront l’objet d’un traitement automatisé.
                        </p>
                        <p class=""> 
                            Conformément à la loi du 6 janvier 1978 modifiée, l’Utilisateur dispose d’un droit d’accès, d’opposition et de rectification
                            des données le concernant, soit directement sur Internet, soit par courrier en écrivant à Chrologia et par Email à <a class="text-orpink-200" href="mailto:chrologiapro@gmail.com">
                            chrologiapro@gmail.com
                            </a>
                        </p>
                        <p class=""> 
                            Afin d’améliorer et de personnaliser le site, Chrologia fait usage de cookies. L’acceptation des cookies par l’Utilisateur est indispensable pour tout achat sur le Site.
                        </p>
                        <div class="flex flex-col gap-6">
                    <h2 class="">10.Droit applicable et différends</h2>
                    <div class="flex flex-col gap-3">
                        <p class="">
                            Les présentes CGV sont soumises à la loi française. En cas de litige, les tribunaux français sont seuls compétents.
                        </p>
                        
                    </div>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="">11. Service clientèle</h2>
                    <div class="flex flex-col gap-3">
                        <p>Pour toute information, question ou conseil, ou réclamation relative à un abonnement,
                             le service clientèle de Chrologia peut être contacté :
                        </p>
                        <ul class="list-disc pl-6">
                            <li>par E-mail : <a class="text-orpink-200" href="mailto:chrologiapro@gmail.com">
                            chrologiapro@gmail.com
                            </a></li>
                            
                        </ul>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>