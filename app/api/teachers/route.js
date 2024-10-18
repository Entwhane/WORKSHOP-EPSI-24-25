import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: API pour gérer les enseignants
 */

/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Créer un nouvel enseignant
 *     description: Ajouter un enseignant dans la collection Firebase.
 *     tags: [Teachers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classe:
 *                 type: string
 *                 example: "seconde"
 *               etablissement:
 *                 type: string
 *                 example: "Lycée Jean Moulin"
 *               teacher_id:
 *                 type: string
 *                 example: "/Users/abc123"
 *     responses:
 *       201:
 *         description: Enseignant créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'enseignant créé
 *                   example: "abc123"
 */

// POST: Créer un nouvel enseignant
export async function POST(req) {
    const body = await req.json();

    try {
        const newTeacherRef = await addDoc(collection(db, "Teachers"), {
            classe: body.classe,
            etablissement: body.etablissement,
            teacher_id: body.teacher_id,
            createdAt: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newTeacherRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /teachers/{teacherId}:
 *   get:
 *     summary: Récupérer un enseignant par ID
 *     description: Récupérer un enseignant spécifique par son ID de Firebase.
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'enseignant à récupérer
 *     responses:
 *       200:
 *         description: Détails de l'enseignant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 classe:
 *                   type: string
 *                   example: "seconde"
 *                 etablissement:
 *                   type: string
 *                   example: "Lycée Jean Moulin"
 *                 teacher_id:
 *                   type: string
 *                   example: "/Users/abc123"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Enseignant non trouvé
 */

// GET: Récupérer un enseignant par ID
export async function GET(req, { params }) {
    const { teacherId } = params;

    try {
        const teacherDoc = await getDoc(doc(db, "Teachers", teacherId));
        if (!teacherDoc.exists()) {
            return new Response(JSON.stringify({ error: "Enseignant non trouvé" }), { status: 404 });
        }
        return new Response(JSON.stringify(teacherDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /teachers/{teacherId}:
 *   put:
 *     summary: Mettre à jour un enseignant
 *     description: Mettre à jour les détails d'un enseignant spécifique.
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'enseignant à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               classe:
 *                 type: string
 *                 example: "seconde"
 *               etablissement:
 *                 type: string
 *                 example: "Lycée Jean Moulin"
 *               teacher_id:
 *                 type: string
 *                 example: "/Users/abc123"
 *     responses:
 *       200:
 *         description: Enseignant mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Enseignant mis à jour"
 *       404:
 *         description: Enseignant non trouvé
 *       500:
 *         description: Erreur serveur
 */

// PUT: Mettre à jour un enseignant
export async function PUT(req, { params }) {
    const { teacherId } = params;
    const body = await req.json();

    try {
        const teacherRef = doc(db, "Teachers", teacherId);
        await updateDoc(teacherRef, body);
        return new Response(JSON.stringify({ message: "Enseignant mis à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /teachers/{teacherId}:
 *   delete:
 *     summary: Supprimer un enseignant
 *     description: Supprimer un enseignant de la base de données.
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: teacherId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID de l'enseignant à supprimer
 *     responses:
 *       204:
 *         description: Enseignant supprimé avec succès
 *       404:
 *         description: Enseignant non trouvé
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer un enseignant
export async function DELETE(req, { params }) {
    const { teacherId } = params;

    try {
        await deleteDoc(doc(db, "Teachers", teacherId));
        return new Response(JSON.stringify({ message: "Enseignant supprimé" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
