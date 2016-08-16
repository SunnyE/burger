var connection = require('/connection.js');
// creating queryies for Mysql 
var orm ={
    
    uneatenBurgerQ : function(callback){

        connection.query('SELECT * FROM burgers WHERE devoured = FALSE ORDER BY date ASC', function(err, result){
            if(err){throw err}

            callback(result); 
        });
    },

    eatenBurgerQ: function(callback){
        connection.query("SELECT * FROM burgers WHERE devoured = TRUE order by date DESC", function(err, result){
            if (err){throw err}

            callback(result);
        })
    },

    addBurger: function(burg, callback){
        connection.query("INSERT INTO burgers VALUES (null, ?, FALSE, CURRRENT_TIMESTAMP)", [burg], function(err, result){
            if(err){throw err}

            callback();
        })
    }, 

    consumeBurger: function(burg, callback){
        connection.query("UPDATE burgers SET devoured=TRUE WHERE burger_name=?", [burg], function(err, result){
            if(err){throw err}

            callback();
        })
    }

}

module.exports = orm;