import React, { Component } from 'react';
import firebase from 'firebase';
import { authUserContext } from "../../components/Session";

import './AddStore.scss';

const INITIAL_STATE_STORE = {
    id: 0,
    mail: "",
    imageUpload: "assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png",
    titreStore: "",
    telephoneStore: "",
    villeStore: "",
    descStore: "",
    error: null,
};

export default class AddStore extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE_STORE };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log("console: " + [event.target.name] + ":" + event.target.value);
        // console.log("voici le gars la  " + authUser.email);


    }

    onSubmit = (event) => {
        // event.preventDefault();
        // const { id_mail, titreStore, telephoneStore, villeStore, descStore } = this.state;
        console.log(
            this.state.mail + " - " +
            this.state.titreStore + " - " +
            this.state.telephoneStore + " - " +
            this.state.villeStore + " - " +
            this.state.descStore + " - "
        );


        firebase.database().ref(`stores/${this.state.id}`).set({
            MailStore: this.state.mail,
            NomStore: this.state.titreStore,
            PhoneStore: this.state.telephoneStore,
            VilleStore: this.state.villeStore,
            DescStore: this.state.descStore
        }).catch(err => console.log(err));


    }

    componentDidMount() {
        var ref = firebase.database().ref("stores");
        ref.once("value").then(snap => {
            this.setState({ id: snap.numChildren() + 1 });
        });

    }


    render() {

        const { imageUpload, titreStore, telephoneStore } = this.state;

        return (
            <authUserContext.Consumer>
                {authUser =>
                    <form className="addStore" onSubmit={this.onSubmit}>

                        <div className="picSt">
                            <img id="profileImage" src={imageUpload} alt="icone de store" />
                            <label for="imageUpload"> <i className="fab fa-instagram"></i></label>
                            <input id="imageUpload" name="imageUpload" type="file" onChange={this.onChange} accept="image/png, image/jpeg, image/gif" />
                        </div>

                        <div id="formNomStore">
                            <label for="Champ1">Titre du Store</label>
                            <input type="text" name="titreStore" value={titreStore} onChange={this.onChange} placeholder="chez ABC" id="Champ1" />
                        </div>
                        <div id="formNumStore">
                            <label for="Champ2">Téléphone principal</label>
                            <input type="number" name="telephoneStore" value={telephoneStore} onChange={this.onChange} placeholder="+237 contact" id="Champ2" />
                        </div>
                        <div id="formCityStore">
                            <label for="Champ3">Ville de positionnement</label>
                            <select className="selectorTown" name="villeStore" onChange={this.onChange} id="Champ3">
                                <option value=" ">-- Votre Ville --</option>
                                <option value="Yaounde">Yaoundé</option>
                                <option value="Douala">Douala</option>
                                <option value="Bamenda">Bamenda</option>
                                <option value="Garoua">Garoua</option>
                                <option value="Kribi">Kribi</option>
                                <option value="Ngaoundere">Ngaoundéré</option>
                                <option value="Ebolowa">Ebolowa</option>
                                <option value="Dschang">Dschang</option>

                            </select>
                        </div>
                        <div id="formDescStore">
                            <label for="Champ4">Description complète</label>
                            <textarea name="descStore" id="Champ4" onChange={this.onChange} cols="40" rows="10" placeholder={`Définir ici tout le contenu nécessaire servant à décrire votre store. Des aspects les plus importants vers les détails les plus accrocheurs.`}></textarea>
                        </div>





                        <button id="submitBtnStore" type="submit" onClick={e => this.setState({ mail: authUser.email })}>Déployer Mon Store <i className="fas fa-plane-departure"></i></button>
                    </form>}</authUserContext.Consumer>
        )
    }
}
