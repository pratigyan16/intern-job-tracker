const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
  name: String,
  email: String,
  appliedRole: String
});

module.exports = mongoose.model('Intern', internSchema);
