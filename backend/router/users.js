const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post('/', usersController.createUser)

// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '../build/index.html'))
// })
module.exports = router

