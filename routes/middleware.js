/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require("lodash");

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function(req, res, next) {
  res.locals.navLinks = [
    // { label: 'Courses', key: 'courses', href: '/courses' },
    { label: "About us", key: "about", href: "/about" },
    // {
    //   label: "Students",
    //   key: "students",
    //   pages: [
    //     { label: "Online", subkey: "online", href: "/online" },// Open the Moodle account page login using Squadl Account
    //     { label: "Careers", subkey: "career", href: "/careers" }, // Choose your career ( mohit mingle book )
    //     { label: "My Zone", subkey: "myzone", href: "/myzone" }, // notes, pdf, images, blogs
    //     { label: "After Life", subkey: "afterLife", href: "/afterLife" } // life of Square Education student after SE
    //   ]
    // },
    {
      label: "Forms",
      key: "forms",
      pages: [
        { label: "Clear Doubt", subkey: "forms", href: "/clearDoubt" },
        { label: "Feedback", subkey: "forms", href: "/feedback" },
        { label: "Complaint", subkey: "forms", href: "/complaint" }
        // { label: "Enter Marks", subkey: "enterMarks", href: "/enterMarks" } // student will enter the School
        // Marks, & that marks will be displayed calculated & displayed on the first page after verification
      ]
    },
    { label: "Gallery", key: "gallery", href: "/gallery" },
    { label: "Centers", key: "centers", href: "/centers" }
  ];
  res.locals.user = req.user;
  next();
};

/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function(req, res, next) {
  var flashMessages = {
    info: req.flash("info"),
    success: req.flash("success"),
    warning: req.flash("warning"),
    error: req.flash("error")
  };
  res.locals.messages = _.some(flashMessages, function(msgs) {
    return msgs.length;
  })
    ? flashMessages
    : false;
  next();
};

/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function(req, res, next) {
  if (!req.user) {
    req.flash("error", "Please sign in to access this page.");
    res.redirect("/keystone/signin");
  } else {
    next();
  }
};
