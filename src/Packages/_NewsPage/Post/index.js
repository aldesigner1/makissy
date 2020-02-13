import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

export default class Post extends Component {
    render() {
        return (
            <li>
                <div className="article">
                    <div id="tete">
                        <div id="imageProfil">
                            <Link to={ROUTES.STORE} data-tip="Profil" data-toggle="tooltip" data-placement="top"><img src={this.props.imageProfil} width="25px" alt="pic" /></Link>

                        </div>
                        <h4> {this.props.nomUser}
                            <Link to={ROUTES.STORE}> • Suivre </Link>
                        </h4>
                        <div id="price">
                            <Link to="#"><label title={this.props.montant_Devise} data-toggle="tooltip" data-placement="bottom"> {this.props.prix}
                                <span title="Roonies" className="rounais">R</span>
                            </label></Link>
                            <Link to="#"><span className="glyphicon glyphicon-option-vertical"></span></Link>
                        </div>
                    </div>
                    <div id="media">
                        <Link to={ROUTES.ARTICLE}>
                            <img className="multimed" src={this.props.image} alt="imageur" />
                        </Link>
                    </div>
                    <div id="description">
                        <div>
                            <label> {this.props.nomUser} </label>
                            <p> {this.props.description} </p>
                        </div>

                        <div id="plus">
                            <Link to={ROUTES.MESSAGERIE} data-tip="Message" data-toggle="tooltip" data-placement="bottom"> <i className="far fa-comment icon"></i></Link>
                            <Link to={ROUTES.MAPS} data-tip="Maps" data-toggle="tooltip" data-placement="bottom"><i className="fas fa-map-marked-alt icon"></i></Link>
                            <Link to={ROUTES.ARTICLE} data-tip="Transaction" data-toggle="tooltip" data-placement="left"><i className="fas fa-truck-loading icon"></i></Link>

                        </div>
                    </div>
                    <div id="comment">
                        <form className="formulaire avis">
                            <img src="Assets/icones/profile.svg" width="25px" alt="" />
                            <input type="text" placeholder="Votre commentaire..." />
                            <button className="btn btn-default">
                                <img src="Assets/icones/icone1.svg" width="20px" alt="Envoyer" />
                            </button>
                        </form>
                        <div className="notification">
                            <Link to="#" id="like"> <span> {this.props.like} </span> j'aime </Link>
                            <p id="delai"> il y'a <span> {this.props.delai} jours </span> </p>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
