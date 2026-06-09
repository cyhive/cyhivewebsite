const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// Add new Certificate
router.post('/', async (req, res) => {
  try {
    const { certificateId, type, studentName, pdfBase64 } = req.body;
    
    if (!certificateId || !type || !studentName || !pdfBase64) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    if (!['internship', 'course'].includes(type)) {
      return res.status(400).json({ success: false, message: 'Invalid certificate type.' });
    }

    // Check if already exists
    const existing = await Certificate.findOne({ certificateId, type });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Certificate with this ID and type already exists.' });
    }

    const newCertificate = new Certificate({
      certificateId,
      type,
      studentName,
      pdfUrl: pdfBase64 // We're storing the Base64 Data URL string here
    });

    await newCertificate.save();

    res.json({
      success: true,
      message: 'Certificate added successfully!',
      data: newCertificate
    });
  } catch (error) {
    console.error('Add certificate error:', error);
    res.status(500).json({ success: false, message: 'Server error while adding certificate.' });
  }
});

// Get all certificates (exclude pdfUrl for performance)
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find({}, { pdfUrl: 0 }).sort({ issueDate: -1 });
    res.json({
      success: true,
      data: certificates
    });
  } catch (error) {
    console.error('Get certificates error:', error);
    res.status(500).json({ success: false, message: 'Server error while fetching certificates.' });
  }
});

// Delete a certificate
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCertificate = await Certificate.findByIdAndDelete(id);
    
    if (!deletedCertificate) {
      return res.status(404).json({ success: false, message: 'Certificate not found.' });
    }

    res.json({
      success: true,
      message: 'Certificate deleted successfully.'
    });
  } catch (error) {
    console.error('Delete certificate error:', error);
    res.status(500).json({ success: false, message: 'Server error while deleting certificate.' });
  }
});

module.exports = router;
