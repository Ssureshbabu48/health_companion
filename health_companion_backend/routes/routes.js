const express = require('express');
const mods = require('../controller/post');

const router = express.Router();

router.get('/', mods.testPost);
router.get('/pulse', mods.pulse);
router.get('/temperature', mods.temperature);

module.exports = router;