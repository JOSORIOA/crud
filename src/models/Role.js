//import sequelize
var Sequelize = require('sequelize');
// importing connectios database
var database = require('./database');

var Role = database.define('rol',{
  rolId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,

});


module.exports = Role;
