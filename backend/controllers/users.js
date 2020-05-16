const pool = require("../sql/connection")
const mysql = require("mysql")
const { handleSQLError } = require("../sql/error")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const saltRounds = 10

const createUser = (req, res) => {
  const { username, password } = req.body

  bcrypt.hash(password, saltRounds, function (err, hash) {

    pool.query(
      "INSERT UserDB.userinfo (email, username, password) values ('" +

      req.body.email +
      "', '" +
      req.body.username +
      "', '" +
      hash +
      "')"
      ,

      (err, results) => {
        if (err) return handleSQLError(res, err);
        return res.json({ newUser: results });
      }
    );
  })
}
module.exports = {
  createUser
}