const pool = require("../sql/connection")
const mysql = require('mysql')
const {handleSQLError} = require("../sql/error")


const firstVote = (req, res) => {
console.log("vote total ", req.body.vote_total)
console.log("id: ", req.body.restaurant_id)

let sql = "INSERT INTO UserDB.restaurantVotes (restaurant_id, vote_total) VALUES (?, ?)";
sql = mysql.format(sql, [req.body.restaurant_id, req.body.vote_total])

pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.json({ vote_total: results });
    })
};


//UPDATE `UserDB`.`restaurantVotes` SET `vote_total` = '3' WHERE (`restaurant_id` = 'abcd12345');

const restaurantVoter = (req, res) => {
    
    let sql = "UPDATE UserDB.restaurantVotes SET vote_total = ? WHERE restaurant_id = ?"
    sql = mysql.format(sql, [req.body.vote_total, req.body.restaurant_id])

    pool.query(sql, (err, results) => {
      if (err) return handleSQLError(res, err);
      return res.json({ vote_total: results });
    })
    }
  


module.exports = {
  restaurantVoter,
  firstVote
};