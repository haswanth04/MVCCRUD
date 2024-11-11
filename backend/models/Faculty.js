const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Faculty', facultySchema);