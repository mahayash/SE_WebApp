var keystone = require("keystone");

exports = module.exports = function(req, res) {
  let view = new keystone.View(req, res);
  let locals = res.locals;
  locals.data = {
    parentVideos: []
  };

  let parentAppVideoListQuery = keystone.list("SquadlParentAppVideos").model.find();
  view
    .query("parentAppVideos", parentAppVideoListQuery)
    .then(function(err, result, next) {
      if (err) return next(err);
      if (result != null && result.length > 0) {
        locals.data.parentVideos = result;
      }

      next();
    });

  view.render("squadlParentAppVideos");
};
