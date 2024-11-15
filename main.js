import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"
const firebaseConfig = {
    apiKey: "AIzaSyBPwkz5thRgKFUvJTSUhQ3jY6PhvINDmfc",
    authDomain: "bpstrains.firebaseapp.com",
    projectId: "bpstrains",
    storageBucket: "bpstrains.firebasestorage.app",
    messagingSenderId: "837776880077",
    appId: "1:837776880077:web:8f0c4a4c46940592ead484",
    measurementId: "G-Y0VSFJKBCQ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if (user) {
        // do something
    } else {
        window.location = '/login/'
    }
});