/**
 *  this section will be used for student to get thru the demo videos, Free pdf, Free videos 
 *  All free stuff which can be view or read by the student immediately ( Medium links, youtube link )
 */

var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'students';

	// Render the view
	view.render('students');
};
