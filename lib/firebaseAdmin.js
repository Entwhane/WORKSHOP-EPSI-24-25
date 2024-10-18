// lib/firebaseAdmin.js
import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK_JSON || '{}');

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'ethiq-40588.firebaseio.com',
    });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
