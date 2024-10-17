const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "API Documentation for Your Project",
        version: "1.0.0",
        description: "Documentation API pour votre projet Next.js",
    },
    servers: [
        {
            url: "http://localhost:3000/api", // Remplace par l'URL de production si nécessaire
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ["./app/api/**/*.js"], // Chemin où Swagger doit chercher les fichiers de route
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
