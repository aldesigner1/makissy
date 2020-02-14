import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import Post from './Post';

import './Landing.scss';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    nomUtil: "Makissy",
                    categorie: "PUB",
                    titre: "Commencer",
                    following: "Suivi...",
                    prix: "",
                    devise: "",
                    srcImage: "assets/images/Icons Animation Inspiration.gif",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Aujourd'hui",
                    kiff: 45,
                    like: true,
                    desc: "Bienvenue sur Makissy",
                    telephone: "+237682332206",
                },
                {
                    nomUtil: "Paul Nomo",
                    categorie: "OUTILS",
                    titre: "Futur$Riche",
                    following: "Suivre",
                    prix: "5 500",
                    devise: "XAF",
                    srcImage: "/Assets/images/IMG-20200201-WA0017.jpg",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "aujourd'hui",
                    kiff: 1,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "T-shirts, Pull et Casquettes... Venez célébrer votre Fête de la Jeunesse couvert par les vêtements spécialement conçus pour de futurs riches: #Futur$Riche",
                    telephone: "+237 697 94 49 39"
                },
                {
                    nomUtil: "Microsoft TM - Cameroun",
                    categorie: "ENTREPRISE",
                    titre: "Microsoft Online Formation",
                    following: "Suivre",
                    prix: "1 549",
                    devise: "USD",
                    srcImage: "assets/images/scroll_75.gif",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 4864,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Kiff - Share and Subscribe",
                },
                {
                    nomUtil: "Visual Studio Code-TM",
                    categorie: "JOB",
                    titre: ".NET Technologies",
                    following: "Suivre",
                    prix: "15 950",
                    devise: "XAF",
                    srcImage: "assets/images/463509326_198774.jpg",
                    profilePic: "Assets/icons/455136239_132745.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 784,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Nouvelle plateforme .NET disponible pour tout programmeur - Tout niveau de programmation compris.",
                },
                {
                    nomUtil: "Pacy Delice",
                    categorie: "ALIMENT",
                    titre: "verre de limonade",
                    following: "Suivi",
                    prix: "400",
                    devise: "XAF",
                    srcImage: "/Assets/images/caipi-377960.png",
                    profilePic: "Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 784,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Venez découvrir nos menus à prix d'étudiant au campus de L'Université de Yaoundé 1...",
                },
                {
                    nomUtil: "JS Team - WebDev Cameroon",
                    categorie: "WEB-DEV",
                    titre: "Programmation",
                    following: "Suivi...",
                    prix: "145 000",
                    devise: "XAF",
                    srcImage: "/Assets/images/code.png",
                    profilePic: "Assets/icons/433935231_185977.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 784,
                    like: true,
                    ville: "Yaoundé || ",
                    desc: "Suivez la formation gratuite au niveau du cradat...",
                },
                {
                    nomUtil: "Whatsapp - News",
                    categorie: "RESEAU SOCIAL",
                    titre: " Whatsapp ",
                    following: "Suivi...",
                    prix: "--",
                    devise: "XAF",
                    srcImage: "/Assets/images/447815613_495975.jpg",
                    profilePic: "Assets/icons/447815613_495975.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 784,
                    like: true,
                    desc: "Whatsapp App for download",
                },
                {
                    nomUtil: "Firebase ||FR",
                    categorie: "WEB",
                    titre: "Serveur en Ligne",
                    following: "Suivi...",
                    prix: "145 000",
                    devise: "XAF",
                    srcImage: "/Assets/images/448305625_208276.jpg",
                    profilePic: "Assets/icons/448305625_208276.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 784,
                    like: true,
                    desc: "API gratuite pendant 01mois",
                },
                {
                    nomUtil: "Kennedy en ligne",
                    categorie: "ecom",
                    titre: "Marché Camerounais",
                    following: "Suivi...",
                    prix: "145 000",
                    devise: "XAF",
                    srcImage: "/Assets/images/464131720_292409.jpg",
                    profilePic: "Assets/icons/447822882_498956.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 784,
                    like: true,
                    ville: " Yaoundé || ",
                    desc: "Le marché camerounais qui fait vivre à lui seul, toute une capitale",
                },
                {
                    nomUtil: "Librairie Cameroun",
                    categorie: "ART",
                    titre: "Une Saison Blanche et Sèche d'André ",
                    following: "Suivi...",
                    prix: "1 000",
                    devise: "XAF",
                    srcImage: "/Assets/images/test/IMG-20200126-WA0023.jpg",
                    profilePic: "Assets/icons/464924452_37681.jpg",
                    srcBlur: "assets/images/Icons Animation Inspiration.gif",
                    delai: "Hier",
                    kiff: 784,
                    like: true,
                    ville: " Yaoundé || ",
                    desc: "Achat - Emprunt - Bibliothèque",
                },

            ],
        }
    }

    render() {

        const Posts = this.state.posts.map((element, index) => (
            <Post key={index}
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

        return (
            <div>
                <section className="principale sectionActualite" id="principal">

                    <ul className="listeActualite">

                        {Posts}

                    </ul>
                </section>
                <section className="secondaire sectionMap">
                    {/* <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.485185623327!2d11.482445527720174!3d3.8240691554908164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bd0261bb7ffff%3A0xb5c2179e2f6d7730!2sF.%20ONANA!5e1!3m2!1sfr!2scm!4v1578055554274!5m2!1sfr!2scm" width="400" height="300" frameborder="0" style={{ "border": "0" }} allowfullscreen=""></iframe> */}
                    {/* <iframe title="maps" width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=11.482566297054293%2C3.8352878962582038%2C11.485843956470491%2C3.837265607325087&amp;layer=transportmap" style={{ "border": "1px solid black" }}></iframe><br /><small>*<a href="https://www.openstreetmap.org/#map=19/3.83628/11.48421&amp;layers=TN">Afficher une carte plus grande</a>*</small> */}
                    <div id='map' className="iframe" ></div>

                </section>

            </div>
        )
    }
}

