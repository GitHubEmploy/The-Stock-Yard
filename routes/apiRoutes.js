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
    db.stocks.create({
        stock_name: req.body.stock_name,
        qty: req.body.qty
      })
      .then(function(userStocks) {
        res.json(userStocks);
      });
  });

  app.get("api/stock", function(req,res){
      res.json(stockData);
      console.log(res);
  })

};


