// Modules
const express = require('express');
const router = express.Router();

// Resources
const { ActivityResources } = require('../resources');

// All routes
router.use('/activities', ActivityResources);

module.exports = router;
