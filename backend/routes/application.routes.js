const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Application routes working' });
});

module.exports = router;
