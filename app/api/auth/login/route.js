import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../../lib/firebase";

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     description: Authentification de l'utilisateur avec son email et son mot de passe.
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               password:
 *                 type: string
 *                 example: "mypassword"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Jeton JWT de l'utilisateur
 *       400:
 *         description: Email ou mot de passe manquant
 *       401:
 *         description: Email ou mot de passe incorrect
 *       500:
 *         description: Erreur serveur
 */

// POST: Authentification d'un utilisateur
export async function POST(req) {
    const { email, password } = await req.json();

    // Validation des champs requis
    if (!email || !password) {
        return new Response(JSON.stringify({ error: "Email ou mot de passe manquant" }), { status: 400 });
    }

    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdToken();
        return new Response(JSON.stringify({ token }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
