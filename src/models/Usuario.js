//import sequelize
var Sequelize = require('sequelize');
// importing connectios database
var database = require('./database');

var Users = require('../models/Usuario');
var Role = require('../models/Role');

var Users = database.define('USUARIOSS',{
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: Sequelize.STRING,
    activo: Sequelize.CHAR,

  });

//Relación  usuario- rol

module.exports = Users;
