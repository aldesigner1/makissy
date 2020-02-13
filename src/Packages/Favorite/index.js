import React, { Component } from 'react';

import FavoriteProduct from './FavoriteProduct';

import './Favorite.scss';

export default class Favorite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteList: [
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP2 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/caipi-377960.png',
                    titreFavProd: "JEEP3 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP4 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP5 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP5 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP5 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP2 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/caipi-377960.png',
                    titreFavProd: "JEEP3 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP4 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP5 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/caipi-377960.png',
                    titreFavProd: "JEEP5 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
                {
                    selected: false,
                    idFavProd: 'article',
                    imgSrc: 'assets/images/jeep-2448619_1920.jpg',
                    titreFavProd: "JEEP5 4x4",
                    stars: 3,
                    storeFavProd: "@AF-Style",
                    prix: 250,
                    devise: 'XAF',
                },
            ],
        }
    }

    render() {

        const FavoriteList = this.state.favoriteList.map((e, index) => (
            <FavoriteProduct key={index}
                selected={e.selected}
                idFavProd={e.idFavProd + index}
                imgSrc={e.imgSrc}
                titreFavProd={e.titreFavProd}
                stars={e.stars}
                storeFavProd={e.storeFavProd}
                prix={e.prix}
                devise={e.devise}
            />
        ))

        return (
                <section className="principalFavoris">
                    <ol className="listeFavoris">
                        {FavoriteList}
                    </ol>
                </section>
        )
    }
}
