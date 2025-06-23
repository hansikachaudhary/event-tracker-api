const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// Import and use your event routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

module.exports = app; // Only export the app, do NOT connect to DB or listen here