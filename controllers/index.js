var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	cn: function(req, res){
		res.render('canary');
	},
	cv: function(req, res){
		res.render('capeverde');
	},
	st: function(req, res){
		res.render('straitsofmag');
	},
	gm: function(req, res){
		res.render('guam');
	},
	ph: function(req, res){
		res.render('philip');
	},
};

module.exports = indexController;