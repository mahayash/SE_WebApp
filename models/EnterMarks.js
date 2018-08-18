// Name, Phone#, School, Std, Exam, Subjectwise marks obtained / outoff, Comments
var keystone = require("keystone");
var Types = keystone.Field.Types;

var enterMarkList = new keystone.List("EnterMarks", {
  nocreate: false,
  noedit: true
});

enterMarkList.add({
  studentName: { type: Types.Name, required: true, initial: true },
  phoneNumber: { type: Types.Text },
  schoolName: { type: Types.Text },
  examName: { type: Types.Text },
  board: {
    type: Types.Select,
    options: [
      { value: "SSC", label: "SSC Board" },
      { value: "CBSE", label: "CBSE Board" }
    ]
  },
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
  english: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  hindi: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  marathi: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  history: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  geography: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  maths: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  algebra: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  geometry: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  science: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  science1: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  science2: {
    marksObtained: { type: Types.Text },
    totalMarks: { type: Types.Text },
    classHighest: { type: Types.Text },
    comments: { type: Types.Text }
  },
  createdAt: { type: Date, default: Date.now }
});

enterMarkList.defaultSort = "-createdAt";
enterMarkList.defaultColumns =
  "studentName, school, board, courseStudying, examName";
enterMarkList.register();
