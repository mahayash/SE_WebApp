var keystone = require("keystone");
var Types = keystone.Field.Types;

var Complaint = new keystone.List("Complaint", {
  nocreate: true,
  noedit: true
});

Complaint.add({
  name: { type: Types.Name, required: true },
  phoneNumber: { type: String, require: true },
  message: { type: Types.Markdown, required: true },
  createdAt: { type: Date, default: Date.now }
});

Complaint.defaultSort = '-createdAt';
Complaint.defaultColumns = 'name, phoneNumber, message, createdAt';
Complaint.register();
