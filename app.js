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

//astitva page
const astitva = require("./Astitva");
app.use("/project-astitva", astitva);

//home page
const homePage = require("./Home");
app.use("/", homePage);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`server is now running on port ${PORT}`);
});
