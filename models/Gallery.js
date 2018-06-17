var keystone = require("keystone");
var Types = keystone.Field.Types;
var axios = require("axios");

var Gallery = new keystone.List("Gallery", {
  autokey: { from: "accessToken", path: "key", unique: true }
});

Gallery.add({
  accessToken: { type: String },
  publishedDate: { type: Date, default: Date.now }
});

Gallery.register();
