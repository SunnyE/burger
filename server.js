var express = require('express');
var connection = require('./config/connection.js').connection;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var routes = require('./controllers/burger_controller.js');
var app = express();
var staticFolder = _dirname + '/public';
var orm = require('./config.orm.js');

app.use(express.static(staticFolder));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));

app.use('/', routes);

app.set('view engine', 'handlebars');



var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Listening on PORT ' + PORT);
});