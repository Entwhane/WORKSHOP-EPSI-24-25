import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Importez `getAnalytics` uniquement pour les environnements client
let analytics;

const firebaseConfig = {
    apiKey: "AIzaSyAymvFOLAiW12hvs-oRHGlNyLreI22753A",
    authDomain: "ethiq-40588.firebaseapp.com",
    projectId: "ethiq-40588",
    storageBucket: "ethiq-40588.appspot.com",
    messagingSenderId: "100059905209",
    appId: "1:100059905209:web:3661ff68f90db3c0eeaf68",
    measurementId: "G-2EHMHCQ3C2",
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore
const db = getFirestore(app);

// Initialiser Analytics uniquement côté client
if (typeof window !== "undefined") {
    const { getAnalytics, isSupported } = require("firebase/analytics");
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { db, analytics };
export default app;
