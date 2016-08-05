var express = require('express');
var path = require('path');
var swig = require('swig');
swig.setDefaults({ cache: false });
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var categories = require('./db');

var app = express();

app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next){
	res.render('index', {title: 'Acme Categories - Home', categories: categories.getCategories() });
});

app.use('/categories', require('./routes/categories'));

app.listen(process.env.PORT, function(){
	console.log('Listening on Port: ' + process.env.PORT);
});
