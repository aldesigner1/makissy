import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EDITSTORE } from '../../constants/routes';

import Store from './Store';

import './Store.scss';

export default class StorePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            stores: [
                {
                    nomStore: "AFSTYLE",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "FESTI - VOGT",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "MTN - Cameroun",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "CANAL OLYMPIA",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "KIROO GAMES",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "OFFRES D'EMPLOI",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "ENSP - Cameroun",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "COMISA - Cameroun",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "BARDGOGE",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "ALAMBA - Films",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Pacy Delice",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "ICT4D - Cameroon",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Whatsapp - News",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Kennedy en ligne",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Annonce !!!",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Chez Sandra",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Chez ANK",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "INFINIX - Cameroun",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Coalition Digitale",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "AMK Elevage",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "Jeune et Fort Production",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "ENSTP - Cameroun",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "JOBS - Cameroun",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "TCHOP N' YAMO",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "CI GUSTA",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "DR SHAWARMA",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
                {
                    nomStore: "KAROKA BBO Service",
                    descStore: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc",
                },
            ],
        }
    }

    render() {

        const Stores = this.state.stores.map((element, index) => (
            <Store key={index} id={element.nomStore} nomStore={element.nomStore} descStore={element.descStore} />
        ))

        return (
            <div>
                <section className="principale sectionStore" id="principal">
                    <div className="monStoreBtn">
                        <Link to={EDITSTORE}>
                            <i className="fas fa-person-booth"></i>
                        </Link>
                    </div>
                    <ul className="listeStore">
                        {Stores}
                    </ul>

                </section>
            </div>
        )
    }
}

