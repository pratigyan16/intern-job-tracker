const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Applied', 'Interviewed', 'Offered', 'Rejected'],
    default: 'Applied'
  },
  appliedOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);
