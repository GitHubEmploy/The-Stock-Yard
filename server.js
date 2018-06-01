var express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
var path = require("path");
var db = require("./models")

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
