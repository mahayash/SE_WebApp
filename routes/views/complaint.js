var keystone = require("keystone");
var Complaint = keystone.list("Complaint");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = "forms";
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.complaintSubmitted = false;

  view.on("post", { action: "complaint" }, function(next) {
    var newComplaint = new Complaint.model();
    var updater = newComplaint.getUpdateHandler(req);

    updater.process(
      req.body,
      {
        flashErrors: true,
        errorMessage: "There was a problem submitting your complaint:"
      },
      function(err) {
        if (err) {
          locals.validationErrors = err.errors;
        } else {
          locals.complaintSubmitted = true;
        }
        next();
      }
    );
  });
  view.render("complaint");
};
