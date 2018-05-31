var keystone = require("keystone");
var Types = keystone.Field.Types;

var ClearDoubt = new keystone.List("ClearDoubt", {
  nocreate: true,
  noedit: true
});

ClearDoubt.add({
  studentName: { type: Types.Name, required: true },
  phone: { type: String, required: true },
  courseStuyding: {
    type: Types.Select,
    require: true,
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
  message: { type: Types.Markdown, required: true },
  createdAt: { type: Date, default: Date.now }
});

ClearDoubt.defaultSort = "-createdAt";
ClearDoubt.defaultColumns = "studentName, phone, courseStuyding, message";
ClearDoubt.register();
