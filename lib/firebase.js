import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAymvFOLAiW12hvs-oRHGlNyLreI22753A",
    authDomain: "ethiq-40588.firebaseapp.com",
    projectId: "ethiq-40588",
    storageBucket: "ethiq-40588.appspot.com",
    messagingSenderId: "100059905209",
    appId: "1:100059905209:web:3661ff68f90db3c0eeaf68",
    measurementId: "G-2EHMHCQ3C2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;