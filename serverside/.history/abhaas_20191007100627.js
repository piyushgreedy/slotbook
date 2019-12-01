const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sys'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});