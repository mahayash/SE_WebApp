var keystone = require("keystone");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.data = {
    centers: [],
    loader: false
  };

  locals.section = "centers";
  var centerInfo = keystone.list("Center").model.find();
  
  view.query("team", centerInfo).then(function(err, result, next) {
    if (err) return next(err);
    if (result != null && result.length > 0) {
      locals.data.loader = true;
      locals.data.centers = result;
    }
    next();
  });

  // centerInfo.exec(function(err, result) {
  //   if (result != null && result > 0) {
  //     locals.data.centers = result;
  //     locals.data.loader = true;
  //   }
  // });

  view.render("centers");
};
