var keystone = require("keystone");
var Types = keystone.Field.Types;

var Complaint = new keystone.List("Complaint", {
  nocreate: true,
  noedit: true
});

Complaint.add({
  studentName: { type: Types.Name, required: true },
  phoneNumber: { type: Types.Text, require: true },
  courseStudying: { type: String },
  board: { type: String },
  describeComplaint: { type: Types.Markdown, required: true },
  attemptToResolve: { type: Types.Markdown, required: true },
  seekResolution: { type: Types.Markdown, required: true },
  createdAt: { type: Date, default: Date.now }
});

Complaint.defaultSort = "-createdAt";
Complaint.defaultColumns = "name, describeComplaint, createdAt";
Complaint.register();
