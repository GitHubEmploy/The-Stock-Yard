module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
        user_name: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return User;
};