import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';

// import LandingPage from '../Landing';
import HomePage from '../../Packages/HomePage';
import FavoritePage from '../../Packages/Favorite';
import StorePage from '../../Packages/StorePage';
import LoaderPage from '../../Packages/LoaderPage';
import EditStorePage from '../../Packages/EditStore';
import IntroPage from '../../Packages/IntroPage';
// import AccountPage from '../Account';
// import SignInPage from '../SignIn';
// import SignUpPage from '../SignUp';
// import AdminPage from '../Admin';
// import PassForgetPage from '../PasswordForget';
// import NewsPage from '../../Packages/NewsPage';
// import ArticlePage from '../../Packages/ArticlePage';
// import Dashboard from '../../Packages/Dashboard';
// import Maps from '../../Packages/Maps';
// import Messagerie from '../../Packages/Messagerie';
// import SignPage from '../../Packages/SignPage';
// import CartPage from '../../Packages/CartPage';
import { withAuthentification } from '../Session';

const App = () => (
    <Switch>
        <Navigation />

        <Route exact path={ROUTES.LANDING} component={HomePage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        
        
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.PASS_FORGET} component={PassForgetPage} />

        <Route path={ROUTES.ACTUALITE} component={NewsPage} />
        <Route path={ROUTES.ARTICLE} component={ArticlePage} />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route path={ROUTES.MAPS} component={Maps} />
        
        <Route path={ROUTES.MESSAGERIE} component={Messagerie} />
        <Route path={ROUTES.PANIER} component={CartPage} /> */}

        <Route path={ROUTES.SIGN} component={HomePage} />
        <Route path={ROUTES.SIGN_IN} component={HomePage} />
        <Route path={ROUTES.SIGN_UP} component={HomePage} />

        <Route path={ROUTES.STORE} component={StorePage} />
        <Route path={ROUTES.FAVORITE} component={FavoritePage} />
        <Route path={ROUTES.LOADER} component={LoaderPage} />
        <Route path={ROUTES.EDITSTORE} component={EditStorePage} />
        <Route path={ROUTES.INTRO} component={IntroPage} />


    </Switch>
);


export default withAuthentification(App);