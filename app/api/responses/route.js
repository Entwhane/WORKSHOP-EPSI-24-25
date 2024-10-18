import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Responses
 *   description: API pour gérer les réponses
 */

/**
 * @swagger
 * /responses:
 *   post:
 *     summary: Créer une nouvelle réponse
 *     description: Ajouter une réponse dans la collection Firebase.
 *     tags: [Responses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question_id:
 *                 type: string
 *                 example: "/Questions/Y9hHdf0R73QpH6gDVRRz"
 *               title:
 *                 type: string
 *                 example: "Partager l'incident avec un adulte de confiance."
 *               is_correct:
 *                 type: boolean
 *                 example: true
 *               advice:
 *                 type: string
 *                 example: "C'est important de parler à un adulte si on se sent mal ou désorienté."
 *     responses:
 *       201:
 *         description: Réponse créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la réponse créée
 *                   example: "abc123"
 */

// POST: Créer une nouvelle réponse
export async function POST(req) {
    const body = await req.json();

    try {
        const newResponseRef = await addDoc(collection(db, "Responses"), {
            question_id: body.question_id,
            title: body.title,
            is_correct: body.is_correct,
            advice: body.advice,
            createdAt: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newResponseRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /responses/{responseId}:
 *   get:
 *     summary: Récupérer une réponse par ID
 *     description: Récupérer une réponse spécifique par son ID de Firebase.
 *     tags: [Responses]
 *     parameters:
 *       - in: path
 *         name: responseId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de la réponse à récupérer
 *     responses:
 *       200:
 *         description: Détails de la réponse
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 question_id:
 *                   type: string
 *                   example: "/Questions/Y9hHdf0R73QpH6gDVRRz"
 *                 title:
 *                   type: string
 *                   example: "Partager l'incident avec un adulte de confiance."
 *                 is_correct:
 *                   type: boolean
 *                   example: true
 *                 advice:
 *                   type: string
 *                   example: "C'est important de parler à un adulte si on se sent mal ou désorienté."
 *                 createdAt:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Réponse non trouvée
 */

// GET: Récupérer une réponse par ID
export async function GET(req, { params }) {
    const { responseId } = params;

    try {
        const responseDoc = await getDoc(doc(db, "Responses", responseId));
        if (!responseDoc.exists()) {
            return new Response(JSON.stringify({ error: "Réponse non trouvée" }), { status: 404 });
        }
        return new Response(JSON.stringify(responseDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /responses/{responseId}:
 *   put:
 *     summary: Mettre à jour une réponse
 *     description: Mettre à jour les détails d'une réponse spécifique.
 *     tags: [Responses]
 *     parameters:
 *       - in: path
 *         name: responseId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de la réponse à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Partager l'incident avec un adulte de confiance."
 *               is_correct:
 *                 type: boolean
 *                 example: true
 *               advice:
 *                 type: string
 *                 example: "C'est important de parler à un adulte si on se sent mal ou désorienté."
 *     responses:
 *       200:
 *         description: Réponse mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Réponse mise à jour"
 *       404:
 *         description: Réponse non trouvée
 *       500:
 *         description: Erreur serveur
 */

// PUT: Mettre à jour une réponse
export async function PUT(req, { params }) {
    const { responseId } = params;
    const body = await req.json();

    try {
        const responseRef = doc(db, "Responses", responseId);
        await updateDoc(responseRef, body);
        return new Response(JSON.stringify({ message: "Réponse mise à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /responses/{responseId}:
 *   delete:
 *     summary: Supprimer une réponse
 *     description: Supprimer une réponse de la base de données.
 *     tags: [Responses]
 *     parameters:
 *       - in: path
 *         name: responseId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de la réponse à supprimer
 *     responses:
 *       204:
 *         description: Réponse supprimée avec succès
 *       404:
 *         description: Réponse non trouvée
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer une réponse
export async function DELETE(req, { params }) {
    const { responseId } = params;

    try {
        await deleteDoc(doc(db, "Responses", responseId));
        return new Response(JSON.stringify({ message: "Réponse supprimée" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
