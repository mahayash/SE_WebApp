var Keystone = require("keystone");
var Types = Keystone.Field.Types;
var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

var Assignment = new Keystone.List("Assignment", {
  label: "Assignment",
  autokey: { from: "Assigment", path: "key", unique: true },
  defaultSort: "-Date"
});

Assignment.add({
  Name: { type: String, required: true, initial: true },
  Date: {
    type: Types.Datetime,
    default: Date.now,
    utc: false,
    format: "DD-MM-YYYY"
  },
  Subject: {
    type: Types.Select,
    options: [
      { value: "English", label: "English" },
      { value: "Hindi", label: "Hindi" },
      { value: "Marathi", label: "Marathi" },
      { value: "Algebra", label: "Algebra" },
      { value: "Geometry", label: "Geometry" },
      { value: "Science-1", label: "Science-1" },
      { value: "Science-2", label: "Science-2" },
      { value: "History & PS", label: "History & PS" },
      { value: "Geography", label: "Geography" },
      { value: "English Grammar", label: "English Grammar" },
      { value: "Hindi Grammar", label: "Hindi Grammar" },
      { value: "Marathi Grammar", label: "Marathi Grammar" }
    ]
  },
  ChapterNo: { type: String },
  AnswerLink: { type: String }
});

Assignment.defaultColumns = "Name, Date";
Assignment.register();
