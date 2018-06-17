let keystone = require("keystone");
exports = module.exports = function(req, res) {
  let view = new keystone.View(req, res);
  let locals = res.locals;
  locals.data = {
    studentInCategory: []
  };

  //console.log(req.params.category);

  let studentInCategoryQuery = keystone
    .list("StudentScore")
    .model.find()
    .where("displayInCategories")
    .equals(req.params.category);

  studentInCategoryQuery.exec(function(err, result) {
    if (result != null) {
      console.log("result " + result);
      locals.data.studentInCategory = result;
    } else {
      console.log("Error " + err);
    }
  });

  // Render the view
  view.render("viewall");
};
