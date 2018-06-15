var keystone = require("keystone");
var Types = keystone.Field.Types;

var clearDoubt = new keystone.List("ClearDoubt", {
  nocreate: true,
  noedit: true
});

clearDoubt.add({
  studentName: { type: Types.Name },
  phoneNumber: { type: Types.Text },
  courseStudying: {
    type: Types.Select,
    options: [
      { value: "10", label: "Tenth" },
      { value: "9", label: "Ninth" },
      { value: "8", label: "Eighth" },
      { value: "7", label: "Seventh" },
      { value: "6", label: "Sixth" },
      { value: "5", label: "Fifth" },
      { value: "Grammar", label: "Grammar" }
    ]
  },
  board: {
    type: Types.Select,
    options: [
      { value: "SSC", label: "SSC Board" },
      { value: "CBSE", label: "CBSE Board" }
    ]
  },
  subject: { type: Types.Text },
  chapterName: { type: Types.Text },
  writeYourDoubt: { type: Types.Markdown },
  createdAt: { type: Date, default: Date.now }
});

clearDoubt.defaultSort = "-createdAt";
clearDoubt.defaultColumns =
  "studentName, courseStudying, subject, chapterName, writeYourDoubt";
clearDoubt.register();
