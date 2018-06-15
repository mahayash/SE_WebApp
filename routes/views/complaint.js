var keystone = require("keystone");
var Complaint = keystone.list("Complaint");
var ClearDoubt = keystone.list("ClearDoubt");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = "forms";
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.courseStudying = ClearDoubt.fields.courseStudying.ops;
  locals.board = ClearDoubt.fields.board.ops;
  locals.complaintSubmitted = false;

  view.on("post", { action: "complaint" }, function(next) {
    var newComplaint = new Complaint.model();
    var updater = newComplaint.getUpdateHandler(req);

    updater.process(
      req.body,
      {
        flashErrors: true,
        required:
          "studentName,phoneNumber,courseStudying, board,describeComplaint",
        fields:
          "studentName,phoneNumber,courseStudying, board,describeComplaint",
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
