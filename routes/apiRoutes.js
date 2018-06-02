var db = require("../models")

module.exports = function(app) {
  app.post("/user", function(req, res) {
      
    //   console.log(req.body);
    db.user.create({
      user_name: req.body.user_name,
      password: req.body.password
    });
    
  });

  app.post("/second", function(req, res) {
    console.log(req.body);
    db.Stocks.create({
        stock_name: req.body.stock_name,
        qty: req.body.qty
      })
      .then(function(user_stocks) {
        res.json(user_stocks);
      });
  });
};


