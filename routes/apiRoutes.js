// var db = require("../models")

module.exports = function(app) {
  app.get("/api/", function(req, res) {
    db.user.findAll({}).then(function(user_name) {
      res.json(user_name);
    });
  });

  app.post("api/second", function(req, res) {
    console.log(req.body);
    db.stocks
      .create({
        stock_name: req.body.stock_name,
        qty: req.body.qty
      })
      .then(function(dbStocks) {
        res.json(dbStocks);
      });
  });
};


