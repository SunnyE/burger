var connection = require('/connection.js');

var orm ={
    
    uneatenBurgerQ : function(callback){

        connection.query('SELECT * FROM burgers WHERE devoured = FALSE ORDER BY date ASC', function(err, result){
            if(err){throw err;}

            callback(result); 
        });
    },

    eatenBurgerQ: function(callback){
        
    }

}