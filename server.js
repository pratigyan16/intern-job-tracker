 
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Allow frontend access
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
connectDB();

// API route
app.use('/api/applications', require('./routes/applications'));

// Test route
app.get('/', (req, res) => {
  res.send('🚀 Backend is running and MongoDB is connected!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});
