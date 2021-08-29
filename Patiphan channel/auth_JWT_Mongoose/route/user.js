const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const userControllers = require('../controller/user');

// Register
router.post('/register', userControllers.register);

// login
router.post('/login', userControllers.login);

router.post('/welcome', auth, (req, res) => {
  res.status(200).send('Welcome  ');
});

module.exports = router;
