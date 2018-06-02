// var db = require("../models")

module.exports = function(app) {
  app.get("/second", function(req, res) {
    db.user.findAll({}).then(function(symbol) {
      res.json(symbol);
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


