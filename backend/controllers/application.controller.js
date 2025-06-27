const Application = require('../models/application.model');

const createApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json({ data: application });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createApplication, getApplications };
