var express = require("express"),
  app = express();

app.set("view engine", "ejs");

var user = {
  firstname: "Ced",
  lastname: "Dav"
};
data = "<h1>About</h1>";
app.get("/", function(req, res) {
  res.render("home", { user: user });
});
app.get("/about", function(req, res) {
  res.render("about", { data: data });
});
var serverNum = 5005;
var server = app.listen(serverNum, function(err) {
  if (err) {
    console.log(err);
  }
  console.log(`App started, Port ${serverNum}`);
});
