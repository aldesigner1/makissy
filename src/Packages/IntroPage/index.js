import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { googleSignIn } from '../../components/Navigation';

import './Intro.scss';

export default class Intro extends Component {
    render() {
        return (
            <div class="" id="body">

                <header id="head2">
                    <div class="container">
                        <nav class="nav">
                            <div class="menu-toggle">
                                <i class="fas fa-bars" style={{ "color": "#ccc" }}></i>
                                <i class="fas fa-times" style={{ "color": "#FF6589" }}></i>
                            </div>
                            <a href="index.html" class="logo"> <img src="assets/images/logo.png" width="1%px" style={{ "z-index": "2000" }} height="auto" alt="LOGO" /> </a>
                            <ul class="nav-list">
                                <li class="nav-item">
                                    <a href="index.html" class="nav-link"> Home </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"> Menu </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"> Reservations </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"> News </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"> Shop </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link"> Contact </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {/* <!-- header ends --> */}
                <section class="hero" id="hero">
                    <div id="formeAbstraite1">
                    </div>

                    <div class="bienvenueMakissy">
                        <h3 id="welcomeMessageLandingPage">Bienvenue sur</h3>
                        <div class="imageHero">
                        </div>
                    </div>
                    <div class="sloganMakissy">
                        <h4> Une manière de grandir <br />et de faire grandir... </h4>
                        <div class="fondSlogan">
                        </div>
                    </div>

                    <div id="formeAbstraite2">
                    </div>

                </section>
                {/* <!-- Hero ends --> */}


                <section class="premiereSection">
                    <h3> MARKETPLACE </h3>
                    <div class="cadrePremiereSection" id="cadre1">

                        <img src="assets/images/MiniatureMakissy.png" alt="image-miniature-Makissy1" />
                        <p> Parce que tout commence quelque part, ici, c'est <b>Makissy</b>. <br /> La plateforme de commerce en ligne simple et pratique; qui propose aux abonnés commerçants, une prestation de leurs biens et services au Cameroun. <br /> <b id="hashtagNom"># LORENA</b> </p>
                    </div>

                    <h3> PODCASTS </h3>
                    <div class="cadrePremiereSection" id="cadre2">

                        <img src="assets/images/affiches MAKISSY presentation.png" alt="image-podcast" />
                        <p> Apprendre les bases du commerce en ligne sert à construire pas à pas un empire commercial. <br /> Lisez et suivez des cours audios sur <b>comment étendre votre business en une forme digitale simple et efficace ?</b>  <br /><b id="hashtagNom"># SULAMITE</b>  </p>
                    </div>

                    <h3> SCRIBES </h3>
                    <div class="cadrePremiereSection" id="cadre3">

                        <img src="assets/images/affiches MAKISSY presentation 3.png" width="80%" alt="image-podcast" />
                        <p> Suivre un tutoriel sur <b>comment exploiter les outils et fonctionnalités</b> de cette plateforme, en appliquant les stratégies marketing des cours audios disponibles, quelque soit la dimension de votre commerce. <br /> <b id="hashtagNom"># TAHIS</b> </p>
                    </div>

                    <h3> VIDEOS </h3>
                    <div class="cadrePremiereSection" id="cadre4">

                        <img src="assets/images/affiches MAKISSY presentation 5.png" width="80%" alt="image-podcast" />
                        <p> Suivre l'actualité de la plateforme en vidéo offre plus de clarté sur les avantages de <b>Makissy 1</b>. <br /> <b>Inscrivez-vous</b>  dès à présent et <b>abonnez-vous</b> au divers réseaux pour être l'une des premières personnes à faire partie de la communauté ! <br /> <b id="hashtagNom"># ABIGAELLE</b>  </p>
                    </div>
                </section>

                <section class="secondeSection">
                    <Link to={ROUTES.LANDING} onClick={(evt) => googleSignIn(evt)} data-tip="Inscription" data-place="bottom" className="nav-item">
                        Je m'inscris
                    </Link>
                </section>

            </div>

        )
    }
}
