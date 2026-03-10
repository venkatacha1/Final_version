const express = require('express');
const router = express.Router();
const { createFilling, getFillings } = require('../controllers/fillingsController');

router.route('/').post(createFilling).get(getFillings);

module.exports = router;
