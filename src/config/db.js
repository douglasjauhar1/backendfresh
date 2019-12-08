require('dotenv/config');
const mysql = require('mysql');

conn = mysql.createConnection({
    host        : '127.0.0.1',
    user        : 'admin',
    password    : 'admin4321',
    database    : 'myHire'
});

conn.connect((err) => {
    if(err) 
        console.log("the database error: ", err);
    else    
        console.log("the database connected");
});

module.exports = conn;
