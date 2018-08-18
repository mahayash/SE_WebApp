var keystone = require("keystone");
var ClearDoubt = keystone.list("ClearDoubt");
var EnterMarks = keystone.list("EnterMarks");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = "forms";
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.courseStudying = ClearDoubt.fields.courseStudying.ops;
  locals.board = ClearDoubt.fields.board.ops;
  locals.enterMarksSubmitted = false;

  //On form submission
  view.on("post", { action: "enterMarks" }, function(next) {
    var newEnterMarks = new EnterMarks.model();
    var updater = newEnterMarks.getUpdateHandler(req);
    console.log(req.body);

    updater.process(
      req.body,
      {
        flashErrors: false,
        required: "studentName,phoneNumber,courseStudying,board, examName",
        fields: `
        studentName,phoneNumber,board,courseStudying,examName,schoolName,
        english.marksObtained,english.totalMarks,english.classHighest,english.comments,
        hindi.marksObtained,hindi.totalMarks,hindi.classHighest,hindi.comments,
        marathi.marksObtained,marathi.totalMarks,marathi.classHighest,marathi.comments,
        history.marksObtained,history.totalMarks,history.classHighest,history.comments,
        geography.marksObtained,geography.totalMarks,geography.classHighest,geography.comments,
        maths.marksObtained,maths.totalMarks,maths.classHighest,maths.comments,
        algebra.marksObtained,algebra.totalMarks,algebra.classHighest,algebra.comments,
        geometry.marksObtained,geometry.totalMarks,geometry.classHighest,geometry.comments,
        science.marksObtained,science.totalMarks,science.classHighest,science.comments,
        science1.marksObtained,science1.totalMarks,science1.classHighest,science1.comments,
        science2.marksObtained,science2.totalMarks,science2.classHighest,science2.comments`,
        errorMessage: "There was a problem submitting the Marks"
      },
      function(err) {
        if (err) {
          locals.validationErrors = err.errors;
        } else {
          locals.enterMarksSubmitted = true;
        }
        next();
      }
    );
  });
  view.render("enterMarks"); // redirect to enterMarks.hbs
};
