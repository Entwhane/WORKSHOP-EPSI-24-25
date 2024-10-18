import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAymvFOLAiW12hvs-oRHGlNyLreI22753A",
    authDomain: "ethiq-40588.firebaseapp.com",
    projectId: "ethiq-40588",
    storageBucket: "ethiq-40588.appspot.com",
    messagingSenderId: "100059905209",
    appId: "1:100059905209:web:3661ff68f90db3c0eeaf68",
    measurementId: "G-2EHMHCQ3C2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;
