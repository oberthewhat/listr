const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post('/login', authController.login)

module.exports = router