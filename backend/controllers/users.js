const pool = require("../sql/connection")


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

// const updateUserById = (req, res) => {


//   pool.query(
//     " UPDATE users SET first_name = '" +
//       req.body.first_name +
//       "', last_name =  '" +
//       req.body.last_name +
//       "' WHERE id = " +
//       req.params.id +
//       "",
//     (err, results) => {
//       if (err) return handleSQLError(res, err);
//       return res.status(204).json();
//     }
//   );
// };

// const deleteUserByFirstName = (req, res) => {
//   // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
//   let sql = 'DELETE FROM ?? WHERE ?? = ??';
//   let userInput = ['users', 'first_name', `${req.params.first_name}`]
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, userInput);

//   pool.query("DELETE FROM users WHERE first_name = '" + req.params.first_name + "'", (err, results) => {
//     if (err) return handleSQLError(res, err);
//     return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//   });
// };

module.exports = {
  createUser,
  // updateUserById,
  // deleteUserByFirstName
};