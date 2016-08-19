var orm = require('../config/orm.js');

var burger = {
    
        all : function(callback){
        orm.getAll(function(data){
            callback(data);
        })
    },
    
    create : function(burger) {
        orm.addTo('burgers', burgName);
    },

    update: function(id){
        orm.update('burgers', id);
    }

};

