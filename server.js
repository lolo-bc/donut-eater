var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));


app.set("view engine", "handlebars");

var routes = require("./controllers/burger-controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log(PORT);
});
