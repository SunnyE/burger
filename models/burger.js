var orm = require('../config/orm.js');

var burger = {
    uneatenDisplay : function(callback){
        orm.getuneatenBurgerQ(function(deata){
            callback(data);
        })
    },

    eatenDisplay : function(callback){
        orm.geteatenBurgerQ
    }

}