var keystone = require("keystone");
var Types = keystone.Field.Types;

var Feedback = new keystone.List("Feedback", {
  nocreate: true,
  noedit: true
});

Feedback.add({
  name: { type: Types.Name, required: true },
  phoneNumber: { type: String, require: true },
  message: { type: Types.Markdown, required: true },
  createdAt: { type: Date, default: Date.now }
});

Feedback.defaultSort = '-createdAt';
Feedback.defaultColumns = 'name, phoneNumber, message, createdAt';
Feedback.register();
