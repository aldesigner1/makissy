import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { EDITSTORE } from '../../constants/routes';

import Store from './Store';

import './Store.scss';

export default class StorePage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            stores: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    }

    render() {

        const Stores = this.state.stores.map((index) => (
            <Store key={index} />
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

