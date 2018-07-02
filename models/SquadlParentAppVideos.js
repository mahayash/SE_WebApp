var Keystone = require("keystone");
var Types = Keystone.Field.Types;

var squadlParent = new Keystone.List("SquadlParentAppVideos", {
  label: "SquadlParentAppVideos",
  autokey: { from: "VideoTitle", path: "key", unique: true }
});

squadlParent.add({
  videoTitle: { type: String, initial: true, required: true },
  videoUrl: { type: String, initial: true, required: true }
});

squadlParent.defaultColumns = "videoTitle, videoUrl";
squadlParent.register();
