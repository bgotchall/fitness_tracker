const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//var config = require(__dirname + "/../config/config.json")[env];


const PORT = process.env.PORT || 3000;

const app = express();

//app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//mongodb://<dbuser>:<dbpassword>@ds111940.mlab.com:11940/heroku_6n40kbwb

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

//init the database:
//app.use(require("./seeders/seed.js"));   //I was able to just run this by itself, with some modifications

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
