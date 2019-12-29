import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBRgLVqEkrKdhjr3CkqGpcEt-4hRfLTW4w",
    authDomain: "tips-cca39.firebaseapp.com",
    databaseURL: "https://tips-cca39.firebaseio.com",
    projectId: "tips-cca39",
    storageBucket: "tips-cca39.appspot.com",
    messagingSenderId: "940314534258",
    appId: "1:940314534258:web:47646287f0ae8c9b7f3deb",
    measurementId: "G-T49ZX6YQQN"
};
firebase.initializeApp(config);
export default firebase;