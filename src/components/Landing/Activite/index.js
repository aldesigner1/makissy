import React from 'react';

import { ACTUALITE } from '../../../constants/routes';
import { Link } from 'react-router-dom';


const Activite = ({ nom, description, icone }) => {
    return (
        <li className="domain card">
            <Link to={ACTUALITE} className="face face1">
                <div className="content">
                    <i className={`${icone} icon`}></i>
                    <h3> {nom} </h3>
                </div>
            </Link>
            <div className="face face2">
                <div className="content">
                    <p>{description}</p>
                    <Link to={ACTUALITE}> Voir Plus</Link>
                </div>
            </div>
        </li>
    )
}

export default Activite;
