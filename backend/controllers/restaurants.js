const pool = require("../sql/connection")
const mysql = require('mysql')
const {handleSQLError} = require("../sql/error")

////////////////    INSERT NEW VOTE TO DB      /////////////////////
const firstVote = (req, res) => {
console.log("POST FUNCTION vote total ", req.body.vote_total)
console.log("POST FUNCTION id: ", req.body.restaurant_id)

let sql = "INSERT INTO UserDB.restaurantVotes (restaurant_id, vote_total) VALUES (?, ?)";
sql = mysql.format(sql, [req.body.restaurant_id, req.body.vote_total])

pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.json({ vote_total: results });
    })
};

////////////////     UPDATE VOTE INTO DB         ///////////////////
const restaurantVoter = (req, res) => {
        let sql = "UPDATE UserDB.restaurantVotes SET vote_total = ? WHERE restaurant_id = ?"
    sql = mysql.format(sql, [req.body.vote_total, req.body.restaurant_id])

    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.json({ vote_total: results });
    })
    }
////////////////     GET CURRENT STORED VOTES      ////////////////  
const getAllVotes = (req, res) => {

  let sql = "SELECT * FROM UserDB.restaurantVotes";
  let sqlInput = ["*", "UserDB.restaurantVotes"]
  sql = mysql.format(sql, sqlInput)

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res,err);
    console.log(rows)
    return res.json(rows)
  })
} 
  
module.exports = {
  restaurantVoter,
  firstVote,
  getAllVotes
};