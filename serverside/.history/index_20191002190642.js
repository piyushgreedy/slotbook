var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sys"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO slot_booking (userId,timebooked,datebooked) VALUES ('1', '10,13,14', '20')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM slot_booking where userId=1", function (err, result, fields) {
      if (err) throw err;
      console.log(result[0]["userID"]);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  