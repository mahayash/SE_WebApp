var Keystone = require("keystone");
var Types = Keystone.Field.Types;

var Assignment = new Keystone.List("Assignment", {
  label: "Assignment",
  autokey: { from: "Assigment", path: "key", unique: true },
  defaultSort: '-Date'
});

Assignment.add({
  Name: { type: String, required: true, initial: true },
  Date: { type: Types.Datetime, default: Date.now, utc: false ,format: 'DD-MM-YYYY'},
  Subject: {
    type: Types.Select,
    options: [
      { value: "1", label: "English" },
      { value: "2", label: "Hindi" },
      { value: "3", label: "Marathi" },
      { value: "4", label: "Algebra" },
      { value: "5", label: "Geometry" },
      { value: "6", label: "Science-1" },
      { value: "7", label: "Science-2" },
      { value: "8", label: "History & PS" },
      { value: "9", label: "Geography" },
      { value: "10", label: "English Grammar" },
      { value: "11", label: "Hindi Grammar" },
      { value: "12", label: "Marathi Grammar" }
    ]
  },
  ChapterNo: { type: String },
  AnswerLink: { type: String }
});

Assignment.defaultColumns = "Name, Date";
Assignment.register();
