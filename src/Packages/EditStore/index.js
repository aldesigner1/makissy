import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './EditStore.scss';

export default class EditStore extends Component {
    render() {
        return (
            <div id="bodyHome">
                <div className="storeEntete">
                    <div className="picStore">
                        <img id="profileImage" src='Assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png' alt="PIC" />
                        <span> <label htmlFor="imageUpload"><i className="fab fa-instagram"></i></label></span>
                        <label>@ Express Shopping</label>
                        <input id="imageUpload" type="file" accept="image/png, image/jpeg" />
                    </div>
                    <div className="descStore">
                        <div className="infoStore">
                            <div>
                                <Link to="#">479</Link>
                                <p>Articles</p>
                            </div>
                            <div>
                                <Link to="#">568</Link>
                                <p>Abonnés</p>
                            </div>
                            <div>
                                <Link to="#">123</Link>
                                <p>en cours</p>
                            </div>
                        </div>
                        <div className="optionStore">
                            <Link to="#"> <i className="fas fa-fingerprint favicon"></i> <span>Mon Compte</span>  </Link>
                        </div>
                    </div>
                </div>

                <div className="cont">

                    <input type="radio" name="ong" value="Onglet1" id="demo" />
                    <label htmlFor="demo" id="onglet" className="o1">
                        <span id="btn1"><i className="fas fa-stream"></i></span>
                        <form className="pageOnglet ong1">
                            <div>
                                <label htmlFor="Champ1">Nom</label>
                                <input type="text" name="" id="Champ1" />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="Champ2">Description</label>
                                <textarea name="" id="Champ2" cols="25" rows="3"></textarea>
                            </div>
                            <br />
                            <div>
                                <label htmlFor="Champ3">Pass</label>
                                <input type="password" name="" id="Champ3" />
                            </div>

                            <button type="submit">Mettre en ligne</button>
                        </form>
                    </label>


                    <input checked type="radio" name="ong" value="Onglet2" id="demo2" />
                    <label htmlFor="demo2" id="onglet" className="o2">
                        <span id="btn2"><i className="fas fa-person-booth"></i></span>
                        <div className="pageOnglet ong2">
                            <ul>
                                <li>
                                    <img src="assets/images/Free-Shipping-Trend-white-Men-s-2015-Fashion-teenage-Shoes-High-Casual-Sneakers-Male-Size-39.jpg" width="100%" height="auto" alt="" />
                                </li>

                                <li>
                                    <img src="assets/images/caipi-377960.png" width="100%" height="auto" alt="" />
                                </li>
                                <li>
                                    <img src="assets/images/bananas-1119790_1920.jpg" width="100%" height="auto" alt="" />
                                </li>

                                <li>
                                    <img src="assets/images/woman-671909_1920.jpg" width="100%" height="auto" alt="" />
                                </li>
                                <li>
                                    <img src="assets/images/cake-1971552.png" width="100%" height="auto" alt="" />
                                </li>
                            </ul>
                        </div>
                    </label>

                    {/* <input type="radio" name="ong" value="Onglet2" id="demo3" />
                    <label htmlFor="demo3" id="onglet" className="o3">
                        <span id="btn3"><i className="fas fa-phone-square-alt"></i></span>
                        <div className="pageOnglet ong3">
                            <ol>
                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 655 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>

                                <li className="storeContact">

                                    <div className="imgCtc">
                                        <img src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="PIC" />
                                    </div>
                                    <div className="textCtc">
                                        <div>
                                            <label>John DOE</label>
                                            <p>
                                                <i className="fas fa-at"></i>
                                                mail@gmail.com</p>
                                            <p>
                                                <i className="fas fa-mobile"></i>
                                                +237 6 55 75 88 75</p>
                                        </div>
                                    </div>
                                    <div className="optionCtc">

                                    </div>

                                </li>
                            </ol>
                        </div>
                    </label> */}

                    <div id="fondIconeOnglet"></div>

                </div>

            </div>
        )
    }
}
