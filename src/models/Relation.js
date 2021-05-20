
var Sequelize = require('sequelize');

var database = require('./database');


var Customers = require('../models/Customer');
var Rols = require('../models/Role');
var Users = require('../models/Usuario');


Role.hasOne(Users);
Users.belongsTo(Role);