import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyASNUIGe9CVqijyuErm-i-CcQTatggMM9o",
    authDomain: "reactauth-8a1dd.firebaseapp.com",
    databaseURL: "https://reactauth-8a1dd.firebaseio.com",
    projectId: "reactauth-8a1dd",
    storageBucket: "reactauth-8a1dd.appspot.com",
    messagingSenderId: "749438443616",
    appId: "1:749438443616:web:83ca0a68c70ec151966305"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();

