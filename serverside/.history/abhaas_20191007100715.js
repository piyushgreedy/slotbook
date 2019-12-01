const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'sys'
});

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'sys'
  });

connection.connect((err) => {
  if (err){
      console.log(err);
      throw err;
  }
  console.log('Connected!');
});