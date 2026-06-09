const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  certificateId: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['internship', 'course']
  },
  studentName: {
    type: String,
    required: true
  },
  pdfUrl: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Certificate', certificateSchema);
