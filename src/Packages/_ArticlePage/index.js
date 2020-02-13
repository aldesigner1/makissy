import React, { Component } from 'react'

import { withAuthorization } from '../../components/Session';

import { Link } from "react-router-dom";

import './Article.css';

const Article = () => (
    <Product />
)

export class Product extends Component {
    render() {
        return (
            <section className="corpus_article">
                <section className="section_gauche_article">

                    <div className="entete">
                        <div className="titre">
                            <Link to="home.html"><h1> Article </h1></Link>
                            <div className="notification">
                                <span> Store X </span>
                            </div>
                        </div>
                    </div>
                    <div className="article">


                        <ol className="liste">
                            <div className="canvas">
                                <img src="Assets/images/Article/caipi-377960.png" alt="" />
                                <div id="calque"></div>
                                <Link to="#" id="achat"> Acheter </Link>
                                <Link to="#" id="command"> Commander </Link>
                            </div>
                            <div className="description">
                                <label> Description </label>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam illum dolore accusamus minima, exercitationem excepturi praesentium a laudantium, cum quidem sequi ipsam ipsa iste, id! Deserunt maxime reiciendis voluptatibus saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quos eveniet minus modi, natus necessitatibus, dolor doloribus, cumque quisquam incidunt accusantium. Nam, quos aut. Officia repellat numquam voluptatem, repudiandae ullam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt fugit, vero, qui quidem perspiciatis perferendis impedit? Ullam laboriosam perferendis, nostrum consequatur. Quod voluptate, fuga! Voluptatem ea, enim harum reprehenderit odit!</p>
                                <hr />
                            </div>
                            <li className="propriete">
                                <label> Designation :</label>
                                <span> Nom de l'element </span>
                            </li>
                            <li className="propriete">
                                <label> Quantite :</label>
                                <span> xxxxxxxx </span>
                            </li>
                            <li className="propriete">
                                <label> Prix Unitaire:</label>
                                <span> XXXXXXXX <span className="rounais">R</span> </span>
                            </li>
                            <li className="propriete">
                                <label> Designation :</label>
                                <span> Nom de l'element </span>
                            </li>
                            <hr />
                            <div className="montant">
                                <h4 id="unite1"> 4000 <span>XAF</span> </h4>
                                <h4 id="unite2"> 40 <span className="rounais">R</span> </h4>
                            </div>
                        </ol>

                    </div>

                </section>


                <section className="section_droite_article">

                    <div className="maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.444342583682!2d11.479809528278256!3d3.8399832553066995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfcfba91be3b%3A0x3eb618bb8fc3a303!2sBiyem-Assi%2C%20Yaound%C3%A9!5e0!3m2!1sfr!2scm!4v1573252016479!5m2!1sfr!2scm" width="600" height="450" frameBorder="0" style={{ "border": "0" }} allowfullscreen="" title="Makissy"></iframe>
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

export default withAuthorization(condition)(Article);
