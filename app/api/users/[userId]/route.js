import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API pour gérer les utilisateurs
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     description: Ajouter un utilisateur dans la collection Firebase.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               user_password:
 *                 type: string
 *                 example: "mypassword"
 *               user_level_school:
 *                 type: string
 *                 example: "seconde"
 *               user_type:
 *                 type: string
 *                 example: "student"
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'utilisateur créé
 *                   example: "abc123"
 */

export async function POST(req) {
    const body = await req.json();

    try {
        const newUserRef = await addDoc(collection(db, "Users"), {
            user_name: body.user_name,
            email: body.email,
            user_password: body.user_password,
            user_level_school: body.user_level_school,
            user_type: body.user_type,
            user_created_date: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newUserRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Récupérer un utilisateur par ID
 *     description: Récupérer un utilisateur spécifique par son ID de Firebase.
 *     tags: [Users]
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
 *                 user_level_school:
 *                   type: string
 *                   example: "seconde"
 *                 user_type:
 *                   type: string
 *                   example: "student"
 *                 user_created_date:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Utilisateur non trouvé
 */

export async function GET(req, { params }) {
    const { userId } = params;

    try {
        const userDoc = await getDoc(doc(db, "Users", userId));
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
 * /users/{userId}:
 *   put:
 *     summary: Mettre à jour un utilisateur
 *     description: Mettre à jour les détails d'un utilisateur spécifique.
 *     tags: [Users]
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
 *               user_name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               user_level_school:
 *                 type: string
 *                 example: "seconde"
 *               user_type:
 *                 type: string
 *                 example: "student"
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Utilisateur mis à jour"
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */

export async function PUT(req, { params }) {
    const { userId } = params;
    const body = await req.json();

    try {
        const userRef = doc(db, "Users", userId);
        await updateDoc(userRef, body);
        return new Response(JSON.stringify({ message: "Utilisateur mis à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     description: Supprimer un utilisateur de la base de données.
 *     tags: [Users]
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
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur serveur
 */

export async function DELETE(req, { params }) {
    const { userId } = params;

    try {
        await deleteDoc(doc(db, "Users", userId));
        return new Response(JSON.stringify({ message: "Utilisateur supprimé" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
