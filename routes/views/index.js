var keystone = require('keystone');

exports = module.exports = async function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var StoreResult = {};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		studentScore: [],
	};
	locals.data = {
		testimonial: [],
	};

	// get the list of all student score
	var studentScore = keystone.list('StudentScore').model.find().select('studentName');
	studentScore.exec(function (err, result1) {
		locals.data.studentScore = result1;
	});


	var testimonial = keystone.list('Testimonial').model.find().select('studentName');
	testimonial.exec(function (err, result2) {
		locals.data.testimonial = result2;
	});

	// Render the view
	view.render('index');
};
