var Keystone = require("keystone");
var Types = Keystone.Field.Types;

var Center = new Keystone.List("Center", {
  label: "Center",
  autokey: { from: "center", path: "key", unique: true }
});

Center.add({
  centerName: { type: String },
  inChargeName: { type: Types.Name, required: true, initial: true },
  inChargeImage: { type: String },
  phone: { type: String },
  address: { type: String },
  timing: { type: String },
  mapUrl: { type: String }
});

Center.defaultColumns = "centerName, inChargeName, phone, address";
Center.register();
