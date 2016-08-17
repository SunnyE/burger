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

    app.post("/api/add", function(req, res){
        var burgerToAdd = req.body;

        burger.addNew(burgerToAdd.name, function(){
            res.end("{'sucess': 'updated sucessfully', 'status': 200}");
        });
    })


    app.put("/api/eat", function(req, res){
        var burgerGone = req.body;

        burger.consumeBurger(burgerGone.name, function(){
            res.end("{'success': 'Updated!', 'status': 200}");
        }); 
    })

    app.get('/', function(req, res){
        res.render("../views/index/html");
    })

} 
