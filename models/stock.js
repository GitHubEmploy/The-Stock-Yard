

module.exports = function(sequelize, DataTypes) {
    var Stocks = sequelize.define("stocks", {
        
        stock_name: DataTypes.STRING,
        qty: DataTypes.INTEGER
    });
    return Stocks;
};