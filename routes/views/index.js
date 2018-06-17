var keystone = require("keystone");

exports = module.exports = async function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  var StoreResult = {};
  var topScore = {};
  var subjectHighest = {};
  var growthAchieved = {};

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = "home";
  locals.data = {
    topScore: [],
    subjectHighest: [],
    growthAchieved: [],
    testimonial: []
  };

  // get the list of all student score
  var studentScore = keystone
    .list("ViewAll")
    .model.find()
    .sort("displayInCategories");
  studentScore.exec(function(err, result1) {
    var topScorerIndex = 0,
      subjectHighestIndex = 0,
      growthAchievedIndex = 0;

    for (let index = 0; index < result1.length; index++) {
      const element = result1[index];
      switch (element.displayInCategories) {
		case 1:
          topScore[topScorerIndex] = element;
          topScorerIndex++;
          break;
        case 2:
          subjectHighest[subjectHighestIndex] = element;
          subjectHighestIndex++;
          break;
        case 3:
          growthAchieved[growthAchievedIndex] = element;
          growthAchievedIndex++;
          break;
      }
    }

    locals.data.topScore = topScore;
    locals.data.subjectHighest = subjectHighest;
    locals.data.growthAchieved = growthAchieved;
  });

  var testimonial = keystone.list("Testimonial").model.find().limit(3);
  testimonial.exec(function(err, result2) {
    locals.data.testimonial = result2;
  });

  // Render the view
  view.render("index");
};
