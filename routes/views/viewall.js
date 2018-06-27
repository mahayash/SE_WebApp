let keystone = require("keystone");
exports = module.exports = function(req, res) {
  let view = new keystone.View(req, res);
  let locals = res.locals;
  locals.data = {
    studentInCategory: [],
    category: [],
    categoryStudentType: [],
    categoryTestimonialType: []
  };

  let categoryType = parseInt(req.params.category);
  switch (categoryType) {
    case 1:
      locals.data.category = "The Toppers";
      break;
    case 2:
      locals.data.category = "The Highest";
      break;
    case 3:
      locals.data.category = "The Achievers";
      break;
    case 4:
      locals.data.category = "Parent Says";
      break;
  }

  if (categoryType != 4) {
    let studentInCategoryQuery = keystone
      .list("ViewAll")
      .model.find()
      .where("displayInCategories")
      .equals(categoryType);

    view
      .query("viewAll", studentInCategoryQuery)
      .then(function(err, result, next) {
        if (err) return next(err);
        if (result != null) {
          locals.data.categoryStudentType = true;
          locals.data.studentInCategory = result;
        }
        next();
      });
  } else {
    var testimonial = keystone.list("Testimonial").model.find();
    view.query("testimonial", testimonial).then(function(err, result2, next) {
      if (err) return err;
      locals.data.categoryTestimonialType = true;
      locals.data.studentInCategory = result2;
      next();
    });
  }

  // Render the view
  view.render("viewall");
};

/*
    studentInCategoryQuery.exec(function(err, result) {
      if (result != null) {
        locals.data.categoryStudentType = true;
        locals.data.studentInCategory = result;
      } else {
        return res
          .status(404)
          .send(keystone.wrapHTMLError("Sorry, no records found"));
      }
    });
*/
