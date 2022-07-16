const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items = [];
var workItems = [];
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

// var tasks = ["gay", "not gay"];
// var todayTask = Math.floor(Math.random() * tasks.length);
// var task = tasks[todayTask];

app.get("/", function (req, res) {
    // res.send('Hello World!');

    // console.log(day);

    // var tasks = ["gay","playing","working","gaming","sleeping","eating","jogging","reading","watching","swimming","walking"];

    res.render("list", { listTitle: day, newListItems: items });
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItems: workItems });
});


app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{     
        items.push(item);
        res.redirect("/");
    }
    
    // console.log(req.body);
    //pushing items to array with each post request
    // items.push(item);
    // names.push();
    // console.log(name);
    // redirecting to root and root will render the list.ejs
    
});

// app.post("/work", function (req, res) {
//     var item = req.body.newItem;
//     //pushing items to array with each post request
//     workItems.push(item);
//     // names.push();
//     // redirecting to root and root will render the list.ejs
//     res.redirect("/work");
// });

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
