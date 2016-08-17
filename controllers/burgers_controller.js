var express = require('express');
var methodOverride = require('method-override');
var router = express.Router();
var burger = require('../models/burger.js');
var bodyParser = require('body-parser');

model.exports = function(app){
    
    app.get("/app/uneatenBurgerQ", function(req,res){
        burger.uneatenDisplay(function(data){
            res.json(data);
        });
    })

    app.get("/api/eatenBurgerQ", function(req, res){
        burger.eatenDisplay(function(data){
            res.json(data);
        });
    })

    app.post("/create", function(req, res){
        var burgerToAdd = req.body.burgerName;

        burger.addNew(burgerToAdd, function(){
            res.redirect('/');
            res.end("{'sucess': 'updated sucessfully', 'status': 200}");
        });
    })


    app.post("/devoured/:id", function(req, res){
        var burgerGone = req.body;
        burger.consumeBurger(burgerGone.name, function(){
            res.redirect('/')
            res.end("{'success': 'Updated!', 'status': 200}");
            
        }); 
    })

    

} 
