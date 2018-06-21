var keystone = require("keystone");
var Types = keystone.Field.Types;

var Feedback = new keystone.List("Feedback", {
  nocreate: true,
  noedit: true
});

Feedback.add({
  parentName: { type: Types.Name, required: true },
  studentName: { type: Types.Name, required: true },
  standardStudying: { type: String },
  board: { type: String },
  feekbackMessage: { type: Types.Markdown, required: true },
  createdAt: { type: Date, default: Date.now }
});

Feedback.defaultSort = '-createdAt';
Feedback.defaultColumns = 'parentName, studentName, feekbackMessage, createdAt';
Feedback.register();
