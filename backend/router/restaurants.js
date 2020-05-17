const express = require('express')
const voterController = require('../controllers/restaurants')
const authController = require('../controllers/auth')
const usersController = require('../controllers/users')
const router = express.Router()

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "append,delete,entries,foreach,get,has,keys,set,values,Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
});

router.post('/', voterController.firstVote )

router.put('/listings', voterController.restaurantVoter )

router.get('/listings', voterController.getAllVotes)

router.post('/login', authController.login)

router.post('/', usersController.createUser)


module.exports = router