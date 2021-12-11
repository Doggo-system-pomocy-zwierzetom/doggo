const mysql = require('mysql2');

const db = mysql.createConnection({
  connectionLimit: 10,
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'b219de4798e456',
  database: 'heroku_9b7d17781b6e962',
  password: '30e2c5bb',
});

db.connect(function (error: any) {
  if (error) console.log(error);
  else console.log('SQL Database Connected!');
});

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'eu-cdbr-west-01.cleardb.com',
  user: 'b219de4798e456',
  database: 'heroku_9b7d17781b6e962',
  password: '30e2c5bb',
});

export default pool;
