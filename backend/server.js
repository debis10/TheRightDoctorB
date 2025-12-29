const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/therightdoctor';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
const personRoutes = require('./routes/person.routes');
app.use('/person', personRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'TheRightDoctor API Server',
        status: 'Running',
        endpoints: {
            'GET /person': 'Get all people',
            'GET /person/:id': 'Get person by ID',
            'POST /person': 'Create new person',
            'PUT /person/:id': 'Update person',
            'DELETE /person/:id': 'Delete person'
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

module.exports = app;
