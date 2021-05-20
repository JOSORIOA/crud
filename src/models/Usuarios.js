//import sequelize
var Sequelize = require('sequelize');
// importing connectios database
var database = require('./database');
var Role = require('../models/Role');
var User = database.define('usuarios',
    {
      name: {
      type: Sequelize.STRING(40),
      allowNull: false,
      unique: {
          msg: 'El email necesita ser unico'
      }


  },
        activo: Sequelize.CHAR,
        rolId: Sequelize.INTEGER
    });

    //References usuario- rol

  //  Role.hasOne(User);
  //  User.belongsTo(Role);

  
module.exports = User;
