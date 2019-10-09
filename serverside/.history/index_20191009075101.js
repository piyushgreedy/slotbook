var mysql = require('mysql');
const express = require('express')
const app = express()
var cors = require('cors');
const bodyParser = require('body-parser');
const url = require('url');
const port = 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sys"
});

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "rohini@26",
//   database: "sys"
// });

con.connect(function(err) {
  console.log("as");
});

app.get('/userSignIn', (req, res) => {
  //Select all customers and return the result object:
  console.log(req.query);
  var totalObj=req.query.bookids.split(":::");
  var username=totalObj[0];
  var password=totalObj[1];
  var selectQuery="SELECT * FROM slot_login where `username`='"+username+"' AND `password`='"+password+"'";

  console.log(selectQuery)
  con.query(selectQuery, function (err, result, fields) {
    if (err) throw err;
    res.setHeader('Content-Type', 'application/json');
    if(result.length>0){
      res.end(JSON.stringify({ a: result[0].userID, b:result[0].username, statusCode:200}));
    }
    else{
      res.status(400);
      res.end(JSON.stringify({ a: "User Already Exists in DataBase", statusCode:500}));
    }      
  });
})

app.get('/userSignUp', (req, res) => {
      //Select all customers and return the result object:
      console.log(req.query);
      var totalObj=req.query.bookids.split(":::");
      var username=totalObj[0];
      var password=totalObj[1];
      var sqlQuery = 'INSERT INTO slot_login (`username`,`password`) VALUES ("'+username.toString()+'","'+password.toString()+'")'
      console.log(sqlQuery)
      con.query(sqlQuery, function (err, result, fields) {
        if (err){
          console.log(err);
          throw err;
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ a: "Sign Up Done Successfully", statusCode:200}));
      });
})


app.get('/getUsage', (req, res) => {
  //Select all customers and return the result object:
  console.log(req.query);
  var totalObj=req.query.bookids.split(":::");
  var pcName=totalObj[0];
  var cDate=totalObj[1];
  var selectQuery="SELECT * FROM slot_booking where `datebooked`='"+cDate+"' AND `pcbooked`='"+pcName+"'";
  console.log(selectQuery)
  con.query(selectQuery, function (err, result, fields) {
    if (err) throw err;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ inUse: true, statusCode:200}));
  });
})

app.get('/getTimeBooked', (req, res) => {
      //Select all customers and return the result object:
      console.log(req.query);
      var totalObj=req.query.bookids.split(":::");
      var cDate=totalObj[0];
      var cPC=totalObj[1];
      var id=totalObj[2];
      // var selectQuery="SELECT * FROM slot_booking where `userId`='"+id+"' AND `datebooked`='"+cDate+"' AND `pcbooked`='"+cPC+"'";
      var selectQuery="SELECT * FROM slot_booking where `datebooked`='"+cDate+"' AND `pcbooked`='"+cPC+"'";
      console.log(selectQuery)
      con.query(selectQuery, function (err, result, fields) {
        if (err) throw err;
        console.log(result.length);
        if(result.length>0){
          var timeBooked="";
          for(var i=0;i<result.length;i++){
            if(i!=result.length-1)
              timeBooked=timeBooked+result[i]["timebooked"]+',';
            else
              timeBooked=timeBooked+result[i]["timebooked"];
          }
          // console.log(result[0]["userID"]);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ a: timeBooked, statusCode:200}));
        }else{
           // console.log(result[0]["userID"]);
           res.status(400);
           res.setHeader('Content-Type', 'application/json');
           res.end(JSON.stringify({ a: "1", statusCode:500}));
        }
      });
})

app.get('/bookTimeSlot', async(req, res) => {
      console.log(req.query);
      var totalObj=req.query.bookids.split(":::");
      var bookingId=totalObj[0];
      var cData=totalObj[1];
      var cPC=totalObj[2];
      var id=totalObj[3];

      console.log(bookingId);
      console.log(cData);
      console.log(cPC);
      console.log(id);

      var selectQuery="SELECT * FROM slot_booking where `datebooked`='"+cData+"' AND `pcbooked`='"+cPC+"'";
      var sqlQuery = 'INSERT INTO slot_booking (`userID`,`timebooked`,`datebooked`,`pcbooked`) VALUES ("'+id.toString()+'","'+bookingId.toString()+'","'+cData.toString()+'","'+cPC.toString()+'")'

      // var sql = "UPDATE slot_booking SET timeBooked='" + bookingId.toString() + "' WHERE userID="+1;
      console.log(sqlQuery);

      con.query(selectQuery, function (err, result, fields) {
        if (err) throw err;
        console.log(result.length);
        var timeBooked="";
        for(var i=0;i<result.length;i++){
          if(i!=result.length-1)
            timeBooked=timeBooked+result[i]["timebooked"]+',';
          else
            timeBooked=timeBooked+result[i]["timebooked"];
        }
        var matchedBookig=timeBooked.split(",")
        var bookingIDArray=bookingId.split(",")
        console.log(matchedBookig);
        console.log(bookingIDArray);

        var isMatched = matchedBookig.some(item => bookingIDArray.includes(item)) 
        res.setHeader('Content-Type', 'application/json');

        if(isMatched){
          res.end(JSON.stringify({ a: 1, statusCode:200}));
        }else{
          con.query(sqlQuery, function (err, result) {
            if (err) throw err;
            // console.log(result.affectedRows + " record(s) updated");
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ a: 2, statusCode:200}));
          });
        }
      });
})

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO slot_booking (userId,timebooked,datebooked) VALUES ('1', '10,13,14', '20')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  