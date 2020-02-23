const router = require("express").Router();
var path = require("path");
const Workout = require("../models/workout.js");

// router.post("/api/workouts", ({ body }, res) => {
//     console.log(`attempting to post ${body}`)
//     Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });


router.post("/api/workouts", (req, res) => {
    //console.log(`attempting to post ${JSON.stringify(req)}`)
    console.log("posting");
    Workout.create({})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body, "put")
    Workout.update(
        {_id: req.params.id}, { $set: { exercises: req.body } },
        
        (error, data) => {
            if (error) {
              console.log(error);
              res.send(error);
            } else {
              console.log(data);
              res.send(data);
            }
          }
    )
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

//is this just a copy of /api/workouts?  both seem to want all
router.get("/api/workouts/range", (req, res) => {
    console.log("getting a range of workouts");
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
           // console.log(`result is ${JSON.stringify(dbWorkout)}`)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});




router.get("/api/workouts", (req, res) => {
    console.log("getting last workout");
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
           // console.log(`result is ${JSON.stringify(dbWorkout)}`)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//ordinary page routes here
router.get("/stats", function(req, res) {
    console.log("sending stats page");
    res.sendFile(path.join(__dirname, "..\\public\\stats.html"));
  });

  router.get("/exercise", function(req, res) {
    console.log("sending excercise page");
    res.sendFile(path.join(__dirname, "..\\public\\exercise.html"));
  });

  

module.exports = router;
