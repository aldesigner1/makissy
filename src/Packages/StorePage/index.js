import React, { Component } from 'react';

import { withAuthorization } from '../../components/Session';

import './Store.css';

const StorePage = () => (
    <Store />
);

export class Store extends Component {
    render() {
        return (
            <section className="corpus_store">
                <section className="section_gauche">

                    <div className="entete">
                        <div className="titre">
                            <a href="home.html">
                                <h1> Stores </h1>
                            </a>
                            <div className="notification">
                                <span> Domaine X </span>
                            </div>
                        </div>
                    </div>

                    <div className="store">
                        <ul className="liste">
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/kitchen-1543493_1920.jpg" alt="" />
                                    <div className="calque">
                                        <a href="articles.html">
                                            <p>VOIR</p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/kitchen-1687121.jpg" alt="" />
                                    <div className="calque">
                                        <a href="articles.html">
                                            <p>VOIR</p>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/living-room-1872192_1920.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/startup-593327.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/workplace-3599563.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/home-1622401_1920.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/home-office-599475.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/african-1129032_1920.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/hotel-1979406_1920.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="messagerie">
                                    <img src="Assets/images/Store/desktop-2325627.jpg" alt="" />
                                    <div className="calque"> <a href="articles.html">
                                        <p>VOIR</p>
                                    </a> </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </section>


                <section className="section_droite">

                    <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.444342583682!2d11.479809528278256!3d3.8399832553066995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfcfba91be3b%3A0x3eb618bb8fc3a303!2sBiyem-Assi%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1573252016479!5m2!1sfr!2scm" width="600" height="450" frameborder="0" style={{ "border": "0" }} allowfullscreen="" title="Maps"></iframe>
                    </div>
                    <div className="cartographe">
                        <h2> NIKI BIYEM-ASSI </h2>
                        <button> Voir Plus </button>
                        <div id="detail_cart">
                            <ul>
                                <li>
                                    <label>Distance :</label>
                                    <span>14km</span>
                                </li>

                                <li>
                                    <label>Stock restant :</label>
                                    <span>150 unites</span>
                                </li>

                                <li>
                                    <label>Standing :</label>
                                    <span>***</span>
                                </li>

                                <li>
                                    <label>Points de vente :</label>
                                    <span>05</span>
                                </li>

                                <li>
                                    <label>Prix unitaire :</label>
                                    <span> - - - </span>
                                </li>

                                <li>
                                    <label>Ville :</label>
                                    <span>Yaounde</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(StorePage);