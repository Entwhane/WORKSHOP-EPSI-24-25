import { getAuth, createUserWithEmailAndPassword, deleteUser, updateEmail, updatePassword } from "firebase/auth";
import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API pour gérer l'authentification
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Enregistrer un nouvel utilisateur
 *     description: Créer un nouvel utilisateur via Firebase Authentication et ajouter des informations dans Firestore.
 *     tags: [Auth]
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
 *               user_name:
 *                 type: string
 *                 example: "John Doe"
 *               user_level_school:
 *                 type: string
 *                 example: "seconde"
 *               user_type:
 *                 type: string
 *                 example: "student"
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       500:
 *         description: Erreur serveur
 */

export async function POST(req) {
    const { email, password, user_name, user_level_school, user_type } = await req.json();
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
            user_name,
            email,
            user_level_school,
            user_type,
            user_created_date: new Date().toISOString(),
            userId: user.uid,
        });

        return new Response(JSON.stringify({ message: "Utilisateur créé avec succès" }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /auth/register/{userId}:
 *   get:
 *     summary: Récupérer les informations d'un utilisateur par ID
 *     description: Récupérer les informations d'un utilisateur spécifique par son ID.
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'utilisateur à récupérer
 *     responses:
 *       200:
 *         description: Détails de l'utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user_name:
 *                   type: string
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   example: "johndoe@example.com"
 *       404:
 *         description: Utilisateur non trouvé
 */

// GET: Récupérer les informations d'un utilisateur par ID
export async function GET(req, { params }) {
    const { userId } = params;

    try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (!userDoc.exists()) {
            return new Response(JSON.stringify({ error: "Utilisateur non trouvé" }), { status: 404 });
        }
        return new Response(JSON.stringify(userDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /auth/register/{userId}:
 *   put:
 *     summary: Mettre à jour un utilisateur
 *     description: Mettre à jour les informations d'un utilisateur.
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'utilisateur à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "newemail@example.com"
 *               password:
 *                 type: string
 *                 example: "newpassword"
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *       500:
 *         description: Erreur serveur
 */

export async function PUT(req, { params }) {
    const { userId } = params;
    const { email, password, ...updatedData } = await req.json();
    const auth = getAuth();
    const userRef = doc(db, "users", userId);

    try {
        if (email || password) {
            const user = auth.currentUser;

            if (email) await updateEmail(user, email);
            if (password) await updatePassword(user, password);
        }

        await updateDoc(userRef, updatedData);
        return new Response(JSON.stringify({ message: "Utilisateur mis à jour avec succès" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /auth/register/{userId}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     description: Supprimer un utilisateur et ses informations de la base de données.
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'utilisateur à supprimer
 *     responses:
 *       204:
 *         description: Utilisateur supprimé avec succès
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer un utilisateur
export async function DELETE(req, { params }) {
    const { userId } = params;
    const auth = getAuth();
    const userRef = doc(db, "users", userId);

    try {
        const user = auth.currentUser;
        await deleteUser(user);

        await deleteDoc(userRef);

        return new Response(JSON.stringify({ message: "Utilisateur supprimé" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
