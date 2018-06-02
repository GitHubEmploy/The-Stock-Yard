var db = require("../models")

module.exports = function(app) {
  app.post("/user", function(req, res) {
      
    //   console.log(req.body);
    db.user.create({
      user_name: req.body.user_name,
      password: req.body.password
    });
    
  });

  app.post("/api/second", function(req, res) {
    console.log(req.body);
    db.stocks
      .create({
        stock_name: req.body.position,

        qty: req.body.qty
      })
      .then(function(user_stocks) {
        res.json(user_stocks);
      });
  });
};


