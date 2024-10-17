import swaggerDocument from '../../../lib/swagger'; // Assurez-vous que c'est bien défini ici

export async function GET(req) {
    return new Response(JSON.stringify(swaggerDocument), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
