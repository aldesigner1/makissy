import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { googleSignIn } from '../../components/Navigation';

import './Intro.scss';

export default class Intro extends Component {
    render() {
        return (
            <div className="" id="body">

                <header id="head2">
                    <div className="container">
                        <nav className="nav">
                            <div className="menu-toggle">
                                <i className="fas fa-bars" style={{ "color": "#ccc" }}></i>
                                <i className="fas fa-times" style={{ "color": "#FF6589" }}></i>
                            </div>
                            <Link to="index.html" className="logo"> <img src="assets/images/logo.png" width="1%px" style={{ "z-index": "2000" }} height="auto" alt="LOGO_Makissy" /> </Link>
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <Link to="index.html" className="nav-link"> Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Menu </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Reservations </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> News </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Shop </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Contact </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {/* <!-- header ends --> */}
                <section className="hero" id="hero">
                    <div id="formeAbstraite1">
                    </div>

                    <div className="bienvenueMakissy">
                        <h3 id="welcomeMessageLandingPage">Bienvenue sur</h3>
                        <div className="imageHero">
                        </div>
                    </div>
                    <div className="sloganMakissy">
                        <h4> Une manière de grandir <br />et de faire grandir... </h4>
                        <div className="fondSlogan">
                        </div>
                    </div>

                    <div id="formeAbstraite2">
                    </div>

                </section>
                {/* <!-- Hero ends --> */}


                <section className="premiereSection">
                    <h3> MARKETPLACE </h3>
                    <div className="cadrePremiereSection" id="cadre1">

                        <img src="assets/images/MiniatureMakissy.png" alt="imag-miniature-Makissy1" />
                        <p> Parce que tout commence quelque part, ici, c'est <b>Makissy</b>. <br /> La plateforme de commerce en ligne simple et pratique; qui propose aux abonnés commerçants, une prestation de leurs biens et services au Cameroun. <br /> <b id="hashtagNom"># LORENA</b> </p>
                    </div>

                    <h3> PODCASTS </h3>
                    <div className="cadrePremiereSection" id="cadre2">

                        <img src="assets/images/affiches MAKISSY presentation.png" alt="imag-podcast" />
                        <p> Apprendre les bases du commerce en ligne sert à construire pas à pas un empire commercial. <br /> Lisez et suivez des cours audios sur <b>comment étendre votre business en une forme digitale simple et efficace ?</b>  <br /><b id="hashtagNom"># SULAMITE</b>  </p>
                    </div>

                    <h3> SCRIBES </h3>
                    <div className="cadrePremiereSection" id="cadre3">

                        <img src="assets/images/affiches MAKISSY presentation 3.png" width="80%" alt="imag-podcast" />
                        <p> Suivre un tutoriel sur <b>comment exploiter les outils et fonctionnalités</b> de cette plateforme, en appliquant les stratégies marketing des cours audios disponibles, quelque soit la dimension de votre commerce. <br /> <b id="hashtagNom"># TAHIS</b> </p>
                    </div>

                    <h3> VIDEOS </h3>
                    <div className="cadrePremiereSection" id="cadre4">

                        <img src="assets/images/affiches MAKISSY presentation 5.png" width="80%" alt="imag-podcast" />
                        <p> Suivre l'actualité de la plateforme en vidéo offre plus de clarté sur les avantages de <b>Makissy 1</b>. <br /> <b>Inscrivez-vous</b>  dès à présent et <b>abonnez-vous</b> au divers réseaux pour être l'une des premières personnes à faire partie de la communauté ! <br /> <b id="hashtagNom"># ABIGAELLE</b>  </p>
                    </div>
                </section>

                <section className="secondeSection">
                    <Link to={ROUTES.LANDING} onClick={(evt) => googleSignIn(evt)} data-tip="Inscription" data-place="bottom" className="nav-item">
                        Je m'inscris
                    </Link>
                </section>

            </div>

        )
    }
}
