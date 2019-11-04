const express = require('express');
const router = express.Router();

const gameController = require('../controllers/game');
const sendResponse = require('../helpers/sendResponse');

router.get('/game', gameController.init, sendResponse);

module.exports = router;
