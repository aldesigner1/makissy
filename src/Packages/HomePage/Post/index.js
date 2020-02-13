import React from 'react';
import { Link } from 'react-router-dom';
// import { Linking } from 'react-native';
// import Marquee from 'react-marquee';

export default class Post extends React.Component {


    render() {
        return (
            <li>
                <div className="enteteurActualite">

                    <div id="p1">
                        <Link to="#"><img src={this.props.profilePic} alt="X" /></Link>
                        <label for="comment"> {this.props.nomUtil} </label>
                        <Link to="#" className="follow">• {this.props.following}</Link>
                    </div>
                    <div id="p2">
                        <Link to="#"><label title="test" id="Roonies"> {this.props.prix} {<span className="Rounais">{this.props.devise}</span>} </label></Link>
                    </div>

                </div>
                <div className="imageur">
                    <div className="carousselImageur">
                        <img src={this.props.srcImage} alt="Article" />
                    </div>
                    <div className="optionsImageur">
                        {/* AVAILABLE SOON  */}
                    </div>
                </div>
                <div className="detailleur">
                    <div className="enteteDetailleur">
                        <Link to="/">{this.props.delai}</Link>
                        <Link to="/" id="like"> <i class="fas fa-heart" id="likeArticle"></i> <label for="likeArticle">{this.props.kiff} kiff</label> </Link>

                        <span class="appelDetailArticle">
                            <i class="fas fa-phone-square-alt iconContact"></i>
                            <a class="contactArticle" href={`tel:${this.props.telephone}`} > {this.props.telephone}  </a>
                        </span>
                        <h3 id="nomArticle"> {this.props.titre} </h3>
                    </div>
                    <div className="descriptionDetailleur">
                        <p> <b>{this.props.ville}</b> {this.props.desc} </p>
                    </div>
                </div>
            </li >
        )
    }
}

//<marquee behavior="" scrolldelay="100" direction="left" speed=""><label id="categ"> {this.props.categorie} </label> — {this.props.titre} </marquee> 