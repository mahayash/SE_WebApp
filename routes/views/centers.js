var keystone = require("keystone");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.data = {
    centers: []
  };

  locals.section = "centers";
  var centerInfo = keystone.list("Center").model.find();
  centerInfo.exec(function(err, result) {
    locals.data.centers = result;
  });
  view.render("centers");
};
