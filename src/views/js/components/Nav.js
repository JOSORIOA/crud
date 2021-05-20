import React from 'react';
import { Link } from "react-router-dom";

function Nav(){
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="btn btn-outline-success my-2 my-sm-0"  to="/usuario/index">Lista </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/usuario/form"></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/usuario/edit/5"></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Nav;
