var keystone = require("keystone");
var Feedback = keystone.list("Feedback");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = "Feedback";
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.feedbackSubmitted = false;

  view.on("post", { action: "feedback" }, function(next) {
    var newFeedback = new Feedback.model();
    var updater = newFeedback.getUpdateHandler(req);

    updater.process(
      req.body,
      {
        flashErrors: true,
        fields: "name, phone, message",
        errorMessage: "There was a problem submitting your feedback:"
      },
      function(err) {
        if (err) {
          locals.validationErrors = err.errors;
        } else {
          locals.feedbackSubmitted = true;
        }
        next();
      }
    );
  });
  view.render("feedback");
};
