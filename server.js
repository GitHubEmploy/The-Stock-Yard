var express = require("express");
var bodyParser = require("body-parser");
var exphbs  = require('express-handlebars');
var path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/second', function (req, res) {
  res.render('secondary');

});

app.get('/', function (req, res) {
  res.render('index');

});


var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES

// require("./routes/apiRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
