const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  status: String,
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Intern', internSchema);
