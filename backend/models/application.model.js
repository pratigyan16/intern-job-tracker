// backend/models/application.model.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  position: String,
  company: String,
  status: String,
  appliedDate: Date
});

module.exports = mongoose.model('Application', applicationSchema);
