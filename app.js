var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

// model (blueprint for what goes into the db, similar to a constructor)
var Applicant = mongoose.model('Applicant', 
	// instances of applicant will have a name property that is a string
	{
		name: String,
		bio: String,
		skills: String,
		years: Number,
		why: String
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
app.post('/applicant', function(req, res){
	// Here is where you need to get the data
	// from the post body and store it in the database
	var data = req.body;

	var newApplicant = new Applicant({
		name: data.name,
		bio: data.bio,
		skills: data.skills,
		years: data.years,
		why: data.why
	});
	// sends request to mongodb and puts object into db
	newApplicant.save(function(err, doc){
		res.send(doc);
	});
	// res.send(data);
});

var server = app.listen(8441, function() {
	console.log('Express server listening on port ' + server.address().port);
});
