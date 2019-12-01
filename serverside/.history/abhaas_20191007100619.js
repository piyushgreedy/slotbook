const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost:3306',
  user: 'root',
  password: 'password',
  database: 'sys'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});