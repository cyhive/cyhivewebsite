const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate');

// Verify Certificate by ID
router.get('/:type/:id', async (req, res) => {
  try {
    const { type, id } = req.params;
    
    // Ensure the type is valid
    if (!['internship', 'course'].includes(type)) {
      return res.status(400).json({ success: false, message: 'Invalid certificate type' });
    }

    const certificate = await Certificate.findOne({ certificateId: id, type: type });

    if (!certificate) {
      return res.status(404).json({ success: false, message: 'Certificate not found' });
    }

    res.json({
      success: true,
      data: certificate
    });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ success: false, message: 'Server error during verification' });
  }
});

module.exports = router;
