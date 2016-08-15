var express = require('express');

var app = express();

var handlebars = require('express-handlebars');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var staticFolder = _dirname + '/views';

app.use(express.static(staticFolder));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(methodOverride('_method'));

app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

require("./controllers/burger_controller.js)")(app);

var PORT = process.env.PORT || 3000;

app.listen(PORT);