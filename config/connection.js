var mysql = require('mysql');

var connection = mysql.createConnection({
        host: 'localhost',
        database: 'burgers_db',
        user: 'root',
        password: ''
    });

connection.connect(function(err){
    if(err){throw err};
    console.log('connected as id' + connection.threadId);

});

module.exports.connection = connection; 