var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var applicant = mongoose.model('Applicant', 
	// instances of applicant will have a name property that is a string
	{
		name: String
	});

mongoose.connect('mongodb://localhost/Andrew');

app.get('/', function(req, res) {
	res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	var data = new Data({name: 'testName'});
	res.render('applicants');
});

app.get('/success', function(req, res){
	res.send('Success!!!!');
});

// creates and applicant
app.get('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database

	res.redirect('/success');

});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
