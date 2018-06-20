var keystone = require("keystone");
var Types = keystone.Field.Types;

var Home = new keystone.List("Home", {
  label: "Home",
  autokey: { from: "home", path: "key", unique: true }
});

Home.add({
  displayInCategories: {
    type: Types.Select,
    numeric: true,
    options: [
      { label: "SpotLight", value: 0 },
      { label: "The Topper", value: 1 },
      { label: "The Highest", value: 2 },
      { label: "The Achievers", value: 3 },
      { label: "Parent Says", value: 4 }
    ],
    initial: true,
    require: true
  },
  imagePath: { type: String },
  studentName: { type: Types.Name },
  title: { type: String },
  courseOpted: {
    type: Types.Select,
    options: "10th, 9th, 8th, 7th, 6th, 5th, Grammar"
  },
  school: { type: String },
  studentRank: { type: Types.Number },
  parentName: { type: Types.Name },
  relationWithStudent: {
    type: Types.Select,
    options: "Father, Mother, Guardian, Relative, Friend"
  },
  testimonial: { type: Types.Textarea }
});

Home.defaultColumns = "displayInCategories,studentName,parentName,testimonial";
Home.register();
