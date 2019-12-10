import React, { Component } from 'react'

import { withAuthorization } from '../../components/Session';

import { Link } from 'react-router-dom';

import './Dashboard.css';

const Dashboard = () => (
    <Board />
)

export class Board extends Component {
    render() {
        return (
            <section className="corpus_dashboard">
                <section className="section_gauche_dashboard">

                    <div className="article_dashboard">

                        <div className="store">
                            <img src="Assets/images/Store/kitchen-1543493_1920.jpg" alt="" />
                        </div>
                        <ul className="liste">
                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/caipi-377960.png" alt="" />
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/cake-1971552.jpg" alt="" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/cake-2856551.jpg" alt="" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/cake-486874.jpg" alt="" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/eat-2834549.jpg" alt="" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/lime-907124.jpg" alt="" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/lime-998903.jpg" alt="" />
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="canvas">
                                    <Link to="produit.html">
                                        <img src="Assets/images/Article/pineapple-636562_1920.jpg" alt="" />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>


                <section className="section_droite_dashboard">
                    <div className="dessus">
                        <form className="storeProp formProp">
                            <input type="text" className="flatInput" placeholder="nom du store" />

                            <input type="text" className="flatInput" placeholder="contact du store" />



                            <textarea className="flatText" name="" id="" cols="30" rows="2" placeholder="Description du store"></textarea>
                            <label> Localisation du store </label>
                            <button className="btn btn-default"> Mettre A Jour </button>

                        </form>
                        <div className="profileProp">
                            <form action="" className="formProfile">
                                <img id="picProfile" src="Assets/icones/profile.svg" width="60px" alt="pic" />
                                <div id="identite">
                                    <input type="text" className="flatInput" placeholder="nom complet" />
                                    <div>
                                        <input type="tel" className="flatInput" placeholder="+237 694 57 66 54" />
                                        <input type="email" className="flatInput" placeholder="yann@aldesigners.com" />
                                    </div>
                                    <button className="btn btn-default"> Changer</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="dessous">
                        <img src="Assets/images/sales-performance-dashboard.png" alt="" />
                    </div>
                </section>
            </section>
        )
    }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Dashboard);