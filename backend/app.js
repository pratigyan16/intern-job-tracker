const express = require('express');
const dotenv = require('dotenv');
const applicationRoutes = require('./routes/application.routes');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/applications', applicationRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Intern Job Tracker API is running');
});

// Connect to DB only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}

module.exports = app;
