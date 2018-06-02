module.exports = function(sequelize, DataTypes) {
    var Stock_List = sequelize.define("stocks_list", {
        
        symbol: DataTypes.STRING,
        company: DataTypes.STRING
    });
    return Stock_List;
};