const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const login = (req, res) => {

  const { username, password } = req.body
	console.log(username, password) 
	
  let sql = "SELECT * FROM UserDB.userinfo WHERE username = ? "

	sql = mysql.format(sql, [ username ])
	


  pool.query(sql, (err, rows) => {

    if (err) return handleSQLError(res, err)
 
		if (!rows.length) return res.status(404).send('No matching users')
		
    const hash = rows[0].password
    // compares password entered by user on login with hashed password in DB
    bcrypt.compare(password, hash)
      .then(result => {
        if (!result) return res.status(400).send('Invalid password')
        // data = collection of all of the fields of data in the first row
        const data = { ...rows[0] }
        // password is redacted for privacy
        data.password = 'REDACTED'
        console.log(data)
        // token is created using the user data, and given key 'secret' to unlock it later
        const token = jwt.sign(data, 'secret')
        res.json({
          msg: 'Login successful',
          token
        })
      }).then(logStatus = true)
      console.log(logStatus)
      
  })
}

module.exports = {
	login
}