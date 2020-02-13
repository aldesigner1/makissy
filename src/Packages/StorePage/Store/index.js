import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Marquee } from 'react-marquee';

export default class Store extends Component {
    render() {
        return (
            <li className="store">
                <div className="fondStore">

                </div>
                <div className="filtreStore">

                </div>
                <div className="descriptionStore">
                    <label htmlFor="" className="titreStore"> AF'Style </label>
                    <p className="descStore"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.  adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                    Nunc viverra imperdiet enim. Fusce est.
                    </p>
                </div>
                <div>
                    <Link to="/"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                    <Link to="/"><label style={{ cursor: "pointer" }}> Visiter </label> </Link>
                </div>
            </li>
        )
    }
}
