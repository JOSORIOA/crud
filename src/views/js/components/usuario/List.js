import React, { useEffect, useState  } from 'react';

import customerService from "../../services/Usuario"

import { Link } from 'react-router-dom';
import swal from 'sweetalert';

function List(){

  const [ listCustomer, setListCustomer ] = useState([]);
  const [ isLoading, setLoading ] = useState(false);
  const [ messageDeleted, setMessageDelete ] = useState(null);

  useEffect(()=>{

    async function fetchDataCustomer(){
      const res = await customerService.list()
      if (res.succes) {
        setListCustomer(res.data)
      }
    }

    fetchDataCustomer();

  },[])

  const onClickDelete = (data) => {

    swal({
      title: "Are you sure you to delete this?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setDeleteCustomer(data)
      }
    });

  }

  const setDeleteCustomer = async (data) => {

    console.log(data);
    console.log(data.i);
    const item = data.item
    const res = await customerService.delete(item.id)
    if (res.success) {
      const newList = listCustomer
      newList.splice(data.i,1) //aca es diferente id
      setListCustomer(newList);
      setMessageDelete("El usuario "+data.item.name+" fue eliminado!")
    }
    else {
      console.log(res);
    }

  }




  return (
    <section>

      {
        messageDeleted&&
        <div class="alert alert-success alert-dismissible fade show" role="alert">
           {messageDeleted}.
          <button onClick={()=>setMessageDelete(null)}
          type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true" onClick={()=>setMessageDelete(null)}>&times;</span>
          </button>
        </div>
      }



<nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Busqueda por nombre" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Consultar</button>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Limpiar</button>

  </form>
</nav>


<hr/>
      <h4>Lista de usuarios</h4>
      <div class="row">
        <div class="col-md-6 mb-3">
          <Link to={"/usuario/form/"} class="btn btn-outline-success my-2 my-sm-0"> Crear </Link>
        </div>
      </div>
      <table class="table">
        <thead class="thead-dark table-bordered">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Activo</th>
            <th scope="col">Rol</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

          {
            listCustomer.map((item,i)=>{
              return(
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.activo}</td>
                  <td>{item.rolId}</td>
                  <td>
                    <Link to={"/usuario/edit/"+item.id} class="btn btn-outline-success my-2 my-sm-0"> Editar </Link>

                    <a onClick={()=>onClickDelete({ item, i })}
                    href="#" class="btn btn-outline-danger"> Eliminar </a>

                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </section>
  )
}

export default List;
