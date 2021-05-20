var Sequelize = require('sequelize');

const database = new Sequelize(
  'crud23', //name database
  'root', //user database
  'r00t', //password database
  {
    host: 'localhost',
    dialect: "mysql"
  }
);

database.sync()

module.exports = database;
