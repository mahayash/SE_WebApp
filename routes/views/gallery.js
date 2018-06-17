var keystone = require("keystone");
var https = require("https");
var axios = require("axios");

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);

  var locals = res.locals;

  // Set locals
  locals.section = "gallery";


  //https://jsonplaceholder.typicode.com/users
  keystone.init(
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        console.log("response 1 " + response.data[1]);
        console.log("response " + response.data);
      })
      .catch(function(error) {
        console.log("error " + error);
      })
  );
  // Render the view
  view.render("gallery");
};
