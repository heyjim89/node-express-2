var express = require('express');

//we need this to receive data from post requests
// YOU CAN ONLY TRANSMIT STRINGS
// Body parser will automatically parse form data from strings in to javascript objects or arrays or numbers.
// Bodyparser attaches form data, the body of the post request, on to req.body
var bodyParser = require('body-parser');

var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// app.use indicates that we're declaring MIDDLEWARE 
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.post('/contact', function  (req,res) {
	console.log(req.body)
	// res.send('Roger that!')
	res.redirect('/')
})

var server = app.listen(9702, function() {
	console.log('Express server listening on port ' + server.address().port);
});
