var orm = require('../config/orm.js');

var burger = {
    uneatenDisplay : function(callback){
        orm.getuneatenBurgerQ(function(deata){
            callback(data);
        })
    },

    eatenDisplay : function(callback){
        orm.geteatenBurgerQ(function(data){
            callback(data);
        })
    },

    addburg: function(burger, callback){
        orm.addBurger(burger, function(){
            callback();
        });
    },

    eatburg: function(burger, callback){
        orm.consumeBurger(burger, function(){
            callback();
        });
    }

}

module.exports = burger; 