const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["buy food", "eat food"];
let workItems = [];

app.set("view engine", "ejs");
//use ejs tells the app.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
  let day = date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
  console.log(item);
  // setTimeout(function(){console.log("Yep");},1000);
  //grabbed using bodyParser
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
/*
app.get("/", function (req, res) {
  var today = new Date();
  var curr_day = today.getDay();
  var day = "";

  //   if (curr_day === 6 || curr_day === 0) {
  //     day = "the weekend..yay!";
  //   } else {
  //     day = "a weekday...alas!";
  //     // res.write("<p>Alas! It is a not the weekend.</p>");
  //     // res.write("<p>It is a workday</p>");
  //     // res.send();
  //   }
  if (curr_day === 6) {
    day = "Saturday";
  }
  if (curr_day === 0) {
    day = "Sunday";
  }
  if (curr_day === 1) {
    day = "Monday ...alas!";
  }
  if (curr_day === 2) {
    day = "Tuesday";
  }
  if (curr_day === 3) {
    day = "Wednesday";
  }
  if (curr_day === 4) {
    day = "Thursday";
  }
  if (curr_day === 5) {
    day = "Friday..You are almost there!";
  }
  res.render("list", { kindofDay: day });
  //this line of code looks into the views folder for a ejs file named list.
});
*/
