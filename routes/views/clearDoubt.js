var keystone = require("keystone");
var ClearDoubt = keystone.list("ClearDoubt");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  console.log("clear doubt 1");

  locals.section = "forms";
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.courseStudying = ClearDoubt.fields.courseStudying.ops;
  locals.board = ClearDoubt.fields.board.ops;
  locals.doubtSubmitted = false;

  view.on("post", { action: "clearDoubt" }, function(next) {
    var newClearDoubt = new ClearDoubt.model();
    var updater = newClearDoubt.getUpdateHandler(req);

    updater.process(
      req.body,
      {
        flashErrors: true,
        required:
          "studentName,phoneNumber,courseStudying,board,subject,chapterName,writeYourDoubt",
        fields:
          "studentName,phoneNumber,courseStudying,board,subject,chapterName,writeYourDoubt",
        errorMessage:
          "There was a problem submitting your doubt"
      },
      function(err) {
        if (err) {
          locals.validationErrors = err.errors;
        } else {
          locals.doubtSubmitted = true;
        }
        next();
      }
    );
  });
  view.render("clearDoubt");
};
