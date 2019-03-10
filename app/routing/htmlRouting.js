
// DEPENDENCIES
// ###########################################################################
var path = require('path');

// Routing

module.exports = function (app) {
	// HTML GET Requests
    // ###########################################################################

	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};