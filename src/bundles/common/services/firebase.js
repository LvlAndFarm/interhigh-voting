import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCJY1cD3egiptelB27fX6WiZjqQv7LY5hs",
    authDomain: "student-voting-a7143.firebaseapp.com",
    databaseURL: "https://student-voting-a7143.firebaseio.com",
    projectId: "student-voting-a7143",
    storageBucket: "student-voting-a7143.appspot.com",
    messagingSenderId: "407882667849",
    appId: "1:407882667849:web:1ce2aded960d346700ec98",
    measurementId: "G-NXN3HC1V1Q"
};

firebase.initializeApp(firebaseConfig);

async function getUser() {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            resolve(user);
        });
    });
}

export const auth = {...firebase.auth, getUser};
export const db = firebase.database();
