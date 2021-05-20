import React, { useEffect, useState  } from 'react';

import customerService from "../../services/Usuario"

function Form(){

  const [ name, setName ] = useState(null);
  const [ activo, setActivo ] = useState(null);
  const [ rolId, setrolId ] = useState(null);

  const [ error, setError ] = useState(null);

  const onClickSave = async () => {

    setError(null);

    if (name&&activo&&rolId) {

      const datapost = { name, activo, rolId }

      const res = await customerService.save(datapost)

      if (res.succes) {
        alert(res.message)
      }
      else {
        // setError(res)
        console.log(res);
      }

    }
    else {
      setError("Por favor, digitar todos los campos");
    }



  }

  return(
    <div>
      <h4>Información del usuario</h4>
      <hr/>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="firstName">Nombre</label>
          <input type="text" class="form-control" placeholder="Digite su nombre"
          onChange={(event)=>setName(event.target.value)} />
        </div>
      </div>

        <div class="form-group" >
          <label for="exampleFormControlSelect1">Rol</label>
          <select class="form-control" id="exampleFormControlSelect1" onChange={(event)=>setrolId(event.target.value)}>
            <option value="1" defaultValue={rolId==="1"}>1</option>
            <option vaulue="2" defaultValue={rolId==="2"}>2</option>
            <option value="3" defaultValue={rolId==="3"}>3</option>

          </select>
        </div>


<p>Activo</p>
<div class="form-check" onChange={(event)=>setActivo(event.target.value)}>
<div >
  <input class="form-check-input" type="radio" name="act" id="exampleRadios1" value="SI" defaultChecked={activo==="SI"} />
  <label class="form-check-label" for="exampleRadios1">
    Si
  </label>
</div>
<div>
  <input class="form-check-input" type="radio" name="act" id="exampleRadios3" value="NO" defaultChecked={activo==="NO"} />
  <label class="form-check-label" for="exampleRadios3">
    No
  </label>
  </div>
</div>



      {
        error&&
        <div class="alert alert-danger" role="alert">
          {error}

        </div>

      }
  <hr/>
      <div class="row">
        <div class="col-md-6 mb-3">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
          onClick={()=>onClickSave()}>Guardar</button>
        </div>
      </div>


    </div>
  )
}

export default Form;
