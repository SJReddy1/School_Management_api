const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Use the full connection string from DB_URL
const connection = mysql.createConnection(process.env.DB_URL);

connection.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = connection;
