import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Marquee } from 'react-marquee';

export default class Store extends Component {
    render() {
        return (
            <li className="store" id={this.props.id}>
                <div className="fondStore">

                </div>
                <div className="filtreStore">

                </div>
                <div className="descriptionStore">
                    <label htmlFor="" className="titreStore"> {this.props.nomStore} </label>
                    <p className="descStore"> {this.props.descStore}</p>
                </div>
                <div>
                    <Link to="/"><i className="fas fa-map-marked-alt favImageur favicon"></i></Link>
                    <Link to="/"><label style={{ cursor: "pointer" }}> Visiter </label> </Link>
                </div>
            </li>
        )
    }
}
