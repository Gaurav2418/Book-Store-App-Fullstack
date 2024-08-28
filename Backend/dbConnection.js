const mongoose = require('mongoose');

const mongoURL ='mongodb://127.0.0.1:27017/app';

// Set up MongoDB connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
const db = mongoose.connection;

// event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = db;