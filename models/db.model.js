const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASS,
    database: dbConfig.DATA
});

// Open the connection
connection.connect(error => {
    if(error) throw error;
    console.log("Connection succesfull!");
})

module.exports = connection;