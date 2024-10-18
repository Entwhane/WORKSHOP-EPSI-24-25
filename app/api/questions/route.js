import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: API pour gérer les questions
 */

/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Créer une nouvelle question
 *     description: Ajouter une question dans la collection Firebase.
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               game_id:
 *                 type: string
 *                 example: "/Games/jXzZKBaxcD9AZayDZoTP"
 *               question_text:
 *                 type: string
 *                 example: "Claire vient de se faire harceler sur internet. Que doit-elle faire ?"
 *               question_type:
 *                 type: string
 *                 example: "QCM"
 *               question_difficulty:
 *                 type: string
 *                 example: "facile"
 *     responses:
 *       201:
 *         description: Question créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la question créée
 *                   example: "abc123"
 */

// POST: Créer une nouvelle question
export async function POST(req) {
    const body = await req.json();

    try {
        const newQuestionRef = await addDoc(collection(db, "Questions"), {
            game_id: body.game_id,
            question_text: body.question_text,
            question_type: body.question_type,
            question_difficulty: body.question_difficulty,
            createdAt: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newQuestionRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /questions/{questionId}:
 *   get:
 *     summary: Récupérer une question par ID
 *     description: Récupérer une question spécifique par son ID de Firebase.
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de la question à récupérer
 *     responses:
 *       200:
 *         description: Détails de la question
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 game_id:
 *                   type: string
 *                   example: "/Games/jXzZKBaxcD9AZayDZoTP"
 *                 question_text:
 *                   type: string
 *                   example: "Claire vient de se faire harceler sur internet. Que doit-elle faire ?"
 *                 question_type:
 *                   type: string
 *                   example: "QCM"
 *                 question_difficulty:
 *                   type: string
 *                   example: "facile"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Question non trouvée
 */

// GET: Récupérer une question par ID
export async function GET(req, { params }) {
    const { questionId } = params;

    try {
        const questionDoc = await getDoc(doc(db, "Questions", questionId));
        if (!questionDoc.exists()) {
            return new Response(JSON.stringify({ error: "Question non trouvée" }), { status: 404 });
        }
        return new Response(JSON.stringify(questionDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /questions/{questionId}:
 *   put:
 *     summary: Mettre à jour une question
 *     description: Mettre à jour les détails d'une question spécifique.
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de la question à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question_text:
 *                 type: string
 *                 example: "Claire vient de se faire harceler sur internet. Que doit-elle faire ?"
 *               question_type:
 *                 type: string
 *                 example: "QCM"
 *               question_difficulty:
 *                 type: string
 *                 example: "facile"
 *     responses:
 *       200:
 *         description: Question mise à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Question mise à jour"
 *       404:
 *         description: Question non trouvée
 *       500:
 *         description: Erreur serveur
 */

// PUT: Mettre à jour une question
export async function PUT(req, { params }) {
    const { questionId } = params;
    const body = await req.json();

    try {
        const questionRef = doc(db, "Questions", questionId);
        await updateDoc(questionRef, body);
        return new Response(JSON.stringify({ message: "Question mise à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /questions/{questionId}:
 *   delete:
 *     summary: Supprimer une question
 *     description: Supprimer une question de la base de données.
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de la question à supprimer
 *     responses:
 *       204:
 *         description: Question supprimée avec succès
 *       404:
 *         description: Question non trouvée
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer une question
export async function DELETE(req, { params }) {
    const { questionId } = params;

    try {
        await deleteDoc(doc(db, "Questions", questionId));
        return new Response(JSON.stringify({ message: "Question supprimée" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
