var keystone = require("keystone");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var locals = res.locals;
  locals.data = {
    result: []
  };
  locals.section = "answerpaper";
  var Assignment = keystone
    .list("Assignment")
    .model.find()
    .sort("-Date")
    
  view.query("assignment", Assignment).then(function(err, result, next) {
    if (err) return next(err);
    if (result != null && result.length > 0) {
      locals.data.result = result;
    }
    next();
  });

  view.render("assignment");
};
