const baseUrl = "http://localhost:3000/api/usuario"
import axios from "axios";
const usuario = {};

usuario.save = async (data) => {
  const urlSave = baseUrl+"/create"
  const res = await axios.post(urlSave,data)
  .then(response=>{ return response.data })
  .catch(error=>{ return error;

  }
  )
  return res;
}

usuario.list = async () => {

  const urlList = baseUrl+"/list"
  const res = await axios.get(urlList)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })
  return res;

}

usuario.get = async (id) => {

  const urlGet = baseUrl+"/get/"+id
  const res = await axios.get(urlGet)
  .then(response=>{ return response.data })
  .catch(error=>{ return error; })

  return res;

}

usuario.update = async (data) => {

  const urlUpdate = baseUrl+"/update/"+data.id
  const res = await axios.put(urlUpdate,data)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;

}

usuario.delete = async (id) => {
  const urlDelete = baseUrl+"/delete/"+id
  const res = await axios.delete(urlDelete)
  .then(response=>{ return response.data; })
  .catch(error=>{ return error; })
  return res;
}

export default usuario;
