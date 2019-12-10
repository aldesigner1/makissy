import React, { Component } from 'react';

import { withAuthorization } from '../../components/Session';

import './Messagerie.css';

const Messagerie = () => (
    <Messenger />
)

export class Messenger extends Component {
    render() {
        return (
            <section className="corpus_messagerie">
                <section className="section_gauche">

                    <div className="entete">
                        <div className="titre">
                            <a href="home.html"><h1> Messagerie </h1></a>
                            <div className="notification">
                                <span> x non lus / xxx </span>
                            </div>
                        </div>
                    </div>
                    <div className="message">

                        <ul className="liste">
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="contact">
                                    <div id="icone"></div>
                                    <div id="identite">
                                        <div id="nom">nom</div>
                                        <div id="message">message</div>
                                    </div>

                                </div>
                            </li>

                        </ul>

                    </div>

                </section>


                <section className="section_droite">

                    <div className="messages">

                        <div className="echanges">

                            <div id="msg">
                                <img src="Assets/icones/profile.svg" width="22px" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <div id="msg">
                                <img src="Assets/icones/profile.svg" width="22px" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae placeat repellendus, voluptate necessitatibus dignissimos, accusamus repellat culpa. Natus velit consequuntur suscipit rem, at nesciunt praesentium soluta consequatur fugiat, dicta impedit.</p>
                            </div>
                            <div id="reply">
                                <img src="Assets/icones/profile.svg" width="22px" alt="" />
                                <p>atus velit consequuntur suscipit rem, at nesciunt praesentium soluta consequatur fugiat, dicta impedit.</p>
                            </div>
                        </div>
                        <form className="xender" action="">
                            <textarea placeholder="Votre message ici..."></textarea>
                            <button className="btn btn-default"> <span className="glyphicon glyphicon-send"></span> </button>
                        </form>
                    </div>

                </section>
            </section>
        )
    }
}


const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(Messagerie);