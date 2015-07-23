var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var voyage = ['Seville','CanaryIslands','CapeVerde','StraitsOfMagellan','Guam','Phillipines']
var cityIndex = 0;


var next = function(){
	var nextCity = cityIndex;
	return voyage[nextCity];
}

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/CanaryIslands', indexController.cn);
app.get('/CapeVerde', indexController.cv);
app.get('/StraitsOfMagellan', indexController.st);
app.get('/Guam', indexController.gm);
app.get('/Phillipines', indexController.ph);

app.post('/formsubmit', function(req, res){
	
	if (cityIndex <= 5){
		++cityIndex;
	}
	else {
		cityIndex = 0;
	}
	if (cityIndex === 0){
		res.redirect('/');
	}
	else{
		res.redirect('/' + voyage[cityIndex]);
	}
})

var server = app.listen(5185, function() {
	console.log('Express server listening on port ' + server.address().port);
});
