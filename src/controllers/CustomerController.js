const controller = {}

// import model
var Customers = require('../models/Usuarios');
var Users = require('../models/Usuario');
var Role = require('../models/Role');
const User = require('../models/Usuarios');

controller.index = ( req, res ) => {

  const data = {
    message: "Practica"
  }
  res.render('usuario',data);

}







controller.testApi = async  (req, res) => {

  // const data = {
   //  succes: true,
    // message: "Succesful"

  // }
  const response = await User.findAll()
  .then(function(data){
    const res = { success: true, data: data }
    return res;
  })
  .catch(error =>{
    const res = { success: false, error: error }
    return res;
  })


   res.json(response)
 }

controller.create = async ( req, res ) => {

  try {

    const { name, activo, rolId } = req.body;

    const response = await User.create({
      name: name,
      activo: activo,
      rolId: rolId
    })
    .then(function(data){
      const res = { succes: true, data: data, message: "Guardado correctamente "}
      return res;
    })
    .catch(error=>{

      const res = { succes: false, message: error }
      return res;

    })

    res.json(response);

  } catch (e) {

    const response = { succes: false, message: e.message }
    res.json(response)

  }
}

controller.list = async ( req, res ) => {

  try {

    const response = await User.findAll()
    .then(function(data){
      const res = { succes: true, data: data }
      return res;
    })
    .catch(error => {
      const res = { succes: false, message: error }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { succes: false, message: e.message }
    res.json(response)

  }
}

controller.get = async ( req, res ) => {

  try {

    const { id } = req.params;

    const response = await User.findOne({
      where: { id: id }
    })
    .then(function(data){
      const res =  { success: true, data: data }
      return res;
    })
    .catch(error=>{
      const res = { success: false, message: error }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

controller.update = async ( req, res ) =>{

  try {

    // parameter get id
    const { id } = req.params;
    // parameter post
    const { name, activo, rolId} = req.body;
    // update data
    const response = await User.update({
      name: name,
      activo: activo,
      rolId: rolId
    },
    {
      where: {
        id: id
      }
    })
    .then(function(data){
      const res = { success: true, message: "Usuario actualizado correctamente" }
      return res;
    })
    .catch(error=>{
      const res = { success: false, message: error.message }
      return res;
    })

    res.json(response)

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

controller.delete = async (req, res) => {

  try {

    // parameter get id
    const { id } = req.params;
    // delete sequelize
    const response = await User.destroy({
      where: { id: id }
    })
    .then(function(data){
      const res = { success: true, deleted: data, message: "Usuario eliminado correctamente" }
      return res;
    })
    .catch(error=>{
      const res = { success: false, message: error.message }
      return res;
    })

    res.json(response);

  } catch (e) {

    const response = { success: false, message: e.message }
    res.json(response)

  }

}

module.exports = controller;
