
import React, { Component } from "react";
import classnames from "classnames";

import firebase from 'firebase';
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { authUserContext } from '../Session';

import './Navigation.scss';

const Navigation = ({ authUser }) => (
    <div>
        <authUserContext.Consumer>
            {(authUser) =>
                authUser ? <NavigationAuth /> : <NavigationNonAuth />}
        </authUserContext.Consumer>
    </div>
);

let googleSignIn = () => {
    let base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then((result) => {
        // firebase.auth().signInWithRedirect(base_provider).then((result) => {

        console.log(result);
        console.log("Success Google account Linked");

    }).catch((err) => {
        console.log(err);

        console.log("Something went wrong when auth");

    })
}

const NavigationNonAuth = () => (
    <div>
        <ReactTooltip place="right" effect="solid" type="dark" />
        {/**<!-- Barre de navigation -->**/}
        {/* <nav className="navbar navbar-fixed-top">

            <div id="header-navig" className="collapse navbar-collapse">

                <ul id="connecter" className="nav navbar-nav navbar-right">

                    <li id="login">
                        <Link onClick={(evt) => googleSignIn()} to={ROUTES.LANDING} data-tip="Connexion" data-place="bottom">
                            {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="address-card" className="svg-inline--fa fa-address-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16px" data-toggle="tooltip"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"></path></svg> 

                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gofore" className="svg-inline--fa fa-gofore fa-w-13" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 512" width="14px"><path fill="currentColor" d="M324 319.8h-13.2v34.7c-24.5 23.1-56.3 35.8-89.9 35.8-73.2 0-132.4-60.2-132.4-134.4 0-74.1 59.2-134.4 132.4-134.4 35.3 0 68.6 14 93.6 39.4l62.3-63.3C335 55.3 279.7 32 220.7 32 98 32 0 132.6 0 256c0 122.5 97 224 220.7 224 63.2 0 124.5-26.2 171-82.5-2-27.6-13.4-77.7-67.7-77.7zm-12.1-112.5H205.6v89H324c33.5 0 60.5 15.1 76 41.8v-30.6c0-65.2-40.4-100.2-88.1-100.2z"></path></svg>
                            {/* <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="svg-inline--fa fa-google fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" width="14px"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> 
                        </Link>
                    </li>
                    <li id="signup"> <Link onClick={(evt) => googleSignIn()} to={ROUTES.LANDING} data-tip="Inscription" data-place="bottom">

                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-edit" className="svg-inline--fa fa-user-edit fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="16px" data-toggle="tooltip"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"></path></svg>
                    </Link> </li>
                </ul>

            </div>
        </nav> */}
        <header className="introduction">
            <Link className="btn-grad" to={ROUTES.INTRO}> C'est Parti... </Link>
        </header>
        <nav class="nav">
            <Link to={ROUTES.LANDING} onClick={(evt) => googleSignIn(evt)} data-tip="Inscription" data-place="bottom" className="nav-item">
                <i class="fab fa-gofore menucon"> </i>
            </Link>
        </nav>
    </div>
);

const NavigationAuth = () => (


    <div>
        <ReactTooltip place="right" effect="solid" type="dark" />
        <Headbar />
        <nav class="nav">


            {/* <input checked type="radio" name="navigator" id="nav_actu" /> */}
            {/* <label for="nav_actu" id="onglet_actu"> */}
            <Link to={ROUTES.HOME} class="nav-item is-active" active-color="#F7630C">
                <i class="fab fa-chromecast menucon"></i>
            </Link>
            {/* </label> */}


            {/* <input type="radio" name="navigator" id="nav_tuto" /> */}
            {/* <label for="nav_tuto" id="onglet_tuto"> */}
            <Link to={ROUTES.TUTORIAL} class="nav-item is-active" active-color="#F7630C">
                <i class="fab fa-cloudsmith menucon"></i>
            </Link>
            {/* </label> */}


            {/* <input type="radio" name="navigator" id="nav_stores" /> */}
            {/* <label for="nav_stores" id="onglet_stores"> */}
            <Link to={ROUTES.STORE} class="nav-item is-active" active-color="#F7630C">
                <i class="fas fa-chalkboard-teacher menucon"></i>
            </Link>
            {/* </label> */}
        </nav>
    </div>

);


export class Headbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <header id="head" className={classnames("navbarx", {
                "navbar--hidden": !this.state.visible
            })}>
                <div>
                    <div class="logo">
                        <img src="assets\icons\logolightx1.png" alt="Makissy" />
                    </div>
                    <div class="titreur">
                        <Link to="#" class="back">
                            {/* <!-- <i class="fas fa-caret-left favicon"></!--> --> */}
                        </Link>
                        <label for="" class="titrePage"> Actualités</label>
                    </div>
                    <SignOutButton />
                    {/* <a href="/stores#5"><h4 id="searchResult"> 32 resultats </h4></a> */}
                </div>
            </header>

        );
    }
}
export default Navigation;

export { googleSignIn };