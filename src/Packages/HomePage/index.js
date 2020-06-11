import React, { Component } from 'react';
import Map from '../MapPage/';
import Post from './Post';

import Loader from '../LoaderPage';


// import { withAuthorization } from '../../components/Session';
import * as firebase from 'firebase';

import './Landing.scss';


export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lng: 12.4914,
            lat: 6.9772,
            zoom: 4.85,
            posts: [
                {
                    nomUtil: "Annonce !!!",
                    categorie: "santé",
                    titre: "#CORONAVIRUS - covid19",
                    following: "Suivi...",
                    prix: " ",
                    devise: " ",
                    srcImage: "/Assets/images/test/4_5809887155622774540.jpg",
                    profilePic: "Assets/icons/IMG_20200114_153834_752.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Aujourd'hui",
                    kiff: 500,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Respecter les mesures barrières reste primordial même si les choses semblent s'arranger autour de vous, rejoignez le groupe [ t.me/CoronaAfrique ] pour plus d'informations",
                    telephone: "1510",
                },
                // {
                //     nomUtil: "Makissy",
                //     categorie: "PUB",
                //     titre: "Commencer",
                //     following: "Suivi...",
                //     prix: "",
                //     devise: "",
                //     srcImage: "assets/images/Icons Animation Inspiration.gif",
                //     profilePic: "Assets/icons/IMG_20200114_153834_752.jpg",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "Aujourd'hui",
                //     kiff: 862,
                //     like: true,
                //     desc: "Bienvenue sur Makissy",
                //     telephone: "+237 682 33 22 06",
                // },

                {
                    nomUtil: "Smart_Mask",
                    categorie: "",
                    titre: "Smart Mask - Covid_19",
                    following: "Suivi...",
                    prix: "1 000",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/4_5809887155622774541.jpg",
                    profilePic: "Assets/images/test/4_5809887155622774542.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "aujourd'hui",
                    kiff: 852,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Votre ecomask est disponible en face de l'école des travaux publics (Campus Tunisie)",
                    telephone: "+237 690 64 90 90"
                },
                {
                    nomUtil: "Global_Clim",
                    categorie: "entreprise",
                    titre: "Maintenance electro-ménager",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/Geraete_1-2_09.jpg",
                    profilePic: "Assets/icons/IMG_20200114_153834_752.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "aujourd'hui",
                    kiff: 22,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Pour tous vos travaux de maintenance en électroménager, contactez-nous",
                    telephone: "+237 697 24 17 30"
                },


                {
                    nomUtil: "Falcon_Market",
                    categorie: "Alimentation",
                    titre: "Poulet Fumé 1.9 - 2.2",
                    following: "Suivre",
                    prix: "3 200",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200504-WA0039.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "hier",
                    kiff: 91,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Vente de poulet fumé, et poulet de chair de qualité.",
                    telephone: "+237 694 08 20 88"
                },
                {
                    nomUtil: "ABYL",
                    categorie: "Infographie",
                    titre: "Production Audiovisuelle",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200409-WA0027.jpg",
                    profilePic: "Assets/images/test/IMG-20200409-WA00257.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "hier",
                    kiff: 497,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Agence de production audiovisuelle - Dessin animé, Bande dessinée, Illustration 2D/3D, Son, Photo, Vidéo, Design Graphique, Consulting, Formations et Ateliers - Faisons briller l'Afrique ensemble !",
                    telephone: "+237 695 74 26 05"
                },
                // {
                //     nomUtil: "First_Style",
                //     categorie: "Chaussures",
                //     titre: "Air Jordan",
                //     following: "Suivi...",
                //     prix: "25 000",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/IMG-20200323-WA0007.jpg",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "hier",
                //     kiff: 57,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Amoureux de l'orignal, vous êtes servis! Les airs jordan de qualité à prix préférentiels, venez faire un tour à biyem-assi pour faire votre choix.",
                //     telephone: "+237 6 93 84 69 31"
                // },
                {
                    nomUtil: "Médiathèque_Du_Succès",
                    categorie: "Audio",
                    titre: "Livres Audios",
                    following: "Suivi...",
                    prix: "2 500",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200522-WA0065.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 179,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: " Venez télécharger vos livres audios sur comment développer votre environnement en modifiant votre personne; je vous attends alors faites l'appel...",
                    telephone: "+237 697 70 55 77"
                },
                // {
                //     nomUtil: "CANAL OLYMPIA",
                //     categorie: "FILM",
                //     titre: "Gaming Zone - ACTE 1",
                //     following: "Suivi...",
                //     prix: "500",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20200211-001851.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "hier",
                //     kiff: 508,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Jeux en VR, Show Cosplay, Street Dance, Concert Gospel, Concours de Danse, Challenge Gestion; et tentez de gagner 500 000 XAF",
                //     telephone: "+237 690 22 94 12"
                // },

                // {
                //     nomUtil: "KIROO GAMES",
                //     categorie: "Game",
                //     titre: "#Aurion",
                //     following: "Suivi...",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20200213-131805.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "hier",
                //     kiff: 497,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Donnons vie aux jeux videos d'Afrique - Afrique... Rassemblement!",
                //     telephone: ""
                // },
                // {
                //     nomUtil: "OFFRES_EMPLOI",
                //     categorie: "job",
                //     titre: "Recherche d'un emploi ?",
                //     following: "Suivi...",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20200213-162547.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 02jours",
                //     kiff: 989,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Venez voir les offres d'emploi disponibles au cameroun.",
                //     telephone: ""
                // },
                // {
                //     nomUtil: "ENSP-Cameroun",
                //     categorie: "job",
                //     titre: "Arts Martiaux du Dessin",
                //     following: "Suivi...",
                //     prix: "2 000",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20200214-002131.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 02jours",
                //     kiff: 17,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Inscriptions disponibles jusqu'au 28 Mars à l'Ecole Nationale Supérieure Polytechnique.",
                //     telephone: "+237 693 79 51 88"
                // },
                // {
                //     nomUtil: "BARDGOGE",
                //     categorie: "vestimentaire",
                //     titre: "#Bardgoge Concept",
                //     following: "Suivre",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20200217-131153.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 03jours",
                //     kiff: 33,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Habillons-nous vivant!!!",
                //     telephone: "+237 697 058 905"
                // },
                {
                    nomUtil: "Bonyl_foods",
                    categorie: "alimentation",
                    titre: "Tomate en conserve",
                    following: "Suivre",
                    prix: "500",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200428-WA0006.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 03jours",
                    kiff: 33,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Concentré de tomate naturelle 100% made in Cameroun. Reste plus qu'à faire mijoter.",
                    telephone: "+237 694 79 66 98"
                },
                // {
                //     nomUtil: "Futur_Riche",
                //     categorie: "OUTILS",
                //     titre: "Futur$Riche",
                //     following: "Suivre",
                //     prix: "5 500",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/IMG-20200201-WA0017.jpg",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 03jours",
                //     kiff: 12,
                //     like: true,
                //     ville: "Yaoundé || ",
                //     desc: "T-shirts, Pull et Casquettes... Venez célébrer votre Fête de la Jeunesse couvert par les vêtements spécialement conçus pour de futurs riches: #Futur$Riche",
                //     telephone: "+237 697 94 49 39"
                // },
                // {
                //     nomUtil: "ALAMBA-Films",
                //     categorie: "concours",
                //     titre: "Un vampire à Yaoundé",
                //     following: "Suivre",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20200217-131217.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 03jours",
                //     kiff: 29,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Appel à Casting ouvert à tous. Un film de René ELOME",
                //     telephone: "+237 697 380 531"
                // },
                // {
                //     nomUtil: "Pacy Delice",
                //     categorie: "ALIMENT",
                //     titre: "Restaurant",
                //     following: "Suivi",
                //     prix: "500",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/caipi-377960.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 04jours",
                //     kiff: 93,
                //     like: true,
                //     ville: "Yaoundé || ",
                //     desc: "Venez découvrir nos menus à prix d'étudiant au campus de L'Université de Yaoundé I...",
                //     telephone: "",
                // },
                // {
                //     nomUtil: "ICT4D - Cameroon",
                //     categorie: "Informatique",
                //     titre: "Informatique professionnelle",
                //     following: "Suivre",
                //     prix: "300 000",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/code.png",
                //     profilePic: "Assets/icons/433935231_185977.jpg",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 05jours",
                //     kiff: 1,
                //     like: true,
                //     ville: "Yaoundé || ",
                //     desc: "Inscriptions disponibles en Septembre à l'UYI.",
                //     telephone: "",
                // },
                {
                    nomUtil: "MyXtremNet",
                    categorie: "internet",
                    titre: " Internet Connection - 5Go/Day ",
                    following: "Suivi...",
                    prix: "10 000",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200522-WA0081.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 05jours",
                    kiff: 7,
                    like: true,
                    ville: "Bamenda || ",
                    desc: "Late comers, activate your 5Go per day; the latest promotional package now. Last current camtel promotion = 5Go/day for 01 month",
                    telephone: "+237 693 46 50 54", //653619295
                },

                // {
                //     nomUtil: "Kennedy en ligne",
                //     categorie: "ecom",
                //     titre: "Marché Camerounais",
                //     following: "Suivi...",
                //     prix: "145 000",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/464131720_292409.jpg",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 05jours",
                //     kiff: 784,
                //     like: true,
                //     ville: " Yaoundé || ",
                //     desc: "Le marché camerounais qui fait vivre à lui seul, toute une capitale",
                //     telephone: "",
                // },
                {
                    nomUtil: "Annonce !!!",
                    categorie: "ecom",
                    titre: "#GomboDigital",
                    following: "Suivi...",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/Screenshot_20200205-222503.png",
                    profilePic: "Assets/icons/IMG_20200114_153834_752.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 05jours",
                    kiff: 40,
                    like: true,
                    ville: "",
                    desc: "Nous respectons le design graphique, si vous ne le respectez pas, ne nous humiliez pas...",
                    telephone: "",
                },
                {
                    nomUtil: "Chez_Sandra",
                    categorie: "aliment",
                    titre: "Vos pâtisseries maison",
                    following: "Suivre",
                    prix: "1 500",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20191204-WA0118.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 06jours",
                    kiff: 71,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Commandez vos gâteaux au chocolat, à la vanille, au yaourt, à la noix de coco, au citron, etc. Et faites-vous livrer en 24h...",
                    telephone: "+237 696 80 95 30",
                },
                {
                    nomUtil: "Films&Séries",
                    categorie: "cinéma",
                    titre: "Vos Films et Séries",
                    following: "Suivre",
                    prix: "300",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200522-WA0000.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 06jours",
                    kiff: 58,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: " Aventure, science-fiction, mangas, combat, enquête et autres; commandez vos séries et films favoris moins cher...",
                    telephone: "+237 697 00 28 54",
                },
                {
                    nomUtil: "chez_ANK",
                    categorie: "vestimentaire",
                    titre: "Arrivage de Chaussures",
                    following: "Suivre",
                    prix: "15 000",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200216-WA0034.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 06jours",
                    kiff: 58,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Commandez vos chaussures.",
                    telephone: "+237 657 33 38 15",
                },
                // {
                //     nomUtil: "INFINIX-Cameroun",
                //     categorie: "tech",
                //     titre: "#Infinix S5",
                //     following: "Suivre",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20191222-221650.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 06jours",
                //     kiff: 357,
                //     like: true,
                //     ville: "",
                //     desc: "Performances: 04 caméras IA - Ultra recharge - 6,6''HD+.",
                //     telephone: "",
                // },
                {
                    nomUtil: "ANoellas_Luscious",
                    categorie: "tech",
                    titre: "Luscious Plantain CHIPS",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/Screenshot_20200121-120231.png",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 01semaine",
                    kiff: 187,
                    like: true,
                    ville: "Ngaoundéré ||",
                    desc: "Detail oriented for best quality",
                    telephone: "+237 690 33 50 31",
                },
                {
                    nomUtil: "BBF_Web",
                    categorie: "tech",
                    titre: "Conception Site Web",
                    following: "Suivre",
                    prix: "100 000",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/100993cea02359c5afe3d48d6ab8b04f.gif",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 01semaine",
                    kiff: 187,
                    like: true,
                    ville: "Douala || ",
                    desc: "Faites connaître vos produits et vos services très facilement en créant votre propre site web et laissez-nous gérer vos réseaux sociaux pour rester proches de vos clients; et aussi profitez d'une formation et conseils sur la vente en ligne.",
                    telephone: "+237 694 44 10 27",
                },
                {
                    nomUtil: "Solar_Team",
                    categorie: "tech",
                    titre: "Installation Energie solaire",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/Panneaux-solaires-à-Koudougou-au-Burkina-Faso_cRenaud-VAN-DER-MEEREN_EDJ.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 01semaine",
                    kiff: 187,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Nous fournissons des installations d'équipements d'énergie solaire dans les maisons et les entreprises à des coûts très abordables. Cela peut être une meilleure solution pour les pannes d'électricité constantes de nos fournisseurs de courant.",
                    telephone: "+237 699 97 34 31",
                },
                // {
                //     nomUtil: "Coalition_Digitale",
                //     categorie: "tech",
                //     titre: "#Code4School", 
                //     following: "Suivre",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/Screenshot_20191206-171819.png",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 01semaine",
                //     kiff: 612,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Learning is for all, and we're there for that... ",
                //     telephone: "",
                // },
                {
                    nomUtil: "AMKA_Elevage",
                    categorie: "tech",
                    titre: "Poulets de chair",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20191210-WA0024.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 01semaine",
                    kiff: 43,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Incubateurs et couveuses disponibles pour vos oeufs. ",
                    telephone: "+237 679 94 59 40",
                },
                // {
                //     nomUtil: "Jeune_Fort_Production",
                //     categorie: "tech",
                //     titre: "Conception Infographique",
                //     following: "Suivre",
                //     prix: "2 000",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/IMG-20191210-WA0010.jpg",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 01semaine",
                //     kiff: 10,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Conception Infographique: Faites votre choix à travers nos packages.",
                //     telephone: "+237 695 54 85 33",
                // },
                // {
                //     nomUtil: "Annonce !!!",
                //     categorie: "ecom",
                //     titre: "#AF'Style by Engy",
                //     following: "Suivi...",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/BANIERE ANGE.jpg",
                //     profilePic: "Assets/icons/IMG_20200114_153834_752.jpg",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 02semaines",
                //     kiff: 17,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Mode africaine faite maison et apprentissage pratique, venez suivre la formation avec ENGY.",
                //     telephone: "+237 691 45 01 60",
                // },
                {
                    nomUtil: "MiCam",
                    categorie: "plastique",
                    titre: "Fabrication d'emballages",
                    following: "Suivi...",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200522-WA0080.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 02semaines",
                    kiff: 17,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Vous avez un produit efficace mais vous n'arrivez pas à faire exploser vos ventes? Le problème c'est votre emballage. Il est le 1er contact entre le client et le produit. Faites vos emballages à prix promo extraordinaire. Contactez nous rapidement ou venez à Shakespeare Mimboman.",
                    telephone: "+237 696 75 30 05",
                },

                // {
                //     nomUtil: "Nelys Delices",
                //     categorie: "alimentation",
                //     titre: "Crêperie - Patisserie VIP",
                //     following: "Suivre",
                //     prix: "150",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/IMG-20200211-WA0001.jpg",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 02semaines",
                //     kiff: 15,
                //     like: true,
                //     ville: "",
                //     desc: "Commandez tous les jours. Et vous avez [-50 XAF] pour tout achat, si vous êtes un étudiant.",
                //     telephone: "+237 697 13 55 24",
                // },
                // {
                //     nomUtil: "JOBS-Cameroun",
                //     categorie: "ecom",
                //     titre: "Offres d'emploi",
                //     following: "Suivi...",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/IMG-20200122-WA0056.jpg",
                //     profilePic: "Assets/icons/IMG_20200114_153834_752.jpg",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 03semaines",
                //     kiff: 803,
                //     like: true,
                //     ville: "",
                //     desc: "Toutes les actualités sur les offres d'emploi, tout métier confondu; c'est ici...",
                //     telephone: "",
                // },
                {
                    nomUtil: "TCHOP_N_YAMO",
                    categorie: "aliment",
                    titre: "#TchopEtYamo",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/photo2-1.jpg",
                    profilePic: "Assets/images/test/tchopetyamologo.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 03semaines",
                    kiff: 212,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Venez apprécier...",
                    telephone: "",
                },
                {
                    nomUtil: "CIGUSTA",
                    categorie: "aliment",
                    titre: "The Glacier Italien",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/ScreenShot_20200219104233.png",
                    profilePic: "Assets/images/test/imagescig.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 03semaines",
                    kiff: 245,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Venez déguster...",
                    telephone: "",
                },
                // {
                //     nomUtil: "DR_SHAWARMA",
                //     categorie: "aliment",
                //     titre: "#Dr Shawarma",
                //     following: "Suivre",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/ScreenShot_20200219102641.png",
                //     profilePic: "Assets/images/test/téléchargement.jfif",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 03semaines",
                //     kiff: 87,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Venez manger...",
                //     telephone: "",
                // },
                // {
                //     nomUtil: "KAROKA_BBO_Service",
                //     categorie: "aliment",
                //     titre: "#Karoka BBO",
                //     following: "Suivre",
                //     prix: "--",
                //     devise: " XAF",
                //     srcImage: "/Assets/images/test/D41WL_sXoAAw0LG.jpg",
                //     profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                //     srcBlur: "assets/images/Icons Animation Inspiration.gif",
                //     delai: "il y a 03semaines",
                //     kiff: 17,
                //     like: true,
                //     ville: "Yaoundé ||",
                //     desc: "Venez découvrir...",
                //     telephone: "+237 674 67 20 40",
                // },
                {
                    nomUtil: "Bichy_Edition_House",
                    categorie: "",
                    titre: "YOU !",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/Screenshot_20200126-154443.png",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "il y a 03semaines",
                    kiff: 22,
                    like: true,
                    ville: "Jinzhou ||",
                    desc: "Faites de vos idées, une  source d'inspiration et d'espoir pour les autres...",
                    telephone: "+86 188 4017 8748"
                },
                {
                    nomUtil: "ENSTP-Cameroun",
                    categorie: "education",
                    titre: "Formation en Topographie",
                    following: "Suivre",
                    prix: "1 000",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/IMG-20200213-WA0055.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Depuis 01 mois",
                    kiff: 10,
                    like: true,
                    ville: "Yaoundé ||",
                    desc: "Inscrivez-vous dès maintenant. A l'école des Travaux publics, salle B12; pour apprendre avec nous, l'art de la conception d'un plan cadastral.",
                    telephone: "+237 696 12 32 55",
                },
                {
                    nomUtil: "MTN-Cameroon",
                    categorie: "INFO",
                    titre: "MTN - promo",
                    following: "Suivre",
                    prix: "--",
                    devise: " XAF",
                    srcImage: "/Assets/images/test/Screenshot_20200131-211022.png",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Depuis 01 mois",
                    kiff: 91,
                    like: true,
                    ville: "",
                    desc: "MTN everywhere you go !",
                    telephone: "*123#"
                },


            ],
            stores:[],
            loading: true,
        }
    }

    componentWillMount() {
        const ref = firebase.database().ref('articles');

        ref.on('value', (snap) => {
            console.log(snap.val());

            this.setState({
                stores: snap.val(),
                loading: false
            })
        });
    }

    render() {

        // const Storing = this.state.stores.map((e, k) => (
        //     <p key={k}> {e.NomStore} </p>
        // ))



        const Posts = this.state.posts.map((element, index) => (
            <Post key={index}
                id={element.NomStore}
                nomUtil={element.nomUtil}
                categorie={element.categorie}
                titre={element.titre}
                following={element.following}
                prix={element.prix}
                devise={element.devise}
                srcImage={element.srcImage}
                profilePic={element.profilePic}
                srcBlur={element.srcBlur}
                delai={element.delai}
                kiff={element.kiff}
                like={element.like}
                ville={element.ville}
                desc={element.desc}
                telephone={element.telephone}
            />
        ))
        if (this.state.loading) {
            return (<div><Loader /></div>);
        }
        else {
            // const Storing = this.state.stores.map((element, index) => (
            //     <Post key={index}
            //         id={element.NomStore}
            //         nomUtil={element.NomStore}
            //         titre={element.articles[0].TitreArt}
            //         following={element.following}
            //         prix={element.articles[0].PrixArt}
            //         devise={element.devise}
            //         srcImage={element.srcImage}
            //         profilePic={element.ProfilePic}
            //         srcBlur={element.srcBlur}
            //         delai={element.articles[0].DelaiArt}
            //         // kiff={element.kiff}
            //         // like={element.like}
            //         ville={element.VilleStore + ` ||`}
            //         desc={element.desc}
            //         telephone={element.PhoneStore}
            //     />
            // ))
            const stores = this.state.stores.map((store) => <h2>{store.nom}</h2>)

            return (
                <div>
                    <section className="principale sectionActualite" id="principal">

                        <ul className="listeActualite">
                            {/* {Storing} */}
                            {Posts}

                        </ul>
                    </section>
                    <Map />

                </div>
            )
        }
    }
}


// const condition = (authUser) => !!authUser;

// export default withAuthorization(condition)(HomePage);