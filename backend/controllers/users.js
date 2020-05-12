const pool = require("../sql/connection")
const {handleSQLError} = require("../sql/error")


const createUser = (req, res) => {

  pool.query(
		"INSERT UserDB.userinfo (email, username, password) values ('" + 
		
			req.body.email + 
			"', '" +
      req.body.username +
      "', '" +
      req.body.password +
			"')"
			,
    (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.json({ newUser: results });
    }
  );
};

module.exports = {
  createUser
};