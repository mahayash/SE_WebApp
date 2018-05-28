var keystone = require("keystone");
var Types = keystone.Field.Types;

var Feedback = new keystone.List("Feedback", {
  nocreate: true,
  noedit: true
});

Feedback.add({
  name: { type: Types.Name, required: true },
  phone: { type: String, require: true },
  message: { type: Types.Markdown, required: true },
  createdAt: { type: Date, default: Date.now }
});

Feedback.defaultSort = '-createdAt';
Feedback.defaultColumns = 'name, phone, message, createdAt';
Feedback.register();
