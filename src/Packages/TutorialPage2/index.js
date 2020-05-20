import React, { Component } from 'react';
import './tutoriel.scss';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Tuto2 from './Tuto2';

export default class Tutoriel extends Component {
    render() {
        return (
            <div className="principalTuto">
                <div className="listeTuto">
                    <ol>
                        <li >

                            <div className="imageTuto">
                                <img src="Assets\images\Miniature_Makissy.png" width="100px" alt="miniature tutotriel" />
                            </div>
                            <Link to={ROUTES.TUTORIAL} className="titreTuto">
                                <label htmlFor="">Reprenons depuis le début.</label>
                            </Link>
                            <div className="filtreTuto">
                            </div>
                        </li>
                        <li style={{ "box-shadow": "0 0 10px #ff4400" }}>

                            <div className="imageTuto">
                                <img src="Assets\images\planet-4124063.jpg" width="100px" alt="miniature tutotriel" />
                            </div>
                            <Link to={ROUTES.TUTORIAL2} className="titreTuto">
                                <label htmlFor="">Il était une fois...</label>
                            </Link>
                            <div className="filtreTuto">
                            </div>
                        </li>
                        <li>

                            <div className="imageTuto">
                                <img src="Assets\images\paper-3033204.jpg" width="100px" alt="miniature tutotriel" />
                            </div>
                            <Link to={ROUTES.TUTORIAL3} className="titreTuto">
                                <label htmlFor="">Un peu de réflexion</label>
                            </Link>
                            <div className="filtreTuto">
                            </div>
                        </li>

                    </ol>
                </div>


                <Tuto2 />


            </div>
        )
    }
}
