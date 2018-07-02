var Keystone = require("keystone");
var Types = Keystone.Field.Types;

var squadlAdmin = new Keystone.List("SquadlAdminApp", {
  label: "SquadlAdmin",
  autokey: { from: "VideoTitle", path: "key", unique: true }
});

squadlAdmin.add({
  videoTitle: { type: String },
  videoUrl: { type: String }
});

squadlAdmin.defaultColumns = "videoTitle, videoUrl";
squadlAdmin.register();
