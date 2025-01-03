const express = require('express');
const UserController = require('../../controllers/url');

const router = express.Router();

router.post('/shorten', UserController.generateNewShortUrl);
router.get('/getAll', UserController.getAll);
router.get('/get/:shortid', UserController.get);

module.exports = router;