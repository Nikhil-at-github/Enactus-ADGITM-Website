var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");

var app = express();

app.use(bodyParser.json());
app.use(express.static("."));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("view engine", "html");

const astitva = require("./Astitva/");
//astitva page
app.use("/project-astitva", astitva);

//home page
const homePage = require("./Home");
app.use("/", homePage);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
