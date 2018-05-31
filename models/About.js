var Keystone = require("keystone");
var Types = Keystone.Field.Types;

var About = new Keystone.List("About", {
  label: "About",
  autokey: { from: "about", path: "key", unique: true }
});

About.add({
  facultyName: { type: Types.Name, required: true, initial: true },
  facultyImage: { type: String },
  teachingExperience: { type: Types.Number },
  profession: { type: String },
  team: { type: Types.Select, options: "Foundation, Pillars" }
});

About.defaultColumns = "facultyName, teachingExperience";
About.register();
