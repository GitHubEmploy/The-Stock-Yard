var Sequelize = require("sequelize");
// if (process.env.JAWSDB_URL){
    var sequelize = new Sequelize(process.env.JAWSDB_URL,{
        dialect:"mysql"
    });
// } else{
// var sequelize = new Sequelize("stockDB", "root", "", {
//     host: "localhost",
//     port: 3306,
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     }

// });
// }
module.exports = sequelize;
