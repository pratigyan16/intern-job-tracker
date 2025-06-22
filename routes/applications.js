const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// ✅ CREATE a new application
router.post('/', async (req, res) => {
  console.log('📥 POST /api/applications called'); // Debug log
  try {
    const newApp = new Application(req.body);
    const savedApp = await newApp.save();
    res.status(201).json(savedApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ READ all applications
router.get('/', async (req, res) => {
  try {
    const apps = await Application.find();
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ UPDATE an application's status
router.put('/:id', async (req, res) => {
  try {
    const updatedApp = await Application.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ DELETE an application
router.delete('/:id', async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
