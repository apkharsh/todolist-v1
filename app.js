const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
var items = [];
// var newListItems=[];

app.get("/", function (req, res) {
    // res.send('Hello World!');
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Invalid Day";
    }
    // console.log(day);

    var tasks = ["gay","playing","working","gaming","sleeping","eating","jogging","reading","watching","swimming","walking"];

    var todayTask = Math.floor(Math.random() * (tasks.length));
    var task = tasks[todayTask];

    res.render("list", { kindOfDay: day, work: task, newListItems: items });
    
});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    //pushing items to array with each post request
    items.push(item);
    // names.push();
    // console.log(name);
    // redirecting to root and root will render the list.ejs
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
