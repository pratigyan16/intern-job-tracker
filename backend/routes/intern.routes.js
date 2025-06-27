const express = require('express');
const router = express.Router();
const Intern = require('../models/intern.model');

router.get('/', async (req, res) => {
  const interns = await Intern.find();
  res.json(interns);
});

router.post('/', async (req, res) => {
  const newIntern = new Intern(req.body);
  const savedIntern = await newIntern.save();
  res.status(201).json(savedIntern);
});

module.exports = router;
