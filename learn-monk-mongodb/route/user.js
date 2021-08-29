const express = require('express');
const router = express.Router();
const usersController = require('../controller/user');

router.post('/add', usersController.creteUser);
module.exports = router;
