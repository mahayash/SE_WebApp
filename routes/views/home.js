var keystone = require("keystone");

exports = module.exports = async function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  var spotLight = {};
  var storeResult = {};
  var topScore = {};
  var subjectHighest = {};
  var growthAchieved = {};
  var testimonial = {};

  // locals.section is used to set the currently selected
  // item in the header navigation.
  locals.section = "home";
  locals.data = {
    spotLight: [],
    topScore: [],
    subjectHighest: [],
    growthAchieved: [],
    testimonial: []
  };

  var studentScore = keystone
    .list("Home")
    .model.find()
    .sort("displayInCategories");

  view.query("home", studentScore).then(function(err, result1, next) {
    var topScorerIndex = 0,
      subjectHighestIndex = 0,
      growthAchievedIndex = 0;
    testimonialIndex = 0;
    spotLightIndex = 0;

    if (err) return next(err);
    if (result1 != null && result1.length > 0) {
      for (let index = 0; index < result1.length; index++) {
        const element = result1[index];
        switch (element.displayInCategories) {
          case 0:
            if (spotLightIndex <= 4) {
              spotLight[spotLightIndex] = element;
              spotLightIndex++;
            } else {
              break;
            }
            break;
          case 1:
            if (topScorerIndex <= 3) {
              topScore[topScorerIndex] = element;
              topScorerIndex++;
            } else {
              break;
            }
            break;
          case 2:
            if (subjectHighestIndex <= 3) {
              subjectHighest[subjectHighestIndex] = element;
              subjectHighestIndex++;
            } else {
              break;
            }
            break;
          case 3:
            if (growthAchievedIndex <= 3) {
              growthAchieved[growthAchievedIndex] = element;
              growthAchievedIndex++;
            } else {
              break;
            }
            break;
          case 4:
            if (testimonialIndex <= 2) {
              testimonial[testimonialIndex] = element;
              testimonialIndex++;
            } else {
              break;
            }
            break;
        }
      }

      locals.data.spotLight = spotLight;
      locals.data.topScore = topScore;
      locals.data.subjectHighest = subjectHighest;
      locals.data.growthAchieved = growthAchieved;
      locals.data.testimonial = testimonial;
    }
    next();
  });

  // Render the view
  view.render("home");
};

// get the list of all student score
// var studentScore = keystone
//   .list("Home")
//   .model.find()
//   .sort("displayInCategories")
//   .exec(function(err, result1) {
//     var topScorerIndex = 0,
//       subjectHighestIndex = 0,
//       growthAchievedIndex = 0;
//     testimonialIndex = 0;
//     spotLightIndex = 0;

//     if (result1 != null && result1.length > 0) {
//       for (let index = 0; index < result1.length; index++) {
//         const element = result1[index];
//         switch (element.displayInCategories) {
//           case 0:
//             if (spotLightIndex <= 4) {
//               spotLight[spotLightIndex] = element;
//               spotLightIndex++;
//             } else {
//               break;
//             }
//             break;
//           case 1:
//             if (topScorerIndex <= 3) {
//               topScore[topScorerIndex] = element;
//               topScorerIndex++;
//             } else {
//               break;
//             }
//             break;
//           case 2:
//             if (subjectHighestIndex <= 3) {
//               subjectHighest[subjectHighestIndex] = element;
//               subjectHighestIndex++;
//             } else {
//               break;
//             }
//             break;
//           case 3:
//             if (growthAchievedIndex <= 3) {
//               growthAchieved[growthAchievedIndex] = element;
//               growthAchievedIndex++;
//             } else {
//               break;
//             }
//             break;
//           case 4:
//             if (testimonialIndex <= 2) {
//               testimonial[testimonialIndex] = element;
//               testimonialIndex++;
//             } else {
//               break;
//             }
//             break;
//         }
//       }

//       locals.data.spotLight = spotLight;
//       locals.data.topScore = topScore;
//       locals.data.subjectHighest = subjectHighest;
//       locals.data.growthAchieved = growthAchieved;
//       locals.data.testimonial = testimonial;
//     } else {
//       console.log("data not found ");
//     }
//   });
