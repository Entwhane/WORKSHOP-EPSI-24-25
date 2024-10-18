import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Topics
 *   description: API pour gérer les sujets
 */

/**
 * @swagger
 * /topics:
 *   post:
 *     summary: Créer un nouveau sujet
 *     description: Ajouter un sujet dans la collection Firebase.
 *     tags: [Topics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic_id:
 *                 type: integer
 *                 example: 3
 *               topic_name:
 *                 type: string
 *                 example: "Vol d'identité"
 *               topic_duration:
 *                 type: integer
 *                 example: 120
 *               topic_progress:
 *                 type: integer
 *                 example: 50
 *               insigne_id:
 *                 type: string
 *                 example: "/Insignes/abc123"
 *     responses:
 *       201:
 *         description: Sujet créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID du sujet créé
 *                   example: "abc123"
 */

// POST: Créer un nouveau sujet
export async function POST(req) {
    const body = await req.json();

    try {
        const newTopicRef = await addDoc(collection(db, "Topics"), {
            topic_id: body.topic_id,
            topic_name: body.topic_name,
            topic_duration: body.topic_duration,
            topic_progress: body.topic_progress,
            insigne_id: body.insigne_id,
            createdAt: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newTopicRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /topics/{topicId}:
 *   get:
 *     summary: Récupérer un sujet par ID
 *     description: Récupérer un sujet spécifique par son ID de Firebase.
 *     tags: [Topics]
 *     parameters:
 *       - in: path
 *         name: topicId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du sujet à récupérer
 *     responses:
 *       200:
 *         description: Détails du sujet
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topic_id:
 *                   type: integer
 *                   example: 3
 *                 topic_name:
 *                   type: string
 *                   example: "Vol d'identité"
 *                 topic_duration:
 *                   type: integer
 *                   example: 120
 *                 topic_progress:
 *                   type: integer
 *                   example: 50
 *                 insigne_id:
 *                   type: string
 *                   example: "/Insignes/abc123"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Sujet non trouvé
 */

// GET: Récupérer un sujet par ID
export async function GET(req, { params }) {
    const { topicId } = params;

    try {
        const topicDoc = await getDoc(doc(db, "Topics", topicId));
        if (!topicDoc.exists()) {
            return new Response(JSON.stringify({ error: "Sujet non trouvé" }), { status: 404 });
        }
        return new Response(JSON.stringify(topicDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /topics/{topicId}:
 *   put:
 *     summary: Mettre à jour un sujet
 *     description: Mettre à jour les détails d'un sujet spécifique.
 *     tags: [Topics]
 *     parameters:
 *       - in: path
 *         name: topicId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du sujet à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               topic_id:
 *                 type: integer
 *                 example: 3
 *               topic_name:
 *                 type: string
 *                 example: "Vol d'identité"
 *               topic_duration:
 *                 type: integer
 *                 example: 120
 *               topic_progress:
 *                 type: integer
 *                 example: 50
 *               insigne_id:
 *                 type: string
 *                 example: "/Insignes/abc123"
 *     responses:
 *       200:
 *         description: Sujet mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sujet mis à jour"
 *       404:
 *         description: Sujet non trouvé
 *       500:
 *         description: Erreur serveur
 */

// PUT: Mettre à jour un sujet
export async function PUT(req, { params }) {
    const { topicId } = params;
    const body = await req.json();

    try {
        const topicRef = doc(db, "Topics", topicId);
        await updateDoc(topicRef, body);
        return new Response(JSON.stringify({ message: "Sujet mis à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /topics/{topicId}:
 *   delete:
 *     summary: Supprimer un sujet
 *     description: Supprimer un sujet de la base de données.
 *     tags: [Topics]
 *     parameters:
 *       - in: path
 *         name: topicId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du sujet à supprimer
 *     responses:
 *       204:
 *         description: Sujet supprimé avec succès
 *       404:
 *         description: Sujet non trouvé
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer un sujet
export async function DELETE(req, { params }) {
    const { topicId } = params;

    try {
        await deleteDoc(doc(db, "Topics", topicId));
        return new Response(JSON.stringify({ message: "Sujet supprimé" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
