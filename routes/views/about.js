var keystone = require("keystone");

exports = module.exports = function(req, res) {
  let view = new keystone.View(req, res);
  let locals = res.locals;
  let pillarTeamVal = {};
  let foundationTeamVal = {};
  let pillarIndex = 0;
  let foundationIndex = 0;

  locals.data = {
    foundationTeam: [],
    pillarTeam: []
  };

  // locals.section is used to set the currently selected
  // item in the header navigation.
  //locals.section = "about";
  var aboutTeam = keystone
    .list("About")
    .model.find()
    .sort("team");
  aboutTeam.exec(function(err, result) {
    for (let index = 0; index < result.length; index++) {
      let teamIndex = result[index].team;
      const element = result[index];
      if (teamIndex == 0) {
        foundationTeamVal[foundationIndex] = element;
        foundationIndex++;
      } else if (teamIndex == 1) {
        pillarTeamVal[pillarIndex] = element;
        pillarIndex++;
      }
    }
  });

  locals.data.pillarTeam = pillarTeamVal;
  locals.data.foundationTeam = foundationTeamVal;

  // TODO Render the view ( use Markdown file)
  view.render("about");
};
