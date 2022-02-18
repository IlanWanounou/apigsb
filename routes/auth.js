const express = require('express');
const authCrl = require('../controllers/auth');

const router = express.Router();
router.get('/login', authCrl.login);

module.exports = router;