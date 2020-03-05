import React, { Component } from 'react';

import './AddStore.scss'

export default class AddStore extends Component {
    render() {
        return (
            <form className="addStore">

                <div className="picSt">
                    <img id="profileImage" src="assets/icons/e69d1c64-89f7-40f7-bde0-537b7b6fc8ee@2x.png" alt="icone de store" />
                    <label for="imageUpload"><i className="fab fa-instagram"></i></label>
                    <input id="imageUpload" type="file" accept="image/png, image/jpeg, image/gif" />
                </div>

                <div id="formNomStore">
                    <label for="Champ1">Titre du Store</label>
                    <input type="text" name="" value="" placeholder="chez ABC" id="Champ1" />
                </div>
                <div id="formNumStore">
                    <label for="Champ2">Téléphone principal</label>
                    <input type="number" name="" value="" placeholder="+237 contact" id="Champ2" />
                </div>
                <div id="formCityStore">
                    <label for="Champ3">Ville de positionnement</label>
                    <select className="selectorTown" name="" id="Champ3">
                        <option value="">Yaoundé</option>
                        <option value="">Douala</option>
                        <option value="">Bamenda</option>
                        <option value="">Garoua</option>
                        <option value="">Kribi</option>
                        <option value="">Ngaoundéré</option>
                        <option value="">Ebolowa</option>
                        <option value="">Dschang</option>

                    </select>
                </div>
                <div id="formDescStore">
                    <label for="Champ4">Description complète</label>
                    <textarea name="" id="Champ4" cols="40" rows="10" placeholder="Définir ici tout le contenu nécessaire servant à décrire votre store. Des aspects les plus importants vers les détails les plus accrocheurs."></textarea>
                </div>

                <button id="submitBtnStore" type="submit">Déployer Mon Store <i className="fas fa-plane-departure"></i></button>
            </form>
        )
    }
}
