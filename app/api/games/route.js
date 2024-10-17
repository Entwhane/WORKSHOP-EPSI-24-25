/**
 * @swagger
 * /api/games:
 *   get:
 *     summary: Récupérer la liste des jeux
 *     description: Obtenir la liste complète des jeux disponibles.
 *     responses:
 *       200:
 *         description: Liste des jeux récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "1"
 *                   title:
 *                     type: string
 *                     example: "Jeu éducatif"
 */
export async function GET(req) {
    const games = [
        { id: "1", title: "Jeu éducatif" },
        { id: "2", title: "Jeu d'aventure" },
    ];
    return new Response(JSON.stringify(games), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
