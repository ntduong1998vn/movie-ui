import firebase from 'firebase/app'
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyCCeL2iNBnZq-8rRa1vPapvwmrfLnhNnT4",
    authDomain: "movie-app-d4c77.firebaseapp.com",
    databaseURL: "https://movie-app-d4c77.firebaseio.com",
    projectId: "movie-app-d4c77",
    storageBucket: "movie-app-d4c77.appspot.com",
    messagingSenderId: "143204726096",
    appId: "1:143204726096:web:065125eeb81e8ce02ba855",
    measurementId: "G-FD9Y1ZY950"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }