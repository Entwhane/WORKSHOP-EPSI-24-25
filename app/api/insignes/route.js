import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Insignes
 *   description: API pour gérer les insignes
 */

/**
 * @swagger
 * /insignes:
 *   post:
 *     summary: Créer un nouvel insigne
 *     description: Ajouter un insigne dans la collection Firebase.
 *     tags: [Insignes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               insigne_id:
 *                 type: number
 *                 example: 1
 *               insigne_name:
 *                 type: string
 *                 example: "cyber hacker"
 *               insigne_description:
 *                 type: string
 *                 example: "Insigne décerné aux experts en cybersécurité"
 *     responses:
 *       201:
 *         description: Insigne créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'insigne créé
 *                   example: "abc123"
 */

// POST: Créer un nouvel insigne
export async function POST(req) {
    const body = await req.json();

    try {
        const newInsigneRef = await addDoc(collection(db, "Insignes"), {
            insigne_id: body.insigne_id,
            insigne_name: body.insigne_name,
            insigne_description: body.insigne_description,
            createdAt: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newInsigneRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /insignes/{insigneId}:
 *   get:
 *     summary: Récupérer un insigne par ID
 *     description: Récupérer un insigne spécifique par son ID de Firebase.
 *     tags: [Insignes]
 *     parameters:
 *       - in: path
 *         name: insigneId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'insigne à récupérer
 *     responses:
 *       200:
 *         description: Détails de l'insigne
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 insigne_id:
 *                   type: number
 *                   example: 1
 *                 insigne_name:
 *                   type: string
 *                   example: "cyber hacker"
 *                 insigne_description:
 *                   type: string
 *                   example: "Insigne décerné aux experts en cybersécurité"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Insigne non trouvé
 */

// GET: Récupérer un insigne par ID
export async function GET(req, { params }) {
    const { insigneId } = params;

    try {
        const insigneDoc = await getDoc(doc(db, "Insignes", insigneId));
        if (!insigneDoc.exists()) {
            return new Response(JSON.stringify({ error: "Insigne non trouvé" }), { status: 404 });
        }
        return new Response(JSON.stringify(insigneDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /insignes/{insigneId}:
 *   put:
 *     summary: Mettre à jour un insigne
 *     description: Mettre à jour les détails d'un insigne spécifique.
 *     tags: [Insignes]
 *     parameters:
 *       - in: path
 *         name: insigneId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'insigne à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               insigne_id:
 *                 type: number
 *                 example: 1
 *               insigne_name:
 *                 type: string
 *                 example: "cyber hacker"
 *               insigne_description:
 *                 type: string
 *                 example: "Insigne décerné aux experts en cybersécurité"
 *     responses:
 *       200:
 *         description: Insigne mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Insigne mis à jour"
 *       404:
 *         description: Insigne non trouvé
 *       500:
 *         description: Erreur serveur
 */

// PUT: Mettre à jour un insigne
export async function PUT(req, { params }) {
    const { insigneId } = params;
    const body = await req.json();

    try {
        const insigneRef = doc(db, "Insignes", insigneId);
        await updateDoc(insigneRef, body);
        return new Response(JSON.stringify({ message: "Insigne mis à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /insignes/{insigneId}:
 *   delete:
 *     summary: Supprimer un insigne
 *     description: Supprimer un insigne de la base de données.
 *     tags: [Insignes]
 *     parameters:
 *       - in: path
 *         name: insigneId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'insigne à supprimer
 *     responses:
 *       204:
 *         description: Insigne supprimé avec succès
 *       404:
 *         description: Insigne non trouvé
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer un insigne
export async function DELETE(req, { params }) {
    const { insigneId } = params;

    try {
        await deleteDoc(doc(db, "Insignes", insigneId));
        return new Response(JSON.stringify({ message: "Insigne supprimé" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
