var mysql = require('mysql');

var contions = {
    localsql : {
        port: 3000,
        host: 'localhost',
        database: 'burgers_db',
        user: 'root',
        password: ''
    },
    heroku: {
        port:3306,

    }
}

var connection = mysql.createConnection(source.heroku);

connection.connect(function(err){
    if(err){throw err};
    console.log('connected as id');

});

module.exports = connection; 