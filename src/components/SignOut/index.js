import React from 'react';
import { withFirebase } from '../Firebase';

import { INTRO } from '../../constants/routes';
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
    <Link to={INTRO} data-tip="Deconnexion" data-place="bottom" type="button" onClick={firebase.doSignOut} className="button" style={{ position: "absolute", right: "10%", color: "#ccc", top: "99%", transform: "translateY(-105%)" }}>
        <label htmlFor=""> <i class="fas fa-user-alt-slash favicon"> </i> </label>
    </Link>
);
export default withFirebase(SignOutButton);