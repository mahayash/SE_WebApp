// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require("dotenv").config();

// Require keystone
var keystone = require("keystone");
var handlebars = require("express-handlebars");

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
  name: "SquareEducation",
  brand: "SquareEducation",
  sass: "public",
  static: "public",
  favicon: "public/favicon.ico",
  views: "templates/views",
  "view engine": ".hbs",
  "cookie secret": "sdfsfwe243wfggeryu977kyuhvcdfwvteyyruru67807iyj",
  "custom engine": handlebars.create({
    layoutsDir: "templates/views/layouts",
    partialsDir: "templates/views/partials",
    defaultLayout: "default",
    helpers: new require("./templates/views/helpers")(),
    extname: ".hbs"
  }).engine,
  "node-sass": "4.5.0",
  "node-sass-middleware": "0.11.0",
  "auto update": true,
  session: true,
  auth: true,
  "user model": "User",
  "trust proxy": true,
  port: 2001
});

// Load your project's Models
keystone.import("models");

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set("locals", {
  _: require("lodash"),
  env: keystone.get("env"),
  utils: keystone.utils,
  editable: keystone.content.editable
});

// Load your project's Routes
keystone.set("routes", require("./routes"));

// Configure the navigation bar in Keystone's Admin UI
keystone.set("nav", {
  Home: ["Home", "ViewAll", "testimonials"],
  galleries: "galleries",
  users: "users",
  forms: ["Feedback", "ClearDoubt", "Complaint","EnterMarks"],
  squadl: ["SquadlParentAppVideos", "SquadlAdminApp"],
  assignment: ["Assignment"]
});

// Start Keystone to connect to your database and initialise the web server
keystone.start();
