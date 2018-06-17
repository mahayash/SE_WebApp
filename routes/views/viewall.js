let keystone = require("keystone");
exports = module.exports = function(req, res) {
  let view = new keystone.View(req, res);
  let locals = res.locals;
  locals.data = {
    studentInCategory: [],
    category: []
  };

  switch (parseInt(req.params.category)) {
    case 1:
      locals.data.category = "The Toppers";
      break;
    case 2:
      locals.data.category = "The Highest";
      break;
    case 3:
      locals.data.category = "The Achievers";
      break;
  }

  let studentInCategoryQuery = keystone
    .list("StudentScore")
    .model.find()
    .where("displayInCategories")
    .equals(req.params.category);

  studentInCategoryQuery.exec(function(err, result) {
    if (result != null) {
      locals.data.studentInCategory = result;
    } else {
      return res
        .status(404)
        .send(keystone.wrapHTMLError("Sorry, no records found"));
    }
  });

  // Render the view
  view.render("viewall");
};
