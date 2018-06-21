var keystone = require("keystone");
var Types = keystone.Field.Types;

var ViewAllScore = new keystone.List("ViewAll", {
  label: "View All",
  autokey: { from: "studentName", path: "key", unique: true },
  map: { studentName: "key" }
});

ViewAllScore.add({
  displayInCategories: {
    type: Types.Select,
    numeric: true,
    options: [
      { label: "Top Scorer", value: 1 },
      { label: "Subject Highest", value: 2 },
      { label: "Growth Achieved", value: 3 }
    ],
    index: true,
    initial: true
  },
  title: { type: String, required: true, initial: true },
  studentImagePath: { type: String },
  studentName: { type: Types.Name, required: true, initial: true },
  courseOpted: {
    type: Types.Select,
    options: "10th, 9th, 8th, 7th, 6th, 5th, Grammar",
    initial: true
  },
  school: { type: String, required: true, initial: true }

  // examination: { type: String, required: true, initial: true },
  // percentScored: { type: Types.Number, required: true, initial: true },
  // studentRank: { type: Types.Number },
  // highestMarkWithSubjectName: {
  //   type: String
  // }
});

ViewAllScore.defaultColumns = "studentName,std,school,diplayInCategories";
ViewAllScore.register();
