const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '200.69.22.5', // or the MySQL hostname your provider gives you
  user: 'cloudblogger_sasmit',
  password: 'Admg@1234', // Replace with your actual MySQL password
  database: 'cloudblogger_CloudBlogger',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Database connected as id ' + connection.threadId);
  connection.end();
}); 