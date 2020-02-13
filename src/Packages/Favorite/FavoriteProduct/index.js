import React from 'react';
import { Link } from 'react-router-dom';

export default class FavoriteProduct extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            carded: 0,
        }
        this.HandleChecked.bind();
    }

    HandleChecked = (evt) => {
        this.setState.carded = this.state.carded + 1;
    }

    render() {

        return (
            <li className="uniteFavoris" >
                <input onChange={event => this.HandleChecked(event)} type="checkbox" name="article1" id={this.props.idFavProd} className="selectFav" value="" />
                <label htmlFor={this.props.idFavProd}>
                    <div className="imageurFavoris">
                        <img src={this.props.imgSrc} alt="pic" />
                    </div>
                    <div className="detailFavoris">
                        <h4> {this.props.titreFavProd} </h4>
                        <span className="rateFavoris"> <i className="fas fa-star favicon"></i><i className="fas fa-star favicon"></i><i className="far fa-star favicon"></i><i className="far fa-star favicon"></i><i className="far fa-star favicon"></i> </span>
                        <p><Link to="/">{this.props.storeFavProd}</Link></p>
                        <span className="amountFavoris"> 150 <span className="Rounais">R</span> </span>
                    </div>
                </label>
            </li>
        )
    }
}


