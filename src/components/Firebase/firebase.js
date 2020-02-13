
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDFw9t9RvivPa7IYxpaYfi-JW_zRCS1bLo",
    authDomain: "makissy-b2e19.firebaseapp.com",
    databaseURL: "https://makissy-b2e19.firebaseio.com",
    projectId: "makissy-b2e19",
    storageBucket: "makissy-b2e19.appspot.com",
    messagingSenderId: "1073914991900",
    appId: "1:1073914991900:web:bb8d871645413c9fe796d9",
    measurementId: "G-R0FQLMWNB5"
};


let storage = '';

class Firebase {
    constructor() {
        /** Initialisation de la liaison au projet */
        app.initializeApp(config);
        storage = app.storage();
        /** Initialisation de l'API d'AUTH */
        this.auth = app.auth();
        this.db = app.database();
    }

    /** API Authentification */
    //Enregistrement Nouvel Utilisateur
    doCreateUserWithEmailAndPassword = (email, pass) =>
        this.auth.createUserWithEmailAndPassword(email, pass);
    //Connexion au site
    doSIgnInWithEmailAndPassword = (email, pass) =>
        this.auth.signInWithEmailAndPassword(email, pass);
    //Deconnexion de l'utilisateur
    doSignOut = () => this.auth.signOut();
    //Reinitialisation du Mot de Passe
    doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
    //Modification du Mot de Passe
    doPasswordUpdate = (pass) => this.auth.currentUser.updatePassword(pass);

    /** API Realtime Database */
    user = (uid) => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users/');

}

export { storage };
export default Firebase;