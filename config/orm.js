var connection = require('./connection.js');
// creating queryies for Mysql 
var orm ={
    
    getAll : function(table, callback){
        var query = "SELECT * FROM " + table; 
        connection.query(query, function(err, result){
            if(err){throw err}

            callback(result); 
        });
    },


    addTo: function(table, burgName){
        var freshBurger = {
            burgerName  = burgName,
            devoured: false
        }

        var query = "INSERT INTO " + table + "SET ?"
        connection.query(query, freshBurger, function(err, result){
            if(err){throw err}

            callback();
        })
    }, 

    update: function(table, id){

        var toUpdate =[
            {devoured: true},
            {id:id}
        ];

        var query = "UPDATE " + table + ' SET ? WHERE ?';
        connection.query(query, toUpdate, function(err, result){
            if(err){throw err}

            callback();
        })
    }

}

module.exports = orm;