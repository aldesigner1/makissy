import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Navigation from '../Navigation';

// import classnames from "classnames";


// import LandingPage from '../Landing';
import HomePage from '../../Packages/HomePage';
import TutoPage from '../../Packages/TutorialPage';
import TutoPage2 from '../../Packages/TutorialPage2';
import TutoPage3 from '../../Packages/TutorialPage3';
import StorePage from '../../Packages/StorePage';
import LoaderPage from '../../Packages/LoaderPage';
import EditStorePage from '../../Packages/EditStore';
import AddStorePage from '../../Packages/AddStore';
import IntroPage from '../../Packages/IntroPage';
import ViewStorePage from '../../Packages/ViewStorePage';

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


// export class App extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             prevScrollpos: window.pageYOffset,
//             visible: true
//         };
//     }

//     handleScroll = () => {
//         const { prevScrollpos } = this.state;

//         const currentScrollPos = window.pageYOffset;
//         const visible = prevScrollpos > currentScrollPos;

//         this.setState({
//             prevScrollpos: currentScrollPos,
//             visible
//         });
//     };

//     componentDidMount() {
//         window.addEventListener("scroll", this.handleScroll);
//     }

//     componentWillUnmount() {
//         window.removeEventListener("scroll", this.handleScroll);
//     }


//     render() {
//         return (
//             <Switch>
//                 <Navigation className={classnames("navbar", {
//                     "navbar--hidden": !this.state.visible
//                 })} />

//                 <Route exact path={ROUTES.LANDING} component={HomePage} />
//                 <Route path={ROUTES.HOME} component={HomePage} />
//                 {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} />


//             <Route path={ROUTES.ADMIN} component={AdminPage} />
//             <Route path={ROUTES.PASS_FORGET} component={PassForgetPage} />

//             <Route path={ROUTES.ACTUALITE} component={NewsPage} />
//             <Route path={ROUTES.ARTICLE} component={ArticlePage} />
//             <Route path={ROUTES.DASHBOARD} component={Dashboard} />
//             <Route path={ROUTES.MAPS} component={Maps} />

//             <Route path={ROUTES.MESSAGERIE} component={Messagerie} />
//             <Route path={ROUTES.PANIER} component={CartPage} /> */}

//                 <Route path={ROUTES.SIGN} component={HomePage} />
//                 <Route path={ROUTES.SIGN_IN} component={HomePage} />
//                 <Route path={ROUTES.SIGN_UP} component={HomePage} />

//                 <Route path={ROUTES.STORE} component={StorePage} />
//                 <Route path={ROUTES.TUTORIAL} component={TutoPage} />
//                 <Route path={ROUTES.LOADER} component={LoaderPage} />
//                 <Route path={ROUTES.EDITSTORE} component={EditStorePage} />
//                 <Route path={ROUTES.ADDSTORE} component={AddStorePage} />
//                 <Route path={ROUTES.INTRO} component={IntroPage} />


//             </Switch>
//         )
//     }
// }


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
        <Route path={ROUTES.TUTORIAL} component={TutoPage} />
        <Route path={ROUTES.TUTORIAL2} component={TutoPage2} />
        <Route path={ROUTES.TUTORIAL3} component={TutoPage3} />
        <Route path={ROUTES.LOADER} component={LoaderPage} />
        <Route path={ROUTES.EDITSTORE} component={EditStorePage} />
        <Route path={ROUTES.ADDSTORE} component={AddStorePage} />
        <Route path={ROUTES.INTRO} component={IntroPage} />
        <Route path={ROUTES.VIEWSTORE} component={ViewStorePage} />


    </Switch>
);


export default withAuthentification(App);