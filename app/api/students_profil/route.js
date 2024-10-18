import { collection, addDoc, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";

/**
 * @swagger
 * tags:
 *   name: Students_profil
 *   description: API pour gérer les profils des étudiants
 */

/**
 * @swagger
 * /students_profil:
 *   post:
 *     summary: Créer un nouveau profil étudiant
 *     description: Ajouter un profil étudiant dans la collection Firebase.
 *     tags: [Students_profil]
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
 *               insigne_id:
 *                 type: string
 *                 example: "/Insignes/abc123"
 *               profil_student_id:
 *                 type: string
 *                 example: "12345"
 *               progress_global:
 *                 type: integer
 *                 example: 50
 *               score:
 *                 type: integer
 *                 example: 30
 *               user_id:
 *                 type: string
 *                 example: "/Users/xyz789"
 *     responses:
 *       201:
 *         description: Profil étudiant créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID du profil étudiant créé
 *                   example: "abc123"
 */

// POST: Créer un nouveau profil étudiant
export async function POST(req) {
    const body = await req.json();

    try {
        const newProfilRef = await addDoc(collection(db, "Students_profil"), {
            classe: body.classe,
            etablissement: body.etablissement,
            insigne_id: body.insigne_id,
            profil_student_id: body.profil_student_id,
            progress_global: body.progress_global,
            score: body.score,
            user_id: body.user_id,
            createdAt: new Date().toISOString(),
        });
        return new Response(JSON.stringify({ id: newProfilRef.id }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /students_profil/{studentId}:
 *   get:
 *     summary: Récupérer un profil étudiant par ID
 *     description: Récupérer un profil étudiant spécifique par son ID de Firebase.
 *     tags: [Students_profil]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du profil étudiant à récupérer
 *     responses:
 *       200:
 *         description: Détails du profil étudiant
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
 *                 insigne_id:
 *                   type: string
 *                   example: "/Insignes/abc123"
 *                 profil_student_id:
 *                   type: string
 *                   example: "12345"
 *                 progress_global:
 *                   type: integer
 *                   example: 50
 *                 score:
 *                   type: integer
 *                   example: 30
 *                 user_id:
 *                   type: string
 *                   example: "/Users/xyz789"
 *                 createdAt:
 *                   type: string
 *                   example: "2024-10-16T00:00:00Z"
 *       404:
 *         description: Profil étudiant non trouvé
 */

// GET: Récupérer un profil étudiant par ID
export async function GET(req, { params }) {
    const { studentId } = params;

    try {
        const studentDoc = await getDoc(doc(db, "Students_profil", studentId));
        if (!studentDoc.exists()) {
            return new Response(JSON.stringify({ error: "Profil étudiant non trouvé" }), { status: 404 });
        }
        return new Response(JSON.stringify(studentDoc.data()), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /students_profil/{studentId}:
 *   put:
 *     summary: Mettre à jour un profil étudiant
 *     description: Mettre à jour les détails d'un profil étudiant spécifique.
 *     tags: [Students_profil]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du profil étudiant à mettre à jour
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
 *               insigne_id:
 *                 type: string
 *                 example: "/Insignes/abc123"
 *               profil_student_id:
 *                 type: string
 *                 example: "12345"
 *               progress_global:
 *                 type: integer
 *                 example: 50
 *               score:
 *                 type: integer
 *                 example: 30
 *               user_id:
 *                 type: string
 *                 example: "/Users/xyz789"
 *     responses:
 *       200:
 *         description: Profil étudiant mis à jour avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Profil étudiant mis à jour"
 *       404:
 *         description: Profil étudiant non trouvé
 *       500:
 *         description: Erreur serveur
 */

// PUT: Mettre à jour un profil étudiant
export async function PUT(req, { params }) {
    const { studentId } = params;
    const body = await req.json();

    try {
        const studentRef = doc(db, "Students_profil", studentId);
        await updateDoc(studentRef, body);
        return new Response(JSON.stringify({ message: "Profil étudiant mis à jour" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}

/**
 * @swagger
 * /students_profil/{studentId}:
 *   delete:
 *     summary: Supprimer un profil étudiant
 *     description: Supprimer un profil étudiant de la base de données.
 *     tags: [Students_profil]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *           description: ID du profil étudiant à supprimer
 *     responses:
 *       204:
 *         description: Profil étudiant supprimé avec succès
 *       404:
 *         description: Profil étudiant non trouvé
 *       500:
 *         description: Erreur serveur
 */

// DELETE: Supprimer un profil étudiant
export async function DELETE(req, { params }) {
    const { studentId } = params;

    try {
        await deleteDoc(doc(db, "Students_profil", studentId));
        return new Response(JSON.stringify({ message: "Profil étudiant supprimé" }), { status: 204 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
