import React, { useEffect, useState  } from 'react';

import customerService from "../../services/Usuario"

import swal from 'sweetalert';

function Edit(props){

  const [ id, setId ] = useState(null);
  const [ name, setName ] = useState(null);
  const [ activo, setActivo ] = useState(null);
  const [ id_rol, setId_rol ] = useState(null);
  useEffect(()=>{

    async function fetchDataCustomer(){

        let id = props.match.params.id;
        const res = await customerService.get(id);

        if (res.success&&res.data) {

          const data = res.data
          console.log(data);
          setId(data.id)
          setName(data.name)
          setActivo(data.activo)
          setId_rol(data.rolId)
        }

      }
      fetchDataCustomer();

  },[]);

  const onClickUpdate = async () => {

    const data = { id, name, activo, rolId }

    const res = await customerService.update(data);

    if (res.success) {
      swal(res.message, " ", "success");
    }
    else {
      swal("Error !",""+JSON.stringify(res.message), "error");
    }

  }

  return (
    <div>
      <h4>Editar usuario{id}</h4>
      <hr/>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Nombre</label>
          <input type="text" class="form-control" placeholder="Digite su nombre" value={name}
          onChange={(event)=>setName(event.target.value)} />
        </div>
      </div>



      <div class="form-group" >
        <label for="exampleFormControlSelect1">Rol</label>
        <select class="form-control" id="exampleFormControlSelect1" onChange={(event)=>setId_rol(event.target.value)}>
          <option value="1" defaultValue={rolId==="1"}>1</option>
          <option vaulue="2" defaultValue={rolId==="2"}>2</option>
          <option value="3" defaultValue={rolId==="3"}>3</option>

        </select>
      </div>

      <p>Activo</p>
      <div class="form-check" onChange={(event)=>setActivo(event.target.value)}>

      <div>
        <input class="form-check-input" type="radio" name="act" id="exampleRadios1" value="SI" defaultChecked={activo ==="SI"} />
        <label class="form-check-label" for="exampleRadios1">
          Si
        </label>
        </div>
        <div>
        <input class="form-check-input" type="radio" name="act" id="exampleRadios3" value="NO" defaultChecked={activo ==="NO"} />
        <label class="form-check-label" for="exampleRadios3">
          No
        </label>
        </div>
      </div>

      <hr/>

      <div class="row">
        <div class="col-md-6 mb-3">
          <button onClick={()=>onClickUpdate()}
          class="btn btn-outline-success my-2 my-sm-0" type="submit">Guardar</button>
        </div>
      </div>
    </div>
  )

}

export default Edit;
