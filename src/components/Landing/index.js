import React, { Component } from 'react';

// import { withAuthorization } from '../Session';
import Activite from './Activite';
import './Landing.css';

const Landing = () => (
    <Atterissage />
);

export class Atterissage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activites: [
                {
                    icone: "fas fa-tractor",
                    nom: "Agriculture...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                // {
                //     icone: "fas fa-swimmer",
                //     nom: "Sport",
                //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                // },
                // {
                //     icone: "fas fa-lightbulb",
                //     nom: "Energie",
                //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                // },
                {
                    icone: "fas fa-fill-drip",
                    nom: "Activite extractive",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-tools",
                    nom: "Activite fabrication",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-charging-station",
                    nom: "Activite production...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fab fa-cloudversify",
                    nom: "Activite distribution...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fab fa-codepen",
                    nom: "Activite construction",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-cubes",
                    nom: "Commerce gros & detail...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-directions",
                    nom: "Transport...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-mug-hot",
                    nom: "Hebergement & Restauration",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-newspaper",
                    nom: "Information & Com...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-hand-holding-usd",
                    nom: "Finance & Assurance",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-building",
                    nom: "Activite immobiliere",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-award",
                    nom: "Activite pro...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-couch",
                    nom: "Service administratif...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-people-carry",
                    nom: "Administration publique...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fab fa-audible",
                    nom: "Education",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-hospital-symbol",
                    nom: "Sante",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-gamepad",
                    nom: "Arts & Loisirs...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-street-view",
                    nom: "Autres services",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-bed",
                    nom: "Activite menage...",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },
                {
                    icone: "fas fa-door-open",
                    nom: "Organisations & Organismes",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam fugit atque officia ipsam accusantium incidunt at consectetur sunt modi similique molestias, enim odit sequi impedit nam labore iusto, error iste.",

                },

            ],
        }
    }


    render() {

        const Activites = this.state.activites.map((element, index) => (
            <Activite key={index} nom={element.nom} icone={element.icone} description={index + " " + element.description} />
        ));

        return (
            <div>
                <div className="back">

                    <div className="search">
                        <div className="logo">
                            <img src="Assets/icones/Logo.png" alt="Makissy" />
                        </div>
                        <div className="texte">
                            <input type="text" />
                            <img id="intuitive" src="Assets/icones/rechercheintuitivex1.png" alt="||" />
                        </div>

                    </div>

                    <ul className="sectors container">

                        {Activites}

                    </ul>

                </div>
                <p id="copyright">
                    <a href="al.cm">Propulsé par copyright©2019 ALDesigners  </a>
                </p>
            </div>
        )
    }
}


// const condition = (authUser) => !!authUser;

export default Landing;