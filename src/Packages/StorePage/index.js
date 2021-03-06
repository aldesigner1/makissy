import React, { Component } from 'react';
import { Link, BrowserRouterasSwitch } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withAuthorization } from '../../components/Session';

import Store from './Store';

import './Store.scss';

export class StorePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            stores: [],
        }
    }

    render() {

        const Stores = this.state.stores.map((element, index) => (
            <Store key={index} id={element.nomStore} nomStore={element.nomStore} descStore={element.descStore} />
        ))

        return (
            <div>
                {/* <section className="principale sectionStore" id="principal">
                    <div className="monStoreBtn">
                        <Link to={EDITSTORE}>
                            <i className="fas fa-person-booth"></i>
                        </Link>
                    </div>
                    <ul className="listeStore">
                        {Stores}
                    </ul>

                </section> */}


                <div className="monStoreBtn">
                    <Link to={ROUTES.EDITSTORE}>
                        <i className="fas fa-person-booth"></i>
                    </Link>
                </div>

                <ol className="listeStore">

                <li className="entityStore">
                        <div className="cadreStoreDesc">
                            <h3 className="labelyStore"> Global Clim </h3>
                            <label className="sloganStore"> Service d'entretien gratuit... </label>
                            <div className="toVisit">
                                <Link to={ROUTES.VIEWSTORE} className="mapVisit"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                                <Link to={ROUTES.VIEWSTORE} className="storeVisit"><label for="">Visiter</label> </Link>
                            </div>
                        </div>
                        <div className="cadreStoreImage">
                            <img src="assets/images/test/électricien.jpg" alt="" />
                        </div>

                    </li>


                    <li className="entityStore">
                        <div className="cadreStoreDesc">
                            <h3 className="labelyStore"> Les petits chercheurs </h3>
                            <label className="sloganStore"> Soyez vous-même, soyez chercheurs </label>
                            <div className="toVisit">
                                <Link to={ROUTES.VIEWSTORE} className="mapVisit"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                                <Link to={ROUTES.VIEWSTORE} className="storeVisit"><label for="">Visiter</label> </Link>
                            </div>
                        </div>
                        <div className="cadreStoreImage">
                            <img src="assets/images/LesPetitsChercheurslogo.png" alt="" />
                        </div>

                    </li>
                    <li className="entityStore">
                        <div className="cadreStoreDesc">
                            <h3 className="labelyStore"> Intelligentsia Corporation </h3>
                            <label className="sloganStore"> Formations professionelles - Préparation aux concours du Cameroun; situé au cradat, immeuble icorp 3eme étage </label>
                            <div className="toVisit">
                                <Link to={ROUTES.VIEWSTORE} className="mapVisit"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                                <Link to={ROUTES.VIEWSTORE} className="storeVisit"><label for="">Visiter</label> </Link>
                            </div>
                        </div>
                        <div className="cadreStoreImage">
                            <img src="assets/images/test/75237466_1157321041139773_1623068196992974848_o.jpg" alt="" />
                        </div>

                    </li>


                    <li className="entityStore">
                        <div className="cadreStoreDesc">
                            <h3 className="labelyStore"> Pacy Delice </h3>
                            <label className="sloganStore"> Votre resto étudiant à petits prix... Situé à la Cité-U </label>
                            <div className="toVisit">
                                <Link to={ROUTES.VIEWSTORE} className="mapVisit"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                                <Link to={ROUTES.VIEWSTORE} className="storeVisit"><label for="">Visiter</label> </Link>
                            </div>
                        </div>
                        <div className="cadreStoreImage">
                            <img src="assets/images/caipi-377960.png" alt="" />
                        </div>

                    </li>


                    <li className="entityStore">
                        <div className="cadreStoreDesc">
                            <h3 className="labelyStore"> Garderie auto&Moto </h3>
                            <label className="sloganStore"> Nouvelle caisse, nouvel état?  A la carrière nous prenons soin de votre véhicule </label>
                            <div className="toVisit">
                                <Link to={ROUTES.VIEWSTORE} className="mapVisit"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                                <Link to={ROUTES.VIEWSTORE} className="storeVisit"><label for="">Visiter</label> </Link>
                            </div>
                        </div>
                        <div className="cadreStoreImage">
                            <img src="assets/images/jeep-2448619_1920.jpg" alt="" />
                        </div>

                    </li>
                    <li className="entityStore">
                        <div className="cadreStoreDesc">
                            <h3 className="labelyStore"> Mokolo </h3>
                            <label className="sloganStore"> Vous savez déjà ce qu'on fait à Mokolo, donc pas besoin d'en dire plus! </label>
                            <div className="toVisit">
                                <Link to={ROUTES.VIEWSTORE} className="mapVisit"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                                <Link to={ROUTES.VIEWSTORE} className="storeVisit"><label for="">Visiter</label> </Link>
                            </div>
                        </div>
                        <div className="cadreStoreImage">
                            <img src="assets/images/store/african-1129032_1920.jpg" alt="" />
                        </div>

                    </li>
                    
                   <li>
                       <br/>
                       <br/>
                       <br/>
                   </li>
                   

                </ol>
                

            </div>
        )
    }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(StorePage);