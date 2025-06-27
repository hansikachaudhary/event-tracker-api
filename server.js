const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// Routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

// 🔥 Swagger Setup Start
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Event Tracker API',
      version: '1.0.0',
      description: 'API documentation for Event Tracker',
    },
  },
  apis: ['./routes/*.js'], // 👈 path to where your JSDoc comments will live
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// 🔥 Swagger Setup End

app.get('/openapi.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerDocs);
});

module.exports = app;
