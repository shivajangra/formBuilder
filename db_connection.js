const assert = require("assert");
const mysql = require('mysql');
 
   var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'form_builder'
    });
   
    connection.connect(function(err) {
        if (err) throw err;
        console.log('connected')
    });

module.exports = connection;