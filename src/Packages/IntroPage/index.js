import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Intro.scss';

export default class Intro extends Component {
    render() {
        return (
            <div className="" id="body">
                <header>
                    <div className="container">
                        <nav className="navig">
                            <div className="menu-toggle">
                                <i className="fas fa-bars"></i>
                                <i className="fas fa-times"></i>
                            </div>
                            <Link to="/" className="logo"> <img src="assets/icons/logo.png" width="100px" height="auto" alt="LOGO" /> </Link>
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link"> Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Menu </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Reservations </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> News </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Shop </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="#" className="nav-link"> Contact </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {/* <!-- header ends --> */}
                <section className="hero" id="hero">
                    <div className="container">
                        <h2 className="sub-headline">
                            <span className="first-letter">B</span>ienvenue
                        </h2>
                        <h1 className="headline">Makissy</h1>
                        <div className="headline-description">
                            <div className="separator">
                                <div className="line line-left"></div>
                                <div className="asterisk"> <i className="fas fa-asterisk"></i> </div>
                                <div className="line line-right"></div>
                            </div>
                            <div className="single-animation">
                                <h5>version #1</h5>
                                <Link to="#" className="btn cta-btn"> Explorer </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Hero ends --> */}
                <section className="discover-our-story">
                    <div className="container">
                        <div className="marketplace-info">
                            <div className="marketplace-description padding-right animate-left">
                                <div className="global-headline">
                                    <h2 className="sub-headline">
                                        <span className="first-letter">D</span>iscover
            </h2>
                                    <h1 className="headline headline-dark">Our Story</h1>
                                    <div className="asterisk"> <i className="fas fa-asterisk"></i> </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Link to="" className="btn body-btn"> About Us </Link>
                            </div>
                        </div>

                        <div className="marketplace-info-img animate-right">
                            <img src="assets/images/rawpixel-769367-unsplash.jpg" alt="marketplace-aboutus-imag" />
                        </div>

                    </div>
                </section>
                {/* <!-- Discover our story ends --> */}

                <section className="tasteful-Recipes between">
                    <div className="container">
                        <div className="global-headline">
                            <div className="animate-top">
                                <h2 className="sub-headline">
                                    <span className="first-letter">T</span>asteful
        </h2>
                            </div>
                            <div className="animate-bottom">
                                <h1 className="headline headline-dark">Recipes</h1>
                            </div>
                            <div className="asterisk"> <i className="fas fa-asterisk"></i> </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Tasteful recipes ends --> */}
                <section className="discover-our-menu">
                    <div className="container">
                        <div className="marketplace-info">
                            <div className="image-group padding-right animate-left">
                                {/* <img src="assets/images/cake-1971552.png" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
