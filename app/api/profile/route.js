/*import { db } from '../../../lib/firebase';
import { auth } from '../../../lib/firebaseAdmin';

export async function GET(req) {
    const token = req.headers.get("Authorization")?.split("Bearer ")[1];

    if (!token) {
        console.error("Token manquant");
        return new Response(JSON.stringify({ error: "Token d'authentification manquant" }), { status: 401 });
    }

    try {
        // Vérifier le token avec Firebase Admin SDK
        const decodedToken = await auth.verifyIdToken(token);
        console.log("Token décodé :", decodedToken);

        const uid = decodedToken.uid;

        // Récupérer les informations utilisateur dans Firestore
        const userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists()) {
            console.error("Utilisateur non trouvé");
            return new Response(JSON.stringify({ error: 'Utilisateur non trouvé' }), { status: 404 });
        }

        console.log("Données utilisateur :", userDoc.data());
        return new Response(JSON.stringify(userDoc.data()), { status: 200 });
    } catch (error) {
        console.error("Erreur lors de la vérification du token ou récupération des infos :", error);
        return new Response(JSON.stringify({ error: 'Token invalide ou erreur serveur' }), { status: 401 });
    }
}*/
