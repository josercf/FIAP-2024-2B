const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pedidos API',
            description: "API para gerenciar pedidos",
            contact: {
                name: "Prof José Romualdo",
                email: "joseromualdo@outlook.com",
                url: "https://github.com/josercf/FIAP-2024-2B"
            },
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server"
            },
            {
                url: "<your live url here>",
                description: "Live server"
            },
        ]
    },
    // looks for configuration in specified directories
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Documentation in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
}

module.exports = swaggerDocs;
