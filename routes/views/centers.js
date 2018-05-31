var keystone = require("keystone");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = "centers";
  var centerInfo = keystone.list("Center").model.find();
  centerInfo.exec(function(err, result) {
	  console.log('result '+ result);
  });
  view.render("centers");
};
