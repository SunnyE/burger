var express = require('express');
var methodOverride = require('method-override');
var router = express.Router();
var burger = require('../models/burger.js');
var bodyParser = require('body-parser');

model.exports = function(app){


    
    router.get("/", function(req,res){
        burger.getAll(function(data){

            
            res.render('index', data);
        });
    })


    router.post("/create", function(req, res){
        var burgerToAdd = req.body.burgerName;

        burger.addNew(burgerToAdd, function(){
            res.redirect('/');
            res.end("{'sucess': 'updated sucessfully', 'status': 200}");
        });
    })


    router.post("/devoured/:id", function(req, res){
        var burgerGone = req.body;
        burger.consumeBurger(burgerGone.name, function(){
            res.redirect('/')
            res.end("{'success': 'Updated!', 'status': 200}");
            
        }); 
    })

    

} 
