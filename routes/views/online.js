var keystone = require('keystone');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'online';

	// Render the view
	view.render('online');
};

/**
 *this section will be purely for LMS, we can redirect student from this page to SE LMS page, student will 
 pay and use the content, first few topic will be free, and rest will be paid
 - The LMS will have thumbnail, as per the board & std
 - On clicking of the respective board, the student can view the content of that particular thumbnail
 - Thumbnail can have content like : Basic Grammar, Advance Grammar, Basic Maths, SSC Xth Std, CBSE Xth Std......
 - Under SSC Xth std, we can have pdf of formula, chemical reaction, tips, tricks etc
 - Student can view the content by entering Name and Mobile number, for that particular session - this will be used
 for lead generation, and to track how many times that particular student had logged into the system
 */