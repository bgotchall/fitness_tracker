const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
    required: true
  },
  exercises: [{
    type: {
      type: String,
      enum: ['resistance', 'cardio']
    },
    name: {
      type:String,
    },
    duration:{
      type:Number,
      min: [0, 'Enter a positive number']
    },
    weight:{
      type:Number,
      min: [0, 'Enter a positive number']
    },
    reps:{
      type:Number,
      min: [0, 'Enter a positive number']
    },
    sets:{
      type:Number,
      min: [0, 'Enter a positive number']
    }
  }]
});

const Workout = mongoose.model("Workout", workoutSchema);  //mongoose pluralizes the collection name
module.exports = Workout;

