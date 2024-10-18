import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Games
 *   description: API pour gérer les jeux
 */

/**
 * @swagger
 * /games:
 *   post:
 *     summary: Créer un nouveau jeu
 *     description: Ajouter un jeu dans la collection Firebase.
 *     tags: [Games]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_title:
 *                 type: string
 *                 example: "Quizz de sciences"
 *               game_description:
 *                 type: string
 *                 example: "Un jeu interactif pour tester les connaissances en sciences."
 *               game_level:
 *                 type: string
 *                 example: "seconde"
 *               game_type:
 *                 type: string
 *                 example: "quizz"
 *               game_url:
 *                 type: string
 *                 example: "https://example.com/game-url"
 *               insignes_id:
 *                 type: string
 *                 example: "/Insignes/abc123"
 *               topic_id:
 *                 type: string
 *                 example: "/Topics/xyz456"
 *     responses:
 *       201:
 *         description: Jeu créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID du jeu créé
 *                   example: "abc123"
 */

// POST: Créer un nouveau jeu
export async function POST(req) {
    const body = await req.json();

    try {
        const newGameRef = await addDoc(collection(db, "Games"), {
            game_title: body.game_title,
            game_description: body.game_description,
            game_level: body.game_level,
            game_type: body.game_type,
            game_url: body.game_url,
            insignes_id: body.insignes_id,
            topic_id: body.topic_id,
            createdAt: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newGameRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /games/{gameId}:
 *   get:
 *     summary: Récupérer un jeu par ID
 *     description: Récupérer un jeu spécifique par son ID de Firebase.
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: gameId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du jeu à récupérer
 *     responses:
 *       200:
 *         description: Détails du jeu
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 game_title:
 *                   type: string
 *                   example: "Quizz de sciences"
 *                 game_description:
 *                   type: string
 *                   example: "Un jeu interactif pour tester les connaissances en sciences."
 *                 game_level:
 *                   type: string
 *                   example: "seconde"
 *                 game_type:
 *                   type: string
 *                   example: "quizz"
 *                 game_url:
 *                   type: string
 *                   example: "https://example.com/game-url"
 *                 insignes_id:
 *                   type: string
 *                   example: "/Insignes/abc123"
 *                 topic_id:
 *                   type: string
 *                   example: "/Topics/xyz456"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Jeu non trouvé
 */

// GET: Récupérer un jeu par ID
export async function GET(req, { params }) {
    const { gameId } = params;

    try {
        const gameDoc = await getDoc(doc(db, "Games", gameId));
        if (!gameDoc.exists()) {
            return new Response(JSON.stringify({ error: "Jeu non trouvé" }), { status: 404 });
        }
        return new Response(JSON.stringify(gameDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /games/{gameId}:
 *   put:
 *     summary: Mettre à jour un jeu
 *     description: Mettre à jour les détails d'un jeu spécifique.
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: gameId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du jeu à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_title:
 *                 type: string
 *                 example: "Quizz de sciences"
 *               game_description:
 *                 type: string
 *                 example: "Un jeu interactif pour tester les connaissances en sciences."
 *               game_level:
 *                 type: string
 *                 example: "seconde"
 *               game_type:
 *                 type: string
 *                 example: "quizz"
 *               game_url:
 *                 type: string
 *                 example: "https://example.com/game-url"
 *     responses:
 *       200:
 *         description: Jeu mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Jeu mis à jour"
 *       404:
 *         description: Jeu non trouvé
 *       500:
 *         description: Erreur serveur
 */

// PUT: Mettre à jour un jeu
export async function PUT(req, { params }) {
    const { gameId } = params;
    const body = await req.json();

    try {
        const gameRef = doc(db, "Games", gameId);
        await updateDoc(gameRef, body);
        return new Response(JSON.stringify({ message: "Jeu mis à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /games/{gameId}:
 *   delete:
 *     summary: Supprimer un jeu
 *     description: Supprimer un jeu de la base de données.
 *     tags: [Games]
 *     parameters:
 *       - in: path
 *         name: gameId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du jeu à supprimer
 *     responses:
 *       204:
 *         description: Jeu supprimé avec succès
 *       404:
 *         description: Jeu non trouvé
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer un jeu
export async function DELETE(req, { params }) {
    const { gameId } = params;

    try {
        await deleteDoc(doc(db, "Games", gameId));
        return new Response(JSON.stringify({ message: "Jeu supprimé" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
